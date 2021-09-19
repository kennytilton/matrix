(ns matrixrn.demo.tutorial.x130-xhr-async-reactivity.response-map
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
    [matrixrn.matrixrn :as mxn :refer [myval mku mk with-props
                                       fmu fmu-val fmi-val]]))

;; TryThis[response-map,avg]: return a lookup result map with hits and any
;; message to be displayed. Use message to say "Users matching <searchstring>"
;; This will fix the UX silliness of saying "No matches" before
;; they even search.

(defn search-input []
  (mk rn/TextInput
    {:name            :search-input
     :defaultValue    (cI "")
     :use-ref?        true
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

                                         ;; Solution!
                                         (with-cc
                                           (mset! me :lookup-response
                                             {:users   hits
                                              :message (if (seq hits)
                                                         (str "Matches for '" search "':")
                                                         (str "No matches for " search ". Try 's'."))}))

                                         ;; we include the auto-clear solution
                                         (with-cc
                                           (mset! me :searchstring ""))

                                         ;; restore focus to search field:
                                         (.focus (.-current (mxn/ref-get me)))))))]
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
       :onChangeText    #(mset! me :searchstring %)
       :onSubmitEditing #(mset! me :lookup-go? true)})))

(defn- build-keyed-item [item-title]
  {:key   (str (.now js/Date) (rand-int 99999))
   :title item-title})

(defn- search-output []
  (mk rn/View
    {:name     :search-output
     :response (cF (let [r (mget (fmu :search-input) :lookup-response)]
                     (prn :BAM-rrrr!!!! r)
                     r))}
    {:style {:flex       1
             :padding    6
             :alignItems "center"}}
    (when (myval :response)
      [(mk rn/Text {}
         {:style {:height          40
                  :color           "black"
                  :backgroundColor "linen"
                  :padding         9
                  :marginBottom    18
                  :fontFamily      "Cochin"
                  :fontSize        24}}
         (mxn/strng (:message (fmu-val :search-output :response))))
       (mk rn/FlatList
         {:data (cF (clj->js
                      (for [user-login (:users (fmu-val :search-output :response))]
                        (build-keyed-item user-login))))}
         (with-props [:data]
           {:keyExtractor (fn [data-item]
                            (.-key data-item))
            :renderItem   (fn [render-item]
                            (react/createElement rn/Text
                              #js {:style #js {:fontSize 18}}
                              (.. render-item -item -title)))}))])))

(defn solution []
  (mku mxn/Screen {}
    {:name "Beyond Matrix: Async XHR"}
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
