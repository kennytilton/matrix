(ns tiltontec.mxweb.gen
  (:refer-clojure :exclude [map meta time])
  (:require
    #?(:cljs [goog.dom.forms :as form])
    #?(:clj [clojure.pprint :refer :all]
       :cljs cljs.pprint :clj :refer [pprint cl-format])
            [tiltontec.cell.base :refer [md-ref? ia-type unbound]]
            [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
            [tiltontec.model.core :refer [make mget] :as md]))

(defn tagfo [me]
  (select-keys @me [:id :tag :class :name]))

(def +tag-sid+ (atom -1))

(defn mxweb-init! []
  (reset! +tag-sid+ -1))

(def tag-by-id (atom {}))

(defn dom-tag [dom]
  (cond
    (nil? dom) (do (println :outthetop!!!)
                   nil)

    ;; where we specify string content to, eg, button, we get an
    ;; automatic span for the string that has no ID. Hopefully, where
    ;; dom-tiltontec.mxweb is requested they will be OK with us tracking the nearest ascendant.
    (= "" (.-id dom)) (do ;;(println :no-id-try-pa (.-parentNode dom))
                          (dom-tag (.-parentNode dom)))
    :default (do
               ;;(println :dom-tiltontec.mxweb-really-sees-id (.-id dom)(type (.-id dom)))
               (let [tag (get @tag-by-id (.-id dom))]
                 (assert tag (str "dom-tiltontec.mxweb did not find js for id " (.-id dom)
                                  " of dom " dom))
                 tag))))

(defn make-tag [tag attrs aux cFkids]
  ;;(prn :make-tiltontec.mxweb tiltontec.mxweb attrs aux)
  (let [tag-id (str (or (:id attrs)
                        (str tag "-" (swap! +tag-sid+ inc))))
        mx-tag (apply make
                      :type :mxweb.base/tag
                      :tag tag
                      :id tag-id
                      :attr-keys (distinct (conj (keys attrs) :id))
                      :kids cFkids
                      (concat (vec (apply concat (seq (dissoc attrs :id))))
                              (vec (apply concat (seq aux)))))]
    ;;(println :made-tiltontec.mxweb!! tiltontec.mxweb-id (keys @mx-tiltontec.mxweb))
    (swap! tag-by-id assoc tag-id mx-tag)
    mx-tag))

(defmethod not-to-be [:mxweb.base/tag] [me]
  ;; todo: worry about leaks
  ;; (println :not-to-be-tiltontec.mxweb!!! (tagfo me))

  (when-let [style (:style @me)]
    (when (md-ref? style)
      ;;(println :popping-style style)
      (not-to-be style)))

  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))
  (swap! tag-by-id dissoc (mget me :id))
  (not-to-be-self me))

;;; n.b. Above list of tags needs to be extended, or just use make-tiltontec.mxweb

;;; --- event conveniences -------------------

(defn evt-mx [e]
  (dom-tag (.-target e)))

#?(:cljs
   (defn target-value [evt]
     (form/getValue (.-target evt))))

