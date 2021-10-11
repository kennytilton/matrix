(ns app.core
  (:require
    [tiltontec.model.core :as md]
    [mxreact.mxreact :as mxr]
    ["react-dom" :as rdom]
    [demo.demo :as dmo]
    [tutorial.x100-hello-world.lesson :as app]
    ))

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! md/matrix (app/app)))

(defn ^:dev/after-load ;; todo try losing this once in react land
  start []

  (let [app-matrix (matrix-build!)
        _ (prn :appmx!!!!!! app-matrix)
        root-mx (md/mget app-matrix :rx-dom)
        _ (prn :rootmx root-mx)
        root-element (md/mget root-mx :react-element)
        _ (prn :root-elt root-element)]
    (rdom/render root-element (js/document.getElementById "app"))))
