(ns mxrn.demo.navi
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             make fget mxi-find mxu-find-type
             kid-values-kids] :as md]
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    [mxrn.mxreact :as mxr :refer [mxu!]]
    [mxrn.matrixrn :as mxn :refer-macros [mxfnc props]]))



(def <> react/createElement)

(defonce *nav-state (atom nil))

;(defn TabA [_] {:helix/features {:fast-refresh true}}
;  (<> rn/View (j/lit {:style {:flex 1, :alignItems "center", :justifyContent "center"}})
;    (<> rn/Text (j/lit {:style {:fontSize 36}})
;      "Tab A")))

;(defn TabB [_] {:helix/features {:fast-refresh true}}
;  (<> rn/View (j/lit {:style {:flex 1, :alignItems "center", :justifyContent "center"}})
;    (<> rn/Text (j/lit {:style {:fontSize 36}})
;      "Tab B")))
; (defn demo []
;  (md/make ::hxApp
;    :rx-dom (cFonce
;              (with-par me
;                (mxn/View
(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mxn/View
                  {:name :root}
                  #js {:style #js {:backgroundColor "#444"
                                   :flex            1
                                   :justifyContent  "center"}}
                  (mxn/Button
                    {:name  :dumper
                     :title "Downer"}
                    #js {:title   "hunh"                    ;; (mget me :title)
                         :color   "red"
                         :onPress #(prn :dump!!!)}))))))






