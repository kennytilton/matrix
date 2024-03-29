(ns matrixrn.demo.tutorial.x120-web-component.rgb-slider
  (:require
    [cljs.pprint :as pp]
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mx-par mget mswap! mset!]]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    [matrixrn.matrixrn :as mxn :refer [<> myval mku mk with-props
                                       fmu fmu-val fmi-val myval]]
    ["@expo/vector-icons" :refer [FontAwesome]]))

;; SPOILER ALERT: includes other solutions as well

(defn solution []
  (letfn [(rs-label [label]
            (mxn/mk rn/Text {}
              {:style {:height 24 :flex 1 :color "black" :backgroundColor "cyan" :padding 4 :margin 9}}
              (mxn/strng label)))

          (rs-slider [initial-value color-format$]
            (mxn/mk rne/Slider
               {:name        :slider
               :thumb-color (cF (pp/cl-format nil color-format$ (mget me :slide-value)))
               :slide-value (cI initial-value)}
              (with-props [[:value :slide-value]]
                {:style         {:flex 7 :backgroundColor "yellow"}
                 :step          1 :minimumValue 0 :maximumValue 255
                 :trackStyle    {:height 12}
                 :thumbStyle    {:height          24 :width 24
                                 :backgroundColor (mget me :thumb-color)}
                 :onValueChange #(mset! me :slide-value %)})))

          (rs-readout []
            (mxn/mk rn/Text
              {:display-mode (cI :decimal)
               :format$      (cF (case (myval :display-mode)
                                   :hex "0x~:@(~2,'0X~)"
                                   "~3,' d"))}
              {:style   {:height 24 :flex 2 :color "black" :backgroundColor "cyan" :padding 4 :margin 9}
               :onPress #(mset! me :display-mode (case (myval :display-mode)
                                                   :hex :decimal
                                                   :hex))}
              (mxn/strng (pp/cl-format nil (mget (mx-par me) :format$)
                           (fmu-val :slider :slide-value)))))
          ;; ------------------
          (rgb-slider [mx-name initial-value label color-format$]
            (mk rn/View
              {:name          mx-name
               :intensity     (cF (fmi-val :slider :slide-value))
               :intensity-hex (cF (pp/cl-format nil "~:@(~2,'0X~)" (myval :intensity)))}
              {:style {:flex            1
                       :padding         48
                       :alignItems      "center"
                       :backgroundColor "#888"}}
              (mk rn/View {}
                {:style {:flexDirection   :row
                         :alignItems      "center"
                         :space-around    9
                         :backgroundColor "beige"}}
                (rs-label label)
                (rs-slider initial-value color-format$)
                (rs-readout))))]

    (mku mxn/Screen {}
      {:name "Web components: rgb-slider compleat"
       :options {:tabBarLabel "Compleat"
                 :tabBarIcon  (fn []
                                (<> FontAwesome (clj->js {:name "server" :size 28})))}}
      (mk rn/View {} {:style {:flex 1}}
        (mk rn/View {} {}
          (rgb-slider :red 51 "R" "#~:@(~2,'0X~)0000")
          (rgb-slider :green 204 "G" "#00~:@(~2,'0X~)00")
          (rgb-slider :blue 153 "B" "#0000~:@(~2,'0X~)"))
        (mk rn/View
          {:net-color (cF (pp/cl-format nil "#~{~a~}"
                            (map #(mget (fmu %) :intensity-hex) [:red :green :blue])))}
          {:style {:width           300 :height 172 :margin 48 :margin-left 128
                   :backgroundColor (mget me :net-color)}})))))



