(ns app.core
  (:require
    [tiltontec.model.core :as md]
    [mxreact.mxreact :as mxr]
    ["react-dom" :as rdom]
    [demo.demo :as dmo]
    [tutorial.x100-hello-world.lesson :as app]
    ))

(defn App
  []
  ;; (d/p "Hi fn mom 10")
  ;; (d/$d "p" (str "Hi mom " (rand-int 99999)))
  #_ (.createElement (mxr/get-react)
       "p"
       (clj->js {})
       (str "Hi mom " (rand-int 99999)))
  ($ :div {} (str "Bingo " (rand-int 99999))))

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
