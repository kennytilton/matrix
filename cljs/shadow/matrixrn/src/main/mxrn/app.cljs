(ns mxrn.app
  (:require [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [expo.root :as expo-root]
            ["react" :as rrr]
            ["react-native" :as rn]
            [mxrn.mxreact :as mxr :refer [mxu!]]
            [mxrn.demo.simple :as simple]
            ))


  ;(:require [expo.root :as expo-root]
  ;          [react]
  ;          [react-native :as rn]
  ;          ;[tiltontec.model.core
  ;           :refer-macros [cFkids with-par]
  ;           :refer [matrix mx-par mget mset! mswap!
  ;                   fget mxi-find mxu-find-type
  ;                   kid-values-kids] :as md]
  ;          [mxrn.mxreact :as mxr :refer [mxu!]]
  ;          ;[mxrn.demo.navi :as navi]
  ;          [mxrn.demo.simple :as simple]
  ;          ;[mxrn.demo.http :as http]
  ;          ;[mxrn.demo.flatlist :as flat]
  ;          )



;; todo get j/lit going
(def shadow-splash (js/require "../assets/shadow-cljs.png"))
(def cljs-splash (js/require "../assets/cljs.png"))

(def <> rrr/createElement)

(defn root []
  (prn :splash cljs-splash)
  (<> rn/View #js {:style #js {:flex            1
                               :paddingVertical 350
                               :justifyContent  "spaceBetween"
                               :alignItems      "center"
                               :backgroundColor "cyan"}}
    (<> rn/Text #js {:style #js {:fontWeight "bold"}}
      "Hi, Mommo!")
    (<> rn/Image #{:style  #js {:width  160
                                :height 160}
                   :source cljs-splash})
    (<> rn/Text #js {:style #js {:fontWeight "bold"}}
      "BAMzoo!")))


(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (simple/demo)))


;(defn ^:export -main [& args]
;  ;; (hello)
;  (let [app-matrix (matrix-build!)                          ;; memoize?
;        root (mget app-matrix :rx-dom)
;        _ (prn :root!!!! root)
;        root-element #_(renderfn {}) (mget root :rendering)
;        ]
;    (prn :root-elt root-element)
;    root-element))

(defn start
  {:dev/after-load true}
  []
  (let [app-matrix (matrix-build!)                          ;; memoize?
        root-mx (mget app-matrix :rx-dom)
        _ (prn :root-mx!!!! root-mx)
        root-element (mget root-mx :rendering)
        ]
    (prn :root-elt root-element)
    (expo-root/render-root
      (fn [] (mget root-mx :rendering)))))

#_
(defn start
  {:dev/after-load true}
  []
  (prn :eroot!!! root)
  (expo-root/render-root root))

(defn init []
  (start))