(ns mxrn.demo.http
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

    [react]
    [react-native :as rn]
    [react-native-elements :as rne]

    [mxrn.mxreact :as mxr :refer [mxu!]]
    [mxrn.matrixrn :as mxn :refer-macros [mxfnc props]]))

(defn search-input []
  (mxn/TextInput
    {:name            :search-input
     :searchstring    (cI "simo")
     :lookup-go?      (cI false :ephemeral? true)
     :lookup-response (cI nil)
     :lookup          (cF+ [:obs (fn [_ me chan prior-chan]
                                   ;; todo work out how to close prior chan
                                   (when chan
                                     (go (let [response (<! chan)
                                               search (mget me :searchstring)
                                               hits (filter (fn [ostr]
                                                              (str/includes? ostr search))
                                                      (map :login (:body response)))]
                                           (with-cc ;; required to mutate state inside an observer
                                             (mset! me :lookup-response
                                               (or (seq hits) (vector (str "no matches for " search)))))))))]
                        (when (mget (mxu! me :do-any-lookup?) :value)
                          (when (not (str/blank? (mget me :searchstring)))
                            (when (mget me :lookup-go?)
                              (http/get "https://api.github.com/users"
                                {:with-credentials? false
                                 :query-params      {"since" 135}})))))}
    (clj->js
      {:value           (mget me :value)
       :searchstring    (mget me :searchString)
       :style           #js {:height          40
                             :width           192
                             :margin          12
                             :padding         10
                             :backgroundColor "linen"
                             :borderWidth     1}
       :placeholder     "whassup?"
       :autoCapitalize  "none"
       :autoCorrect     false
       :autoFocus       true
       :onChangeText    #(mset! me :searchstring %)
       :onSubmitEditing #(mset! me :lookup-go? true)})))


(defn search-output []
  ;; todo convert to FlatList and show all matches
  (mxn/Button
    {:users (cF (mget (mxu! me :search-input) :lookup-response))
     :title (cF (prn :title-new-sees (mget me :users)
                  (first (mget me :users)))
              (if-let [u1 (first (mget me :users))]
                (str u1)
                (str "no user " (rand-int 9999))))}
    #js {:title (mget me :title)
         :color "green"}))

(defn lookup? []
  (mxn/Switch
    {:name       :do-any-lookup?
     :value      (cI true)
     :thumbColor (cF (if (mget me :value)
                       "#f5dd4b" "#f4f3f4"))}
    (clj->js
      {:value               (mget me :value)
       :thumbColor          (mget me :thumbColor)
       :onValueChange       #(mswap! me :value not)
       :ios_backgroundColor "#3e3e3e"
       :trackColor          #js {:false "#767577"
                                 :true  "#81b0ff"}})))

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mxn/View
                  {:name :root}
                  #js {:style #js {:flex            1
                                   :marginTop       96
                                   :padding         24
                                   :alignItems      "flex-start"
                                   :backgroundColor "cyan"}}
                  (mxn/Text
                    {:name :stringTest}
                    #js {:style #js {:backgroundColor "red"}}
                    (mxn/strng "Hi Mom"))
                  (mxn/Button
                    {:name :yaya}
                    #js {:title "Bingo"})
                  (lookup?)
                  (search-input)
                  (search-output))))))