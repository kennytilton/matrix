(ns tiltontec.learn.b020-async-integrity
  (:require
    [clojure.test :refer :all]
    [clojure.core.async :refer [go timeout <! <!!]]
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
    ;; no AEs (404) is good!
    (is (= :green (mget rx :background-color)))

    ;; wait for fda.gov response
    (prn :sleeping-on-xhr)
    (Thread/sleep 2000)

    ;; confirm AEs retrieved and flagged
    (is (= 200 (mget rx :ae-response)))
    (is (= :red (mget rx :background-color)))))

;;; Note: see learn.solution.b020-async-integrity for solutions.
;;;
;;; Practice exercise 1: Auto-close an alert
;;;   Motivation:
;;;      Sometimes we want to raise an alert for a few moments and then close it automatically, rather
;;;      than compel the user to do so. We simulate this on the backend with a simple
;;;      boolean serving as a proxy for a front-end alert being open.
;;;   Your mission: modify async-auto-close as specified next.
;;;      Modify the test to set the :open? property to false after a couple of seconds.
;;;
;;;   Hints:
;;;      0. See the above test xhr-async-integrity to learn how a property observer
;;;         can be used to alter state.
;;;      1. This code will execute your closing code asynchronously, after a delay.
;;;           (go
;                (let [delay (timeout 1000)]
;                   (<! delay)
;                   (YOUR CLOSING CODE HERE)))
;;;      2. Again refer to test xhr-async-integrity for how to trigger asynchronous change


;; this test is commented out since it would normally cause `lein test` to fail
#_
(deftest async-auto-close
  (cells-init)                                              ;; make sure each test is isolated
  (let [alert (md/make
                :open? (cI false))]
    (is (not (mget alert :open?)))
    (mset! alert :open? true)
    (is (mget alert :open?))
    (Thread/sleep 1500)
    ; YOUR MISSION: get this next test to pass
    (is (not (mget alert :open?)))))



