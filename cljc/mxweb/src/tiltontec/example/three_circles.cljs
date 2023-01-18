(ns tiltontec.example.three-circles
  (:require [clojure.string :as str]
            [goog.dom :as gdom]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset! mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen :refer [evt-mx target-value]]
            [tiltontec.mxweb.gen-macro
             :refer-macros [svg circle p span div text]]
            [tiltontec.mxweb.html :refer [tag-dom-create]]))

; <svg
;  viewBox="0 0 300 100"
;  xmlns="http://www.w3.org/2000/svg"
;  stroke="red"
;  fill="grey">
;  <circle cx="50" cy="50" r="40" />
;  <circle cx="150" cy="50" r="4" />
;
;  <svg viewBox="0 0 10 10" x="200" width="100">
;    <circle cx="5" cy="5" r="4" />
;  </svg>
;</svg>


(defn matrix-build! []
  (reset! matrix
    (md/make ::three-circles
      :mx-dom (cFonce (md/with-par me
                        [(p "Hi mom")
                         (svg {:viewBox "0 0 300 100"
                               :stroke "red"
                               :fill "grey"}
                           (circle {:cx 50 :cy 50 :r 40})
                           (circle {:cx 150 :cy 50 :r 4})
                           (svg {:viewBox "0 0 10 10"
                                 :x 200
                                 :width 100}
                             (circle {:cx 5 :cy 5 :r 4})))])))))

(defn main []
  (println "[main]: loading")
  (let [root (gdom/getElement "app") ;; must be defined in index.html
        app-matrix (matrix-build!)
        app-dom (tag-dom-create
                  (mget app-matrix :mx-dom))]
    (prn :dom!!! (.-outerHTML app-dom))
    (set! (.-innerHTML root) nil)
    (gdom/appendChild root app-dom)))

(main)