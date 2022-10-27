(ns tiltontec.cell.synapse-test
  ;;#?(:cljs (:import [goog.net XhrIo]))
  (:require
    #?(:clj [clojure.test :refer :all]
       :cljs [cljs.test :refer-macros [deftest is are]])
    #?(:cljs [tiltontec.util.base :refer-macros [trx prog1]]
       :clj
            [tiltontec.util.base :refer :all])

            [tiltontec.util.core :refer [rmap-setf]]

    #?(:clj
            [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [c-optimized-away? c-formula? c-value c-optimize
                      c-unbound? c-input? ia-type? cells-init
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state +pulse+ c-pulse-observed
                      *call-stack* *defer-changes* unbound
                      c-rule c-me c-value-state c-callers caller-ensure
                      *causation*
                      c-synaptic? caller-drop
                      c-pulse c-pulse-last-changed c-ephemeral? c-slot
                      *depender*
                      *c-prop-depth* md-slot-owning? c-lazy] :as cty])

    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]]
       :clj
            [tiltontec.cell.integrity :refer [with-integrity]])

            [tiltontec.cell.evaluate :refer [c-get]]

    #?(:clj
            [tiltontec.cell.observer :refer [defobserver fn-obs]]
       :cljs [tiltontec.cell.observer :refer-macros [defobserver fn-obs]])

    #?(:clj
            [tiltontec.cell.synapse :refer :all]
       :cljs [tiltontec.cell.synapse :refer-macros [with-synapse]])

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF+ c_F cF_]
              :refer [cI c-reset! make-c-formula]]
       :clj
            [tiltontec.cell.core :refer :all])

            [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint cl-format]]))

(deftest non-syn-even-filtering
  ; first we look at how a formula can filter inputs *without* any special
  ; support, just by having the rule close over some state.
  (cells-init)
  (let [max 10
        x (cI nil)
        y (let [prior (atom nil)]
            (cF (when-let [x (c-get x)]
                  (if (even? x)
                    (reset! prior x)
                    @prior))))
        z-runs (atom 0)
        z (cF
            (when-let [y (c-get y)]
              (swap! z-runs inc)
              (assert (even? y)))
            y)]
    (println :warm-up (c-get z))
    (doseq [n (range max)]
      (c-reset! x n))
    (is (= @z-runs (count (filter even? (range max)))))))

(deftest synaptic-even-filtering
  ; now we look at how a synapse (an anonymous cell usable only by its containing formula)
  ; can achieve the same filtering.
  (cells-init)
  (let [max 10
        x (cI nil)
        syn-runs (atom 0)
        z-runs (atom 0)
        z (cF (when-let [x (with-synapse (:even-x)
                             (when-let [x (c-get x)]
                               (swap! syn-runs inc)
                               (if (even? x)
                                 ^{:propagate true} [x]
                                 ^{:propagate false} [nil])))]
                (println :x-see-x x)
                (swap! z-runs inc)
                (assert (even? x))
                x))]
    (println :warm-up (c-get z))
    (doseq [n (range max)]
      (c-reset! x n))
    (is (= @syn-runs (count (range max))))
    (is (= @z-runs (count (filter even? (range max)))))))

(deftest synaptic-delta
  ; now we look at a simple stream behavior, returning the delta of two consecutive values
  (cells-init)
  (let [syn-runs (atom 0)
        alarm-runs (atom 0)
        reset-runs (fn []
                     (reset! syn-runs 0)
                     (reset! alarm-runs 0))
        x (cI nil)
        alarm (cF (when-let [d (with-synapse (:delta-x [prior (atom nil)])
                                 (when-let [x (c-get x)]
                                   (swap! syn-runs inc)
                                   (let [delta (Math/abs (if @prior
                                                           (- x @prior)
                                                           0))]
                                     (println @prior x delta)
                                     (reset! prior x)
                                     ^{:propagate (not (zero? delta))} [delta])))]
                    (println :delta d)
                    (swap! alarm-runs inc)
                    (if (> d 5)
                      :on :off)))]
    (println :warm-up (c-get alarm))
    (is (= @syn-runs 0))
    (is (= @alarm-runs 0))
    (is (nil? (c-get alarm)))

    (do (c-reset! x 0)
        (reset-runs)
        (c-reset! x 1)
        (is (= @syn-runs 1))
        (is (= @alarm-runs 1))
        (is (= :off (c-get alarm))))

    (do (c-reset! x 0)
        (reset-runs)
        (c-reset! x 1)
        (c-reset! x 2)
        (c-reset! x -5)
        (is (= @syn-runs 3))
        (is (= @alarm-runs 3))
        (is (= :on (c-get alarm))))))




(deftest synaptic-sensitivity
  ; here we look at a twist on the delta synapse: this time we report the
  ; unmodified stream value only when it has changed by a certain amount
  ; when compared with the prior value reported
  (cells-init)
  (let [syn-runs (atom 0)
        alarm-runs (atom 0)
        reset-runs (fn []
                     (reset! syn-runs 0)
                     (reset! alarm-runs 0))
        x (cI 0)
        alarm (cF (when-let [changed-x (with-synapse (:sensitivity-x [sensitivity 3
                                                                      reported (atom nil)])
                                         (when-let [x (c-get x)]
                                           (swap! syn-runs inc)
                                           (cond
                                             (or (nil? @reported)
                                               (>= (Math/abs (- x @reported))
                                                 sensitivity))
                                             (do (reset! reported x)
                                                 ^{:propagate true} [x])

                                             :default ^{:propagate false} [x])))]
                    (println :changed changed-x)
                    (swap! alarm-runs inc)
                    (if (> changed-x 5)
                      :on :off)))]

    (do (reset-runs)
        (println :warm-up (c-get alarm))
        (is (= @syn-runs 1))
        (is (= @alarm-runs 1))
        (is (= :off (c-get alarm))))

    (do (c-reset! x 0)
        (reset-runs)
        (c-reset! x 1)
        (is (= @syn-runs 1))
        (is (= @alarm-runs 0))
        (is (= :off (c-get alarm))))

    (let [max 5]
      (c-reset! x -1)
      (reset-runs)
      (doseq [n (range max)]
        (c-reset! x n))
      (is (= @syn-runs max))
      (is (= @alarm-runs 1))
      (is (= :off (c-get alarm)))
      (c-reset! x 6)
      (is (= :on (c-get alarm))))))

(deftest synaptic-grouping
  (cells-init)
  (let [x (cI nil)
        y (cF (when-let [g (with-synapse (:grouper [buffer (atom [])])
                             (when-let [myx (c-get x)]
                               (swap! buffer conj myx)
                               (let [buffer-val @buffer]
                                 (cond
                                   (= (count buffer-val) 3)
                                   (do
                                     (reset! buffer [])
                                     (println :syn-propping!!!!! buffer-val)
                                     ^{:propagate true} [buffer-val])

                                   :default ^{:propagate false} [buffer-val]))))]
                (println :new-g g)
                (is (= 3 (count g)))

                g))]
    (println :warm-up (c-get y))
    (doseq [n (range 10)]
      (c-reset! x n))

    (is (= (c-get y) [6 7 8]))))