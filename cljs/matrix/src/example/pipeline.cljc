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
                                        close! go  offer! poll! <! >! alts!]]
       :cljs [cljs.core.async
              :refer [timeout buffer dropping-buffer sliding-buffer put! take! chan promise-chan
               close! take partition-by offer! poll! <! >! alts!] :as async])
    #?(:clj [clojure.data.int-map :as i])))

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
    (let [seg-next (pseg-next-seg seg)]
      (loop [fst :init
             data nil]

        (case fst
          :exit
          (do
            (pln :closing-seg!!! (:id @seg))
            (close! (pseg-in-rq seg))
            (close! (pseg-in-data seg))
            (close! (pseg-in-ak seg)))

          :init (if (<! (pseg-in-rq seg))
                  (do
                    ;(pln :got-incoming-rq! (pseg-id seg))
                    (recur :copy-data nil))
                  (do
                    (pln :seg-out-on-rq)
                    (recur :exit nil)))

          :copy-data
          (if-let [d (<! (pseg-in-data seg))]
            (do
              ;(pln :seg-got-data!! (pseg-id seg) d :aking!!!)
              (recur :ak-data d))
            (pln :seg-got-nil-data))

          :ak-data
          (do
            (>! (pseg-in-ak seg) true)
            (recur :process-data data))

          :process-data
          (let [d-out ((pseg-processor seg) data)]
            ;(pln :computed-dout d-out)

            (if seg-next
              (recur :relay-next d-out)
              (recur :pipe-out d-out)))

          :relay-next
          (do
            (put! (pseg-in-rq seg-next) true)

            (if (put! (pseg-in-data seg-next) data)
              (do
                ;(pln :seg-put-processed-data-next data)
                (recur :get-ak-from-next-seg nil))
              (pln :nil-putting-data-next)))

          :pipe-out
          ;; ...just do it, the pipe is waiting
          (do
            ;(pln :piping-out!!!! data)
            (>! (pseg-pipe-out-data seg) data)
            (recur :init nil))

          :get-ak-from-next-seg
          (if (<! (pseg-in-ak seg-next))
            (do
              ;(pln :got-next-ak)
              (recur :init nil))
            (pln :nil-off-get-next-ak)))))))

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
              (pln :pipe-got! d)
              (recur (if d :toggle-rq-first :exit) d))

            :toggle-rq-first
            (do
              (put! (pseg-in-rq ps0) true)
              ;(pln :putting-data-to-seg-0 data)
              (put! (pseg-in-data ps0) data)
              (recur :get-rq-ak data))

            :get-rq-ak
            (do
              ;(pln :waiting-ak data)
              (if (<! (pseg-in-ak ps0))
                (recur :init nil)
                (recur :exit nil)))))))))

