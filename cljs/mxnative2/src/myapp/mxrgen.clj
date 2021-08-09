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
                              (let [mkx-attrs#  ~(apply concat (into [] (:jsx kv-map)))]
                                (prn :mkx-attrs!!!! mkx-attrs#)
                                (apply hash-map mkx-attrs#))
                              {}))))))))

(comment
  (apply concat (into [] {:a 1 :b 2}))
  #_ (mkbox rn/View
       :name :multi-parent
       :of-kids ($ (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
                     (mkrx
                       {:rendering (cF ($ rn/Text {} {}
                                         (str "Texxxt " n)))}))))
  (macroexpand-1 `(mkbox rn/View
                    :name :multi-parent
                    :of-kids (for [n (range (mget (mxr/mxu! me :counter42) :counter))]
                               (mkrx
                                 {:rendering (cF ($ rn/Text {} {}
                                                   (str "Texto " n)))})))))

(defmacro mkbox [container-component & key-vals]
  ;; todo test with non-standard parent rendering
  (let [kv-map (apply hash-map key-vals)
        of-kids (:of-kids kv-map)
        rendering (:rendering kv-map)
        container-attrs (apply concat
                          (into []
                            (dissoc kv-map :jsx :of-kids :rendering)))]
    (prn :kvmap kv-map)
    (prn :comp container-component)
    (prn :contattrs container-attrs)
    (prn :of-kids of-kids)
    `(myapp.mxreact/mkrx ;; ~container-component
       (assoc (hash-map ~@container-attrs)
         :rendering (tiltontec.cell.core/cF
                      (apply helix.core/$ ~container-component
                        {:style (cljs.core/js-obj :flex 1, :alignItems "left", :justifyContent "top"
                                  :backgroundColor "yellow")}
                        {}
                        ;; todo ^^^ pick up parent attrs such as styling
                        (doall (map (fn [kid#] (tiltontec.model.core/mget kid# :rendering))
                                 (tiltontec.model.core/mget ~'me :kids))))))
       {}
       (tiltontec.model.core/cFkids ~of-kids))))