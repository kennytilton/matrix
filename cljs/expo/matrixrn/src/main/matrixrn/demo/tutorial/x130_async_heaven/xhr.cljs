(ns matrixrn.demo.tutorial.x130-async-heaven.xhr
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
    [matrixrn.demo.tutorial.x130-async-heaven.response-map :as response-map]
    ["@expo/vector-icons" :refer [FontAwesome]]))

(defn make-xhr [request-factory]
  ;; - md/make produces a so-called "model" instance;
  ;; - a rarity, it is not embedded in a larger matrix
  ;; - that ^^^ said, we *could* have a tree of these if
  ;;   we used the response of one request to build other
  ;;   requests.
  ;;
  (md/make :matrixrn.matrixrn/matrixrn.xhr
    ;; - this "sid" is not very DRY; perhaps it should be part of Matrix?
    :sid (swap! matrixrn.matrixrn/sid-latest inc)
    :request (cF+ [:obs (fn [_ me chan prior-chan cell]
                          (assert chan "No chan produced by request")
                          (go (let [response (<! chan)]
                                ;; observers, by Cells contract, must only observe. But sometimes
                                ;; we want to use them to move the Matrix forward by assigning to
                                ;; input cells, as event handlers do. eg, an async XHR response
                                ;; arrival is like a user mouse-click: who knows when it will happen?

                                ;; To preserve data integrity, we allow observers to wrap
                                ;; Matrix changes in `with-cc`, short for with-cell-change.
                                ;; WITH-CC arranges for the change to be enqueued for execution
                                ;; "just after" the change being observed has fully propagated.
                                ;; "just after" is non-deterministic by default, since who knows
                                ;; what other changes have been enqueued during the same data pulse?
                                ;; And in what order?!
                                ;;
                                ;; Generally this does not matter, but where order matters, look for
                                ;; the :client-queue-handler option to CELLS-RESET, the kickoff of a new Matrix.
                                ;; This is how Matrix drives other libraries such as Tcl/Tk and qooxdoo, which
                                ;; have their own requirements for ordering operations.
                                ;;
                                (with-cc
                                  (mset! me :response response)))))]
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
    {:name    "Async XHR: The Widget"
     :options {:tabBarLabel "XHR+"
               :tabBarIcon  (fn []
                              (<> FontAwesome (clj->js {:name "wifi"  :size 28})))}}
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