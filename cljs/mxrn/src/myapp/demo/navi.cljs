(ns myapp.demo.navi
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
    ["@react-navigation/bottom-tabs" :as rnav-tabs]
    [applied-science.js-interop :as j]

    [helix.core :as hx :refer [defnc fnc $ <>]]
    [myapp.mxreact :as mxr :refer [mxu!]]
    [myapp.mxrgen :as mxn :refer-macros [mxfnc props]]))

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

(defonce *nav-state (atom nil))

;(defnc NavRoot [_] {:helix/features {:fast-refresh true}}
;  ($ NavigationContainer {:initialState @*nav-state
;                          :onStateChange (fn [x] (reset! *nav-state x))}
;    ($ subnav1/Root)))

;(defnc Root [_] {:helix/features {:fast-refresh true}}
;  (let [{:keys [Navigator Screen]} (j/lookup tabs-nav)]
;    ($ Navigator {}
;       ($ Screen {:name "Tab-A" :component TabA})
;       ($ Screen {:name "Tab-B" :component subnav2/TabB}))))

; (defnc TabA [_] {:helix/features {:fast-refresh true}}
;  ($ rn/View {:style (j/lit {:flex 1, :alignItems "center", :justifyContent "center"})}
;     ($ rn/Text {:style (j/lit {:fontSize 36})}
;        "Tab A")))

(defnc TabA [_] {:helix/features {:fast-refresh true}}
  ($ rn/View {:style (j/lit {:flex 1, :alignItems "center", :justifyContent "center"})}
    ($ rn/Text {:style (j/lit {:fontSize 36})}
      "Tab A")))

(defnc TabB [_] {:helix/features {:fast-refresh true}}
  ($ rn/View {:style (j/lit {:flex 1, :alignItems "center", :justifyContent "center"})}
    ($ rn/Text {:style (j/lit {:fontSize 36})}
      "Tab B")))

(defonce tabs-nav (rnav-tabs/createBottomTabNavigator))

(defn demo []
  (let [{:keys [Navigator Screen]} (j/lookup tabs-nav)]
    (prn :lookedup-nav Navigator)
    (prn :lookedup-screen Screen)
    (md/make ::hxApp
      :rx-dom (cFonce
                (with-par me
                  (mxn/NavigationContainer
                    ; todo move nav-state into cI
                    {:name :root}
                    {:initialState  @*nav-state
                     :onStateChange (fn [x] (reset! *nav-state x))}
                    (mxn/Navigator {:name :navygator} {}
                      (mxn/Screen
                        {:name :screen-booya}
                        {:name      "Tab-Booya"
                         :component TabA}
                        #_{:& (props :name :component)})
                      (mxn/Screen
                        {:name :screen-BBBBB}
                        {:name      "Tab-BBBBBBB"
                         :component TabB}
                        #_{:& (props :name :component)}))))))))

