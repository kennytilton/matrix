(ns matrixrn.matrixrn
  (:require-macros [matrixrn.matrixrn])
  (:refer-clojure :exclude [meta time])
  (:require
    [cljs.pprint :refer [pprint cl-format]]
    [tiltontec.cell.base :refer [md-ref? ia-type unbound c-pulse pulse-now]]
    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
    [tiltontec.cell.observer :refer [observe observe-by-type]]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [make matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]
    [applied-science.js-interop :as j]))

(def sid-latest (atom 0))

(defn mxweb-init! []
  (reset! sid-latest 0))

(def ssdict (atom {}))
(defn set-state-record [me setter]
  (swap! ssdict assoc (mget me :sid) setter))
(defn set-state-unrecord [me]
  (swap! ssdict dissoc (mget me :sid)))

(defn mx*
  ([me name] (mx* me name true))
  ([me name must-find?]
   (fget name me
     :me? true
     :inside? true
     :up? true
     :must? must-find?)))

(defmethod not-to-be [::matrixrn.elt] [me]
  ;; todo: worry about leaks
  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))
  (set-state-unrecord me)
  (not-to-be-self me))

(defn state-hook-set! [me slot]
  (if-let [sid (mget me :sid)]
    (if-let [set-state-fn (get @ssdict sid)]
      (do
        ;(prn :shs-obs-sets-state!!!!!!!!! (pulse-now) me slot (mget me :name) sid)
        (set-state-fn (pulse-now)))
      (prn :shs-no-state-fn!!! (mget me :name) sid))
    (prn :shs-no-sid!! (mget me :name) me)))

(defmethod observe-by-type [::matrixrn.elt] [slot me newv oldv cell]
  ; (prn :obs-type-matrixrn-elt-entry slot (mget me :name)(mget me :sid))
  (when (not= oldv unbound)                                 ;; observe forced anyway on new cells
    ;(prn :setting-state slot (mget me :name)(mget me :sid))
    (state-hook-set! me slot)))