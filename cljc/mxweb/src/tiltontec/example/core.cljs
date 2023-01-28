(ns tiltontec.example.core
  (:require [goog.dom :as gdom]
            [tiltontec.model.core :refer [mget]]
            [tiltontec.mxweb.html :refer [tag-dom-create]]
            ;; --- un-comment only one below to run that example ---------------------
            ;;[tiltontec.example.svg-examples :as example]
            [tiltontec.example.ticktock :as example]
            ))

(defn main []
  (println "[main]: loading")
  (let [root (gdom/getElement "app")                        ;; "app" must be ID of DIV defined in index.html
        app-matrix (example/matrix-build!)
        app-dom (tag-dom-create
                  (mget app-matrix :mx-dom))]
    (set! (.-innerHTML root) nil)
    (gdom/appendChild root app-dom)))

(main)