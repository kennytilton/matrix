(ns tiltontec.model.base
  {:clj-kondo/ignore [:redundant-do]}
  (:require
   #?(:clj  [clojure.test :refer :all])
   #?(:cljs [tiltontec.util.base :refer-macros [def-rmap-props def-rmap-meta-props]]
      :clj [tiltontec.util.base :refer [def-rmap-meta-props def-rmap-props]])
   [tiltontec.cell.base :refer [c-input? c-ref? c-value md-state unbound] :as cty]
   [tiltontec.cell.poly :refer [c-awaken md-awaken-before watch]]
   [tiltontec.util.core :refer [rmap-meta-setf rmap-setf]]))

(def-rmap-props md-
  name)

(def-rmap-meta-props md-
   ;; we let cell.base define md-state
  cz)

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

(defn md-awaken
  "(1) do initial evaluation of all ruled props
   (2) call watchs of all props"
  [me]
  (assert me "md-awaken passed nil")
  (md-awaken-before me)
  (assert (= :nascent (md-state me))
          (str "md-awaken> state not nascent post-awaken-before: " (or (md-state me) :NIL) " meta: " (meta me)))
  (rmap-meta-setf [::cty/state me] :awakening)
  (doseq [prop (keys @me)]
    ;; next is tricky: if prop is in :cz but nil, it has been
    ;; optimized-away and watched then in the rare case
    ;; it gets optimized away on other than the initial value.
    (when-let [c (prop (md-cz me) :not-found)]
      (cond
        (= c :not-found)
        ;; these need at least an initial watch
        (do #_(when (and (= prop :kids) (prop @me))
                (prn :md-awaken-kids-nocz-nonnil-obs prop
                     (keys (md-cz me))
                     (:kids (md-cz me) :hunh)))
         (watch prop me (prop @me) unbound nil))
        :else (c-awaken c))))
  (rmap-meta-setf [::cty/state me] :awake)
  me)
