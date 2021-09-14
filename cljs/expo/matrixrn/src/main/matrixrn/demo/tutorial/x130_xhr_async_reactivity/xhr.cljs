(ns matrixrn.demo.tutorial.x130-xhr-async-reactivity.xhr
  (:require
    [react]
    ["@react-navigation/native" :refer [NavigationContainer]]
    [tiltontec.cell.core :refer-macros [cFonce]]
    [tiltontec.model.core :refer [ cFkids with-par matrix mx-par mget mset! mswap!] :as md]
    [matrixrn.matrixrn :as mxn :refer-macros [mk mku with-props]]))

(make make-xhr [request]
  (md/make :matrixrn.matrixrn/matrixrn.xhr
    :sid (swap! matrixrn.matrixrn/sid-latest inc)
    ~@(when (seq kids)
        `(:kids (tiltontec.model.core/cFkids ~@kids)))
    :request request
    :response
    ~@(apply concat
        (into [] mx-props))))

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
     :onSubmitEditing #(mset! me :lookup-go? true)}))