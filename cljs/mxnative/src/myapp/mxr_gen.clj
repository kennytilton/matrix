(ns myapp.mxr-gen)

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

(defmacro mkbox [container-component & key-vals]
  (let [kv-map (apply hash-map key-vals)
        of-kids (:of-kids kv-map)
        rendering (:rendering kv-map)
        container-attrs (apply concat
                          (into []
                            (dissoc kv-map :jsx :of :rendering)))]
    (prn :kvmap kv-map)
    (prn :comp container-component)
    (prn :contattrs container-attrs)
    (prn :of-kids of-kids)
    `(myapp.mxreact/mkrx ~container-component
       (assoc (hash-map ~@container-attrs)
         :rendering (tiltontec.cell.core/cF
                      (apply helix.core/$ ~container-component {} {}
                        (doall (map #(tiltontec.model.core/mget % :rendering)
                                 (tiltontec.model.core/mget me :kids))))))
       {}
       (tiltontec.model.core/cFkids ~of-kids))))