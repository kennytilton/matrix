(ns matrixrn.demo.flatlist
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core :refer [with-par mx-par mget mset! mswap!] :as md]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    [matrixrn.matrixrn :as mxn :refer [fmu mk with-props]]))

(def cljs-splash-above (js/require "../assets/cljs.png"))

(def <> react/createElement)

(defn the-flatlist-beef []
  (mk rn/FlatList
    {:name :flatty
     :data (cF (clj->js (mget (mx-par me) :todo-items)))}
    {:data         (mget me :data)
     :keyExtractor (fn [i] (.-key i))
     :renderItem   (fn [i]
                     (<> rn/View #js {:style
                                      #js {:backgroundColor  "#ffc2ff"
                                           :flex             1
                                           :flexDirection    "row"
                                           :padding          9
                                           :marginVertical   4
                                           :marginHorizontal 16}}
                       (<> rne/Icon
                         (clj->js {:name    "trash"
                                   :type    "font-awesome"
                                   :color   "#f50"
                                   :style   {:flex 01 :margin 6}
                                   :onPress (fn [x]
                                              (let [next (remove #(= (:key %) (.. i -item -key))
                                                           (mget (fmu :todos-container) :todo-items))]
                                                (mset! (fmu :todos-container) :todo-items next)))}))
                       (<> rn/Text
                         #js {:style #js {:fontSize 24}}
                         (.-title (.-item i)))))}))

(defn to-do-entry []
  (mk rn/TextInput
    {:name     :new-undo
     :to-do    (cI "")
     :editable (cF (mget (fmu :counting?) :value))}
    (with-props [:value :editable]
      {:placeholder     "What to do?"
       :autoFocus       true
       :autoCapitalize  "sentences"
       :onChangeText    #(mset! me :to-do %)
       :onSubmitEditing #(let [n (js->clj (goog.object/get % "nativeEvent")
                                   :keywordize-keys true)]
                           (when-not (str/blank? (:text n))
                             (mswap! (fmu :todos-container) :todo-items
                               conj {:key   (str (.now js/Date))
                                     :title (:text n)})
                             ;; now clear input...
                             (mset! me :to-do "")))
       :style           {:height          40
                         :margin          12
                         :padding         10
                         :backgroundColor "linen"
                         :borderWidth     1}})))

(defn allow-todos-switch []
  (mk rn/Switch
    {:name       :counting?
     :value      (cI true)
     :thumbColor (cF (if (mget me :value)
                       "cyan" #_"#f5dd4b" "red" #_"#f4f3f4"))}
    (with-props [:value :title :thumbColor]
      {:onValueChange       #(mswap! me :value not)
       :style               {:marginTop 9}
       :ios_backgroundColor "#3e3e3e"
       :trackColor          (js-obj "false" "red" "true" "green")})))

(def starting-todos
  ["Wake up"
   "Fall out of bed"
   "Drag comb across head"
   "Find way down stairs"])

(defn demo []
  (md/make ::rnApp
    :rx-dom (cFonce
              (with-par me
                (mk rn/View {}
                  {:style {:flex            1
                           :marginTop       96
                           :padding         24
                           :alignItems      "center"
                           :backgroundColor "linen"}}

                  (mk rn/Image {}
                    {:style  {:width  160
                              :height 160}
                     :source cljs-splash-above})

                  (allow-todos-switch)
                  (to-do-entry)

                  (mk rn/SafeAreaView
                    {:name       :todos-container
                     :todo-items (cI (mapv (fn [task]
                                             {:key   (str (.now js/Date) (rand-int 99999))
                                              :title task})
                                       starting-todos))}
                    {:style {:flex      1
                             :marginTop 0}}
                    (the-flatlist-beef)))))))

;;;
;;; todo Use this so SafeAreaView on Android stays away from status bar
;;;
; import { StyleSheet, Platform } from 'react-native';
;export default StyleSheet.create({
;    droidSafeArea: {
;        flex: 1,
;        backgroundColor: npLBlue,
;        paddingTop: Platform.OS === 'android' ? 25 : 0
;    },
;});

