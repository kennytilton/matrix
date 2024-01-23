(ns tiltontec.cell.lazy-cells-test
  (:require
   #?(:clj [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is]])
   #?(:cljs [tiltontec.util.base
             :refer-macros [trx]]
      :clj  [tiltontec.util.base
             :refer [trx]])
   #?(:clj [tiltontec.cell.base :refer [c-callers c-useds cells-init unbound] :as cty]
      :cljs [tiltontec.cell.base
             :refer [c-callers c-useds cells-init unbound] :as cty])
   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF+ c_F cF_]
             :refer [c-reset! cI]]
      :clj [tiltontec.cell.core :refer [c-reset! c_F cF+ cF_ cI]])
   [tiltontec.cell.evaluate :refer [cget]]
   [tiltontec.matrix.api :refer [fn-watch]]))

(deftest solid-lazy
  (cells-init)
  (let [xo (atom 0)
        a (cI 0)
        x (cF_ [:watch (fn-watch (swap! xo inc))]
               (+ (cget a) 40))]
    (is (= unbound (:value @x)))
    (is (= 0 @xo))
    (is (= 40 (cget x)))
    (is (= 1 @xo))
    (c-reset! a 100)
    (is (= 1 @xo))
    (is (= 40 (:value @x)))
    (is (= 140 (cget x)))
    (is (= 2 @xo))))

(deftest lazy-until-asked
  (cells-init)
  (let [xo (atom 0)
        xr (atom 0)
        a (cI 0)
        x (c_F [:watch (fn-watch (swap! xo inc))]
               (swap! xr inc)
               (+ (cget a) 40))]
    (is (= unbound (:value @x)))
    (is (= 0 @xo))
    (is (= 0 @xr))
    (is (= 40 (cget x)))
    (is (= 1 @xo))
    (is (= 1 @xr))
    (c-reset! a 100)
    (is (= 2 @xo))
    (is (= 2 @xr))
    (is (= 140 (:value @x)))
    (is (= 140 (cget x)))
    (is (= 2 @xo))
    (is (= 2 @xr))))

(deftest optimize-when-value-t
  (cells-init)
  (let [xo (atom 0)
        xr (atom 0)
        a (cI 0 :prop :aaa)
        x (cF+ [:prop :xxx
                :watch (fn-watch (swap! xo inc))
                :optimize :when-value-t]
               (swap! xr inc)
               (trx nil :reading-a!!!)
               (when-let [av (cget a)]
                 (when (> av 1)
                   (+ av 40))))]
    (is (nil? (cget x)))
    (is (= #{a} (c-useds x)))
    (c-reset! a 1)
    (trx nil :reset-finished!!!!!!!!!!)
    (is (nil? (cget x)))
    (is (= #{a} (c-useds x)))
    (trx nil :reset-2-beginning!!!!!!!!!!!!)
    (c-reset! a 2)
    (trx nil :reset-2-finished!!!!!!!!!!)
    (is (= 42 (cget x)))
    (is (empty? (c-useds x)))
    (trx nil :useds (c-useds x))
    (is (empty? (c-callers x)))))

#?(:cljs (do
           (cljs.test/run-tests)))
