(ns tiltontec.cell.observer-test
  (:require
    #?(:clj  [clojure.test :refer :all]
       :cljs [cljs.test
              :refer-macros [deftest is are]])
    #?(:cljs [tiltontec.util.base
              :refer [mx-type?]
              :refer-macros [trx prog1]]
       :clj  [tiltontec.util.base
              :refer :all])
    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [c-optimized-away? c-formula? c-value c-optimize
                      c-unbound? c-input?
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state *pulse* c-pulse-observed
                      *call-stack* *defer-changes*
                      c-rule c-me c-value-state c-callers caller-ensure
                      unlink-from-callers *causation*
                      c-prop-name c-synapticF caller-drop
                      c-pulse c-pulse-last-changed c-ephemeral? c-prop
                      *depender* *quiesce*
                      *c-prop-depth* md-prop-owning? c-lazy] :as cty])
    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]]
       :clj  [tiltontec.cell.integrity :refer [with-integrity]])
    [tiltontec.cell.evaluate :refer [c-get]]
    #?(:clj  [tiltontec.cell.observer
              :refer [defobserver fn-obs]]
       :cljs [tiltontec.cell.observer
              :refer-macros [defobserver fn-obs]])

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF+]
              :refer [c-in]]
       :clj  [tiltontec.cell.core :refer :all])
    ))

#?(:cljs (set! *print-level* 3))

(deftest t-formula
  (with-mx
    (let [bingo (atom false)
          c (cF+ [:prop :bingo
                  :watch (fn-obs
                         (reset! bingo true))]
              (+ 40 2))]
      (is (mx-type? c ::cty/cell))
      (is (mx-type? c ::cty/c-formula))
      (is (= (c-value-state c) :unbound))
      (is (= #{} (c-callers c)))
      (is (= #{} (c-useds c)))
      (is (not (c-input? c)))
      (is (not (c-valid? c)))
      (is (nil? (c-model c)))
      (is (= (c-get c) 42))
      (is (= 42 @c))                                        ;; ie, optimized-away
      (is @bingo))))

(def bingo2 (atom false))

(deftest test-input
  (with-mx
    (let [c (cI 42 :prop :bingo2
            :watch (fn-obs (reset! bingo2 true)))]
    (is (mx-type? c ::cty/cell))
    (is (= (c-value-state c) :valid))
    (is (= #{} (c-callers c)))
    (is (c-input? c))
    (is (c-valid? c))
    (is (nil? (c-model c)))
    (is (= :bingo2 (c-prop c) (c-prop-name c)))
    (is (= (c-get c) 42))
    (is (= false @bingo2)))))

(deftest test-input-obs
  (with-mx
    (let [c (cI 42 :prop :bingo2
              :obs (fn-obs (reset! bingo2 true)))]
      (is (mx-type? c ::cty/cell))
      (is (= (c-value-state c) :valid))
      (is (= #{} (c-callers c)))
      (is (c-input? c))
      (is (c-valid? c))
      (is (nil? (c-model c)))
      (is (= :bingo2 (c-prop c) (c-prop-name c)))
      (is (= (c-get c) 42))
      (is (= false @bingo2)))))

(deftest t-custom-obs
  (with-mx
    (let [bobs (atom nil)
        b (cI 2 :prop :bb
            :watch (fn-obs
                   (trx nil prop me new old)
                   (reset! bobs new)))
        cobs (atom nil)
        c (cF+ [:watch (fn-obs [prop me new old c]
                       (trx prop me new old)
                       (reset! cobs new))]
            (* 10 (c-get b)))]
    (#?(:clj dosync :cljs do)
      (is (= (c-get b) 2))
      (is (= @bobs nil))
      (is (= (c-get c) 20))
      (is (= @cobs 20))
      (c-reset! b 3)
      (is (= 3 @bobs))
      (is (= 30 (c-get c)))
      (is (= 30 @cobs))))))

#?(:cljs (cljs.test/run-tests))


