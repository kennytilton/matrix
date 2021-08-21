(ns myapp.build
  (:require [cljs.pprint :as pp]
            [cljs-time.coerce :as tmc]
            [clojure.string :as str]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]

            [tiltontec.util.core :refer [pln xor now]]
            [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [unbound ia-type *within-integrity* *defer-changes*]]
            [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]


            [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]

    ;[goog.events.Event :as event]
    ;[goog.dom.forms :as form]

            ["react-native" :as rn]
            [helix.core :as hx :refer [defnc fnc $ <>]]

    ;;[helix.dom :as d]
            [helix.hooks :as hooks]

            [myapp.mxreact :as mxr :refer [mkrx mxu!]]
            [myapp.mxrgen :refer-macros [mkbox mkx mxfnc props]]
            [myapp.demo.flatlist :as flat]
            [myapp.demo.simple :as simple]
            [myapp.demo.http :as htpx]
            ))

(declare mx-find-matrix)

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (htpx/demo)))

;; ---- GOALS --------------
#_(mx/button
    :name :counter42
    :title (cF (str "Bumper " (mget me :counter)))
    :counter (cI 3)
    :jsx (with-props [:title :title]                        ;; {... :title (mget me :title ... }
           {:onPress #(mswap! me :counter inc)})

    #_(mx/view {:style (js-obj "backgroundColor" "yellow")}
        (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
          (mktext (str "Text " n))))
    )

#_(defn mx-find-matrix [mx]
    (mxu-find-type mx ::hxApp))

; #_ (mkx rn/Button
;                              :name :counter42
;                              :title (cF (str "Counter = " (mget me :counter)))
;                              :counter (cI 3)
;                              :disabled (cF (not (mget (mxu! me :counting?) :value)))
;                              :jsx {:& (with-props [:title :disabled]
;                                         :color "cyan"
;                                         :onPress #(when (mget (mxu! me :counting?) :value)
;                                                     (mswap! me :counter inc)))})

; #(do (prn :bam-change
;                                                           (goog.object/getAllPropertyNames %))
;                                                         (prn :bam-change
;                                                           (goog.object/get % "nativeEvent"))
;                                                         (prn :bam-change
;                                                           (js->clj (goog.object/get % "nativeEvent")
;                                                             :keywordize-keys true)))