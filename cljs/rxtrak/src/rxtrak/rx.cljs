;;
;; The "model" to-do, a matrix incarnaton of to-dos maintained in localStorage
;; Here we:
;; -- load any existing to-dos into the matrix at start-up;
;; -- create new matrix rxs and store them immediately;
;; -- then persist them when they change (including setting a logical deletion value.
;;

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

;;; FYI: every implementation I looked at stores all rxs as a single blob in
;;; localStorage. The TodoMVC spec does not require anything more, but it seems
;;; unrealistic. This implementation stores/updates each rx individually. We
;;; also record 'completed' as a timestamp (not just a boolean), track a 'created'
;;; timestamp, and use a 'deleted' timestamp to support logical deletion.
;;; That is just how we would build any real world app (and storing the to-dos
;;; individually actually simplifies some of the code.)

(declare rx-upsert rx-deleted rx-completed load-all)

(def RX_LS_PREFIX "rx-rxtrak.")

(defn rx-list []
  (md/make ::rx-list
    :items-raw (cFn (load-all))
    :items (cF (p :items (doall (remove rx-deleted (<mget me :items-raw)))))

    ;; the TodoMVC challenge has a requirement that routes "go thru the
    ;; the model". (Some of us just toggled the hidden attribute appropriately
    ;; and avoided the DOM add/removal.) An exemplar they provided had the view
    ;; examine the route and ask the model for different subsets using different
    ;; functions for each subset. For fun we used dedicated cells:

    :items-completed (cF (p :completed (doall (filter rx-completed (<mget me :items)))))
    :items-active (cF (p :active (doall (remove rx-completed (<mget me :items)))))

    ;; two DIVs want to hide if there are no to-dos, so we dedicate a cell
    ;; to that semantic. Yes, this could be a function, but then the Cell
    ;; calling that function would recompute unecessarily each time a to-do
    ;; was added or removed. In fact, the 'empty?' state changes only when
    ;; the count goes to or from zero, so we avoid recomputing two "hiddens"
    ;; unnecessarily when the count changes, say, from 2 to 3.

    :empty? (cF (empty? (<mget me :items)))))

(defn make-rx
  "Make a matrix incarnation of an rx on initial entry"
  [islots]

  (let [net-slots (merge
                    {:type      ::rx
                     :id        (str RX_LS_PREFIX (uuidv4))
                     :created   (now)

                     ;; now wrap mutable slots as Cells...
                     :title     (cI (:title islots))
                     :due-by    (cI nil #_(+ (now) (* 4 24 60 60 1000)))
                     :completed (cI nil)
                     :deleted   (cI nil)})

        rx (apply md/make (flatten (into [] net-slots)))]

    (rx-upsert rx)
    rx))

(defn bulk-rx [prefix ct]
  (dotimes [n ct]
    (make-rx {:title (str prefix n)})))

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

;;; --- persistence, part II -------------------------------------
;;; An observer updates individual rxs in localStorage, including
;;; the 'deleted' property. If we wanted to delete physically, we could
;;; keep the 'deleted' property on in-memory rxs and handle the physical deletion
;;; in this same observer when we see the 'deleted' go truthy.

(defmethod observe-by-type [:rxtrak.rx/rx] [slot me new-val old-val c]
  ;; localStorage does not update columns, so regardless of which
  ;; slot changed we update the entire instance.

  ;; unbound as the prior value means this is the initial observation fired off
  ;; on instance initialization (to get them into the game, if you will), so skip upsert
  ;; since we store explicitly after making a new rx.

  (when-not (= old-val unbound)
    (rx-upsert me)))

;;; --- loading from localStorage ----------------

(declare remake-rx)

(defn- load-all []
  (let [keys (io-find RX_LS_PREFIX)]
    (map (fn [rx-id]
           (remake-rx
             (json-to-map
               (.parse js/JSON (io-read rx-id)))))
         (io-find RX_LS_PREFIX))))

(defn- remake-rx [islots]
  (apply md/make
         (flatten
           (into []
                 (merge islots
                        {:type      ::rx
                         ;; we wrap in cells those reloaded slots we might mutate...
                         :title     (cI (:title islots))
                         :due-by    (cI (:due-by islots))
                         :completed (cI (:completed islots))
                         :deleted   (or (:deleted islots)
                                        (cI nil))})))))

;;; ---- uodating in localStorage ----------------------

(declare rx-to-json)

(defn- rx-upsert [td]
  (io-upsert (:id @td)
             (.stringify js/JSON
                         (rx-to-json td))))

(defn- rx-to-json [rx]
  (map-to-json (into {} (for [k [:id :created :title :due-by :completed :deleted]]
                          [k (<mget rx k)]))))

;;; --- demo ----

(defn due-by-input [rx]
  (input {:class     "due-by"
          ::tag/type "date"
          :value     (cFn (when-let [db (rx-due-by rx)]
                            (let [db$ (tmc/to-string (tmc/from-long db))]
                              (subs db$ 0 10))))
          :disabled (cF (when (rx-completed rx) "disabled"))
          :oninput   #(mset!> rx :due-by
                        (tmc/to-long
                          (tmc/from-string
                            (form/getValue (.-target %)))))
          :style     (cFonce (make-css-inline me
                               :border "none"
                               :font-size "14px"
                               :display (cF (if (and (rx-completed rx)
                                                     (not (rx-due-by rx)))
                                              "none" "block"))
                               :background-color (cF (when-let [clock (mxu-find-class (:tag @me) "std-clock")]
                                                       (if-let [due (rx-due-by rx)]
                                                         (if (rx-completed rx)
                                                           cache
                                                           (let [time-left (- due (<mget clock :clock))]
                                                             (cond
                                                               (neg? time-left) "red"
                                                               (< time-left (* 24 3600 1000)) "coral"
                                                               (< time-left (* 2 24 3600 1000)) "yellow"
                                                               :default "green")))
                                                         "#e8e8e8")))))}))