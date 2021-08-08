(ns myapp.build
  (:require [cljs.pprint :as pp]
            [cljs-time.coerce :as tmc]
            [clojure.string :as str]
    ;[bide.core :as r]
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
            [helix.core :as hx :refer [defnc $ <>]]

    ;;[helix.dom :as d]
            [helix.hooks :as hooks]

            [myapp.mxreact :as mxr :refer [mkrx]]
            [myapp.mxrgen :refer [mxfnc mkx mkbox]]
            ))

(declare mx-find-matrix)

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (md/make ::hxApp
      :rx-dom (cFonce (with-par me
                        (mkrx
                          {:name      :root
                           :rendering (cF (mxfnc
                                            (apply $ rn/View
                                              {:style #js {:flex 1,
                                                           :alignItems "center",
                                                           :justifyContent "center"
                                                           :backgroundColor "cyan"}}
                                              {}
                                              (doall (map #(mget % :rendering)
                                                       (mget me :kids))))))}
                          {}
                          (cFkids
                            (mkx rn/Button
                              :name :counter42
                              :title (cF (str "Bumper " (mget me :counter)))
                              :counter (cI 3)
                              :jsx {:style   #js {:fontSize 36}
                                    :title   (mget me :title)
                                    :onPress #(mswap! me :counter inc)})

                            (mkx rn/Button
                              :title (cF (str "Downer! " (mget (mxr/mxu! me :counter42) :counter)))
                              :jsx {:style   #js {:fontSize 36}
                                    :title   (mget me :title)
                                    :onPress #(mswap! (mxr/mx* me :counter42) :counter dec)})

                            (mkbox rn/View
                                :name :multi-parent
                              :style (js-obj :flex 1, :alignItems "left", :justifyContent "top")
                                :of-kids (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
                                           (mkrx
                                             {:rendering (cF ($ rn/Text {} {}
                                                               (str "Textoxo " n)))})))

                            #_(mkrx
                                {:name      :multi-parent
                                 ;; :style (js-obj :flex 1, :alignItems "center", :justifyContent "center")
                                 :rendering (cF (apply $ rn/View {} {}
                                                  (doall (map (fn [kid] (mget kid :rendering))
                                                           (mget me :kids)))))}
                                {}
                                (cFkids
                                  (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
                                    (mkrx
                                      {:rendering (cF ($ rn/Text {} {}
                                                        (str "Textoo " n)))}))))
                            )))))))



#_(defn mx-find-matrix [mx]
    (mxu-find-type mx ::hxApp))
