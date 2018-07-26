(ns mxweb.base
  (:require [tiltontec.util.base :refer [type-cljc]]))

(defn tag? [me]
  (= (type-cljc me) :mxweb.base/tag))
