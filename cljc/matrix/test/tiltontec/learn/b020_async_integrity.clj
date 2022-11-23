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
    [tiltontec.cell.integrity :refer [with-async-change]]
    [tiltontec.learn.util :refer :all]
    [clj-http.client :as client]
    [cheshire.core :refer :all]))

(def ae-lookup
  "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:%s&limit=3")

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
             :ae-lookup-uri (cF+ [:obs (fn [slot me new prior cell]
                                         (when new
                                           (client/get new
                                             {:async? true}
                                             (fn [response]
                                               (with-async-change :lookup-ok
                                                 (mset! me :ae-response (:status response))))
                                             (fn [exception]
                                               (with-async-change :lookup-ng
                                                 (let [edata (:data (bean exception))]
                                                   (mset! me :ae-response (:status edata))))))))]
                              (when-let [name (mget me :drug-name)]
                                (format ae-lookup name))))]
    (is (nil? (mget rx :drug-name)))
    (is (nil? (mget rx :ae-lookup-uri)))

    (mset! rx :drug-name "adderall")
    (is (not (nil? (mget rx :ae-lookup-uri))))
    (is (nil? (mget rx :ae-response)))

    ;; trigger (fake) response handling while XHR outstanding
    (mset! rx :ae-response 404)
    (is (= :green (mget rx :background-color)))

    ;; wait for fda.gov response
    (prn :sleeping-on-xhr)
    (Thread/sleep 2000)

    ;; confirm AEs retrieved and flagged
    (is (= 200 (mget rx :ae-response)))
    (is (= :red (mget rx :background-color)))))