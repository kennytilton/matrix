(ns tiltontec.learn.util
  (:require
    [cheshire.core :refer :all]))

(defn pgr-prn [& bits]
  (prn :------------)
  (apply prn bits))

(defn obs-slot-new [slot-name me new-value prior-value cell]
  ;;; me: is like self or this.
  ;;; prior-value: will be tiltontec.cell.base/unbound when a rule computes its initial value
  ;;; cell: the cell data structure that supports the entire reactive dataflow. We rarely need that in an observer, but
  ;;;       it can be handy on hard debugging cases.
  (prn slot-name :now new-value))

(defn parse-json$
  ([j$] (parse-json$ j$ true))
  ([j$ keywordize]
   (parse-string j$ keywordize)))