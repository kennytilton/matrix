(ns matrixrn.demo.tutorial.x130-xhr-async-reactivity.auto-clear
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [clojure.string :as str]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]

    [react]
    [react-native :as rn]
    [react-native-elements :as rne]

    [tiltontec.cell.core :refer-macros [cF cF+ cFn cFonce] :refer [cI]]
    [tiltontec.cell.integrity :refer-macros [with-cc]]
    [tiltontec.model.core :refer [with-par matrix mx-par mget mset! mswap!] :as md]

    [matrixrn.matrixrn :as mxn :refer [mk with-props fmu mku]]))

;; TryThis[auto-clear,avg]: clear the searchstring each time they search

;; search below for SOLUTION!

(defn search-input []
  (mk rn/TextInput
    {:name            :search-input
     :defaultValue    (cI "")
     :searchstring    (cFn (mget me :defaultValue))
     :lookup-go?      (cI nil :ephemeral? true)
     :lookup-response (cI nil)
     :lookup          (cF+ [:obs (fn [_ me chan prior-chan cell]
                                   (when chan
                                     (go
                                       (let [response (<! chan)
                                             search (mget me :searchstring)
                                             hits (filter (fn [ostr]
                                                            (str/includes? ostr search))
                                                    (map :login (:body response)))]
                                         (with-cc
                                           (mset! me :lookup-response
                                             (or (seq hits) (vector (str "No matches for " search)))))

                                         ;; SOLUTION!

                                         (with-cc
                                           (mset! me :searchstring ""))))))]
                        (when (not (str/blank? (mget me :searchstring)))
                          (when (mget me :lookup-go?)
                            (http/get "https://api.github.com/users"
                              {:with-credentials? false
                               :query-params      {"since" 50000}}))))}

    (with-props [:defaultValue [:value :searchstring]]
      {:style           {:height          40
                         :width           192
                         :margin          12
                         :padding         10
                         :backgroundColor "linen"
                         :borderWidth     1}
       :placeholder     "GitHub login fragment"
       :autoCapitalize  "none"
       :autoCorrect     false
       :autoFocus       true
       :onChangeText    #(do (prn :onchange! %)
                             (mset! me :searchstring %))
       :onSubmitEditing #(do (prn :submit-sees %)
                             (mset! me :lookup-go? true))})))

(defn- build-keyed-item [item-title]
  {:key   (str (.now js/Date) (rand-int 99999))
   :title item-title})

(defn- search-output []
  (mk rn/FlatList
    {:data (cF (clj->js
                 (if-let [users (seq (mget (fmu :search-input) :lookup-response))]
                   (for [user-login users]
                     (build-keyed-item user-login))
                   (vector (build-keyed-item "No such user found. Try \"s\".")))))}
    (with-props [:data]
      {:keyExtractor (fn [data-item]
                       (.-key data-item))
       :renderItem   (fn [render-item]
                       (react/createElement rn/Text
                         #js {:style #js {:fontSize 18}}
                         (.. render-item -item -title)))})))

(defn solution []
  (mku mxn/Screen {}
    {:name "Auto Clear"}
    (mk rn/View {}
      {:style {:flex            1
               :padding         24
               :alignItems      "center"
               :backgroundColor "#33cccc"}}
      (mk rn/Text {}
        {:style {:height     36 :color "#008800" :padding 9 :margin 9
                 :fontFamily "Cochin"
                 :fontSize   28
                 :fontWeight "bold"}}
        (mxn/strng "Lame GitHub user search"))
      (search-input)
      (search-output))))
