(ns mxrn.mxrgen)

(defmacro mxfnc [& body]
  `(fn []
     (let [[~'_ set-state#] (react/useState 0)]
       (mxrn.mxreact/set-state-record ~'me set-state#)
       ~@body)))

(defmacro strng [textFormulaBody]
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
       :sid (swap! mxrn.mxreact/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :rendering (tiltontec.cell.core/cF
                    ;; todo better key
                    (react/createElement (mxrn.mxrgen/mxfnc
                                           (react/createElement rn/Text
                                             (cljs.core/clj->js {:key (rand-int 9999)}) {}
                                             (tiltontec.model.core/mget ~'me ~content-kwd))))))))

#_
(defmacro props [& inherited]
  `(into {} (for [prop# [~@inherited]]
              (let [[pkey# pget#] (if (vector? prop#)
                                    prop#
                                    [prop# prop#])]
                [pkey# (tiltontec.model.core/mget ~'me pget#)]))))

(defmacro mk [node-type mx-props jsx-props]
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (react/createElement
                    (mxrn.mxrgen/mxfnc
                      (do
                        (react/createElement
                          (or ~node-type
                            (throw (js/Error. (str "No mode-type specified with" ~mx-props))))
                          ~jsx-props
                          {})))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro mkunhooked [node-type mx-props jsx-props]
  ; so far only because Navigator requires Screen as direct
  ; child, so no mxfnc in between
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (react/createElement
                    (or ~node-type
                      (throw (js/Error. (str "No mode-type specified with" ~mx-props))))
                    ~jsx-props))
     ~@(apply concat
         (into [] mx-props))))

(defmacro mkk [node-type mx-props jsx-props & kids]
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     :kids (tiltontec.model.core/cFkids ~@kids)
     :rendering (tiltontec.cell.core/cF
                  (react/createElement
                    (mxrn.mxrgen/mxfnc
                      (apply react/createElement ~node-type ~jsx-props
                        (doall
                          (map (fn [mapkid#]
                                 (tiltontec.model.core/mget mapkid# :rendering))
                            (tiltontec.model.core/mget ~'me :kids)))))))
     ~@(apply concat
         (into [] mx-props))))

#_
(defmacro Image [mx-props jsx-props]
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (react/createElement (mxrn.mxrgen/mxfnc
                                         (react/createElement
                                           rn/Image
                                           ~jsx-props))))
     ~@(apply concat
         (into [] mx-props))))
#_
(defmacro ImageBackground [mx-props jsx-props]
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (react/createElement (mxrn.mxrgen/mxfnc
                                         (react/createElement
                                           rn/ImageBackground
                                           ~jsx-props
                                           {}))))
     ~@(apply concat
         (into [] mx-props))))
