(ns tiltontec.cell.async-test
  (:import (java.util.concurrent TimeoutException TimeUnit))
  (:require
    #?(:clj
       [clj-http.util :as httpu]
       :cljs [cljs-http.util :as httpu])

    #?(:clj
       [clj-http.client :as client]
       :cljs [cljs-http.client :as client])))

(comment
  (client/get "http://example.com")
  ;(import '(java.util.concurrent TimeoutException TimeUnit))


  ;; :async? in options map need to be true
  (let [ag (client/get "http://example.com"
    {:async? true}
    ;; respond callback
    (fn [response] (println "response is OK:" #_ response))
    ;; raise callback
    (fn [exception] (println "exception message is: " (.getMessage exception))))]
    (prn :ag!!!!!!! (future? ag) (type ag))
    (let [er (try
      (let [r (.get ag 1 TimeUnit/SECONDS)]
        (prn :got-ag!)
        r)

      (catch TimeoutException e
        ;; Cancel the request, it's taken too long
        (.cancel ag true)
        e))]
      (prn :xhr er)))
  )

  (md/make
    :ae-events? (cF+ [:async? true
                      ; optional chance to filter async response before it
                      ; gets set as the mx slot value
                      :and-then (fn [c lookup]
                                   (= 200 (.-statusCode ^dht/Response lookup)))]
                  (dht/get (.https Uri "api.fda.gov" "drug/event.json"
                             {"limit"  "1"
                              "search" (str "patient.drug.openfda.brand_name:"
                                         (mget me :title))})))

    ;--
    :title (cI title)
    :completed (cI completed))

  )
