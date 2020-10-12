(ns whoshiring.preferences
  (:require
    [tiltontec.cell.core
     :refer-macros [cF cF+ c-reset-next! cFonce cFn]
     :refer [cI c-reset! make-cell]]
    [tiltontec.model.core
     :refer-macros [the-kids mdv!]
     :refer [fget mget fasc fm! make mset! backdoor-reset!]
     :as md]))

(def prefs (md/make ::preferences
             :app-help? (cI true)
             :rgx-help? (cI false)))
