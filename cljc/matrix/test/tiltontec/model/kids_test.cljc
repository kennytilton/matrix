(ns tiltontec.model.kids-test
  (:require
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
              :refer-macros [with-integrity]]
       :clj  [tiltontec.cell.integrity :refer [with-integrity]])
    [tiltontec.matrix.api :refer [fn-watch]]

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF+ c-reset-next! cFonce cFn]
              :refer [cI c-reset! make-cell make-c-formula]]
       :clj  [tiltontec.cell.core :refer :all])

    [tiltontec.cell.evaluate :refer [c-get ]]
    [tiltontec.model.base :refer [md-cz md-cell]]
    #?(:clj  [tiltontec.model.core :refer :all :as md]
       :cljs [tiltontec.model.core
              :refer-macros [the-kids mdv!]
              :refer [mget fm! make md-reset!]
              :as md])))

(deftest k-notq2be
  (with-mx
    (let [f (md/make ::md/family
              :ee (cI 2)
              :kids (cF (the-kids
                          (when (odd? (mget me :ee))
                            (md/make
                              :name :yep
                              :value (cF (do
                                           (let [par (:parent @me)]
                                             (let [ee (mget par :ee)]
                                               (* 14 ee))))))))))]
      (is (mx-type? f ::md/family))
      (is (empty? (mget f :kids)))

      (do
        (md-reset! f :ee 3)
        (is (not (empty? (mget f :kids))))
        (is (= 42 (mdv! :yep :value f)))

        (let [dmw (first (mget f :kids))]
          (assert (md-ref? dmw))
          (md-reset! f :ee 0)
          (is (empty? (mget f :kids)))
          (is (nil? @dmw))
          (is (= :dead (::cty/state (meta dmw)))))))))


#?(:cljs (do
           (cljs.test/run-tests)
           ))

