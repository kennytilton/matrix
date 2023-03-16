(ns tiltontec.cell.hello-cells-test
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
                     c-unbound? c-input?
                     c-model mdead? c-valid? c-useds c-ref? md-ref?
                     c-state *pulse* c-pulse-watched
                     *call-stack* *defer-changes* unbound
                     c-rule c-me c-value-state c-callers caller-ensure
                     unlink-from-callers *causation*
                     c-prop-name c-synaptic? caller-drop
                     c-pulse c-pulse-last-changed c-ephemeral? c-prop c-props
                     *depender* *quiesce*
                     *c-prop-depth* md-prop-owning? c-lazy] :as cty])
   #?(:cljs [tiltontec.cell.integrity
             :refer-macros [with-integrity]]
      :clj [tiltontec.cell.integrity :refer [with-integrity]])
   [tiltontec.matrix.api :refer [fn-watch]]

   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI c-reset! make-cell make-c-formula]]
      :clj [tiltontec.cell.core :refer :all])

   [tiltontec.cell.evaluate :refer [c-get ]]
   [tiltontec.cell.poly :refer [c-awaken]]
   ))

(deftest hw-01
  (cells-init)
  (let [v ;;"visitor"
        {:name "World"
         :action (make-cell :value "knocks"
                            :input? true)}]

    (println (c-get (:name v))
             (c-get (:action v)))

    (is (=  (c-get (:name v)) "World"))
    (is (=  (c-get (:action v)) "knocks"))))

(deftest hw-02
  (cells-init)
  (let [watch-action (atom nil)
        v ;;"visitor"
        {:name "World"
         :action (cI nil
                       :prop :v-action
                       :watch ;; short for watch
                       (fn [prop me new old c]
                         (reset! watch-action new)
                         (println :watcherving prop new old)))}]
    (is (=  (c-get (:name v)) "World"))
    (c-reset! (:action v) "knocks")
    (is (=  (c-get (:action v)) "knocks"))
    (is (= "knocks" @watch-action))))

(deftest hw-03
  (cells-init)
  (let [action (atom nil)
        watch-action (fn [prop me new old c]
                     (reset! action new)
                     (println :watcherving prop new old))
        v {:name "World"
           :action (cI nil :prop :v-action
                         :watch watch-action)}]

    (is (nil? (c-get (:action v))))
    (is (nil? @action))

    (c-reset! (:action v) "knock-knock")
    (is (= "knock-knock" @action))
    (is (= (c-get (:action v)) "knock-knock"))))

(defn gwatch
  [prop me new old c]
  (println :gwatch> prop new old))

(deftest hw-04
  (cells-init)
  (let [r-action (cI nil
                       :prop :r-action
                       :watch gwatch)
        r-loc (make-c-formula
               :prop :r-loc
               :watch gwatch
               :rule (fn [c]
                       (case (c-get r-action)
                         :leave :away
                         :return :at-home
                         :missing)))]
    (c-awaken r-loc)
    (is (= :missing (:value @r-loc)))
    (println :---about-to-leave------------------)
    (c-reset! r-action :leave)
    (println :---left------------------)
    (is (= :away (c-get r-loc)))))

(deftest hw-5
  (cells-init)
  (println :--go------------------)
  (let [watch-action (fn [prop me new old c]
                     (println prop new old))
        v {:name "World"
           :action (cI nil :prop :v-action
                         :watch watch-action)}
        r-action (cI nil)
        r-loc (cF+ [:watch (fn-watch (when new (trx :honey-im new)))]
                   (case (c-get r-action)
                     :leave :away
                     :return :home
                     :missing))
        r-response (cF+ [:watch (fn-watch (trx :r-resp new))]
                        (when (= :home (c-get r-loc))
                          (when-let [act (c-get (:action v))]
                            (case act
                              :knock-knock "hello, world"))))]
    (is (nil? (c-get r-response)))
    (c-reset! (:action v) :knock-knock)
    (c-reset! r-action :return)
    (is (= :home (c-get r-loc)))))

(deftest hello-world
  (cells-init)
  (println :--go------------------)
  (let [watch-action (fn [prop me new old c]
                     (println prop new old))
        v {:name "World"
           :action (cI nil
                         :prop :v-action
                         :ephemeral? true
                         :watch watch-action)}
        r-action (cI nil)
        r-loc (cF+ [:watch (fn-watch (when new (trx :honey-im new)))]
                   (case (c-get r-action)
                     :leave :away
                     :return :home
                     :missing))
        r-response (cF+ [:watch (fn-watch (trx :r-response new))
                         :ephemeral? true]
                        (when (= :home (c-get r-loc))
                          (when-let [act (c-get (:action v))]
                            (case act
                              :knock-knock "hello, world"))))]
    (is (nil? (c-get r-response)))
    (c-reset! (:action v) :knock-knock)
    (c-reset! r-action :return)
    (is (= :home (c-get r-loc)))
    (c-reset! (:action v) :knock-knock)))

(deftest hello-world-2
  (cells-init)
  (println :--go------------------)
  (let [watch-action (fn [prop me new old c]
                     (when new (trx visitor-did new)))
        v {:name "World"
           :action (cI nil
                         :prop :v-action
                         :ephemeral? true
                         :watch watch-action)}
        r-action (cI nil)
        r-loc (cF+ [:watch (fn-watch (when new (trx :honey-im new)))]
                   (case (c-get r-action)
                     :leave :away
                     :return :home
                     :missing))
        r-response (cF+ [:watch (fn-watch (when new
                                        (trx :r-response new)))
                         :ephemeral? true
                         ]
                        (when (= :home (c-get r-loc))
                              (when-let [act (c-get (:action v))]
                                (case act
                                  :knock-knock "hello, world"))))
        alarm (cF+ [:watch (fn-watch
                          (trx :telling-alarm-api new))]
                   (if (= :home (c-get r-loc)) :off :on))
        alarm-do (cF+ [:watch (fn-watch
                            (case new
                              :call-police (trx :auto-dialing-911)
                              nil))]
                     (when (= :on (c-get alarm))
                       (when-let [action (c-get (:action v))]
                         (case action
                           :smashing-window :call-police
                           nil))))]
    (c-awaken [alarm-do r-response r-loc (:action v)])
    (is (= :missing (:value @r-loc)))
    (c-reset! (:action v) :knock-knock)
    (c-reset! (:action v) :smashing-window)
    (c-reset! r-action :return)
    (is (= :home (c-get r-loc))) 
    (c-reset! (:action v) :knock-knock)
    ))

#?(:cljs (do
           (cljs.test/run-tests)
           ))
