(ns whoshiring.job-memo
  (:require [tiltontec.model.core :as md]
            [tiltontec.cell.base :refer [unbound c-unbound?]]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI c-reset! make-cell]]
            [tiltontec.cell.observer :refer [observe-by-type]]
            [tiltontec.model.core
             :refer-macros [with-par mdv! mx-par]
             :refer [matrix mset!> <mget mswap!>] :as md]
            [whoshiring.local-storage :as st]
            [clojure.string :as str]
            [cognitect.transit :as trx]))

(defn make-job-memo [month-hn-id job-hn-id]
  (md/make ::job-memo
    :month-hn-id month-hn-id
    :job-hn-id job-hn-id
    :stars (cI 0)
    :excluded (cI false)
    :applied (cI false)
    :notes (cI nil)))

(defn load-job-memo [{:keys [month-hn-id job-hn-id stars excluded applied notes]}]
  (md/make ::job-memo
    :month-hn-id month-hn-id
    :job-hn-id job-hn-id
    :stars (cI stars)
    :excluded (cI excluded)
    :applied (cI applied)
    :notes (cI notes)))

;;; --- json -----------------------------
(defn map-to-json [map]
  (trx/write (trx/writer :json) map))

(defn json-to-map [json]
  (trx/read (trx/reader :json) json))

(defn- job-memo-to-json [rx]
  (map-to-json (into {} (for [k [:month-hn-id :job-hn-id
                                 :stars :excluded :applied :notes]]
                          [k (<mget rx k)]))))

(defn- job-memo-upsert [memo]
  (let [ls-key (st/askwho-ls-key (<mget memo :month-hn-id)
                              (<mget memo :job-hn-id))]
    (prn :storing!! ls-key)
    (st/io-upsert ls-key
      (.stringify js/JSON
        (job-memo-to-json memo)))))

(defn job-memo-read [month-id job-id]
  (st/io-read-json
    (st/io-read (st/askwho-ls-key month-id job-id))))

(defn <job-memo [job memo-slot]
  (<mget (:memo job) memo-slot))

(defn job-memo-set!> [job memo-slot value]
  (mset!> (:memo job) memo-slot value))

(defn job-memo-swap!> [job memo-slot fn & args]
  (apply mswap!> (:memo job) memo-slot fn args))

(defmethod observe-by-type [::job-memo] [slot job-memo new-val old-val c]
  ;; localStorage does not update columns, so regardless of which
  ;; slot changed we upsert the entire instance. The exception is on
  ;; the initial "observe" as signofoed when the old value is unbound. We save
  ;; a little local storage by not storing a memo until some annotation is made.
  (when (and c (not= old-val unbound))
    (job-memo-upsert job-memo)))