(ns demo.dev
  "This namespace injects the React refresh runtime and any other developer
  tools we want to preload - and not include in our production build!"
  (:require
   [helix.experimental.refresh :as r]))


(r/inject-hook!)

(defn ^:dev/after-load refresh []
  (r/refresh!))
