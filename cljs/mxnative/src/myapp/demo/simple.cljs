(ns myapp.demo.simple
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]

    ["react-native" :as rn]
    [helix.core :as hx :refer [defnc fnc $ <>]]
    [myapp.mxreact :as mxr :refer [mkrx mxu!]]
    [myapp.mxrgen :as mxn :refer-macros [my-counter mkbox mkx mxfnc props]]))

(defn compute-kids []
  (cF ($ (mxfnc
           (apply $ rn/View
             {:style #js {:flex            1
                          :marginTop       96
                          :padding         24
                          :alignItems      "flex-start"
                          :backgroundColor "#333"}}
             {}
             (doall (map #(mget % :rendering)
                      (mget me :kids))))))))


(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mkrx
                  {:name      :root
                   :rendering (compute-kids)}
                  (cFkids
                    #_ (mxn/Button
                      {:counter (cI 3)
                       #_#_:bozo (cF (case (mod (my-counter) 3)
                                       0 "red"
                                       1 "yellow"
                                       2 "aquamarine"))
                       :title   "Test" #_(cF (str "Counter = " (my-counter)))}
                      {:&       (props #_[:color :bozo] :title)
                       :onPress #(mswap! me :counter inc)})

                    (mxn/Switch
                      {:name       :counting?
                       :value      (cI true)
                       :thumbColor (cF (if (mget me :value)
                                         "#f5dd4b" "#f4f3f4"))
                       }
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
                       :color   "cyan"
                       :onPress #(mswap! me :counter inc)})

                    #_(mxn/Button
                        {:name    :my-counter
                         :title   (cF (str "Counter = " (mget me :counter)))
                         :counter (cI 3)}
                        {:&       (props :title)
                         :color   "cyan"
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
                        (mkrx
                          {:name      :an-item
                           :rendering (cF ($ rn/Text {:style #js {:padding 4 :margin 4}} {}
                                            (str "Text " n)))})))

                    #_(myapp.mxreact/mkrx
                        (assoc (hash-map ~@container-attrs)
                          :rendering (tiltontec.cell.core/cF
                                       (helix.core/$
                                         (mxfnc
                                           (apply helix.core/$ rn/SafeAreaView
                                             {:style ~(:style kv-map)}
                                             {}
                                             (doall (map #(tiltontec.model.core/mget % :rendering)
                                                      (tiltontec.model.core/mget ~'me :kids))))))))
                        (tiltontec.model.core/cFkids ~of-kids))

                    #_(mkbox rn/SafeAreaView
                        :name :item-list
                        :style #js {:backgroundColor "yellow"}
                        :of-kids (for [n (range (mget (mxr/mxu! me :my-counter) :counter))]
                                   (mkrx
                                     {:name      :an-item
                                      :rendering (cF ($ rn/Text {} {}
                                                       (str "Text " n)))})))
                    #_(mxn/View
                        {}
                        {:style (js-obj "backgroundColor" "yellow")}
                        (for [n (range (mget (mxr/mxu! me :my-counter) :counter))]
                          (mktext (str "Text " n))))
                    #_(mkrx
                        {:name      :an-item
                         :rendering (cF ($ rn/Text {:style #js {:backgroundColor "cyan"
                                                                :margin          4
                                                                :padding         8}} {}
                                          "Booya"))})

                    #_(input-new-todo)))))))

#_(defn demo []
    (md/make ::hxApp
      :rx-dom (cFonce
                (with-par me
                  (mkrx
                    {:name      :root
                     :rendering (cF (mxfnc
                                      (do
                                        (apply $ rn/View
                                          {:style #js {:flex            1
                                                       :marginTop       96
                                                       :padding         24
                                                       :alignItems      "flex-start"
                                                       :backgroundColor "coral"}}
                                          {}
                                          (doall (map #(mget % :rendering)
                                                   (mget me :kids)))))))}
                    (cFkids
                      (mkx rn/Switch
                        :name :counting?
                        :value (cI true)
                        :thumbColor (cF (if (mget me :value)
                                          "#f5dd4b" "#f4f3f4"))
                        :jsx {:&                   (props :value :thumbColor)
                              :onValueChange       #(mswap! me :value not)
                              :ios_backgroundColor "#3e3e3e"
                              :trackColor          #js {:false "#767577"
                                                        :true  "#81b0ff"}
                              #_(js-obj "false" "#767577" "true" "#81b0ff")})

                      (mkx rn/Button
                        :name :my-counter
                        :title (cF (str "Counter = " (mget me :counter)))
                        :counter (cI 3)
                        :disabled (cF (not (mget (mxu! me :counting?) :value)))
                        :jsx {:&       (props :title :disabled)
                              :color   "green"
                              :onPress #(when (mget (mxu! me :counting?) :value)
                                          (mswap! me :counter inc))})

                      (mkx rn/Button
                        :name :dumper
                        :title (cF (str "Downer " (mget (mxu! me :my-counter) :counter)))
                        :jsx {:&       (props :title)
                              :color   "red"
                              :onPress #(mswap! (mxu! me :my-counter) :counter dec)})

                      (mkbox rn/SafeAreaView
                        :name :item-list
                        :style #js {:backgroundColor "yellow"}
                        :of-kids (for [n (range (mget (mxr/mxu! me :my-counter) :counter))]
                                   (mkrx
                                     {:name      :an-item
                                      :rendering (cF ($ rn/Text {} {}
                                                       (str "Text " n)))})))
                      (mkrx
                        {:name      :an-item
                         :rendering (cF ($ rn/Text {:style #js {:backgroundColor "cyan"
                                                                :margin          4
                                                                :padding         8}} {}
                                          "Booya"))})


                      (mkx rn/TextInput
                        :name :new-undo
                        :to-do (cI "")
                        :style (cF (clj->js {:height      40
                                             :margin      12
                                             :padding     10
                                             :backgroundColor
                                                          (if (even? (mget (mxr/mxu! me :my-counter) :counter))
                                                            "linen" "red")
                                             :borderWidth 1}))
                        :jsx {:&               (props [:value :to-do] :style)
                              :placeholder     "What needs doing?"
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
                                                    (mset! me :to-do %))})))))))


