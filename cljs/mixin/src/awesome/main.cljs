;(ns awesome.main
;  (:require [react]
;            [react-native :as rn]))
;
;(def <> react/createElement)
;
;(defn renderfn [props]
;  (<> rn/View
;      #js {:style #js {:backgroundColor "#FFFFFF"
;                       :flex 1
;                       :justifyContent "center"}}
;      (<> rn/Text
;          #js {:style #js {:color "black"
;                           :textAlign "center"}}
;          (str "Hello"))))
;
;;; the function figwheel-rn-root MUST be provided. It will be called by
;;; by the react-native-figwheel-bridge to render your application.
;(defn figwheel-rn-root []
;  (renderfn {}))

(ns awesome.main
  (:require [react]
            [react-native :as rn]
            [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [awesome.mxreact :as mxr :refer [mxu!]]
            [awesome.demo.simple :as simple]
            [awesome.demo.navi :as navi]
            [awesome.demo.http :as htpx]
            [awesome.demo.flatlist :as flat]))

(def <> react/createElement)

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (navi/demo)))

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