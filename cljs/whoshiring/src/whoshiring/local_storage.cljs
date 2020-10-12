(ns whoshiring.local-storage
  (:require [cognitect.transit :as trx]
            [clojure.string :as str]))

(def local-storage-app-key "askwho.matrix")

;;; --- json ---------------------------

(defn map-to-json [map]
  (trx/write (trx/writer :json) map))

(defn json-to-map [json]
  (trx/read (trx/reader :json) json))

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