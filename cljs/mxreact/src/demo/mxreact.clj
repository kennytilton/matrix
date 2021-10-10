(ns demo.mxreact)

(defmacro with-props [[& inherited] static-props]
  `(merge (into {} (for [prop# [~@inherited]]
                     (let [[pkey# pget#] (if (vector? prop#)
                                           prop#
                                           [prop# prop#])]
                       [pkey# (tiltontec.model.core/mget ~'me pget#)])))
     ~static-props))


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

(defmacro component-with-hooks [& body]
  `(fn []
     (let [[~'_ set-state#] (.useState (get-react) 0)
           ref# (when (tiltontec.model.core/mget ~'me :use-ref?)
                  (.useRef (get-react) :ref-undefined))]
       (demo.mxreact/set-state-record ~'me set-state#)
       #_(react/useEffect #(fn []
                             (prn :effect-unmounted (tiltontec.model.core/mget ~'me :sid)
                               (tiltontec.model.core/mget ~'me :name))))
       (when ref#
         (demo.mxreact/ref-record ~'me ref#))
       ~@body)))

(defmacro app-elt [tag$ jsx-props & kids]
  `(.createElement (get-react) tag$))

(defmacro mk2 [node-type mx-props jsx-props & kids]
  #_ `($ ~node-type {} (str "MK demo MXR Bingo Damn!" (rand-int 99999)))

  (do
    (prn :mk2-sees node-type :kids kids)
    `(tiltontec.model.core/make :mxreact.mxreact/matrixrn.elt
       :sid (swap! demo.mxreact/sid-latest inc)
       ~@(when (seq kids)
           `(:kids (tiltontec.model.core/cFkids ~@kids)))
       :react-element (tiltontec.cell.core/cF
                        (prn :creating-elt!!!! js/document)
                        (react/createElement
                          (demo.mxreact/component-with-hooks
                            (apply react/createElement (name ~node-type)
                              (cljs.core/clj->js (merge
                                                   ;; todo useref
                                                   #_ (when (tiltontec.model.core/mget ~'me :use-ref?)
                                                        {:ref (demo.mxreact/ref-get ~'me)})
                                                   ~jsx-props))
                              (let [kidz# (tiltontec.model.core/mget ~'me :kids)]
                                (doall
                                  ;; ^^^ so this runs while "me" is bound to intended mx
                                  (map (fn [mapkid#]
                                         (prn :processing mapkid#)
                                         (if (string? mapkid#)
                                           mapkid#
                                           (tiltontec.model.core/mget mapkid# :react-element)))
                                    kidz#))))))))))

(defmacro mk [node-type mx-props jsx-props & kids]
  #_ `($ ~node-type {} (str "MK demo MXR Bingo Damn!" (rand-int 99999)))

  (do
    (prn :mk-sees node-type)
    (prn :mk-sees-mxp mx-props)
    `(tiltontec.model.core/make :mxreact.mxreact/matrixrn.elt
       :sid (swap! demo.mxreact/sid-latest inc)
       ~@(when (seq kids)
           `(:kids (tiltontec.model.core/cFkids ~@kids)))
       :react-element (tiltontec.cell.core/cF
                        (prn :creating-elt!!!!)
                        (.createElement (get-react)
                          (demo.mxreact/component-with-hooks
                            #_(prn :mk-rendering (tiltontec.model.core/mget ~'me :sid)
                                (tiltontec.model.core/mget ~'me :name))
                            (apply .createElement (get-react) (name ~node-type)
                              (cljs.core/clj->js (merge
                                                   #_ (when (tiltontec.model.core/mget ~'me :use-ref?)
                                                     {:ref (demo.mxreact/ref-get ~'me)})
                                                   ~jsx-props))
                              (doall
                                ;; ^^^ so this runs while "me" is bound to intended mx
                                (map (fn [mapkid#]
                                       (tiltontec.model.core/mget mapkid# :react-element))
                                  (tiltontec.model.core/mget ~'me :kids)))))))
       ~@(apply concat
           (into [] mx-props)))))

(defmacro fmu [what]
  `(tiltontec.model.core/fget ~what ~'me
     :me? false
     :inside? false
     :must? true
     :up? true))

(defmacro fmu-val [what prop]
  `(tiltontec.model.core/mget (demo.mxreact/fmu ~what) ~prop))

(defmacro fmi [what]
  `(tiltontec.model.core/fget ~what ~'me
     :me? true
     :inside? true
     :must? true
     :up? false))

(defmacro fmi-val [what prop]
  `(tiltontec.model.core/mget (demo.mxreact/fmi ~what) ~prop))

(defmacro myval [prop]
  `(tiltontec.model.core/mget ~'me ~prop))
