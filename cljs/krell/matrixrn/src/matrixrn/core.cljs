(ns matrixrn.core
  (:require [react]
            [react-native :as rn]))

(def <> react/createElement)

(defn hello []
  (<> rn/View
      #js {:style #js {:backgroundColor "#FFFFFF"
                       :flex 1
                       :justifyContent "center"}}
      (<> rn/Text
          #js {:style #js {:color "black"
                           :textAlign "center"}}
          (str "Hello, world."))))

(defn ^:export -main [& args]
  (hello))