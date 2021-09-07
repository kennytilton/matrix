(ns mxrn.mxrgen
  (:require-macros [mxrn.mxrgen])
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
    [react]
    [react-native :as rn]
    [react-native-elements :as rne]
    [applied-science.js-interop :as j]))

(defn mxu
  "Searches up, excluding me, and must find."
  [me name]
  (fget name me
    :me? false
    :inside? false
    :must? true
    :up? true))

(defn js-ify [m]
  (j/lit m))

(def +tag-sid+ (atom -1))

(defn mxweb-init! []
  (reset! +tag-sid+ -1))

(def tag-by-id (atom {}))

(def ssdict (atom {}))
(defn set-state-record [me setter]
  (swap! ssdict assoc (mget me :sid) setter))

(def refdict (atom {}))
(defn ref-record [me ref]
  (swap! refdict assoc (mget me :sid) ref))

(def sid-latest (atom 0))

(defn mx*
  ([me name] (mx* me name true))
  ([me name must-find?]
   (fget name me
     :me? true
     :inside? true
     :up? true
     :must? must-find?)))

(defmethod not-to-be [::mxrn.elt] [me]
  ;; todo this is a mess: tag-by-id? no dict cleanup?
  ;; todo: worry about leaks
  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))
  ;; todo extend these APIs for cleanup
  (swap! tag-by-id dissoc (mget me :id))
  (swap! tag-by-id dissoc (mget me :ref))
  (not-to-be-self me))

(defn state-hook-set! [me slot]
  (if-let [sid (mget me :sid)]
    (if-let [set-state-fn (get @ssdict sid)]
      (do
        ;(prn :shs-obs-sets-state!!!!!!!!! (pulse-now) me slot (mget me :name) sid)
        (set-state-fn (pulse-now)))
      (prn :shs-no-state-fn!!! (mget me :name) sid))
    (prn :shs-no-sid!! (mget me :name) me)))

(defmethod observe-by-type [::mxrn.elt] [slot me newv oldv cell]
  ; (prn :obs-type-mxrn-elt-entry slot (mget me :name)(mget me :sid))
  (when (not= oldv unbound)                                 ;; observe forced anyway on new cells
    ;(prn :setting-state slot (mget me :name)(mget me :sid))
    (state-hook-set! me slot)))

(defn rn-element-with-state-hook
  "creates element wrapping rn-element with state hook registered to `me`"
  [me rn-element]
  (react/createElement
    (fn []
      (let [[_ set-state] (react/useState 0)]               ;; will get *pulse* on change
        (mxrn.mxrgen/set-state-record me set-state)
        rn-element))))