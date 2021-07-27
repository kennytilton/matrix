(ns todo-mvc.lib
  #?(:clj (:require [helix.core :as helix]))
  #?(:cljs (:require-macros [todo-mvc.lib])))


#?(:clj
   (defmacro defnc [type params & body]
     (let [opts? (map? (first body)) ;; whether an opts map was passed in
           opts (if opts?
                  (first body)
                  {})
           body (if opts?
                  (rest body)
                  body)
           ;; feature flags to enable by default
           default-opts {:helix/features {:fast-refresh true}}]
       `(helix.core/defnc ~type ~params
          ;; we use `merge` here to allow indidivual consumers to override feature
          ;; flags in special cases
          ~(merge default-opts opts)
          ~@body))))
