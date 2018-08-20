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
             xhr-selection xhr-to-map xhr-name-to-map]]))

(def SLOT-CT 5)

(defn info [me] (when me (<mget me :info)))
(defn lookup [me] (<mget me :lookup))
(defn sith-id [me] (<mget me :sith-id))
(defn with-obi? [me] (when me
                       (<mget me :with-obi?)))

(defn sith-id-inject [sith-id sith-ids where]
  (cond
    (and sith-id
         (< -1 where SLOT-CT)
         (not= sith-id (nth sith-ids where)))
    (vec (concat (subvec sith-ids 0 where)
           [sith-id]
           (subvec sith-ids (inc where))))

    :default sith-ids))

(defn obs-sith-info [slot me info]
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
  ;(prn :mksith sith-id)
  (md/make ::Sith
    :par app
    :sith-id sith-id
    :lookup (cF (cond
                  (info me)
                  ;; no need for lookup if we have the info already
                  nil

                  (with-obi? app)
                  ;; Obi is with a displayed Sith, abort any active lookup
                  (when-let [xhr (and cache
                                      (not= cache unbound)
                                      (<mget cache :xhr))]
                    (when (.isActive xhr)
                      (prn :aborting-lookup sith-id xhr)
                      (.abort xhr)
                      nil))

                  :default
                  (send-xhr (str "http://localhost:3000/dark-jedis/" sith-id))))
    :response (cF+ [:obs (fn [slot me info]
                           (when info
                             (when-not (with-obi? app)
                               ;; avoids circularity lookup <- info <-response <-lookup
                               (with-cc :load-info
                                 ;;(prn :setting-info info)
                                 (mset!> me :info info)))))]
                (when-let [lku (lookup me)]
                  (when (= 200 (:status (xhr-response lku)))
                    (:body (xhr-response lku)))))
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