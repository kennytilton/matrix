(ns tiltontec.mxweb.base
  (:require [tiltontec.util.base :refer [type-cljc]]))

(defn tag? [me]
  (= (type-cljc me) :mxweb.base/tag))

(defn kw$ [kw]
  ;; use this wherever we might want to allow a keyword instead of an
  ;; attribute value or style value string, eg a class or color
  (if (keyword? kw)
    (name kw)
    kw))
