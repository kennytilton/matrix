(ns example.micropipeline
  (:require

    [tiltontec.cell.base :refer [cells-init unbound ia-type]]
    [tiltontec.cell.core :refer :all]
    [tiltontec.cell.observer :refer [observe-by-type]]

    [tiltontec.model.core :as md
     :refer [the-kids make <mget mset!> mswap!>]]
    [tiltontec.util.core :as util :refer [pln now ]]
    [clojure.core.async :as a]
    [clojure.data.int-map :as i]))

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

#_ (data-ack)

(defn make-pipeline [in-chan out-chan processors]
  (pln :porcs (count processors))
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
                      (pln :rawsegs raw)
                      (into {} raw)))))

(defn make-pipe-seg [pipe id processor]
  ;;(pln :make-seg id pipe)
  (md/make ::pipeseg
    :par pipe
    :id id
    :processor processor
    :in-rq (a/chan)
    :in-data (a/chan)
    :in-ak (a/chan)))

;; --- start ----------------------------------

(defn pipe-seg-start [seg]
  ;; todo find and cache to-rq, to-indata, to-ak

  (a/go
    (loop []
      (when (a/<! (pseg-in-rq seg))
        (pln :got-in-rq! (pseg-id seg))

        ;; unlike h/w, rq goes out before data (or we would block on data and never see rq)
        (when-let [d (a/<! (pseg-in-data seg))]
          (pln :got-data!! (pseg-id seg) d :aking!!!)
          (a/>! (pseg-in-ak seg) true) ;; make async put, or can we rely on them being waiting?



          (let [d-out ((pseg-processor seg) d)]
            (pln :computed-dout d-out)

            (if-let [nxt (pseg-next-seg seg)]
              (do ;; coordination required....
                (a/put! (pseg-in-rq nxt) true)
                (when (a/put! (pseg-in-data nxt) d-out)
                  (let [ak (a/<!! (pseg-in-ak nxt))]
                    (pln :got-relay-ak!!!! ak d-out))))
              ;; ...just do it, the pipe is waiting
              (a/>! (pseg-pipe-out-data seg) d-out))

            (recur)))))

    (pln :closing-seg!!! (:id @seg))
    (a/close! (pseg-in-data seg))
    (a/close! (pseg-in-ak seg))))

(defn pipe-start [pipe]
  (let [segs (pipe-segs pipe)]
    (doseq [seg segs]
      (pipe-seg-start seg))

    (let [ps0 (first (pipe-segs pipe))
          psn (last (pipe-segs pipe))]
      (a/go
        (loop []
          ;; todo try as state machine
          (when-let [d-in (a/<! (:in-data @pipe))]
            (pln :pipe-got-data! d-in)

            (a/put! (pseg-in-rq ps0) true)

            (when (a/put! (pseg-in-data ps0) d-in)
              (let [ak (a/<!! (pseg-in-ak ps0))]
                (pln :got-ak!!!! d-in)
                (recur)))))))))