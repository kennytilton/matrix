(ns tiltontec.example.svg-examples
  (:require [clojure.string :as str]
            [goog.dom :as gdom]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset! mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen :refer [evt-mx target-value]]
            [tiltontec.mxweb.gen-macro
             :refer-macros [svg circle p span div text
                            rect ellipse line polyline path polygon]]
            [tiltontec.mxweb.html :refer [tag-dom-create]]))

(defn three-circles []
  (svg {:viewBox "0 0 300 100"
        :stroke "red"
        :fill "grey"}
    (circle {:cx 50 :cy 50 :r 40})
    (circle {:cx 150 :cy 50 :r 10})
    (svg {:viewBox "0 0 10 10"
          :x 200
          :width 100}
      (circle {:cx 5 :cy 5 :r 4}))))

(defn basic-shapes []
  ;; https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
  (svg {:width 200 :height 250}
    (rect {:x 10 :y 10 :width 30 :height 30
           :stroke :black :stroke-width 5 :fill :transparent})
    (rect {:x 60 :y 10 :rx 10 :ry 10 :width 30 :height 30
           :stroke :black :stroke-width 5 :fill :transparent})
    (circle {:cx 25 :cy 75 :r 20 :stroke :red :stroke-width 5 :fill :transparent})
    (ellipse {:cx 75 :cy 75 :rx 20 :ry 5 :stroke :red :stroke-width 5 :fill :transparent})
    (line {:x1 10 :x2 50 :y1 110 :y2 150 :stroke :orange :stroke-width 5})
    (polyline {:points [60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145]
               :stroke :orange :stroke-width 5 :fill :transparent})
    (polygon {:points [50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180]
              :stroke :green :stroke-width 5 :fill :transparent})
    (path {:d ["M20,230" "Q40,205" "50,230" "T90,230"]
           :fill :none :stroke :blue :stroke-width 5})))

(defn main []
  (println "[main]: loading")
  (let [root (gdom/getElement "app") ;; must be defined in index.html
        app-matrix (md/make
                     :mx-dom (cFonce (md/with-par me
                                       [(basic-shapes)])))
        app-dom (tag-dom-create
                  (mget app-matrix :mx-dom))]
    (prn :dom!!! (.-outerHTML app-dom))
    (set! (.-innerHTML root) nil)
    (gdom/appendChild root app-dom)))

(main)