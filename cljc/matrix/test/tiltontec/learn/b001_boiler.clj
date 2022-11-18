(ns tiltontec.learn.b001-boiler
  (:require
    [clojure.string :as str]
    [clojure.pprint :refer [pprint cl-format] :as pp]
    [clojure.test :refer :all]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.util.core :refer [type-of err]]
    [tiltontec.cell.base :refer :all :as cty]
    [tiltontec.cell.integrity :refer [with-integrity with-cc]]
    [tiltontec.cell.observer
     :refer [defobserver fn-obs]]

    [tiltontec.cell.core :refer :all]

    [tiltontec.cell.evaluate :refer [c-get c-awaken]]
    [tiltontec.model.base :refer [md-cz md-cell]]
    [tiltontec.model.core :refer :all :as md]
    ))

(defn pgr-prn [& bits]
  (prn :-----)
  (apply prn bits))

(defn obs-slot-new [slot me new old cell]
  (prn slot :now new))

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
;;; --------------------------------
;;; We begin by modelling (poorly) the boiler of a furnace in
;;; in the basement of an apartment building. Hopefully the
;;; slot names (property names) will make clear how that was done.
;;;
;;; If not, ping @kennytilton in the #matrix channel of the Clojurians slack

(deftest boiler-1
  (cells-init) ;; make sure each test is isolated

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
                 ; be changed by  event handlers processing user actions.

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
    ; we are lower, but right at the minimum "=" boundary. Still OK.
    (is (not (mget boiler :water-low?)))

    (mset! boiler :water-amt 5)
    ;; ^^ now too low.
    (is (mget boiler :water-low?))))

;;; Super. All the tests pass. But it is hard to imagine what is going on
;;; with the reactive dataflow.
(deftest boiler-1-verbose
  (cells-init) ;; make sure each test is isolated

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
                                 ;; That said, observers _can_ effect reactive change, but only if they enqueue changes for application after
                                 ;; the current change propagates. Even this constraint _can_ be bypassed, at the developer's risk.
                                 ;;
                                 ;; Final note: when observers are used to "drive" entire other frameworks, we probably need to
                                 ;; orchestrate how a bunch of different effects execute. This is done via an advanced
                                 ;; feature in which we run the Matrix with a so-called "client-queue-handler".
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