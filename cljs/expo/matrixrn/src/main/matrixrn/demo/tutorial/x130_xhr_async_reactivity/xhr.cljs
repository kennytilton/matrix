(ns matrixrn.demo.tutorial.x130-xhr-async-reactivity.xhr
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [clojure.string :as str]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]

    [react]
    [react-native :as rn]
    [react-native-elements :as rne]

    [tiltontec.cell.base :refer [md-ref? mdead? ia-type unbound c-pulse pulse-now]]
    [tiltontec.cell.evaluate :refer [not-to-be]]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cFonce] :refer [cI]]
    [tiltontec.cell.integrity :refer-macros [with-cc]]
    [tiltontec.model.core :refer [with-par matrix mx-par mget mset! mswap!] :as md]
    [matrixrn.matrixrn :as mxn :refer [<> myval mku mk with-props
                                       fmu fmu-val fmi-val]]
    [matrixrn.demo.tutorial.x130-xhr-async-reactivity.response-map :as response-map]
    ["@expo/vector-icons" :refer [FontAwesome]]))

(defn make-xhr [request-factory]
  (prn :mk-xhr-entry)
  (md/make :matrixrn.matrixrn/matrixrn.xhr
    :sid (swap! matrixrn.matrixrn/sid-latest inc)
    :request (cF+ [:obs (fn [_ me chan prior-chan cell]
                          (assert chan "No chan supplied to XHR")
                          (prn :bam-chan!!!! chan)
                          (assert (md-ref? me))
                          (go (let [response (<! chan)]
                                (prn :bam-response!)
                                (mset! me :response
                                  response))))]
               (request-factory))
    :response (cI nil)))

(defn- build-keyed-item [item-title]
  {:key   (str (.now js/Date) (rand-int 99999))
   :title item-title})

(defn search-input []
  (mk rn/TextInput
    {:name            :search-input
     :defaultValue    (cI "")
     :use-ref?        true
     :searchstring    (cFn (mget me :defaultValue))
     :lookup-go?      (cI nil :ephemeral? true)
     :lookup          (cF+ [:obs (fn [_ me _ old-xhr _]
                                   (when (and old-xhr
                                           (not= old-xhr unbound))
                                     (not-to-be old-xhr)))]

                        (assert (md-ref? me) "lookup cf entry")
                        (when (not (str/blank? (mget me :searchstring)))
                          (when (mget me :lookup-go?)
                            (make-xhr #(http/get "https://api.github.com/users"
                                         {:with-credentials? false
                                          :query-params      {"since" 50000}})))))
     :lookup-response (cF (when-let [xhr (mget me :lookup)]
                            ;; now we "listen" reactively for the XHR instance to recive the async response
                            (when-let [raw-response (mget xhr :response)]
                              (let [search (mget me :searchstring)
                                    hits (filter (fn [ostr]
                                                   (str/includes? ostr search))
                                           (map :login (:body raw-response)))]
                                (prn :hits!!!! search hits)
                                {:users   hits
                                 :message (if (seq hits)
                                            (str "Matches for '" search "':")
                                            (str "No matches for " search ". Try 's'."))}))))}

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

(defn solution []
  (mku mxn/Screen {}
    {:name    "Beyond Matrix: Async XHR"
     :options {:tabBarLabel "XHR"
               :tabBarIcon  (fn []
                              (<> FontAwesome (clj->js {:name "wifi"})))}}
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
      (response-map/search-output))))