(ns example.pipeline
  #?(:cljs (:require-macros
            [cljs.core.async.macros :as m :refer [go alt!]]))

  (:require

    [tiltontec.cell.base :refer [cells-init unbound ia-type]]
    #?(:clj [tiltontec.cell.core :refer :all]
       :cljs [tiltontec.cell.core
              :refer-macros [cF cFn] :refer [cI]])
    [tiltontec.cell.observer :refer [observe-by-type]]

    #?(:clj [tiltontec.model.core :as md
     :refer [the-kids make <mget mset!> mswap!>]]
       :cljs [tiltontec.model.core
              :refer-macros [the-kids mdv!]
              :refer [fget <mget fasc fm! make mset!> backdoor-reset!]
              :as md])

    [tiltontec.util.core :as util :refer [pln now ]]
    #?(:clj [clojure.core.async :refer [timeout buffer dropping-buffer sliding-buffer put! take! chan promise-chan
                                        close!   offer! poll! <! >! alts!]]
       :cljs [cljs.core.async
              :refer [timeout buffer dropping-buffer sliding-buffer put! take! chan promise-chan
               close! take partition-by offer! poll! <! >! alts!] :as async])
    #?(:clj [clojure.data.int-map :as i])))

#_ (ns cljs.core.async.tests
     (:require-macros
       [cljs.core.async.macros :as m :refer [go alt!]])
     (:require
       [cljs.core.async :refer
        [buffer dropping-buffer sliding-buffer put! take! chan promise-chan
         close! take partition-by offer! poll! <! >! alts!] :as async]
       [cljs.core.async.impl.dispatch :as dispatch]
       [cljs.core.async.impl.buffers :as buff]
       [cljs.core.async.impl.timers :as timers :refer [timeout]]
       [cljs.core.async.impl.protocols :refer [full? add! remove!]]
       [cljs.core.async.test-helpers :refer [latch inc!]]
       [cljs.test :as test :refer-macros [deftest is run-tests async testing]]))

(defn pipe-segs [pipe]
  (<mget pipe :kids))

(defn pipe-seg-by-id [pipe id]
  (get (:seg-id-map @pipe) id))

(defn pseg-pipe [seg]
  (:par @seg))

(defn pseg-id [seg]
  (:id @seg))

(defn pseg-in-rq [seg]
  (:in-rq @seg))

(defn pseg-in-ak [seg]
  (:in-ak @seg))

(defn pseg-in-data [seg]
  (:in-data @seg))

(defn pseg-next-seg [seg]
  (pipe-seg-by-id (pseg-pipe seg) (inc (pseg-id seg))))

(defn pseg-pipe-out-data [seg]
  (:out-data @(pseg-pipe seg)))

(defn pseg-processor [seg]
  (:processor @seg))

(declare make-pipe-seg)

(defn make-pipeline [in-chan out-chan processors]
  (md/make ::md/family
    :in-data in-chan
    :out-data out-chan
    :kids (cF (the-kids
                (let [ida (atom -1)]
                  (doall
                    (for [proc processors
                          :let [id (swap! ida inc)]]
                      (make-pipe-seg me id proc))))))

    :seg-id-map (cF (let [raw (for [seg (<mget me :kids)]
                                [(pseg-id seg) seg])]
                      (into #?(:clj {} :cljs {}) raw)))))

(defn make-pipe-seg [pipe id processor]
  ;;(pln :make-seg id pipe)
  (md/make ::pipeseg
    :par pipe
    :id id
    :processor processor
    :in-rq (chan)
    :in-data (chan)
    :in-ak (chan)))

;; --- start ----------------------------------

(defn pipe-seg-start [seg]
  (go
    (loop []
      (when (<! (pseg-in-rq seg))
        (pln :got-in-rq! (pseg-id seg))

        ;; unlike h/w, rq goes out before data (or we would block on data and never see rq)
        (when-let [d (<! (pseg-in-data seg))]
          (pln :got-data!! (pseg-id seg) d :aking!!!)
          (>! (pseg-in-ak seg) true) ;; make async put, or can we rely on them being waiting?



          (let [d-out ((pseg-processor seg) d)]
            (pln :computed-dout d-out)

            (if-let [nxt (pseg-next-seg seg)]
              (do ;; coordination required....
                (put! (pseg-in-rq nxt) true)
                (when (put! (pseg-in-data nxt) d-out)
                  (let [ak (go (<! (pseg-in-ak nxt)))]
                    #_ (pln :got-relay-ak!!!! ak d-out))))
              ;; ...just do it, the pipe is waiting
              (>! (pseg-pipe-out-data seg) d-out))

            (recur)))))

    (pln :closing-seg!!! (:id @seg))
    (close! (pseg-in-data seg))
    (close! (pseg-in-ak seg))))

(defn pipe-start [pipe]
  (let [segs (pipe-segs pipe)]
    (doseq [seg segs]
      (pipe-seg-start seg))

    (let [ps0 (first (pipe-segs pipe))
          psn (last (pipe-segs pipe))]
      (go
        (loop [fst :init
               data nil]

          (case fst
            :exit
            (pln :pipe-exiting)

            :init
            (let [d (<! (:in-data @pipe))]
              (pln :pipt-got! d)
              (recur (if d :toggle-rq-first :exit) d))

            :toggle-rq-first
            (do
              (put! (pseg-in-rq ps0) true)
              (put! (pseg-in-data ps0) data)
              (recur :get-rq-ak data))

            :get-rq-ak
            (do
              (pln :waiting-ak data)
              (if (<! (pseg-in-ak ps0))
                (recur :init nil)
                (recur :exit nil)))))))))

(defn pipe-go []
  (cells-init)

  (let [procs [(fn [data]
                 (map #(* % 2) data))

               (fn [data]
                 (map #(+ % 100) data))

               (fn [data]
                 (map #(- %) data))]

        pipe-in (chan)
        pipe-out (chan)
        pipe (make-pipeline
               pipe-in pipe-out
               procs)]

    (pln :gotpipe!!! pipe)
    (assert (= (count procs)
          (count (pipe-segs pipe))))

    (pln :strt-pipe pipe)

    (pipe-start pipe)

    (go
      (put! pipe-in [0 1 2])
      (put! pipe-in [1000 2000 3000])
      (put! pipe-in [-1 -10 -100])
      (put! pipe-in [10 -20 30]))

    (go
      (loop []
        (let [tout (timeout 1000)
              result (alt!
                       tout :timeout
                       pipe-out
                       ([r] r))]
          (pln :bam-out result))))))
