(ns matrixrn.demo.tutorial.main
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
    [matrixrn.matrixrn :as mxn :refer-macros [mk mku with-props]]
    [matrixrn.demo.tutorial.l00-hello-world :as hello]
    [matrixrn.demo.tutorial.l01-not-just-me :as others]
    [matrixrn.demo.tutorial.l02-web-component :as webco]
    [matrixrn.demo.tutorial.solution.l02-web-component :as webco-sol]))

(def <> react/createElement)

(defonce tabs-nav (rn-bottom-tabs/createBottomTabNavigator))

(defn demo []
  (md/make ::rnApp
    :rx-dom (cFonce
              (let [{:keys [Navigator Screen]} (j/lookup tabs-nav)]
                (with-par me
                  ;; only at the top of the MX do we need to bind the crucial *mx-par* parent using `with-par`.
                  ;; Macrology handles that elsewhere. The Matrix is a simple tree in which avery node
                  ;; except the top node has a parent, and every node has zero or more children ("kids").
                  (mk NavigationContainer {} {}
                    (mk Navigator {} {}
                      ;; mkuscreen?! Hopefully this can be eliminated as a special case, but Screens themselves
                      ;; are a special case in RN. :shrug:
                      (webco-sol/solution)
                      (webco/lesson)
                      (hello/lesson)
                      (others/lesson)
                      #_ (webco/lesson))))))))
