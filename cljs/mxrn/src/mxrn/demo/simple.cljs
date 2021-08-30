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

#_
(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mxn/XView
                  {:name :rootView}
                  #js {:style #js {:flex            1
                               :marginTop       96
                               :padding         24
                               :alignItems      "flex-start"
                               :backgroundColor "cyan"}}
                  (tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
                    :name :bam-button
                    :sid (swap! mxrn.mxreact/sid-latest inc)
                    :counter (cI (rand-int 9999))
                    :title (cF (str "Bam is = " (mget me :counter)))
                    :rendering (cF
                                 (prn :compute-button-rendering (mget me :title))
                                 (<> (mxfnc
                                       (react/createElement
                                         rn/Button
                                         (clj->js {:title   (mget me :title)
                                                   :onPress #(do (prn :bampress)
                                                                 (mswap! me :counter inc))})))))))))))

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mxn/View
                  {:name :root}
                  #js {:style #js {:backgroundColor "linen"
                                   :flex            1
                                   :justifyContent  "center"}}
                  (tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
                    :name :bam-button
                    :sid (swap! mxrn.mxreact/sid-latest inc)
                    :counter (cI (rand-int 9999))
                    :title (cF (str "Bam is = " (mget me :counter)))
                    :rendering (cF
                                 (prn :compute-button-rendering )
                                 (<> (mxfnc
                                       (react/createElement
                                         rn/Button
                                         (clj->js {:title   (mget me :title)
                                                   :style   #js {:color "red"}
                                                   :onPress #(do (prn :bampress)
                                                                 (mswap! me :counter inc))})))))))))))

#_
(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
                  :rendering (cF
                               (prn :compute-View-rendering )
                               (apply react/createElement
                                 rn/View
                                 #js {:style #js {:backgroundColor "#FFFFFF"
                                                  :flex            1
                                                  :justifyContent  "center"}}
                                 (doall
                                   (prn :kids!!!!!!!!!!!!!!! (tiltontec.model.core/mget me :kids))
                                   (map (fn [mapkid]
                                          (let [kr# (tiltontec.model.core/mget mapkid :rendering)]
                                            (prn :kidrender kr#)
                                            kr#))
                                     (tiltontec.model.core/mget me :kids)))))
                  :kids (cFkids
                          (tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
                            :name :bam-button
                            :sid (swap! mxrn.mxreact/sid-latest inc)
                            :counter (cI (rand-int 9999))
                            :title (cF (str "Bam is = " (mget me :counter)))
                            :rendering (cF
                                         (prn :compute-button-rendering )
                                         (<> (mxfnc
                                               (react/createElement
                                                 rn/Button
                                                 (clj->js {:title   (mget me :title)
                                                           :style   #js {:color "red"}
                                                           :onPress #(do (prn :bampress)
                                                                         (mswap! me :counter inc))}))))))))))))

#_
(defn demo []
    (md/make ::hxApp
      :rx-dom (cFonce
                (with-par me
                  (tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
                    :sid (swap! mxrn.mxreact/sid-latest inc)
                    :counter (cI (rand-int 9999))
                    :title (cF (str "Bam = " (mget me :counter)))
                    :rendering (cF
                                 (prn :compute-new-rendering (mget me :title) (mget me :counter))
                                 (<> (mxfnc
                                       (<> rn/View
                                         #js {:style #js {:backgroundColor "#FFFFFF"
                                                          :flex            1
                                                          :justifyContent  "center"}}
                                         (<> rn/Text
                                           #js {:style #js {:color     "black"
                                                            :textAlign "center"}}
                                           (str "Chya, world!"))
                                         (react/createElement
                                           rn/Button
                                           (clj->js {:title   (mget me :title)
                                                     :style   #js {:color "red"}
                                                     :onPress #(do (prn :bampress)
                                                                   (mswap! me :counter inc))})))))))))))

#_(react/createElement
    rn/Button
    #js {:title   "Bam"
         :style   #js {:color "red"}
         :onPress #(prn :BamPress)})
#_(mxn/Button
    {:name    :my-counter
     :title   (cF (str "Counter = " (mget me :counter)))
     :counter (cI 3)}
    {:title   (mget me :title)
     :color   "black"
     :onPress #(mswap! me :counter inc)})

#_(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
    :sid (swap! mxrn.mxreact/sid-latest inc)
    :rendering (tiltontec.cell.core/cF
                 (react/createElement
                   (mxrn.mxrgen/mxfnc
                     (react/createElement
                       (or (get {:ActivityIndicator rn/ActivityIndicator
                                 :Button            rn/Button
                                 :Image             rn/Image
                                 ;; has a child :Pressable         rn/Pressable
                                 ;; :SliderRNE         rne/Slider
                                 :Switch            rn/Switch
                                 :TextInput         rn/TextInput
                                 :FlatList          rn/FlatList} ~~(keyword gen-type))
                         (throw (js/Error. (str "No RN atom mapping for: " ~~(keyword gen-type)))))
                       ~jsx-props#
                       {}))))
    ~@(apply concat
        (into [] mx-props#)))
;(defn demo []
;    (md/make ::hxApp
;      :rx-dom (cFonce
;                (with-par me
;                  (mxn/View
;                    {:name :root}
;                    {:style #js {:flex            1
;                                 :marginTop       96
;                                 :padding         24
;                                 :alignItems      "flex-start"
;                                 :backgroundColor "#bbb"}}
;                    ; <Image
;                    ;  source={{ uri: 'app_icon' }}
;                    ;  style={{ width: 40, height: 40 }}
;                    ;/>
;
;                    (mxn/View {}
;                      {:style #js {;; :flex 1
;                                   :flexDirection   "row"
;                                   :backgroundColor "cyan"
;                                   :width           300
;                                   :height          48
;                                   :alignItems      "stretch"
;                                   ;;:justifyContent "center"
;                                   }}
;                      #_(mxn/SliderRNE
;                          {:name        :slido
;                           :slide-value (cI 0.3)}
;                          {:&             (props [:value :slide-value])
;                           ;;:value 25
;                           :style         #js {:flex 2}
;                           :maximumValue  50
;                           :minimumValue  10
;                           :step          1
;                           :trackStyle    #js {:height 10 :backgroundColor "yellow"}
;                           :thumbStyle    #js {:height 20 :width 20 :backgroundColor "black"}
;                           :onValueChange #(do (prn :Sliding! %)
;                                               (mset! me :slide-value %))})
;                      (mxn/Text
;                        {:name :an-item}
;                        {:style #js {:flex 1 :width 96 :padding 12 :margin 8 :backgroundColor "pink"}}
;                        (mxn/strng (str "slido = " (mget (mxu! me :slido) :slide-value)))))
;
;                    (mxn/Pressable
;                      {:name   :presser
;                       :clicks (cI 3)}
;                      {:onPress #(do (prn :pressed!! me (mget me :clicks))
;                                     (mswap! me :clicks inc))}
;                      (mxn/Text
;                        {:name :an-item}
;                        {:style #js {:width 96 :padding 12 :margin 8 :backgroundColor "pink"}}
;                        (mxn/strng (str "hit me " (mget (mxu! me :presser) :clicks)))))
;
;                    #_(mxn/View {}
;                        {:style #js {:flex            1
;                                     :backgroundColor "red"}}
;                        (mxn/ImageBackground {}
;                          {:style  #js {:position       "absolute"
;                                        :left           0 :top 0
;                                        :right          0 :bottom 0
;                                        :justifyContent "center"
;                                        :alignItems     "center"
;                                        :width          66
;                                        :height         58}
;                           :source #js {:uri "https://react____native.dev/img/tiny_logo.png"}}))
;
;                    (mxn/ActivityIndicator {}
;                      {:size  "small"
;                       :color "red"})
;                    (mxn/Button
;                      {:counter (cI 3)
;                       :bozo    (cF (case (mod (mget me :counter) 3)
;                                      0 "red"
;                                      1 "yellow"
;                                      2 "aquamarine"))
;                       :style   (cF (clj->js {:color (mget me :bozo)}))
;                       :title   (cF (str "Bozo = " (mget me :counter)))}
;                      {:&       (props :style :title)
;                       :onPress #(mswap! me :counter inc)})
;
;                    (mxn/Switch
;                      {:name       :counting?
;                       :value      (cI true)
;                       :thumbColor (cF (if (mget me :value)
;                                         "#f5dd4b" "#f4f3f4"))}
;                      {:&                   (props :value :thumbColor)
;                       :onValueChange       #(mswap! me :value not)
;                       :ios_backgroundColor "#3e3e3e"
;                       :style               #js {:margin 9}
;                       :trackColor          #js {:false "#767577"
;                                                 :true  "#81b0ff"}
;                       #_(js-obj "false" "#767577" "true" "#81b0ff")})
;
;                    (mxn/Button
;                      {:name     :my-counter
;                       :title    (cF (str "Counter = " (mget me :counter)))
;                       :counter  (cI 3)
;                       :disabled (cF (not (mget (mxu! me :counting?) :value)))}
;                      {:&       (props :title :disabled)
;                       :color   "black"
;                       :onPress #(mswap! me :counter inc)})
;
;                    (mxn/Button
;                      {:name  :dumper
;                       :title (cF (str "Downer " (mget (mxu! me :my-counter) :counter)))}
;                      {:&       (props :title)
;                       :color   "red"
;                       :onPress #(mswap! (mxu! me :my-counter) :counter dec)})
;
;                    (mxn/SafeAreaView
;                      {:name :item-list}
;                      {:style #js {:backgroundColor "yellow"}}
;                      (for [n (range (mget (mxr/mxu! me :my-counter) :counter))]
;                        (mxn/Text
;                          {:name :an-item}
;                          {:key   n
;                           :style #js {:padding 4 :margin 5}}
;                          (mxn/strng (str "Text " n))))))))))


