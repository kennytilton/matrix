(ns tiltontec.mxweb.base
  (:require
    [goog.dom :as dom]
    [tiltontec.util.base :refer [type-cljc]]
    [tiltontec.model.core
     :refer [mget fasc fm! make mset! backdoor-reset!]
     :as md]))

(defn tag? [me]
  (= (type-cljc me) :mxweb.base/tag))

(defn kw$ [kw]
  ;; use this wherever we might want to allow a keyword instead of an
  ;; attribute value or style value string, eg a class or color
  (if (keyword? kw)
    (name kw)
    kw))

(defn tag-dom [me]
  ;; This will return nil when 'me' is being awakened and rules
  ;; are firing for the first time, because 'me' has not yet
  ;; been installed in the actual DOM, so call this only
  ;; from event handlers and the like.
  (let [id (mget me :id)]
    (assert id)
    (or (:dom-cache @me)                                    ;; todo make this another backdoor fn (and use meta?)
      (if-let [dom (dom/getElement (str id))]
        (backdoor-reset! me :dom-cache dom)
        #_(println :benign?-html-no-element id :found)))))
