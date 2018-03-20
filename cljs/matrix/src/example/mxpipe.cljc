(ns example.mxpipe
  #?(:cljs (:require-macros
             [cljs.core.async.macros :as m :refer [go alt!]]))

  (:require

    #?(:clj [tiltontec.cell.base :refer [cells-init unbound ia-type]]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [cells-init unbound ia-type]])

    #?(:clj
            [tiltontec.cell.core :refer :all]
       :cljs [tiltontec.cell.core
              :refer-macros [cF cFn] :refer [cI]])

            [tiltontec.cell.observer :refer [observe-by-type]]

    #?(:clj
            [tiltontec.model.core :as md
             :refer [the-kids make <mget mset!> mswap!>]]
       :cljs [tiltontec.model.core
              :refer-macros [the-kids mdv!]
              :refer [fget <mget fasc fm! make mset!> backdoor-reset!]
              :as md])

            [tiltontec.util.core :as util :refer [pln now]]
    #?(:clj
            [clojure.core.async :refer [timeout buffer dropping-buffer sliding-buffer put! take! chan promise-chan
                                        close! go offer! poll! <!! <! >! >!! alts!]]
       :cljs [cljs.core.async
              :refer [timeout buffer dropping-buffer sliding-buffer put! take! chan promise-chan
                      close! take partition-by offer! poll! <! >! alts!] :as async])
    #?(:clj
            [clojure.data.int-map :as i])))

(defn pipe-segs [pipe]
  (<mget pipe :kids))

(defn pipe-seg-by-id [pipe id]
  (get (:seg-id-map @pipe) id))

(defn pseg-pipe [seg]
  (:par @seg))

(defn pseg-id [seg]
  (:id @seg))

(defn pseg-prior [seg]
  (when (pos? (pseg-id seg))
    (pipe-seg-by-id (pseg-pipe seg)
      (dec (pseg-id seg)))))

(defn pseg-in-rq [seg]
  (:in-rq @seg))

(defn pseg-in-ak [seg]
  (:in-ak @seg))

(defn pseg-next [seg]
  (pipe-seg-by-id (pseg-pipe seg) (inc (pseg-id seg))))

(defn pseg-processor [seg]
  (:processor @seg))

(declare make-pipe-seg pipe-state pipe-seg-state)

(defn make-mxpipe [processors]
  (md/make ::md/family
    :clock (cI 0)
    :in-chan (chan)
    :out-chan (chan)
    :in-data nil
    :kids (cF (the-kids
                (map (fn [id proc]
                       (make-pipe-seg me id proc))
                  (range)
                  processors)))

    :seg-id-map (cF (into {}
                      (for [seg (<mget me :kids)]
                        [(pseg-id seg) seg])))

    :fst (cF (pipe-state me cache))))

(defn pipe-state [pipe fst]
  (let [plme (fn [& r]
               (apply pln :pip r))
        tick (<mget pipe :clock)
        ps0 (first (pipe-segs pipe))]
    ;(plme :pst-tick! tick)
    (cond
      (zero? tick) :init

      :default
      (do
        ;(plme :pst-fsm-case! fst)
        (or
          (case fst
            :init (when-let [d (poll! (:in-chan @pipe))]
                    (alter pipe assoc :in-data d)
                    (alter ps0 assoc :in-rq tick)
                    :get-ak)

            :get-ak (when (= (:in-ak @ps0)
                            (:in-rq @ps0))
                      ;
                      :init)
            (assert false (str "bad pipe state <" fst ">")))
          fst)))))

;; --- Pipe Seg --------------------------------

(defn make-pipe-seg [pipe id processor]
  (md/make ::pipeseg
    :par pipe
    :id id
    :processor processor
    :in-rq 0
    :in-ak 0
    :out-data nil
    :fst (pipe-seg-state pipe)))

;; --- start ----------------------------------

(defn pipe-seg-state [pipe]
  (let [in-data (atom nil)]
    (cF (let [tick (<mget pipe :clock)
              plme (fn [& r]
                     (apply pln :seg (pseg-id me) r))]
          (cond
            (zero? tick) :init

            :default
            (do
              ;;(plme :seg-fst! cache)
              (or (case cache
                    :init (when (> (pseg-in-rq me) (pseg-in-ak me))
                            (reset! in-data
                              (if-let [ps (pseg-prior me)]
                                (:out-data @ps)
                                (:in-data @(pseg-pipe me))))
                            (assert @in-data)
                            :ak-data)

                    :ak-data
                    (do
                      (alter me assoc :in-ak (pseg-in-rq me))
                      :process-data)

                    :process-data
                    (do
                      (alter me assoc :out-data
                        ((pseg-processor me) @in-data))
                      ;(plme :seg-computed-dout (:out-data @me))
                      :relay-result)

                    :relay-result
                    (do
                      ;(plme :seg-relay)
                      (if-let [seg-next (pseg-next me)]
                        (do
                          (alter seg-next assoc :in-rq tick)
                          :get-ak-from-next-seg)
                        (do
                          (plme :piping-out!!!! (pseg-id me) (:out-data @me))
                          (>!! (:out-chan @pipe) (:out-data @me))
                          :init)))

                    :get-ak-from-next-seg
                    (when (= (pseg-in-ak (pseg-next me))
                            (pseg-in-rq (pseg-next me)))
                      :init)
                    (assert false (str "bad seg state " cache)))
                (do
                  (pln :nothnghappened cache)
                  cache))))))))



