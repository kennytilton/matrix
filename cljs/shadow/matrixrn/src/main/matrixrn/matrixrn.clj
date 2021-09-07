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

(defmacro mkunhooked [node-type mx-props jsx-props]
  ; so far only because Navigator requires Screen as direct
  ; child, so no component-with-state-hook in between
  `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
     :sid (swap! matrixrn.matrixrn/sid-latest inc)
     :react-element (tiltontec.cell.core/cF
                      (react/createElement
                        (or ~node-type
                          (throw (js/Error. (str "No mode-type specified with" ~mx-props))))
                        ~jsx-props))
     ~@(apply concat
         (into [] mx-props))))

(defmacro mkunhookedwk [node-type mx-props jsx-props & kids]
  ; so far only because Navigator requires Screen as direct
  ; child, so no component-with-state-hook in between
  `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
     :sid (swap! matrixrn.matrixrn/sid-latest inc)
     :kids (tiltontec.model.core/cFkids ~@kids)
     :react-element (tiltontec.cell.core/cF
                      (apply react/createElement
                        (or ~node-type
                          (throw (js/Error. (str "No mode-type specified with" ~mx-props))))
                        ~jsx-props
                        (doall
                          (map (fn [mapkid#]
                                 (fn [] (tiltontec.model.core/mget mapkid# :react-element)))
                            (tiltontec.model.core/mget ~'me :kids)))))
     ~@(apply concat
         (into [] mx-props))))

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

(defmacro mku [node-type mx-props jsx-props & kids]
  ;; this does not wrap node-type in a state-hook component so
  ;; the returned element is of that node-type.
  ;;
  ;; Needed for Navigator-Screen, since Nav insists children be Screens
  ;;
  `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
     :sid (swap! matrixrn.matrixrn/sid-latest inc)
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
  `(fget ~name ~'me
     :me? false
     :inside? false
     :must? true
     :up? true))

#_(defmacro Image [mx-props jsx-props]
    `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
       :sid (swap! matrixrn.matrixrn/sid-latest inc)
       :react-element (tiltontec.cell.core/cF
                        (react/createElement (matrixrn.matrixrn/component-with-state-hook
                                               (react/createElement
                                                 rn/Image
                                                 ~jsx-props))))
       ~@(apply concat
           (into [] mx-props))))
#_(defmacro ImageBackground [mx-props jsx-props]
    `(tiltontec.model.core/make :matrixrn.matrixrn/matrixrn.elt
       :sid (swap! matrixrn.matrixrn/sid-latest inc)
       :react-element (tiltontec.cell.core/cF
                        (react/createElement (matrixrn.matrixrn/component-with-state-hook
                                               (react/createElement
                                                 rn/ImageBackground
                                                 ~jsx-props
                                                 {}))))
       ~@(apply concat
           (into [] mx-props))))
