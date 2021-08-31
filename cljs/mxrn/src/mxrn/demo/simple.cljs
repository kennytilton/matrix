(ns mxrn.demo.simple
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]

    [react]
    [react-native :as rn]
    ;["react-native-elements" :as rne]
    ;["@react-navigation/native" :refer [NavigationContainer] :as rnav]

    [mxrn.mxreact :as mxr :refer [mxu!]]
    [mxrn.mxrgen :as mxn :refer-macros [mxfnc props]]))

(def <> react/createElement)

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mxn/View
                  {:name :root}
                  #js {:style #js {:backgroundColor "linen"
                                   :flex            1
                                   :justifyContent  "center"}}
                  (mxn/Switch
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
                  (mxn/Button
                    {:name     :bam-button
                     :counter  (cI (rand-int 9999))
                     :title    (cF (str "KaBoom is = " (mget me :counter)))
                     :disabled (cF (not (mget (mxu! me :counting?) :value)))}
                    (clj->js {:title    (mget me :title)
                              :disabled (mget me :disabled)
                              :style    (clj->js {:color "red"})
                              :onPress  #(do (prn :bampress)
                                             (mswap! me :counter inc))}))

                  (mxn/Button
                    {:name  :downer
                     :title (cF (str "Downer " (mget (mxu! me :bam-button) :counter)))}
                    (clj->js {:title   (mget me :title)
                              :onPress #(do (prn :bampress)
                                            (mswap! (mxu! me :bam-button) :counter dec))}))

                  (mxn/Button
                    {:name  :dumper
                     :title (cF (str "Downer" (mget (mxu! me :bam-button) :counter)))}
                    #js {:title   "hunh"                    ;; (mget me :title)
                         :color   "red"
                         :onPress #(mswap! (mxu! me :bam-button) :counter dec)})

                  (mxn/ActivityIndicator {}
                    #js {:size  "large"
                         :color "#00ff00"})

                  (mxn/Pressable
                    {:name   :presser
                     :clicks (cI 3)}
                    {:onPress #(do (prn :pressed!! me (mget me :clicks))
                                   (mswap! me :clicks inc))}
                    (mxn/Text
                      {:name :an-item}
                      #js {:style #js {:width 96 :padding 12 :margin 8 :backgroundColor "pink"}}
                      (mxn/strng (str "hit me " (mget (mxu! me :presser) :clicks))))))))))

#_(defn demo []
    (md/make ::hxApp
      :rx-dom (cFonce
                (with-par me
                  (mxn/View
                    {:name :root}
                    {:style #js {:flex            1
                                 :marginTop       96
                                 :padding         24
                                 :alignItems      "flex-start"
                                 :backgroundColor "#bbb"}}
                    ; <Image
                    ;  source={{ uri: 'app_icon' }}
                    ;  style={{ width: 40, height: 40 }}
                    ;/>

                    (mxn/View {}
                      {:style #js {;; :flex 1
                                   :flexDirection   "row"
                                   :backgroundColor "cyan"
                                   :width           300
                                   :height          48
                                   :alignItems      "stretch"
                                   ;;:justifyContent "center"
                                   }}
                      #_(mxn/SliderRNE
                          {:name        :slido
                           :slide-value (cI 0.3)}
                          {:&             (props [:value :slide-value])
                           ;;:value 25
                           :style         #js {:flex 2}
                           :maximumValue  50
                           :minimumValue  10
                           :step          1
                           :trackStyle    #js {:height 10 :backgroundColor "yellow"}
                           :thumbStyle    #js {:height 20 :width 20 :backgroundColor "black"}
                           :onValueChange #(do (prn :Sliding! %)
                                               (mset! me :slide-value %))})
                      (mxn/Text
                        {:name :an-item}
                        {:style #js {:flex 1 :width 96 :padding 12 :margin 8 :backgroundColor "pink"}}
                        (mxn/strng (str "slido = " (mget (mxu! me :slido) :slide-value)))))

                    (mxn/Pressable
                      {:name   :presser
                       :clicks (cI 3)}
                      {:onPress #(do (prn :pressed!! me (mget me :clicks))
                                     (mswap! me :clicks inc))}
                      (mxn/Text
                        {:name :an-item}
                        {:style #js {:width 96 :padding 12 :margin 8 :backgroundColor "pink"}}
                        (mxn/strng (str "hit me " (mget (mxu! me :presser) :clicks)))))

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

                    (mxn/ActivityIndicator {}
                      {:size  "small"
                       :color "red"})
                    (mxn/Button
                      {:counter (cI 3)
                       :bozo    (cF (case (mod (mget me :counter) 3)
                                      0 "red"
                                      1 "yellow"
                                      2 "aquamarine"))
                       :style   (cF (clj->js {:color (mget me :bozo)}))
                       :title   (cF (str "Bozo = " (mget me :counter)))}
                      {:&       (props :style :title)
                       :onPress #(mswap! me :counter inc)})

                    (mxn/Switch
                      {:name       :counting?
                       :value      (cI true)
                       :thumbColor (cF (if (mget me :value)
                                         "#f5dd4b" "#f4f3f4"))}
                      {:&                   (props :value :thumbColor)
                       :onValueChange       #(mswap! me :value not)
                       :ios_backgroundColor "#3e3e3e"
                       :style               #js {:margin 9}
                       :trackColor          #js {:false "#767577"
                                                 :true  "#81b0ff"}
                       #_(js-obj "false" "#767577" "true" "#81b0ff")})

                    (mxn/Button
                      {:name     :my-counter
                       :title    (cF (str "Counter = " (mget me :counter)))
                       :counter  (cI 3)
                       :disabled (cF (not (mget (mxu! me :counting?) :value)))}
                      {:&       (props :title :disabled)
                       :color   "black"
                       :onPress #(mswap! me :counter inc)})

                    (mxn/Button
                      {:name  :dumper
                       :title (cF (str "Downer " (mget (mxu! me :my-counter) :counter)))}
                      {:&       (props :title)
                       :color   "red"
                       :onPress #(mswap! (mxu! me :my-counter) :counter dec)})

                    (mxn/SafeAreaView
                      {:name :item-list}
                      {:style #js {:backgroundColor "yellow"}}
                      (for [n (range (mget (mxr/mxu! me :my-counter) :counter))]
                        (mxn/Text
                          {:name :an-item}
                          {:key   n
                           :style #js {:padding 4 :margin 5}}
                          (mxn/strng (str "Text " n))))))))))


