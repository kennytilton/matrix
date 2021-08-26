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

    ["react" :as react]
    ["react-native" :as rn]

    [helix.core :as hx :refer [defnc fnc $ <>]]
    [myapp.mxreact :as mxr :refer [mkrx mxu!]]
    [myapp.mxrgen :as mxn :refer-macros [mkbox mkx mxfnc props]]))

(defn ^js/React get-react [] react)

;(defn search-input []
;  (mxn/TextInput
;    {:name            :search-input
;     :searchstring   (cI "simo")
;     :lookup-go?      (cI false :ephemeral? true)
;     :lookup-response (cI nil)
;     :lookup          (cF+ [:obs (fn [_ me chan _]
;                                   (when chan
;                                     (go (let [response (<! chan)
;                                               search (mget me :searchstring)
;                                               hits (filter (fn [ostr]
;                                                              (clojure.string/includes? ostr
;                                                                (mget me :searchstring)))
;                                                      (map :login (:body response)))]
;                                           (with-cc
;                                             (mset! me :lookup-response
;                                               (or (seq hits) (vector (str "no matches for " search)))))))))]
;                        (when (mget (mxu! me :do-any-lookup?) :value)
;                          (when (not (str/blank? (mget me :searchstring)))
;                            (when (mget me :lookup-go?)
;                              (http/get "https://api.github.com/users"
;                                {:with-credentials? false
;                                 :query-params      {"since" 135}})))))}
;    {:&               (props [:value :searchstring])
;     :style            {:height          40
;                           :width           192
;                           :margin          12
;                           :padding         10
;                           :backgroundColor "linen"
;                           :borderWidth     1}
;     :placeholder     "whassup?"
;     :autoCapitalize  "none"
;     :autoCorrect     false
;     :autoFocus       true
;     :onChangeText    #(do ;; (prn :chgtext-sets-search % (mget me :name))
;                           (mset! me :searchstring %))
;     :onSubmitEditing #(do ;; (prn :submit!!!! %)
;                           (mset! me :lookup-go? true))}))

#_
(defn search-output []
  ;; todo convert to FlatList and show all matches
  (mxn/Button
    {:users (cF (mget (mxu! me :search-input) :lookup-response))
     :title (cF (prn :title-new-sees (mget me :users)
                  (first (mget me :users)))
              (if-let [u1 (first (mget me :users))]
                (str u1)
                (str "no user " (rand-int 9999))))}
    {:&       (props :title)
     :color   "green"}))

(defn lookup? []
  (mxn/Switch
    {:name       :do-any-lookup?
     :value      (cI true)
     :thumbColor (cF (if (mget me :value)
                       "#f5dd4b" "#f4f3f4"))}
    {:&                   (props :value :thumbColor)
     :onValueChange       #(mswap! me :value not)
     :ios_backgroundColor "#3e3e3e"
     :trackColor          #js {:false "#767577"
                               :true  "#81b0ff"}}))

(defn demo []
  (md/make ::hxApp
    :rx-dom (cFonce
              (with-par me
                (mxn/View
                  {:name :root}
                  {:style #js {:flex            1
                               :marginTop       96
                               :padding         24
                               :alignItems      "flex-start"
                               :backgroundColor "cyan"}}
                  (mkrx
                    {:name      :an-item
                     :rendering (cF ($ rn/Text {:style #js {:backgroundColor "cyan"
                                                            :margin          4
                                                            :padding         8}} {}
                                      "Booya"))})
                  (mxn/Button
                    {:name :yaya}
                    {:title "Bingo"})
                  (lookup?)
                  ;(search-input)
                  ;(search-output)
                  )))))