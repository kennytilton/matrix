(ns awesome-project.core
  (:require [react]
            [react-native :as rn]))

; (defn hello []
;   [rn/view {:style {:flex 1 :align-items "center" :justify-content "center"}}
;    [rn/text {:style {:font-size 50}} "Hello Krell!"]])

(def <> react/createElement)

(defn hello []
  (<> rn/View
      #js {:style #js {:backgroundColor "#FFFFFF"
                       :flex 1
                       :justifyContent "center"}}
      (<> rn/Text
          #js {:style #js {:color "black"
                           :textAlign "center"}}
          (str "Hello, RAW world."))))

(defn ^:export -main [& args]
  (hello))


;; the function figwheel-rn-root MUST be provided. It will be called by 
;; by the react-native-figwheel-bridge to render your application. 
; (defn figwheel-rn-root []
;   (renderfn {}))

; (ns awesome-project.core
;   (:require [reagent.core :as r]
;             [reagent.react-native :as rn]))

; (defn hello []
;   [rn/view {:style {:flex 1 :align-items "center" :justify-content "center"}}
;    [rn/text {:style {:font-size 50}} "Hello Krell!"]])

; (defn ^:export -main [& args]
;   (r/as-element [hello]))

; (ns awesome.main
;   (:require [react]
;             [react-native :as rn]))