(ns tiltontec.learn.b001-boiler
  (:require
    [clojure.test :refer :all]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.cell.base :refer :all]
    [tiltontec.cell.core :refer :all]
    [tiltontec.model.base :refer [md-cz]]
    [tiltontec.model.core :refer :all :as md]
    [tiltontec.learn.util :refer :all]))

;;; Forward
;;; --------------------------------
;;; The big win for a reactive library like Matrix comes when
;;; managing a complex interface while a user thrashes away
;;; at the controls, and we will get to that, but first lets get
;;; a feel for the core Matrix ability to manage state declared
;;; as functions of other state.
;;;
;;; The idea is simple, but maintaining data integrity (avoiding "glitches")
;;; does have a few twists, especially getting useful behavior out of
;;; a DAG of cascading calculations. We will see this soon.
;;;
;;; Example: A boiler for a building heating system
;;; --------------------------------
;;; We begin by modelling (poorly) the boiler of a furnace in
;;; in the basement of an apartment building. Hopefully the
;;; slot names (property names) will make clear how that was done.
;;;
;;; If not, ping @kennytilton in the #matrix channel of the Clojurians slack

(deftest boiler-1
  (cells-init)                                              ;; make sure each test is isolated

  (let [boiler (md/make
                 :water-capacity 100
                 :filled-ratio-min 0.10
                 ; these two properties ^^ are fixed attributes of a boiler,
                 ; so we do not wrap them in (see next) input Cells.
                 ; (we will see that attempts to muutate these will
                 ; throw an exception.)

                 :water-amt (cI 40)
                 ; this property ^ we need to change by adding water, or
                 ; by recording new lower levels from a sensor, so we
                 ; MUST wrap it in a so-called input (cI) cell.
                 ; cI is short for "cell Input".
                 ;
                 ; Input cells are like spreadsheet cells the user just
                 ; changes at will. When we get to a proper UI, they will
                 ; be changed by event handlers processing user actions.

                 :filled-ratio (cF (/ (mget me :water-amt)
                                     (mget me :water-capacity)))
                 ; ^^ an interim computation, useful as documentation
                 ; even if only the water-low? rule ever uses it.
                 ; cF is short for "cell Formulaic".

                 :water-low? (cF (< (mget me :filled-ratio)
                                   (mget me :filled-ratio-min))))]

    (is (not (mget boiler :water-low?)))
    ;; check our starting state. At 40% we are not low.

    (mset! boiler :water-amt 10)
    ; mset! destructively modifies a model property
    ; we are lower, but right at the minimum "=" boundary. Still OK. We confirm:
    (is (not (mget boiler :water-low?)))

    (mset! boiler :water-amt 5)
    ;; ^^ now we are too low. Confirm:
    (is (mget boiler :water-low?))))

;;; Super. All the tests pass. But it is hard to imagine what is going on
;;; with the reactive dataflow. So next we introduce a new feature, so-called "observers".
;;;
;;; Most reactive libraries use the term "observer" incorrectly. An observer views an
;;; activity without participating, like UN observers of a conflict. Matrix uses this
;;; sense of the word. (In the ClojureDart version of Matrix we have begun using
;;; the term "watch". If the mountain will not come to Mohammed...).
;;;
;;; In this next verbose version of boiler-1, we use print statements in formulas as
;;; well as observers to make concrete the reactive dataflow. The reader is encouraged to add
;;; their own prints where they like. To add or modify an observer, consult the definition
;;; 'util/obs-slot-new'.
;;;

(deftest boiler-1-verbose
  (cells-init)                                              ;; make sure each test is isolated

  (pgr-prn :beginning-b001-boiler)
  (let [boiler (md/make
                 :water-capacity 100
                 :filled-ratio-min 0.10
                 ; these ^^ are fixed attributes of a boiler

                 :water-amt (cI 40 :obs obs-slot-new)
                 ; this ^ we can change by adding water, so we
                 ; MUST wrap it in an input (cI) cell
                 ; cI is short for "cell Input"

                 :filled-ratio (cF+ [:obs obs-slot-new]
                                 (prn :nb!! "The observer for water-amt ran immediately, before triggering the dependent filled-ratio.")
                                 ;; ^^^ Observers should only act outside the reactive model, so they can be dispatched in the  middle
                                 ;; of a reactive propagation.
                                 ;;
                                 ;; That said, observers _can_ effect reactive change, but only if** they enqueue changes for application after
                                 ;; the current change propagates. For example, in the next version of the boiler we will have the water-low?
                                 ;; observer add water when it sees the condition arise!
                                 ;;
                                 ;; ** Even this constraint _can_ be bypassed, at the developer's risk!
                                 ;;
                                 ;; Final note: when observers are used to "drive" entire other frameworks such as Tcl/Tk, we may need to
                                 ;; orchestrate how multiple side effects in one "pulse" execute. This is done via an advanced
                                 ;; feature in which we run the Matrix with a so-called "client-queue-handler".
                                 ;;
                                 (prn :computing :filled-ratio)
                                 (/ (mget me :water-amt)
                                   (mget me :water-capacity)))
                 ; ^^ an interim computation, useful as documentation
                 ; even if only the water-low? rule uses it
                 ; cF is short for "cell Formulaic"

                 :water-low? (cF+ [:obs obs-slot-new]
                               (prn :computing :water-low?)
                               (< (mget me :filled-ratio)
                                 (mget me :filled-ratio-min))))]

    (pgr-prn :boiler-built)
    (prn :nb!! "See all that logging before we could say :boiler-built? Matrix brings an instance to life upon creation.")
    (is (not (mget boiler :water-low?)))

    (pgr-prn :mutating :water-amt 10)
    (mset! boiler :water-amt 10)
    ; ^^^ mset! destructively modifies a model property

    (is (not (mget boiler :water-low?)))
    (prn :nb!! "water-low? remained false, so its observer did not run")
    ; ^^^ observers run only when the new value is not the same as the old value.
    ; By default, "same" is decide by "=", but this can be overridden cell by cell.

    (pgr-prn :mutating :water-amt 5)
    (mset! boiler :water-amt 5)
    (is (mget boiler :water-low?))

    (pgr-prn :fini!)))

;;; Note: see learn.solution.b001-boiler for solutions.
;;;
;;; Practice exercise 1: Implement a low-water alarm
;;;   Motivation:
;;;      Our boiler should never run out of water. This means the maintenance crew needs
;;;      to be alerted in time for them to add water.
;;;   Your mission:
;;;      1. add a new :alarm-status property computed thus:
;;;         a. if the filled ratio >= the 150% of the minimum, the alarm status should be the keyword :off;
;;;         b. if the ratio >= the minimum, the status s.b. :light-flashing;
;;;         c. else the status s.b. :siren-sounding.
;;;      2. use an observer to simply display the latest :alarm-property. For real app we would
;;;         use the API of various alarm devices to actually activate/deactivate lights and sirens.
;;;         This then is a classic example of how Matrix "spreadsheets" do more than just compute
;;;         new cell values.
;;;      3. add a test mutation in which the water level goes below half the minimum.
;;;      4. Add clojure.test/is assertions to confirm.
;;;
;;; Practice exercise 2: Alarm siren override
;;;   Motivation:
;;;      Common practice with audible alarms is to provide a way for the responders to silence
;;;      the alarm once they are addressing the problem, so it does not distract them.
;;;   Your mission:
;;;      1. Add a new :alarm-override property:
;;;         a. model this as an input property;
;;;         b. make the initial value :off;
;;;         c. modify the :alarm-status rule so it decides :light-flashing
;;;            instead of :siren-sounding if the :alarm-override is :on;
;;;      2. Add a test mutation to turn :on the alarm override after the mutation
;;;         that would trigger the siren.
;;;      3. Add tests to confirm expected behavior.