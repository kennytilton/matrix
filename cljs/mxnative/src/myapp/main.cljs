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

(defnc Root [props]
  {:helix/features {:fast-refresh true}}
  ($ rn/View {:style #js {:flex 1, :alignItems "center", :justifyContent "center"}}
    ($ rn/Text {:style #js {:fontSize 36}}
      "Hello Helix!")))

(defnc Root2 [props]
  ($ rn/Text {:style #js {:fontSize 36}}
    "Hello Helix?!"))

(defn ^:dev/after-load after-load []
  (refresh/refresh!))

(defn mx-to-rx [mx-dom]
  (mget mx-dom :rendering))

(defn init []
  (let [app-matrix (build/matrix-build!)
        root (mget app-matrix :rx-dom)
        rendering (fnc [] (mget root :rendering))]
    (rn/AppRegistry.registerComponent "MyApp"
       (fn [] rendering))
    (refresh/inject-hook!)))
