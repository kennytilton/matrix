(ns myapp.demo.simple
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]

    ["react-native" :as rn]
    [helix.core :as hx :refer [defnc fnc $ <>]]
    [myapp.mxreact :as mxr :refer [ mxu!]]
    [myapp.mxrgen :as mxn :refer-macros [my-counter mxfnc props]]))

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mxn/View
                  {:name :root}
                  {:style #js {:flex            1
                               :marginTop       96
                               :padding         24
                               :alignItems      "flex-start"
                               :backgroundColor "cyan"}}
                  (mxn/Button
                    {:counter (cI 3)
                     :bozo    (cF (case (mod (my-counter) 3)
                                    0 "red"
                                    1 "yellow"
                                    2 "aquamarine"))
                     :style   (cF (clj->js {:color (mget me :bozo)}))
                     :title   (cF (str "Bozo = " (my-counter)))}
                    {:&       (props :style :title)
                     :onPress #(mswap! me :counter inc)})

                  (mxn/Switch
                    {:name       :counting?
                     :value      (cI true)
                     :thumbColor (cF (if (mget me :value)
                                       "#f5dd4b" "#f4f3f4"))}
                    {:&                   (props :value :thumbColor)
                     :onValueChange       #(mswap! me :value not)
                     :ios_backgroundColor "#3e3e3e"
                     :style               #js {:margin 9}
                     :trackColor          #js {:false "#767577"
                                               :true  "#81b0ff"}
                     #_(js-obj "false" "#767577" "true" "#81b0ff")})

                  (mxn/Button
                    {:name     :my-counter
                     :title    (cF (str "Counter = " (mget me :counter)))
                     :counter  (cI 3)
                     :disabled (cF (not (mget (mxu! me :counting?) :value)))}
                    {:&       (props :title :disabled)
                     :color   "black"
                     :onPress #(mswap! me :counter inc)})

                  (mxn/Button
                    {:name  :dumper
                     :title (cF (str "Downer " (mget (mxu! me :my-counter) :counter)))}
                    {:&       (props :title)
                     :color   "red"
                     :onPress #(mswap! (mxu! me :my-counter) :counter dec)})

                  (mxn/SafeAreaView
                    {:name :item-list}
                    {:style #js {:backgroundColor "yellow"}}
                    (for [n (range (mget (mxr/mxu! me :my-counter) :counter))]
                      (mxn/Text
                        {:name :an-item}
                        {:key   n
                         :style #js {:padding 4 :margin 5}}
                        (mxn/strng (str "Text " n))))))))))


