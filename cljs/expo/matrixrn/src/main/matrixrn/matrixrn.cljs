(ns matrixrn.matrixrn
  (:require-macros [matrixrn.matrixrn])
  ;;(:refer-clojure :exclude [meta time])
  (:require
    [cljs.pprint :refer [pprint cl-format]]
    [tiltontec.cell.base :refer [md-ref? mdead? ia-type unbound c-pulse pulse-now]]
    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
    [tiltontec.cell.observer :refer [observe observe-by-type]]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [make matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             fm-kids-observe kid-values-kids] :as md]
    [applied-science.js-interop :as j]
    [react]
    ["@react-navigation/bottom-tabs" :as rn-bottom-tabs]))

(def <> react/createElement)

(def sid-latest (atom 0))
(def rendering-sid-latest (atom 0))

;; apparently we call a function to get an object of components
;; keyed Navigator, Screen, et al. Usage: (let
(defonce Tab (js->clj
               (rn-bottom-tabs/createBottomTabNavigator)
               :keywordize-keys true))
(defonce Navigator (:Navigator Tab))
(defonce Group (:Group Tab))
(defonce Screen (:Screen Tab))

;;; --- Material Bottom Tab would be more easily set up with managed Expo app
;;;
;(defn matabs []
;  (js->clj
;    (material-bottom-tabs/createMaterialBottomTabNavigator)
;    :keywordize-keys true))

;(defonce MTab (js->clj (rn-bottom-tabs/createMaterialBottomTabNavigator) :keywordize-keys true))
;; import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
;(defonce MNavigator (:Navigator Tab))
;(defonce MGroup (:Group Tab))
;(defonce MScreen (:Screen Tab))

(defn mxweb-init! []
  (reset! sid-latest 0)
  (reset! rendering-sid-latest 0))

(def ssdict (atom {}))
(defn set-state-record [me setter]
  (prn :recording-new-set-state (mget me :sid))
  (swap! ssdict assoc (mget me :sid) setter))
(defn set-state-unrecord [me]
  (prn :setstate-unrecord (mget me :sid))
  (swap! ssdict dissoc (mget me :sid)))

(def refdict (atom {}))
(defn ref-record [me ref]
  (swap! refdict assoc (mget me :sid) ref))
(defn ref-get [me]
  (get @refdict (mget me :sid)))
(defn ref-unrecord [me]
  (prn :refunrecord (mget me :sid))
  (swap! refdict dissoc (mget me :sid)))

(defn fm*
  ([me name] (fm* me name true))
  ([me name must-find?]
   (fget name me
     :me? true
     :inside? true
     :up? true
     :must? must-find?)))

(defmethod not-to-be [:matrixrn.matrixrn/matrixrn.elt] [me]
  ;; normally called by kids observer, but we shadow that
  (prn :not-to-be-entry!!!! me)
  (set-state-unrecord me)
  (ref-unrecord me)
  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))
  (not-to-be-self me))

(defn state-hook-set! [me slot]
  (if-let [sid (mget me :sid)]
    (if-let [set-state-fn (get @ssdict sid)]
      (do ;; try hhack
        (prn :shs-sets-state!!!!! :sid sid :pulse (pulse-now) :slot slot (mget me :name)
          (mdead? me) (ia-type me) #_#_ :meta (meta me))
        (set-state-fn (pulse-now)))
      (prn :shs-no-state-fn!!! (mget me :name) sid))
    (prn :shs-no-sid!! (mget me :name) me)))

(defmethod observe-by-type [:matrixrn.matrixrn/matrixrn.elt] [slot me newv oldv cell]
  ; (prn :obs-type-matrixrn-elt-entry slot (mget me :name)(mget me :sid))
  (when (not= oldv unbound)
    ;; ^^^ observe forced anyway on new cells, when (= oldv unbound), so do not bother
    (when (= slot :kids)
      ;; we need PROGN method combo. Right now this method shadows the :kids observer.
      ;; We jury rig in the call-next-method, but todo true solution needed
      (prn :obsing-kids!!!!!!!!! slot (mget me :name)(mget me :sid))
      (fm-kids-observe me newv oldv cell))
    ;; todo have Matrix check for per-cell observers and execute
    (prn :obs-by-type-setting-state slot (mget me :name)(mget me :sid) #_ (meta me) (mdead? me))
    (state-hook-set! me slot)))

