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
            [helix.core :as hx :refer [defnc fnc $ <>]]

    ;;[helix.dom :as d]
            [helix.hooks :as hooks]

            [myapp.mxreact :as mxr :refer [mkrx mxu!]]
            [myapp.mxrgen :refer-macros [mkbox mkx mkxdebug mxfnc with-props props]]
            ))

(declare mx-find-matrix)

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
                              :jsx {:&                   (props :value :thumbColor)
                                    :onValueChange       #(mswap! me :value not)
                                    :ios_backgroundColor "#3e3e3e"
                                    :trackColor          (js-obj "false" "#767577" "true" "#81b0ff")})

                            (mkx rn/TextInput
                              :name :new-undo
                              :to-do (cI "")
                              :style #js {:height          40
                                          :margin          12
                                          :padding         10
                                          :backgroundColor "linen"
                                          :borderWidth     1}
                              :jsx {:&               (props [:value :to-do] :style)
                                    :placeHolder     "What needs doing?"
                                    :autoFocus       true
                                    :autoCapitalize  "sentences"
                                    :onChangeText    #(do (prn :undo-bam-changetext %)
                                                          (mset! me :to-do %))
                                    :onSubmitEditing #(let [n (js->clj (goog.object/get % "nativeEvent")
                                                                :keywordize-keys true)]
                                                        (prn :undo-on-submit-editing n)
                                                        (when-not (str/blank? (:text n))
                                                          (mswap! (mxu! me :todos-container) :todo-items
                                                            conj (:text n))))
                                    }
                              )

                            (mkrx
                              {:name       :todos-container
                               :todo-items (cI ["make dinner" "eat dinner" "clean dishes"]
                                             :obs (fn [slot me info]
                                                    (prn :obs-todos!!!!!!!! slot info)))
                               :rendering  (cF (let [items (mget me :todo-items)]
                                                 (prn :new-rendering!!!!!! items)
                                                 ($
                                                   (mxfnc
                                                     ($ rn/SafeAreaView
                                                       {:style (clj->js {:flex      1
                                                                         :marginTop 0})}
                                                       ($ rn/FlatList
                                                         {:data         (do (prn :FLATLIST-new!!! items)
                                                                            (clj->js (mget me :todo-items)))
                                                          :extraData (count items)
                                                          :keyExtractor identity
                                                          :renderItem   (fn [i]
                                                                          (let [item (js->clj i :keywordize-keys true)]
                                                                            (prn :render!!!-todo (:item item))
                                                                            ($ rn/View
                                                                              {:style #js {:backgroundColor  "#f9c2ff"
                                                                                           :padding          9
                                                                                           :marginVertical   8
                                                                                           :marginHorizontal 16}}
                                                                              ($ rn/Text {:style #js {:fontSize 32}}
                                                                                (:item item)))))
                                                          }))))))})

                            )))))))

#_(defn matrix-build! []
    (reset! mxr/ssdict {})
    (reset! mxr/refdict {})
    (reset! matrix
      (md/make ::hxApp
        :rx-dom (cFonce (with-par me
                          (mkrx
                            {:name      :root
                             :rendering (cF (mxfnc
                                              (do
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
                                :jsx {:&                   (props :value :thumbColor)
                                      :onValueChange       #(mswap! me :value not)
                                      :ios_backgroundColor "#3e3e3e"
                                      :trackColor          (js-obj "false" "#767577" "true" "#81b0ff")})

                              (mkx rn/Button
                                :name :counter42
                                :title (cF (str "Counter = " (mget me :counter)))
                                :counter (cI 3)
                                :disabled (cF (not (mget (mxu! me :counting?) :value)))
                                :jsx {:&       (props :title :disabled)
                                      :color   "green"
                                      :onPress #(when (mget (mxu! me :counting?) :value)
                                                  (mswap! me :counter inc))})

                              (mkx rn/Button
                                :name :dumper
                                :title (cF (str "Downer " (mget (mxu! me :counter42) :counter)))
                                :jsx {:&       (props :title)
                                      :color   "red"
                                      :onPress #(mswap! (mxu! me :counter42) :counter dec)})

                              (mkbox rn/SafeAreaView
                                :name :item-list
                                :style (js-obj "backgroundColor" "yellow")
                                :of-kids (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
                                           (mkrx
                                             {:name      :an-item
                                              :rendering (cF ($ rn/Text {} {}
                                                               (str "Text " n)))})))
                              (mkrx
                                {:name      :an-item
                                 :rendering (cF ($ rn/Text {:style (js-obj "backgroundColor" "cyan")} {}
                                                  "Booya"))})


                              (mkx rn/TextInput
                                :name :new-undo
                                :to-do (cI "hi undo mom!")
                                :style (cF (clj->js {:height      40
                                                     :margin      12
                                                     :padding     10
                                                     :backgroundColor
                                                                  (if (even? (mget (mxr/mxu! me :counter42) :counter))
                                                                    "linen" "red")
                                                     :borderWidth 1}))
                                :jsx {:&               (props [:value :to-do] :style)
                                      :placeHolder     "What needs doing?"
                                      :autoFocus       true
                                      :autoCapitalize  "sentences"
                                      :multiline       false
                                      :onEndEditing    #(prn :undo-on-end-editing
                                                          (goog.object/getAllPropertyNames %))
                                      :onSubmitEditing #(prn :undo-on-submit-editing
                                                          (goog.object/getAllPropertyNames %))
                                      :onChange        #(prn :undo-on-change
                                                          (js->clj (goog.object/get % "nativeEvent")
                                                            :keywordize-keys true))
                                      :onChangeText    #(do (prn :undo-bam-changetext %)
                                                            (mset! me :to-do %))

                                      }
                                )
                              (mkrx
                                {:name       :todos-container
                                 :todo-items (cI ["make dinner" "eat dinner" "clean dishes"])
                                 :rendering  (cF ($ rn/SafeAreaView
                                                   {:style (clj->js {:flex      1
                                                                     :marginTop 0})}
                                                   ($ rn/FlatList
                                                     {:data         (mget me :todo-items)
                                                      :keyExtractor identity
                                                      :renderItem   #($ rn/Item
                                                                       {:title %})})))})



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

; #_ (mkx rn/Button
;                              :name :counter42
;                              :title (cF (str "Counter = " (mget me :counter)))
;                              :counter (cI 3)
;                              :disabled (cF (not (mget (mxu! me :counting?) :value)))
;                              :jsx {:& (with-props [:title :disabled]
;                                         :color "cyan"
;                                         :onPress #(when (mget (mxu! me :counting?) :value)
;                                                     (mswap! me :counter inc)))})

; #(do (prn :bam-change
;                                                           (goog.object/getAllPropertyNames %))
;                                                         (prn :bam-change
;                                                           (goog.object/get % "nativeEvent"))
;                                                         (prn :bam-change
;                                                           (js->clj (goog.object/get % "nativeEvent")
;                                                             :keywordize-keys true)))