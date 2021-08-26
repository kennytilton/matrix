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


(defmacro define-view-macro [gen-type]
  `(defmacro ~gen-type [mx-props# jsx-props# & kids#]
     `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
        :sid (swap! myapp.mxreact/sid-latest inc)
        :kids (tiltontec.model.core/cFkids ~@kids#)
        :rendering (tiltontec.cell.core/cF
                     (helix.core/$ (myapp.mxrgen/mxfnc
                                     (apply helix.core/$
                                       (get {:View         rn/View
                                             :SafeAreaView rn/SafeAreaView
                                             :ScrollView   rn/ScrollView} ~~(keyword gen-type))
                                       ~jsx-props#
                                       {}
                                       (doall
                                         (map (fn [~'mapkid#]
                                                (tiltontec.model.core/mget ~'mapkid# :rendering))
                                           (tiltontec.model.core/mget ~'~'me :kids)))))))
        ~@(apply concat
            (into [] mx-props#)))))

;(define-view-macro View)

(defmacro define-view-macros [& views]
  `(do ~@(for [view views]
           `(define-view-macro ~view))))

(define-view-macros View SafeAreaView)

(defmacro define-atom-macro [gen-type]
  `(defmacro ~gen-type [mx-props# jsx-props#]
     `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
        :sid (swap! myapp.mxreact/sid-latest inc)
        :rendering (tiltontec.cell.core/cF
                     (prn :bam!!!!)
                     (helix.core/$ (myapp.mxrgen/mxfnc
                                     (helix.core/$
                                       (get {:Button rn/Button} ~~(keyword gen-type))
                                       ~jsx-props#
                                       {}))))
        ~@(apply concat
            (into [] mx-props#)))))

;(define-atom-macro Button)

(define-atom-macros Button Switch TextInput)

(defmacro define-atom-macros [& views]
  `(do ~@(for [view views]
           `(define-view-macro ~view))))



(comment
  (macroexpand-1 '(dvm xView :View)))

#_
(defmacro Button [mx-props jsx-props]
  `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
     :sid (swap! myapp.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (helix.core/$ (mxfnc
                                  (helix.core/$ rn/Button
                                    ~jsx-props {}))))
     ~@(apply concat
         (into [] mx-props))))



;(dvm xView :View)

(comment
  (macroexpand '(dvm xView :View))
  (macroexpand `(def-view-macro View :View)))

#_(defmacro View [mx-props jsx-props & children]
    (let [rnc (gensym "rnclass")]
      `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
         :sid (swap! myapp.mxreact/sid-latest inc)
         :kids (tiltontec.model.core/cFkids ~@children)
         :rendering (tiltontec.cell.core/cF
                      (let [~rnc rn/View]
                        (helix.core/$ (mxfnc
                                        (apply helix.core/$
                                          ~rnc              ;; (get {:View rn/View} :View) ;; (when true rn/View)
                                          ~jsx-props
                                          {}
                                          (doall (map #(tiltontec.model.core/mget % :rendering)
                                                   (tiltontec.model.core/mget ~'me :kids))))))))
         ~@(apply concat
             (into [] mx-props)))))
;; xx

#_
(defmacro Switch [mx-props jsx-props]
  `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
     :sid (swap! myapp.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (helix.core/$ (mxfnc
                                  (helix.core/$ rn/Switch
                                    ~jsx-props {}))))
     ~@(apply concat
         (into [] mx-props))))

#_
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

(defmacro my-counter []
  `(tiltontec.model.core/mget ~'me :counter))

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
