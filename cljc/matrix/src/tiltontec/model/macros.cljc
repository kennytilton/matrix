(ns tiltontec.model.macros
  (:require 
   [tiltontec.util.base :refer [mx-type]]))

(defmacro pme [& mas]
  `(when true ;;  (= :login (:name (deref ~'me)))
     (println (mx-type ~'me)
     	(:tag (deref ~'me))
       (:name (deref ~'me)) ~@mas)))
