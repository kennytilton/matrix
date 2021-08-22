(ns myapp.demo.http
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [clojure.string :as str]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]

    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.cell.integrity :refer-macros [with-cc]]
    [tiltontec.model.core
     :refer-macros [cFkids with-par]
     :refer [matrix mx-par mget mset! mswap!
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]

    ["react-native" :as rn]
    [helix.core :as hx :refer [defnc fnc $ <>]]
    [myapp.mxreact :as mxr :refer [mkrx mxu!]]
    [myapp.mxrgen :refer-macros [mkbox mkx mxfnc props]]))

(defn search-input []
  (mkx rn/TextInput
    ;; todo make this a defnc
    :name :lookup-value
    :to-do (cI "simon")
    :lookup-go? (cI false :ephemeral? true)
    :lookup-response (cI nil)
    :lookup (cF+ [:obs (fn [_ me chan _]
                         (when chan
                           (go (let [response (<! chan)
                                     search (mget me :to-do)
                                     rs (map :login (:body response))
                                     hits (filter (fn [ostr]
                                                    (clojure.string/includes? ostr
                                                      search))
                                            rs)]
                                 (with-cc
                                   (mset! me :lookup-response
                                     (or (seq hits) (vector (str "no matches for " search)))))))))]
              (when (mget (mxu! me :lookup?) :value)
                (when (not (str/blank? (mget me :to-do)))
                  (when (mget me :lookup-go?)
                    (http/get "https://api.github.com/users"
                      {:with-credentials? false
                       :query-params      {"since" 135}})))))
    :style (cF (clj->js {:height          40
                         :width           192
                         :margin          12
                         :padding         10
                         :backgroundColor "linen"
                         :borderWidth     1}))
    :jsx {:&               (props [:value :to-do] :style)
          :placeholder     "whassup?"
          :autoCapitalize  "none"
          :autoCorrect     false
          :autoFocus       true
          :onChangeText    #(do (prn :bam-changetext %)
                                (mset! me :to-do %))
          :onSubmitEditing #(mset! me :lookup-go? true)}))

(defn search-output []
  (mkx rn/Button
    :name :dumper
    :users (cF (mget (mxu! me :lookup-value) :lookup-response))
    :title (cF (prn :title-sees (type (first (mget me :users)))
                 (type (cljs.reader/read-string (first (mget me :users)))))
             (str (first (mget me :users))))
    :jsx {:&       (props :title)
          :color   "cyan"
          :onPress #(prn %)}))

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mkrx
                  {:name      :root
                   :rendering (cF ($ (mxfnc
                                       (apply $ rn/View
                                         {:style #js {:flex            1
                                                      :marginTop       96
                                                      :padding         24
                                                      :alignItems      "flex-start"
                                                      :backgroundColor "coral"}}
                                         {}
                                         (doall (map #(mget % :rendering)
                                                  (mget me :kids)))))))}
                  (cFkids
                    (mkx rn/Switch
                      :name :lookup?
                      :value (cI true)
                      :thumbColor (cF (if (mget me :value)
                                        "#f5dd4b" "#f4f3f4"))
                      :jsx {:&                   (props :value :thumbColor)
                            :onValueChange       #(mswap! me :value not)
                            :ios_backgroundColor "#3e3e3e"
                            :trackColor          #js {:false "#767577"
                                                      :true  "#81b0ff"}
                            #_(js-obj "false" "#767577" "true" "#81b0ff")})

                    (search-input)

                    (search-output)
                    ))))))


#_(mkrx
    {:name      :lookup-viewer
     :users     (cF (mget (mxu! me :lookup-value) :lookup-response))
     :rendering (cF (let [us (mget me :users)
                          us1 (first us)]
                      (prn :lookup-viewer-sees us1 :of us)
                      ($ (mxfnc
                           ($ rn/Text {:style #js {:backgroundColor "yellow"
                                                   :color           "black"
                                                   :margin          4
                                                   :padding         8}} {}
                             us1)))))})