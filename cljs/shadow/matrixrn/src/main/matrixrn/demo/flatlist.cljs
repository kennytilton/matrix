(ns matrixrn.demo.flatlist
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core :refer [with-par mx-par mget mset! mswap!] :as md]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    ; import CheckBox from '@react-native-community/checkbox';
    ; iOS native-ish no good with Expo ["@react-native-community/checkbox" :default CheckBox]
    ; import BouncyCheckbox from "react-native-bouncy-checkbox";
    ["react-native-bouncy-checkbox" :default BouncyCheckBox]
    ;; import Checkbox from 'expo-checkbox';
    ;; not for iOS! ["expo-checkbox" :default CheckBox]
    [matrixrn.matrixrn :as mxn :refer [fmu mk with-props]]))

;(def BouncyCheckBox (js/require "react-native-bouncy-checkbox"))
(def cljs-splash-above (js/require "../assets/cljs.png"))

(def <> react/createElement)

(defn the-flatlist-beef []
  ;; yes ^^^, any bit of structure in a larger view can simply be pulled out into a function with
  ;; no parameters. All information flows from a "parent" captured by mxrn/mk macrology.

  ;(prn :checkbo CheckBox)
  (prn :bouncy BouncyCheckBox)

  (mk rn/FlatList
    {:data (cF (clj->js (mget (mx-par me) :todo-items)))}
    (with-props [:data]
      ;; with-props ^^^ just lets us not type linkes like the commented line you see below.
      ;; But the analog is good: it is how we pass properties from an MX instance to its RN incarnation.
      ;; Re "incarnation", yeah, MatrixRN works by creating pure MX instances able to define matching RN elements
      {;; :data         (mget me :data)
       :keyExtractor (fn [i] (.-key i))
       :renderItem   (fn [i]
                       ;; Here we cross over into pure RN, but in truth we could give the mx-flatlist
                       ;; todos as children and extract their rendering in 'renderItem'. Left as an exercise.
                       (<> rn/View
                         #js {:style                        ;; I am torn between clj->js and #js
                              #js {:backgroundColor  "#ffc2ff"
                                   :flex             1
                                   :flexDirection    "row"
                                   :alignItems       "center"
                                   :padding          9
                                   :marginVertical   4
                                   :marginHorizontal 16}}

                         (<> BouncyCheckBox #js {;:text        "Do this"
                                                 ;:textStyle "JosefinSans-Regular"
                                                 :fillColor   "cyan"
                                                 :unfillColor "#eee"
                                                 :iconStyle   #js {:borderColor "#f8f"}
                                                 :isChecked   false})
                         (<> rne/Icon
                           (clj->js {:name    "trash"
                                     :type    "font-awesome"
                                     :color   "#f50"
                                     :style   {:flex 01 :marginRight 18}
                                     :onPress (fn [] (let [next (remove #(= (:key %) (.. i -item -key))
                                                                  (mget (fmu :todos-container) :todo-items))]
                                                       (mset! (fmu :todos-container) :todo-items next)))}))
                         (<> rn/Text
                           #js {:style #js {:fontSize 18}}
                           (.-title (.-item i)))))})))

(defn to-do-entry []
  (mk rn/TextInput
    {:name     :new-undo
     :to-do    (cI "")
     :editable (cF (mget (fmu :allow-todo-entry?) :value))
     :need-input (cF (if (seq (mget (fmu :todos-container) :todo-items))
                       "Anything else to do?" "What is there to do?"))}
    (with-props [[:value :to-do] :editable [:placeholder :need-input]]
      {;; :placeholder     "What else is there to do?"
       :autoFocus       true
       :autoCapitalize  "sentences"
       :selectTextOnFocus true
       :onChangeText    #(mset! me :to-do %)
       :onSubmitEditing #(let [n (js->clj (goog.object/get % "nativeEvent")
                                   :keywordize-keys true)]
                           ; todo just pick out .-text
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
    {:name       :allow-todo-entry?
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
                (mk rn/View
                  ;; ^^^ we work off actual RN components, meaning any component we track down can be used without
                  ;; much adjustment. But RN components, even built-ins, are wildly inconsistent, so be prepared for
                  ;; some work. Indeed, Flatlist falls clearly into this category.
                  {}                                        ;; many widgets have no reactive state
                  {:style                                   ;; no need for #js. MX hosts apply clj->js to options passed to their RN incarnations.
                   {:flex            1
                    :marginTop       96
                    :padding         24
                    :alignItems      "center"
                    :backgroundColor "linen"}}

                  (mk rn/Image {}
                    {:style  {:width 160 :height 160}
                     :source cljs-splash-above})

                  (allow-todos-switch)
                  ;; a big view can get noisy. Here break out some structure into a function.
                  ;; More importantly, reuse becomes quite possible.

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

