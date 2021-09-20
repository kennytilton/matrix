(ns matrixrn.matrixrn)
; useEffect(() => {
;  window.addEventListener('mousemove', () => {});
;
;  // returned function will be called on component unmount
;  return () => {
;    window.removeEventListener('mousemove', () => {})
;  }
;}, [])

(defmacro component-with-hooks [& body]
  `(fn []
     (let [[~'_ set-state#] (react/useState 0)
           ref# (when (tiltontec.model.core/mget ~'me :use-ref?)
                  (react/useRef :ref-undefined))]
       (matrixrn.matrixrn/set-state-record ~'me set-state#)
       #_ (react/useEffect #(fn []
                           (prn :effect-unmounted (tiltontec.model.core/mget ~'me :sid)
                                  (tiltontec.model.core/mget ~'me :name))))
       (when ref#
         (matrixrn.matrixrn/ref-record ~'me ref#))
       ~@body)))

(defmacro strng [textFormulaBody]
  ;; todo this is dumb. we want to supply a string to a Text so
  ;; we create Text with a string child
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
       :name (gensym "strng")
       :sid (swap! matrixrn.matrixrn/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :react-element (tiltontec.cell.core/cF
                        ;; todo better key
                        (react/createElement
                          (matrixrn.matrixrn/component-with-hooks
                            (prn :strng-rendering (tiltontec.model.core/mget ~'me :sid))
                            (react/createElement rn/Text
                              (cljs.core/clj->js {:key (rand-int 9999)}) {}
                              (tiltontec.model.core/mget ~'me ~content-kwd))))))))

(defmacro with-props [[& inherited] static-props]
  `(merge (into {} (for [prop# [~@inherited]]
                     (let [[pkey# pget#] (if (vector? prop#)
                                           prop#
                                           [prop# prop#])]
                       [pkey# (tiltontec.model.core/mget ~'me pget#)])))
     ~static-props))

(defmacro mk [node-type mx-props jsx-props & kids]
  `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
     :sid (swap! matrixrn.matrixrn/sid-latest inc)
     ~@(when (seq kids)
         `(:kids (tiltontec.model.core/cFkids ~@kids)))
     :react-element (tiltontec.cell.core/cF
                      (react/createElement
                        (matrixrn.matrixrn/component-with-hooks
                          (prn :mk-rendering (tiltontec.model.core/mget ~'me :sid)
                            (tiltontec.model.core/mget ~'me :name))
                          (apply react/createElement ~node-type
                            (cljs.core/clj->js (merge
                                                 (when (tiltontec.model.core/mget ~'me :use-ref?)
                                                   {:ref (matrixrn.matrixrn/ref-get ~'me)})
                                                 ~jsx-props))
                            (doall
                              ;; ^^^ so this runs while "me" is bound to intended mx
                              (map (fn [mapkid#]
                                     (tiltontec.model.core/mget mapkid# :react-element))
                                (tiltontec.model.core/mget ~'me :kids)))))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro mku [node-type mx-props jsx-props & kids]
  ;; tbh, 'mku' was developed just for the Navigator-Screen parent-child pairing.
  ;; the Matrix trick of injecting an anonymous component made RN unhappy because
  ;; it requires the child of a Navigator to be a Screen, not a wrapped screen.
  `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
     :sid (swap! matrixrn.matrixrn/sid-latest inc)
     ~@(when (seq kids)
         `(:kids (tiltontec.model.core/cFkids ~@kids)))
     :react-element (tiltontec.cell.core/cF
                      (apply react/createElement ~node-type
                        (cljs.core/clj->js ~jsx-props)
                        (doall
                          (map (fn [mapkid#]
                                 (fn [] (tiltontec.model.core/mget mapkid# :react-element)))
                            (tiltontec.model.core/mget ~'me :kids)))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro fmu [what]
  `(tiltontec.model.core/fget ~what ~'me
     :me? false
     :inside? false
     :must? true
     :up? true))

(defmacro fmu-val [what prop]
  `(tiltontec.model.core/mget (matrixrn.matrixrn/fmu ~what) ~prop))

(defmacro fmi [what]
  `(tiltontec.model.core/fget ~what ~'me
     :me? true
     :inside? true
     :must? true
     :up? false))

(defmacro fmi-val [what prop]
  `(tiltontec.model.core/mget (matrixrn.matrixrn/fmi ~what) ~prop))

(defmacro myval [prop]
  `(tiltontec.model.core/mget ~'me ~prop))
