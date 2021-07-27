(ns todo-mvc.build
  (:require [cljs.pprint :as pp]
            [cljs-time.coerce :as tmc]
            [clojure.string :as str]
    ;[bide.core :as r]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]

            [tiltontec.util.core :refer [pln xor now]]
            [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [unbound ia-type *within-integrity* *defer-changes*]]
            [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]


            [tiltontec.model.core
             :refer-macros [cFkids with-par]
             :refer [matrix mx-par mget mset! mswap!
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]

    ;[goog.dom :as dom]
    ;[goog.dom.classlist :as classlist]
    ;[goog.editor.focus :as focus]
    ;[goog.dom.selection :as selection]
            [goog.events.Event :as event]
            [goog.dom.forms :as form]

            [helix.core :as hx :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [helix.impl.props :as impl.props]

            [todo-mvc.components :as c]
            [todo-mvc.lib :refer [defnc]]
            [todo-mvc.mxreact :as mxr]
            ))

(declare mx-find-matrix)

(defnc App
  []
  (let []
    (pln :bam-mx)

    (d/div
      (d/section
        {:class "todoapp"}
        (d/header
          {:class "header"}
          (c/title))))))
;;; --- the beef: matrix-build! ------------------------------------------

(defnc Title2
  [props]
  (let [[_ ss] (hooks/use-state 0)]
    (when-let [sid (:sid props)]
      (swap! mxr/ssdict assoc sid ss))
    (d/h1 {} {}
      (str "Todos " (:mas props) ":" (rand-int 32767)))))

(defnc Title3
  [props]
  (let [[_ ss] (hooks/use-state 0)
        ref3 (hooks/use-ref nil)]
    (when-let [sid (:sid props)]
      (swap! mxr/refdict assoc sid ref3)
      (when-not (get @mxr/ssdict sid)
        (swap! mxr/ssdict assoc sid ss)))
    (d/h1 {:ref ref3 :on-click (:on-click props)} {}
      (str "Todos " (:mas props) ":" (rand-int 32767) ":count=" (mget (:me props) :counter)))))

(defnc Div5
  [props]
  (let [[_ ss] (hooks/use-state 0)]
    (when-let [sid (:sid props)]
      (when-not (get @mxr/ssdict sid)
        (prn :storing-div5 sid ss)
        (swap! mxr/ssdict assoc sid ss)))
    (let [ctr4 (mxr/mxu! (:me props) :counter42)]
      (d/h1 {} {}
        (str "Div5 sees counter =" (mget ctr4 :counter))))))

(defnc Div6
  [{:keys [me]}]
  (let [[_ set-state] (hooks/use-state 0)]
    (mxr/set-state-record me set-state)                     ;; <-- used by Matrix on-change handler to trigger re-render
    (d/h1 {} {}
      (str "div6 " (mget me :feed)))))

(defn matrix-build! []
  (reset! mxr/ssdict {})
  (reset! mxr/refdict {})
  (reset! matrix (md/make ::hxApp
                   :rx-dom (cFonce (with-par me
                                     ;; OK (mxr/make-rnc "p" {} {:content "Just P"} nil)
                                     (mxr/make-rnc "div" {} {}
                                       (cFkids
                                         (mxr/make-rnc-ex "button"
                                           {:name      :counter42
                                            :content   (cF (str "Boom " (mget me :counter)))
                                            :hiya      "Hiya"
                                            :rendering (cF ($ Title3 {:me       me :sid (mget me :sid) :mas (mget me :hiya)
                                                                      :on-click (fn [e]
                                                                                  (prn :click (.. e -target))
                                                                                  ;; todo find self via ref
                                                                                  (let [ctr (mxr/mx* me :counter42)]
                                                                                    (mswap! me :counter inc)))}))}
                                           {:counter (cI 2)})
                                         (mxr/make-rnc-ex "div"
                                           {:feed      (cF (str "FNC " (mget (mxr/mxu! me :counter42) :counter)))
                                            :rendering (cFonce ;; ($ Div6 {:me      me})
                                                         ($ (hx/fnc []
                                                              (let [[_ set-state] (hooks/use-state 0)]
                                                                (mxr/set-state-record me set-state) ;; <-- used by Matrix on-change handler to trigger re-render
                                                                (d/h1 {:on-click (fn [e]
                                                                                   (prn :click (.. e -target))
                                                                                   ;; todo find self via ref
                                                                                   (mswap! (mxr/mxu! me :counter42) :counter dec))} {}
                                                                  (str "div7! " (mget me :feed)))))))}
                                           {})
                                         (mxr/make-rnc-ex "div"
                                           {:name :multi-parent
                                            :rendering (cF
                                                         ($ (hx/fnc []
                                                              (let [[_ set-state] (hooks/use-state 0)]
                                                                (prn :recording-multi-par-ss
                                                                  (mget me :name)
                                                                  (mget me :sid))
                                                                (mxr/set-state-record me set-state)
                                                                (apply $ "div" {} {}
                                                                  (doall (map #(mget % :rendering)
                                                                             (mget me :kids))))))))}
                                           {}
                                           (cFkids
                                             (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
                                               (mxr/make-rnc-ex "p"
                                                 {:rendering (cFonce
                                                               ($ (hx/fnc []
                                                                    (d/p {} {}
                                                                        (str "pgr " n)))))}
                                                 {}))))
                                         )))))))

(comment
  (mxr/make-rx
    :feed (cF (str "Fed Content " (mget (mxr/mxu! me :counter42) :counter)))
    :rendering (cFonce ($ (lambdac [{:keys [me]}]
                            (let [[_ set-state] (hooks/use-state 0)]
                              (mxr/set-state-record me set-state) ;; <-- used by Matrix on-change handler to trigger re-render
                              (d/h1 {} {}
                                (str "div6 " (mget me :feed))))) {:me me}))))
#_(defn mx-find-matrix [mx]
    (mxu-find-type mx ::hxApp))
