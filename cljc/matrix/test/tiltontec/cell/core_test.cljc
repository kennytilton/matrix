(ns tiltontec.cell.core-test
  (:require
   #?(:clj  [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.util.base
             :refer [mx-type mx-type?]
             :refer-macros [trx prog1 *trx?*]]
      :clj  [tiltontec.util.base
             :refer :all])
   #?(:clj  [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [c-callers c-input? c-model c-optimize c-prop c-prop-name
                     c-ref? c-rule c-useds c-valid? c-value c-value-state
                     unbound] :as cty])
   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF cF+ cFonce cFn]
             :refer [c-reset! cI make-cell]]
      :clj  [tiltontec.cell.core :refer :all])
   [tiltontec.cell.evaluate :refer [cget]]
   [tiltontec.cell.poly :refer [c-awaken]]
   [tiltontec.matrix.api :refer [fn-watch]]))

#?(:cljs (set! *print-level* 3))

(deftest test-input
  (with-mx
    (let [c (make-cell
             :prop :mol
             :value 42)]
      (prn :cell @c)
      (prn :meta (meta c))
      (prn :mx-type (mx-type c) :type (type c))
      (is (mx-type? c ::cty/cell))
      (is (= (c-value c) 42))
      (is (= (c-value-state c) :valid))
      (is (= #{} (c-callers c)))
      (is (c-input? c))
      (is (nil? (c-model c)))
      (is (= :mol (c-prop c))))))

(deftest test-c-in
  (with-mx
    (let [c (cI 42)]
      (is (mx-type? c ::cty/cell))
      (is (= (c-value c) 42))
      (is (= (c-value-state c) :valid))
      (is (= #{} (c-callers c)))
      (is (c-input? c))
      (is (c-valid? c))
      (is (nil? (c-model c))))))

(deftest test-c-in+
  (with-mx
    (let [c (cI 42 :prop :cool)]
      (is (c-ref? c))
      (is (= (c-value c) 42))
      (is (= (c-value-state c) :valid))
      (is (= #{} (c-callers c)))
      (is (c-input? c))
      (is (nil? (c-model c)))
      (is (= :cool (c-prop c) (c-prop-name c))))))

(deftest test-c-formula
  (with-mx
    (let [c (cF (+ 40 2))]
      (is (mx-type? c ::cty/c-formula))
      (is (fn? (c-rule c)))
      (is (= (c-value c) unbound))
      (is (= (c-value-state c) :unbound))
      (is (= #{} (c-callers c)))
      (is (= #{} (c-useds c)))
      (is (not (c-input? c)))
      (is (nil? (c-model c))))))

(deftest t-cF+
  (with-mx
    (let [c (cF+ (:optimize false :prop :bingo)
                 (trx nil :cool)
                 (+ 40 2))]
      (is (c-ref? c))
      (is (fn? (c-rule c)))
      (is (= (c-value c) unbound))
      (is (= (c-value-state c) :unbound))
      (is (= #{} (c-callers c)))
      (is (= #{} (c-useds c)))
      (is (not (c-input? c)))
      (is (nil? (c-model c)))
      (is (not (c-optimize c)))
      (is (= :bingo (c-prop c) (c-prop-name c))))))

(deftest t-eph-1
  (with-mx
    (let [boct (atom 0)
          b (cI nil
                :prop :b
                :watch (fn-watch
                        (swap! boct inc))
                :ephemeral? true)
          crun (atom 0)
          cwatch (atom 0)
          c (cF+ [:prop :c
                  :watch (fn-watch (swap! cwatch inc))]
                 (swap! crun inc)
                 (prog1
                  (str "Hi " (cget b))
                  (trx nil :cellread!! @b)))]
      (assert (c-rule c) "Early no rule")
      (is (= 0 @boct))
      (c-awaken b)

      (is (nil? (c-value b)))
      (is (= :valid (c-value-state b)))
      (is (c-valid? b))
      (is (= 1 @boct))
      (trx nil b)
      (trx nil @b)
      (is (c-valid? b))

      (is (= "Hi " (cget c)))
      (is (= 1 @boct))
      (is (= 1 @crun @cwatch))
      (is (nil? (:value @b)))

      (do
        (c-reset! b "Mom")
        (is (= "Hi Mom" (cget c)))
        (is (= 2 @boct))
        (is (= 2 @crun @cwatch))
        (is (nil? (c-value b)))
        (is (nil? (:value @b))))

      (do
        (c-reset! b "Mom")
        (is (= "Hi Mom" (cget c)))
        (is (= 3 @boct))                                    ;; b as eph reverts to nil, so "Mom" was new again
        (is (= 3 @crun))
        (is (= 2 @cwatch))
        (is (nil? (c-value b)))
        (is (nil? (:value @b)))))))

(deftest t-cFn
  (with-mx
    (let [a (cI 42 :prop :aa)
          b (cFn [:prop :bb]
                 (/ (cget a) 2))
          c (cF (+ 1 (cget b)))]
      (is (= 21 (cget b)))
      (is (= 22 (cget c)))
      (c-reset! b 42)
      (is (= 42 (cget b)))
      (is (= 43 (cget c))))))

(deftest t-cFonce
  (with-mx
    (let [a (cI 42 :prop :aa)
          b (cFonce [:prop :bb :debug true]
                    (/ (cget a) 2))]
      (prn :get-b (cget b))
      (prn :cfonce-sees-b @b (meta b))
      (is (= 21 (cget b)))

      (comment
        (c-reset! a 2)

        (is (= 2 (cget a)))
        (is (= 21 (cget b)))))))

(deftest test-c-md-quiesce
  (with-mx
    (let [cc (atom nil)
          c (cI 42 :prop :cool
                :on-quiesce (fn [c]
                              (reset! cc @c)))]
      (is (nil? @cc))
      (is (c-ref? c))
      (is (= (c-value c) 42))
      (is (= (c-value-state c) :valid))
      (is (= #{} (c-callers c)))
      (is (c-input? c))
      (is (nil? (c-model c)))
      (is (= :cool (c-prop c) (c-prop-name c)))
      (#?(:clj dosync :cljs do)
       (tiltontec.cell.evaluate/c-quiesce c))
      (is (not (nil? @cc)))

      (let [c @cc]
        (is (= :cool (:prop c)))))))

#?(:cljs (do
           (cljs.test/run-tests)))


