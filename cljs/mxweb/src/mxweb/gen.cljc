(ns mxweb.gen
  (:refer-clojure :exclude [map meta time])
  (:require
    #?(:cljs [goog.dom.forms :as form])
    #?(:clj [clojure.pprint :refer :all]
       :cljs cljs.pprint :clj :refer [pprint cl-format])
            [tiltontec.cell.base :refer [md-ref? ia-type unbound]]
            [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
            [tiltontec.model.core :refer [make <mget] :as md]))

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
    ;; dom-mxweb is requested they will be OK with us tracking the nearest ascendant.
    (= "" (.-id dom)) (do ;;(println :no-id-try-pa (.-parentNode dom))
                          (dom-tag (.-parentNode dom)))
    :default (do
               ;;(println :dom-mxweb-really-sees-id (.-id dom)(type (.-id dom)))
               (let [tag (get @tag-by-id (.-id dom))]
                 (assert tag (str "dom-mxweb did not find js for id " (.-id dom)
                                  " of dom " dom))
                 tag))))

(defn make-tag [tag attrs aux cFkids]
  ;;(prn :make-mxweb mxweb attrs aux)
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
    ;;(println :made-mxweb!! mxweb-id (keys @mx-mxweb))
    (swap! tag-by-id assoc tag-id mx-tag)
    mx-tag))

(defmethod not-to-be [:mxweb.base/tag] [me]
  ;; todo: worry about leaks
  ;; (println :not-to-be-mxweb!!! (tagfo me))

  (when-let [style (:style @me)]
    (when (md-ref? style)
      ;;(println :popping-style style)
      (not-to-be style)))

  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))
  (swap! tag-by-id dissoc (<mget me :id))
  (not-to-be-self me))

(defmacro deftag [tag]
  (let [kids (gensym "kids")
        vargs (gensym "vargs")
        tag-name (gensym "mxweb-name")]
    `(defmacro ~tag [& ~vargs]
       (let [~tag-name (str '~tag)]
         (cond
           (nil? ~vargs)
           `(mxweb.gen/make-tag ~~tag-name {} {} nil)

           (map? (first ~vargs))
           (cond
             (map? (second ~vargs))
             `(mxweb.gen/make-tag ~~tag-name ~(first ~vargs) ~(second ~vargs)
                                          ~(when-let [~kids (seq (nthrest ~vargs 2))]
                                             `(tiltontec.model.core/cFkids ~@~kids)))

             :default `(mxweb.gen/make-tag
                         ~~tag-name ~(first ~vargs)
                         {}
                         ~(when-let [~kids (seq (nthrest ~vargs 1))]
                            `(tiltontec.model.core/cFkids ~@~kids))))

           :default `(mxweb.gen/make-tag
                       ~~tag-name {} {}
                       (tiltontec.model.core/cFkids ~@~vargs)))))))

(defmacro deftags [& tags]
  `(do ~@(for [tag tags]
           `(deftag ~tag))))

;;; This....
(declare a abbr acronym address applet area article aside audio b base basefont bdi bdo bgsound big blink
         blockquote body br button canvas caption center cite code col colgroup command content
         data datalist dd del details dfn dialog dir div dl dt element em embed
         fieldset figcaption figure font footer form frame frameset
         h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe image img input ins isindex kbd keygen
         label legend li link listing main map mark marquee menu menuitem meta meter multicol
         nav nextid nobr noembed noframes noscript object ol optgroup option output
         p param picture plaintext pre progress q rp rt rtc ruby
         s samp script section select shadow slot small source spacer span strike strong style sub summary sup
         table tbody td template textarea tfoot th thead time title tr track tt u ul var video wbr xmp)

;;; ...avoids mistaken/benign warnings from this:
;;;(deftags h1 h3 p a span button input section header footer ul div label li img)

(deftags a abbr acronym address applet area article aside audio b base basefont bdi bdo bgsound big blink
         blockquote body br button canvas caption center cite code col colgroup command content
         data datalist dd del details dfn dialog dir div dl dt element em embed
         fieldset figcaption figure font footer form frame frameset
         h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe image img input ins isindex kbd keygen
         label legend li link listing main map mark marquee menu menuitem meta meter multicol
         nav nextid nobr noembed noframes noscript object ol optgroup option output
         p param picture plaintext pre progress q rp rt rtc ruby
         s samp script section select shadow slot small source spacer span strike strong style sub summary sup
         table tbody td template textarea tfoot th thead time title tr track tt u ul var video wbr xmp)


;;; n.b. Above list of tags needs to be extended, or just use make-mxweb

;;; --- event conveniences -------------------

(defn evt-tag [e]
  (dom-tag (.-target e)))

#?(:cljs
   (defn target-value [evt]
     (form/getValue (.-target evt))))

