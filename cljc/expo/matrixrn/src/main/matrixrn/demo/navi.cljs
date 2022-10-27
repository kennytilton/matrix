(ns matrixrn.demo.navi
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core :refer [cFkids with-par matrix mx-par mget mset! mswap!] :as md]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    ["@react-navigation/native" :refer [NavigationContainer]]
    ["@expo/vector-icons" :refer [FontAwesome]]
    [applied-science.js-interop :as j]
    [matrixrn.matrixrn :as mxn :refer [<> mk mku with-props]]
    [matrixrn.demo.http :as http]))

(defonce *nav-state (atom nil))

(defn TabA [_] {:helix/features {:fast-refresh true}}
  (<> rn/View (clj->js {:style {:flex 1, :alignItems "center", :justifyContent "center"}})
    (<> rn/Text (clj->js {:style {:fontSize 36}})
      "Arts Tab!")))

(defn demo []
  (md/make ::rnApp
    :rx-dom (cFonce
              (with-par me
                (mk NavigationContainer {}
                  {:initialState  @*nav-state
                   :onStateChange (fn [x] (reset! *nav-state x))}
                  (mk mxn/Navigator {} {}
                    (mku mxn/Screen {}
                      {:name    "Async Demo"
                       :options {:tabBarLabel "XHR"
                                 :tabBarIcon  (fn []
                                                (<> FontAwesome (clj->js {:name "wifi" :size 28})))}}
                      (http/http-beef
                        ;; try commenting out this next map to see why we need http-beef to take a parameter
                        {:style {:flex            1
                                 :marginTop       0
                                 :padding         24
                                 :alignItems      "center"
                                 :backgroundColor "lime"}}))
                    (mku mxn/Screen {}
                      {:name      "A Pair of Headphones"
                       :options   {:tabBarLabel "Art"
                                   :tabBarIcon  (fn []
                                                  (<> FontAwesome (clj->js {:name "headphones" :size 28})))}
                       :component TabA})))))))
