(ns tiltontec.cell.synapse-test
  ;;#?(:cljs (:import [goog.net XhrIo]))
  (:require
   #?(:clj  [clojure.test :refer :all]
      :cljs [cljs.test :refer-macros [deftest is use-fixtures]])
   #?(:clj [tiltontec.cell.synapse :refer [with-synapse]]
      :cljs [tiltontec.cell.synapse :refer-macros [with-synapse]])
   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF cF+ c_F cF_ with-mx]
             :refer [c-reset! cI]]
      :clj
      [tiltontec.cell.core :refer :all])
   [tiltontec.cell.evaluate :refer [cget]]))

(defn prn-level-3 [f]
  (binding [*print-level* 3] (f)))

(use-fixtures :once prn-level-3)

(deftest non-syn-even-filtering
  ; first we look at how a formula can filter inputs *without* any special
  ; support, just by having the rule close over some state.
  (with-mx
    (let [max 10
          x (cI nil)
          y (let [prior (atom nil)]
              (cF (when-let [x (cget x)]
                    (if (even? x)
                      (reset! prior x)
                      @prior))))
          z-runs (atom 0)
          z (cF
             (when-let [y (cget y)]
               (swap! z-runs inc)
               (assert (even? y)))
             y)]
      (println :warm-up (cget z))
      (doseq [n (range max)]
        (c-reset! x n))
      (is (= @z-runs (count (filter even? (range max))))))))

(deftest synaptic-even-filtering
  ; now we look at how a synapse (an anonymous cell usable only by its containing formula)
  ; can achieve the same filtering.
  (with-mx
    (let [max 10
          x (cI nil)
          syn-runs (atom 0)
          z-runs (atom 0)
          z (cF (when-let [x (with-synapse (:even-x)
                               (when-let [x (cget x)]
                                 (swap! syn-runs inc)
                                 (if (even? x)
                                   ^{:propagate true} [x]
                                   ^{:propagate false} [nil])))]
                  (println :x-see-x x)
                  (swap! z-runs inc)
                  (assert (even? x))
                  x))]
      (println :warm-up (cget z))
      (doseq [n (range max)]
        (c-reset! x n))
      (is (= @syn-runs (count (range max))))
      (is (= @z-runs (count (filter even? (range max))))))))

(deftest synaptic-delta
  ; now we look at a simple stream behavior, returning the delta of two consecutive values
  (with-mx
    (let [syn-runs (atom 0)
          alarm-runs (atom 0)
          reset-runs (fn []
                       (reset! syn-runs 0)
                       (reset! alarm-runs 0))
          x (cI nil)
          alarm (cF (when-let [d (with-synapse [:delta-x [prior (atom nil)]]
                                   (when-let [x (cget x)]
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
      (println :warm-up (cget alarm))
      (is (= @syn-runs 0))
      (is (= @alarm-runs 0))
      (is (nil? (cget alarm)))

      (do (c-reset! x 0)
          (reset-runs)
          (c-reset! x 1)
          (is (= @syn-runs 1))
          (is (= @alarm-runs 1))
          (is (= :off (cget alarm))))

      (do (c-reset! x 0)
          (reset-runs)
          (c-reset! x 1)
          (c-reset! x 2)
          (c-reset! x -5)
          (is (= @syn-runs 3))
          (is (= @alarm-runs 3))
          (is (= :on (cget alarm)))))))

(deftest synaptic-sensitivity
  ; here we look at a twist on the delta synapse: this time we report the
  ; unmodified stream value only when it has changed by a certain amount
  ; when compared with the prior value reported
  (with-mx
    (let [syn-runs (atom 0)
          alarm-runs (atom 0)
          reset-runs (fn []
                       (reset! syn-runs 0)
                       (reset! alarm-runs 0))
          x (cI 0)
          alarm (cF (when-let [changed-x (with-synapse (:sensitivity-x [sensitivity 3
                                                                        reported (atom nil)])
                                           (when-let [x (cget x)]
                                             (swap! syn-runs inc)
                                             (cond
                                               (or (nil? @reported)
                                                   (>= (Math/abs (- x @reported))
                                                       sensitivity))
                                               (do (reset! reported x)
                                                   ^{:propagate true} [x])

                                               :else ^{:propagate false} [x])))]
                      (println :changed changed-x)
                      (swap! alarm-runs inc)
                      (if (> changed-x 5)
                        :on :off)))]

      (do (reset-runs)
          (println :warm-up (cget alarm))
          (is (= @syn-runs 1))
          (is (= @alarm-runs 1))
          (is (= :off (cget alarm))))

      (do (c-reset! x 0)
          (reset-runs)
          (c-reset! x 1)
          (is (= @syn-runs 1))
          (is (= @alarm-runs 0))
          (is (= :off (cget alarm))))

      (let [max 5]
        (c-reset! x -1)
        (reset-runs)
        (doseq [n (range max)]
          (c-reset! x n))
        (is (= @syn-runs max))
        (is (= @alarm-runs 1))
        (is (= :off (cget alarm)))
        (c-reset! x 6)
        (is (= :on (cget alarm)))))))

(deftest synaptic-grouping
  (with-mx
    (let [x (cI nil)
          y (cF (when-let [g (with-synapse (:grouper [buffer (atom [])])
                               (when-let [myx (cget x)]
                                 (swap! buffer conj myx)
                                 (let [buffer-val @buffer]
                                   (cond
                                     (= (count buffer-val) 3)
                                     (do
                                       (reset! buffer [])
                                       ^{:propagate true} [buffer-val])

                                     :else ^{:propagate false} [buffer-val]))))]

                  (is (= 3 (count g)))

                  g))]
      (println :warm-up (cget y))
      (doseq [n (range 10)]
        (c-reset! x n))

      (is (= (cget y) [6 7 8])))))
