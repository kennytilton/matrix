(ns matrixrn.demo.tutorial.x120-web-component.lesson
  (:require
    [cljs.pprint :as pp]
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mx-par mget mswap! mset!]]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    [matrixrn.matrixrn :as mxn :refer [<> mku mk with-props
                                       fmu fmu-val fmi-val]]
    ["@expo/vector-icons" :refer [FontAwesome]]))

(defn make-a-slider [name initial-value color]
  (mxn/mk rne/Slider
    {:name        name
     :slide-value (cI initial-value)}
    (with-props [[:value :slide-value]]
      {:style         {:flex 7 :backgroundColor "linen"}
       :step          1 :minimumValue 0 :maximumValue 255
       :trackStyle    {:height 12}
       ;; TryThis[thumb-color,easy] use the slider value to set the intensity
       ;; of the thumb-color. Best way? Change the color parameter to be
       ;; a formatting function that knows how to build "#7F0000" for red at color intensity 127.
       :thumbStyle    {:height 24 :width 24 :backgroundColor color}
       :onValueChange #(mset! me :slide-value %)})))

(defn lesson []
  (mku mxn/Screen {}
    {:name "Web components? Left as an exercise."
     :options {:tabBarLabel "Components"
               :tabBarIcon  (fn []
                              (<> FontAwesome (clj->js {:name "server" :size 28})))}}
    (mk rn/View
      {:name :red
       ;; now we use 'fmi' to look "inside" this View's Matrix tree
       :intensity (cF (fmi-val :slider :slide-value))}
      {:style {:flex            1
               :padding         48
               :alignItems      "center"
               :backgroundColor "#888"}}

      (mk rn/View {}
        {:style {:flexDirection  :row
                 :alignItems      "center"
                 :space-around 9
                 :backgroundColor "yellow"}}
        (mxn/mk rn/Text {}
          {:style {:flex 1 :color "black" :backgroundColor "linen" :padding 4 :margin 9}}
          (mxn/strng "R:"))

        ;; Below we find point of this lesson: web components? Configurable DOM clusters?
        ;; We can implement them as simple CLJS functions, with as many parameters as needed,
        ;; and without a pre-processor:
        (make-a-slider :slider 200 "red")
        ;; TryThis[rgb-slider, hard]: with 'make-a-slider' we demonstrate that we can
        ;; define a parameterized component just by writing Clojure. The 'rgb-slider' exercise requires
        ;; breaking this whole app into an eponymous `rgb-slider` function so we can indeed make three, one
        ;; each for R-G-B. Then add a simple "preview" rectangle
        ;; to show the composite RGB value of all three sliders combined.

        (mxn/mk rn/Text
          {:readout (cF (fmu-val :red :intensity))}
          {:style {:flex 2 :color "black" :backgroundColor "cyan" :padding 4 :margin 9}}
          ;; TryThis(avg): show decimal display of color value. Toggle between decimal and hex onPress.
          ;; TryThis(hard): make editable.
          (mxn/strng (pp/cl-format nil "~:@(~2,'0X~)"(mget (mx-par me) :readout))))))))
