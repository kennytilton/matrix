(ns mxrn.mxrgen)

(defmacro mxfnc [& body]
  `(fn []
     (let [[~'_ set-state#] (react/useState 0)]
       (mxrn.mxreact/set-state-record ~'me set-state#)
       ~@body)))

;; todo try next instead of ^^^
#_
(defn component-with-state-hook
  "creates component from element with state hook registered to `me`"
  [me rn-element]
  (fn []
     (let [[_ set-state] (react/useState 0)] ;; will get *pulse* on change
       (mxrn.mxreact/set-state-record me set-state)
       rn-element)))

(defmacro strng [textFormulaBody]
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
       :sid (swap! mxrn.mxreact/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :react-element (tiltontec.cell.core/cF
                        ;; todo better key
                        (react/createElement
                          (mxrn.mxrgen/mxfnc
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
  ; child, so no mxfnc in between
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     :react-element (tiltontec.cell.core/cF
                      (react/createElement
                        (or ~node-type
                          (throw (js/Error. (str "No mode-type specified with" ~mx-props))))
                        ~jsx-props))
     ~@(apply concat
         (into [] mx-props))))

(defmacro mkunhookedwk [node-type mx-props jsx-props & kids]
  ; so far only because Navigator requires Screen as direct
  ; child, so no mxfnc in between
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
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
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     ~@(when (seq kids)
         `(:kids (tiltontec.model.core/cFkids ~@kids)))
     :react-element (tiltontec.cell.core/cF
                      (react/createElement
                        (mxrn.mxrgen/mxfnc
                          (apply react/createElement ~node-type
                            (cljs.core/clj->js ~jsx-props)
                            (doall ;; so this runs while "me" is bound to intended mx
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

#_(defmacro Image [mx-props jsx-props]
    `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
       :sid (swap! mxrn.mxreact/sid-latest inc)
       :react-element (tiltontec.cell.core/cF
                        (react/createElement (mxrn.mxrgen/mxfnc
                                               (react/createElement
                                                 rn/Image
                                                 ~jsx-props))))
       ~@(apply concat
           (into [] mx-props))))
#_(defmacro ImageBackground [mx-props jsx-props]
    `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
       :sid (swap! mxrn.mxreact/sid-latest inc)
       :react-element (tiltontec.cell.core/cF
                        (react/createElement (mxrn.mxrgen/mxfnc
                                               (react/createElement
                                                 rn/ImageBackground
                                                 ~jsx-props
                                                 {}))))
       ~@(apply concat
           (into [] mx-props))))
