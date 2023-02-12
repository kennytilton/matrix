(ns tiltontec.cell.opti-freeze-test
  (:require
    #?(:clj  [clojure.test :refer :all]
       :cljs [cljs.test
              :refer-macros [deftest is are]])
    #?(:cljs [tiltontec.util.base
              :refer-macros [trx prog1]
              :refer [*trx?*]]
       :clj  [tiltontec.util.base
              :refer :all])
    [tiltontec.util.core :refer [type-of err]]
    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                      c-unbound? c-input? ia-type?
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state *pulse* c-pulse-observed
                      *call-stack* *defer-changes*
                      c-rule c-me c-value-state c-callers caller-ensure
                      unlink-from-callers *causation*
                      c-slot-name c-synaptic? caller-drop
                      c-pulse c-pulse-last-changed c-ephemeral? c-slot c-slots
                      *depender* *finalize*
                      *c-prop-depth* md-slot-owning? c-lazy] :as cty])
    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]]
       :clj  [tiltontec.cell.integrity :refer [with-integrity]])
    #?(:clj  [tiltontec.cell.observer
              :refer [defobserver fn-obs]]
       :cljs [tiltontec.cell.observer
              :refer-macros [defobserver fn-obs]])

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF+ c-swap! c-reset-next!]
              :refer [cI c-reset!]]
       :clj  [tiltontec.cell.core :refer :all])

    [tiltontec.cell.evaluate :refer [c-get]]
    ))

(deftest opti-away
  (with-mx
    (let [aa (cF 42)]
      (is (= 42 (c-get aa)))
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
    (let [a (cI 1 :slot :aa)
          b (cF+ [:slot :bb]
              42)                                           ;; should optimize away
          c (cF+ [:slot :cc]
              (inc (c-get b)))                              ;; should recursively optimize away, since b should
          d (cF+ [:slot :dd]
              (if (< (c-get a) 3)
                (+ (c-get a) (c-get b) (c-get c))
                17))
          ect (atom 0)
          e (let [frozen (atom nil)]
              (cF+ [:slot :ee]
                (swap! ect inc)
                (prn :efrz @ect @frozen)
                (if @frozen
                  _cache
                  (if (< (c-get a) 3)
                    (+ (c-get a) (c-get b) (c-get c))
                    (do (reset! frozen true)
                        _cache)))))]
      (#?(:clj dosync :cljs do)
        (is (= (c-get a) 1))
        (is (= (c-get b) 42))
        (is (= (c-get c) 43))
        (is (= (c-get d) 86))
        (is (c-optimized-away? b))
        (is (not (seq (c-useds b))))
        (is (c-optimized-away? c))
        (is (not (seq (c-useds c))))
        (is (not (c-optimized-away? d)))
        (is (= 1 (count (c-useds d))))
        (is (= 86 (c-get e)))
        (is (not (c-optimized-away? e)))
        (is (= 1 (count (c-useds e))))
        (is (= 1 @ect))
        )

      (c-swap! a inc)
      (is (= (c-get a) 2))
      (is (= (c-get d) 87))
      (is (= (c-get e) 87))
      (is (= 2 @ect))

      (c-swap! a inc)
      (is (= (c-get a) 3))
      (is (= (c-get d) 17))
      (is (= (c-get e) 87))
      (is (= 3 @ect))

      (c-swap! a inc)
      (is (= (c-get a) 4))
      (is (= (c-get d) 17))
      (is (= (c-get e) 87))
      (is (not (seq (c-useds e))))
      (is (c-optimized-away? e))
      (is (= 4 @ect))

      (c-swap! a inc)
      (is (= (c-get a) 5))
      (is (c-optimized-away? e))
      (is (= 4 @ect)))))

(deftest t-opti-late-via-cf-freeze
  ; testing the usual case where a formula turns out, on first evaluation, not to depend on
  ; any cell, as well as the case where, once evaluated, on a subsequent evaluation a
  ; cell has no dependencies.
  (with-mx
    (let [a (cI 1 :slot :aa)
          b (cF+ [:slot :bb]
              42)                                           ;; should optimize away
          c (cF+ [:slot :cc]
              (inc (c-get b)))                              ;; should recursively optimize away, since b should
          d (cF+ [:slot :dd]
              (if (< (c-get a) 3)
                (+ (c-get a) (c-get b) (c-get c))
                17))
          ect (atom 0)
          e (cF+ [:slot :ee]
              (swap! ect inc)
              (if (< (c-get a) 3)
                (+ (c-get a) (c-get b) (c-get c))
                (cf-freeze _cache)))]
      (#?(:clj dosync :cljs do)
        (is (= (c-get a) 1))
        (is (= (c-get b) 42))
        (is (= (c-get c) 43))
        (is (= (c-get d) 86))
        (is (c-optimized-away? b))
        (is (not (seq (c-useds b))))
        (is (c-optimized-away? c))
        (is (not (seq (c-useds c))))
        (is (not (c-optimized-away? d)))
        (is (= 1 (count (c-useds d))))
        (is (= 86 (c-get e)))
        (is (not (c-optimized-away? e)))
        (is (= 1 (count (c-useds e))))
        (is (= 1 @ect)))

      (c-swap! a inc)
      (is (= (c-get a) 2))
      (is (= (c-get d) 87))
      (is (= (c-get e) 87))
      (is (= 2 @ect))

      (c-swap! a inc)
      (is (= (c-get a) 3))
      (is (= (c-get d) 17))
      (is (= (c-get e) 87))
      (is (= 3 @ect))

      (c-swap! a inc)
      (is (= (c-get a) 4))
      (is (= (c-get d) 17))
      (is (= (c-get e) 87))
      (is (not (seq (c-useds e))))
      (is (c-optimized-away? e))
      ; unlike the artificial freeze, the cf-freeze mechanism does not require
      ; an extra invocation during which no dependencies are sampled in order to
      ; get optimized away. cf-freeze optimizes on the spot.
      (is (= 3 @ect)))))

(deftest t-freeze-default
  ; confirm (cf-freeze) behaves same as (cf-freeze _cache)
  (with-mx
    (let [a (cI 1 :slot :aa)
          b (cF+ [:slot :bb]
              (if (= 2 (c-get a))
                (cf-freeze)
                42))]
      (is (= 1 (c-get a)))
      (is (= 42 (c-get b)))
      (c-swap! a inc)
      (is (= 2 (c-get a)))
      (is (= 42 (c-get b)))
      (is (c-optimized-away? b))
      (is (not (seq (c-callers a)))))))

(deftest t-freeze-propagates
  ; confirm (cf-freeze) behaves same as (cf-freeze _cache)
  (with-mx
    (let [a (cI nil :slot :aa)
          b (cF+ [:slot :bb]
              (when (c-get a)
                (cf-freeze 42)))
          c (cF+ [:slot :cc]
              (prn :cc-runs!!)
              (let [b (c-get b)]
                (prn :cc-sees-b b)
                (if b
                  [:bam b]
                  (do (prn :no-bb)
                      nil))))]
      (is (= nil (c-get a)))
      (is (= nil (c-get b)))
      (is (= nil (c-get c)))
      (prn :post-init-pulse (pulse-now))
      (c-reset! a true)
      (prn :post-reset-pulse (pulse-now))
      (is (= 42 (c-get b)))
      (prn :cnow (c-get c))
      (is (= [:bam 42] (c-get c))))))

