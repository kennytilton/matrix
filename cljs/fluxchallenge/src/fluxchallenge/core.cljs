
(ns ^:figwheel-hooks fluxchallenge.core
  (:require
    [goog.dom :as dom]
    [tiltontec.cell.core :refer-macros [cFonce]]
    [tiltontec.model.core :refer [<mget] :as md]
    [mxweb.gen :refer-macros [h1 div]]
    [mxweb.html :refer [tag-dom-create]]
    [fluxchallenge.matrix :as flux]))

(enable-console-print!)

(let [root (dom/getElement "tagroot")
      app-matrix (flux/matrix-build!)]
  (set! (.-innerHTML root) nil)
  (dom/appendChild root
    (tag-dom-create
      (<mget app-matrix :mx-dom))))


