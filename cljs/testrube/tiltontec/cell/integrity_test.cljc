(ns tiltontec.cell.integrity-test
  (:require
   #?(:clj [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.util.base
             :refer-macros [trx prog1]]
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
             :refer-macros [c? c?+ c-reset-next!]
             :refer [c-in c-reset!]]
      :clj [tiltontec.cell.core :refer :all])
   ))

(defn obsdbg []
  ;;(fn-obs (trx :obsdbg slot new old (type-of c)))
  )


(deftest obs-setf
  (cells-init)
  (is (zero? @+pulse+))
  (do ;;binding [*dp-log* true]
    (let [alarm (c-in :undefined :obs (obsdbg))
          act (c-in nil :obs (obsdbg))
          loc (c?+ [:obs (fn-obs                                 
                          (when-not (= new :missing)
                            (assert (= @+pulse+ 2))
                            (c-reset-next! alarm
                                           (case new
                                             :home :off
                                             :away :on
                                             (err #?(:clj format :cljs str) "unexpected loc %s" new)))))]
                   (case (c-get act)
                     :leave :away
                     :return :home
                     :missing))
          alarm-speak (c?+ [:obs (fn-obs 
                                  (is (= (c-get alarm) (case (c-get act)
                                                         :return :off
                                                         :leave :on
                                                         :undefined)))
                                  (is (= +pulse+
                                         (c-pulse act)
                                         (c-pulse loc)
                                         (c-pulse c))))]
                           (str "alarm-speak sees act " (c-get act)))]
      (is (= (c-get alarm) :undefined))
      (is (= 1 @+pulse+))
      (is (= (c-get loc) :missing))
      (is (= 1 @+pulse+))

      (c-reset! act :leave)
      (is (= 3 @+pulse+))
      )))

;; -----------------------------------------------------------------


(deftest obs-setf-bad-caught
  (cells-init)

  (let [alarm (c-in :undefined :obs (obsdbg))
        act (c-in nil :obs (obsdbg))
        loc (c?+ [:obs (fn-obs
                        (is (thrown-with-msg?
                             #?(:clj Exception :cljs js/Error)
                             #"c-reset!> change"
                             (c-reset! act :leave)))
                        (when-not (= new :missing)
                          (c-reset-next! alarm (case new
                                                 :home :off
                                                 :away :on
                                                 (err #?(:clj format :cljs str) "unexpected loc %s" new)))))]
                 (case (c-get act)
                   :leave :away
                   :return :home
                   :missing))
        alarm-speak (c?+ [:obs (fn-obs 
                                (trx :alarm-speak (c-get act) :sees (c-get alarm) (c-get loc))
                                (is (= (c-get alarm) (case (c-get act)
                                                       :return :off
                                                       :leave :on
                                                       :undefined)))
                                (is (= +pulse+
                                       (c-pulse act)
                                       (c-pulse loc)
                                       (c-pulse c))))]
                         (str "alarm-speak sees act " (c-get act)))]
    (is (= (c-get alarm) :undefined))
    (is (= 1 @+pulse+))
    (is (= (c-get loc) :missing))
    (is (= 1 @+pulse+))
    
   
    ))

;; --------------------------------------------------------

(deftest see-into-fn 
  (let [sia (c-in 0)
        rsic (atom false)
        sic (c? (reset! rsic true)
                (+ 42 (c-get sia)))
        fsia #(c-get sia)
        sib (c? (or (+ 1 (fsia))
                    (c-get sic)))]
    (is (= (c-get sib) 1))
    (is (= (:useds @sib) #{sia}))
    (is (not @rsic))
    (c-reset! sia 1)
    (is (= 2 (:value @sib)))
    (is (= (c-get sib) 2))))


(deftest no-prop-no-obs
  (let [sia (c-in 0)
        obs (atom false)
        sib (c?+ [:obs (fn-obs (reset! obs true))]
                 (if (even? (c-get sia))
                   42
                   10))
        run (atom false)
        sic (c? (reset! run true)
                (/ (c-get sib) 2))]
    (is (= (c-get sib) 42))
    (is (= (c-get sic) 21))
    (is @obs)
    (is @run)
    (#?(:clj dosync :cljs do)
     (reset! obs false)
     (reset! run false))
    (c-reset! sia 2)
    (is (= (c-get sib) 42))
    (is (= (c-get sic) 21))
    (is (not @obs))
    (is (not @run))))
    
        
#?(:cljs (do
           (cljs.test/run-tests)
           ))
