(ns matrixrn.core
  (:require [react]
            [react-native :as rn]
            [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [matrixrn.mxreact :as mxr :refer [mxu!]]
            [matrixrn.demo.simple :as simple]))

(def <> react/createElement)

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (simple/demo)))

;(defn hello []
;  (<> rn/View
;      #js {:style #js {:backgroundColor "#FFFFFF"
;                       :flex 1
;                       :justifyContent "center"}}
;      (<> rn/Text
;          #js {:style #js {:color "black"
;                           :textAlign "center"}}
;          (str "Hello, world."))))

;(defn figwheel-rn-root []
;  (prn :building-new-matrix!!!!)
;  (let [app-matrix (matrix-build!)                          ;; memoize?
;        root (mget app-matrix :rx-dom)
;        _ (prn :root!!!! root)
;        root-element #_(renderfn {}) (mget root :rendering)
;        ]
;    (prn :root-elt root-element)
;    root-element))

(defn ^:export -main [& args]
  ;; (hello)
  (let [app-matrix (matrix-build!)                          ;; memoize?
        root (mget app-matrix :rx-dom)
        _ (prn :root!!!! root)
        root-element #_(renderfn {}) (mget root :rendering)
        ]
    (prn :root-elt root-element)
    root-element))