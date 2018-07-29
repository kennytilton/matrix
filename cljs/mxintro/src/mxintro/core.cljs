(ns ^:figwheel-hooks mxintro.core
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par <mget <mget mset!> mset!>
                     mxi-find mxu-find-name] :as md]
            [mxweb.gen
             :refer [evt-tag target-value]
             :refer-macros [h1 input div span]]
            [mxweb.html :refer [tag-dom-create]]))

(enable-console-print!)

(let [root (dom/getElement "tagroot")
      app-matrix (md/make
                   ::hellomx
                   :mx-dom (cFonce (md/with-par me
                                                [(div {}
                                                      (h1 {} "hello,
                                                      Matrix"))])))
      app-dom (tag-dom-create
                (md/<mget app-matrix :mx-dom))]

  (set! (.-innerHTML root) nil)
  (dom/appendChild root app-dom))