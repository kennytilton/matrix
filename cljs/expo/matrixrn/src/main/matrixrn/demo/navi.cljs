(ns matrixrn.demo.navi
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core :refer [cFkids with-par matrix mx-par mget mset! mswap!] :as md]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    ["@react-navigation/native" :refer [NavigationContainer]]
    ["@react-navigation/bottom-tabs" :as rn-bottom-tabs]
    ["@expo/vector-icons" :refer [FontAwesome]]
    [applied-science.js-interop :as j]
    [matrixrn.matrixrn :as mxn :refer-macros [<> mk mku with-props]]
    [matrixrn.demo.http :as http]))

(defonce *nav-state (atom nil))

; If the JS doc looks like this:
;
; import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
;
;const Tab = createBottomTabNavigator();
;
;function MyTabs() {
;  return (
;    <Tab.Navigator>
;      <Tab.Screen name="Home" component={HomeScreen} />
;      <Tab.Screen name="Settings" component={SettingsScreen} />
;    </Tab.Navigator>
;  );
;}
; ... we do this.

(defonce tabs-nav (rn-bottom-tabs/createBottomTabNavigator))

(defn TabA [_] {:helix/features {:fast-refresh true}}
  (<> rn/View (j/lit {:style {:flex 1, :alignItems "center", :justifyContent "center"}})
    (<> rn/Text (j/lit {:style {:fontSize 36}})
      "Arts Tab!")))

(defn TabB [_] {:helix/features {:fast-refresh true}}
  (<> rn/View (j/lit {:style {:flex 1, :alignItems "center", :justifyContent "center"}})
    (<> rn/Text (j/lit {:style {:fontSize 36}})
      "Baby Tab")))

(defn demo []
  (md/make ::rnApp
    :rx-dom (cFonce
              ;; I am not quite sure what to make of this j/lookup interop.
              (let [{:keys [Navigator Screen]} (j/lookup tabs-nav)]
                (with-par me
                  (mk NavigationContainer {}
                    {:initialState  @*nav-state
                     :onStateChange (fn [x] (reset! *nav-state x))}
                    (mk Navigator {} {}
                      (mku mxn/Screen {}
                        {:name    "Async Demo"
                         :options {:tabBarLabel "XHR"
                                   :tabBarIcon  (fn []
                                                  (<> FontAwesome (j/lit {:name "wifi"})))}}
                        (http/http-beef
                          ;; try commenting out this next map to see why we need http-beef to take a parameter
                          {:style {:flex            1
                                   :marginTop       0
                                   :padding         24
                                   :alignItems      "center"
                                   :backgroundColor "lime"}}))
                      (mku mxn/Screen {}
                        {:name      "A"
                         :options   {:tabBarLabel "Art"
                                     :tabBarIcon  (fn []
                                                    (<> FontAwesome (j/lit {:name "headphones"})))}
                         :component TabA})
                      #_(mku Screen {}
                          {:name      "B"
                           :options   {:tabBarLabel "Baby"
                                       :tabBarIcon  (fn []
                                                      (<> FontAwesome (j/lit {:name "baby"})))}
                           :component TabB}))))))))
