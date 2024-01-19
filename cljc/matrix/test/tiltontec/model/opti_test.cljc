(ns tiltontec.model.opti-test
  (:require
    [clojure.string :as str]
    #?(:clj  [clojure.test :refer :all]
       :cljs [cljs.test
              :refer-macros [deftest is are]])
    #?(:cljs [tiltontec.util.base
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
    [tiltontec.matrix.api :refer [fn-watch]]

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF+ c-reset-next! cFonce cFn]
              :refer [cI c-reset! make-cell make-c-formula]]
       :clj  [tiltontec.cell.core
              :refer [cI c-reset! make-cell make-c-formula]])

    [tiltontec.cell.evaluate :refer [cget ]]
    [tiltontec.model.base :refer [md-cz md-cell]]
    [tiltontec.matrix.api :refer [cF cf-freeze with-mx]]
    #?(:clj  [tiltontec.model.core :refer :all :as md]
       :cljs [tiltontec.model.core
              :refer-macros [cFkids the-kids mdv!]
              :refer [mget md-name fm-navig fm! make mset!]
              :as md])
    ))

(deftest opti-map-value
  (with-mx
    (let [me (md/make
               :style (cF {:color :red}))]
      (is (= (mget me :style)
            {:color :red}))
      (is (= (mget me :style)
            {:color :red}))
      (prn :flushed (:cells-flushed (meta me)))
      (prn :cz (:cz (meta me)))
      (prn :style (:style @me))
      )))

(deftest md-freeze-default
  (with-mx
    (let [fm (md/make
               :aa (cI 1)
               :bb (cF (cond
                         (= 2 (mget me :aa)) (cf-freeze)
                         (> (mget me :aa) 2) 43
                         :default 42)))]
      (is (= 1 (mget fm :aa)))
      (is (= 42 (mget fm :bb)))
      (mswap! fm :aa inc)
      (is (= 2 (mget fm :aa)))
      (is (= 42 (mget fm :bb)))

      (mswap! fm :aa inc)
      (is (= 3 (mget fm :aa)))
      (is (= 42 (mget fm :bb))))))

(deftest md-freeze-specific
  (with-mx
    (let [fm (md/make
               :aa (cI 1)
               :bb (cF (cond
                         (= 2 (mget me :aa)) (cf-freeze 17)
                         (> (mget me :aa) 2) 43
                         :default 42)))]
      (is (= 1 (mget fm :aa)))
      (is (= 42 (mget fm :bb)))
      (mswap! fm :aa inc)
      (is (= 2 (mget fm :aa)))
      (is (= 17 (mget fm :bb)))

      (mswap! fm :aa inc)
      (is (= 3 (mget fm :aa)))
      (is (= 17 (mget fm :bb))))))
