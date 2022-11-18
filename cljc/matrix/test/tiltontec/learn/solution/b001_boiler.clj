(ns tiltontec.learn.solution.b001-boiler
  (:require
    [clojure.test :refer :all]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.cell.base :refer :all]
    [tiltontec.cell.core :refer :all]
    [tiltontec.model.base :refer [md-cz]]
    [tiltontec.model.core :refer :all :as md]
    [tiltontec.learn.util :refer :all]))

(deftest boiler-1-ex1-solution
  (cells-init) ;; make sure each test is isolated

  (pgr-prn :beginning-b001-boiler-ex1)
  (let [boiler (md/make
                 :water-capacity 100
                 :filled-ratio-min 0.10

                 :water-amt (cI 40 :obs obs-slot-new)

                 :filled-ratio (cF+ [:obs obs-slot-new]
                                 (prn :computing :filled-ratio)
                                 (/ (mget me :water-amt)
                                   (mget me :water-capacity)))

                 :water-low? (cF+ [:obs obs-slot-new]
                               (prn :computing :water-low?)
                               (< (mget me :filled-ratio)
                                 (mget me :filled-ratio-min)))

                 :alarm-status (cF+ [:obs obs-slot-new]
                                 (prn :computing :alarm-status)
                                 (let [fill (mget me :filled-ratio)
                                       fill-min (mget me :filled-ratio-min)]
                                   (cond
                                     (>= fill (* 1.5 fill-min)) :off
                                     (>= fill fill-min) :light-flashing
                                     :else :siren-sounding)))
                 )]

    (pgr-prn :boiler-built)
    (is (not (mget boiler :water-low?)))
    (is (= (mget boiler :alarm-status) :off))

    (pgr-prn :mutating :water-amt 10)
    (mset! boiler :water-amt 10)

    (is (not (mget boiler :water-low?)))
    (is (= (mget boiler :alarm-status) :light-flashing)) ;; early warning

    (pgr-prn :mutating :water-amt 5)
    (mset! boiler :water-amt 5)
    (is (mget boiler :water-low?))
    (is (= (mget boiler :alarm-status) :siren-sounding))

    (pgr-prn :fini!)))

(deftest boiler-1-ex2-solution
  (cells-init) ;; make sure each test is isolated

  (pgr-prn :beginning-b001-boiler-ex2)
  (let [boiler (md/make
                 :water-capacity 100
                 :filled-ratio-min 0.10

                 :water-amt (cI 40 :obs obs-slot-new)

                 :filled-ratio (cF+ [:obs obs-slot-new]
                                 (prn :computing :filled-ratio)
                                 (/ (mget me :water-amt)
                                   (mget me :water-capacity)))

                 :water-low? (cF+ [:obs obs-slot-new]
                               (prn :computing :water-low?)
                               (< (mget me :filled-ratio)
                                 (mget me :filled-ratio-min)))

                 :alarm-status (cF+ [:obs obs-slot-new]
                                 (prn :computing :alarm-status)
                                 ; N.B! note below that we do not mget the :alarm-override? value
                                 ; until it matters, ie, until we have decided the situation is worthy of a siren.
                                 ; Put another way, if there is plenty of water, we do not need to know
                                 ; if the siren should be overridden.
                                 ;
                                 ; Why does this matter? Generally it does not! But MGET establishes a dependency, linking this cell to another,
                                 ; causing this rule to run whenever the other cell changes. Usually this will be
                                 ; a negligible waste, but the habit could hurt some day, and readability is diminished.
                                 ;
                                 ; Moral: write code naturally, reading other values when they are needed.
                                 ; Do not write big LETs pulling everything that _might_ be needed
                                 ; into local variables.
                                 ;
                                 (let [fill-min (mget me :filled-ratio-min)
                                       fill (mget me :filled-ratio)]
                                   ; these provide DRY and are always needed, so LET is fine
                                   (cond
                                     (>= fill (* 1.5 fill-min)) :off
                                     (>= fill fill-min) :light-flashing
                                     :else (if (mget me :alarm-override?)
                                             :light-flashing
                                             :siren-sounding))))

                 :alarm-override? (cI false))]

    (pgr-prn :boiler-built)
    (is (not (mget boiler :water-low?)))
    (is (= (mget boiler :alarm-status) :off))
    (is (not (mget boiler :alarm-override?)))

    (pgr-prn :mutating :water-amt 10)
    (mset! boiler :water-amt 10)

    (is (not (mget boiler :water-low?)))
    (is (= (mget boiler :alarm-status) :light-flashing)) ;; early warning

    (pgr-prn :mutating :water-amt 5)
    (mset! boiler :water-amt 5)
    (is (mget boiler :water-low?))
    (is (= (mget boiler :alarm-status) :siren-sounding))

    (pgr-prn :mutating :alarm-override? true)
    (mset! boiler :alarm-override? true)
    (is (mget boiler :water-low?))
    (is (= (mget boiler :alarm-status) :light-flashing))

    (pgr-prn :fini!)))