;(ns myapp.main
;  (:require ["react-native" :as rn]
;            [myapp.nav :as nav]
;            [helix.core :refer [defnc $]]
;            [helix.experimental.refresh :as refresh]))

(ns myapp.main
  (:require ["react-native" :as rn]
            [helix.core :refer [defnc fnc $]]
            [helix.experimental.refresh :as refresh]
            [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [myapp.build :as build]))

(defn ^:dev/after-load after-load []
  (refresh/refresh!))

;(defn init []
;  (rn/AppRegistry.registerComponent "MyApp" (fn [] nav/NavRoot))
;  (refresh/inject-hook!))

(defn init []
  (let [app-matrix (build/matrix-build!)
        root (mget app-matrix :rx-dom)
        rendering (fnc [] ;; Creates anonymous component
                    (mget root :rendering))]
    (rn/AppRegistry.registerComponent "MyApp"
      (fn [] rendering))
    (refresh/inject-hook!)))