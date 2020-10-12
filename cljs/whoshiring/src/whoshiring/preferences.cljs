(ns whoshiring.preferences
  (:require
    [tiltontec.cell.core
     :refer-macros [cF cF+ c-reset-next! cFonce cFn]
     :refer [cI c-reset! make-cell]]
    [tiltontec.cell.observer :as obs]
    [tiltontec.model.core
     :refer-macros [the-kids mdv!]
     :refer [fget mget fasc fm! make mset! backdoor-reset!]
     :as md]))

(defmethod obs/observe-by-type [::preferences] [slot me newv oldv c]
  (prn :OBS!!!! slot newv oldv ))

(def prefs (md/make ::preferences
             :app-help? (cI false)
             :rgx-help? (cI false)))
