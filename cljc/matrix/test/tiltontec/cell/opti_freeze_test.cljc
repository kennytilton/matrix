(ns tiltontec.cell.opti-freeze-test
  (:require
   #?(:clj  [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:clj  [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [c-callers c-optimized-away? c-useds] :as cty])
   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF cF+ c-swap! c-reset-next!]
             :refer [c-reset! cI]]
      :clj  [tiltontec.cell.core :refer :all])
   [tiltontec.cell.evaluate :refer [cget]]))

(defn prn-level-3 [f]
  (binding [*print-level* 3] (f)))

(use-fixtures :once prn-level-3)

(deftest opti-away
  (with-mx
    (let [aa (cF 42)]
      (is (= 42 (cget aa)))
      (println :aa @aa)
      (is (c-optimized-away? aa))
      (is (= 42 @aa)))))

(deftest t-opti-late-sans-freeze
  ; testing the usual case where a formula turns out, on first evaluation, not to depend on
  ; any cell, as well as the case where, once evaluated, on a subsequent evaluation a
  ; cell has no dependencies.
  ;
  ; In this first solution, we use a closed-over, non-reactive atom to hold
  ; a boolean "frozen". This gives us something to branch off which, crucially, will
  ; allow a formula to end up with no dependencies on something other than the first
  ; evaluation, because the branch is off the non-reactive atom. (On the first evaluation,
  ; if no dependencies are encountered, the cell gets optimized away immediately.)
  ;
  ; See below for a second solution leveraging support for a new option to dynamically
  ; set the cell :optimize property to :freeze, to signal that the cell should be
  ; optimized away.
  ;
  (with-mx
    (let [a (cI 1 :prop :aa)
          b (cF+ [:prop :bb]
                 42)                                           ;; should optimize away
          c (cF+ [:prop :cc]
                 (inc (cget b)))                              ;; should recursively optimize away, since b should
          d (cF+ [:prop :dd]
                 (if (< (cget a) 3)
                   (+ (cget a) (cget b) (cget c))
                   17))
          ect (atom 0)
          e (let [frozen (atom nil)]
              (cF+ [:prop :ee]
                   (swap! ect inc)
                   (prn :efrz @ect @frozen)
                   (if @frozen
                     _cache
                     (if (< (cget a) 3)
                       (+ (cget a) (cget b) (cget c))
                       (do (reset! frozen true)
                           _cache)))))]
      (#?(:clj dosync :cljs do)
       (is (= (cget a) 1))
       (is (= (cget b) 42))
       (is (= (cget c) 43))
       (is (= (cget d) 86))
       (is (c-optimized-away? b))
       (is (not (seq (c-useds b))))
       (is (c-optimized-away? c))
       (is (not (seq (c-useds c))))
       (is (not (c-optimized-away? d)))
       (is (= 1 (count (c-useds d))))
       (is (= 86 (cget e)))
       (is (not (c-optimized-away? e)))
       (is (= 1 (count (c-useds e))))
       (is (= 1 @ect)))

      (c-swap! a inc)
      (is (= (cget a) 2))
      (is (= (cget d) 87))
      (is (= (cget e) 87))
      (is (= 2 @ect))

      (c-swap! a inc)
      (is (= (cget a) 3))
      (is (= (cget d) 17))
      (is (= (cget e) 87))
      (is (= 3 @ect))

      (c-swap! a inc)
      (is (= (cget a) 4))
      (is (= (cget d) 17))
      (is (= (cget e) 87))
      (is (not (seq (c-useds e))))
      (is (c-optimized-away? e))
      (is (= 4 @ect))

      (c-swap! a inc)
      (is (= (cget a) 5))
      (is (c-optimized-away? e))
      (is (= 4 @ect)))))

(deftest t-opti-late-via-cf-freeze
  ; testing the usual case where a formula turns out, on first evaluation, not to depend on
  ; any cell, as well as the case where, once evaluated, on a subsequent evaluation a
  ; cell has no dependencies.
  (with-mx
    (let [a (cI 1 :prop :aa)
          b (cF+ [:prop :bb]
                 42)                                           ;; should optimize away
          c (cF+ [:prop :cc]
                 (inc (cget b)))                              ;; should recursively optimize away, since b should
          d (cF+ [:prop :dd]
                 (if (< (cget a) 3)
                   (+ (cget a) (cget b) (cget c))
                   17))
          ect (atom 0)
          e (cF+ [:prop :ee]
                 (swap! ect inc)
                 (if (< (cget a) 3)
                   (+ (cget a) (cget b) (cget c))
                   (cf-freeze _cache)))]
      (#?(:clj dosync :cljs do)
       (is (= (cget a) 1))
       (is (= (cget b) 42))
       (is (= (cget c) 43))
       (is (= (cget d) 86))
       (is (c-optimized-away? b))
       (is (not (seq (c-useds b))))
       (is (c-optimized-away? c))
       (is (not (seq (c-useds c))))
       (is (not (c-optimized-away? d)))
       (is (= 1 (count (c-useds d))))
       (is (= 86 (cget e)))
       (is (not (c-optimized-away? e)))
       (is (= 1 (count (c-useds e))))
       (is (= 1 @ect)))

      (c-swap! a inc)
      (is (= (cget a) 2))
      (is (= (cget d) 87))
      (is (= (cget e) 87))
      (is (= 2 @ect))

      (c-swap! a inc)
      (is (= (cget a) 3))
      (is (= (cget d) 17))
      (is (= (cget e) 87))
      (is (= 3 @ect))

      (c-swap! a inc)
      (is (= (cget a) 4))
      (is (= (cget d) 17))
      (is (= (cget e) 87))
      (is (not (seq (c-useds e))))
      (is (c-optimized-away? e))
      ; unlike the artificial freeze, the cf-freeze mechanism does not require
      ; an extra invocation during which no dependencies are sampled in order to
      ; get optimized away. cf-freeze optimizes on the spot.
      (is (= 3 @ect)))))

(deftest t-freeze-default
  ; confirm (cf-freeze) behaves same as (cf-freeze _cache)
  (with-mx
    (let [a (cI 1 :prop :aa)
          b (cF+ [:prop :bb]
                 (if (= 2 (cget a))
                   (cf-freeze)
                   42))]
      (is (= 1 (cget a)))
      (is (= 42 (cget b)))
      (c-swap! a inc)
      (is (= 2 (cget a)))
      (is (= 42 (cget b)))
      (is (c-optimized-away? b))
      (is (not (seq (c-callers a)))))))

(deftest t-freeze-propagates
  ; confirm (cf-freeze) behaves same as (cf-freeze _cache)
  (with-mx
    (let [a (cI nil :prop :aa)
          b (cF+ [:prop :bb :debug true]
                 (when (cget a)
                   (prn :freezing-b 42)
                   (cf-freeze 42)))
          c (cF+ [:prop :cc]
                 (prn :cc-runs!!)
                 (let [b (cget b)]
                   (prn :cc-sees-b b)
                   (if b
                     [:bam b]
                     (do (prn :no-bb)
                         nil))))]
      (is (= nil (cget a)))
      (is (= nil (cget b)))
      (is (= nil (cget c)))
      (prn :post-init-pulse (pulse-now))
      (c-reset! a true)
      (prn :post-reset-pulse (pulse-now))
      (prn :chk-b @b (cget b))
      (is (= 42 (cget b)))
      (prn :cnow (cget c))
      (is (= [:bam 42] (cget c))))))

