(ns todo-mvc.core
  (:require
   [clojure.string :as string]
   ;[helix.core :as hx :refer [$ <>]]
   ;[helix.dom :as d]
   ;[helix.impl.props :as impl.props]
   ;[helix.hooks :as hooks]
   ;[todo-mvc.components :as c]
   ;;[todo-mvc.lib :refer [defnc]]
   ;[todo-mvc.storage :as storage]
   [tiltontec.model.core :as md]
   [mxreact.mxreact :as mxr :refer [$]]
   ["react-dom" :as rdom]
   ["react-router-dom" :as rr]))

; (.createElement
;                        (hx/get-react)
;                        ~type
;                        (impl.props/dom-props ~(first args))
;                        ~@(rest args))

(defn App
  []
  ;; (d/p "Hi fn mom 10")
  ;; (d/$d "p" (str "Hi mom " (rand-int 99999)))
  #_ (.createElement (mxr/get-react)
    "p"
    (clj->js {})
    (str "Hi mom " (rand-int 99999)))
  ($ :div {} (str "Bingo " (rand-int 99999))))

(defn ^:dev/after-load start
  []
  (rdom/render ($ App) (js/document.getElementById "app")))
