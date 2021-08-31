(ns mxrn.mxrgen)

(defmacro mxfnc [& body]
  `(fn []
     (let [[~'_ set-state#] (react/useState 0)]
       (mxrn.mxreact/set-state-record ~'me set-state#)
       ~@body)))

(defmacro define-composite-macro [gen-type]
  `(defmacro ~gen-type [mx-props# jsx-props# & kids#]
     `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
        :sid (swap! mxrn.mxreact/sid-latest inc)
        :kids (tiltontec.model.core/cFkids ~@kids#)
        :rendering (tiltontec.cell.core/cF
                     (react/createElement
                       (mxrn.mxrgen/mxfnc
                         (apply react/createElement
                           rn/View
                           #_
                           (or (get {:Pressable           rn/TouchableOpacity
                                     ;:NavigationContainer (mxrn.demo.navi/bottom-tab-navi :NavigationContainer)
                                     ;:Navigator           (mxrn.demo.navi/bottom-tab-navi :Navigator)
                                     ;:Screen              (mxrn.demo.navi/bottom-tab-navi :Screen)
                                     :TouchableOpacity    rn/TouchableOpacity
                                     :View                rn/View
                                     :SafeAreaView        rn/SafeAreaView
                                     :ScrollView          rn/ScrollView} ~~(keyword gen-type))
                             (throw (js/Error. (str "No RN composite mapping for " ~~(keyword gen-type)))))
                           ~jsx-props#
                           (doall
                             (map (fn [~'mapkid#]
                                    (tiltontec.model.core/mget ~'mapkid# :rendering))
                               (tiltontec.model.core/mget ~'~'me :kids)))))))
        ~@(apply concat
            (into [] mx-props#)))))

;(define-composite-macro View)

(defmacro define-composite-macros [& atoms]
  `(do ~@(for [atom atoms]
           `(define-composite-macro ~atom))))

(define-composite-macros Pressable Text View)

#_
    (define-composite-macros
      NavigationContainer Navigator Screen
      Pressable Text TouchableOpacity View SafeAreaView)

#_
(define-composite-macros
  NavigationContainer Navigator Screen
  Pressable Text TouchableOpacity View SafeAreaView)

(defmacro define-atom-macro [gen-type]
  `(defmacro ~gen-type [mx-props# jsx-props#]
     `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
        :sid (swap! mxrn.mxreact/sid-latest inc)
        :rendering (tiltontec.cell.core/cF
                     (react/createElement
                       (mxrn.mxrgen/mxfnc
                         (do (prn :gen-atom ~~(keyword gen-type))
                             (react/createElement
                           (or (get {:ActivityIndicator rn/TouchableOpacity
                                     :Button            rn/Button
                                     :Image             rn/Image
                                     ;; has a child :Pressable         rn/Pressable
                                     :SliderRNE         rne/Slider
                                     :Icon rne/Icon
                                     :Switch            rn/Switch
                                     :TextInput         rn/TextInput
                                     :FlatList          rn/FlatList} ~~(keyword gen-type))
                             (throw (js/Error. (str "No RN atom mapping for: " ~~(keyword gen-type)))))
                           ~jsx-props#
                           {})))))
        ~@(apply concat
            (into [] mx-props#)))))

;(define-atom-macro Button)

(defmacro define-atom-macros [& atoms]
  `(do ~@(for [atom atoms]
           `(define-atom-macro ~atom))))


(define-atom-macros
  ActivityIndicator Button #_ FlatList Icon SliderRNE Switch #_ TextInput)


(defmacro Image [mx-props jsx-props]
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (react/createElement (mxrn.mxrgen/mxfnc
                                         (react/createElement
                                           rn/Image
                                           ~jsx-props))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro ImageBackground [mx-props jsx-props]
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     :rendering (tiltontec.cell.core/cF
                  (react/createElement (mxrn.mxrgen/mxfnc
                                         (react/createElement
                                           rn/ImageBackground
                                           ~jsx-props
                                           {}))))
     ~@(apply concat
         (into [] mx-props))))

(defmacro strng [textFormulaBody]
  (let [content-kwd (keyword (gensym "content"))]
    `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
       :sid (swap! mxrn.mxreact/sid-latest inc)
       ~content-kwd (tiltontec.cell.core/cF ~textFormulaBody)
       :rendering (tiltontec.cell.core/cF
                    ;; todo better key
                    (react/createElement (mxrn.mxrgen/mxfnc
                                           (react/createElement rn/Text {:key (rand-int 9999)} {}
                                             (tiltontec.model.core/mget ~'me ~content-kwd))))))))

(defmacro props [& inherited]
  `(into {} (for [prop# [~@inherited]]
              (let [[pkey# pget#] (if (vector? prop#)
                                    prop#
                                    [prop# prop#])]
                [pkey# (tiltontec.model.core/mget ~'me pget#)]))))
