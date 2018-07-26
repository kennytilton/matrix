(ns mxweb.example.todo
  (:require
    [clojure.string :as str]
    [taoensso.tufte :as tufte :refer-macros (defnp p profiled profile)]
    [tiltontec.cell.base :refer [unbound ia-type]]
    [tiltontec.cell.core
     :refer-macros [cF cFn] :refer [cI]]
    [tiltontec.cell.observer :refer [observe-by-type]]
    [tiltontec.model.core :as md :refer [make <mget mset!>]]
    [tiltontec.util.core :as util :refer [pln now map-to-json json-to-map uuidv4]]
    [mxweb.html :refer [io-upsert io-read io-find io-truncate]]))

;;; FYI: every other implementation I looked at stores all Todos as a single blob in
;;; localStorage. The TodoMVC spec does not require anything more, but it seems
;;; unrealistic. This implementation stores/updates each to-do individually. We
;;; also record 'completed' as a timestamp (not just a boolean), track a 'created'
;;; timestamp, and use a 'deleted' timestamp to support logical deletion.
;;; That is just how we would build any real world app (and storing the to-dos
;;; individually actually simplifies some of the code).

(declare td-upsert td-deleted td-completed load-all)

(def TODO_LS_PREFIX "todos-matrixcljs.")

(defn todo-list []
  (md/make ::todo-list
    :items-raw (cFn (load-all))
    :items (cF (doall (remove td-deleted (<mget me :items-raw))))

    ;; the TodoMVC challenge has a requirement that routes "go thru the
    ;; the model". (Some of us just toggled the hidden attribute appropriately
    ;; and avoided the DOM add/removal.) An exemplar they provided had the view
    ;; examine the route and ask the model for different subsets using different
    ;; functions for each subset. For fun we used dedicated cells:

    :items-completed (cF (doall (filter td-completed (<mget me :items))))
    :items-active (cF (doall (remove td-completed (<mget me :items))))

    ;; two DIVs want to hide if there are no to-dos, so in the spirit
    ;; of DRY we dedicate a cell to that semantic.

    :empty? (cF (empty? (<mget me :items)))))

(defn make-todo
  "Make a matrix incarnation of a todo on initial entry"
  [islots]

  (let [net-slots (merge
                    {:type      ::todo
                     :id        (str TODO_LS_PREFIX (uuidv4))
                     :created   (now)

                     ;; now wrap mutable slots as Cells...
                     :title     (cI (:title islots))
                     :completed (cI nil)
                     :due-by    (cI (+ (now) (* 4 24 60 60 1000)))
                     :deleted   (cI nil)})
        todo (apply md/make (flatten (into [] net-slots)))]

    (td-upsert todo)
    todo))

(defn bulk-todo [prefix ct]
  (dotimes [n ct]
    (make-todo {:title (str prefix n)})))

;;; --------------------------------------------------------
;;; --- handy accessors to hide <mget etc ------------------

(defn td-created [td]
  ;; created is not a Cell because it never changes, but we use the <mget API anyway
  ;; just in case that changes. (<mget can handle normal slots not wrapped in cells.)
  (<mget td :created))

(defn td-title [td]
  (<mget td :title))

(defn td-id [td]
  (<mget td :id))

(defn td-due-by [td]
  (<mget td :due-by))

(defn td-completed [td]
  (<mget td :completed))

(defn td-deleted [td]
  ;; created is not a Cell because it never changes, but we use the <mget API anyway
  ;; just in case that changes (eg, to implement un-delete)
  (<mget td :deleted))

;;; ---------------------------------------------
;;; --- dataflow triggering setters to hide mset!

(defn td-delete! [td]
  (assert td)
  (mset!> td :deleted (now)))

(defn td-toggle-completed! [td]
  (mset!> td :completed (when-not (td-completed td) (now))))

;;; --------------------------------------------------------------
;;; --- persistence, part II -------------------------------------
;;; An observer updates individual todos in localStorage, including
;;; the 'deleted' property. If we wanted to delete physically, we could
;;; keep the 'deleted' property on in-memory todos and handle the physical deletion
;;; in this same observer when we see the 'deleted' property go truthy.

(defmethod observe-by-type [::todo] [slot me new-val old-val c]
  ;; localStorage does not update columns, so regardless of which
  ;; slot changed we update the entire instance.

  ;; unbound as the prior value means this is the initial observation fired off
  ;; on instance initialization (to get them into the game, if you will), so skip upsert
  ;; since we store explicitly after making a new to-do. Yes, this is premature optimization.

  (when-not (= old-val unbound)
    (td-upsert me)))


;;; --- loading from localStorage ----------------

(declare remake-todo)

(defn- load-all []
  (let [keys (io-find TODO_LS_PREFIX)]
    (map (fn [td-id]
           (remake-todo
             (json-to-map
               (.parse js/JSON (io-read td-id)))))
         (io-find TODO_LS_PREFIX))))

(defn- remake-todo [islots]
  (apply md/make
         (flatten
           (into []
                 (merge islots
                        {:type      ::todo
                         ;; next, we wrap in cells those reloaded slots we might
                         ;; mutate (not created)...
                         :title     (cI (:title islots))
                         :completed (cI (:completed islots false))
                         :due-by    (cI (:due-by islots)) ;; an enhancement over the official spec
                         :deleted   (or (:deleted islots)
                                        (cI nil))})))))

;;; ---- updating in localStorage ----------------------

(declare td-to-json)

(defn- td-upsert [td]
  (io-upsert (:id @td)
             (.stringify js/JSON
                         (td-to-json td))))

(defn- td-to-json [todo]
  (map-to-json (into {} (for [k [:id :created :title :completed :deleted :due-by]]
                          [k (<mget todo k)]))))
