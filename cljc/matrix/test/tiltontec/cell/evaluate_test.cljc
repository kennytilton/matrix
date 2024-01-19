(ns tiltontec.cell.evaluate-test
  (:require
   #?(:clj  [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.util.base
             :refer-macros [trx prog1]
             :refer [*trx?* mx-type?]]
      :clj  [tiltontec.util.base
             :refer :all])
   #?(:clj  [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [c-callers c-input? c-model c-prop c-prop-name c-props
                     c-useds c-valid? c-value-state] :as cty])
   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF cF+ c-swap! c-reset-next!]
             :refer [c-reset! cI]]
      :clj  [tiltontec.cell.core :refer :all])
   [tiltontec.cell.evaluate :refer [cget]]
   [tiltontec.matrix.api :refer [fn-watch]]))

#?(:cljs (set! *print-level* 3))

(deftest test-input
  (with-mx
    (let [c (cI 42 :prop :bingo)]
      (is (mx-type? c ::cty/cell))
      (is (= (c-value-state c) :valid))
      (is (= #{} (c-callers c)))
      (is (c-input? c))
      (is (c-valid? c))
      (is (nil? (c-model c)))
      (is (= :bingo (c-prop c) (c-prop-name c)))
      (is (= (cget c) 42)))))

(deftest t-formula
  (with-mx
    (let [c (cF (+ 40 2))]
      (is (isa? ::cty/c-formula ::cty/cell))
      (is (mx-type? c ::cty/cell))
      (is (mx-type? c ::cty/c-formula))
      (is (= (c-value-state c) :unbound))
      (is (= #{} (c-callers c)))
      (is (= #{} (c-useds c)))
      (is (not (c-input? c)))
      (is (not (c-valid? c)))
      (is (nil? (c-model c)))
      (trx nil :readddd (cget c))
      (is (= (cget c) 42)))))

(deftest t-formula-2
  (with-mx
    (let [b (cI 2)
          cct (atom 0)
          dct (atom 0)
          c (cF (swap! cct inc)
                (+ 40 (cget b)))
          d (cF (swap! dct inc)
                (+ (cget c)
                   (cget b)))]
      (is (= (cget d) 44))
      (is (= (cget c) 42))
      (is (= (cget b) 2))
      (is (= 1 @dct))
      (is (= 1 @cct))
      (is (= 0 (count (c-useds b))))
      (is (= 2 (count (c-callers b))))
      (is (= 1 (count (c-useds c))))
      (is (= 1 (count (c-callers c))))
      (is (= 2 (count (c-useds d))))
      (is (= 0 (count (c-callers d)))))))

(def yowza (atom 0))

(deftest t-in-reset
  (with-mx
    (reset! yowza 0)
    (is (= @yowza 0))
    (let [b (cI 2 :prop :yowza
                :watch (fn-watch (reset! yowza new)))]
      (is (= 2 (cget b)))
      (is (= 0 @yowza))
      (c-reset! b 42)
      (is (= 42 (cget b)))
      (is (= 42 @yowza)))))

(deftest t-formula-22
  (with-mx
    (let [b (cI 2 :prop :bb)
          cct (atom 0)
          dct (atom 0)
          c (cF+ [:prop :cc]
                 (swap! cct inc)
                 (+ 40 (cget b)))
          d (cF+ [:prop :dd]
                 (swap! dct inc)
                 (+ (cget c)
                    (cget b)))]
      (#?(:clj dosync :cljs do)
       (is (= (cget d) 44))
       (is (= (cget c) 42))
       (is (= (cget b) 2))
       (is (= 1 @dct))
       (is (= 1 @cct)))

      (c-reset! b 3)
      (is (= (cget d) 46))
      (is (= (cget c) 43))
      (is (= (cget b) 3))
      (is (= 2 @dct))
      (is (= 2 @cct)))))

;;; --- The Pentagram of Death: a hard use case for data integrity ------

#_(alter-var-root #'*trx?* not)

(deftest pentagram-of-death
  ;;
  ;; Christened the Pentagram of Death by Phillip J Eby, this
  ;; is the use case that challenges an engine not to calculate
  ;; and watcherve transiently* inconsistent values when two different
  ;; dependency paths of one prop (here :ee) lead back to
  ;; the same prop (:aa).
  ;;
  ;; * "Transiently" because the state change propagation eventually**
  ;;   gets :ee to the value consistent with the new state.
  ;; ** which is not
  ;;   good enough because watchs may have already fired and produced
  ;;   side effects off the invalid state.
  ;;
  ;; The example is contrived but was contrived to replicate
  ;; a real dataflow failure that arose in my RoboCup simulation and 
  ;; prompted Cells 3 and the concept of data integrity.
  ;;
  ;; For the telling story behind the useless prop names :aa, :bb et al
  ;; please see: http://smuglispweeny.blogspot.com/2008/07/aa-bb-cc-and-dd.html
  ;;
  (with-mx
    (let [run (atom {})
          watch (atom {})

          rset (fn []
                 (swap! run empty)
                 (swap! watch empty))

          logit (fn [log key]
                  (swap! run assoc key
                         (inc (key @run 0))))

          logrun #(logit run %)

          cr (fn [c]
               (cget c))

          podwatch (fn [prop me new old c]
                     (swap! watch assoc prop
                            (inc (prop @watch 0))))

          aa (cI 1 :prop :aa :watch podwatch)
          a7 (cI 7 :prop :a7 :watch podwatch)
          a70 (cF+ [:prop :a70 :watch podwatch]
                   (logrun :a70)
                   (* 10 (cr a7)))
          bb (cF+ [:prop :bb :watch podwatch]
                  (logrun :bb)
                  (cr aa))
          cc (cF+ [:prop :cc :watch podwatch]
                  (logrun :cc)
                  (* 10 (cr aa)))
          dd (cF+ [:prop :dd :watch podwatch]
                  (logrun :dd)
                  (if (even? (cr bb))
                    (* 10 (cr cc))
                    42))
          ee (cF+ [:prop :ee :watch podwatch]
                  (logrun :ee)
                  (+ (cr a70) (cr bb) (* 10000 (cr dd))))
          verify-p-current (fn []
                             (is (= 2 (cr aa)))
                             (is (= 2 (cr bb)))
                             (is (= 20 (cr cc)))
                             (is (= 200 (cr dd)))
                             (is (= 2000072 (cr ee))))]

;; next checks are just that the engine calculated well
      ;; and built a good dependency graph
      ;;
      (is (= 1 (cr aa)))
      (is (= 1 (cr bb)))
      (is (= 10 (cr cc)))

      (is (= 42 (cr dd)))
      (is (= 420071 (cr ee)))

      (is (= nil (c-useds aa)))
      (is (= #{:bb :cc} (c-props aa :callers)))

      (is (= #{:aa} (c-props bb :useds)))
      (is (= #{:dd :ee} (c-props bb :callers)))

      (is (= #{:aa} (c-props cc :useds)))
      (is (= #{} (c-props cc :callers)))

      (is (= #{:bb} (c-props dd :useds)))
      (is (= #{:ee} (c-props dd :callers)))

      (is (= #{:a70 :bb :dd} (c-props ee :useds)))
      (is (= #{} (c-props ee :callers)))

      ;; ;; now we come to data integrity: when change happens
      ;; ;; do all and only those cells affected recalculate
      ;; ;; and rewatcherve and do so exactly once.
      ;; ;;
      (binding [*trx?* true]
        (rset)
        (doseq [[k v] (seq @watch)]
          (trx nil :watchchk k v)
          (is (and (keyword? k)
                   (= 0 v))))
        (c-reset! aa (inc (cr aa)))

        ; check which rules ran
        ;
        (= #{:bb :cc :dd :ee}                               ;; but not a7
           (set (keys @run)))
        ;
        ; check those rules ran exactly once
        ;
        (doseq [[k v] (seq @run)]
          (trx nil :runchk k v)
          (is (and (keyword? k)
                   (= 1 v))))

        ; check which watchs ran
        ;
        (= #{:aa :bb :cc :dd :ee}
           (set (keys @watch)))
        ;
        ; check those watchs ran exactly once
        ;
        (doseq [[k v] (seq @watch)]
          (trx nil :watchchk k v)
          (is (and (keyword? k)
                   (= 1 v))))

        ; check that this time dd branched to use cc as well as bb
        ;
        (is (= #{:bb :cc} (c-props dd :useds)))

        (verify-p-current)

        (c-reset! aa (inc (cr aa)))

        ; :aa hence :bb now odd so :dd goes back to 42
        ;
        (is (= 42 (cr dd)))
        ;
        ; ...and check dependency on :cc got pruned
        ;
        (is (= #{:bb} (c-props dd :useds)))))))

(deftest t-cell-unchanged-test
  (with-mx
    (let [ob (atom 0)
          b (cI 2 :prop :bb
                :watch (fn-watch
                        (swap! ob inc))
                :unchanged-if (fn [n p]
                                (trx nil :ucif-sees n p)
                                (and (number? n)
                                     (number? p)
                                     (or (and (even? n) (even? p))
                                         (and (odd? n) (odd? p))))))
          cct (atom 0)
          c (cF+ [:prop :cc]
                 (swap! cct inc)
                 (+ 40 (cget b)))]
      (is (= (cget c) 42))
      (is (= (cget b) 2))
      (is (= 0 @ob))
      (is (= 1 @cct))

      (c-reset! b 4)
      (is (= (cget c) 42))
      (is (= (cget b) 4))
      (is (= 0 @ob))
      (is (= 1 @cct))

      (c-reset! b 5)
      (is (= (cget c) 45))
      (is (= (cget b) 5))
      (is (= 1 @ob))
      (is (= 2 @cct)))))

#?(:cljs (do
           (cljs.test/run-tests)))
