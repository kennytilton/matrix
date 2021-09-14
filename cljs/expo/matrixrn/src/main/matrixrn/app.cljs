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

;;; shadow-cljs.edn:
; {:source-paths ["src/main"
;                "src/test"]
;
; :dependencies [[tiltontec/matrix "4.1.3"]
;                [applied-science/js-interop "0.3.0"]
;                [cljs-http/cljs-http "0.1.46"]]
;
; :builds       {:app {:target           :react-native
;                      :init-fn          matrixrn.app/init
;                      :output-dir       "app"
;                      :compiler-options {:infer-externs :auto}
;                      :devtools         {:autoload true
;                                         :preloads [shadow.expo.keep-awake]}}}}

;;; expo install react-native-elements
;;; expo install @react-navigation/bottom-tabs
;;; expo install

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

