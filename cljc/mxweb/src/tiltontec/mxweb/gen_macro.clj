(ns tiltontec.mxweb.gen-macro
  (:refer-clojure :exclude [map meta time filter set symbol use])
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

(defmacro defsvg [svg]
  (let [kids (gensym "kids")
        vargs (gensym "vargs")
        svg-name (gensym "mxweb-name")]
    `(defmacro ~svg [& ~vargs]
       (let [~svg-name (str '~svg)]
         (cond
           (nil? ~vargs)
           `(tiltontec.mxweb.gen/make-svg ~~svg-name {} {} nil)

           (map? (first ~vargs))
           (cond
             (map? (second ~vargs))
             `(tiltontec.mxweb.gen/make-svg ~~svg-name ~(first ~vargs) ~(second ~vargs)
                ~(when-let [~kids (seq (nthrest ~vargs 2))]
                   `(tiltontec.model.core/cFkids ~@~kids)))

             :default `(tiltontec.mxweb.gen/make-svg
                         ~~svg-name ~(first ~vargs)
                         {}
                         ~(when-let [~kids (seq (nthrest ~vargs 1))]
                            `(tiltontec.model.core/cFkids ~@~kids))))

           :default `(tiltontec.mxweb.gen/make-svg
                       ~~svg-name {} {}
                       (tiltontec.model.core/cFkids ~@~vargs)))))))

(defmacro deftags [& tags]
  `(do ~@(for [tag tags]
           `(deftag ~tag))))

(defmacro defsvgs [& svgs]
  `(do ~@(for [svg svgs]
           `(defsvg ~svg))))

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

(defsvgs altGlyph altGlyphDef altGlyphItem animate animateColor animateMotionexample
  animateTransformexample circle circleexample clipPath cursor defs desc discardexample ellipse
  ellipseexample feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix
  feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB
  feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset
  fePointLight feSpecularLighting feSpotLight feTile feTurbulence
  filter font font-face font-face-format font-face-name font-face-src font-face-uri foreignObject
  g glyph glyphRef hatch hatchpath hkern image line linearGradient marker mask metadata
  missing-glyph mpathexample path pattern polygon polyline radialGradient rect
  set solidcolor stop svg switch symbol text textPath title tref tspan use view vkern)
