(ns tiltontec.learn.b010-boiler-and-misc
  (:require
    [clojure.test :refer :all]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.cell.base :refer :all]
    [tiltontec.cell.integrity :refer [with-integrity with-cc]]
    [tiltontec.cell.core :refer :all]
    [tiltontec.model.base :refer [md-cz]]
    [tiltontec.model.core :refer :all :as md]
    [tiltontec.learn.util :refer :all]))

;;; Forward
;;; --------------------------------
;;; Another big win for a reactive library like Matrix is the strong
;;; functional quality of so much app logic being expressed in cell formulas.
;;; These cell formulas are generally concise, because they are responsible
;;; only for computing individual properties. This granularity leads to
;;; a natural decomposition of application complexity, without us much
;;; thinking about it. We solve the derivation of individual properties,
;;; and a coherent, functional application emerges. Mostly. Not always.
;;;
;;; Often we want a declarative _computation_ of application
;;; state to trigger a state _change_ normally controlled externally. Yikes. An example
;;; might be our boiler water valve, which normally would be opened by the maintenance
;;; team when the low water warnings go off. What if we wanted to automate that?
;;;
;;; The problem with automating that is that we still want the water valve status to be a Matrix input, controlled
;;; externally, yet have the Matrix auto-control it as well. Can we have it both ways?
;;; Furthermore, the Matrix's decision will arise during a recalculation of the reactive DAG
;;; in reaction to a new, lower water level, itself a state change! We would be starting
;;; a second state change while the first was still propagating! So-called "glitches" are bound to arise? What to do?
;;;
;;; No problem. Matrix includes a mechanism by which observers, normally banned
;;; from acting on the Matrix, can _enqueue_ Matrix changes for execution as soon as
;;; the current change finishes propagation. We stay within the rule: one state DAG change at a time.
;;;
;;; In the test below, we have an observer for the :water-amt property set a :water-valve-status property
;;; to :open if the water level goes to zero, an action the maintenance crew would normally handle
;;; via some interface element.
;;;
;;; Final thought before we show that code: in this simple case we could in fact have
;;; an aggregate :water-valve-status-final formula that watches both a user-controlled :water-valve-status-manual _and_
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

(deftest knock-knock
  (cells-init)                                              ;; make sure each test is isolated

  (let [sound-count (atom 0)
        world (md/make
                :sound-heard (cI nil :obs (fn [slot me new prior cell]
                                            (swap! sound-count inc)
                                            (prn :sound-heard-count @sound-count)
                                            (obs-slot-new slot me new prior cell)))
                :speech (cF+ [:obs obs-slot-new]
                          (case (mget me :sound-heard)
                            nil :silence
                            :knock-knock :who-is-there?
                            [:hello (mget me :sound-heard)])))]

    (pgr-prn :world-built)
    (is (= :silence (mget world :speech)))

    (pgr-prn :mutating :sound-heard :knock-knock)
    (mset! world :sound-heard :knock-knock)
    (is (= :who-is-there? (mget world :speech)))

    (pgr-prn :mutating :sound-heard :world)
    (mset! world :sound-heard :world)
    (is (= [:hello :world] (mget world :speech)))

    (pgr-prn :mutating :sound-heard-5-times-in-vain)
    (reset! sound-count 0)
    (dotimes [_ 5]
      (prn :mutating :sound-heard :world)
      (mset! world :sound-heard :world))
    ;
    ; this next bit fails until we learn how to model events in the exercise,
    ; so we have it commented out so tests all pass.
    ;
    ; the observer on :sound-heard should have incremented our counter five times on each MSET!
    #_ (is (= @sound-count 5))
    (prn :NB!!! :no-other-output!!)

    (pgr-prn :fini!)))

;;; Note: see learn.solution.b010-boiler-and-misc for solutions.
;;;
;;; Practice exercise 1: Modelling events
;;;   Motivation:
;;;      When things do not change, there is no need to react, so the Matrix engine by default
;;;      ignores value assignments where the assigned value is the same as the existing value.
;;;
;;;      As mentioned earlier, by default "same" means Clojure "=", but this can be overriden
;;;      for cell by cell. Anyway...
;;;
;;;      This policy if ignoring non-changes presents a modelling problem for events. In this example,
;;;      we hear the answer ":world" five times after the first time the knocker announces themselves
;;;      as :world, but we can see the system ignores those repetitions. That is wrong; the sound :world _was_
;;;      heard five more times. What to do?
;;;
;;;      We cannot fight this behavior via (mset! me :sound-heard nil). For one, that is artificial and bug-prone.
;;;      For another, it is not modelling what happened at all accurately. The property :sound-heard did not change!
;;;      Rather, the _event_ of hearing :word _happened_ at a point in time, and that was that. The event did not _end_,
;;;      it simply is no more, a part of the past, yes, but no longer extant in the present. If we :sound-heard to nil;
;;;      the Matrix engine will see that change and propagate it!
;;;
;;;      Nor can we leave the :sound-heard value in place! Suppose we had some rule that looked like this:
;;;
;;;         (if-let [sound (mget me :sound-heard)]
;;;             (when (mget me :awake)
;;;                (prn :I-just-heard sound)))
;;;
;;;      If we now record a sound and _then_ (mset! me :awake? true), the PRN will mistakenly report
;;;      hearing the past sound event. What to do?
;;;
;;;      Again, Matrix has a feature to handle this case:
;;;         Specify ":ephemeral? true" when creating the cell for a property,
;;;
;;;   Your mission: Uncomment (is (= @sound-count 5)) and get it to pass.