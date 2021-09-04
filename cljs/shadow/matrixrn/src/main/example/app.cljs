(ns example.app
  (:require [example.events]
            [example.subs]
            [example.widgets :refer [button]]
            [expo.root :as expo-root]
    ;;[re-frame.core :as rf]
            ["react" :as rrr]
            ["react-native" :as rn]
    ;;[reagent.core :as r]
            ))

;; todo get j/lit going
(def shadow-splash (js/require "../assets/shadow-cljs.png"))
(def cljs-splash (js/require "../assets/cljs.png"))

(def <> rrr/createElement)

(defn root []
  (prn :spalsh!!!!!!!! cljs-splash)
  (<> rn/View #js {:style #js {:flex            1
                               :paddingVertical 350
                               :justifyContent  "spaceBetween"
                               :alignItems      "center"
                               :backgroundColor "cyan"}}
    (<> rn/Text #js {:style #js {:fontWeight "bold"}}
      "Hi, Mommo!")
    (<> rn/Image #{:style  #js {:width  160
                                :height 160}
                   :source cljs-splash})
    (<> rn/Text #js {:style #js {:fontWeight "bold"}}
      "Booya!")
    )
  #_(let [counter @(rf/subscribe [:get-counter])
          tap-enabled? @(rf/subscribe [:counter-tappable?])]
      [:> rn/View {:style {:flex             1
                           :padding-vertical 50
                           :justify-content  :space-between
                           :align-items      :center
                           :background-color :white}}
       [:> rn/View {:style {:align-items :center}}
        [:> rn/Text {:style {:font-weight   :bold
                             :font-size     72
                             :color         :blue
                             :margin-bottom 20}} counter]
        [button {:on-press  #(rf/dispatch [:inc-counter])
                 :disabled? (not tap-enabled?)
                 :style     {:background-color :blue}}
         "Tap me, I might count"]]
       [:> rn/View
        [:> rn/View {:style {:flex-direction :row
                             :align-items    :center
                             :margin-bottom  20}}
         [:> rn/Image {:style  {:width  160
                                :height 160}
                       :source cljs-splash}]
         [:> rn/Image {:style  {:width  160
                                :height 160}
                       :source shadow-splash}]]
        [:> rn/Text {:style {:font-weight :normal
                             :font-size   15
                             :color       :blue}}
         "Using: shadow-cljs+expo+reagent+re-frame"]]]))

(defn start
  {:dev/after-load true}
  []
  (let [eroot root #_(r/as-element [root])]
    (prn :eroot!!! eroot)
    (expo-root/render-root eroot)))

(defn init []
  (start))