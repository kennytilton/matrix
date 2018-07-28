(ns rxtrak.rx
  (:require
    [clojure.string :as str]
    [taoensso.tufte :as tufte :refer-macros (defnp p profiled profile)]
    [tiltontec.cell.base :refer [unbound ia-type]]
    [tiltontec.cell.core
     :refer-macros [cF cFn] :refer [cI]]
    [tiltontec.cell.observer :refer [observe-by-type]]
    [tiltontec.model.core :as md :refer [make <mget mset!> mswap!>]]
    [tiltontec.util.core :as util :refer [pln now map-to-json json-to-map uuidv4]]
    [tiltontec.webmx.html :refer [io-upsert io-read io-find io-truncate]
     :as tag]))

(declare rx-deleted rx-completed)

(defn make-rx
  "Make a matrix incarnation of an rx on initial entry"
  [islots]

  (apply md/make (flatten (into [] (merge
                                     {:type      ::rx
                                      :created   (now)
                                      :title     (cI "")
                                      :due-by    (cI nil #_(+ (now) (* 4 24 60 60 1000)))
                                      :completed (cI false)
                                      :deleted   (cI false)}
                                     islots)))))

;;; --- handy accessors to hide <mget / mset!> ------------------

(defn rx-created [td]
  ;; created is not a Cell because it never changes, but we use the <mget API anyway
  ;; just in case that changes. (<mget can handle normal slots not wrapped in cells.)
  (<mget td :created))

(defn rx-title [td]
  (<mget td :title))

(defn rx-id [td]
  (<mget td :id))

(defn rx-due-by [td]
  (<mget td :due-by))

(defn rx-completed [td]
  (<mget td :completed))

(defn rx-deleted [td]
  ;; created is not a Cell because it never changes, but we use the <mget API anyway
  ;; just in case that changes (eg, to implement un-delete)
  (<mget td :deleted))

; - dataflow triggering mutations

(defn rx-delete! [td]
  (assert td)
  (mset!> td :deleted (now)))

(defn rx-toggle-completed! [td]
  (mswap!> td :completed #(if % nil (now))))