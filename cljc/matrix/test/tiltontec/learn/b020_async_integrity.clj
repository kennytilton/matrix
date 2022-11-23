(ns tiltontec.learn.b020-async-integrity
  (:require
    [clojure.test :refer :all]
    [clojure.core.async :refer [go timeout <!]]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.cell.base :refer :all]
    [tiltontec.cell.core :refer :all]
    [tiltontec.model.base :refer [md-cz]]
    [tiltontec.model.core :refer :all :as md]
    [tiltontec.cell.integrity :refer [without-integrity with-integrity with-cc] :as integrity]
    [tiltontec.learn.util :refer :all]

    [clj-http.client :as client]
    [cheshire.core :refer :all]
    [clojure.walk :refer [keywordize-keys]]))

(def ae-lookup
  "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:%s&limit=3")

(def ^:dynamic *m* :unbound)
(comment
  (binding [*m* 42]
    (doseq [n (range 3)
          :let [i (-> n
                    inc
                    range
                    rand-nth)]]
      (let [showm #(println %1 *m*)]
        (binding [*m* (* n 100)]
          (go
            (<! (timeout (+ 1000 (* i 1000))))
            (showm :showm)
            (println :m-n *m* n))))))

  (binding [*m* :top]
    (let [cb (fn [r]
               (prn :cb-sees *m*))]
      (let [xhr (binding [*m* :preget]
                  (client/get (format ae-lookup "cats")
                    {:async? true}
                    cb
                    (fn [exception]
                      (let [edata (:data (bean exception))]
                        (prn :xhr-exception!!! *m*)))))]
        (prn :fini *m*))))

  (let [xhr (binding [*within-integrity* true]
              (client/get (format ae-lookup "cats")
                {:async? true}
                (fn [response]
                  (prn :xhr-send-response!!! *within-integrity* (:status response))

                  #_(if (mdead? xhr)
                      (do (cpr :ignoring-response-to-dead-XHR!!! uri (meta xhr)))
                      (do
                        ;;(cpr :hitting-with-cc *within-integrity*)
                        (with-cc :xhr-handler-sets-responded
                          (md-reset! xhr :response {:status (:status response)
                                                    :body   ((:body-parser @xhr) (:body response))})))))
                (fn [exception]
                  ;;(prn "xhr-send> raw exception" exception)
                  (let [edata (:data (bean exception))]
                    (prn :xhr-exception!!! (:status edata) (parse-json$ (:body edata)))))))]
    (prn :xhr xhr)))

(deftest xhr-async-integrity
  (cells-init)                                              ;; make sure each test is isolated

  (let [rx (md/make
             :drug-name (cI nil :obs obs-slot-new)
             :background-color (cF+ [:obs obs-slot-new]
                                 (case (mget me :ae-response)
                                   200 :red                 ;; adverse events are bad
                                   404 :green
                                   :none))
             :ae-response (cI nil :obs obs-slot-new)
             :ae-lookup (cF+ [:obs (fn [slot me new prior cell]
                                     (prn :ae-lookup-obs-entry :def *defer-changes* :within *within-integrity*
                                       :chgs (:change (integrity/ufb-counts)) :uri new)
                                     (when new
                                       (client/get new      ;; (format ae-lookup new)
                                         {:async? true}
                                         (fn [response]
                                           (without-integrity ;; lose inherited bindings
                                             (with-integrity (:change :lookup-ok)
                                               (mset! me :ae-response (:status response)))))
                                         (fn [exception]
                                           (without-integrity ;; lose inherited bindings
                                             (with-integrity (:change :lookup-ng)
                                               (let [edata (:data (bean exception))]
                                                 (mset! me :ae-response (:status edata)))))))))]
                          (when-let [name (mget me :drug-name)]
                            (format ae-lookup name))))]
    ;(is (nil? (mget rx :drug-name)))
    ;(is (nil? (mget rx :ae-lookup)))
    #_#_(prn :TOP-RX_MADE!!!!!!!!!!!!)
            (prn :TOP-preset-adderall :def *defer-changes* :within *within-integrity*
              :chgs (integrity/ufb-counts))
    (mset! rx :drug-name "cats")
    #_(prn :TOP-POST-SET-adderall-PRESLEEP :def *defer-changes* :within *within-integrity*
        :chgs (integrity/ufb-counts))
    (Thread/sleep 5000)
    #_(prn :TOP-SLEEP-fini :def *defer-changes* :within *within-integrity*
        :chgs (integrity/ufb-counts))

    ;(prn :TOP-FINAL-mget!!!!!!!!!!!!!!!!!!!! (:ae-response @rx))
    (prn :response (mget rx :ae-response) (:ae-response @rx))
    (prn :rx!!!! @rx)
    ))

(comment
  (do
    (prn :bing)
    (Thread/sleep 2000)
    (prn :boom)))


(comment

  (adverse-event-lookup2))