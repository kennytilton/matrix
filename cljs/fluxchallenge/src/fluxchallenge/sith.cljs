(ns fluxchallenge.sith
  (:require
    [tiltontec.cell.base :refer [unbound]]
    [tiltontec.cell.evaluate :refer [not-to-be]]
    [tiltontec.cell.core :refer-macros [cF cF+ cFonce] :refer [cI]]
    [tiltontec.cell.integrity :refer-macros [with-cc]]
    [tiltontec.model.core
     :refer-macros [with-par]
     :refer [matrix mx-par <mget mset!> mxi-find mxu-find-name mxu-find-type
             kid-values-kids]
     :as md]
    [mxxhr.core
     :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status xhr-response
             xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
             xhr-selection xhr-to-map xhr-name-to-map]]
    [cljs.core.async :as async]
    [cljs-http.core :refer [abort!]]))

(def SLOT-CT 5)

(defn info [me] (when me (<mget me :info)))
(defn lookup [me] (<mget me :lookup))
(defn sith-id [me] (<mget me :sith-id))
(defn with-obi? [me] (when me
                       (<mget me :with-obi?)))

(defn sith-id-inject [sith-id sith-ids where]
  ;
  ; Just a convenience utility to maintain the Sith ID buffer
  ; without worrying about nils and going out of bounds, either
  ; of which this function NOPs.
  ;
  (cond
    (and sith-id
         (< -1 where SLOT-CT)
         (not= sith-id (nth sith-ids where)))
    (vec (concat (subvec sith-ids 0 where)
           [sith-id]
           (subvec sith-ids (inc where))))

    :default sith-ids))

(defn obs-sith-info
  "Populate buckets before/after a Sith with master/apprentice IDs
  when the Sith lookup is completed and we learn those."
  [slot me info]
  (when info
    (with-cc :bracket-sith
      (let [app (mx-par me)
            master-id (get-in info [:master :id])
            apprentice-id (get-in info [:apprentice :id])]
        (when (or master-id apprentice-id)
          (when-let [myx (.indexOf (<mget app :sith-ids) (sith-id me))]
            (let [mids (sith-id-inject master-id (<mget app :sith-ids) (dec myx))
                  aids (sith-id-inject apprentice-id mids (inc myx))]
              (mset!> app :sith-ids aids))))))))

(defn make-sith [app sith-id]
  (md/make ::Sith
    :par app
    :sith-id sith-id
    :lookup (cF+ [:obs (fn [_ me lku prior-lku]
                         (when (and prior-lku
                                    (not= prior-lku unbound))
                           (when (and ;; (nil? lku)
                                      (not (xhr-response prior-lku)))
                             (prn :aborting! prior-lku)
                             (abort! (:cancel @prior-lku))
                             #_ (when (.isActive xhr)
                                  (prn :aborting-lookup sith-id xhr)
                                  (.abort xhr)
                                  nil))))]
              (cond
                  (info me)
                  ;; no need for lookup if we have the info already;
                  ;; forget how this could happen since the spec requires
                  ;; fresh lookups in case server data changes.
                  nil

                  (with-obi? app)
                  ;; Obi is with a displayed Sith, so no lookup.
                  ;; See observer for cancel of outstanding lookup
                  nil

                  :default
                  (send-xhr :load-sith
                    (str "http://localhost:3000/dark-jedis/" sith-id)
                    {:cancel (async/chan)})))

    :response (cF+ [:obs (fn [slot me info]
                           ;;(prn :obs! info)
                           (when info
                             ;;(prn :info! info)
                             (when-not (with-obi? app)
                               ;;(prn :not-with! info)
                               (with-cc :load-info
                                 ;; info cannot be function of response because
                                 ;; lookup is a function of info: with-obi? uses
                                 ;; info to decide, and lookup...hang on...
                                 ;; TODO: make lookup dead simple, have info
                                 ;; just watch response,
                                 ;; have with-obi? observer abort any lookup.
                                 ;;(prn :mset!!!  info me)
                                 (mset!> me :info info)))))]
                (when-let [lku (lookup me)]
                  (when-let [r (xhr-response lku)]
                    ;;(prn :resp! r (:status r))
                    (when (= 200 (:status r))
                      ;;(prn :200!! (:body (xhr-response lku)))
                      (:body (xhr-response lku))))))

    :info (cI nil :obs obs-sith-info)
    :with-obi? (cF (when-let [obi-loc (<mget app :obi-loc)]
                     (when-let [i (info me)]
                       (= (get-in i [:homeworld :name])
                         obi-loc))))))

(defmethod not-to-be [::Sith] [me]
  (when-let [lku (lookup me)]
    (when-let [xhr (<mget lku :xhr)]
      (when (.isActive xhr)
        (.abort xhr)))))