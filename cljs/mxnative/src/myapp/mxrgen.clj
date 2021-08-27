(ns myapp.mxrgen)

(defmacro mxfnc [& body]
  `(helix.core/fnc []
     (let [[~'_ set-state#] (helix.hooks/use-state 0)]
       (myapp.mxreact/set-state-record ~'me set-state#)
       ~@body)))

(defmacro define-composite-macro [gen-type]
  `(defmacro ~gen-type [mx-props# jsx-props# & kids#]
     `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
        :sid (swap! myapp.mxreact/sid-latest inc)
        :kids (tiltontec.model.core/cFkids ~@kids#)
        :rendering (tiltontec.cell.core/cF
                     (helix.core/$ (myapp.mxrgen/mxfnc
                                     (apply helix.core/$
                                       (or (get {:Pressable        rn/TouchableOpacity
                                                 :Text             rn/Text
                                                 :TouchableOpacity rn/TouchableOpacity
                                                 :View             rn/View
                                                 :SafeAreaView     rn/SafeAreaView
                                                 :ScrollView       rn/ScrollView} ~~(keyword gen-type))
                                         (throw (js/Error. (str "No RN composite mapping for " ~~(keyword gen-type)))))
                                       ~jsx-props#
                                       {}
                                       (doall
                                         (map (fn [~'mapkid#]
                                                (tiltontec.model.core/mget ~'mapkid# :rendering))
                                           (tiltontec.model.core/mget ~'~'me :kids)))))))
        ~@(apply concat
            (into [] mx-props#)))))

(defmacro define-composite-macros [& views]
  `(do ~@(for [view views]
           `(define-composite-macro ~view))))

(define-composite-macros Pressable Text TouchableOpacity View SafeAreaView)

(defmacro define-atom-macro [gen-type]
  `(defmacro ~gen-type [mx-props# jsx-props#]
     `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
        :sid (swap! myapp.mxreact/sid-latest inc)
        :rendering (tiltontec.cell.core/cF
                     (helix.core/$ (myapp.mxrgen/mxfnc
                                     (helix.core/$
                                       (or (get {:ActivityIndicator rn/ActivityIndicator
                                                 :Button            rn/Button
                                                 :Image             rn/Image
                                                 :Pressable         rn/Pressable
                                                 :Switch            rn/Switch
                                                 :TextInput         rn/TextInput
                                                 :FlatList          rn/FlatList} ~~(keyword gen-type))
                                         (throw (js/Error. (str "No RN atom mapping for: " ~~(keyword gen-type)))))
                                       ~jsx-props#
                                       {}))))
        ~@(apply concat
            (into [] mx-props#)))))

(defmacro define-atom-macros [& atoms]
  `(do ~@(for [atom atoms]
           `(define-atom-macro ~atom))))

(define-atom-macros
  ActivityIndicator Button FlatList Switch TextInput)

(defmacro Image [mx-props jsx-props]
  `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
     :sid (swap! myapp.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (helix.core/$ (myapp.mxrgen/mxfnc
                                  (helix.core/$
                                    rn/Image
                                    ~jsx-props))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro ImageBackground [mx-props jsx-props]
  `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
     :sid (swap! myapp.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (helix.core/$ (myapp.mxrgen/mxfnc
                                  (helix.core/$
                                    rn/ImageBackground
                                    ~jsx-props
                                    {}))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro strng [textFormulaBody]
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :myapp.mxreact/mxrn.elt
       :sid (swap! myapp.mxreact/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :rendering (tiltontec.cell.core/cF
                    ;; todo better key
                    (myapp.mxrgen/mxfnc
                      (helix.core/$ rn/Text {:key (rand-int 9999)} {}
                        (tiltontec.model.core/mget ~'me ~content-kwd)))))))

(defmacro props [& inherited]
  `(into {} (for [prop# [~@inherited]]
              (let [[pkey# pget#] (if (vector? prop#)
                                    prop#
                                    [prop# prop#])]
                [pkey# (tiltontec.model.core/mget ~'me pget#)]))))
