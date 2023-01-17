(ns tiltontec.mxweb.base
  (:require
    [goog.dom :as dom]
    [tiltontec.util.base :refer [type-cljc]]
    [tiltontec.model.core
     :refer [mget fasc fm! make mset! backdoor-reset!]
     :as md]))

(def ^:dynamic *mxweb-trace* false)

(defn tag? [me]
  (= (type-cljc me) :mxweb.base/tag))

(defn kw$ [kw]
  ;; use this wherever we might want to allow a keyword instead of an
  ;; attribute value or style value string, eg a class or color
  (if (keyword? kw)
    (name kw)
    kw))

(defn mxwprn [& bits]
  (when *mxweb-trace*
    (apply prn :mxweb> bits)))

(defn tag-dom [me]
  ;; This will return nil when 'me' is being awakened and rules
  ;; are firing for the first time, because 'me' has not yet
  ;; been installed in the actual DOM, so call this only
  ;; from event handlers and the like.
  (let [id (mget me :id)
        dom-x (:dom-x (meta me))
        dom (or (:dom-cache @me)
                (backdoor-reset! me :dom-cache (dom/getElement (str id))))
        ]
    (when (nil? dom) (mxwprn :id-not-in-dom-or-cache id))
    (when (nil? dom-x) (mxwprn :no-dom-x (meta me)))
    (if (= dom dom-x)
      (mxwprn :dom-same!!!! dom)
      (mxwprn :don-not-eq dom (:dom-x (meta me))))

    (or dom dom-x)))