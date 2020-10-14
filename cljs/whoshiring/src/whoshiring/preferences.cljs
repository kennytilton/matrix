(ns whoshiring.preferences
  (:require
    [tiltontec.cell.core
     :refer-macros [cF cF+ c-reset-next! cFonce cFn]
     :refer [cI c-reset! make-cell]]
    [tiltontec.cell.observer :as obs]
    [tiltontec.model.core
     :refer [make mget mset! mswap!]
     :as md]
    [whoshiring.local-storage :as ls]))

(defn preferences-key []
  (str ls/local-storage-app-key ".preferences"))

(defn- preferences-to-json [prefs]
  (ls/map-to-json (into {} (for [k (keys @prefs)
                                 :when (not (some #{k} [:par :type]))]
                             [k (mget prefs k)]))))

(defmethod obs/observe-by-type [::preferences] [slot prefs newv oldv c]
  (ls/io-upsert (preferences-key)
    (.stringify js/JSON
      (preferences-to-json prefs))))

(defn load-preferences [{:keys [app-help? rgx-help? REMOTEID ONSITEID
                                INTERNSID VISAID StarredID NotedID
                                AppliedID ExcludedID
                                show-excluded-jobs]}]
  (md/make ::preferences
    :app-help? (cI false)
    :rgx-help? (cI false)
    :REMOTEID (cI REMOTEID)
    :ONSITEID (cI ONSITEID)
    :INTERNSID (cI INTERNSID)
    :VISAID (cI VISAID)
    :StarredID (cI StarredID)
    :NotedID (cI NotedID)
    :AppliedID (cI AppliedID)
    :ExcludedID (cI ExcludedID)
    :show-excluded-jobs (cI show-excluded-jobs)))

(def prefs (if-let [prefs (ls/io-read-json
                            (ls/io-read (preferences-key)))]
             (do
               (prn :bam prefs :off (preferences-key))
               (load-preferences prefs))
             (md/make ::preferences
               :app-help? (cI false)
               :rgx-help? (cI false)
               :REMOTEID (cI false)
               :ONSITEID (cI false)
               :INTERNSID (cI false)
               :VISAID (cI false)
               :StarredID (cI false)
               :NotedID (cI false)
               :AppliedID (cI false)
               :ExcludedID (cI false)
               :show-excluded-jobs (cI false))))

(defn pref [key] (mget prefs key))
(defn pref! [key value] (mset! prefs key value))
(defn pref-swap! [key & swap-args]
  (apply mswap! prefs key swap-args))

