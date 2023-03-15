(ns tiltontec.cell.watch
  (:require
    #?(:cljs [tiltontec.util.base
              :refer [mx-type]
              :refer-macros [trx wtrx prog1 *trx?* def-rmap-props def-rmap-meta-props]
              :as ubase]
       :clj  [tiltontec.util.base :refer :all :as ubase])
    [tiltontec.util.core :as ucore]
    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency pcell]
              :refer [c-optimized-away? c-pulse-unwatched? c-formula? c-value c-optimize
                      *one-pulse?* *dp-log* *unfinished-business*
                      *custom-propagator*
                      c-unbound? c-input? unbound
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state *pulse* c-pulse-watched c-code$
                      *call-stack* *defer-changes* dpc minfo cinfo
                      c-rule c-me c-value-state c-callers dependency-record unlink-from-used
                      unlink-from-callers *causation*
                      c-synaptic? dependency-drop c-md-name c-async?
                      c-pulse c-pulse-last-changed c-ephemeral? c-prop c-prop-name
                      *depender* *quiesce*
                      *c-prop-depth* md-prop-owning? c-lazy] :as cty])))


;;; --- watch --------------------------


(defmulti watch-by-type (fn [prop-name me new-val old-val c]
                          [(ubase/mx-type me)]))

(defmethod watch-by-type :default [prop me new-val old-val c]
  #_(when (not= old-val unbound)
      (println :watch-by-typefallthru prop (mx-type me) new-val)))

(defmulti watch (fn [prop-name me new-val old-val c]
                  [prop-name (ubase/mx-type me)]))

(def +watch-default-handler+ (atom nil))

(defmethod watch :default [prop me new-val old-val c]
  (if-let [w @+watch-default-handler+]
    (do                                                     ;; (println :app-def-obs-hanler!!!)
      (w prop me new-val old-val c))
    (watch-by-type prop me new-val old-val c)))

(defmacro defwatch [prop types params & body]
  (assert (keyword? prop) "defwatch> prop should be a keyword.")
  (let [ftypes (concat types (take-last (- 1 (count types))
                               '(:tiltontec.cell.base/model
                                  ;;js/Object js/Object
                                  )))
        fparams (concat params
                  (take-last (- 4 (count params))
                    '(me new-value old-value c)))]
    `(defmethod tiltontec.matrix.api/watch
       [~prop ~@ftypes] [~'prop ~@fparams]
       ~@body)))

(defmacro fn-watch
  "Shortcut definer for cell-specific watchs.
body can be multiple sexprs with access to
call parameters: prop, me, new, old, and c."
  [& body]
  `(fn [~'prop ~'me ~'new ~'old ~'c]
     ~@body))

(defn c-watch
  ([c why]
   (c-watch c unbound why))
  ([c prior-value why]
   (assert (cty/c-ref? c))
   (assert (integer? @cty/*pulse*))
   (ucore/rmap-setf [:pulse-watched c] @cty/*pulse*)
   (watch (cty/c-prop c) (cty/c-model c) (cty/c-value c) prior-value c)
   (when-let [cell-watch (:watch @c)]
     (cell-watch (cty/c-prop c) (cty/c-model c) (cty/c-value c) prior-value c))))
