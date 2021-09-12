(ns matrixrn.demo.tutorial.x120-web-component.decimal-display
  (:require
    [cljs.pprint :as pp]
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mx-par mget mswap! mset!]]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    [matrixrn.matrixrn :as mxn :refer [myval mku mk with-props
                                       fmu fmu-val fmi-val]]))

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

(defn solution []
  (mku mxn/Screen {}
    {:name "Hex vs decimal toggle"}
    (mk rn/View
      {:name :red
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

        (make-a-slider :slider 200 "red")

        (mxn/mk rn/Text
          {:display-mode (cI :decimal :obs (fn [_ _ newv] (prn :new-mode newv)))
           :format$      (cF (case (myval :display-mode)
                               :hex "0x~:@(~2,'0X~)"
                               "~3d"))}
          {:style   {:height 24 :flex 2 :color "black" :backgroundColor "cyan" :padding 4 :margin 9}
           :onPress #(mset! me :display-mode (case (myval :display-mode)
                                               :hex :decimal
                                               :hex))}
          (mxn/strng (pp/cl-format nil (mget (mx-par me) :format$)
                       (fmu-val :slider :slide-value))))))))
