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
    :result (cI nil)
    :in-ak (a/chan)
    :out-rq nil
    :out-data (a/chan)
    :out-ak nil))

(defn pipe-seg-execute [stp]
  ;; todo find and cache to-rq, to-indata, to-ak
  (pln :go-seg!! @stp)
  (a/go
    (loop []
      (when (a/<! (:in-rq @stp))
        (pln :got-in-rq! (:id @stp))
        (pln :reading (:in-data @stp))
        ;; unlike h/w, rq goes out before data (or we would block on data and never see rq)
        (let [d (a/<! (:in-data @stp))]
          (when (nil? d)
            (pln :indata-closed-after-inrq!))

          (when d
            (pln :inakking d)
            (pln :akking-to (:in-ak @stp))
            (a/>! (:in-ak @stp) true) ;; make async put, or can we rely on them being waiting?
            (pln :computing (:processor @stp))

            (let [d-out ((:processor @stp) d)]
              (pln :computed-dout d-out)
              (pln :sending-to (:out-data @stp))
              (a/>! (:out-data @stp) d-out)
              (pln :dout-sent d-out)
              (recur))))))

    (pln :closing-seg!!! (:id @stp))
    (a/close! (:in-data @stp))
    (a/close! (:in-ak @stp)))
  ;; close out-rq to receiver if any
  )

#_ (data-ack)

(defn make-pipeline [& processors]
  (md/make ::pipeline
    :segs (cF (for [id (range (count processors))]
                (make-pipe-seg me id (nth processors id))))))

(defn data-ack []
    (cells-init)
  (pln :cinit!)
    (let [pipe (make-pipeline
                 (fn [data]
                   (map #(* % 2) data))
                 #_
                 (fn [data]
                   (map #(+ % 100) data)))]
      (pln :pipe!! @pipe)
      (pln :segs (:segs @pipe))

      (assert (= 1 (count (:segs @pipe))))

      (doseq [seg (:segs @pipe)]
        (pipe-seg-execute seg))


      (pln :go!!!! (:in-rq @(first (:segs @pipe))))

      (a/put! (:in-rq @(first (:segs @pipe))) true)
      (pln :inrq-put!)
      (pln :indta-chan!!!! (:in-data @(first (:segs @pipe))))
      (when (a/put! (:in-data @(first (:segs @pipe))) [0 1 2])
          (pln :piped!)
          (pln :reading-ack (:in-ak @(first (:segs @pipe))))

          (let [ak (a/<!! (:in-ak @(first (:segs @pipe))))]
            (pln :got-ack!!! ak)
            (pln :get-result (last (:segs @pipe))
              (:out-data @(last (:segs @pipe))))


            (a/go
              (let [tout (a/timeout 1000)
                  bam (a/alt!
                        tout :timeout
                        (:out-data @(last (:segs @pipe)))
                        ([r] r))]
              (pln :bam-out bam)
              ;(assert (not (nil? out)))
              ;(assert (= out [1 3 5]))
              (a/close! (:in-rq @(first (:segs @pipe))))
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


