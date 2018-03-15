(ns example.micropipeline
  (:require

    [tiltontec.cell.base :refer [cells-init unbound ia-type]]
    [tiltontec.cell.core :refer :all]
    [tiltontec.cell.observer :refer [observe-by-type]]
    [tiltontec.model.core :as md :refer [make <mget mset!> mswap!>]]
    [tiltontec.util.core :as util :refer [pln now ]]
    [clojure.core.async :as a]))

;(:require-macros [cljs.core.async.macros :refer [go go-loop]])
#_
    (ns async-test.timeout.core
      (:require [cljs.core.async :refer [chan close!]])
      (:require-macros
        [cljs.core.async.macros :as m :refer [go]]))

(defn make-pipe-seg [pipe id processor]
  (md/make ::step
    :id id
    :pipe pipe
    :processor processor
    :in-rq (a/chan)
    :in-data (a/chan)
    :result (a/chan)
    :in-ak (a/chan)
    :out-data (a/chan)))

#_ (data-ack)

(defn make-pipeline [& processors]
  (md/make ::pipeline
    :segs (cF (for [id (range (count processors))]
                (make-pipe-seg me id (nth processors id))))))

(defn pipe-segs [pipe]
  (:segs @pipe))

(defn pipe-seg [pipe n]
  (nth (pipe-segs pipe) n))

(defn pseg-in-rq [seg]
  (:in-rq @seg))

(defn pseg-in-ak [seg]
  (:in-ak @seg))

(defn pseg-in-data [seg]
  (:in-data @seg))

(defn pseg-out-data [seg]
  (:out-data @seg))

(defn pseg-result [seg]
  (<mget seg :result))

(defn pseg-processor [seg]
  (:processor @seg))

(defn pipe-seg-execute [stp]
  ;; todo find and cache to-rq, to-indata, to-ak
  (pln :go-seg!! @stp)
  (a/go
    (loop []
      (when (a/<! (pseg-in-rq stp))
        (pln :got-in-rq! (:id @stp))
        (pln :reading (pseg-in-data stp))
        ;; unlike h/w, rq goes out before data (or we would block on data and never see rq)
        (let [d (a/<! (pseg-in-data stp))]
          (when (nil? d)
            (pln :indata-closed-after-inrq!))

          (when d
            (pln :got-data!! d :aking!!!)
            (a/>! (pseg-in-ak stp) true) ;; make async put, or can we rely on them being waiting?

            (pln :ak-sent d :processing)

            (let [d-out ((pseg-processor stp) d)]
              (pln :computed-dout d-out)
              ;;(swap! stp assoc :result dout)
              (a/>! (pseg-result stp) d-out)
              (pln :dout-sent d-out)
              (recur))))))

    (pln :closing-seg!!! (:id @stp))
    (a/close! (pseg-in-data stp))
    (a/close! (pseg-in-ak stp)))
  ;; close out-rq to receiver if any
  )

(defn data-ack []
    (cells-init)
  (pln :cinit!)
    (let [pipe (make-pipeline
                 (fn [data]
                   (map #(* % 2) data))

                 #_(fn [data]
                   (map #(+ % 100) data)))
          ps0 (pipe-seg pipe 0)
          psn (pipe-seg pipe (dec (count (pipe-segs pipe))))]

      (assert (= 1 (count (pipe-segs pipe))))

      (doseq [seg (pipe-segs pipe)]
        (pipe-seg-execute seg))

      (a/put! (pseg-in-rq ps0) true)
      (pln :inrq-put!)
      (pln :putting-indta-chan!!!! (pseg-in-data ps0))

      (when (a/put! (pseg-in-data ps0) [0 1 2])
        (pln :data-sent)

        (let [ak (a/<!! (pseg-in-ak ps0))]
          (pln :got-ak!!!!)

          (a/go
            (let [tout (a/timeout 1000)
                  bam (a/alt!
                        tout :timeout
                        (pseg-result psn)
                        ([r] r))]
              (pln :bam-out bam)
              ;(assert (not (nil? out)))
              ;(assert (= out [1 3 5]))
              (a/close! (pseg-in-rq ps0))
              (pln :booya!!!!!!!!!! bam)))))))



#_
  (data-ack)

#_
    (defn make-step [pipe id processor]
      (md/make ::step
        :in-rq (chan)
        :id id
        :processor processor
        ;; -- next two filled in during wiring step
        :from-comm nil
        :to-comm nil
        ;; -- the machine ---
        :state (cF (cond
                     (from-rq me) :copying
                     (stp-data-in me) :processing
                     (stp-data me) :relaying
                     (to-ak me) (if (from-rq me) :copying :waiting)
                     :default :waiting)
                 )
        :data-in (cF (when (= :copying (stp-state me))
                       (stp-data (stp-prior me))))))


;(defn stp-state [me] (<mget me :state))
;(defn stp-data [me] (<mget me :state))

(comment
  (make pipeline processes
    input
    output
    steps per process)

  (goloop
    send to input of first step)
  (goloop
    read from output of last step)

  (make step process
    input channel
    processor)

  (goloop
    s = waiting
    read inRq.
    s = copying
    read input.
    send inAk.
    s = processing.
    data = process input.
    s = sending.
    send outRq.
    send data.
    s = acking.
    read outAk)


  (make all wires
    first step input wire gets nil as from
    last step output gets nil as to)

  (in two goloops
    send to input of first step)

  (goloop read from output of last step)


  (start each step
    (go-loop
      (read from.data)
      (send (my.fn my.data-in) to to.data))))


;; Make all the steps
;; Make all the wires
;; "Start" each step:
;;   In go block:
;;     read from.rq channel
;;
;;     toggle from.rq cI
;;   In go block:
;;     read to.ak channel
;;     toggle to.ak cI


