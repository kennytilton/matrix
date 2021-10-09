(ns demo.demo
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cFn cFonce] :refer [cI]]
    [tiltontec.model.core :refer [with-par matrix mget mset! mswap!] :as md]
    [react]
    [demo.mxreact :as mxr :refer [$ mk mk2 mkfn fmu with-props]]))

(defn demo []
  (md/make :mxreact/mxReactApp
    :rx-dom
    #_($ :div {} (str "MXR Bingo Damn!" (rand-int 99999)))
    (cFonce (with-par me
              (mk2 "div"
                {:ctr     (cI 42)
                 ;; :divtext (cF (str "Cooler " (rand-int (mget me :ctr))))
                 }
                {:style   {:color "red"}
                 :onClick #(do
                             (prn :click %
                               (goog.object/getKeys %)
                               (goog.object/get % "nativeEvent")
                               (.-screenX %))
                             (mswap! me :ctr inc))}
                "one"
                "two"
                #_ (str "Cooler " (rand-int (mget me :ctr))))))
    #_(cFonce
        (with-par me
          (mk "button"
            {:name     :counter-host
             :counter  (cI (rand-int 9999))
             :kaboom   (cF (str "Kaboom = " (mget me :counter)))
             :disabled false                                ;; (cF (not (mget (fmu :counting?) :value)))
             }
            (with-props [[:title :kaboom] :disabled]
              {:style   {:color "red"}
               :onPress #(mswap! me :counter inc)}))))
    #_(cFonce
        (with-par me
          (mk "div"
            {}
            {:style {:backgroundColor "linen"}}
            (mk "span" {}
              {:style {:color   "#f50"
                       :onCLick #(prn :thump-thump)}}))))))

#_(cFonce
    (with-par me
      (mk rn/View {}
        {:style {:backgroundColor "linen"
                 :flex            1
                 :justifyContent  "center"}}
        (mk rne/Icon {}
          {:name    "heartbeat"
           :type    "font-awesome"
           :color   "#f50"
           :onPress #(prn :thump-thump)})
        (mk rn/Switch
          {:name       :counting?
           :value      (cI true)
           :thumbColor (cF (if (mget me :value)
                             "#f5dd4b" "#f4f3f4"))}
          (with-props [:value :thumbColor]
            {:onValueChange       #(mswap! me :value not)
             :ios_backgroundColor "red"                     ;; "#3e3e3e"
             :style               {:margin 9}
             :trackColor          {:false "orange"          ;; "#767577"
                                   :true  "cyan" #_"#81b0ff"}}))
        (mk rn/Button
          {:name     :counter-host
           :counter  (cI (rand-int 9999))
           :kaboom   (cF (str "Kaboom = " (mget me :counter)))
           :disabled (cF (not (mget (fmu :counting?) :value)))}
          (with-props [[:title :kaboom] :disabled]
            {:style   {:color "red"}
             :onPress #(mswap! me :counter inc)}))

        (mk rn/Button
          {:title (cF (str "Downer: " (mget (fmu :counter-host) :counter)))}
          (with-props [:title]
            {:color   "red"
             :onPress #(mswap! (fmu :counter-host) :counter dec)}))

        (mk rn/ActivityIndicator
          {:animating (cF (mget (fm* me :counting?) :value))}
          (with-props [:animating]
            {:size  "small"
             :color "#00ff00"}))

        (mxn/mk rn/Pressable
          {:name   :presser
           :clicks (cI 3)}
          {:onPressIn #(prn :pressed-In!!)
           :onPress   #(do (prn :pressed!!)
                           (mswap! me :clicks inc))}
          (mxn/mk rn/Text {}
            {:style {:width 128 :padding 12 :margin 6 :backgroundColor "yellow"}}
            (mxn/strng (str "hit me up? " (mget (fmu :presser) :clicks)))))

        (mxn/mk rn/View {}
          {:style {:flexDirection   "row"
                   :backgroundColor "green"
                   :width           300
                   :height          48
                   :alignItems      "center"}}

          (mxn/mk rn/Text {}
            {:style {:width 128 :padding 12 :margin 6 :backgroundColor "coral"}}
            (mxn/strng (str "slidecho: " (mget (fmu :some-slider) :slide-value))))

          (mxn/mk rne/Slider
            {:name        :some-slider
             :slide-value (cI 0.3 :obs (fn [slot me newv oldv c]
                                         #_(prn :slider-now slot newv oldv c)))}
            (with-props [[:value :slide-value]]
              {:style         {:flex 2}
               :step          1 :minimumValue 10 :maximumValue 50
               :trackStyle    {:height 10 :color "green"}
               :thumbStyle    {:height 30 :width 20 :backgroundColor "cyan"}
               :onValueChange #(mset! me :slide-value %)})))
        (mxn/mk rn/SafeAreaView
          {:name :item-list}
          {:style {:backgroundColor "red"}}
          (for [n (range
                    (max 1 (min 5
                             (.floor js/Math (/ (mget (fmu :some-slider) :slide-value) 10)))))]
            (mxn/mk rn/Text
              {:name :an-item}
              {:key   n
               :style {:color "black" :padding 4 :margin 5}}
              (mxn/strng n)))))))