(ns matrixrn.app
  (:require [tiltontec.model.core :as md]
            [expo.root :as expo-root]
            ["react" :as r]
            ["react-native" :as rn]
            [matrixrn.matrixrn :as mxn]
            ;[matrixrn.demo.simple :as demo]
            ;[matrixrn.demo.navi :as demo]
            ;[matrixrn.demo.flatlist :as demo]
            ;[matrixrn.demo.http :as demo]
            ; Pick one ^^^ for next line...vvv
            [matrixrn.demo.simple :as demo]))

;(def shadow-splash (js/require "../assets/shadow-cljs.png"))
;(def cljs-splash (js/require "../assets/cljs.png"))

(def <> r/createElement)

(defn matrix-build! []
  (reset! mxn/ssdict {})
  (reset! md/matrix (demo/demo)))

(defn ;; ^:dev/after-load
  start []
  ;(prn :splash!!!!!!!! shadow-splash)
  (let [app-matrix (matrix-build!)
        root-mx (md/mget app-matrix :rx-dom)
        _ (prn :root-mmmmmmx!!!! root-mx)
        root-element (md/mget root-mx :react-element)]
    (prn :root-elt root-element)
    (expo-root/render-root
      (fn [] (md/mget root-mx :react-element)))))

(defn init []
  (start))

