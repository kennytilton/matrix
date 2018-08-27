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
     :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-abort xhr-await xhr-status xhr-response
             xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
             xhr-selection xhr-to-map xhr-name-to-map]]
    [cljs.core.async :as async]))

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

(defn sith-lookup-abort [me]
  (when-let [lku (lookup me)]
    (when-not (xhr-response lku)
      ;; TODO move to new mxxhr/xhr-abort
      (xhr-abort lku))))

(defn make-sith [app sith-id]
  (md/make ::Sith
    :par app
    :sith-id sith-id

    :lookup (cF (send-xhr :load-sith
                  (str "http://localhost:3000/dark-jedis/" sith-id)
                  {:cancel (async/chan)}))

    :info (cF+ [:obs obs-sith-info]
            (when-let [r (xhr-response (lookup me))]
              (when (= 200 (:status r))
                (:body r))))

    :with-obi? (cF+ [:obs (fn [slot me with?]
                            (when with?
                              (sith-lookup-abort me)))]
                 (when-let [obi-loc (<mget app :obi-loc)]
                   (when-let [i (info me)]
                     (= (get-in i [:homeworld :name])
                       obi-loc))))))

(defmethod not-to-be [::Sith] [me]
  (sith-lookup-abort me)
  ;; todo move abort into not-to-be of lookup???
  (not-to-be (lookup me)))