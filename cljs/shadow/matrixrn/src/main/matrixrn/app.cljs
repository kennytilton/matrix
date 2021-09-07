(ns matrixrn.app
  (:require [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [expo.root :as expo-root]
            ["react" :as r]
            ["react-native" :as rn]
            [matrixrn.matrixrn :as mxr :refer [mxu!]]
            ;[matrixrn.demo.simple :as demo]
            ;[matrixrn.demo.navi :as demo]
            ;[matrixrn.demo.flatlist :as demo]
            ;[matrixrn.demo.http :as demo]
            ; Pick one ^^^ for next line
            [matrixrn.demo.http :as demo]))


(def shadow-splash (js/require "../assets/shadow-cljs.png"))
(def cljs-splash (js/require "../assets/cljs.png"))

(def <> r/createElement)

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! matrix (demo/demo)))

(defn ^:dev/after-load
  start []
  (let [app-matrix (matrix-build!)
        root-mx (mget app-matrix :rx-dom)
        _ (prn :root-mmmmmmx!!!! root-mx)
        root-element (mget root-mx :react-element)]
    (prn :root-elt root-element)
    (expo-root/render-root
      (fn [] (mget root-mx :react-element)))))

(defn init []
  (start))

