(ns tiltontec.cell.observer-test
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
                     c-unbound? c-input? ia-type?
                     c-model mdead? c-valid? c-useds c-ref? md-ref?
                     c-state +pulse+ c-pulse-observed
                     *call-stack* *defer-changes*
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
             :refer-macros [c? c?+]
             :refer [c-in]]
      :clj [tiltontec.cell.core :refer :all])
   ))



#?(:cljs (set! *print-level* 3))

(deftest t-formula
  (let [bingo (atom false)
        c (c?+ [:slot :bingo
                :obs (fn-obs
                      (reset! bingo true))]
               (+ 40 2))]
    (is (ia-type? c ::cty/cell))
    (is (ia-type? c ::cty/c-formula))
    (is (= (c-value-state c) :unbound))
    (is (= #{} (c-callers c)))
    (is (= #{} (c-useds c)))
    (is (not (c-input? c)))
    (is (not (c-valid? c)))
    (is (nil? (c-model c)))
    (is (= (c-get c) 42))
    (is (= 42 @c)) ;; ie, optimized-away
    (is @bingo)
    ))

(def bingo2 (atom false))

(deftest test-input
  (let [c (c-in 42 :slot :bingo2
                :obs (fn-obs (reset! bingo2 true)))]
    (is (ia-type? c ::cty/cell))
    (is (= (c-value-state c) :valid))
    (is (= #{} (c-callers c)))
    (is (c-input? c))
    (is (c-valid? c))
    (is (nil? (c-model c)))
    (is (= :bingo2 (c-slot c) (c-slot-name c)))
    (is (= (c-get c) 42))
    (is @bingo2)
    ))


(deftest t-custom-obs
  (let [bobs (atom nil)
        b (c-in 2 :slot :bb
                :obs (fn-obs
                       (trx nil slot me new old)
                       (reset! bobs new)))
        cobs (atom nil)
        c (c?+ [:obs (fn-obs [slot me new old c]
                       (trx slot me new old)
                       (reset! cobs new))]
               (* 10 (c-get b)))]
    (#?(:clj dosync :cljs do)
     (is (= (c-get b) 2))
     (is (= @bobs 2))
     (is (= (c-get c) 20))
     ;; (is (= @cobs 20))
     ;; (c-reset! b 3)
     ;; (is (= 3 @bobs))
     ;; (is (= 30 (c-get c)))
     ;; (is (= 30 @cobs))
     )))

#?(:cljs (do
           (cljs.test/run-tests)
             ))


;; (def obj #?(:clj Object :cljs js/Object))

;; (defmulti speak2 (fn [one two] [(:type (meta one))(:type (meta two))]))

;; (derive ::dog ::animal)
;; (derive ::cat ::animal)

;; (defmethod speak2 [::dog obj] [_ _]
;;   (println :woof))

;; (speak2 (atom nil :meta {:type ::dog}) (atom nil :meta {:type obj}))

;; (defmethod speak2 [::cat obj] [_ _]
;;   (println :meow))

;; (speak2 (atom nil :meta {:type ::cat})  (atom nil :meta {:type obj}))

;; (speak2 (atom nil :meta {:type ::dog})  (atom nil :meta {:type obj}))
