(ns tiltontec.model.base
  (:require
    #?(:clj  [clojure.test :refer :all]
       :cljs [cljs.test
              :refer-macros [deftest is are]])
    #?(:cljs [tiltontec.util.base
              :refer [mx-type]
              :refer-macros [trx wtrx prog1 *trx?* def-rmap-props def-rmap-meta-props]]
       :clj  [tiltontec.util.base :refer :all])
    [tiltontec.util.core :refer [type-of err rmap-setf rmap-meta-setf]]
    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                      c-unbound? c-input?
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state *pulse* c-pulse-observed c-assert
                      *call-stack* *defer-changes* unbound
                      c-rule c-me c-value-state c-callers *causation* c-md-name
                      c-synaptic? c-pulse c-pulse-last-changed c-ephemeral? c-prop c-props
                      *depender* *quiesce*
                      *c-prop-depth* md-prop-owning? c-lazy] :as cty])
    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]]
       :clj  [tiltontec.cell.integrity :refer [with-integrity]])
    #?(:clj  [tiltontec.cell.observer
              :refer [observe]]
       :cljs [tiltontec.cell.observer
              :refer [observe]])

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF+ c-reset-next! cFonce cFn]
              :refer [cI c-reset! make-cell]]
       :clj  [tiltontec.cell.core :refer :all])

    [tiltontec.cell.evaluate :refer [c-get c-awaken]]
    #?(:clj  [tiltontec.model.macros :refer :all]
       :cljs [tiltontec.model.macros
              :refer-macros [pme]])
    ))

(def-rmap-props md-
  name)

(def-rmap-meta-props md-
  state cz)

(defn md-cell [me prop]
  (prop (:cz (meta me))))

;;; --- md initialization ---

(declare md-awaken)

(defn md-install-cell [me prop c]
  ;; note that c (a misnomer) might not be a Cell
  (cond
    (c-ref? c) (do
                 (#?(:clj alter :cljs swap!) c assoc
                   :prop prop
                   :me me)
                 (rmap-setf [prop me]
                   (when (c-input? c)
                     (c-value c)))
                 true)
    :else (do
            (rmap-setf [prop me] c)
            false)))

(defmulti md-awaken-before mx-type)

(defmethod md-awaken-before :default [me]
  #_ (prn :awaken-before-default!!!!! ))

(defn md-awaken
  "(1) do initial evaluation of all ruled props
   (2) call observers of all props"
  [me]
  (assert me "md-awaken passed nil")
  (md-awaken-before me)
  (c-assert (= :nascent (md-state me)))
  (rmap-meta-setf [:state me] :awakening)
  (doseq [prop (keys @me)]
    ;; next is tricky: if prop is in :cz but nil, it has been
    ;; optimized-away and observed then in the rare case
    ;; it gets optimized away on other than the initial value.
    (when-let [c (prop (md-cz me) :not-found)]
      (cond
        (= c :not-found)
        ;; these need at least an initial observe
        (do #_(when (and (= prop :kids) (prop @me))
                (pme :md-awaken-kids-nocz-nonnil-obs prop
                  (keys (md-cz me))
                  (:kids (md-cz me) :hunh))
                )
          (observe prop me (prop @me) unbound nil))
        :else (c-awaken c))))
  (rmap-meta-setf [:state me] :awake)
  me)






