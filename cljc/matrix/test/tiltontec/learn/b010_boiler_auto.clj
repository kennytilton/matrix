(ns tiltontec.learn.b010-boiler-auto
  (:require
    [clojure.test :refer :all]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.cell.base :refer :all]
    [tiltontec.cell.integrity :refer [with-cc]]
    [tiltontec.cell.core :refer :all]
    [tiltontec.model.base :refer [md-cz]]
    [tiltontec.model.core :refer :all :as md]
    [tiltontec.learn.util :refer :all]))

;;; Forward
;;; --------------------------------
;;; Another big win for a reactive library like Matrix is the strong
;;; functional quality of so much app logic being expressed in cell formulas.
;;; These cell formulas are generally concise, because they are responsible
;;; only for computing individual properties. This granularity leadsto
;;; a natural decomposition of application complexity, without us much
;;; thinking about it. We solve the derivation of individual properties,
;;; and a coherent, functional application emerges. Mostly.
;;;
;;; In not too rare circumstances, we want a declarative _computation_ of application
;;; state to trigger a state _change_ normally controlled externally. Yikes. An example
;;; might be our boiler water valve, which normally would be opened by the maintenance
;;; team when the low water warnings go off. What if we wanted to automate that?
;;;
;;; The problem with automating that is that we still want the water valve status to be a Matrix input, controlled
;;; externally, yet have the Matrix auto-control it as well. And the Matrix's decision will arise
;;; during a recalculation of the reactive DAG in reaction to a new, lower water level, itself
;;; a state change? So-called "glitches" are bound to arise? What to do?
;;;
;;; No problem. We designed into the Matrix system a mechanism by which observers, normally banned
;;; from acting on the Matrix, can enqueue changes to input properties for execution as soon as
;;; the observed changed finishes propagation. One state DAG change at a time.
;;;
;;; In the test below, we have an observer for the :water-amt property set a :water-valve-status property
;;; to :open if the water level goes to zero, an action the maintenance crew would normally handle
;;; via some interface element.
;;;
;;; Final thought before we show that code: in this simple case we could in fact have
;;; a functional :water-valve-status-final formula watching both a user-controlled :water-valve-status-manual _and_
;;; the water amount. But in more complex cases, the algorithm for the "final" result would require
;;; serious code contortions. Been there, seen that. So instead we let the Matrix play user.
;;;

(deftest boiler-water-valve-auto
  (cells-init)                                              ;; make sure each test is isolated

  (let [boiler (md/make
                 :water-capacity 100
                 :filled-ratio-min 0.10

                 :water-amt (cI 40 :obs (fn [slot-name me new-value prior-value cell]
                                          (prn :water-amt-now new-value)
                                          (when-not (pos? new-value)
                                            (with-integrity (:change :no-water)
                                              ;; with-integrity is the "defer" API. The source for that says more.
                                              ;; :change tells it we want to make a change to the DAG
                                              ;; :no-water is effectively a comment for debugging
                                              (mset! me :water-valve-status :open)))))
                 :water-valve-status (cI :closed :obs obs-slot-new)

                 :filled-ratio (cF (/ (mget me :water-amt)
                                     (mget me :water-capacity)))

                 :water-low? (cF (< (mget me :filled-ratio)
                                   (mget me :filled-ratio-min))))]

    (pgr-prn :boiler-built)
    (is (not (mget boiler :water-low?)))
    (is (= :closed (mget boiler :water-valve-status)))

    (pgr-prn :mutating :water-amt 5)
    (mset! boiler :water-amt 5)
    (is (mget boiler :water-low?))
    (is (= :closed (mget boiler :water-valve-status)))

    (pgr-prn :mutating :water-amt 0)
    (mset! boiler :water-amt 0)
    ;; ^^ now we are too low. Confirm:
    (is (= :open (mget boiler :water-valve-status)))

    (prn :nb!! "Next we prove valve status can be manipulated fully externally")
    (pgr-prn :mutating :water-valve-status :off)
    (mset! boiler :water-valve-status :off)
    (is (= :off (mget boiler :water-valve-status)))))