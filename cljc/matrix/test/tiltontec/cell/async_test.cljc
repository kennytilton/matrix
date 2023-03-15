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

