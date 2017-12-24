(ns tiltontec.xhr.core
  (:require
    [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint cl-format]]

    [tiltontec.util.core :refer [pln countit]]

    #?(:cljs [tiltontec.cell.base
              :refer-macros [pcell un-stopped without-c-dependency cpr]

              :refer [+pulse+ c-pulse c-optimized-away?
                      +client-q-handler+ c-stopped unbound
                      *within-integrity* *defer-changes*
                      *depender* caller-ensure]]
       :clj
    [tiltontec.cell.base :refer :all])

    #?(:cljs [tiltontec.cell.synapse
              :refer-macros [with-synapse]
              :refer []]
       :clj
    [tiltontec.cell.synapse :refer :all])

    #?(:cljs [tiltontec.util.base
              :refer-macros [trx prog1 *trx?* def-rmap-slots]]
       :clj
    [tiltontec.util.base
     :refer :all])

    ; cool------------------------

    #?(:clj
    [tiltontec.cell.observer :refer [fn-obs observe observe-by-type]]
       :cljs [tiltontec.cell.observer
              :refer-macros [fn-obs]
              :refer [observe observe-by-type]])

    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]]
       :clj
    [tiltontec.cell.integrity :refer [with-integrity with-cc]])

    ;cool-----

    #?(:clj
    [tiltontec.cell.core :refer :all]
       :cljs [tiltontec.cell.core
              :refer-macros [c? c?+ c_? c?_]
              :refer [c-in c-reset! make-c-formula]])

    [tiltontec.model.core
     :refer-macros [the-kids mdv!]
     :refer [md-get fasc fm! make md-reset! backdoor-reset!
             mx-par]
     :as md]

    ;cool------


    #?(:clj [clj-http.client :as client]
       :cljs [cljs-http.client :as client])

    #?(:clj [cheshire.core :refer :all])
    )
  )

(def +xhr-sid+ (atom -1))

(defn xhr-init! []
  (reset! +xhr-sid+ -1))

#_(let [uri ae-adderall]
    (client/get uri
      {:async? true}
      (fn [response]
        (cpr :xhr-response!!! (:status response) (keys response) uri)
        (pprint (parse-string (:body response))))
      (fn [exception]
        ;; (println :exc exception)
        (println :beankeys!! (keys (bean exception)))
        ;;(println :bean!! ) (pprint (bean exception))
        (println :status (:status (:data (bean exception)))
                 :body (parse-string (:body (:data (bean exception))) true))
        (println "exception message is: " (.getMessage exception))
        (cpr :error!!!!!)
        )))

(defn xhr-send [xhr]
  (let [uri (md-get xhr :uri)]
    ;;(cpr :xhr-send-sending uri)

    #?(:clj (client/get uri
              {:async? true}
              (fn [response]
                ;;(cpr :xhr-response!!! (:id @xhr) (:status response) uri)
                (countit [:xhr :reponse])
                (if (mdead? xhr)
                  (do (cpr :ignoring-response-to-dead-XHR!!! uri (meta xhr)))
                  (do                                       ;; (cpr :hitting-with-cc *within-integrity*)
                    (with-cc :xhr-handler-sets-responded

                      ;(cpr :xhr-handler-body)
                      ;;(cpr :xhr-handler-sets-responded (:status response) uri)
                      ;; (pprint (parse-string (:body response) true))
                      (md-reset! xhr :response {:status (:status response)
                                                :body   (parse-string (:body response) true)})))))
              (fn [exception]
                (countit [:xhr :exception])
                (let [edata (:data (bean exception))]

                  (cpr :xhr-exception!!! (:id @xhr) uri (:status edata) (parse-string (:body edata) true))
                  ;; (pprint (dissoc (bean exception) :stackTracexx))
                  (when-not (mdead? xhr)
                    (with-cc :xhr-handler-sets-error
                      (cpr :xhr-handler-sets-error)
                      (md-reset! xhr :response {:status (:status edata)
                                                :body   (parse-string (:body edata) true)})))))))))

(defn xhr-status [xhr]
  (or (:status (md-get xhr :response))
      :no-response-yet))

(defn xhr-ok-body [xhr]
  (when-let [r (md-get xhr :response)]
    (when (= 200 (:status r))
      (:body r))))

(defn xhr-error [xhr]
  (when-let [r (md-get xhr :response)]
    (when (not= 200 (:status r))
      (:body r))))

(defn make-xhr
  ([uri]
   (make-xhr uri {}))

  ([uri attrs]
   (assert (string? uri) (str "param uri <" uri "> not a string"))
   (let [xhr (apply make
                    :type :tiltontec.xhr.core/xhr
                    :id (swap! +xhr-sid+ inc)               ;; debug aid
                    :uri uri
                    :response (c-in nil)
                    :select nil
                    :selection (c? (when-let [b (xhr-ok-body me)]
                                     ;; (pln :sel-sees-body!! (md-get me :select) b)
                                     (if-let [ks (md-get me :select)]
                                       (select-keys b ks)
                                       b)))
                    (vec (apply concat (seq (dissoc attrs :send?)))))]
     ;;(cpr :made!!!!!!!!!!)
     (when (:send? attrs)
       (xhr-send xhr))
     xhr)))

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
   (make-xhr uri (merge {:name name :send? true} attrs))))

(defn xhr-response [xhr]
  ;;(println :xresp-sees (md-get xhr :uri)(md-get xhr :status))
  (md-get xhr :response))

(defn xhr-selection [xhr]
  ;;(println :xresp-sees (md-get xhr :uri)(md-get xhr :status))
  (md-get xhr :selection))

(defmethod observe [:kids :tiltontec.xhr.core/xhr] [_ me newv oldv _]
  (when (not= oldv unbound)
    ;; oldv unbound means initial build and this incremental add/remove
    ;; is needed only when kids change post initial creation

    #_;; hhack
        (let [lost (clojure.set/difference (set oldv) (set newv))
              gained (clojure.set/difference (set newv) (set oldv))]

          (cond
            (empty? gained)
            ;; just lose the lost
            (do)

            :default                                        ;; try to cancel?
            (pln :ignoring-new-kid-xhrs!!!!!!! newv)))))

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
    :tiltontec.xhr.core/xhr
    (xhr-name-to-map xhr)

    :tiltontec.model.core/family
    ;; (keys @xhr)
    (assoc (dissoc @xhr :type :par :kids :cells-flushed)
      :kids (for [k (:kids @xhr)]
              (xhr-to-map k)))

    (select-keys xhr [:type :name :uri])))


;;; --- utilities ----------------

(defn xhr-status-key [xhr]
  (xhr-status xhr))

(defn xhr-resolved [xhr]                                    ;; deprecated
  (xhr-response xhr))

(defn xhr-error? [xhr]
  (= (xhr-status-key xhr) :error))

(defn xhrfo [xhr]
  [(xhr-status-key xhr)
   (md-get xhr :uri)])

(defn synaptic-xhr
  ([id uri] (synaptic-xhr id uri true))
  ([id uri resolve?]
   ((if resolve? xhr-resolved identity)
     (with-synapse (id)
       (send-xhr id uri)))))

(defn xhr-await
  ([xhr] (xhr-await xhr 3))
  ([xhr max-seconds]

   (cond
     (xhr-response xhr)
     (do (println :xhr-resolved (xhr-response xhr))
         (println :xhr-resolved (xhrfo xhr))
         xhr)

     (> max-seconds 0)
     #?(:clj  (do
                (println :xhr-await-sleeping max-seconds (xhrfo xhr))
                (Thread/sleep 1000)
                (recur xhr (dec max-seconds)))
        :cljs (js/setTimeout (fn [] (xhr-await xhr (dec max-seconds))) 1000))

     :default (do (println :xhr-await-timeout! (xhrfo xhr))
                  nil))))

