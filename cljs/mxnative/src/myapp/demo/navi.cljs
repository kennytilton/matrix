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
    ["@react-navigation/native" :refer [NavigationContainer]]
    ["@react-navigation/bottom-tabs" :as rnav-tabs]
    [applied-science.js-interop :as j]
    [helix.core :as hx :refer [defnc fnc $ <>]]
    [myapp.mxreact :as mxr :refer [ mxu!]]
    [myapp.mxrgen :as mxn :refer-macros [ mxfnc props]]))

(defonce *nav-state (atom nil))

(defonce tabs-nav (rnav-tabs/createBottomTabNavigator))

(defn bottom-tab-navi [k]
  (get tabs-nav k))

(defnc TabA [_] {:helix/features {:fast-refresh true}}
  ($ rn/View {:style (j/lit {:flex 1, :alignItems "center", :justifyContent "center"})}
    ($ rn/Text {:style (j/lit {:fontSize 36})}
      "Tab A")))
;
 (defnc TabB [_] {:helix/features {:fast-refresh true}}
  ($ rn/View {:style (j/lit {:flex 1, :alignItems "center", :justifyContent "center"})}
     ($ rn/Text {:style (j/lit {:fontSize 36})}
        "Tab B")))
;
;(defnc Root [_] {:helix/features {:fast-refresh true}}
;  (let [{:keys [Navigator Screen]} (j/lookup tabs-nav)]
;    ($ Navigator {}
;      ($ Screen {:name "Tab-A" :component TabA})
;      ($ Screen {:name "Tab-B" :component subnav2/TabB}))))

(defn demo []
  (prn :navis!!!!!! (select-keys [:NavigationContainer :Navigator :Screen] tabs-nav))

  (md/make ::hxApp
    :rx-dom (cFonce
              (let [{:keys [Navigator Screen]} (j/lookup tabs-nav)]
              (with-par me
                (mxn/NavigationContainer
                  {:name :root}
                  {:initialState @*nav-state
                   :onStateChange (fn [x] (reset! *nav-state x))}
                  (mxn/Navigator {}{}
                    (mxn/Screen {}
                      {:name "Tab-A"
                       :component TabA})
                    (mxn/Screen {}
                      {:name "Tab-B"
                       :component TabB}))))))))