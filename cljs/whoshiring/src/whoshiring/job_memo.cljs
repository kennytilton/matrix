(ns whoshiring.job-memo
  (:require [tiltontec.model.core :as md]
            [tiltontec.cell.base :refer [unbound c-unbound?]]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI c-reset! make-cell]]
            [tiltontec.cell.observer :refer [observe-by-type]]
            [tiltontec.model.core
             :refer-macros [with-par mdv! mx-par]
             :refer [matrix mset! mget mswap!] :as md]
            [clojure.string :as str]
            [whoshiring.local-storage :as ls]))

(defn job-memo-key
  ([month-id]
   (job-memo-key month-id nil))
  ([month-id job-id]
   (str/join "." [ls/local-storage-app-key month-id job-id])))

;;; --- job memo: user annotations ----------------------------

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
(defn- job-memo-to-json [rx]
  (ls/map-to-json (into {} (for [k [:month-hn-id :job-hn-id
                                 :stars :excluded :applied :notes]]
                          [k (mget rx k)]))))

(defn- job-memo-upsert [memo]
  (ls/io-upsert (job-memo-key (mget memo :month-hn-id)
               (mget memo :job-hn-id))
    (.stringify js/JSON
      (job-memo-to-json memo))))

(defn job-memo-read [month-id job-id]
  (ls/io-read-json
    (ls/io-read (job-memo-key month-id job-id))))

(defn job-memo [job memo-slot]
  (mget (:memo job) memo-slot))

(defn job-memo-set! [job memo-slot value]
  (mset! (:memo job) memo-slot value))

(defn job-memo-swap! [job memo-slot fn & args]
  (apply mswap! (:memo job) memo-slot fn args))

(defmethod observe-by-type [::job-memo] [slot job-memo new-val old-val c]
  ;; localStorage does not update columns, so regardless of which
  ;; slot changed we upsert the entire instance. The exception is on
  ;; the initial "observe" as signofoed when the old value is unbound. We save
  ;; a little local storage by not storing a memo until some annotation is made.
  (job-memo-upsert job-memo))

(defn month-job-memos [month-hn-id]
  (ls/io-get-wild (job-memo-key month-hn-id)
    (fn [raw-obj]
      (let [json-obj (ls/io-read-json raw-obj)]
        (load-job-memo json-obj)))))