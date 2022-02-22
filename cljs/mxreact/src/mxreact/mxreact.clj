(ns mxreact.mxreact)


(defmacro $
  [type & args]

  (let [type (if (keyword? type)
               (name type)
               type)]
    (cond
      (map? (first args))
      `^js/React.Element (.createElement
                           (get-react)
                           ~type
                           (cljs.core/clj->js ~(first args))
                           ~@(rest args))

      :else `^js/React.Element (.createElement (get-react) ~type nil ~@args))))

(defmacro with-props [[& inherited] static-props]
  `(merge (into {} (for [prop# [~@inherited]]
                     (let [[pkey# pget#] (if (vector? prop#)
                                           prop#
                                           [prop# prop#])]
                       [pkey# (tiltontec.model.core/mget ~'me pget#)])))
     ~static-props))

(defmacro component-with-hooks [& body]
  `(fn []
     (let [[~'_ set-state#] (.useState (get-react) 0)
           ;; todo test refs
           ref# (when (tiltontec.model.core/mget ~'me :use-ref?)
                  (.useRef (get-react) :ref-undefined))]
       (mxreact.mxreact/set-state-record ~'me set-state#)
       (when ref#
         (mxreact.mxreact/ref-record ~'me ref#))
       ~@body)))


(defmacro mx$ [textFormulaBody]
  ;; we create Text with a string child, but one potentially reactive
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :mxreact.mxreact/matrixrn.elt
       :name (gensym "strng")
       :sid (swap! mxreact.mxreact/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :react-element (tiltontec.cell.core/cF
                        (react/createElement
                          (mxreact.mxreact/component-with-hooks
                            (react/createElement "span"
                              (cljs.core/clj->js {:key (rand-int 9999)}) {}
                              (tiltontec.model.core/mget ~'me ~content-kwd))))))))

(defmacro mkc [react-component mx-props jsx-props & kids]
  `(tiltontec.model.core/make :mxreact.mxreact/matrixrn.elt
     :sid (swap! mxreact.mxreact/sid-latest inc)
     ~@(when (seq kids)
         `(:kids (tiltontec.model.core/cFkids ~@kids)))
     :react-element (tiltontec.cell.core/cF
                      (react/createElement
                        (mxreact.mxreact/component-with-hooks
                          (apply react/createElement ~react-component
                            (cljs.core/clj->js (merge
                                                 ;; todo useref
                                                 #_(when (tiltontec.model.core/mget ~'me :use-ref?)
                                                     {:ref (mxreact.mxreact/ref-get ~'me)})
                                                 ~jsx-props))
                            (let [kidz# (tiltontec.model.core/mget ~'me :kids)]
                              (doall
                                ;; ^^^ so this runs while "me" is bound to intended mx
                                (map (fn [mapkid#]
                                       (if (string? mapkid#)
                                         mapkid#
                                         (tiltontec.model.core/mget mapkid# :react-element)))
                                  kidz#)))))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro mk [node-type mx-props jsx-props & kids]
  `(tiltontec.model.core/make :mxreact.mxreact/matrixrn.elt
     :sid (swap! mxreact.mxreact/sid-latest inc)
     ~@(when (seq kids)
         `(:kids (tiltontec.model.core/cFkids ~@kids)))
     :react-element (tiltontec.cell.core/cF
                      (react/createElement
                        (mxreact.mxreact/component-with-hooks
                          (apply react/createElement (name ~node-type)
                            (cljs.core/clj->js (merge
                                                 ;; todo useref
                                                 #_(when (tiltontec.model.core/mget ~'me :use-ref?)
                                                     {:ref (mxreact.mxreact/ref-get ~'me)})
                                                 ~jsx-props))
                            (let [kidz# (tiltontec.model.core/mget ~'me :kids)]
                              (doall
                                ;; ^^^ so this runs while "me" is bound to intended mx
                                (map (fn [mapkid#]
                                       (if (string? mapkid#)
                                         mapkid#
                                         (let [kidelt# (tiltontec.model.core/mget mapkid# :react-element)]
                                           (prn :me!!!!! ~'me)
                                           (prn :MK-mapkid mapkid# )
                                           (prn :MK-kidelt kidelt#)
                                           kidelt#)))
                                  kidz#)))))))
     ~@(apply concat
         (into [] mx-props))))

(declare
  input textarea option select a abbr address area article aside audio b base bdi
  bdo big blockquote body br button canvas caption cite code col colgroup data datalist
  dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form
  h1 h2 h3 h4 h5 h6 head header hr html i iframe img ins kbd keygen label legend li link
  main map mark menu menuitem meta meter nav noscript object ol optgroup output p param
  picture pre progress q rp rt ruby s samp script section small source span strong style
  sub summary sup table tbody td tfoot th thead time title tr track u ul var video wbr
  circle clipPath ellipse g line mask path pattern polyline rect svg text defs
  linearGradient polygon radialGradient stop tspan)

(def tags
  '[input textarea option select a abbr address area article aside audio b base bdi
    bdo big blockquote body br button canvas caption cite code col colgroup data datalist
    dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form
    h1 h2 h3 h4 h5 h6 head header hr html i iframe img ins kbd keygen label legend li link
    main map mark menu menuitem meta meter nav noscript object ol optgroup output p param
    picture pre progress q rp rt ruby s samp script section small source span strong style
    sub summary sup table tbody td tfoot th thead time title tr track u ul var video wbr
    circle clipPath ellipse g line mask path pattern polyline rect svg text defs
    linearGradient polygon radialGradient stop tspan])

(defn gen-tag
  [tag]
  `(defmacro ~tag [& args#]
     `(mk ~(str '~tag) ~@args#)))

(defmacro gen-tags []
  `(do
     ~@(for [tag tags]
         (gen-tag tag))))

(gen-tags)


(defmacro fmu [what]
  `(tiltontec.model.core/fget ~what ~'me
     :me? false
     :inside? false
     :must? true
     :up? true))

(defmacro fmu-val [what prop]
  `(tiltontec.model.core/mget (mxreact.mxreact/fmu ~what) ~prop))

(defmacro fmi [what]
  `(tiltontec.model.core/fget ~what ~'me
     :me? true
     :inside? true
     :must? true
     :up? false))

(defmacro fmi-val [what prop]
  `(tiltontec.model.core/mget (mxreact.mxreact/fmi ~what) ~prop))

(defmacro myval [prop]
  `(tiltontec.model.core/mget ~'me ~prop))
