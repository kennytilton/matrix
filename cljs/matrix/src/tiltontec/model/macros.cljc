(ns tiltontec.model.macros
  (:require 
   [tiltontec.cell.base :refer [ia-type]]))

(defmacro pme [& mas]
  `(when true ;;  (= :login (:name (deref ~'me)))
     (println (ia-type ~'me)
     	(:tag (deref ~'me))
       (:name (deref ~'me)) ~@mas)))
