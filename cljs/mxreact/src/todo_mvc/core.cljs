(ns todo-mvc.core
  (:require
   [tiltontec.model.core :as md]
   [mxreact.mxreact :as mxr :refer [$]]
   ["react-dom" :as rdom]))

; (.createElement
;                        (hx/get-react)
;                        ~type
;                        (impl.props/dom-props ~(first args))
;                        ~@(rest args))

(defn App []
  ($ :div {} (str "Bingo " (rand-int 99999))))

(defn ^:dev/after-load ;; todo try losing this once in react land
  start []
  (rdom/render ($ App) (js/document.getElementById "app")))
