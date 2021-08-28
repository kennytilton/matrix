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

            [myapp.mxreact :as mxr :refer [ mxu!]]
            [myapp.mxrgen :refer-macros [ mxfnc props]]
            [myapp.demo.flatlist :as flat]
            [myapp.demo.simple :as simple]
            [myapp.demo.http :as htpx]
            [myapp.demo.navi :as navi]))

(declare mx-find-matrix)

;; todo move into main; lose this file
(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (navi/demo)))


#_(defn mx-find-matrix [mx]
    (mxu-find-type mx ::hxApp))