(ns myapp.demo.flatlist
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]
    ["react-native" :as rn]
    [helix.core :as hx :refer [defnc fnc $ <>]]
    [myapp.mxreact :as mxr :refer [mkrx mxu!]]
    [myapp.mxrgen :refer-macros [mkbox mkx mxfnc props]]))

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mkrx
                  {:name      :root
                   :rendering (cF ($ (mxfnc
                                       (do
                                         (apply $ rn/View
                                           {:style (clj->js {:flex            1
                                                             :marginTop       96
                                                             :padding         24
                                                             :alignItems      "flex-start"
                                                             :backgroundColor "coral"})}
                                           {}
                                           (doall (map #(mget % :rendering)
                                                    (mget me :kids))))))))}
                  (cFkids
                    (mkx rn/Switch
                      :name :counting?
                      :value (cI true)
                      :thumbColor (cF (if (mget me :value)
                                        "#f5dd4b" "#f4f3f4"))
                      :jsx {:&                   (props :value :thumbColor)
                            :onValueChange       #(mswap! me :value not)
                            :ios_backgroundColor "#3e3e3e"
                            :trackColor          (js-obj "false" "#767577" "true" "#81b0ff")})

                    (mkx rn/TextInput
                      :name :new-undo
                      :to-do (cI "")
                      :style #js {:height          40
                                  :margin          12
                                  :padding         10
                                  :backgroundColor "linen"
                                  :borderWidth     1}
                      :jsx {:&               (props [:value :to-do] :style)
                            :placeholder     "What needs doing?"
                            :autoFocus       true
                            :autoCapitalize  "sentences"
                            :onChangeText    #(do (prn :undo-bam-changetext %)
                                                  (mset! me :to-do %))
                            :onSubmitEditing #(let [n (js->clj (goog.object/get % "nativeEvent")
                                                        :keywordize-keys true)]
                                                (prn :undo-on-submit-editing n)
                                                (when-not (str/blank? (:text n))
                                                  (mswap! (mxu! me :todos-container) :todo-items
                                                    conj {:key   (str (.now js/Date))
                                                          :title (:text n)})))})

                    (mkrx
                      {:name       :todos-container
                       :todo-items (cI nil)
                       :rendering  (cF (let [items (mget me :todo-items)]
                                         ;; need to ^^ establish dependency
                                         ;; todo can we just do (fnc [(mget me :todo-items)]??
                                         (prn :items!!!!!! items)
                                         ($ (mxfnc
                                              ($ rn/SafeAreaView
                                                {:style (clj->js {:flex      1
                                                                  :marginTop 0})}
                                                ($ rn/FlatList
                                                  {:data         (clj->js (mget me :todo-items))
                                                   :keyExtractor (fn [i]
                                                                   (prn :keyex-sees i)
                                                                   (.-key i))
                                                   :renderItem   (fn [i]
                                                                   (prn :rendering-i i)
                                                                   ($ rn/View
                                                                     {:style #js {:backgroundColor  "#f9c2ff"
                                                                                  :padding          9
                                                                                  :marginVertical   8
                                                                                  :marginHorizontal 16}}
                                                                     ($ rn/Text {:style #js {:fontSize 32}}
                                                                       (.-title (.-item i)))))}))))))})

                    ))))))