(ns myapp.nav
  (:require ["@react-navigation/native" :refer [NavigationContainer]]
            ["react-native" :as rn]
            [myapp.subnav1 :as subnav1]
            [helix.core :refer [defnc $]]))

(defonce *nav-state (atom nil))

(defnc NavRoot [_] {:helix/features {:fast-refresh true}}
  ($ NavigationContainer {:initialState @*nav-state
                          :onStateChange (fn [x] (reset! *nav-state x))}
     ($ subnav1/Root)))
