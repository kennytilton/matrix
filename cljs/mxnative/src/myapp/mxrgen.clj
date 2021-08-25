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

;; todo def-view-macro
; [mx-props (gensym "mx-props")
;        jsx-props (gensym "jsx-props")
;        children (gensym "children")]

#_(defmacro def-view-macro [type rn-type]
    (prn :dvm-sees type rn-type)
    (let [rntex (gensym "boom")]
      (prn :outerboom rntex)
      `(defmacro ~type [mx-props# jsx-props# & children#]
         `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
            :sid (swap! myapp.mxreact/sid-latest inc)
            :kids (tiltontec.model.core/cFkids ~@children#)
            :rendering (tiltontec.cell.core/cF
                         (let [~~rntex rn/View #_(get {:View         rn/View
                                                       :SafeAreaView rn/SafeAreaView} :View)]
                           (prn :bam-rnt ~~rntex)
                           (helix.core/$
                             (mxfnc
                               (apply helix.core/$
                                 ~~rntex #_(get {:View         rn/View
                                                 :SafeAreaView rn/SafeAreaView} :View)
                                 ~jsx-props#
                                 {}
                                 (doall (map #(tiltontec.model.core/mget % :rendering)
                                          (tiltontec.model.core/mget ~'me :kids))))))))
            ~@(apply concat
                (into [] mx-props#))))))

#_(defmacro def-view-macro [type rn-type]
    (prn :dvm-sees type rn-type)
    (let [rntex (gensym "rntex")
          mx-props (gensym "mx-props")
          jsx-props (gensym "jsx-props")
          kids (gensym "kids")]
      (prn :outerboom rntex)
      `(defmacro ~type [~mx-props ~jsx-props & ~kids]
         `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
            :rendering (tiltontec.cell.core/cF
                         (helix.core/$
                           (mxfnc
                             (apply helix.core/$
                               rn/View #_(get {:View         rn/View
                                               :SafeAreaView rn/SafeAreaView} :View)
                               ~~jsx-props
                               {}
                               (doall (map #(tiltontec.model.core/mget % :rendering)
                                        (tiltontec.model.core/mget ~'me :kids)))))))
            ~@(apply concat
                (into [] ~mx-props))))))

#_(def-view-macro View :View)
;(def-view-macro SafeAreaView rn/SafeAreaView)


#_;; Ok!
    (defmacro dvm [type rn-type]
      (prn :dvm-sees type rn-type)
      (let [rntex (gensym "rntex")
            mx-props (gensym "mx-props")
            jsx-props (gensym "jsx-props")
            kids (gensym "kids")]
        (prn :rntex rntex)
        `(defmacro ~type [~mx-props ~jsx-props & ~kids]
           `(let [~'~rntex rn/View]
              (prn :mxp ~~mx-props :jsx ~~jsx-props
                :f222 ~'~rntex
                :kids ~@~kids)))))

(defmacro dvm [type rn-type]
  (prn :dvm-sees type rn-type)
  (let [rntex (gensym "rntex")
        self (gensym "self")
        mx-props (gensym "mx-props")
        jsx-props (gensym "jsx-props")
        kids (gensym "kids")
        kid-renders (gensym "kid-renders")
        mapkid (gensym "mapkid")]
    (prn :rntex rntex)
    `(defmacro ~type [~mx-props ~jsx-props & ~kids]
       `(let [~'~rntex (get {:View rn/View} ~~rn-type)]
          #_(prn :mxp ~~mx-props :jsx ~~jsx-props
              :f222 ~'~rntex
              :kids ~@~kids)
          (tiltontec.model.core/make :myapp.mxreact/mxrn.elt
            :sid (swap! myapp.mxreact/sid-latest inc)
            :kids (tiltontec.model.core/cFkids ~@~kids)
            :rendering (tiltontec.cell.core/cF
                         (let [~'~self ~'~'me
                               ~'~kid-renders (doall
                                                (map (fn [~'~mapkid]
                                                       (tiltontec.model.core/mget ~'~mapkid :rendering))
                                                  (tiltontec.model.core/mget ~'~self :kids)))]
                           (prn :self?! ~'~self)
                           (prn :selfkids?? (tiltontec.model.core/mget ~'~self :kids))
                           (prn :kidrenders???  ~'~kid-renders)
                           (helix.core/$ (myapp.mxrgen/mxfnc
                                           (apply helix.core/$
                                             ~'~rntex       ;; rn/View
                                             ~~jsx-props
                                             {}
                                             ~'~kid-renders)))))
          ~@(apply concat
              (into [] ~mx-props)))))) )

(dvm xView :View)

(comment
  (macroexpand-1 '(dvm xView :View)))

#_(defmacro dvm [type rn-type]
    (prn :dvm-sees type rn-type)
    (let [rntex (gensym "rntex")
          mx-props (gensym "mx-props")
          jsx-props (gensym "jsx-props")
          kids (gensym "kids")]
      (prn :outerboom rntex)
      `(defmacro ~type [~mx-props ~jsx-props & ~kids]
         (do                                                ;; let [~rntex rn/View]
           `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
              :sid (swap! myapp.mxreact/sid-latest inc)
              :kids (tiltontec.model.core/cFkids ~@~kids)
              :rendering (tiltontec.cell.core/cF
                           (helix.core/$ (myapp.mxrgen/mxfnc
                                           (apply helix.core/$
                                             (when true rn/View)
                                             ~~jsx-props
                                             {}
                                             (doall (map #(tiltontec.model.core/mget % :rendering)
                                                      (tiltontec.model.core/mget ~'me :kids)))))))
              ~@(apply concat
                  (into [] ~mx-props)))))))

;(dvm xView :View)

(comment
  (macroexpand '(dvm xView :View))
  (macroexpand `(def-view-macro View :View)))

(defmacro View [mx-props jsx-props & children]
  (let [rnc (gensym "rnclass")]
    `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
       :sid (swap! myapp.mxreact/sid-latest inc)
       :kids (tiltontec.model.core/cFkids ~@children)
       :rendering (tiltontec.cell.core/cF
                    (let [~rnc rn/View]
                      (helix.core/$ (mxfnc
                                      (apply helix.core/$
                                        ~rnc                ;; (get {:View rn/View} :View) ;; (when true rn/View)
                                        ~jsx-props
                                        {}
                                        (doall (map #(tiltontec.model.core/mget % :rendering)
                                                 (tiltontec.model.core/mget ~'me :kids))))))))
       ~@(apply concat
           (into [] mx-props)))))
;; xx

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
