(ns tiltontec.tag.gen
  (:require
    #?(:cljs [goog.dom.forms :as form])
    #?(:clj [clojure.pprint :refer :all]
       :cljs cljs.pprint :clj :refer [pprint cl-format])
    [tiltontec.cell.base :refer [md-ref? ia-type unbound]]
    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
    [tiltontec.model.core :refer [make md-get] :as md]))

(def +tag-sid+ (atom -1))

(defn tag-init! []
  (reset! +tag-sid+ -1))

(def tag-by-id (atom {}))

(defn dom-tag [dom]
  (let [tag (get @tag-by-id (.-id dom))]
    (assert tag (str "dom-tag did not find js for id " (.-id dom)
                     " of dom " dom))
    tag))

(defn make-tag [tag attrs c?kids]
  ;;(assert (not (contains? attrs :id)) "Attribute :id is reserved for the Tag library")
  (let [tag-id (str (or (:id attrs)
                        (swap! +tag-sid+ inc)))
        attrs (dissoc attrs :id)
        mx-tag (apply make
                      :type :tiltontec.tag.html/tag
                      :tag tag
                      :id tag-id
                      (conj (vec (apply concat (seq attrs)))
                            :kids c?kids))]
    (swap! tag-by-id assoc tag-id mx-tag)
    mx-tag))

(defmethod not-to-be [:tiltontec.tag.html/tag] [me]
  ;; todo: worry about leaks
  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))
  (swap! tag-by-id dissoc (md-get me :id))
  (not-to-be-self me))

(defmacro deftag [tag]
  (let [kids-sym (gensym "kids")
        tag-name (str tag)
        attrs-sym (gensym "attrs")]
    `(defmacro ~tag [~attrs-sym & ~kids-sym]
       `(tiltontec.tag.gen/make-tag ~~tag-name ~~attrs-sym
                                    (tiltontec.model.core/c?kids ~@~kids-sym)))))

(defmacro deftags [& tags]
  `(do ~@(for [tag tags]
           `(deftag ~tag))))

;;; This....
(declare section section label header footer h1 input p span a img ul li div button)

;;; ...avoids mistaken/benign warnings from this:
(deftags section section label header footer h1 input p span a img ul li div button)

;;; n.b. Above list of tags needs to be extended, or just use make-tag

;;; --- event conveniences -------------------

(defn evt-tag [e]
  (dom-tag (.-target e)))

#?(:cljs
   (defn target-value [evt]
     (form/getValue (.-target evt))))

