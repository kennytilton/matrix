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
                          (mxfnc                            ;; sneak in the useState hack
                            (helix.core/$ ~component
                              ~(:jsx kv-map)
                              {}))))))))

(defmacro View [mx-props jsx-props & children]
  `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
     :sid (swap! myapp.mxreact/sid-latest inc)
     :kids (tiltontec.model.core/cFkids ~@children)
     :rendering (tiltontec.cell.core/cF
                  (helix.core/$ (mxfnc
                                  (apply helix.core/$ rn/View
                                    ~jsx-props
                                    {}
                                    (doall (map #(tiltontec.model.core/mget % :rendering)
                                             (tiltontec.model.core/mget ~'me :kids)))))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro Button [mx-props jsx-props]
  `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
     :sid (swap! myapp.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (helix.core/$ (mxfnc
                                  (helix.core/$ rn/Button
                                    ~jsx-props {}))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro Switch [mx-props jsx-props]
  `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
     :sid (swap! myapp.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (helix.core/$ (mxfnc
                                  (helix.core/$ rn/Switch
                                    ~jsx-props {}))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro TextInput [mx-props jsx-props]
  `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
     :sid (swap! myapp.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (prn :textinput-rendering-formula-runs!! ~jsx-props)
                  (helix.core/$ (mxfnc
                                  (helix.core/$ rn/TextInput
                                    ~jsx-props {}))))
     ~@(apply concat
         (into [] mx-props))))

(comment
  (macroexpand-1 `(TextInput
                    {:name            :search-input
                     :lookup          (cF (when (mget (mxu! me :do-any-lookup?) :value)
                                            (http/get "https://api.github.com/users"
                                              {:with-credentials? false
                                               :query-params      {"since" 135}})))}
                    {;;:&               (props [:value :searchstring])
                     :value (do (prn :value-mget-runs (mget me :searchstring))
                                (mget me :searchstring))
                     :onChangeText    #(do (prn :chgtext %)
                                           (mset! me :searchstring (str "bam" %)))}))
  (macroexpand-1 `(Button
                    {:name    :my-counter
                     :title   (cF (str "Counter = " (mget me :counter)))
                     :counter (cI 3)}
                    {:&       (props :title)
                     :color   "cyan"
                     :onPress #(mswap! me :counter inc)}))

  (macroexpand-1 `(View
                    {:name :root}
                    {:style {:flex            1
                             :backgroundColor "coral"}}
                    (mkx rn/Button
                      :name :my-counter))))

(defmacro mkbox [container-component & key-vals]
  (let [kv-map (apply hash-map key-vals)
        of-kids (:of-kids kv-map)
        container-attrs (apply concat
                          (into []
                            (dissoc kv-map :jsx :of-kids :rendering)))]
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
       (tiltontec.model.core/cFkids ~of-kids))))

(defmacro props [& inherited]
  `(into {} (for [prop# [~@inherited]]
              (let [[pkey# pget#] (if (vector? prop#)
                                    prop#
                                    [prop# prop#])]
                [pkey# (tiltontec.model.core/mget ~'me pget#)]))))
