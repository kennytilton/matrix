(ns matrixrn.demo.tutorial.x100-hello-world.times-six
  (:require
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mget mswap!]]
    [react]
    [react-native :as rn]
    [matrixrn.matrixrn :as mxn :refer [<> myval mku mk with-props]]
    ["@expo/vector-icons" :refer [FontAwesome]]))

;; TryThis: counting to 42 (to test the above) takes a lot of clicking!
;; Add a new computed ":times-six" property that is six times the :counter property,
;; and have :disabled? watch for /that/ property to get to 42.

;; Introducing:
;;   macro mxn/myval:
;;     usage example (myval :mt-prop)instead of (mget me :my-prop)
;;
;;   Macro mxn/with-props:
;;     usage eg: (with-props [:title] _otherprops_)
;;     expands to: (merge {:title (mget me :title)} _otherprops_
;;     usage eg: (with-props [[:disabled :disabled?]] _otherprops_)
;;     expands to: (merge {:disabled (mget me :disabled?)} _otherprops_


(defn solution []
  (mku mxn/Screen {}
    {:name    "Hello, world. One solution."
     :options {:tabBarLabel "Times Six"
               :tabBarIcon  (fn []
                              (<> FontAwesome (clj->js {:name "globe" :size 28})))}}
    (mk rn/Button
      {
       :counter   (cI (+ 2 2))
       :times-six (cF (* 6 (myval :counter)))
       :title     (cF (if (myval :disabled?)
                        "The answer to the Universe."
                        (str "Click me to count higher: " (myval :counter)
                          " even faster: " (myval :times-six))))
       :disabled? (cF (= 42 (myval :times-six)))
       }
      (with-props [:title [:disabled :disabled?]]
        {:style   {:color "red"}
         :onPress #(mswap! me :counter inc)}))))
