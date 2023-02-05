(ns ^:figwheel-hooks rxtrak.core
  (:require
    [goog.dom :as dom]
    [tiltontec.model.core :refer [mget]]
    [tiltontec.web-mx.base :refer [ *web-mx-trace*]]
    [tiltontec.web-mx.html :refer [tag-dom-create]]
    [rxtrak.build :as rxtrak]
    [taoensso.tufte :as tufte :refer (defnp p profiled profile)]))

(enable-console-print!)
(tufte/add-basic-println-handler! {})

(let [root (dom/getElement "tagroot")
      app-matrix (rxtrak/matrix-build!)
      app-dom (tag-dom-create
                (mget app-matrix :mx-dom))]
  (set! (.-innerHTML root) nil)
  (dom/appendChild root app-dom)
  (when-let [route-starter (mget app-matrix :router-starter)]
    (route-starter)))
