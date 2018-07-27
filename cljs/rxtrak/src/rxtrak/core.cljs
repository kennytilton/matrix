(ns ^:figwheel-hooks rxtrak.core
  (:require
    [goog.dom :as dom]
    [tiltontec.model.core :refer [<mget]]
    [tiltontec.webmx.html :refer [tag-dom-create *webmx-trace*]]
    [rxtrak.build :as rxtrak]
    [taoensso.tufte :as tufte :refer (defnp p profiled profile)]
    [cljs-time.coerce :refer [from-long to-string] :as tmc]))

(enable-console-print!)

(tufte/add-basic-println-handler! {})

(let [root (dom/getElement "tagroot")
      app-matrix (rxtrak/matrix-build!)
      app-dom (tag-dom-create
                (<mget app-matrix :mx-dom))]

  (set! (.-innerHTML root) nil)
  (dom/appendChild root app-dom)
  (when-let [route-starter (<mget app-matrix :router-starter)]
    (route-starter)))
