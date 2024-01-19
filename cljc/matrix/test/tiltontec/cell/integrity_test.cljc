(ns tiltontec.cell.integrity-test
  (:require
   #?(:clj  [clojure.test :refer :all]
      :cljs [cljs.test :refer-macros [deftest is are use-fixtures]])
   #?(:cljs [tiltontec.util.base
             :refer-macros [trx prog1]]
      :clj  [tiltontec.util.base
             :refer :all])
   #?(:clj  [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [*pulse* c-pulse] :as cty])
   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! with-mx]
             :refer [c-reset! cI cset!]]
      :clj  [tiltontec.cell.core :refer :all])
   [tiltontec.cell.evaluate :refer [cget cget]]
   [tiltontec.matrix.api :refer [fn-watch]]
   [tiltontec.util.core :refer [err]]))

(defn prn-level-3 [f]
  (binding [*print-level* 3] (f)))

(use-fixtures :once prn-level-3)

(defn watchdbg []
  ;;(fn-watch (trx :watchdbg prop new old (type-of c)))
  )

(deftest watch-setf
  (with-mx
    (let [alarm (cI :undefined :watch (watchdbg))
          act (cI nil :watch (watchdbg))
          loc (cF+ [:watch (fn-watch
                            (when-not (= new :missing)
                              (assert (= @*pulse* 2))
                              (c-reset-next! alarm
                                             (case new
                                               :home :off
                                               :away :on
                                               (err #?(:clj format :cljs str) "unexpected loc %s" new)))))]
                   (case (cget act)
                     :leave :away
                     :return :home
                     :missing))
          alarm-speak (cF+ [:watch (fn-watch
                                    (is (= (cget alarm) (case (cget act)
                                                          :return :off
                                                          :leave :on
                                                          :undefined)))
                                    (is (= *pulse*
                                           (c-pulse act)
                                           (c-pulse loc)
                                           (c-pulse c))))]
                           (str "alarm-speak sees act " (cget act)))]
      (is (= (cget alarm) :undefined))
      (is (= 1 @*pulse*))
      (is (= (cget loc) :missing))
      (is (= 1 @*pulse*))

      (c-reset! act :leave)
      (is (= 3 @*pulse*)))))

;; -----------------------------------------------------------------

(deftest watch-setf-bad-caught
  (with-mx
    (let [alarm (cI :undefined :watch (watchdbg))
          act (cI nil :watch (watchdbg))
          loc (cF+ [:watch (fn-watch
                            (when-not (= new :missing)
                              (c-reset-next! alarm (case new
                                                     :home :off
                                                     :away :on
                                                     (err #?(:clj format :cljs str) "unexpected loc %s" new)))))]
                   (case (cget act)
                     :leave :away
                     :return :home
                     :missing))
          alarm-speak (cF+ [:watch (fn-watch
                                    (trx :alarm-speak (cget act) :sees (cget alarm) (cget loc))
                                    (is (= (cget alarm) (case (cget act)
                                                          :return :off
                                                          :leave :on
                                                          :undefined)))
                                    (is (= *pulse*
                                           (c-pulse act)
                                           (c-pulse loc)
                                           (c-pulse c))))]
                           (str "alarm-speak sees act " (cget act)))]
      (is (= (cget alarm) :undefined))
      (is (= 1 @*pulse*))
      (is (= (cget loc) :missing))
      (is (= 1 @*pulse*)))))

;; --------------------------------------------------------

(deftest see-into-fn
  (with-mx
    (let [sia (cI 0)
          rsic (atom false)
          sic (cF (reset! rsic true)
                  (+ 42 (cget sia)))
          fsia #(cget sia)
          sib (cF (or (+ 1 (fsia))
                      (cget sic)))]
      (is (= (cget sib) 1))
      (is (= (:useds @sib) #{sia}))
      (is (not @rsic))
      (c-reset! sia 1)
      (is (= 2 (:value @sib)))
      (is (= (cget sib) 2)))))

(deftest watch-sees-current
  ;
  ; Confirm that watchs only see values current with
  ; the current update. Todo: have watchs kick off deferred
  ; updates and confirm we do not see *future* updates.
  ;
  (with-mx
    (let [watch (atom nil)
          watchd (atom {})
          watchr (fn [tag]
                   (fn-watch (let [o (apply concat
                                            (sort-by first
                                                     (for [[k v] @watch]
                                                       [k (cget v)])))]
                               (swap! watchd update-in [(cget (:a @watch))] conj o)
                               (println :tag tag :a (cget (:a @watch)))
                               (println :tag tag :sees o))))
          a (cI 0 :watch (fn-watch (println :a-now new)))
          b (cF+ [:watch (watchr :b)]
                 (* 10 (cget a)))
          c (cF+ [:watch (watchr :c)]
                 (* 100 (cget a)))
          d (cF+ [:watch (fn-watch (println :d-now new))]
                 (+ (cget b) (cget c) (cget a)))
          e (cF+ [:watch (fn-watch (println :e-now new))]
                 (+ (cget c) (cget b) (cget a)))]
      (reset! watch {:a a :b b :c c})
      (is (= 0 (cget d) (cget e) (cget a) (cget c) (cget b)))

      (cset! a 1)
      (is (= 1 (cget a)))
      (is (= 10 (cget b)))
      (is (= 100 (cget c)))
      (is (= 111 (cget d)))
      (is (= 111 (cget e)))
      (println @watchd)
      (doseq [[k v] @watchd]
        (is (apply = v))))))

(deftest no-prop-no-watch
  (with-mx
    (let [sia (cI 0)
          watch (atom false)
          sib (cF+ [:watch (fn-watch (reset! watch true))]
                   (if (even? (cget sia))
                     42
                     10))
          run (atom false)
          sic (cF (reset! run true)
                  (/ (cget sib) 2))]
      (is (= (cget sib) 42))
      (is (= (cget sic) 21))
      (is @watch)
      (is @run)
      (#?(:clj dosync :cljs do)
       (reset! watch false)
       (reset! run false))
      (c-reset! sia 2)
      (is (= (cget sib) 42))
      (is (= (cget sic) 21))
      (is (not @watch))
      (is (not @run)))))

#?(:cljs (cljs.test/run-tests))
