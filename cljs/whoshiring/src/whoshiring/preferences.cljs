(ns whoshiring.preferences
  (:require
    [tiltontec.cell.core
     :refer-macros [cF cF+ c-reset-next! cFonce cFn]
     :refer [cI c-reset! make-cell]]
    [tiltontec.cell.observer :as obs]
    [tiltontec.model.core
     :refer [make mget mset!]
     :as md]
    [whoshiring.local-storage :as ls]))

(defn preferences-key []
  (str ls/local-storage-app-key ".preferences"))

(defn- preferences-to-json [prefs]
  (prn :to-json-sees-keys (keys @prefs))
  (prn :and-ls (into [] (ls/io-read-json
                          (ls/io-read (preferences-key)))))
  (prn :bad-ls (ls/io-read "not in loco")
    (ls/io-read-json
      (ls/io-read "not in loco")))
  (ls/map-to-json (into {} (for [k (keys @prefs)
                                 :when (not (some #{k} [:par :type]))]
                             [k (mget prefs k)]))))

(defmethod obs/observe-by-type [::preferences] [slot prefs newv oldv c]
  (prn :OBS!!!! slot newv oldv)
  (ls/io-upsert (preferences-key)
    (.stringify js/JSON
      (preferences-to-json prefs))))


(defn load-preferences [{:keys [app-help? rgx-help?]}]
  (md/make ::preferences
    :app-help? (cI app-help?)
    :rgx-help? (cI rgx-help?)))

(def prefs (if-let [prefs (ls/io-read-json
                            (ls/io-read (preferences-key)))]
             (do
               (prn :bam prefs :off (preferences-key))
               (load-preferences prefs))
             (md/make ::preferences
               :app-help? (cI false)
               :rgx-help? (cI false))))
