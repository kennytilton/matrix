(ns todomx.todo
  (:require
    [clojure.string :as str]
    [taoensso.tufte :as tufte :refer-macros (defnp p profiled profile)]
    [tiltontec.cell.base :refer [unbound ia-type]]
    [tiltontec.cell.core
     :refer-macros [c? c?n] :refer [c-in]]
    [tiltontec.cell.observer :refer [observe-by-type]]
    [tiltontec.model.core :as md :refer [make md-get md-reset!]]
    [tiltontec.util.core :as util :refer [pln now map-to-json json-to-map uuidv4]]
    [tiltontec.tag.html :refer [io-upsert io-read io-find io-truncate]]))

;;; FYI: every implementation I looked at stores all Todos as a single blob in
;;; localStorage. The TodoMVC spec does not require anything more, but it seems
;;; unrealistic. This implementation stores/updates each todo individually. We
;;; also record 'completed' as a timestamp (not just a boolean), track a 'created'
;;; timestamp, and use a 'deleted' timestamp to support logical deletion.
;;; That is just how we would build any real world app (and storing the to-dos
;;; individually actually simplifies some of the code.)

(declare td-upsert td-deleted td-completed load-all)

(def TODO_LS_PREFIX "todos-matrixcljs.")

(defn todo-list []
  (md/make ::todo-list
    :items-raw (c?n (load-all))
    :items (c? (p :items (doall (remove td-deleted (md-get me :items-raw)))))

    ;; the TodoMVC challenge has a requirement that routes "go thru the
    ;; the model". (Some of us just toggled the hidden attribute appropriately
    ;; and avoided the DOM add/removal.) An exemplar they provided had the view
    ;; examine the route and ask the model for different subsets using different
    ;; functions for each subset. For fun we used dedicated cells:

    :items-completed (c? (p :completed (doall (filter td-completed (md-get me :items)))))
    :items-active (c? (p :active (doall (remove td-completed (md-get me :items)))))

    ;; two DIVs want to hide if there are no to-dos, so we dedicate a cell
    ;; to that semantic. Yes, this could be a function, but then the Cell
    ;; calling that function would recompute unecessarily each time a to-do
    ;; was added or removed. In fact, the 'empty?' state changes only when
    ;; the count goes to or from zero, so we avoid recomputing two "hiddens"
    ;; unnecessarily when the count changes, say, from 2 to 3.

    :empty? (c? (nil? (first (md-get me :items))))))

(defn make-todo
  "Make a matrix incarnation of a todo on initial entry"
  [islots]

  (let [net-slots (merge
                    {:type      ::todo
                     :id        (str TODO_LS_PREFIX (uuidv4))
                     :created   (now)

                     ;; now wrap mutable slots as Cells...
                     :title     (c-in (:title islots))
                     :completed (c-in false)
                     :deleted   (c-in nil)})
        todo (apply md/make (flatten (into [] net-slots)))]

    (td-upsert todo)
    todo))

(defn bulk-todo [prefix ct]
  (dotimes [n ct]
    (make-todo {:title (str prefix n)})))

;;; --- handy accessors to hide md-get etc ------------------

(defn td-created [td]
  ;; created is not a Cell because it never changes, but we use the md-get API anyway
  ;; just in case that changes. (md-get can handle normal slots not wrapped in cells.)
  (md-get td :created))

(defn td-title [td]
  (md-get td :title))

(defn td-id [td]
  (md-get td :id))

(defn td-completed [td]
  (md-get td :completed))

(defn td-deleted [td]
  ;; created is not a Cell because it never changes, but we use the md-get API anyway
  ;; just in case that changes (eg, to implement un-delete)
  (md-get td :deleted))

; - dataflow triggering mutations

(defn td-delete! [td]
  (assert td)
  (md-reset! td :deleted (now)))

(defn td-toggle-completed! [td]
  (md-reset! td :completed (when-not (td-completed td) (now))))

;;; --- persistence, part II -------------------------------------
;;; An observer updates individual todos in localStorage, including
;;; the 'deleted' property. If we wanted to delete physically, we could
;;; keep the 'deleted' property on in-memory todos and handle the physical deletion
;;; in this same observer when we see the 'deleted' go truthy.

(defmethod observe-by-type [::todomx.todo/todo] [slot me new-val old-val c]
  ;; localStorage does not update columns, so regardless of which
  ;; slot changed we update the entire instance.

  ;; unbound as the prior value means this is the initial observation fired off
  ;; on instance initialization (to get them into the game, if you will), so skip upsert
  ;; since we store explicitly after making a new todo.

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
                         ;; we wrap in cells those reloaded slots we might mutate...
                         :title     (c-in (:title islots))
                         :completed (c-in (:completed islots false))
                         :deleted   (or (:deleted islots)
                                        (c-in nil))})))))

;;; ---- uodating in localStorage ----------------------

(declare td-to-json)

(defn- td-upsert [td]
  (io-upsert (:id @td)
             (.stringify js/JSON
                         (td-to-json td))))

(defn- td-to-json [todo]
  (map-to-json (into {} (for [k [:id :created :title :completed :deleted]]
                          [k (md-get todo k)]))))
