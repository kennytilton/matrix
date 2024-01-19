(ns tiltontec.cell.async-test
  (:require
   #?(:clj  [clojure.test :refer :all])
   #?(:clj
      [clj-http.client :as client]
      :cljs [cljs-http.client :as client]))
  (:import
   (java.util.concurrent TimeUnit TimeoutException)))

(defn prn-level-3 [f]
  (binding [*print-level* 3] (f)))

(use-fixtures :once prn-level-3)

(comment
  (client/get "http://example.com")
  ;(import '(java.util.concurrent TimeoutException TimeUnit))

;; :async? in options map need to be true
  (let [ag (client/get "http://example.com"
                       {:async? true}
    ;; respond callback
                       (fn [response] (println "response is OK:" #_response))
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
      (prn :xhr er))))
