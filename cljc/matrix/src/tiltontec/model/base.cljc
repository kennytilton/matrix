(ns tiltontec.model.base
  (:require
    #?(:clj  [clojure.test :refer :all]
       :cljs [cljs.test
              :refer-macros [deftest is are]])
    #?(:cljs [tiltontec.util.base
              :refer-macros [trx wtrx prog1 *trx?* def-rmap-slots def-rmap-meta-slots]]
       :clj  [tiltontec.util.base :refer :all])
    [tiltontec.util.core :refer [type-of err rmap-setf rmap-meta-setf]]
    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                      c-unbound? c-input? ia-type? ia-type
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state *pulse* c-pulse-observed c-assert
                      *call-stack* *defer-changes* unbound
                      c-rule c-me c-value-state c-callers *causation* c-md-name
                      c-synaptic? c-pulse c-pulse-last-changed c-ephemeral? c-slot c-slots
                      *depender* *finalize*
                      *c-prop-depth* md-slot-owning? c-lazy] :as cty])
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

(def-rmap-slots md-
  name)

(def-rmap-meta-slots md-
  state cz)

(defn md-cell [me slot]
  (slot (:cz (meta me))))

;;; --- md initialization ---

(declare md-awaken)

(defn md-install-cell [me slot c]
  ;; note that c (a misnomer) might not be a Cell
  (cond
    (c-ref? c) (do
                 (#?(:clj alter :cljs swap!) c assoc
                   :slot slot
                   :me me)
                 (rmap-setf [slot me]
                   (when (c-input? c)
                     (c-value c)))
                 true)
    :else (do
            (rmap-setf [slot me] c)
            false)))

(defmulti md-awaken-before ia-type)

(defmethod md-awaken-before :default [me]
  #_(println :awaken-before-default!!!!!!!!!!!!
      (ia-type me) (meta me)))

(defn md-awaken
  "(1) do initial evaluation of all ruled slots
   (2) call observers of all slots"
  [me]
  (assert me "md-awaken passed nil")
  (md-awaken-before me)
  (c-assert (= :nascent (md-state me)))
  (rmap-meta-setf [:state me] :awakening)
  (doseq [slot (keys @me)]
    ;; next is tricky: if slot is in :cz but nil, it has been
    ;; optimized-away and observed then in the rare case
    ;; it gets optimized away on other than the initial value.
    (when-let [c (slot (md-cz me) :not-found)]
      (cond
        (= c :not-found)
        ;; these need at least an initial observe
        (do #_(when (and (= slot :kids) (slot @me))
                (pme :md-awaken-kids-nocz-nonnil-obs slot
                  (keys (md-cz me))
                  (:kids (md-cz me) :hunh))
                )
          (observe slot me (slot @me) unbound nil))
        :else (c-awaken c))))
  (rmap-meta-setf [:state me] :awake)
  me)






