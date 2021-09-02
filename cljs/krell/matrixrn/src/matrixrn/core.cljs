(ns matrixrn.core
  (:require [react]
            [react-native :as rn]
            [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [matrixrn.mxreact :as mxr :refer [mxu!]]
            [matrixrn.demo.simple :as simple]
            [matrixrn.demo.http :as http]
            [matrixrn.demo.flatlist :as flat]))

(def <> react/createElement)

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (http/demo)))

(defn ^:export -main [& args]
  ;; (hello)
  (let [app-matrix (matrix-build!)                          ;; memoize?
        root (mget app-matrix :rx-dom)
        _ (prn :root!!!! root)
        root-element #_(renderfn {}) (mget root :rendering)
        ]
    (prn :root-elt root-element)
    root-element))