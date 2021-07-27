(ns todo-mvc.mxreact
  (:refer-clojure :exclude [meta time])
  (:require
    [helix.hooks :as hooks]
    [goog.dom.forms :as form]
    [cljs.pprint :refer [pprint cl-format]]
    [tiltontec.cell.base :refer [md-ref? ia-type unbound c-pulse]]
    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
    [tiltontec.cell.observer :refer [observe observe-by-type]]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [make matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]
    [helix.core :as hx :refer [$ <>]]))

(def +tag-sid+ (atom -1))

(defn mxweb-init! []
  (reset! +tag-sid+ -1))


(def tag-by-id (atom {}))

(def ssdict (atom {}))
(defn set-state-record [me setter]
  (swap! ssdict assoc (mget me :sid) setter))

(def refdict (atom {}))

(def sid-latest (atom 0))

(defn mxu! [me name]
  (fget name me
    :me? false
    :inside? false
    :must? true
    :up? true))

(defn mx*
  ([me name] (mx* me name true))
  ([me name must-find?]
   (fget name me
     :me? true
     :inside? true
     :up? true
     :must? must-find?)))

(defn make-rnc
  ([tag]
   (make-rnc tag {} {} nil))
  ([tag attributes]
   (make-rnc tag attributes {} nil))
  ([tag attributes aux]
   (make-rnc tag attributes aux nil))
  ([tag attrs aux cFkids]
   (prn :make-rnc tag cFkids)
   (let [tag-id (str (or (:id attrs)
                       (str tag "-" (swap! +tag-sid+ inc)))) ;; todo GUID
         #_(prn :aux-raw aux)
         #_(prn :addl-slots (concat (vec (apply concat (seq (dissoc attrs :id))))
                              (vec (apply concat (seq aux)))))
         mx-tag (apply make ::mxrn.elt
                  :tag tag
                  :id tag-id
                  :sid (swap! sid-latest inc)
                  :attr-keys (distinct (conj (keys attrs) :id))
                  :kids cFkids
                  :rendering (cF (apply $ (mget me :tag) attrs
                                   (or (when-let [c (mget me :content)]
                                         [c])
                                     (let [kids (mget me :kids)]
                                       (prn :rnc-kid-render! (map #(mget % :rendering)
                                                               (mget me :kids)))
                                       (doall (map #(mget % :rendering)
                                                (mget me :kids)))))))
                  (concat (vec (apply concat (seq (dissoc attrs :id))))
                    (vec (apply concat (seq aux)))))]
     ;;(println :made-mxweb!! mxweb-id (keys @mx-mxweb))
     (swap! tag-by-id assoc tag-id mx-tag)
     mx-tag)))

(defn make-rnc-ex
  ([tag]
   (make-rnc tag {} {} nil))
  ([tag attributes]
   (make-rnc tag attributes {} nil))
  ([tag attributes aux]
   (make-rnc tag attributes aux nil))
  ([tag attrs aux cFkids]
   (prn :make-rnc tag cFkids)
   (let [tag-id (str (or (:id attrs)
                       (str tag "-" (swap! +tag-sid+ inc)))) ;; todo GUID
         _ (prn :aux-raw aux)
         _ (prn :addl-slots (concat (vec (apply concat (seq (dissoc attrs :id))))
                              (vec (apply concat (seq aux)))))
         mx-tag (apply make ::mxrn.elt
                  :tag tag
                  :id tag-id
                  :attr-keys (distinct (conj (keys attrs) :id))
                  :kids cFkids
                  (concat (vec (apply concat (seq (dissoc attrs :id))))
                    (vec (apply concat (seq aux)))))]
     ;;(println :made-mxweb!! mxweb-id (keys @mx-mxweb))
     (swap! tag-by-id assoc tag-id mx-tag)
     mx-tag)))

(defmethod not-to-be [::mxrn.elt] [me]
  ;; todo: worry about leaks
  ;; (println :not-to-be-mxweb!!! (tagfo me))

  #_(when-let [style (:style @me)]
      (when (md-ref? style)
        ;;(println :popping-style style)
        (not-to-be style)))

  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))
  (swap! tag-by-id dissoc (mget me :id))
  (not-to-be-self me))

(defmethod observe-by-type [::mxrn.elt] [slot me newv oldv cell]
  ;; (prn :obs-by-type slot newv oldv me)
  (when (not= oldv unbound)                                 ;; observe forced anyway on new cells
    (prn :obs-by-type (mget me :name) slot)
    (when-let [set-state-fn (get @ssdict (mget me :sid))]
      (prn :rnc-obs-calls-set-state! (mget me :name) slot (mget me :sid) set-state-fn (c-pulse cell))
      ;; we could just set {} as the value; React does not check for change in value at all.
      ;; The trigger is simply invoking setState
      (set-state-fn #_(c-pulse cell) (rand-int 100000)))))