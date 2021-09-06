(ns mxrn.app
  (:require [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [expo.root :as expo-root]
            ["react" :as r]
            ["react-native" :as rn]
            [mxrn.mxreact :as mxr :refer [mxu!]]
            ;[mxrn.demo.simple :as demo]
            ;[mxrn.demo.navi :as demo]
            ;[mxrn.demo.flatlist :as demo]
            ;[mxrn.demo.http :as demo]
            ; Pick one ^^^ for next line
            [mxrn.demo.navi :as demo]
            ))

;; todo get j/lit going
(def shadow-splash (js/require "../assets/shadow-cljs.png"))
(def cljs-splash (js/require "../assets/cljs.png"))

(def <> r/createElement)

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix
    (demo/demo)))

(defn start
  {:dev/after-load true}
  []
  (let [app-matrix (matrix-build!)
        root-mx (mget app-matrix :rx-dom)
        _ (prn :root-mx!!!! root-mx)
        root-element (mget root-mx :react-element)]
    (prn :root-elt root-element)
    (expo-root/render-root
      (fn [] (mget root-mx :react-element)))))

(defn init []
  (start))

;; --- archive ------------------------------------------


;(defn root []
;  (prn :splash cljs-splash)
;  (<> rn/View #js {:style #js {:flex            1
;                               :paddingVertical 350
;                               :justifyContent  "spaceBetween"
;                               :alignItems      "center"
;                               :backgroundColor "cyan"}}
;    (<> rn/Text #js {:style #js {:fontWeight "bold"}}
;      "Hi, Mommo!")
;    (<> rn/Image #{:style #js {:width  160
;                               :height 160}
;                   :source cljs-splash})
;    (<> rn/Text #js {:style #js {:fontWeight "bold"}}
;      "BAMzoo!")))

