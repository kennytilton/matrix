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
    ; [matrixrn.demo.tutorial.sampler :as demo]
    ;[matrixrn.demo.to-do-lite :as demo]
    ; [matrixrn.demo.navi :as demo]
    ; [matrixrn.demo.tutorial.main :as demo]
    ; [matrixrn.demo.tutorial.x100-hello-world.core :as demo]
    ; [matrixrn.demo.tutorial.x110-its-not-just-me.lesson :as demo]
    ; [matrixrn.demo.tutorial.x110-its-not-just-me.lesson :as demo]
    ; [matrixrn.demo.tutorial.x110-its-not-just-me.core :as demo]
    ; [matrixrn.demo.tutorial.x120-web-component.core :as demo]
    ;[matrixrn.demo.tutorial.x130-async-heaven.core :as demo]
    [matrixrn.demo.tutorial.x140-todo-lite.core :as demo]
    #_ [matrixrn.demo.tutorial.x110-its-not-just-me.separate-count-display :as demo]))

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

