(ns matrixrn.demo.tutorial.x140-todo-lite.lesson
  (:require
    [clojure.string :as str]
    [cljs.reader :as rdr]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.cell.integrity :refer-macros [with-cc]]
    [tiltontec.model.core :refer [with-par mx-par mget mset! mswap!] :as md]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    ; import CheckBox from '@react-native-community/checkbox';
    ; iOS native-ish no good with Expo ["@react-native-community/checkbox" :default CheckBox]
    ; import BouncyCheckbox from "react-native-bouncy-checkbox";
    ["react-native-bouncy-checkbox" :default BouncyCheckBox]
    ["@expo/vector-icons" :refer [FontAwesome]]
    ["@react-native-async-storage/async-storage" :default AsyncStorage]
    ;; import Checkbox from 'expo-checkbox';
    ;; not for iOS! ["expo-checkbox" :default CheckBox]
    [matrixrn.matrixrn :as mxn :refer [fmu <> mk mku with-props]]))

#_(-> (.setItem AsyncStorage "testing-a-key" "testing-a-stored-value")
    (.then
      (fn [] (-> (.getItem AsyncStorage "testing-a-key")
               (.then #(js/alert %))))))

(def cljs-splash-above (js/require "../assets/cljs.png"))

(defn build-keyed-item [item-title]
  {:key        (str (random-uuid))
   :title      item-title
   :completed? false})

(defn the-flatlist-beef []
  ;; yes ^^^, any bit of structure in a larger view can simply be pulled out into a function with
  ;; no parameters. All information flows from a "parent" captured by mxrn/mk macrology.

  (mk rn/FlatList
    {:data (cF (clj->js (mget (mx-par me) :todo-items)))}
    (with-props [:data]
      ;; with-props ^^^ just lets us not type linkes like the commented line you see below.
      ;; But the analog is good: it is how we pass properties from an MX instance to its RN incarnation.
      ;; Re "incarnation", yeah, MatrixRN works by creating pure MX instances able to define matching RN elements
      {:keyExtractor (fn [i] (.-key i))
       :renderItem   (fn [i]
                       ;; Here we cross over into pure RN, but in truth we could give the mx-flatlist
                       ;; todos as children and extract their rendering in 'renderItem'. Left as an exercise.
                       (prn :renderitem-sees i)
                       (<> rn/View
                         #js {:style                        ;; I am torn between clj->js and #js
                              #js {:backgroundColor  "#ffc2ff"
                                   :flex             1
                                   :flexDirection    "row"
                                   :alignItems       "center"
                                   :padding          9
                                   :marginVertical   4
                                   :marginHorizontal 16}}

                         (<> BouncyCheckBox #js {:fillColor   "cyan"
                                                 :unfillColor "#eee"
                                                 :iconStyle   #js {:borderColor "#f8f"}
                                                 :isChecked   false
                                                 :onPress     (fn [chkd?]
                                                                (prn :BAMchkd!!! chkd? i)
                                                                (mswap! (mx-par me) :todo-items
                                                                  assoc-in [(.-index i) :completed?] chkd?))})
                         (<> rne/Icon
                           (clj->js {:name    "trash"
                                     :type    "font-awesome"
                                     :color   "#f50"
                                     :style   {:flex 01 :marginRight 18}
                                     :onPress (fn [] (let [next (remove #(= (:key %) (.. i -item -key))
                                                                  (mget (fmu :todos-container) :todo-items))]
                                                       (mset! (fmu :todos-container) :todo-items next)))}))
                         (<> rn/Text
                           #js {:style #js {:fontSize           18
                                            :textDecorationLine "line-through"}}
                           (.-title (.-item i)))))})))

(defn to-do-entry []
  (mk rn/TextInput
    {:name       :new-undo
     :to-do      (cI "")
     :need-input (cF (if (seq (mget (fmu :todos-container) :todo-items))
                       "Anything else to do?" "What is there to do?"))}
    (with-props [[:value :to-do] :editable [:placeholder :need-input]]
      {:autoFocus         true
       :autoCapitalize    "sentences"
       :selectTextOnFocus true
       :onChangeText      #(mset! me :to-do %)
       :onSubmitEditing   #(let [text (.-text (goog.object/get % "nativeEvent"))]
                             (when-not (str/blank? text)
                               (mswap! (fmu :todos-container) :todo-items
                                 conj (build-keyed-item text))
                               ;; now clear input...
                               (mset! me :to-do "")))
       :style             {:height          40
                           :margin          12
                           :padding         10
                           :backgroundColor "linen"
                           :borderWidth     1}})))

(defn lesson []
  (mku mxn/Screen {}
    {:name    "TodoMVC Lite"
     :options {:tabBarLabel "Todo"
               :tabBarIcon  (fn []
                              (<> FontAwesome (clj->js {:name "tasks" :size 28})))}}

    (mk rn/View {}                                          ;; many widgets have no reactive state
      {:style                                               ;; no need for #js. MX hosts apply clj->js to options passed to their RN incarnations.
       {:flex            1
        :padding         24
        :alignItems      "center"
        :backgroundColor "linen"}}

      (mk rn/Text {}
        {:style {:fontSize     72
                 :fontFamily   "HelveticaNeue-Thin"
                 :textAlign    "center"
                 :color        "rgba(175, 47, 47, 0.15)"
                 :marginBottom 20}}
        (mxn/strng "todos"))

      (to-do-entry)

      (mk rn/SafeAreaView
        {:name        :todos-container
         :todo-loader (cF+ [:obs (fn [_ me promise _ _]
                                   (.then promise
                                     #(with-cc
                                        (mset! me :todo-items (rdr/read-string %)))))]
                        (.getItem AsyncStorage "mxrn-todomc-lite"))
         :todo-items  (cI nil
                        :obs (fn [_ _ newv _ _]
                               (.setItem AsyncStorage "mxrn-todomc-lite" (pr-str newv))))}
        {:style {:flex      1
                 :marginTop 0}}
        (the-flatlist-beef)))))

