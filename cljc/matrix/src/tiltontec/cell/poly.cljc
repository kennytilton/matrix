(ns tiltontec.cell.poly
  (:require
    [tiltontec.util.base
     :refer [mx-type]]))

;;; --- life cycle -------------------

(defmulti c-awaken mx-type)

(defmulti md-quiesce mx-type)

;;; --- watch --------------------------

(defmulti watch-by-type (fn [prop-name me new-val old-val c]
                          [(mx-type me)]))

(defmethod watch-by-type :default [prop me new-val old-val c])

(defmulti watch (fn [prop-name me new-val old-val c]
                  [prop-name (mx-type me)]))

(def +watch-default-handler+ (atom nil)) ;; todo excessive flexibility? debugging?

(defmethod watch :default [prop me new-val old-val c]
  (if-let [w @+watch-default-handler+]
    (do                                                     ;; (println :app-def-obs-hanler!!!)
      (w prop me new-val old-val c))
    (watch-by-type prop me new-val old-val c)))

