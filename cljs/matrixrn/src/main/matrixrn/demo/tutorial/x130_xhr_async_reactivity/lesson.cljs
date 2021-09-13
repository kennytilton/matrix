(ns matrixrn.demo.tutorial.x130-xhr-async-reactivity.lesson
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

;; WARNING!: The GitHub search is a mess. Fix it if you like. It searches in limited fashion
;;           I use "si" or "st" to get hits.


;; TryThis[,easy]: the U/X here is a mess. It should not say "No user" until they search.

;; TryThis[,hard]: poll continuously as they type, but only if two characters have been typed.

;; TryThis[,pro]: any widget kicking off an XHR would duplicate much of the observer code below.
;; Create a Matrix type ::matrixrn.XHR that encapsulates that code reusably.

(defn search-input []
  (mk rn/TextInput
    {:name            :search-input
     :defaultValue    (cI "")
     :searchstring    (cFn (mget me :defaultValue))
     ;;              cFn ^^^ runs as a formula to intialize itself from surrounding data,
     ;;              then can be modified like a `cI` input cell.
     :lookup-go?      (cI nil :ephemeral? true)
     ;;               ^^^ ephemeral? means this property reverts to nil after being set to non-nil
     ;;               but not as a state change propagated my Matrix. It just becomes nil once
     ;;               fully propagated.
     ;; TryThisAndFail[,easy] ^^^ remove :ephemeral option, or set to false. Use print statements to discover
     ;; the problem with a non-ephemeral flag such as lookup-go?
     :lookup-response (cI nil)
     :lookup          (cF+ [:obs (fn [_ me chan prior-chan cell]
                                   ;; todo work out how to close prior chan (if not 'undefined'!)
                                   ;; todo perhaps we swap!-assoc the new chan into the Cell (an atom) as :clean-up-chan
                                   ;; todo and then close! it. But can a 'go' caller close the chan returned by 'go'?
                                   (when chan
                                     ;; ^^^ ie, a lookup has been kicked off via cljs-http, and this is the chan it will report on
                                     (go
                                       (let [response (<! chan)
                                             search (mget me :searchstring)
                                             hits (filter (fn [ostr]
                                                            (str/includes? ostr search))
                                                    (map :login (:body response)))]
                                         (prn :github-users hits)
                                         (with-cc
                                           ;; ^^^ MAJOR feature! 'with-cc' must wrap state change triggered inside an observer
                                           (mset! me :lookup-response
                                             ;; returning error as a 'hit' is lame.
                                             ;; TryThis[,easy]: return a lookup result map with hits and any
                                             ;; message to be displayed. Use message to say "Users matching <searchstring>"
                                             (or (seq hits) (vector (str "No matches for " search)))))))))]
                        (when (not (str/blank? (mget me :searchstring)))
                          (when (mget me :lookup-go?)
                            (http/get "https://api.github.com/users"
                              {:with-credentials? false
                               :query-params      {"since" 50000}}))))}

    (with-props [:defaultValue [:value :searchstring]]
      ;; YourThoughts? should we tuck styling away in some nearby map, or co-locate like this?
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
                 ;; ^^^^ FlatList expects JS data
                 (if-let [users (seq (mget (fmu :search-input) :lookup-response))]
                   (for [user-login users]
                     (build-keyed-item user-login))
                   ;; TryThis: Below, We should not say "no user" until they search:
                   ;; Warning: trick question!
                   (vector (build-keyed-item "No such user found. Try \"s\".")))))}
    ;; below, the keyExtractor and renderItem callbacks from FlatList will
    ;; receive pure JS items. We demonstrate some simple interop
    ;; to avoid complete conversion to CLJ data.
    ;; n.b. the keyExtractor "i" is the pure data item, but renderItem is passed an object
    ;; where the property :item holds the pure data item.
    ;; See your console to compare.
    ;;
    ;; Moral of the story: each RN component can present surprises.
    ;;
    (with-props [:data]
      {:keyExtractor (fn [data-item]
                       (.-key data-item))
       :renderItem   (fn [render-item]
                       ;; ^^ rendered item contains data item as property "item"
                       ;; here we have to "speak" React....
                       (react/createElement rn/Text
                         #js {:style #js {:fontSize 18}}
                         (.. render-item -item -title)))})))

(defn lesson []
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
