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

#_(defmacro mkx [component & key-vals]
    (let [opts (into {} (partition 2 key-vals))])
    `(mkrx
       {~@(concat (for [[k v] (dissoc opts :opts)]
                    [k v]))
        :rendering (cF ($ (mxfnc
                            (apply $ ~component ~(:opts opts) {}))))}))