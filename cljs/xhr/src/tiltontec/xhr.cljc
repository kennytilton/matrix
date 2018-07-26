(ns tiltontec.xhr
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]]))
  (:require
    [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint cl-format]]

    #?(:clj [clojure.core.async :refer [go chan go-loop <! <!! >!! >!
                                timeout alt!!]])

    [tiltontec.util.core
     :refer [pln err xor now *plnk-keys* any-ref?
             counts countit counts-reset]]

    #?(:cljs [tiltontec.cell.base
              :refer-macros [pcell un-stopped without-c-dependency cpr
                             with-cc]

              :refer [+pulse+ c-pulse c-optimized-away?
                      mdead? md-ref? ia-type
                      +client-q-handler+ c-stopped unbound when-bound
                      *within-integrity* *defer-changes*
                      *depender* caller-ensure]]
       :clj [tiltontec.cell.base :refer :all])


    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]

    #?(:cljs [tiltontec.cell.synapse
              :refer-macros [with-synapse]
              :refer []]
       :clj [tiltontec.cell.synapse :refer :all])

    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-cc with-integrity]
              :refer []]
       :clj
    [tiltontec.cell.integrity :refer :all])

    #?(:cljs [tiltontec.util.base
              :refer [type-cljc]
              :refer-macros [trx prog1 *trx?* def-rmap-slots]]
       :clj
    [tiltontec.util.base
     :refer :all])

    ; cool------------------------

    #?(:clj [tiltontec.cell.observer :refer [fn-obs observe observe-by-type]]
       :cljs [tiltontec.cell.observer
              :refer-macros [fn-obs]
              :refer [observe observe-by-type]])

    ;cool-----

    #?(:clj
    [tiltontec.cell.core :refer :all]
       :cljs [tiltontec.cell.core
              :refer-macros [cF cF+ c_F cF_]
              :refer [cI c-reset! make-c-formula ]])

    [tiltontec.model.core
     :refer-macros [the-kids mdv!]
     :refer [<mget fasc fm! make md-reset! mswap!> backdoor-reset!
             mx-par]
     :as md]

    ;cool------


    #?(:clj
    [clj-http.client :as client]
       :cljs [cljs-http.client :as client])

    #?(:clj
    [cheshire.core :refer :all]
       :cljs [cognitect.transit :as t])

    [clojure.walk :refer [keywordize-keys]]

    #?(:cljs [cljs.core.async :refer [<!]])
    ))

(declare assert-xhr)

(def +xhr-sid+ (atom -1))

(defn xhr-init! []
  (reset! +xhr-sid+ -1))

(defn parse-json$
  ([j$] (parse-json$ j$ true))
  ([j$ keywordize]
    #?(:clj  (parse-string j$ keywordize)
       :cljs (do
               (let [r (t/reader :json)]
                 ((if keywordize keywordize-keys identity)
                   (t/read r j$)))))))



#_(let [uri ae-adderall]
    (client/get uri
      {:async? true}
      (fn [response]
        (cpr :xhr-response!!! (:status response) (keys response) uri)
        (pprint (parse-json$ (:body response))))
      (fn [exception]
        ;; (println :exc exception)
        ;(println :beankeys!! (keys (bean exception)))
        ;;(println :bean!! ) (pprint (bean exception))
        (println :status (:status (:data (bean exception)))
                 :body (parse-json$ (:body (:data (bean exception)))))
        (println "exception message is: " (.getMessage exception))
        (cpr :error!!!!!)
        )))

(defn xhr-send [xhr]

  (let [uri (<mget xhr :uri)]
    ;; (cpr :xhr-send-is-sending-uri (:id @xhr) uri)
    (#?(:clj alter :cljs swap!) xhr assoc :send-time (now))

    #?(:clj (client/get uri
              {:async? true}

              (fn [response]
                (prn :xhr-send-response!!! (:id @xhr) (:status response) uri)
                (countit [:xhr :reponse])
                (if (mdead? xhr)
                  (do (cpr :ignoring-response-to-dead-XHR!!! uri (meta xhr)))
                  (do
                    ;;(cpr :hitting-with-cc *within-integrity*)
                    (with-cc :xhr-handler-sets-responded
                      (md-reset! xhr :response {:status (:status response)
                                                :body   ((:body-parser @xhr) (:body response))})))))
              (fn [exception]
                (countit [:xhr :exception])
                ;;(prn "xhr-send> raw exception" exception)
                (let [edata (:data (bean exception))]

                  (prn :xhr-exception!!! (:id @xhr) uri (:status edata) (parse-json$ (:body edata)))
                  (when-not (mdead? xhr)
                    (with-cc :xhr-handler-sets-error
                      (md-reset! xhr :response {:status (:status edata)
                                                :body   (parse-json$ (:body edata))}))))))

       :cljs (go (let [response (<! (client/get uri {:with-credentials? false}))]
                   (if (:success response)
                     (do
                       ;(prn :body (keys (:body response)))
                       ;(prn :success (:status response)  (keys response) (count (:body response)))
                       (if (mdead? xhr)
                         (do (cpr :ignoring-response-to-dead-XHR!!! uri #_ (meta xhr)))
                         (with-cc :xhr-handler-sets-responded
                           (js/setTimeout
                             #(do
                                (when-let [d (:fake-delay @xhr)]
                                  (println :fake-delayed!!!!!! d))
                                (md-reset! xhr :response
                                  {:status (:status response)
                                   :body   ((:body-parser @xhr) (:body response))}))
                             (or (:fake-delay @xhr) 0)))))

                     (do
                       (prn :NO-success :stat (:status response)
                        :ecode (:error-code response)
                            :etext (:error-text response))

                       (if (mdead? xhr)
                         (do (cpr :ignoring-response-to-dead-XHR!!! uri (meta xhr)))
                         (with-cc :xhr-handler-sets-responded
                           (md-reset! xhr :response {:status (:status response)
                                                     :body   [(:error-code response)
                                                              (:error-text response)]}))))))))))



(defn xhr-status [xhr]
  (assert-xhr xhr :xhrstatus)
  (or (:status (<mget xhr :response))
      :no-response-yet))

(defn xhr-ok-body [xhr]
  (assert-xhr xhr :ok-body)
  (when-let [r (<mget xhr :response)]
    (when (= 200 (:status r))
      (:body r))))

(defn xhr-error [xhr]
  (assert-xhr xhr :xhr-error)
  (when-let [r (<mget xhr :response)]
    (when (not= 200 (:status r))
      (:body r))))

(defn xhr-response [xhr]
  (assert-xhr xhr :reesponse)
  ;;(println :xresp-sees (<mget xhr :uri)(<mget xhr :status))
  (<mget xhr :response))

(defn xhr-selection [xhr]
  (assert-xhr xhr :selection)
  ;;(println :xresp-sees (<mget xhr :uri)(<mget xhr :status))
  (<mget xhr :selection))

(defn make-xhr
  ([uri]
   (make-xhr uri {}))

  ([uri attrs]
   (assert (string? uri) (str "param uri <" uri "> not a string"))
   (let [xhr (apply make
                    :type :tiltontec.xhr/xhr
                    :id (swap! +xhr-sid+ inc)               ;; debug aid
                    :uri uri
                    :response (cI nil)
                    :select nil
                    :body-parser (:body-parser attrs #(#?(:clj parse-json$ :cljs identity) %))
                    :selection (cF (when-let [b (xhr-ok-body me)]
                                     ;; (pln :sel-sees-body!! (<mget me :select) b)
                                     (if-let [ks (<mget me :select)]
                                       (select-keys b ks)
                                       b)))
                    (vec (apply concat (seq (dissoc attrs :body-parser)))))]
     ;; (println :xhr-made!!!!!!!!!! uri)
     xhr)))

(defmethod not-to-be [:tiltontec.xhr/xhr] [me]
  ;; todo: worry about leaks
  ;; (println :not-to-be-xhr!!!!!!! me)

  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))

  (not-to-be-self me))

(defn send-xhr
  ([uri]
   (send-xhr :anon uri {}))
  ([x y]
   (cond
     (keyword? x)
     (send-xhr x y {})

     (string? x)
     (send-xhr :anon x y)

     :default (throw (#?(:cljs js/Error. :clj Exception.) (cl-format "~&send-xhr cannot discriminate params ~a and ~a" x y)))))
  ([name uri attrs]
   (countit :send-xhr)
    ;;;(println :send-xhr!!!!! uri)
   (make-xhr uri (merge {:name name
                         :send? true
                         :timeout 5000} attrs))))

(defmethod observe [:kids :tiltontec.xhr/xhr] [_ me newv oldv _]
  ;;
  (when (not= oldv unbound)
    ;; oldv unbound means initial build and this incremental add/remove
    ;; is needed only when kids change post initial creation
    ;; todo flesh this out
    (let [lost (clojure.set/difference (set oldv) (set newv))
          gained (clojure.set/difference (set newv) (set oldv))]

      (cond
        (empty? gained)
            ;; just lose the lost
        (do)

        :default                                            ;; try to cancel?
        (pln :ignoring-new-kid-xhrs!!!!!!! #_ newv)))))

(defmethod observe [:send? :tiltontec.xhr/xhr] [_ me newv oldv _]
  ;;(println :observing-xhr!!!! newv (:uri @me))
  (when newv
    ;;;(println :send?-observer-sending-xhr!!!!!!!!!!!!!)
    (xhr-send me)))

;;; --- extraction to map --------

(defmulti xhr-name-to-map #(:name (deref %)))

(declare xhr-to-map)

(defmethod xhr-name-to-map :default [xhr]
  (assoc (dissoc @xhr :par :type :kids :id :response :select :selection)
    :warning :xhr-name-to-map-fell-thru
    :kids (for [k (:kids @xhr)]
            (xhr-to-map k))))

(defn xhr-to-map [xhr]
  (case (type xhr)
    :tiltontec.xhr/xhr
    (xhr-name-to-map xhr)

    :tiltontec.model.core/family
    ;; (keys @xhr)
    (assoc (dissoc @xhr :type :par :kids :cells-flushed)
      :kids (for [k (:kids @xhr)]
              (xhr-to-map k)))

    (select-keys xhr [:type :name :uri])))


;;; --- utilities ----------------

(defn xhr-status-key [xhr]                                  ;; hunh? just a debug hack I think
  (if-let [status (xhr-status xhr)]
    (case status
      200 :ok
      [:error status])
    :unresponded))

(defn xhr-resolved [xhr]                                    ;; deprecated; use xhr-await
  (assert-xhr xhr :resolved)
  (when (xhr-response xhr)
    xhr))

(defn xhr-error? [xhr]
  (assert-xhr xhr :errro?)
  (not= 200 (xhr-status xhr)))

(defn xhrfo [xhr]
  (assert-xhr xhr :xhrfo)
  [(xhr-status-key xhr)
   (<mget xhr :uri)])

(defn xhr-await
  ([xhr] (xhr-await xhr 3))
  ([xhr max-seconds]
   (assert-xhr xhr :await)
   (cond
     (not (= ::xhr (type-cljc xhr)))
     (do (println :xhr-await-passed-non-xhr))

     (xhr-response xhr)
     (do                                                    ;;(println :xhr-resolved (xhr-response xhr))
       ;;(cpr :xhr-resolved (xhrfo xhr))
       xhr)

     (> max-seconds 0)
     #?(:clj  (do
                (cpr :no-response-xhr-await-sleeping-max (:id @xhr) (:uri @xhr) max-seconds (xhrfo xhr))
                (Thread/sleep 1000)
                (recur xhr (dec max-seconds)))
        :cljs (js/setTimeout
                (fn []
                  (cpr :xhr-await-sleeping-max max-seconds (xhrfo xhr))
                  (xhr-await xhr (dec max-seconds))) 1000))

     :default (do (println :xhr-await-timeout! max-seconds (xhrfo xhr))
                  xhr))))

(defn synaptic-xhr
  ([id uri] (synaptic-xhr id uri true))
  ([id uri resolve?]
   ((if resolve? xhr-resolved identity)
     (with-synapse (id)
       (send-xhr id uri)))))

(defn send-unparsed-xhr
  ([id uri] (send-unparsed-xhr id uri true))
  ([id uri resolve?]
   ((if resolve? xhr-await identity)
     (send-xhr id uri
               {:body-parser identity}))))

(defn synaptic-xhr-unparsed
  ([id uri] (synaptic-xhr-unparsed id uri true))
  ([id uri resolve?]
   (let [xhr (with-synapse (id)
               (send-xhr id uri
                         {:body-parser identity}))]
     (when (or (not resolve?)
               (<mget xhr :response))
       xhr))))

;;; --- util ------------------------------

(defn assert-xhr
  ([xhr] (assert-xhr xhr :anon))
  ([xhr tag]
   (cond
     (nil? xhr)
     (err "assert-xhr> xhr is nil" tag)

     (not (any-ref? xhr))
     (do
       (println :xhr? (nil?  xhr))
       ;;(println :xhr? xhr)
       (err "assert-xhr> not any-ref?" (type tag) tag))

     (not= (ia-type xhr) ::xhr)
     (err "assert-xhr> xhr ref not type xhr" (type xhr) tag)

     :default xhr)))

(defn xhr?-response
  "Tolerates nil XHR assuming will arrive later in data flow"
  [xhr]
  (when xhr
    (xhr-response xhr)))

(defn xhr?-ok-body [xhr]
  (when-let [r (xhr?-response xhr)]
    (when (= 200 (:status r))
      (:body r))))


(defn syn-xhr-ok-body [me id uri]
  (when-let [r (xhr-response
                 (with-synapse (id)
                   (send-xhr uri)))]
    (when (= 200 (:status r))
      (:body r))))

;;; --- utils -------------------------------------------

(defn xhr-poller
  ([id uri re-poll-test re-poll-after]
   (xhr-poller id uri re-poll-test re-poll-after (constantly true)))
  ;; todo GC these
  ([id uri re-poll-test re-poll-after new-poller-when]
   (with-synapse (id)
     (when-let [final-uri (if (string? uri)
                            uri (uri))]
       (md/make ::poller
         :re-poll (cI 0)
         :re-poll-test re-poll-test
         :xhr (cF (when (<mget me :re-poll)
                    (send-xhr :get-running final-uri)))
         :response (cF+ [:obs (fn-obs
                                (when ((:re-poll-test @me) new)
                                  #?(:cljs (js/setTimeout
                                             #(with-cc
                                                (mswap!> me :re-poll inc)) re-poll-after)
                                     :clj (go
                                            (<! (timeout re-poll-after))
                                            #(with-cc
                                               (mswap!> me :re-poll inc))))))]
                     (if-let [body (xhr?-ok-body (<mget me :xhr))]
                       (do
                         (merge {:when (now)} body))
                       (when-bound cache))))))))