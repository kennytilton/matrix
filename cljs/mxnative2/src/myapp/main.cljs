;(ns myapp.main
;  (:require ["react-native" :as rn]
;            [helix.core :refer [defnc $]]
;            [helix.experimental.refresh :as refresh]))
;
;(defnc Root [props]
;  {:helix/features {:fast-refresh true}}
;  ($ rn/View {:style #js {:flex 1, :alignItems "center", :justifyContent "center"}}
;     ($ rn/Text {:style #js {:fontSize 36}}
;        "Hello Helix!")))
;
;(defn ^:dev/after-load after-load []
;  (refresh/refresh!))
;
;(defn init []
;  (rn/AppRegistry.registerComponent "MyApp" (fn [] Root))
;  (refresh/inject-hook!))

;----------------------------------------------------

(ns myapp.main
  (:require ["react-native" :as rn]
            [helix.core :refer [defnc $]]
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
      "Hello Helix?!")))

(defnc Root2 [props]
  ($ rn/Text {:style #js {:fontSize 36}}
    "Hello Helix?!"))

(defn ^:dev/after-load after-load []
  (refresh/refresh!))

(defn mx-to-rx [mx-dom]
  ;; mx-dom s/b a ::mxrn.elt product  of make-rnc
  (prn :rendering (mget mx-dom :rendering))
  (mget mx-dom :rendering))

(defn init []
  (let [app-matrix (build/matrix-build!)
        root (mget app-matrix :rx-dom)
        rendering (mx-to-rx root)]
    (prn :matrix @app-matrix)
    (prn :Root Root)
    (prn :rrot root)
    (prn :rendering rendering)
    (rn/AppRegistry.registerComponent "MyApp"
      ;; rendering
      (fn [] rendering)
      ;; (fn [] Root2)
      #_ (fn [] Root))
    (refresh/inject-hook!)))
