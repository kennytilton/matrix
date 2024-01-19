(ns tiltontec.model.core-test
  (:require
    [clojure.string :as str]
    #?(:clj  [clojure.test :refer :all]
       :cljs [cljs.test
              :refer-macros [deftest is are]])
    #?(:cljs [tiltontec.util.base
              :refer [mx-type?]
              :refer-macros [trx prog1 *trx?*]]
       :clj  [tiltontec.util.base
              :refer :all])
    [tiltontec.util.core :refer [type-of err]]
    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
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
              :refer-macros [with-integrity with-cc]]
       :clj  [tiltontec.cell.integrity :refer [with-integrity with-cc]])
    [tiltontec.matrix.api :refer [fn-watch mswap!]]

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF+ c-reset-next! cFonce cFn]
              :refer [cI c-reset! make-cell make-c-formula]]
       :clj  [tiltontec.cell.core :refer :all])

    [tiltontec.cell.evaluate :refer [cget ]]
    [tiltontec.cell.poly :refer [md-quiesce ]]
    [tiltontec.model.base :refer [md-cz md-cell]]
    [tiltontec.matrix.api :refer [mget mset!] :as mx]
    #?(:clj  [tiltontec.model.core
              :refer [cFkids the-kids mdv!   md-name
                      fm-navig fm! make  ] :as md]
       :cljs [tiltontec.model.core
              :refer-macros [cFkids the-kids mdv!]
              :refer [  md-name fm-navig fm! make  ]
              :as md])
    ))

(defn prn-level-3 [f]
  (binding [*print-level* 3] (f)))

(use-fixtures :once prn-level-3)

(deftest fm-0
  (with-mx
    (let [u (md/make
              :kon (cI false :prop :kon)
              :kids (cF                                     ;;(trx :kids-run! *depender*)
                      (when (mget me :kon)
                        (vector
                          (md/make
                            :parent me
                            :name :konzo
                            :kzo (cI 3))))))]
      (is (nil? (:kids @u)))
      (let [kc (md-cell u :kids)
            kon (md-cell u :kon)]
        (c-reset! kon true)
        (is (= 1 (count (:kids @u))))
        (is (md/fm-navig :konzo u :inside? true))))))

(deftest fm-2
  (with-mx
    (let [u (md/make
              :name :uni
              :kids (cF (vector
                          (md/make
                            :parent me
                            :name :aa)
                          (md/make
                            :parent me
                            :name :bb
                            :kids (cF (vector
                                        (md/make
                                          :parent me
                                          :name :bba)

                                        (md/make
                                          :parent me
                                          :name :bbb)))))))]
      ;; (is (fm-navig :bba u :inside? true :must? true))
      ;; (is (thrown-with-msg?
      ;;      Exception #"fm-navig-must-failed"
      ;;      (fm-navig :bbax u :inside? true :must? true)))
      ;; (is (nil? (fm-navig :bbax u :inside? true :must? false)))
      (let [bba (fm-navig :bba u :inside? true :must? true)]
        (is bba)
        (is (md/fm-navig :uni bba :inside? true :up? true))
        (is (fm-navig :aa bba :inside? false :up? true))
        (is (fm-navig :bb bba :inside? true :up? true))
        (is (fm-navig :bbb bba :inside? false :up? true))))))

(deftest bmi
  (with-mx
    (let [md (md/make
               :height 2 ;; meters
               :weight (cI 80) ;; kg
               :bmi (cF (/ (mget me :weight)
                          (Math/pow (mget me :height) 2)))
               :weight-status (cF (let [bmi (mget me :bmi)]
                                    (cond
                                      (< bmi 18.5) :underweight
                                      (<= 18.5 bmi 24.9) :healthy
                                      (<= 25.0 bmi 29.9) :overweight
                                      :else :obese))))]
      (prn :bmi (mget md :bmi) (mget md :weight-status))
      (is (= (mget md :bmi) 20.0))
      (is (= (mget md :weight-status) :healthy))
      (mswap! md :weight + 20)
      (prn :bmi (mget md :bmi) (mget md :weight-status))
      (is (= (mget md :bmi) 25.0))
      (is (= (mget md :weight-status) :overweight)))))

(deftest fm-3
  (with-mx
    (let [u (md/make
              :u63 (cF (+ (mdv! :aa :aa42)
                         (mdv! :bb :bb21)))
              :kon (cI false)
              :kids (cF (doall
                          (remove nil?
                            (vector
                              (md/make
                                :parent me
                                :name :aa
                                :aa42 (cF (* 2 (mdv! :bb :bb21)))
                                :aa3 (cI 3))
                              (when (mget me :kon)
                                (md/make
                                  :parent me
                                  :name :konzo
                                  :kzo (cI 3)))
                              (md/make
                                :parent me
                                :name :bb
                                :bb21 (cF (* 7 (mdv! :aa :aa3)))))))))]
      (is (= 63 (mget u :u63)))
      (is (= 42 (mdv! :aa :aa42 u)))
      (is (= 21 (mdv! :bb :bb21 u)))
      (is (nil? (fm-navig :konzo u :must? false)))
      (c-reset! (md-cell u :kon) true)
      (is (:kon @u))
      (is (md-cell u :kon))
      (is (= 3 (count (:kids @u))))
      (is (fm-navig :konzo u :inside? true))
      )))

(deftest fm-3x                                              ;; using the-kids macro
  (with-mx
    (let [u (md/make
              :u63 (cF (+ (mdv! :aa :aa42)
                         (mdv! :bb :bb21)))
              :kon (cI false)
              :kids (cF (the-kids
                          (md/make
                            :name :aa
                            :aa42 (cF (* 2 (mdv! :bb :bb21)))
                            :aa3 (cI 3))
                          (when (mget me :kon)
                            (md/make
                              :name :konzo
                              :kzo (cI 3)))
                          (md/make
                            :name :bb
                            :bb21 (cF (* 7 (mdv! :aa :aa3)))))))]
      (is (= 63 (mget u :u63)))
      (is (= 42 (mdv! :aa :aa42 u)))
      (is (= 21 (mdv! :bb :bb21 u)))
      (is (nil? (fm-navig :konzo u :must? false)))
      (c-reset! (md-cell u :kon) true)
      (is (:kon @u))
      (is (md-cell u :kon))
      (is (= 3 (count (:kids @u))))
      (is (fm-navig :konzo u :inside? true)))))

(deftest fm-picker
  (with-mx
    (let [u (md/make
              :kids (cF (the-kids
                          (md/make :name :picker
                            :value (cI 42)
                            :kids (cF (the-kids
                                        (md/make
                                          :name :aax)
                                        (md/make
                                          :name :bbx))))
                          (md/make :name :dd
                              :kzo (cF (let [p (fm-navig :picker me)]
                                         (mget p :value)))))))]
      (is (= 42 (mdv! :picker :value u)))
      (is (= 42 (mdv! :dd :kzo u))))))

(derive ::typetest ::cty/model)

(deftest mm-typed
  (with-mx
    (let [me (md/make
               :mx-type ::typetest
               :x2 (cI 2)
               :age (cF (* (mget me :x2)
                          21)))]
      (is (= 42 (mget me :age)))
      (is (mx-type? me ::typetest)))))

(deftest mm-md-quiescer
  (with-mx
    (let [mme (atom nil)
          me (md/make
               :mx-type ::typetest
               :name :meself
               :x2 (cI 2)
               :age (cF (* (mget me :x2)
                          21))
               :on-quiesce (fn [md] (prn :fz-test md)
                            (reset! mme @md)))]
      (is (= 42 (mget me :age)))
      (is (mx-type? me ::typetest))
      (is (nil? @mme))
      (#?(:clj dosync :cljs do)
        (md-quiesce me))
      (is (not (nil? @mme))))))

(deftest mm-opti-1
  (with-mx
    (let [me (md/make
               :x2 2
               :age (cF (* 21 (mget me :x2))))]
      (is (= 2 (mget me :x2)))
      (is (= 42 (mget me :age)))
      (is (nil? (md-cell me :age))))))

(deftest mm-install-alive
  (with-mx
    (let [bct (atom 0)
          res (do                                           ;; sync
                (md/make
                  :name "Bob"
                  :action (cI nil
                            :ephemeral? true)
                  :bogus (cF (if-let [be (mget me :bogus-e)]
                               (do
                                 (trx :bingo-e!!!!!!!! be @bct)
                                 (swap! bct inc)
                                 (* 2 be))
                               (trx :bogus-no-e (:bogus-e @me))))
                  :bogus-e (cI 21 :ephemeral? true)
                  :loc (cF (case (mget me :action)
                             :leave :away
                             :return :home
                             :missing))))]
      (println :meta (meta res))
      (is (= (:cz (meta res)) (md-cz res)))
      (is (= 4 (count (md-cz res))))
      (is (every? c-ref? (vals (md-cz res))))
      (is (= #{:action :loc :bogus :bogus-e} (set (keys (md-cz res)))))
      (is (every? #(= res (c-me %)) (vals (md-cz res))))
      (is (= #{:action :loc :bogus :bogus-e}
            (set (map #(c-prop %)
                   (vals (md-cz res))))))
      (is (= "Bob" (:name @res)))
      (is (= "Bob" (md-name res)))
      (println :res @res)
      (is (= 42 (:bogus @res)))
      (is (= nil (:bogus-e @res)))                          ;; ephemeral, so reset to nil silently
      (is (= nil (:action @res)))
      (println :loc (:loc @res))
      (is (= :missing (:loc @res)))
      (is (= 1 @bct))
      (reset! bct 0)
      (mset! res :action :return)
      (is (= :home (:loc @res)))
      (is (zero? @bct)))))

(comment
  (defn filter-vector-func [coll ?s]
    (reduce
      (fn [x y]
        (prn :x x)
        (prn :y y)
        (let [{:keys [id name surname]} y]
          (if (str/includes? (str/lower-case name) (str/lower-case ?s))
            (conj x id name)
            x)))
      []
      coll))
  (filter-vector-func [{:id 1 :name "ali" :surname "veli"}
                       {:id 2 :name "anna" :surname "k"}] "a"))

(deftest hello-model
  (with-mx
    (let [uni (md/make
                ::md/family
                :kids (cF (the-kids
                            (md/make
                              :name :visitor
                              :moniker "World"
                              :action (cI nil
                                        :ephemeral? true
                                        :watch (fn [prop me new old c]
                                               (when new (trx visitor-did new)))))
                            (md/make
                              :name :resident
                              :action (cI nil :ephemeral? true)
                              :location (cF+ [:watch (fn-watch (when new (trx :honey-im new)))]
                                          (case (mget me :action)
                                            :leave :away
                                            :return :home
                                            :missing))
                              :response (cF+ [:watch (fn-watch (when new
                                                             (trx :r-response new)))
                                              :ephemeral? true]
                                          (when (= :home (mget me :location))
                                            (when-let [act (mdv! :visitor :action)]
                                              (case act
                                                :knock-knock "hello, world")))))
                            (md/make
                              :name :alarm
                              :on-off (cF+ [:watch (fn-watch
                                                   (trx :telling-alarm-api new))]
                                        (if (= :home (mdv! :resident :location)) :off :on))
                              :activity (cF+ [:watch (fn-watch
                                                     (case new
                                                       :call-police (trx :auto-dialing-911)
                                                       nil))]
                                          (when (= :on (mget me :on-off))
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
        (mset! viz :action :knock-knock)
        (mset! viz :action :smashing-window)
        (is (not (nil? (md-cell rez :action))))
        (mset! rez :action :return)
        (is (= :home (mdv! :resident :location uni)))
        (mset! viz :action :knock-knock)))))

(deftest clock-with-cc
  (with-mx
    (let [clk (md/make
                :name :clock
                :ticking? (cI false)
                :tick (cI 0 :watch (fn [_ me new _ _]
                                     (when (> new 2)
                                       (with-cc :set-ticking
                                         (prn :bam-ticking)
                                         (mset! me :ticking? true))))))]
      (is (= false (mget clk :ticking?)))
      (mset! clk :tick 5)
      (is (= true (mget clk :ticking?))))))

#?(:cljs (do
           (cljs.test/run-tests)
           ))

;; NOTA BENE! tests below are not appropriate for lein test. leave commented out when not being developed. Use ad hoc.
#_(deftest ad-hoc-errmsg-need-CI
    (let [thing (make                                       ;; :mx-type ::adhoc
                  :title "THING"
                  ;; :prop :state
                  ;; :flush-my-cell (cF 42) ;; testing that cells without dependencies get optimized away for efficiency
                  :state :init-state                        ;; the fix: (cI :init-state)
                  :derived-prop (cF+ [:watch (fn [prop me new old cell]
                                             (prn :new!!! new))]
                                  (let [value (mget me :state)]
                                    (cond
                                      (str/includes? value "osc") (prn "OSC MESSAGE")
                                      (str/includes? value "midi") (prn "MIDI MESSAGE")
                                      :else (prn "PRIMITIVE VALUE")))))]
      (do
        (mset! thing :state "osc")                          ;; should fail informatively
        )
      (is true)))

;; not appropriate for lein test

#_(deftest ad-hoc-errmsg-need-cFn
    (let [thing (make                                       ;; :mx-type ::adhoc
                  :title "THING"
                  :state (cI :init-state)
                  :derived-prop (cF+n [:watch (fn [prop me new old cell]
                                              (prn :derived-prop-watch-new!!! new :old old :cell @cell))]
                                  (let [value (mget me :state)]
                                    (cond
                                      (str/includes? value "osc") "OSC MESSAGE"
                                      (str/includes? value "midi") "MIDI MESSAGE"
                                      :else (str "Unexpected state: " value)))))]
      (do
        (mset! thing :derived-prop "MSET! MESSAGE SHOULD HAVE FAILED") ;; should fail informatively)
        (is true))))

;; not suitable for `lein test`
#_(deftest ad-hoc-errmsg-cF-dependency-cycle
    (let [thing (make                                       ;; :mx-type ::adhoc
                  :name :thingy
                  :title "cycle test"
                  :val-0 (cF+ [:watch (fn [prop me new old cell]
                                      (prn :val-0-watch-new!!! new :old old :cell @cell))]
                           (str :val-0 " val-2> " (mget me :val-2)))
                  ;; (cI "0")
                  :val-1 (cF+ [:watch (fn [prop me new old cell]
                                      (prn :val-1-watch-new!!! new :old old :cell @cell))]
                           (str :val-1 " val-0> " (mget me :val-0)))
                  :val-2 (cF+ [:watch (fn [prop me new old cell]
                                      (prn :val-1-watch-new!!! new :old old :cell @cell))]
                           (str :val-2 " val-1> " (mget me :val-1))))]
      (prn :thing-should-not-get-this-far @thing)
      (is true)))

#_(deftest ad-hoc-errmsg-undeferred-change
    (let [thing (make                                       ;; :mx-type ::adhoc
                  :name :thingy
                  :title "undeferred change test"
                  :change-count (cI 0)
                  :value (cI 42 :watch (fn [prop me new old cell]
                                       (do                  ;; the fix: with-cc :test-err-msg
                                         (mswap! me :change-count inc)) ;; <= change by watch must be deferred
                                       )))]
      (prn :MAYBE-should-not-get-this-far (mget thing :value) (mget thing :change-count))
      (mswap! thing :value inc)
      (prn :DEF-should-not-get-this-far (mget thing :value) (mget thing :change-count))
      (is true)))

#_(deftest ad-hoc-errmsg-mget-no-such-prop
    (let [thing (make                                       ;; :mx-type ::adhoc
                  :name :thingy
                  :value (cI 42))]
      (prn :should-NOT-get-this-far (mget thing :valu-mistype))
      (is true)))
