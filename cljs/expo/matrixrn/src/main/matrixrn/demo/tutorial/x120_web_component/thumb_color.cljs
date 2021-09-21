(ns matrixrn.demo.tutorial.x120-web-component.thumb-color
  (:require
    [cljs.pprint :as pp]
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mx-par mget mswap! mset!]]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    [matrixrn.matrixrn :as mxn :refer [<> myval mku mk with-props
                                       fmu fmu-val fmi-val]]
    ["@expo/vector-icons" :refer [FontAwesome]]))

;; TryThis[thumb-color,easy] use the slider value to set the intensity
;; of the thumb-color. Best way? Change the color parameter to be
;; a formatting function that knows how to build "#7F0000" for red at color intensity 127.

(defn make-a-slider [name initial-value color-format$]
  (mxn/mk rne/Slider
    {:name        name
     :slide-value (cI initial-value)
     :thumb-color (cF (pp/cl-format nil color-format$
                        (myval :slide-value)))}
    (with-props [[:value :slide-value]]
      {:style         {:flex 7 :backgroundColor "linen"}
       :step          1 :minimumValue 0 :maximumValue 255
       :trackStyle    {:height 12}
       :thumbStyle    {:height          24 :width 24
                       :backgroundColor (myval :thumb-color)}
       :onValueChange #(mset! me :slide-value %)})))

(defn solution []
  (mku mxn/Screen {}
    {:name "Reactive thumb color"
     :options {:tabBarLabel "Color Me"
               :tabBarIcon  (fn []
                              (<> FontAwesome (clj->js {:name "server" :size 28})))}}
    (mk rn/View
      {:name      :red
       :intensity (cF (fmi-val :slider :slide-value))}
      {:style {:flex            1
               :padding         48
               :alignItems      "center"
               :backgroundColor "#888"}}

      (mk rn/View {}
        {:style {:flexDirection   :row
                 :alignItems      "center"
                 :space-around    9
                 :backgroundColor "yellow"}}
        (mxn/mk rn/Text {}
          {:style {:flex 1 :color "black" :backgroundColor "linen" :padding 4 :margin 9}}
          (mxn/strng "R:"))

        (make-a-slider :slider 200 "#~:@(~2,'0X~)0000")
        ;; it's a bit of a curve, but `cl-format` ^^^ is worth learning

        (mxn/mk rn/Text
          {:readout (cF (fmu-val :red :intensity))}
          {:style {:flex 2 :color "black" :backgroundColor "cyan" :padding 4 :margin 9}}
          ;; TryThis(decimal-display,avg): show decimal display of color value. Toggle between decimal and hex onPress.
          ;; TryThis(editable-slider-value,hard): make editable. (Hard? This is self-referential!)
          (mxn/strng (pp/cl-format nil "~:@(~2,'0X~)" (mget (mx-par me) :readout))))))))
