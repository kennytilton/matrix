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
    ;["@react-navigation/native" :refer [NavigationContainer] :as rnav]

    [mxrn.mxreact :as mxr :refer [mxu! mx*]]
    [mxrn.mxrgen :as mxn :refer-macros [mk mxfnc props]]))

(def <> react/createElement)

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mxn/mkk rn/View
                  {:name :root}
                  #js {:style #js {:backgroundColor "#444"
                                   :flex            1
                                   :justifyContent  "center"}}
                  (mxn/mk rne/Icon {}
                      #js {:name    "heartbeat"
                           :type    "font-awesome"
                           :color   "#f50"
                           :onPress #(prn :thump)})
                  (mxn/mk rn/Switch
                    {:name       :counting?
                     :value      (cI true)
                     :thumbColor (cF (if (mget me :value)
                                       "#f5dd4b" "#f4f3f4"))}
                    (clj->js {:value               (mget me :value)
                              :thumbColor          (mget me :thumbColor)
                              :onValueChange       #(mswap! me :value not)
                              :ios_backgroundColor "#3e3e3e"
                              :style               #js {:margin 9}
                              :trackColor          #js {:false "#767577"
                                                        :true  "#81b0ff"}
                              #_(js-obj "false" "#767577" "true" "#81b0ff")}))
                  (mxn/mk rn/Button
                    {:name     :bam-button
                     :counter  (cI (rand-int 9999))
                     :title    (cF (str "Kaboom is = " (mget me :counter)))
                     :disabled (cF (not (mget (mxu! me :counting?) :value)))}
                    (clj->js {:title    (mget me :title)
                              :disabled (mget me :disabled)
                              :style    (clj->js {:color "red"})
                              :onPress  #(do (prn :bampress)
                                             (mswap! me :counter inc))}))

                  (mxn/mk rn/Button
                    {:name  :dumper
                     :title (cF (str "Downer" (mget (mxu! me :bam-button) :counter)))}
                    #js {:title   "Booyambo"                ;; (mget me :title)
                         :color   "red"
                         :onPress #(mswap! (mxu! me :bam-button) :counter dec)})


                  (mxn/mk rn/ActivityIndicator
                    {:animating (cF (mget (mx* me :counting?) :value))}
                    #js {:animating (mget me :animating)
                         :size      "small"
                         :color     "#00ff00"})

                  (mxn/mkk rn/Pressable
                    {:name   :presser
                     :clicks (cI 3)}
                    (clj->js {:onPressIn #(prn :pressed-In!!)
                              :onPress   #(do (prn :pressed!!)
                                              (mswap! me :clicks inc))})
                    (mxn/mkk rn/Text
                      {:name :an-item}
                      #js {:style #js {:width 128 :padding 12 :margin 6 :backgroundColor "yellow"}}
                      (mxn/strng (str "hit me up? " (mget (mxu! me :presser) :clicks)))))


                  (mxn/mkk rn/View {}
                    #js {:style #js {;; :flex 1
                                     :flexDirection   "row"
                                     :backgroundColor "green"
                                     :width           300
                                     :height          48
                                     :alignItems      "center"}}

                    (mxn/mkk rn/Text {}
                      #js {:style #js {:width 128 :padding 12 :margin 6 :backgroundColor "coral"}}
                      (mxn/strng (str "slidecho: " (mget (mxu! me :slido) :slide-value))))

                    (mxn/mk rne/Slider
                      {:name        :slido
                       :slide-value (cI 0.3 :obs (fn [slot me newv oldv c]
                                                   #_(prn :slider-now slot newv oldv c)))}
                      (clj->js {:value         (mget me :slide-value)
                                :name          (mget me :name)
                                :style         (clj->js {:flex 2})
                                :maximumValue  50
                                :minimumValue  10
                                :step          1
                                :trackStyle    (clj->js {:height 10 :color "green"})
                                :thumbStyle    (clj->js {:height 30 :width 20 #_#_:color "blue" :backgroundColor "cyan"})
                                :onValueChange #(do         ;;(prn :Sliding! %)
                                                  (mset! me :slide-value %))})))
                  (mxn/mkk rn/SafeAreaView
                    {:name :item-list}
                    {:style #js {:backgroundColor "yellow"}}
                    (for [n (range (max 1
                                     (min 5
                                       (.floor js/Math (/ (mget (mxr/mxu! me :slido) :slide-value) 10)))))]
                      (mxn/mkk rn/Text
                        {:name :an-item}
                        #js {:key   n
                             :style #js {:color "cyan" :padding 4 :margin 5}}
                        (mxn/strng n)))))))))



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


