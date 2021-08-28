(ns myapp.demo.flatlist
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]
    ["react-native" :as rn]
    ["react-native-elements" :as rne]
    ["@react-navigation/native" :refer [NavigationContainer]]
    [helix.core :as hx :refer [defnc fnc $ <>]]
    [myapp.mxreact :as mxr :refer [ mxu!]]
    [myapp.mxrgen :as mxn :refer-macros [ mxfnc props]]))

;;;
;;; Use this so SafeAreaView on Android stays away from status bar
;;;
; import { StyleSheet, Platform } from 'react-native';
;export default StyleSheet.create({
;    droidSafeArea: {
;        flex: 1,
;        backgroundColor: npLBlue,
;        paddingTop: Platform.OS === 'android' ? 25 : 0
;    },
;});

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mxn/View
                  {:name :root}
                  {:style #js {:flex            1
                               :marginTop       96
                               :padding         24
                               :alignItems      "flex-start"
                               :backgroundColor "coral"}}
                  (mxn/Switch
                    {:name       :counting?
                     :value      (cI true)
                     :thumbColor (cF (if (mget me :value)
                                       "#f5dd4b" "#f4f3f4"))}
                    {:&                   (props :value :thumbColor)
                     :onValueChange       #(mswap! me :value not)
                     :ios_backgroundColor "#3e3e3e"
                     :trackColor          (js-obj "false" "#767577" "true" "#81b0ff")})
                  (mxn/TextInput
                    {:name     :new-undo
                     :to-do    (cI "")
                     :editable (cF (mget (mxu! me :counting?) :value))}
                    {:&               (props [:value :to-do] :editable)
                     :placeholder     "What to do?"
                     :autoFocus       true
                     :autoCapitalize  "sentences"
                     :onChangeText    #(mset! me :to-do %)
                     :onSubmitEditing #(let [n (js->clj (goog.object/get % "nativeEvent")
                                                 :keywordize-keys true)]
                                         (when-not (str/blank? (:text n))
                                           (mswap! (mxu! me :todos-container) :todo-items
                                             conj {:key   (str (.now js/Date))
                                                   :title (:text n)})
                                           ;; now clear input...
                                           (mset! me :to-do "")))
                     :style    #js {:height          40
                                    :margin          12
                                    :padding         10
                                    :backgroundColor "linen"
                                    :borderWidth     1}})

                  (mxn/SafeAreaView
                    {:name       :todos-container
                     :todo-items (cI nil)}
                    {:style #js {:flex      1
                                 :marginTop 0}}
                    (mxn/FlatList
                      {:data (cF (clj->js (mget (mx-par me) :todo-items)))}
                      {:& (props :data)
                       :keyExtractor (fn [i]
                                       (.-key i))
                       :renderItem   (fn [i]
                                       (prn :rendering!! i)
                                       ($ rn/View
                                         {:style #js {:backgroundColor  "#f9c2ff"
                                                      :padding          9
                                                      :marginVertical   8
                                                      :marginHorizontal 16}}
                                         ($ rn/Text {:style #js {:fontSize 32}}
                                           (.-title (.-item i)))))})))))))