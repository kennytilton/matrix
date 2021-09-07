(ns mxrn.mxrgen)

(defmacro mx$ [textFormulaBody]
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :mxrn.mxrgen/mxrn.elt
       :sid (swap! mxrn.mxrgen/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :react-element (tiltontec.cell.core/cF
                        ;; todo better key
                        (rn-element-with-state-hook ~'me
                          (react/createElement rn/Text
                            (cljs.core/clj->js {:key (rand-int 99999)}) {}
                            (tiltontec.model.core/mget ~'me ~content-kwd)))))))

(defmacro with-props [[& inherited] static-props]
  `(merge (into {} (for [prop# [~@inherited]]
                     (let [[pkey# pget#] (if (vector? prop#)
                                           prop#
                                           [prop# prop#])]
                       [pkey# (tiltontec.model.core/mget ~'me pget#)])))
     ~static-props))

(defmacro mk [node-type mx-props jsx-props & kids]
  `(tiltontec.model.core/make :mxrn.mxrgen/mxrn.elt
     :sid (swap! mxrn.mxrgen/sid-latest inc)
     ~@(when (seq kids)
         `(:kids (tiltontec.model.core/cFkids ~@kids)))
     :react-element (tiltontec.cell.core/cF
                      (rn-element-with-state-hook ~'me
                          (apply react/createElement ~node-type
                            (cljs.core/clj->js ~jsx-props)
                            (doall                          ;; so this runs while "me" is bound to intended mx
                              (map (fn [mapkid#]
                                     (tiltontec.model.core/mget mapkid# :react-element))
                                (tiltontec.model.core/mget ~'me :kids))))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro mku [node-type mx-props jsx-props & kids]
  ;; this does not wrap node-type in a state-hook component so
  ;; the returned element is of that node-type.
  ;;
  ;; Needed for Navigator-Screen, since Nav insists children be Screens
  ;;
  ;; DRY with mk
  `(tiltontec.model.core/make :mxrn.mxrgen/mxrn.elt
     :sid (swap! mxrn.mxrgen/sid-latest inc)
     ~@(when (seq kids)
         `(:kids (tiltontec.model.core/cFkids ~@kids)))
     :react-element (tiltontec.cell.core/cF
                      (apply react/createElement ~node-type
                        (cljs.core/clj->js ~jsx-props)
                        (doall
                          (map (fn [mapkid#]
                                 (tiltontec.model.core/mget mapkid# :react-element))
                            (tiltontec.model.core/mget ~'me :kids)))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro mkuscreen [node-type mx-props jsx-props & kids]
  ;; this does not wrap node-type in a state-hook component so
  ;; the returned element is of that node-type.
  ;;
  ;; Needed for Navigator-Screen, since Nav insists children be Screens
  ;;
  `(tiltontec.model.core/make :mxrn.mxrgen/mxrn.elt
     :sid (swap! mxrn.mxrgen/sid-latest inc)
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
