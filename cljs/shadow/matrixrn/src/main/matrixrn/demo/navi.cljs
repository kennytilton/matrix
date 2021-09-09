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
    [applied-science.js-interop :as j]
    [matrixrn.matrixrn :as mxn :refer-macros [mk mku with-props]]))

(def <> react/createElement)

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
      "Tab A")))

(defn TabB [_] {:helix/features {:fast-refresh true}}
  (<> rn/View (j/lit {:style {:flex 1, :alignItems "center", :justifyContent "center"}})
    (<> rn/Text (j/lit {:style {:fontSize 36}})
      "Tab B")))

(defn demo []
  (md/make ::rnApp
    :rx-dom (cFonce
              (let [{:keys [Navigator Screen]} (j/lookup tabs-nav)]
                (with-par me
                  (mk NavigationContainer {}
                    {:initialState  @*nav-state
                     :onStateChange (fn [x] (reset! *nav-state x))}
                    (mk Navigator {} {}
                      (mxn/mkuscreen Screen {}
                        {:name "Tab-AAA"}
                        (mk rn/Button
                          {:name    :bam-button
                           :counter (cI (rand-int 9999))
                           :title   (cF (str "Kaboxom = " (mget me :counter)))}
                          (with-props [:title]
                            {:style   {:padding 9 :color "orange"}
                             :onPress #(do (prn :bampress)
                                           (mswap! me :counter inc))})))
                      (mku Screen {}
                        {:name      "Tab-A"
                         :component TabA})
                      (mku Screen {}
                        {:name      "Tab-B"
                         :component TabB}))))))))