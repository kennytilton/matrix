(ns tiltontec.cell.core-test
  (:require
   #?(:clj [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.util.base
             :refer-macros [trx prog1 *trx?*]]
      :clj  [tiltontec.util.base
             :refer :all])
   [tiltontec.util.core :refer [type-of err]]
   #?(:clj [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                     c-unbound? c-input? ia-type?
                     c-model mdead? c-valid? c-useds c-ref? md-ref?
                     c-state +pulse+ c-pulse-observed
                     *call-stack* *defer-changes* unbound
                     c-rule c-me c-value-state c-callers caller-ensure
                     unlink-from-callers *causation*
                     c-slot-name c-synaptic? caller-drop
                     c-pulse c-pulse-last-changed c-ephemeral? c-slot c-slots
                     *depender* *not-to-be* 
                     *c-prop-depth* md-slot-owning? c-lazy] :as cty])
   #?(:cljs [tiltontec.cell.integrity
             :refer-macros [with-integrity]]
      :clj [tiltontec.cell.integrity :refer [with-integrity]])
   #?(:clj [tiltontec.cell.observer
            :refer [defobserver fn-obs]]
      :cljs [tiltontec.cell.observer
             :refer-macros [defobserver fn-obs]])

   [tiltontec.cell.evaluate :refer [c-get c-awaken]]

   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI c-reset! make-cell]]
      :clj [tiltontec.cell.core :refer :all])

   ))

#?(:cljs (set! *print-level* 3))


(deftest test-input
  (let [c (make-cell 
             :slot :mol
             :value 42)]
    (is (ia-type? c ::cty/cell))
    (is (= (c-value c) 42))
    (is (= (c-value-state c) :valid))
    (is (= #{} (c-callers c)))
    (is (c-input? c))
    (is (nil? (c-model c)))
    (is (= :mol (c-slot c)))
    ))

(deftest test-c-in
  (let [c (cI 42)]
    (is (ia-type? c ::cty/cell))
    (is (= (c-value c) 42))
    (is (= (c-value-state c) :valid))
    (is (= #{} (c-callers c)))
    (is (c-input? c))
    (is (c-valid? c))
    (is (nil? (c-model c)))
    ))

(deftest test-c-in+
  (let [c (cI 42 :slot :cool)]
    (is (c-ref? c))
    (is (= (c-value c) 42))
    (is (= (c-value-state c) :valid))
    (is (= #{} (c-callers c)))
    (is (c-input? c))
    (is (nil? (c-model c)))
    (is (= :cool (c-slot c)(c-slot-name c)))
    ))

(deftest test-c-formula
  (let [c (cF (+ 40 2))]
    (is (ia-type? c ::cty/c-formula))
    (is (fn? (c-rule c)))
    (is (= (c-value c) unbound))
    (is (= (c-value-state c) :unbound))
    (is (= #{} (c-callers c)))
    (is (= #{} (c-useds c)))
    (is (not (c-input? c)))
    (is (nil? (c-model c)))
    ))

(deftest t-cF+
  (let [c (cF+ (:optimize false :slot :bingo)
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
    (is (= :bingo (c-slot c)(c-slot-name c)))))


(deftest t-eph-1
  (cells-init)
  (let [boct (atom 0)
        b (cI nil
                :slot :b
                :obs (fn-obs
                       (do (trx :b-obs!)
                           (swap! boct inc)))
                :ephemeral? true)
        crun (atom 0)
        cobs (atom 0)
        c (cF+ [:slot :c
                :obs (fn-obs (swap! cobs inc))]
               (trx :bingo-c-run)
               (swap! crun inc)
               (prog1
                (str "Hi " (c-get b))
                (trx nil :cellread!! @b)))]
    (c-awaken b)
    (assert (c-rule c) "Early no rule")

    (is (nil? (c-value b)))
    (trx :valstate (c-value-state b))
    (is (= :valid (c-value-state b)))
    (is (c-valid? b))
    (trx nil b)
    (trx nil @b)
    (is (c-valid? b))
    (is (= "Hi " (c-get c)))
    (is (= 0 @boct))
    (is (= 1 @crun @cobs))
    (is (nil? (:value @b)))

    (do
      (c-reset! b "Mom")
      (is (= "Hi Mom" (c-get c)))
      (is (= 1 @boct))
      (is (= 2 @crun @cobs))
      (is (nil? (c-value b)))
      (is (nil? (:value @b))))

    (do
      (c-reset! b "Mom")
      (is (= "Hi Mom" (c-get c)))
      (is (= 2 @boct))
      (is (= 3 @crun))
      (is (= 2 @cobs))
      (is (nil? (c-value b)))
      (is (nil? (:value @b))))
    ))


(deftest t-cFn
  (let [a (cI 42 :slot :aa)
        b (cFn [:slot :bb]
              (/ (c-get a) 2))
        c (cF (+ 1 (c-get b)))]
    (is (= 21 (c-get b)))
    (is (= 22 (c-get c)))
    (c-reset! b 42)
    (is (= 42 (c-get b)))
    (is (= 43 (c-get c)))))

(deftest t-cFonce
  (let [a (cI 42 :slot :aa)
        b (cFonce [:slot :bb]
              (/ (c-get a) 2))]
    (is (= 21 (c-get b)))

    (comment
      (c-reset! a 2)

      (is (= 2 (c-get a)))
      (is (= 21 (c-get b))))))

#?(:cljs (do
           (cljs.test/run-tests)
           ))
