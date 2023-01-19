(ns tiltontec.example.svg-examples
  (:require [clojure.string :as str]
            [goog.dom :as gdom]
            [tiltontec.cell.core :refer-macros [cF cF+ cI cFn cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [fmu matrix mx-par mget mget mset! mset! mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen :refer [evt-mx target-value]]
            [tiltontec.mxweb.gen-macro
             :refer-macros [svg circle p span div text radialGradient defs stop
                            rect ellipse line polyline path polygon script]]
            [tiltontec.mxweb.html :refer [tag-dom-create]]))

(defn three-circles []
  (svg {:viewBox "0 0 300 100"
        :stroke  "red"
        :fill    "grey"}
    (circle {:cx 50 :cy 50 :r 40})
    (circle {:cx 150 :cy 50 :r 10})
    (svg {:viewBox "0 0 10 10"
          :x       200
          :width   100}
      (circle {:cx 5 :cy 5 :r 4}))))

(defn radial-gradient []
  ;; https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients
  (svg {:width   120 :height 240
        :onclick (fn [e] (prn :Bam! e))}
    (defs
      (radialGradient {:id :RG1}
        (stop {:offset "0%" :stop-color :red})
        (stop {:offset "100%" :stop-color :blue})))
    (rect {:x    10 :y 10 :rx 15 :ry 15 :width 100 :height 100
           :fill "url(#RG1"})))

(defn basic-shapes []
  ;; https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
  (div
    (svg {:width 200 :height 250}
      (rect {:x            10 :y 10 :width 30 :height 30
             :stroke       (cF+ [:obs (fn [_ me new-c _ _]
                                        (if-let [svg (:dom-x (meta me))]
                                          (.setAttributeNS svg nil "stroke"
                                            (name new-c))
                                          (do
                                            (prn :no-svg-but (keys (meta me)) me))))]
                             (let [clock (fmu :clock)
                                   tick (mget clock :tick)]
                               (if (even? tick) :red :black)))
             :stroke-width 5 :fill :transparent})
      (rect {:x      60 :y 10 :rx 10 :ry 10 :width 30 :height 30
             :stroke :black :stroke-width 5 :fill :transparent})
      (circle {:cx 25 :cy 75 :r 20 :stroke :red :stroke-width 5 :fill :transparent})
      (ellipse {:cx 75 :cy 75 :rx 20 :ry 5 :stroke :red :stroke-width 5 :fill :transparent})
      (line {:x1 10 :x2 50 :y1 110 :y2 150 :stroke :orange :stroke-width 5})
      (polyline {:points [60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145]
                 :stroke :orange :stroke-width 5 :fill :transparent})
      (polygon {:points [50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180]
                :stroke :green :stroke-width 5 :fill :transparent})
      (path {:d    ["M20,230" "Q40,205" "50,230" "T90,230"]
             :fill :none :stroke :blue :stroke-width 5})
      )))



(defn main []
  (println "[main]: loading")
  (let [root (gdom/getElement "app")                        ;; must be defined in index.html
        app-matrix (md/make :mx-dom (cFonce (md/with-par me
                                              (div
                                                (div {:class   "example-clock"
                                                      :style   "color:red"
                                                      :content (cF (if (mget me :tick)
                                                                     (-> (js/Date.)
                                                                       .toTimeString
                                                                       (str/split " ")
                                                                       first)
                                                                     "*checks watch*"))}
                                                  {:name   :clock
                                                   :tick   (cI (.getSeconds (js/Date.)) :ephemeral? true)
                                                   :ticker (cF (js/setInterval #(mset! me :tick (.getSeconds (js/Date.))) 1000))
                                                   })
                                                (div {:style   {:background-color "cyan"}
                                                      :onclick (fn [e]
                                                                 (prn :curr-target (.-currentTarget e))
                                                                 (prn :top-click-keys (.getKeys goog/object e)))}
                                                  (span "hi mom xyx")
                                                  #_(three-circles)
                                                  #_(radial-gradient)
                                                  (basic-shapes)
                                                  )))))
        app-dom (tag-dom-create
                  (mget app-matrix :mx-dom))]
    (set! (.-innerHTML root) nil)
    (gdom/appendChild root app-dom)))

(main)

(defn obj->clj
  [obj]
  (if (goog.isObject obj)
    (-> (fn [result key]
          (let [v (goog.object/get obj key)]
            (if (= "function" (goog/typeOf v))
              (do (prn :ignoing-fn)
                  result)
              (do
                (prn :keeping key v)
                (assoc result key (obj->clj v))))))
      (reduce {} (.getKeys goog/object obj)))
    obj))