(ns tiltontec.cell.lazy-cells-test
  (:require
   #?(:clj [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.util.base
             :refer-macros [trx prog1]]
      :clj  [tiltontec.util.base
             :refer :all])
   #?(:clj [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [c-optimized-away? c-formula? c-value c-optimize
                     c-unbound? c-input? ia-type? cells-init
                     c-model mdead? c-valid? c-useds c-ref? md-ref?
                     c-state +pulse+ c-pulse-observed
                     *call-stack* *defer-changes* unbound
                     c-rule c-me c-value-state c-callers caller-ensure
                     unlink-from-callers *causation*
                     c-slot-name c-synaptic? caller-drop
                     c-pulse c-pulse-last-changed c-ephemeral? c-slot
                     *depender* *not-to-be* 
                     *c-prop-depth* md-slot-owning? c-lazy] :as cty])
   #?(:cljs [tiltontec.cell.integrity
             :refer-macros [with-integrity]]
      :clj [tiltontec.cell.integrity :refer [with-integrity]])
   [tiltontec.cell.evaluate :refer [c-get]]
   #?(:clj [tiltontec.cell.observer
            :refer [defobserver fn-obs]]
      :cljs [tiltontec.cell.observer
             :refer-macros [defobserver fn-obs]])

   #?(:cljs [tiltontec.cell.core
             :refer-macros [c? c?+ c_? c?_]
             :refer [c-in c-reset!]]
      :clj [tiltontec.cell.core :refer :all])
   ))


(deftest solid-lazy
  (cells-init)
  (let [xo (atom 0)
        a (c-in 0)
        x (c?_ [:obs (fn-obs (swap! xo inc))]
               (+ (c-get a) 40))]
    (is (= unbound (:value @x)))
    (is (= 0 @xo))
    (is (= 40 (c-get x)))
    (is (= 1 @xo)) 
    (c-reset! a 100)
    (is (= 1 @xo))
    (is (= 40 (:value @x)))
    (is (= 140 (c-get x)))
    (is (= 2 @xo)) 
    ))

(deftest lazy-until-asked
  (cells-init)
  (let [xo (atom 0)
        xr (atom 0)
        a (c-in 0)
        x (c_? [:obs (fn-obs (swap! xo inc))]
               (swap! xr inc)
               (+ (c-get a) 40))]
    (is (= unbound (:value @x)))
    (is (= 0 @xo))
    (is (= 0 @xr))
    (is (= 40 (c-get x)))
    (is (= 1 @xo))
    (is (= 1 @xr)) 
    (c-reset! a 100)
    (is (= 2 @xo))
    (is (= 2 @xr))
    (is (= 140 (:value @x)))
    (is (= 140 (c-get x)))
    (is (= 2 @xo)) 
    (is (= 2 @xr)) 
    ))

(deftest optimize-when-value-t
  (cells-init)
  (let [xo (atom 0)
        xr (atom 0)
        a (c-in 0 :slot :aaa)
        x (c?+ [:slot :xxx
               :obs (fn-obs (swap! xo inc))
               :optimize :when-value-t]
              (swap! xr inc)
              (trx nil :reading-a!!!)
              (when-let [av (c-get a)]
                (when (> av 1)
                  (+ av 40))))]
    (is (nil? (c-get x)))
    (is (= #{a} (c-useds x)))
    (c-reset! a 1)
    (trx nil :reset-finished!!!!!!!!!!)
    (is (nil? (c-get x)))
    (is (= #{a} (c-useds x)))
    (trx nil :reset-2-beginning!!!!!!!!!!!!)
    (c-reset! a 2)
    (trx nil :reset-2-finished!!!!!!!!!!)
    (is (= 42 (c-get x)))
    (is (empty? (c-useds x)))
    (trx nil :useds (c-useds x))
    (is (empty? (c-callers x)))
    ))

#?(:cljs (do
           (cljs.test/run-tests)
           ))
