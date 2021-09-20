(ns matrixrn.demo.http
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [clojure.string :as str]
    [applied-science.js-interop :as j]

    [react]
    [react-native :as rn]
    [react-native-elements :as rne]

    [tiltontec.cell.core :refer-macros [cF cF+ cFn cFonce] :refer [cI]]
    [tiltontec.cell.integrity :refer-macros [with-cc]]
    [tiltontec.model.core :refer [with-par matrix mx-par mget mset! mswap!] :as md]

    [matrixrn.matrixrn :as mxn :refer [<> mk with-props fmu mk]]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!] :as async]
    [matrixrn.demo.to-do-lite :as flat]))

;; WARNING!: The GitHub search is a mess. Fix it if you like. It searches in limited fashion
;;           I use "si" or "st" to get hits.

;; TryThis: the U/X here is a mess. It should not say "No user" until they search.

;; TryThis: poll continuously as they type, but only if two characters have been typed.

;; TryThis(Expert): Create a Matrix type ::mx.XHR with slots like those below, such that this code just makes
;; an instance of ::mx.XHr with the right URL. Then this widget gets a dependency on the response, and the rest is
;; hidden in ::mx.XHR.

(defn search-input []
  (prn :building-search-input!!!!!!!!!!!!!!!!!)
  (mk rn/TextInput
    {:name            :search-input
     :defaultValue    (cI "")
     :searchstring    (cFn (mget me :defaultValue)) ;; cFn runs as a formula to intiialize itself from surrounding data,
     ;;              then can be modified like a `cI` input cell.
     :lookup-go?      (cI false :ephemeral? true)
     :lookup-response (cI nil)
     :lookup          (cF+ [:obs (fn [_ me chan prior-chan cell]
                                   (when chan ;; ie, a lookup has been kicked off via cljs-http, and this is the chan it will report on
                                     (go (let [response (<! chan)
                                               search (mget me :searchstring)
                                               hits (filter (fn [ostr]
                                                              (str/includes? ostr search))
                                                      (map :login (:body response)))]
                                           (async/close! chan)
                                           (prn :github-users hits)
                                           ;; TryThis: can we clear the searchstring each time they search? Bad U/X?
                                           (with-cc         ;; MAJOR feature! required to mutate state inside an observer
                                             ;;                Well, or you get a warning telling you a backdoor.
                                             (mset! me :lookup-response
                                               (or (seq hits) (vector (str "No matches for " search)))))))))]
                        (prn :search-in-fires)
                        (when (mget (fmu :do-any-lookup?) :value)
                          (when (not (str/blank? (mget me :searchstring)))
                            (prn :search-str-not-blank)
                            (when (mget me :lookup-go?)
                              (prn :search-to-github)
                              (http/get "https://api.github.com/users"
                                {:with-credentials? false
                                 :query-params      {"since" 135}})))))}

    (with-props [:defaultValue]
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

(defn search-output []
  (mk rn/FlatList
    {:data  (cF (clj->js
                  ;; ^^^^ FlatList expects JS data
                  (if-let [users (seq (mget (fmu :search-input) :lookup-response))]
                    (for [user-login users]
                      (flat/build-keyed-item user-login))
                    ;; TryThis: Below, We should not say "no user" until they search:
                    ;; Warning: trick question!
                    (vector (flat/build-keyed-item "No such user found")))))}
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
      {:keyExtractor (fn [i]
                       (prn :keyx-sees i)
                       (.-key i))
       :renderItem   (fn [i]
                       ;; here we have to "speak" React....
                       ;; <> is actually deffed to be react/createElement
                       (prn :render-sees i)
                       (<> rn/Text
                         #js {:style #js {:fontSize 18}}
                         (.. i -item -title)))})))

(defn lookup? []
  (mxn/mk rn/Switch
    {:name       :do-any-lookup?
     :value      (cI true)
     :thumbColor (cF (if (mget me :value)
                       "#f5dd4b" "#f4f3f4"))}
    (with-props [:value :thumbColor]
      {:onValueChange       #(mswap! me :value not)
       :ios_backgroundColor "#3e3e3e"
       :trackColor          {:false "#767577"
                             :true  "#81b0ff"}})))

;; we break this out as a separate function so we can demonstrate re-use, embedding
;; the same content in a Screen on the Navi demo

(defn http-beef [& [view-options]]
  (prn :httpbeef!!!!!!!!)
  (mk rn/View {}
    (merge
      {:style {:flex            1
               :marginTop       96
               :padding         24
               :alignItems      "center"
               :backgroundColor "yellow"}}
      view-options)
    ;; here we see the source code convenience of breaking out
    ;; large wodges of UI/UX into their own functions.
    ;; when widgets handle all their state and all their view
    ;; in one place, the LOC can add up. But co-location of logic
    ;; in one place is one win we see in Matrix over Flux-style architectures.
    (lookup?)
    (search-input)
    (search-output)))

(defn demo []
  (md/make ::rnApp
    :rx-dom (cFonce
              (with-par me
                (http-beef)))))