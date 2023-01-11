(ns whoshiring.preferences
  (:require
    [tiltontec.cell.core
     :refer-macros [cF cF+ c-reset-next! cFonce cFn]
     :refer [cI c-reset! make-cell]]
    [tiltontec.cell.observer :as obs]
    [tiltontec.model.core
     :refer [make mget mset! #_ mswap!]
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

(defn load-preferences [{:keys [remote onsite
                                interns visa starred noted
                                match-case or-and-aliasing
                                applied excluded
                                search-history
                                job-sort
                                max-jobs-to-show
                                show-excluded-jobs] :as prefs}]
  (md/make ::preferences
    :app-help? (cI false)                                   ;; ignore last setting
    :rgx-help? (cI false)                                   ;; ignore last setting
    :remote (cI remote)
    :onsite (cI onsite)
    :interns (cI interns)
    :visa (cI visa)
    :starred (cI starred)
    :noted (cI noted)
    :applied (cI applied)
    :excluded (cI excluded)
    :match-case (cI match-case)
    :or-and-aliasing (cI or-and-aliasing)
    :job-sort (cI job-sort)
    :search-history (cI search-history)
    :max-jobs-to-show (cI max-jobs-to-show)
    :show-excluded-jobs (cI show-excluded-jobs)))

(def prefs (do
             ;; (ls/io-delete (preferences-key))
             (if-let [prefs (ls/io-read-json
                              (ls/io-read (preferences-key)))]
               (do (prn :existing-prefs-found!!!!!!!!!! prefs)
                   (load-preferences prefs))
               (md/make ::preferences
                 :app-help? (cI false)
                 :rgx-help? (cI false)
                 :remote (cI false)
                 :onsite (cI false)
                 :interns (cI false)
                 :visa (cI false)
                 :starred (cI false)
                 :noted (cI false)
                 :applied (cI false)
                 :excluded (cI false)
                 :match-case (cI false)
                 :or-and-aliasing (cI true)
                 :search-history (cI nil)
                 :max-jobs-to-show (cI 42)
                 :job-sort (cI nil)
                 :show-excluded-jobs (cI false)))))

(defn pref [key] (mget prefs key))
(defn pref! [key value] (mset! prefs key value))
(defn pref-swap! [key & swap-args]
  ;; hhack (apply md/mswap! prefs key swap-args)
  )
(defn pref-toggle! [key]
  (pref-swap! key not))

