(ns matrixrn.demo.tutorial.l01-not-just-me
  (:require
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mget mswap!]]
    [react]
    [react-native :as rn]
    [applied-science.js-interop :as j]
    ["@react-navigation/bottom-tabs" :as rn-bottom-tabs]
    [matrixrn.matrixrn :as mxn :refer [mkuscreen fmu mk with-props]]))

(defonce tabs-nav (rn-bottom-tabs/createBottomTabNavigator))

(defn lesson []
  (let [{:keys [Screen]} (j/lookup tabs-nav)]
    (mkuscreen Screen {}
      {:name "Hello, others."}
      (mk rn/View {}
        {:style {:flex            1
                 :padding         48
                 :alignItems      "center"
                 :backgroundColor "#444"}}
        (mk rn/Button
          {:name      :count-up
           :counter   (cI (+ 2 2))
           :title     (cF (str "Click me to count higher: " (mget me :counter)))
           :disabled? (cF (= 13 (mget me :counter)))}
          (with-props [:title [:disabled :disabled?]]
            {:onPress #(mswap! me :counter inc)}))
        (mk rn/Button
          ;; `fmu` is short for find other mx searching up from me
          ;; this expands into `fget`, a family search utility we document below.
          {:title (cF (str "Count lower from: " (mget (fmu :count-up) :counter)))}
          (with-props [:title]
            {:onPress #(mswap! (fmu :count-up) :counter dec)}))))))

;; fget [name starting-node options]
;; (fget name starting-node
;;     :me? should the starting-node be checked as a match?
;;     :inside? do I search the tree below starting-node? Search would be depth-first, btw.
;;     :must? must a match be found? If so, an error is thrown on failure
;;     :up? should we search up from the starting-node?)