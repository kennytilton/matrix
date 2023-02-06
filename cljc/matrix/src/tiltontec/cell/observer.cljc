(ns tiltontec.cell.observer
  (:require
   #?(:cljs [tiltontec.util.base
             :refer [type-cljc]
             :refer-macros [trx]]
      :clj  [tiltontec.util.base
             :refer :all])

    #?(:cljs [tiltontec.util.core
              :refer [cl-find set-ify any-ref? err ia-ref
                      make-fifo-queue fifo-empty? fifo-peek fifo-pop
                      fifo-data fifo-add rmap-setf
                      wtrx-test]
              :as ut]
       :clj [tiltontec.util.core :refer :all :as ut])

   [tiltontec.cell.base
    :refer [c-ref? md-ref? unbound
            *pulse* c-slot c-value c-md-name
            c-model] :as cty]

   #?(:clj [tiltontec.model.macros :refer :all]
      :cljs [tiltontec.model.macros
             :refer-macros [pme]])))

(defmulti observe-by-type (fn [slot-name me new-val old-val c]
                    [(type-cljc me)]))

(defmethod observe-by-type :default [slot me new-val old-val c]
  #_ (when (not= old-val unbound)
    (println :obs-by-typefallthru slot (type-cljc me) new-val)))    

(defmulti observe (fn [slot-name me new-val old-val c]
                    [slot-name (type-cljc me)]))

(def +observe-default-handler+ (atom nil))

(defmethod observe :default [slot me new-val old-val c]
  (if-let [obs @+observe-default-handler+]
    (do ;; (println :app-def-obs-hanler!!!)
        (obs slot me new-val old-val c))
    (observe-by-type slot me new-val old-val c)))

(defmacro defobserver [slot types params & body]
     (assert (keyword? slot) "defobserver> slot should be a keyword.")
     (let [ftypes (concat types (take-last (- 1 (count types))
                                           '(:tiltontec.cell.base/model
                                             ;;js/Object js/Object
                                             )))
           fparams (concat params
                           (take-last (- 4 (count params))
                                      '(me new-value old-value c)))]
       `(defmethod tiltontec.cell.observer/observe
          [~slot ~@ftypes][~'slot ~@fparams]
          ~@body)))

(defmacro fn-obs
  "Shortcut definer for cell-specific observers.
body can be multiple sexprs with access to
call parameters: slot, me, new, old, and c."
  [& body]
  `(fn [~'slot ~'me ~'new ~'old ~'c]
     ~@body))

(defn c-observe
  ([c why]
   (c-observe c unbound why))
  ([c prior-value why]
   (assert (c-ref? c))
   (assert (integer? @*pulse*))
   (rmap-setf [:pulse-observed c] @*pulse*)
   (observe (c-slot c)(c-model c)(c-value c) prior-value c)
   (when-let [cell-observer (or (:obs @c)(:watch @c))]
     (cell-observer (c-slot c)(c-model c)(c-value c) prior-value c))))


