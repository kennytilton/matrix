(ns mxintro.stopwatch
  (:require
    [clojure.string :as str]
    [taoensso.tufte :as tufte :refer-macros (defnp p profiled profile)]
    [tiltontec.cell.base :refer [unbound ia-type]]
    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF] :refer [cI]]
       :clj [tiltontec.cell.core
             :refer [cF cF cI]])
    [tiltontec.model.core :as md :refer [make <mget]]
    [tiltontec.util.core :as util :refer [now]]))

(defn mk-stopwatch
  "Make a Matrix Inside(tm) model of a stopwatch"
  [& key-vals]

  (apply md/make (flatten (into [] (merge
                                     {:start   (now)
                                      :current (cI (now))
                                      :elapsed (cF (- (<mget me :current)
                                                      (<mget me :start)))}
                                     (apply hash-map key-vals))))))