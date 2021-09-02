(ns mxrn.demo.navi
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    ["@react-navigation/native" :refer [NavigationContainer]]
    ["@react-navigation/bottom-tabs" :as rnav-tabs]
    [applied-science.js-interop :as j]
    [mxrn.mxreact :as mxr :refer [mxu!]]
    [mxrn.mxrgen :as mxn :refer-macros [mxfnc props]]))

(def <> react/createElement)

(defonce *nav-state (atom nil))

(defonce tabs-nav (rnav-tabs/createBottomTabNavigator))

;(defonce tabs-nav (rnav-tabs/createBottomTabNavigator))

(defn bottom-tab-navi [k]
  (get tabs-nav k))

(defn TabA [_] {:helix/features {:fast-refresh true}}
  (<> rn/View (j/lit {:style {:flex 1, :alignItems "center", :justifyContent "center"}})
    (<> rn/Text (j/lit {:style {:fontSize 36}})
      "Tab A")))

(defn TabB [_] {:helix/features {:fast-refresh true}}
  (<> rn/View (j/lit {:style {:flex 1, :alignItems "center", :justifyContent "center"}})
    (<> rn/Text (j/lit {:style {:fontSize 36}})
      "Tab B")))

(defn demo []
  (prn :navis!!!! (select-keys [:NavigationContainer :Navigator :Screen] tabs-nav))
  (md/make ::hxApp
    :rx-dom (cFonce
              (let [{:keys [Navigator Screen]} (j/lookup tabs-nav)]
                (with-par me
                  (mxn/NavigationContainer
                    {:name :root}
                    #js {:initialState  @*nav-state
                         :onStateChange (fn [x] (reset! *nav-state x))}
                    (mxn/Navigator {} {}
                      (mxn/Screen {}
                        {:name      "Tab-A"
                         :component TabA})
                      (mxn/Screen {}
                        {:name      "Tab-B"
                         :component TabB}))))))))