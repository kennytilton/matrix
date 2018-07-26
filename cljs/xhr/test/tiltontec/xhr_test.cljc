(ns tiltontec.xhr-test
  (:require
    [clojure.test :refer :all]
    [clojure.string :as str]
    [clojure.xml :as xml]
    [clojure.set :as set]
    [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint cl-format]]
    [tiltontec.util.core :refer [pln xor now *plnk-keys*
                                 counts countit counts-reset]]
    [tiltontec.cell.evaluate :refer [c-get <cget c-awaken not-to-be]]

    #?(:clj
    [tiltontec.cell.base :refer :all]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [cells-init +pulse+ unbound cpr]])
    [tiltontec.cell.integrity :refer [*dp-log*]]
    [tiltontec.cell.core :refer :all]

    #?(:clj
    [tiltontec.model.core :refer :all :as md]
       :cljs [tiltontec.model.core
              :refer-macros [the-kids mdv!]
              :refer [<mget fasc fm! make md-reset! backdoor-reset!
                      mx-par]
              :as md])

    [tiltontec.xhr
     :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status xhr-response
             xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
             xhr-selection xhr-to-map xhr-name-to-map]]

    #?(:clj
    [tiltontec.cell.synapse :refer :all]
       :cljs [tiltontec.cell.synapse
              :refer-macros [with-synapse]
              :refer []])

    #?(:clj
    [tiltontec.cell.observer :refer [fn-obs]]
       :cljs [tiltontec.cell.observer :refer-macros [fn-obs]])

    [cheshire.core :refer :all]

    #?(:clj
    [clj-http.util :as httpu]
       :cljs [cljs-http.util :as httpu])

    #?(:clj
    [clj-http.client :as client]
       :cljs [cljs-http.client :as client])))

#_(httpu/url-encode "https://api.fda.gov/drug/enforcement.json?search=recalling_firm:Teva Woman%27s Health&limit=1")

(declare cf-await fn-await)

(def ae-adderall "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:adderall&limit=3")

(deftest fda-adderall-ok
  (cells-init)
  (let [xhr (xhr-await (make-xhr ae-adderall {:send? true}))]
    (assert xhr)
    (is (= 200 (xhr-status xhr)))
    (is (= 3 (count (:results (xhr-selection xhr)))))
    (let [ae (first (:results (xhr-selection xhr)))]
      ;;(pln :ae!!! (keys ae))
      (pprint (select-keys ae [:primarysourcecountry
                               :transmissiondate
                               :sender
                               :companynumb
                               :serious
                               :occurcountry]))
      (pprint (keys (:patient ae))))))

(def ae-yabba "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:yabbadabba&limit=3")

(deftest fda-yanks-ng
  (cells-init)
  (let [xhr (xhr-await (send-xhr ae-yabba))]
    (is (= 404 (xhr-status xhr)))
    (is (nil? (:results (xhr-selection xhr))))))

(def rx-nav-test "https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=341248")

(deftest nih-rxnav-ok
  (cells-init)
  (let [xhr (xhr-await (send-xhr rx-nav-test))]
    (is (= 200 (xhr-status xhr)))
    ;;(pprint (:body (xhr-response xhr)))
    (let [ae (first (:results (xhr-selection xhr)))]
      (pln :ae (keys ae)))))

(deftest fda-adderall-syntax-error
  (cells-init)
  (let [xhr (xhr-await (send-xhr (str/replace ae-adderall #"search" "surch")))]
    (prn :adderall-err-delib (xhr-error xhr))
    (is (not= 200 (xhr-status xhr)))
    (let [{:keys [code message]} (:error (xhr-error xhr))]
      (is (= code "BAD_REQUEST"))
      (is (.contains message "surch"))
      (prn :code code))))

(def flickr "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&format=json&api_key=6f93d9bd5fef5831ec592f0b527fdeff&user_id=9395899@N08")
#_(let [uri flickr]
    (client/get uri
      {:async? true}
      (fn [response]
        (cpr :xhr-response!!! (:status response) (keys response) uri)
        (pprint (parse-json# (:body response))))
      (fn [exception]
        ;; (println :exc exception)
        (println :beankeys!! (keys (bean exception)))
        ;;(println :bean!! ) (pprint (bean exception))
        (println :status (:status (:data (bean exception)))
                 :body (parse-json$ (:body (:data (bean exception))) true))

        (cpr :error!!!!!)
        )))

(def ae-aldactone
  "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:aldactone&limit=1")

(def ae-brand
  "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:~a&limit=~a")

(def ae-ndc
  "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.product_ndc:~alimit=1")

(def lbl-adderall
  "https://api.fda.gov/drug/label.json?search=openfda.product_ndc:57844-0117")

(def recall-novartis
  "https://api.fda.gov/drug/enforcement.json?search=recalling_firm:novartis&limit=3")

;; --- generics ---------
(def drug-label
  "https://api.fda.gov/drug/label.json?search=openfda.product_ndc:~a")

(def mfr-recalls
  "https://api.fda.gov/drug/enforcement.json?search=recalling_firm:~a&limit=~a")

#_(deftest fda-adderall-ok
    (let [xhr (xhr-await (send-xhr ae-adderall))]
      (is (= 200 (xhr-status xhr)))
      (is (= 3 (count (:results (xhr-selection xhr)))))))

(deftest recall-fail
  (cells-init)
  (let [xhr (xhr-await
              (send-xhr
                (str "https://api.fda.gov/drug/enforcement.json?"
                     (do                                    ;; httpu/url-encode
                       "search=recalling_firm:Teva Woman&limit=1"))))]
    (println :Teva (xhr-status-key xhr)
             (:recalling_firm (first (:results (xhr-selection xhr)))))
    (is (= 200 (xhr-status xhr)))))

(declare xhr-dump)

(defn patient-drugs [ae]
  (cF (the-kids
        (for [drug (do (:drug (:patient ae)))
              :let [ndc (first (get-in drug [:openfda :product_ndc]))
                    mfr-name (first (get-in drug [:openfda :manufacturer_name]))]]
          (do (countit [:ae :drug])
              (when-not ndc
                (countit :no-ndc)
                #_(pprint drug))

              (when ndc
                (prn :drugfo ndc mfr-name)
                (make ::md/family
                  :name :patient-drug
                  :ndc ndc
                  :drugindication (:drugindication drug)
                  :medicinalproduct (:medicinalproduct drug)
                  :kids (cF (the-kids
                              (when ndc
                                (send-xhr :drug-label (cl-format nil drug-label ndc)))
                              (when mfr-name
                                (send-xhr :mfr-recall (cl-format nil mfr-recalls
                                                        (str/replace mfr-name #"[',\.]" "")
                                                        1))))))))))))

;; todo next test needs to wait on respoonses
#_
(deftest fda-adverse-lite
  ;; for 3 AEs
  ;;   for each drug taken by patient
  ;;     get the labeling
  ;;     get up to 3 recall notices from the manufacturer
  (cells-init)
  (counts-reset)
  (let [ae-count 1
        brand "adderall"
        top (send-xhr :brand-adv-events (cl-format nil ae-brand brand ae-count)
              {:brand brand
               :kids  (cF (when-let [aes (:results (xhr-selection me))]
                            (countit :aes aes)
                            (prn :ae-count (count aes))
                            (the-kids
                              (for [ae aes]
                                (make ::md/family
                                  :name :adverse-event
                                  :ae (select-keys ae [:transmissiondate
                                                       :sender
                                                       :serious])
                                  :patient (dissoc (:patient ae) :drug)
                                  :kids (patient-drugs ae))))))})]


    (when (xhr-await top)
      (prn :statuskey (xhr-status-key top))
      (is (= :ok (xhr-status-key top)))
      (is (= ae-count (count (md-kids top))))
      (doseq [ae (md-kids top)]
        (doseq [drug (take 16 (md-kids ae))]
          (prn :drugfo2 (<mget drug :ndc))
          (doseq [info (md-kids drug)]
            (prn :drugstat (xhr-status info)(xhr-status-key info) :ndc (:ndc drug))
            (is (some #{(xhr-status-key info)} [:ok [:error 400] [:error 404] 400 404])))))

      ;; (pprint (xhr-to-map top))

      (println :fini!!!!!!!! @counts))))

(defmethod xhr-name-to-map :drug-label [xhr]
  {:name :drug-label
   :keys (select-keys (first (:results (:body (:response @xhr))))
                      [:effective_time
                       :package_label_principal_display_panel])})



(defmethod xhr-name-to-map :mfr-recall [xhr]
  {:name :mfr-recall
   :keys (select-keys (first (:results (:body (:response @xhr))))
                      [:report_date
                       :reason_for_recall
                       :product_description])})

(defmacro getxhr [id uri & child-xhrs]
  `(make-xhr ~uri
     {:send? true
      :name  ~id
      :kids  (cF ~@child-xhrs)}))

(defn xhr-dump
  ([xhr] (xhr-dump "untagged" xhr))
  ([tag xhr] (if (= 200 (xhr-status-key xhr))
               (case (:name @xhr)
                 :drug-label (cpr tag (:name @xhr) (:dbg @xhr)
                                  :status (xhr-status-key xhr)
                                  :drug-label-warning (first (:warnings (first (:results (<mget xhr :selection))))))
                 :mfr-recall (cpr tag (:name @xhr) (:dbg @xhr)
                                  :status (xhr-status-key xhr)
                                  (first (:results (<mget xhr :selection)))
                                  :sel (select-keys (first (:results (<mget xhr :selection)))
                                                    [:state :reason_for_recall]))
                 (cpr tag :xhr-dump-unknown (:name @xhr) (:dbg @xhr)))
               (do
                 (cpr tag :xhr-dump-fail! tag (xhr-status-key xhr) (:uri @xhr))))))

(defn xhr-html [uri]
  (send-xhr uri
    {:body-parser identity}))

(deftest xhr-index-html
  ;; get just one
  (cells-init)

  (let [xhrs (cF+ [:slot :synch!
                   :obs (fn-obs (when new
                                  (println :fini!!! (map xhrfo new))
                                  (is (= 1 (count new)))
                                  (is (every? #(= :ok (xhr-status-key %)) new))))]
                  (prn :checking-google)

                  (let [google (with-synapse (:s-goog)
                                 (xhr-html "http://google.com"))]
                    (when-let [resp (<mget google :response)]
                      (println :got-google-response!!!)

                      (list google))))]

    (let [r (cf-await xhrs 3)]
      (is (not (nil? r)))
      (when r
        (println :statkey (xhr-status (first r)))
        (is (= 1 (count r)))
        (is (every? #(= 200 (xhr-status %)) r)))
      (println :topfini (map xhrfo (c-get xhrs))))))

(deftest xhr-whoshiring-html
  ;; get just one
  (cells-init)

  (let [xhrs (cF+ [:slot :synch!
                   :obs (fn-obs (when new
                                  (println :fini!!! (map xhrfo new))
                                  (is (= 1 (count new)))
                                  (is (every? #(= :ok (xhr-status-key %)) new))))]
                  (prn :checking-hiring)

                  (let [hiring (with-synapse (:s-hnews)
                                 (xhr-html "https://news.ycombinator.com/item?id=16967543"))]
                    (when-let [resp (<mget hiring :response)]
                      (println :got-hiring-response!!!)

                      (list hiring))))]

    (let [r (first (cf-await xhrs 10))]
      (is (not (nil? r)))
      (when r
        (println :statkey (xhr-status r))

        (is (= 200 (xhr-status r)))
        ;;(pln :respo!! (xhr-response r))
        ;;(pln :parsed (xml/parse (:body (xhr-response r))))
        (pln :respo!! (xhrfo r)))
      )))

(deftest xhr-tree-simple
  (binding [*plnk-keys* [:xhr]]
    (let [top (make-xhr "http://google.com"
                {:send?       true
                 :body-parser identity
                 :kids        (cF (cpr :kidrule!!!!!!)
                                  (when-let [parent (<mget me :response)]
                                    (the-kids
                                      (make-xhr "http://yahoo.com"
                                        {:par         me
                                         :send?       true
                                         :body-parser identity})
                                      (make-xhr "http://youtube.com"
                                        {:par         me
                                         :send?       true
                                         :body-parser identity}))))})]

      ;;(xhr-send top)
      (when (xhr-await top)
        (when (<mget top :response)
          (is (= 200 (xhr-status top)))
          (is (= 2 (count (md-kids top))))
          (doseq [k (md-kids top)]
            (xhr-await k)
            (do                                             ;; when (xhr-resolved k)
              (is (= 200 (xhr-status k))))))
        (println :fini)))))

;;; ------------------------------------------------------
;;;   Shake 'n Bake
;;; ------------------------------------------------------

(deftest xhr-sequentially
  ;; kick off one at a time waiting for the prior to complete before sending next.
  (cells-init)

  (let [xhrs-cell (cF+ [:slot :synch!
                        :obs (fn-obs (when new
                                       (println (str :xhrseq-new!! (count new)))
                                       ;; (println :fini!!! (map xhrfo new))
                                       (is (= 3 (count new)))
                                       #_(is (every? #(= :responded (xhr-status-key %))
                                                     new))))]

                       (when-let [google (xhr-response
                                           (with-synapse (:s-goog)
                                             (xhr-html "http://google.com")))]

                         (when-let [yahoo (xhr-response
                                            (with-synapse (:s-yahoo)
                                              (xhr-html "http://yahoo.com")))]
                           (when-let [youtube (xhr-response
                                                (with-synapse (:s-tube)
                                                  (xhr-html "http://youtube.com")))]
                             (cpr :youtube!)
                             (list google yahoo youtube)))))]
    ;; cf-await means cell-formulaic await. Although the body above shows xhr-wait, that
    ;; is just the body of the cell. In cf-await we patiently wait for the cell formula to
    ;; return a non-nil value, and

    (let [r (cf-await xhrs-cell)]

      (is (not (nil? r)))
      (when r
        (is (= 3 (count r)))
        (is (every? #(= 200 (:status %)) r)))
      (println :topfini r))))

(deftest xhr-parallel-one-result
  ;; make a list of requests and produce a list of the responses when all three have completed.
  (cells-init)
  (let [sites (do ["http://google.com" "http://yahoo.com" "http://youtube.com"])
        xhrs-cell (cF (when-let [xhrs (with-synapse (:make-xhrs [])
                                        (map xhr-html sites))]
                        (when (every? #(some #{(xhr-status-key %)} [:ok :error]) xhrs)
                          xhrs)))]
    (let [r (cf-await xhrs-cell)]
      (is (not (nil? r)))
      (when r
        (is (= 3 (count r)))
        (is (every? #(some #{(xhr-status-key %)} [:ok :error]) r))))))

(deftest xhr-if-error-else
  ;; do an if-else based on error or success of first xhr
  ;;
  ;; also, we introduce some syntactic sugar: synaptic-xhr
  ;;
  (cells-init)
  (binding [*dp-log* true]
    (letfn [(cx-if-else [goog-uri]
              (cF (cpr :runnning!!!)
                  (when-let [google (with-synapse (:s-goog)
                                      (send-unparsed-xhr :s-goog "http://google.com" false))]
                    (cpr :got-goog??? google)
                    (when (<mget google :response)
                      (cpr :got-goog!!! (xhrfo google))
                      (if (xhr-error? google)
                        (when-let [yahoo (synaptic-xhr-unparsed :s-yahoo "http://yahoo.com")]
                          (cpr :goog-error-try-yahoo)
                          (list yahoo))
                        (when-let [youtube (synaptic-xhr-unparsed :s-youtube "http://youtube.com")]
                          (cpr :goog-ok-add-youtube)
                          (list google youtube)))))))]
      (let [cx-ok (cx-if-else "http://google.com")]
        (let [r (cf-await cx-ok)]
          (is (not (nil? r)))
          (when r
            (is (= 2 (count r)))
            (is (some #(.contains (<mget % :uri) "google") r))
            (is (some #(.contains (<mget % :uri) "youtube") r)))))
      #_(let [cx-ok (cx-if-else "http://googlexxxxxx.com")]
          (let [r (cf-await cx-ok)]
            (is (not (nil? r)))
            (when r
              (is (= 1 (count r)))
              (is (some #(.contains (<mget % :uri) "yahoo") r))))))))

(deftest xhr-send-group-get-as-received
  ;; kick off  requests and return them one at a time in order received.
  (cells-init)
  (let [sites ["http://google.com" "http://yahoo.com" "http://youtube.com" "http://example.com"]
        responses (atom [])
        h (let [open-xhrs (atom nil)]
            (cF (let [xhrs (with-synapse (:make-xhrs)
                             (reset! open-xhrs (set (map #(send-unparsed-xhr :group % false) sites))))
                      done (filter #(when (<mget % :response) %) @open-xhrs)]
                  (when (seq done)
                    (assert (= 1 (count done)) (str "done count NG:" (count done)))
                    (reset! open-xhrs (set/difference @open-xhrs done))
                    (first done)))))
        h1 (cF+ [:obs (fn-obs
                        (when new
                          (println :got-xhr!!!!!! new)
                          (swap! responses conj new)))]
                (when-let [xhr (c-get h)]
                  (xhrfo xhr)))]
    (dotimes [_ 3]
      (cf-await h1))
    (Thread/sleep 2000)
    (println :responses @responses)
    (is (= 4 (count @responses)))))

(defn xhr-dummy [id options]
  (make-xhr "http://example.com"
    {:id          id
     :send?       true
     :kids        (:kids options)
     :body-parser (fn [b]
                    (when-let [lat (:latency options)]
                      ;(println :latency-sim lat)
                      (Thread/sleep lat))
                    (let [r (:response options)]
                      ;(println :opts!!!!! options)
                      (if (fn? r)
                        (r (:params options))
                        r)))}))

(defmacro with-xhr-body [id xhr]
  `(:body (xhr-response
            (with-synapse (~id)
              ~xhr))))

(deftest reactx-snb-f15
  ;;;
  ;;; Inspired by: https://stackoverflow.com/questions/28402376/how-to-compose-observables-to-avoid-the-given-nested-and-dependent-callbacks
  ;;; That says:
  ;;;   get f1 and f2 via two concurrent XHRs
  ;;;   get f3 via XHR using f1 as parameter
  ;;;   concurrently with f3:
  ;;;      get f4 and f5 via two concurrent XHRs using f2
  ;;;   combine f3, f4, and f5 for a net response.
  ;;; The use case specifies latencies for each XHR.
  ;;;
  (cells-init)
  (let [h (cF (let [f15 (merge
                          (when-let [f1v (with-xhr-body :get-f1
                                                        (xhr-dummy :f1-service-a
                                                          {:latency  100
                                                           :response "responseA"}))]
                            {:f1 f1v
                             :f3 (with-xhr-body :get-f3
                                                (xhr-dummy :service-c
                                                  {:params   {:f1 f1v}
                                                   :latency  60
                                                   :response #(str "responseB-" (:f1 %))}))})
                          (when-let [f2v (with-xhr-body :get-f2
                                                        (xhr-dummy :f2-service-b
                                                          {:latency  40
                                                           :response 100}))]
                            {:f2 f2v
                             :f4 (with-xhr-body :get-f4
                                                (xhr-dummy :service-d
                                                  {:params   {:f2 f2v}
                                                   :latency  140
                                                   :response #(+ 40 (:f2 %))}))
                             :f5 (with-xhr-body :get-f5
                                                (xhr-dummy :service-e
                                                  {:params   {:f2 f2v}
                                                   :latency  55
                                                   :response #(+ 5000 (:f2 %))}))}))]
                (println :so-far!!!!!!!!!!! f15)

                (let [must [:f3 :f4 :f5]
                      out (select-keys f15 must)
                      vals (vals out)]
                  (when (and (= (count vals) (count must))
                             (not-any? nil? vals))
                    (println :coool-out!!!! out)
                    out))))]
    (cf-await h)
    (println :f1-f3!!!!!!!!!!! (<cget h))))

(deftest reactx-tree-2
  (let [top (make
              :f1 (cF (xhr-dummy :f1-service-a
                        {:latency  100
                         :response "responseA"}))

              :f2 (cF (xhr-dummy :f2-service-b
                        {:latency  40
                         :response 100}))

              :f3 (cF (when-let [f1v (:body (xhr-response (<mget me :f1)))]
                        (xhr-dummy :service-c
                          {:params   {:f1 f1v}
                           :latency  60
                           :response #(str "responseB-" (:f1 %))})))

              :f45 (cF (when-let [f2v (:body (xhr-response (<mget me :f2)))]
                         (cpr :building-245!!!!!!!!!!!!!!!!!!!!!!)
                         (vector
                           (xhr-dummy :service-d
                             {:params   {:f2 f2v}
                              :latency  140
                              :response #(+ 40 (:f2 %))})
                           (xhr-dummy :service-e
                             {:params   {:f2 f2v}
                              :latency  55
                              :response #(+ 5000 (:f2 %))}))))


              :result (cF (when (and (every? #(<mget me %) [:f3 :f45])
                                     (every? xhr-response (<mget me :f45)))
                            (let [rs (concat (map #(xhr-response (<mget me %)) [:f1 :f2 :f3])
                                             (map xhr-response (<mget me :f45)))]
                              (when (every? identity rs)
                                (map :body rs))))))]

    (let [r (fn-await :top #(:result @top))]
      (println :boom r))
    (println :fini)))

(deftest reactx-tree
  (let [top (make
              :f1 (cF (xhr-dummy :f1-service-a
                        {:latency  100
                         :response "responseA"}))

              :f2 (cF (xhr-dummy :f2-service-b
                        {:latency  40
                         :response 100}))

              :f3 (cF (when-let [f1v (:body (xhr-response (<mget me :f1)))]
                        (xhr-dummy :service-c
                          {:params   {:f1 f1v}
                           :latency  60
                           :response #(str "responseB-" (:f1 %))})))

              :f45 (cF (when-let [f2v (:body (xhr-response (<mget me :f2)))]
                         (vector
                           (xhr-dummy :service-d
                             {:params   {:f2 f2v}
                              :latency  140
                              :response #(+ 40 (:f2 %))})
                           (xhr-dummy :service-e
                             {:params   {:f2 f2v}
                              :latency  55
                              :response #(+ 5000 (:f2 %))}))))

              :result (cF (when (and (every? #(<mget me %) [:f3 :f45])
                                     (every? xhr-response (<mget me :f45)))
                            (let [rs (concat (map #(xhr-response (<mget me %)) [:f1 :f2 :f3])
                                             (map xhr-response (<mget me :f45)))]
                              (when (every? identity rs)
                                (map :body rs))))))]

    (let [r (fn-await :top #(:result @top))]
      (println :boom r))
    (println :fini)))

;;; --- Utils --------------------------

(defn cf-await
  ([c] (cf-await c 5))
  ([c max-seconds]
   (println :cf-waiting!!!!!! max-seconds)
   (loop [x 0]
     (let [r (c-get c)]
       (cond
         r r
         (< x 10) (do
                    (println :cf-awaitsleeping x)
                    (Thread/sleep 1000)
                    (recur (inc x)))
         :default (do
                    (println :maxo)
                    nil))))))

(defn fn-await
  ([fn] (fn-await :anon fn))
  ([tag fn] (fn-await tag fn 3))
  ([tag fn max-seconds]
   (or (fn)
       (if (> max-seconds 0)
         #?(:clj  (do
                    (cpr :no-response-xhr-await-sleeping-max max-seconds)
                    (Thread/sleep 1000)
                    (recur tag fn (dec max-seconds)))
            :cljs (js/setTimeout
                    (fn []
                        (cpr :fn-await-sleeping-max max-seconds)
                        (fn-await tag fn (dec max-seconds))) 1000))

         (do (println :fn-await-timeout! max-seconds)
             nil)))))

;;; --- Archive ------------------------------------------------


;#_(binding [*dp-log* true]
;    ;; ill-advised example here emphasizing this is purgatory, not heaven: the first xhr never renders
;    ;; because we quickly change the site triggering the rule to run, which first disconnects the outer cell
;    ;; from all dependencies including the first XHR, which then no longer propagates to the outer rule
;    ;; because it sees it is no longer a dependency.
;    ;;
;    ;; Moral: see examples above where we either process multiple XHRs in parallel or in sequence by letting each
;    ;; complete before hitting the next. It is actually cool that a changing dependency triggers a complex collextion
;    ;; of Ajax request results to start over from the exact point of the dependency, but for now the Matrix XHR module
;    ;; cannot save us from having to think about outstanding requests still in transit.
;
;    (cells-init)
;    (let [site (cI "http://google.com" :slot :site)
;          h (cF+ [:slot :htop
;                  :obs (fn-obs (println :new-async-html!!!!! new :old old))]
;                 (pln :h-top!!!!!!!!!!!!!!!!!!!!!!! @sends)
;                 (when-let [xhr (with-synapse (:home-page [])
;                                  ;; the dependency on site will trigger a re-run of
;                                  ;; this synapse generator, displacing the old
;                                  (pln :syn-rule-makes+sends-new-xhr!!!!!!! @sends (type cache))
;                                  (when-not (= cache unbound)
;                                    (not-to-be cache))
;                                  (swap! sends inc)
;                                  (let [s (c-get site)]
;                                    (send-xhr s)))]
;
;                   (when-let [r (xhr-response xhr)]
;                     (pln :the-html-rule-returns!!!!!! r)
;                     (str (c-get site) " = <h1>" (subs (:body r) 0 40) "</h1>"))))]
;      (cpr :kickoff (c-get h))
;
;      (cpr :changing-site!!!!!!!!!!!!!!!!!!)
;      (c-reset! site "http://yahoo.com")))