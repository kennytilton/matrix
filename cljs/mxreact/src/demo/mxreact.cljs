(ns demo.mxreact
  (:require-macros [demo.mxreact])
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
    [react]))

;(def <> react/createElement)

(defn ^js/React get-react [] react)

(def sid-latest (atom 0))
(def rendering-sid-latest (atom 0))

(defn mxweb-init! []
  (reset! sid-latest 0)
  (reset! rendering-sid-latest 0))

(def ssdict (atom {}))
(defn set-state-record [me setter]
  ;;(prn :recording-new-set-state (mget me :sid))
  (swap! ssdict assoc (mget me :sid) setter))
(defn set-state-unrecord [me]
  ;;(prn :setstate-unrecord (mget me :sid))
  (swap! ssdict dissoc (mget me :sid)))

(def refdict (atom {}))
(defn ref-record [me ref]
  (swap! refdict assoc (mget me :sid) ref))
(defn ref-get [me]
  (get @refdict (mget me :sid)))
(defn ref-unrecord [me]
  ;;(prn :refunrecord (mget me :sid))
  (swap! refdict dissoc (mget me :sid)))

(defn fm*
  ([me name] (fm* me name true))
  ([me name must-find?]
   (fget name me
     :me? true
     :inside? true
     :up? true
     :must? must-find?)))

(defmethod not-to-be [:mxreact.mxreact/matrixrn.elt] [me]
  ;; normally called by kids observer, but we shadow that
  ;;(prn :not-to-be-entry!!!! me)
  (set-state-unrecord me)
  (ref-unrecord me)
  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))
  (not-to-be-self me))

(defn state-hook-set! [me slot]
  (if-let [sid (mget me :sid)]
    (if-let [set-state-fn (get @ssdict sid)]
      (do                                                   ;; try hhack
        #_(prn :shs-sets-state!!!!! :sid sid :pulse (pulse-now) :slot slot (mget me :name)
            (mdead? me) (ia-type me) #_#_:meta (meta me))
        (set-state-fn (pulse-now)))
      (prn :shs-no-state-fn!!! (mget me :name) sid))
    (prn :shs-no-sid!! (mget me :name) me)))

(defmethod observe-by-type [:mxreact.mxreact/matrixrn.elt] [slot me newv oldv cell]
  (prn :obs-type-matrixrn-elt-entry??? slot (mget me :name)(mget me :sid))
  (when (not= oldv unbound)
    ;; ^^^ observe forced anyway on new cells, when (= oldv unbound), so do not bother
    (prn :obs-by-type-setting-state slot (mget me :name) (mget me :sid) #_(meta me) (mdead? me))
    (state-hook-set! me slot)))

(defn mkfn [tag mx-props jsx-props & kids]
  (md/make :mxreact.mxreact/matrixrn.elt
    :sid (swap! demo.mxreact/sid-latest inc)
    :react-element
    #_(demo.mxreact/$ :div {} (str (first kids) ":" (rand-int 99999)))
    (tiltontec.cell.core/cF
      (prn :creating-elt!!!!)
      ;; (demo.mxreact/$ "div" {} (str (first kids) " oxr " (rand-int 99999)))
      ;;+ (.createElement (get-react) ~type nil ~@args)
      ;;+ (.createElement (get-react) "div" nil "BAM")
      #_(demo.mxreact/$ :div {} (str (first kids) ":" (rand-int 99999)))
      (.createElement (get-react)
        (demo.mxreact/component-with-hooks
          (.createElement (get-react) (name tag)
            (cljs.core/clj->js jsx-props)
            kids))))))