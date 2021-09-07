(ns mxrn.app
  (:require
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]
    [expo.root :as expo-root]
    ["react" :as r]
    ["react-native" :as rn]
    ; todo rename to mxrn or matrixrn
    [mxrn.mxrgen :as mxn]
    ; simple navi flatlist http
    ; Pick one ^^^ for next line
    [mxrn.demo.simple :as demo]
    [mxrn.demo.navi]
    [mxrn.demo.flatlist]
    [mxrn.demo.http]))

;; todo see if pez flashes twice
;; todo images!
;; todo see about not flashing text input cursor when not focused
;; todo try deploying
;; todo try android

(def shadow-splash (js/require "../assets/shadow-cljs.png"))
(def cljs-splash (js/require "../assets/cljs.png"))

(defn matrix-build! []
  (reset! mxn/ssdict {})
  (reset! mxn/refdict {})
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


