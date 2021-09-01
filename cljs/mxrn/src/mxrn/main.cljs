(ns mxrn.main
  (:require [react]
            [react-native :as rn]
            [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [mxrn.mxreact :as mxr :refer [mxu!]]
            [mxrn.demo.simple :as simple]
            [mxrn.demo.http :as htpx]
            [mxrn.demo.flatlist :as flat]))

(def <> react/createElement)

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (flat/demo)))

;; the function figwheel-rn-root MUST be provided. It will be called by
;; by the react-native-figwheel-bridge to render your application.

(defn figwheel-rn-root []
  (prn :building-new-matrix!!!!)
  (let [app-matrix (matrix-build!)                          ;; memoize?
        root (mget app-matrix :rx-dom)
        _ (prn :root!!!! root)
        root-element #_(renderfn {}) (mget root :rendering)
        ]
    (prn :root-elt root-element)
    root-element))