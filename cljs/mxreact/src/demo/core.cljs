(ns demo.core
  (:require
   [tiltontec.model.core :as md]
   [mxreact.mxreact :as mxr :refer [$]]
   ["react-dom" :as rdom]
   ;[demo.demo :as dmo]
   [demo.todo-mvc :as dmo]
   ))

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! md/matrix (dmo/demo)))

(defn ^:dev/after-load ;; todo try losing this once in react land
  start []
  #_ (rdom/render ($ App) (js/document.getElementById "app"))

  (let [app-matrix (matrix-build!)
        _ (prn :appmx!!!!!! app-matrix)
        root-mx (md/mget app-matrix :rx-dom)
        _ (prn :rootmx root-mx)
        root-element (md/mget root-mx :react-element)
        _ (prn :root-elt root-element)]
    (rdom/render root-element (js/document.getElementById "app"))))
