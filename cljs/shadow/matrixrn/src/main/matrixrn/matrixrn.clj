(ns matrixrn.matrixrn)

(defmacro component-with-state-hook [& body]
  `(fn []
     (let [[~'_ set-state#] (react/useState 0)]
       (matrixrn.matrixrn/set-state-record ~'me set-state#)
       ~@body)))

(defmacro strng [textFormulaBody]
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
       :sid (swap! matrixrn.matrixrn/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :react-element (tiltontec.cell.core/cF
                        ;; todo better key
                        (react/createElement
                          (matrixrn.matrixrn/component-with-state-hook
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
  ;; todo fancier macrology
  `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
     :sid (swap! matrixrn.matrixrn/sid-latest inc)
     ~@(when (seq kids)
         `(:kids (tiltontec.model.core/cFkids ~@kids)))
     :react-element (tiltontec.cell.core/cF
                      (react/createElement
                        (matrixrn.matrixrn/component-with-state-hook
                          (apply react/createElement ~node-type
                            (cljs.core/clj->js ~jsx-props)
                            (doall                          ;; so this runs while "me" is bound to intended mx
                              (map (fn [mapkid#]
                                     (tiltontec.model.core/mget mapkid# :react-element))
                                (tiltontec.model.core/mget ~'me :kids)))))))
     ~@(apply concat
         (into [] mx-props))))

;(defmacro mku [node-type mx-props jsx-props & kids]
;  ;; this does not wrap node-type in a state-hook component so
;  ;; that the returned element is of that node-type, instead
;  ;; of an anonymous component.
;  ;;
;  ;; Needed for Navigator-Screen, since Nav insists children be Screens
;  ;;
;  `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
;     :sid (swap! matrixrn.matrixrn/sid-latest inc)
;     ~@(when (seq kids)
;         `(:kids (tiltontec.model.core/cFkids ~@kids)))
;     :react-element (tiltontec.cell.core/cF
;                      (apply react/createElement ~node-type
;                        (cljs.core/clj->js ~jsx-props)
;                        (doall
;                          (map (fn [mapkid#]
;                                 (tiltontec.model.core/mget mapkid# :react-element))
;                            (tiltontec.model.core/mget ~'me :kids)))))
;     ~@(apply concat
;         (into [] mx-props))))

(defmacro mku [node-type mx-props jsx-props & kids]
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
