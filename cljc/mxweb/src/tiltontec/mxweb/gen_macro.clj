(ns tiltontec.mxweb.gen-macro
  (:refer-clojure :exclude [map meta time])
  (:require
    [tiltontec.mxweb.gen :refer [make-tag]]))

(defmacro deftag [tag]
  (let [kids (gensym "kids")
        vargs (gensym "vargs")
        tag-name (gensym "mxweb-name")]
    `(defmacro ~tag [& ~vargs]
       (let [~tag-name (str '~tag)]
         (cond
           (nil? ~vargs)
           `(tiltontec.mxweb.gen/make-tag ~~tag-name {} {} nil)

           (map? (first ~vargs))
           (cond
             (map? (second ~vargs))
             `(tiltontec.mxweb.gen/make-tag ~~tag-name ~(first ~vargs) ~(second ~vargs)
                ~(when-let [~kids (seq (nthrest ~vargs 2))]
                   `(tiltontec.model.core/cFkids ~@~kids)))

             :default `(tiltontec.mxweb.gen/make-tag
                         ~~tag-name ~(first ~vargs)
                         {}
                         ~(when-let [~kids (seq (nthrest ~vargs 1))]
                            `(tiltontec.model.core/cFkids ~@~kids))))

           :default `(tiltontec.mxweb.gen/make-tag
                       ~~tag-name {} {}
                       (tiltontec.model.core/cFkids ~@~vargs)))))))

(defmacro deftags [& tags]
  `(do ~@(for [tag tags]
           `(deftag ~tag))))

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
