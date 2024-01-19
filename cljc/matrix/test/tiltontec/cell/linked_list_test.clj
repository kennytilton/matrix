(ns tiltontec.cell.linked-list-test
  (:require
   [clojure.test :refer [deftest is]]
   [tiltontec.cell.base :as cty]
   [tiltontec.cell.core :refer [cF cF+ cI with-c-conj]]
   [tiltontec.cell.integrity :refer [with-cc]]
   [tiltontec.model.core :refer [make mget mset!]]))

(def n-events 1000)

(defn link-e
  [_prop _me new prior _c]
  (with-cc :link-e
    (when (and (not= cty/unbound prior)
               (not (nil? prior)))
      (mset! prior :next new))

    (when (and (not= cty/unbound new)
               (not (nil? new)))
      (mset! new :previous prior))))

(defn model []
  (make :event-in (cI nil)
        :event (cF+ [:watch link-e]
                    (when-let [e-in (mget me :event-in)]
                      (make ::event
                            :previous (cI nil)
                            :next (cI nil)
                            :timestamp #_(:timestamp e-in)  (cF (:timestamp e-in))
                            :index (cF (or (let [previous (mget me :previous)]
                                             (when (and previous (not= previous cty/unbound))
                                               (inc (mget previous :index))))
                                           0)))))
        :events-out (cF (with-c-conj []
                          (mget me :event)))))

(defn load-input [m]
  (doseq [i (range n-events)]
    (mset! m :event-in {:timestamp (str i)})))

(defn create-model []
  (let [m (model)]
    (load-input m)
    m))

(deftest induction-test
  (time (let [m (create-model)]
          (is (= (map str (range n-events))
                 (map (comp :timestamp deref) (mget m :events-out)))))))