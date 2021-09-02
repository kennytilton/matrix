(ns matrixrn.mxrgen)

(defmacro mxfnc [& body]
  `(fn []
     (let [[~'_ set-state#] (react/useState 0)]
       (matrixrn.mxreact/set-state-record ~'me set-state#)
       ~@body)))

(defmacro define-composite-macro [gen-type]
  `(defmacro ~gen-type [mx-props# jsx-props# & kids#]
     `(tiltontec.model.core/make :matrixrn.mxreact/matrixrn.elt
        :sid (swap! matrixrn.mxreact/sid-latest inc)
        :kids (tiltontec.model.core/cFkids ~@kids#)
        :rendering (tiltontec.cell.core/cF
                     (react/createElement
                       (matrixrn.mxrgen/mxfnc
                         (apply react/createElement
                           (or (get {:Pressable        rn/Pressable
                                     ;:NavigationContainer (matrixrn.demo.navi/bottom-tab-navi :NavigationContainer)
                                     ;:Navigator           (matrixrn.demo.navi/bottom-tab-navi :Navigator)
                                     ;:Screen              (matrixrn.demo.navi/bottom-tab-navi :Screen)
                                     :Text             rn/Text
                                     :TouchableOpacity rn/TouchableOpacity
                                     :View             rn/View
                                     :SafeAreaView     rn/SafeAreaView
                                     :ScrollView       rn/ScrollView} ~~(keyword gen-type))
                             (throw (js/Error. (str "No RN composite mapping for " ~~(keyword gen-type)))))
                           ~jsx-props#
                           (doall
                             (map (fn [~'mapkid#]
                                    (tiltontec.model.core/mget ~'mapkid# :rendering))
                               (tiltontec.model.core/mget ~'~'me :kids)))))))
        ~@(apply concat
            (into [] mx-props#)))))

(defmacro define-composite-macros [& cs]
  `(do ~@(for [c cs]
           `(define-composite-macro ~c))))

(define-composite-macros
  NavigationContainer Navigator Screen
  Pressable SafeAreaView ScrollView Text TouchableOpacity View)

(defmacro define-atom-macro [gen-type]
  `(defmacro ~gen-type [mx-props# jsx-props#]
     `(tiltontec.model.core/make :matrixrn.mxreact/matrixrn.elt
        :sid (swap! matrixrn.mxreact/sid-latest inc)
        :rendering (tiltontec.cell.core/cF
                     (react/createElement
                       (matrixrn.mxrgen/mxfnc
                         (do (prn :gen-atom ~~(keyword gen-type))
                             (react/createElement
                               (or (get {:ActivityIndicator rn/ActivityIndicator
                                         :Button            rn/Button
                                         :Image             rn/Image
                                         :SliderRNE         rne/Slider
                                         :Icon              rne/Icon
                                         :Switch            rn/Switch
                                         :TextInput         rn/TextInput
                                         :FlatList          rn/FlatList} ~~(keyword gen-type))
                                 (throw (js/Error. (str "No RN atom mapping for: " ~~(keyword gen-type)))))
                               ~jsx-props#
                               {})))))
        ~@(apply concat
            (into [] mx-props#)))))

(defmacro define-atom-macros [& atoms]
  `(do ~@(for [atom atoms]
           `(define-atom-macro ~atom))))

(define-atom-macros
  ActivityIndicator Button FlatList Icon Image SliderRNE Switch TextInput)

(defmacro Image [mx-props jsx-props]
  `(tiltontec.model.core/make :matrixrn.mxreact/matrixrn.elt
     :sid (swap! matrixrn.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (react/createElement (matrixrn.mxrgen/mxfnc
                                         (react/createElement
                                           rn/Image
                                           ~jsx-props))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro ImageBackground [mx-props jsx-props]
  `(tiltontec.model.core/make :matrixrn.mxreact/matrixrn.elt
     :sid (swap! matrixrn.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (react/createElement (matrixrn.mxrgen/mxfnc
                                         (react/createElement
                                           rn/ImageBackground
                                           ~jsx-props
                                           {}))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro strng [textFormulaBody]
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :matrixrn.mxreact/matrixrn.elt
       :sid (swap! matrixrn.mxreact/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :rendering (tiltontec.cell.core/cF
                    ;; todo better key
                    (react/createElement (matrixrn.mxrgen/mxfnc
                                           (react/createElement rn/Text
                                             (cljs.core/clj->js {:key (rand-int 9999)}) {}
                                             (tiltontec.model.core/mget ~'me ~content-kwd))))))))

(defmacro props [& inherited]
  `(into {} (for [prop# [~@inherited]]
              (let [[pkey# pget#] (if (vector? prop#)
                                    prop#
                                    [prop# prop#])]
                [pkey# (tiltontec.model.core/mget ~'me pget#)]))))
