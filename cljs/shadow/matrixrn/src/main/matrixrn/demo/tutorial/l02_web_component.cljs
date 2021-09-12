(ns matrixrn.demo.tutorial.l02-web-component
  (:require
    [cljs.pprint :as pp]
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mx-par mget mswap! mset!]]
    [react]
    [react-native :as rn]
    [applied-science.js-interop :as j]
    ["@react-navigation/bottom-tabs" :as rn-bottom-tabs]
    [react-native-elements :as rne]
    [matrixrn.matrixrn :as mxn :refer [mkuscreen mk with-props
                                       fmu fmu-val fmi-val]]))

(defonce tabs-nav (rn-bottom-tabs/createBottomTabNavigator))

(defn lesson []
  (let [{:keys [Screen]} (j/lookup tabs-nav)]
    (mkuscreen Screen {}
      {:name "Web components? Done."}
      (mk rn/View
        {:name :red
         ;; now we use 'fmi' to look "inside" this View's Matrix tree
         :intensity (cF (fmi-val :slider :slide-value))}
        {:style {:flex            1
                 :padding         48
                 :alignItems      "center"
                 :backgroundColor "#888"}}
        ;; TryThis(avg): convert the following to a LETFN `rgb-slider` so we
        ;; can add sliders for green and blue. Then add a simple "preview" rectangle
        ;; to show the composite RGB value of all three sliders combined.

        (mk rn/View {}
          {:style {:flexDirection  :row
                   :alignItems      "center"
                   :space-around 9
                   :backgroundColor "yellow"}}
          (mxn/mk rn/Text {}
            {:style {:flex 1 :color "black" :backgroundColor "linen" :padding 4 :margin 9}}
            (mxn/strng "R:"))
          (mxn/mk rne/Slider
            ;; TryThis(easy): add a property for the thumb-color, derived from
            ;; the slider value by converting 0-255 to hexadecimal string "00" to "ff",
            ;; then use as background color for thumbStyle (str "#" thumb-color "00000").
            {:name        :slider
             :slide-value (cI 200)}
            (with-props [[:value :slide-value]]
              {:style         {:flex 7 :backgroundColor "yellow"}
               :step          1 :minimumValue 0 :maximumValue 255
               :trackStyle    {:height 12}
               :thumbStyle    {:height 24 :width 24 :backgroundColor "red"}
               :onValueChange #(mset! me :slide-value %)}))
          (mxn/mk rn/Text
            {:readout (cF (fmu-val :red :intensity))}
            {:style {:flex 2 :color "black" :backgroundColor "cyan" :padding 4 :margin 9}}
            ;; TryThis(avg): how decimal display of color value. Toggle between decimal and hex onPress.
            ;; TryThis(hard): make editable.
            (mxn/strng (pp/cl-format nil "~:@(~2,'0X~)"(mget (mx-par me) :readout)))))))))
