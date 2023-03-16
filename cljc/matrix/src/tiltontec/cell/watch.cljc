(ns tiltontec.cell.watch
  (:require
    [tiltontec.util.core :refer [rmap-setf] :as ucore]
    [tiltontec.cell.base
     :refer [*pulse* c-value c-model  c-ref? md-ref?
             c-state c-prop unbound] :as cty]
    [tiltontec.cell.poly :refer [watch watch-by-type] :as poly]))

(defn c-watch
  ([c why]
   (c-watch c unbound why))
  ([c prior-value why]
   (assert (c-ref? c))
   (assert (integer? @*pulse*))
   (ucore/rmap-setf [:pulse-watched c] @*pulse*)
   (watch (c-prop c) (c-model c) (c-value c) prior-value c)
   (when-let [cw (:watch @c)]
     (cw (c-prop c) (c-model c) (c-value c) prior-value c))))

#_
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