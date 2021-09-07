(ns mxrn.mxrgen)

(defmacro mxfnc [& body]
  `(fn []
     (let [[~'_ set-state#] (react/useState 0)]
       (mxrn.mxreact/set-state-record ~'me set-state#)
       ~@body)))

;; todo try next instead of ^^^

(defn rn-element-with-state-hook
  "creates element wrapping rn-element with state hook registered to `me`"
  [me rn-element]
  (create-element
    (fn []
      (let [[_ set-state] (react/useState 0)]               ;; will get *pulse* on change
        (mxrn.mxreact/set-state-record me set-state)
        rn-element))))

(defmacro strng [textFormulaBody]
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
       :sid (swap! mxrn.mxreact/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :react-element (tiltontec.cell.core/cF
                        ;; todo better key
                        (rn-element-with-state-hook
                          (react/createElement rn/Text
                            (cljs.core/clj->js {:key (rand-int 9999)}) {}
                            (tiltontec.model.core/mget ~'me ~content-kwd)))))))

(defmacro with-props [[& inherited] static-props]
  `(merge (into {} (for [prop# [~@inherited]]
                     (let [[pkey# pget#] (if (vector? prop#)
                                           prop#
                                           [prop# prop#])]
                       [pkey# (tiltontec.model.core/mget ~'me pget#)])))
     ~static-props))

(defmacro mk [node-type mx-props jsx-props & kids]
  ;; todo fancier macrology
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     ~@(when (seq kids)
         `(:kids (tiltontec.model.core/cFkids ~@kids)))
     :react-element (tiltontec.cell.core/cF
                      (rn-element-with-state-hook
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
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
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
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
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
