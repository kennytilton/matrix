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

(defmacro XView [mx-props jsx-props & kids]
  `(tiltontec.model.core/make :mxrn.mxreact/mxrn.elt
     :sid (swap! mxrn.mxreact/sid-latest inc)
     :kids (tiltontec.model.core/cFkids ~@kids)
     :rendering (tiltontec.cell.core/cF
                  (prn :XView-rendering!!!!!!!!!!!!!)
                  (react/createElement
                    (mxrn.mxrgen/mxfnc
                      (apply react/createElement
                        rn/View
                        ~jsx-props
                        (doall
                          (map (fn [mapkid#]
                                 (let [kr# (tiltontec.model.core/mget mapkid# :rendering)]
                                   (prn :kidrender kr#)
                                   kr#))
                            (tiltontec.model.core/mget ~'me :kids)))))))
     ~@(apply concat
         (into [] mx-props))))

; (cF
;                               (prn :compute-View-rendering )
;                               (apply react/createElement
;                                 rn/View
;                                 #js {:style #js {:backgroundColor "cyan"
;                                                  :flex            1
;                                                  :justifyContent  "center"}}
;                                 (doall
;                                   (prn :kids!!!!!!!!!!!!!!! (tiltontec.model.core/mget me :kids))
;                                   (map (fn [mapkid]
;                                          (let [kr# (tiltontec.model.core/mget mapkid :rendering)]
;                                            (prn :kidrender kr#)
;                                            kr#))
;                                     (tiltontec.model.core/mget me :kids)))))

(defmacro define-composite-macros [& views]
  `(do ~@(for [view views]
           `(define-composite-macro ~view))))

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
                         (react/createElement
                           (or (get {:ActivityIndicator rn/ActivityIndicator
                                     :Button            rn/Button
                                     :Image             rn/Image
                                     ;; has a child :Pressable         rn/Pressable
                                     ;; :SliderRNE         rne/Slider
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
  ActivityIndicator #_ Button FlatList #_ SliderRNE Switch TextInput)



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
