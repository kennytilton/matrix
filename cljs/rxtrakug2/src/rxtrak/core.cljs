(ns rxtrak.core
  (:require
    [goog.dom :as dom]
    [tiltontec.model.core :refer [<mget]]
    [tiltontec.webmx.html :refer [tag-dom-create *webmx-trace*]]
    ;;[todomx.build :as tmx]
    [rxtrak.build :as rxtrak]
    [taoensso.tufte :as tufte :refer (defnp p profiled profile)]
    [cljs-time.coerce :refer [from-long to-string] :as tmc]))

(enable-console-print!)

(println "This text is printed from src/rxtrak/core.cljs. Go ahead, edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(tufte/add-basic-println-handler! {})

(let [root (dom/getElement "tagroot")
      app-matrix (rxtrak/matrix-build!)
      app-dom (tag-dom-create
                (<mget app-matrix :mx-dom))]

     (set! (.-innerHTML root) nil)
     (dom/appendChild root app-dom)
     (when-let [route-starter (<mget app-matrix :router-starter)]
               (route-starter)))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
