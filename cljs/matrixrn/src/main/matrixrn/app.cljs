(ns matrixrn.app
  (:require
    [tiltontec.model.core :as md]
    [expo.root :as expo-root]
    ["react" :as r]
    ["react-native" :as rn]
    [matrixrn.matrixrn :as mxn]
    ;[matrixrn.demo.simple :as demo]
    ;[matrixrn.demo.navi :as demo]
    ;[matrixrn.demo.flatlist :as demo]
    ;[matrixrn.demo.http :as demo]
    ;[matrixrn.demo.tutorial.main]
    ;[matrixrn.demo.tutorial.sampler]
    ; Pick one ^^^ for next line...vvv
    [matrixrn.demo.tutorial.sampler :as demo]))

(defn matrix-build! []
  (reset! mxn/ssdict {})
  (reset! md/matrix (demo/demo)))

(defn
  ;; not sure what effect this next bit has:
  ;; ^:dev/after-load
  start []
  (let [app-matrix (matrix-build!)
        root-mx (md/mget app-matrix :rx-dom)
        root-element (md/mget root-mx :react-element)]
    (expo-root/render-root
      (fn [] root-element))))

(defn init []
  (start))

