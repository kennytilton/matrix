(ns tiltontec.learn.b020-wrapping
  (:require
    [clojure.test :refer :all]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.cell.base :refer :all]
    [tiltontec.cell.core :refer :all]
    [tiltontec.model.base :refer [md-cz]]
    [tiltontec.model.core :refer :all :as md]
    [tiltontec.cell.integrity :refer [with-integrity with-cc] :as integrity]
    [tiltontec.learn.util :refer :all]

    [clj-http.client :as client]
    [cheshire.core :refer :all]
    [clojure.walk :refer [keywordize-keys]]))

(def ae-lookup
  "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:%s&limit=3")

(comment

  (let [xhr (client/get (format ae-lookup "cats")
              {:async? true}
              (fn [response]
                (prn :xhr-send-response!!! (:status response))

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
                  (prn :xhr-exception!!! (:status edata) (parse-json$ (:body edata))))))]
    (prn :xhr xhr)))

(deftest adverse-event-lookup
  (cells-init)                                              ;; make sure each test is isolated

  (let [rx (md/make
             :drug-name (cI nil :obs obs-slot-new)
             :background-color (cF+ [:obs obs-slot-new]
                                 (case (mget me :ae-response)
                                   200 :green
                                   404 :red
                                   :none))
             :ae-response (cI nil :obs obs-slot-new)
             :ae-lookup (cF+ [:obs (fn [slot me new prior cell]
                                     (obs-slot-new slot me new prior cell)
                                     (prn :ae-lookup-obs-entry :def *defer-changes* :within *within-integrity*
                                       :chgs (:change (integrity/ufb-counts)) :uri new)
                                     (when new
                                       (prn :getting-uri!!!!!!!!! new)
                                       (client/get new      ;; (format ae-lookup new)
                                         {:async? true}
                                         (fn [response]
                                           (binding [*within-integrity* false
                                                     *defer-changes* false]
                                             (prn :ae-lookup-obs-OK-handler :def *defer-changes* :within *within-integrity*
                                               :chgs (:change (integrity/ufb-counts)) :uri new)
                                             (with-integrity (:change :lookup-ok)
                                               (prn :ae-lookup-obs-OK-handler-WI!!-setting :def *defer-changes* :within *within-integrity*
                                                 :chgs (:change (integrity/ufb-counts)) :uri new)
                                               (mset! me :ae-response (:status response))
                                               (prn :ae-lookup-obs-OK-handler-WI!!-set-BACK :def *defer-changes* :within *within-integrity*
                                                 :chgs (:change (integrity/ufb-counts)) :uri new))))
                                         (fn [exception]
                                           (binding [*within-integrity* false
                                                     *defer-changes* false]
                                             (let [edata (:data (bean exception))]
                                               (prn :exception!! {:status (:status edata)
                                                                  :body   (parse-json$ (:body edata))})
                                               (with-integrity (:change :lookup-ng)
                                                 (prn :inside-wi!!! (:status edata))
                                                 (mset! me :ae-response (:status edata)))))))))]
                          (when-let [name (mget me :drug-name)]
                            (format ae-lookup name))))]
    ;(is (nil? (mget rx :drug-name)))
    ;(is (nil? (mget rx :ae-lookup)))
    (prn :TOP-RX_MADE!!!!!!!!!!!!)
    (prn :TOP-preset-adderall :def *defer-changes* :within *within-integrity*
      :chgs (integrity/ufb-counts))
    (mset! rx :drug-name "cats")
    (prn :TOP-POST-SET-adderall-PRESLEEP :def *defer-changes* :within *within-integrity*
      :chgs (integrity/ufb-counts))
    (Thread/sleep 5000)
    (prn :TOP-SLEEP-fini :def *defer-changes* :within *within-integrity*
      :chgs (integrity/ufb-counts))

    (prn :TOP-FINAL-mget!!!!!!!!!!!!!!!!!!!! (:ae-response @rx))
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