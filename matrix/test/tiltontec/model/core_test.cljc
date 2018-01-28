(ns tiltontec.model.core-test
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

   #?(:cljs [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell make-c-formula]]
      :clj [tiltontec.cell.core :refer :all])

   [tiltontec.cell.evaluate :refer [c-get c-awaken]]
   [tiltontec.model.base :refer [md-cz md-cell]]
   #?(:clj [tiltontec.model.core :refer :all :as md]
      :cljs [tiltontec.model.core
             :refer-macros [c?kids the-kids mdv!]
             :refer [md-get md-name fget fm! make md-reset! md-getx]
             :as md])
   ))

#?(:cljs
   (set! *print-level* 2)
   :clj (set! *print-level* 2))

(deftest fm-0
  (cells-init)
  (let [u (md/make
           :kon (c-in false :slot :kon)
           :kids (c? ;;(trx :kids-run! *depender*)
                     (when (md-get me :kon)
                       (vector
                        (md/make
                         :par me
                         :name :konzo
                         :kzo (c-in 3))))))]
    (is (nil? (:kids @u)))
    (let [kc (md-cell u :kids)
          kon (md-cell u :kon)]
      (c-reset! kon true)
      (is (= 1 (count (:kids @u))))
      (is (md/fget :konzo u :inside? true))
      )))

(deftest fm-2
  (let [u (md/make
           :name :uni
           :kids (c? (vector
                      (md/make
                       :par me
                       :name :aa)
                      (md/make
                       :par me
                       :name :bb
                       :kids (c? (vector
                                  (md/make
                                   :par me
                                   :name :bba)
                                  
                                  (md/make
                                   :par me
                                   :name :bbb)))))))]
    ;; (is (fget :bba u :inside? true :must? true))
    ;; (is (thrown-with-msg?
    ;;      Exception #"fget-must-failed"
    ;;      (fget :bbax u :inside? true :must? true)))
    ;; (is (nil? (fget :bbax u :inside? true :must? false)))
    (let [bba (fget :bba u :inside? true :must? true)]
      (is bba)
      (is (md/fget :uni bba :inside? true :up? true))
      (is (fget :aa bba :inside? false :up? true))
      (is (fget :bb bba :inside? true :up? true))
      (is (fget :bbb bba :inside? false :up? true))
      )
    ))

(deftest fm-3
  (let [u (md/make
           :u63 (c? (+ (mdv! :aa :aa42)
                       (mdv! :bb :bb21)))
           :kon (c-in false)
           :kids (c? (remove nil?
                             (vector
                              (md/make
                               :par me
                               :name :aa
                               :aa42 (c? (* 2 (mdv! :bb :bb21)))
                               :aa3 (c-in 3))
                              (when (md-get me :kon)
                                (md/make
                                 :par me
                                 :name :konzo
                                 :kzo (c-in 3)))
                              (md/make
                               :par me
                               :name :bb
                               :bb21 (c? (* 7 (mdv! :aa :aa3))))))))]
    (is (= 63 (md-get u :u63)))
    (is (= 42 (mdv! :aa :aa42 u)))
    (is (= 21 (mdv! :bb :bb21 u)))
    (is (nil? (fget :konzo u :must? false)))
    (c-reset! (md-cell u :kon) true)
    (is (:kon @u))
    (is (md-cell u :kon))
    (is (= 3 (count (:kids @u))))
    (is (fget :konzo u :inside? true))
    ))
    
(deftest fm-3x
  (let [u (md/make
           :u63 (c? (+ (mdv! :aa :aa42)
                       (mdv! :bb :bb21)))
           :kon (c-in false)
           :kids (c? (the-kids
                      (md/make
                       :name :aa
                       :aa42 (c? (* 2 (mdv! :bb :bb21)))
                       :aa3 (c-in 3))
                      (when (md-get me :kon)
                        (md/make
                         :name :konzo
                         :kzo (c-in 3))) 
                      (md/make
                       :name :bb
                       :bb21 (c? (* 7 (mdv! :aa :aa3)))))))]
    (is (= 63 (md-get u :u63)))
    (is (= 42 (mdv! :aa :aa42 u)))
    (is (= 21 (mdv! :bb :bb21 u)))
    (is (nil? (fget :konzo u :must? false)))
    (c-reset! (md-cell u :kon) true)
    (is (:kon @u))
    (is (md-cell u :kon))
    (is (= 3 (count (:kids @u))))
    (is (fget :konzo u :inside? true))
    ))

    
(deftest fm-picker
  (let [u (md/make
            :kids (c? (the-kids
                        (md/make :name :picker
                          :value (c-in 42)
                          :kids (c? (the-kids
                                      (md/make
                                        :name :aax)
                                      (md/make
                                        :name :bbx))))
                        (md/make :name :dd
                         :kzo (c? (let [p (fget :picker me)]
                                    (println :bingo p)
                                    (md-get p :value)))))))]
    (is (= 42 (mdv! :picker :value u)))
    (is (= 42 (mdv! :dd :kzo u)))))

(derive ::typetest ::cty/model)

(deftest mm-typed
  (let [me (md/make
            :type ::typetest
            :x2 (c-in 2)
            :age (c? (* (md-get me :x2)
                        21)))]
    (is (= 42 (md-get me :age)))
    (is (ia-type? me ::typetest))))

(deftest mm-opti-1
   (let [me (md/make
              :x2 2
              :age (c? (* 21 (md-get me :x2)))
              )]
     (println :meta (meta me))
     (is (= 2 (md-get me :x2)))
     (is (= 42 (md-get me :age)))
     (is (nil? (md-cell me :age)))
     ))

(deftest mm-install-alive
   (let [bct (atom 0)
         res (do ;; sync
              (md/make
               :name "Bob"
               :action (c-in nil
                             :ephemeral? true)
               :bogus (c? (if-let [be (md-get me :bogus-e)]
                            (do
                              (trx :bingo-e!!!!!!!! be @bct)
                              (swap! bct inc)
                              (* 2 be))
                            (trx :bogus-no-e (:bogus-e @me))))
               :bogus-e (c-in 21 :ephemeral? true)
               :loc (c? (case (md-get me :action)
                            :leave :away
                            :return :home
                            :missing))))]
     (println :meta (meta res))
     (is (= (:cz (meta res)) (md-cz res)))
     (is (= 4 (count (md-cz res))))
     (is (every? c-ref? (vals (md-cz res))))
     (is (= #{:action :loc :bogus :bogus-e} (set (keys (md-cz res)))))
     (is (every? #(= res (c-me  %))  (vals (md-cz res))))
     (is (= #{:action :loc :bogus :bogus-e}
             (set (map #(c-slot %) 
                       (vals (md-cz res))))))
     (is (= "Bob" (:name @res)))
     (is (= "Bob" (md-name res)))
     (println :res @res)
     (is (= 42 (:bogus @res)))
     (is (= nil (:bogus-e @res))) ;; ephemeral, so reset to nil silently
     (is (= nil (:action @res)))
     (println :loc (:loc @res))
     (is (= :missing (:loc @res)))
     (is (= 1 @bct))
     (reset! bct 0)
     (md-reset! res :action :return)
     (is (= :home (:loc @res)))
     (is (zero? @bct))
    ))

(deftest hello-model
  (let [uni (md/make
             ::md/family
             :kids (c? (the-kids
                        (md/make
                         :name :visitor
                         :moniker "World"
                         :action (c-in nil 
                                       :ephemeral? true
                                       :obs (fn [slot me new old c]
                                              (when new (trx visitor-did new)))))
                        (md/make
                         :name :resident
                         :action (c-in nil :ephemeral? true)
                         :location (c?+ [:obs (fn-obs (when new (trx :honey-im new)))]
                                        (case (md-get me :action)
                                          :leave :away
                                          :return :home
                                          :missing))
                         :response (c?+ [:obs (fn-obs (when new
                                                        (trx :r-response new)))
                                         :ephemeral? true]
                                        (when (= :home (md-get me :location))
                                          (when-let [act (mdv! :visitor :action)]
                                            (case act
                                              :knock-knock "hello, world")))))
                        (md/make
                         :name :alarm
                         :on-off (c?+ [:obs (fn-obs
                                             (trx :telling-alarm-api new))]
                                      (if (= :home (mdv! :resident :location)) :off :on))
                         :activity (c?+ [:obs (fn-obs
                                               (case new
                                                 :call-police (trx :auto-dialing-911)
                                                 nil))]
                                        (when (= :on (md-get me :on-off))
                                          (when-let [action (mdv! :visitor :action)]
                                            (case action
                                              :smashing-window :call-police
                                              nil))))))))]
    (let [viz (fm! :visitor uni)
          rez (fm! :resident uni)]
      (is (not (nil? viz)))
      (is (not (nil? rez)))
      (is (not (nil? (md-cell rez :action))))
      (is (= :missing (mdv! :resident :location uni)))
      (md-reset! viz :action :knock-knock)
      (md-reset! viz :action :smashing-window)
      (is (not (nil? (md-cell rez :action))))
      (md-reset! rez :action :return)
      (is (= :home (mdv! :resident :location uni)))
      (md-reset! viz :action :knock-knock))))

#?(:cljs (do
           (cljs.test/run-tests)
           ))
