(ns myapp.build
  (:require [cljs.pprint :as pp]
            [cljs-time.coerce :as tmc]
            [clojure.string :as str]
    ;[bide.core :as r]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]

            [tiltontec.util.core :refer [pln xor now]]
            [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [unbound ia-type *within-integrity* *defer-changes*]]
            [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]


            [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]

    ;[goog.events.Event :as event]
    ;[goog.dom.forms :as form]

            ["react-native" :as rn]
            [helix.core :as hx :refer [defnc $ <>]]

    ;;[helix.dom :as d]
            [helix.hooks :as hooks]

            [myapp.mxreact :as mxr :refer [mkrx mxu!]]
            [myapp.mxrgen :refer-macros [mkbox mkx mkxdebug mxfnc props]]
            ))

(declare mx-find-matrix)

;; (mkrx
;                          {:name      :root
;                           :rendering (cF (mxfnc
;                                            (apply $ rn/View
;                                              {:style (clj->js {:flex 1
;                                                           :alignItems "center"
;                                                           :justifyContent "center"
;                                                           :backgroundColor "white"})}
;                                              {}
;                                              (doall (map #(mget % :rendering)
;                                                       (mget me :kids))))))}
;                          {}
;                          (cFkids

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (md/make ::hxApp
      :rx-dom (cFonce (with-par me
                        (mkrx
                          {:name      :root
                           :rendering (cF (mxfnc
                                            (do
                                              (prn :root-render-wins!!!!!!!!!)
                                              (apply $ rn/View
                                                {:style (clj->js {:flex            1
                                                                  :marginTop       96
                                                                  :padding         24
                                                                  :alignItems      "flex-start"
                                                                  ;;:justifyContent  "center"
                                                                  :backgroundColor "coral"})}
                                                {}
                                                (doall (map #(mget % :rendering)
                                                         (mget me :kids)))))))}
                          {}
                          (cFkids
                            (mkx rn/Switch
                              :name :counting?
                              :value (cI true)
                              :thumbColor (cF (if (mget me :value)
                                                "#f5dd4b" "#f4f3f4"))
                              :jsx {:value               (mget me :value)
                                    :thumbColor          (mget me :thumbColor)
                                    :onValueChange       #(do (prn :bam %)
                                                              (mswap! me :value not))
                                    :ios_backgroundColor "#3e3e3e"
                                    :trackColor          (js-obj "false" "#767577" "true" "#81b0ff")})
                            (mkx rn/Button
                              :name :counter42
                              :title (cF (str "Bumper " (mget me :counter)))
                              :counter (cI 3)
                              :disabled (cF (not (mget (mxu! me :counting?) :value)))
                              :jsx {:color   "black"
                                    :onPress #(when (mget (mxu! me :counting?) :value)
                                                (mswap! me :counter inc))
                                    :&       (props :title :disabled)}
                              #_{:color   "green"
                                 :onPress #(when true (mget (mxu! me :counting?) :value)
                                                      (mswap! me :counter inc))
                                 :&       (into {} (for [p [:title :disabled]]
                                                     [p (mget me p)]))}
                              #_{:color   "green"
                                 :onPress #(when true (mget (mxu! me :counting?) :value)
                                                      (mswap! me :counter inc))
                                 :&       (hash-map :title (mget me :title)
                                            :disabled (mget me :disabled))}

                              #_{:color   "black"
                                 :onPress #(when true (mget (mxu! me :counting?) :value)
                                                      (mswap! me :counter inc))
                                 :&       (hash-map :title (mget me :title)
                                            :disabled (mget me :disabled))}
                              #_(let [jj (with-props [:title]
                                           :color "black"
                                           :onPress #(when true (mget (mxu! me :counting?) :value)
                                                                (mswap! me :counter inc)))]
                                  (prn :jj jj :jjtype (type jj) :title (:title jj))
                                  jj)
                              #_{:title    (mget me :title)
                                 :disabled (mget me :disabled)
                                 :color    "black"
                                 :onPress  #(when true (mget (mxu! me :counting?) :value)
                                                       (mswap! me :counter inc))})
                            #_(mkx rn/Button
                                :name :dumper
                                :title (cF (str "Downer " (mget (mxu! me :counter42) :counter)))
                                :jsx {:title   (mget me :title)
                                      :onPress #(mswap! (mxu! me :counter42) :counter dec)})
                            #_(mkbox rn/SafeAreaView
                                :name :item-list
                                :style (js-obj "backgroundColor" "yellow")
                                :of-kids (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
                                           (mkrx
                                             {:name      :an-item
                                              :rendering (cF ($ rn/Text {} {}
                                                               (str "Text " n)))})))
                            #_(mkx rn/TextInput
                                :name :new-todo
                                :to-do (cI "hi mom!")
                                :style (cF (clj->js {:height      40
                                                     :margin      12
                                                     :padding     10
                                                     :backgroundColor
                                                                  (if (even? (mget (mxr/mxu! me :counter42) :counter))
                                                                    "linen" "red")
                                                     :borderWidth 1}))
                                :jsx {:placeHolder    "What needs doing?"
                                      :value          (mget me :to-do)
                                      :autoFocus      true
                                      :autoCapitalize "words"
                                      :multiline      true
                                      :numberOfLines  2
                                      :style          (mget me :style)
                                      :onChange       #(do (prn :bam-change
                                                             (goog.object/getAllPropertyNames %))
                                                           (prn :bam-change
                                                             (goog.object/get % "nativeEvent"))
                                                           (prn :bam-change
                                                             (js->clj (goog.object/get % "nativeEvent")
                                                               :keywordize-keys true)))
                                      :onChangeText   #(do (prn :bam-changetext %)
                                                           (mset! me :to-do %))}
                                )

                            ;; ---- GOALS --------------
                            #_(mx/button
                                :name :counter42
                                :title (cF (str "Bumper " (mget me :counter)))
                                :counter (cI 3)
                                :jsx (with-props [:title :title] ;; {... :title (mget me :title ... }
                                       {:onPress #(mswap! me :counter inc)})

                                #_(mx/view {:style (js-obj "backgroundColor" "yellow")}
                                    (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
                                      (mktext (str "Text " n))))
                                ))))))))

#_(defn mx-find-matrix [mx]
    (mxu-find-type mx ::hxApp))
