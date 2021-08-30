(ns myapp.subnav1
  (:require ["@react-navigation/bottom-tabs" :as rnav-tabs]
            ["react-native" :as rn]
            [applied-science.js-interop :as j]
            [myapp.subnav2 :as subnav2]
            [helix.core :refer [defnc $]]))

(defonce tabs-nav (rnav-tabs/createBottomTabNavigator))

(defnc TabA [_] {:helix/features {:fast-refresh true}}
  ($ rn/View {:style (j/lit {:flex 1, :alignItems "center", :justifyContent "center"})}
     ($ rn/Text {:style (j/lit {:fontSize 36})}
        "Tab A")))

(defnc Root [_] {:helix/features {:fast-refresh true}}
  (let [{:keys [Navigator Screen]} (j/lookup tabs-nav)]
    ($ Navigator {}
       ($ Screen {:name "Tab-A" :component TabA})
       ($ Screen {:name "Tab-B" :component subnav2/TabB}))))
