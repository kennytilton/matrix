(ns mxrn.demo.simple
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             fget] :as md]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    [mxrn.mxrgen :as mxn :refer [mx$ mxu mx* mk with-props]]))

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mk rn/View {}
                  {:style {:backgroundColor "#666"
                           :flex            1
                           :justifyContent  "center"}}
                  (mk rne/Icon {}
                    {:name    "heartbeat"
                     :type    "font-awesome"
                     :color   "#f50"
                     :onPress #(prn :thump)})
                  (mk rn/Switch
                    {:name       :counting?
                     :value      (cI true)
                     :thumbColor (cF (if (mget me :value)
                                       "#f5dd4b" "#f4f3f4"))}
                    (with-props [:value :thumbColor]
                      {:onValueChange       #(mswap! me :value not)
                       :ios_backgroundColor "red" ;; "#3e3e3e"
                       :style               {:margin 9}
                       :trackColor          {:false "orange" ;; "#767577"
                                             :true  "cyan" #_ "#81b0ff"}}))
                  (mk rn/Button
                    {:name     :counter-host
                     :counter  (cI (rand-int 9999))
                     :kaboom   (cF (str "Kaboxom = " (mget me :counter)))
                     :disabled (cF (not (mget (mxu me :counting?) :value)))}
                    (with-props [[:title :kaboom] :disabled]
                      {:style   {:color "red"}
                       :onPress #(do (prn :bampress)
                                     (mswap! me :counter inc))}))

                  (mk rn/Button
                    {:title (cF (str "Downer: " (mget (mxu me :counter-host) :counter)))}
                    (with-props [:title]
                      {:color   "red"
                       :onPress #(mswap! (mxu me :counter-host) :counter dec)}))

                  (mk rn/ActivityIndicator
                    {:animating (cF (mget (mx* me :counting?) :value))}
                    (with-props [:animating]
                      {:size  "small"
                       :color "#00ff00"}))

                  (mk rn/Pressable
                    {:name   :presser
                     :clicks (cI 3)}
                    {:onPressIn #(prn :pressed-In!!)
                     :onPress   #(do (prn :pressed!!)
                                     (mswap! me :clicks inc))}
                    (mk rn/Text {}
                      {:style {:width 128 :padding 12 :margin 6 :backgroundColor "yellow"}}
                      (mxn/mx$ (str "hit me up? " (mget (mxu me :presser) :clicks)))))

                  (mk rn/View {}
                    {:style {:flexDirection   "row"
                             :backgroundColor "green"
                             :width           300
                             :height          48
                             :alignItems      "center"}}

                    (mk rn/Text {}
                      {:style {:width 128 :padding 12 :margin 6 :backgroundColor "coral"}}
                      (mx$ (str "slidecho: " (mget (mxu me :some-slider) :slide-value))))

                    (mk rne/Slider
                      {:name        :some-slider
                       :slide-value (cI 0.3 :obs (fn [slot me newv oldv c]
                                                   #_(prn :slider-now slot newv oldv c)))}
                      (with-props [[:value :slide-value]]
                        {:style         {:flex 2}
                         :step          1 :minimumValue  10 :maximumValue  50
                         :trackStyle    {:height 10 :color "green"}
                         :thumbStyle    {:height 30 :width 20 :backgroundColor "cyan"}
                         :onValueChange #(mset! me :slide-value %)})))
                  (mk rn/SafeAreaView
                    {:name :item-list}
                    {:style {:backgroundColor "red"}}
                    (for [n (range
                              (max 1 (min 5
                                       (.floor js/Math (/ (mget (mxu me :some-slider) :slide-value) 10)))))]
                      (mk rn/Text
                        {:name :an-item}
                        {:key   n
                         :style {:color "black" :padding 4 :margin 5}}
                        (mx$ n)))))))))

#_(mxn/View {}
    {:style #js {:flex            1
                 :backgroundColor "red"}}
    (mxn/ImageBackground {}
      {:style  #js {:position       "absolute"
                    :left           0 :top 0
                    :right          0 :bottom 0
                    :justifyContent "center"
                    :alignItems     "center"
                    :width          66
                    :height         58}
       :source #js {:uri "https://react____native.dev/img/tiny_logo.png"}}))

