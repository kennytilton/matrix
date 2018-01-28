
(ns tiltontec.model.kids-test
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
             :refer-macros [the-kids mdv!]
             :refer [md-get  fm! make md-reset!]
             :as md])
   ))

(deftest k-notq2be
  (let [f (md/make ::md/family
            :ee (c-in 2)
            :kids (c? (the-kids
                        (when (odd? (md-get me :ee))
                          (md/make
                            :name :yep
                            :value (c? (do
                                         (let [par (:par @me)]
                                           (let [ee (md-get par :ee)]
                                             (* 14 ee))))))))))]
    (is (ia-type? f ::md/family))
    (is (empty? (md-get f :kids)))

    (do
      (md-reset! f :ee 3)
      (is (not (empty? (md-get f :kids))))
      (is (= 42 (mdv! :yep :value f)))

      (let [dmw (first (md-get f :kids))]
        (assert (md-ref? dmw))
        (md-reset! f :ee 0)
        (is (empty? (md-get f :kids)))
        (is (nil? @dmw))
        (is (= :dead (:state (meta dmw))))))))


#?(:cljs (do
           (cljs.test/run-tests)
           ))

