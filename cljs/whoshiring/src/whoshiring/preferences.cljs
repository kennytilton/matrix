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

(defn load-preferences [{:keys [app-help? rgx-help? REMOTE ONSITE
                                INTERNS VISA Starred Noted
                                Applied Excluded
                                show-excluded-jobs]}]
  (md/make ::preferences
    :app-help? (cI false)
    :rgx-help? (cI false)
    :REMOTE (cI REMOTE)
    :ONSITE (cI ONSITE)
    :INTERNS (cI INTERNS)
    :VISA (cI VISA)
    :Starred (cI Starred)
    :Noted (cI Noted)
    :Applied (cI Applied)
    :Excluded (cI Excluded)
    :show-excluded-jobs (cI show-excluded-jobs)))

(def prefs (if-let [prefs (ls/io-read-json
                            (ls/io-read (preferences-key)))]
             (do
               (prn :bam prefs :off (preferences-key))
               (load-preferences prefs))
             (md/make ::preferences
               :app-help? (cI false)
               :rgx-help? (cI false)
               :REMOTE (cI false)
               :ONSITE (cI false)
               :INTERNS (cI false)
               :VISA (cI false)
               :Starred (cI false)
               :Noted (cI false)
               :Applied (cI false)
               :Excluded (cI false)
               :show-excluded-jobs (cI false))))

(defn pref [key] (mget prefs key))
(defn pref! [key value] (mset! prefs key value))
(defn pref-swap! [key & swap-args]
  (apply mswap! prefs key swap-args))

