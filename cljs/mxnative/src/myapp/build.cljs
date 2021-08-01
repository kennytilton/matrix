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
            [myapp.mxr-gen :refer [mxfnc mkx]]
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
                                              {:style #js {:flex 1, :alignItems "center", :justifyContent "center"}}
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
                              :title (cF (str "Downer " (mget (mxr/mxu! me :counter42) :counter)))
                              :jsx {:style   #js {:fontSize 36}
                                    :title   (mget me :title)
                                    :onPress #(mswap! (mxr/mx* me :counter42) :counter inc)})


                            (mkrx
                              {:name      :multi-parent
                               :rendering (cF ($ (mxfnc
                                                   (apply $ rn/View {} {}
                                                     (doall (map #(mget % :rendering)
                                                              (mget me :kids)))))))}
                              {}
                              (cFkids
                                (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
                                  (mkrx ;;mxr/make-rnc-ex "p"
                                    {:rendering (cFonce
                                                  ($ (mxfnc
                                                       ($ rn/Text {} {}
                                                         (str "Text " n)))))}
                                    {}))))
                            )))))))

(comment
  (mxr/make-rx
    :feed (cF (str "Fed Content " (mget (mxr/mxu! me :counter42) :counter)))
    :rendering (cFonce ($ (lambdac [{:keys [me]}]
                            (let [[_ set-state] (hooks/use-state 0)]
                              (mxr/set-state-record me set-state) ;; <-- used by Matrix on-change handler to trigger re-render
                              (d/h1 {} {}
                                (str "div6 " (mget me :feed))))) {:me me}))))
#_(defn mx-find-matrix [mx]
    (mxu-find-type mx ::hxApp))
