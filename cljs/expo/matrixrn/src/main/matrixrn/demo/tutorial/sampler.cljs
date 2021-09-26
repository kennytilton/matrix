(ns matrixrn.demo.tutorial.sampler
  (:require
    [react]
    ["@react-navigation/native" :refer [NavigationContainer]]
    [tiltontec.cell.core :refer-macros [cFonce]]
    [tiltontec.model.core :refer [cFkids with-par matrix mx-par mget mset! mswap!] :as md]
    [matrixrn.matrixrn :as mxn :refer-macros [mk mku with-props]]
    [matrixrn.demo.tutorial.x100-hello-world.times-six :as hello]
    [matrixrn.demo.tutorial.x110-its-not-just-me.separate-count-display :as others]
    [matrixrn.demo.tutorial.x120-web-component.rgb-slider :as webco]
    [matrixrn.demo.tutorial.x130-async-heaven.response-map :as xhr-async]))

(defn demo []
  (md/make ::rnApp
    :rx-dom (cFonce
              (with-par me
                (mk NavigationContainer {} {}
                  (mk mxn/Navigator {} {}
                    (hello/solution)
                    (others/solution)
                    (webco/solution)
                    (xhr-async/solution)))))))
