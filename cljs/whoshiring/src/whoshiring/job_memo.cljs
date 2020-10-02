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
            [cljs.reader :as reader]
            [cognitect.transit :as trx]))

;;; --- local storage utilities -------------------------------------


(def app-key "askwho.matrix")

(defn askwho-ls-key
  ([month-id]
   (askwho-ls-key month-id nil))
  ([month-id job-id]
   (str/join "." [app-key month-id job-id])))

;;; --- localStorage io implementation --------------------------------

(defn io-read-json [ls-obj]
  (trx/read (trx/reader :json)
    (.parse js/JSON ls-obj)))

;;; --- local-store --------------------------------

(defn io-all-keys []
  (.keys js/Object (.-localStorage js/window)))

(defn io-get-wild
  "Loads all localStorage values whose key begins with
  prefix into a dictionary, using the rest of the LS key
   as the dictionary key."
  ([prefix]
   (io-get-wild prefix identity))
  ([prefix post-processor]
   (into {}
     (remove nil?
       (for [lsk (io-all-keys)]
         (when (and (str/starts-with? lsk prefix)
                    ;; ugh, we got some garbage in LS
                    ;; may as well create permanent filter
                    (> (count lsk) (count prefix)))
           [lsk (post-processor
                  (.getItem js/localStorage lsk))]))))))

(defn io-upsert [key val]
  (.setItem (.-localStorage js/window) key val))

(defn io-read [key]
  (.getItem (.-localStorage js/window) key))

(defn io-delete [key]
  (.removeItem (.-localStorage js/window) key))

(defn io-clear-storage []
  (.clear (.-localStorage js/window)))

(defn io-find [key-prefix]
  (loop [keys (io-all-keys)
         found []]
    (if (seq keys)
      (recur (rest keys)
        (if (str/starts-with? (first keys) key-prefix)
          (conj found (first keys))
          found))
      found)))

(defn io-truncate [key-prefix]
  (doseq [key (io-find key-prefix)]
    (io-delete key)))

;;; higher order

(defn io-object-to-map [raw-ls-object]
  (trx/read (trx/reader :json)
    (.parse js/JSON raw-ls-object)))

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
(defn map-to-json [map]
  (trx/write (trx/writer :json) map))

(defn json-to-map [json]
  (trx/read (trx/reader :json) json))

(defn- job-memo-to-json [rx]
  (map-to-json (into {} (for [k [:month-hn-id :job-hn-id
                                 :stars :excluded :applied :notes]]
                          [k (mget rx k)]))))

(defn- job-memo-upsert [memo]
  (let [ls-key (askwho-ls-key (mget memo :month-hn-id)
                              (mget memo :job-hn-id))]
    (prn :storing!! ls-key)
    (io-upsert ls-key
      (.stringify js/JSON
        (job-memo-to-json memo)))))

(defn job-memo-read [month-id job-id]
  (io-read-json
    (io-read (askwho-ls-key month-id job-id))))

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
  (when (and c (not= old-val unbound))
    (job-memo-upsert job-memo)))

(defn month-job-memos [month-hn-id]
  (io-get-wild (askwho-ls-key month-hn-id)
    (fn [raw-obj]
      (let [json-obj (io-read-json raw-obj)]
        (load-job-memo json-obj)))))