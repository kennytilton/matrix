(ns myapp.mxrgen)

(defmacro mxfnc [& body]
  `(helix.core/fnc []
     (let [[~'_ set-state#] (helix.hooks/use-state 0)]
       (myapp.mxreact/set-state-record ~'me set-state#)
       ~@body)))

(defmacro mkx [component & key-vals]
  (let [kv-map (apply hash-map key-vals)]
    `(myapp.mxreact/mkrx
       ~(assoc (dissoc kv-map :jsx)
          :rendering `(tiltontec.cell.core/cF
                        (helix.core/$
                          (mxfnc
                            (helix.core/$ ~component
                              ~(:jsx kv-map)
                              {}))))))))


(defmacro mkxdebug [component & key-vals]
  (let [kv-map (apply hash-map key-vals)]
    `(myapp.mxreact/mkrx
       ~(assoc (dissoc kv-map :jsx)
          :rendering `(tiltontec.cell.core/cF
                        (prn :jsx-rendering!!!!!!!! ~(:jsx kv-map)
                          ;; :js (clj->js ~(:jsx kv-map))
                          :typ (type ~(:jsx kv-map))
                          :title (:title ~(:jsx kv-map)))
                        (helix.core/$
                          (mxfnc
                            (helix.core/$ ~component
                              ~(:jsx kv-map)
                              {}))))))))

(defmacro mkbox [container-component & key-vals]
  (let [kv-map (apply hash-map key-vals)
        of-kids (:of-kids kv-map)
        rendering (:rendering kv-map)
        container-attrs (apply concat
                          (into []
                            (dissoc kv-map :jsx :of-kids :rendering)))]
    ;(prn :kvmap kv-map)
    ;(prn :comp container-component)
    ;(prn :contattrs container-attrs)
    ;(prn :of-kids of-kids)
    `(myapp.mxreact/mkrx
       (assoc (hash-map ~@container-attrs)
         :rendering (tiltontec.cell.core/cF
                      (helix.core/$
                        (mxfnc
                          (apply helix.core/$ ~container-component
                            {:style ~(:style kv-map)}
                            {}
                            (doall (map #(tiltontec.model.core/mget % :rendering)
                                     (tiltontec.model.core/mget ~'me :kids))))))))
       {}
       (tiltontec.model.core/cFkids ~of-kids))))

(defmacro with-props [inherited & key-vals]
  (prn :inh inherited)
  (prn :kvs key-vals)
  `(merge (into {} (for [prop# ~inherited]
                     [prop# (tiltontec.model.core/mget ~'me prop#)]))
     (hash-map ~@key-vals)))

(defmacro props [& inherited]
  (prn :inh inherited)
  `(into {} (for [prop# [~@inherited]]
              (let [[pkey# pget#] (if (vector? prop#)
                                    prop#
                                    [prop# prop#])]
                [pkey# (tiltontec.model.core/mget ~'me pget#)]))))

(comment

  (macroexpand-1 `(props :a :b))
  (macroexpand `(with-props [:a :b] :c 42))
  )
