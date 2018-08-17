(ns mxweb.example.testing
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as str]
            [cljs.core.async :refer [<!]]
            [tiltontec.util.core :refer [now]]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.synapse
             :refer-macros [with-synapse]
             :refer []]

            [tiltontec.model.core
             :refer-macros [with-par]
             :refer [fget matrix mx-par <mget mset!> mxi-find mxu-find-name] :as md]

            [mxxhr.core
             :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
                     xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
                     xhr-selection xhr-to-map xhr-name-to-map xhr-response]]

            [mxweb.gen :refer [evt-tag target-value]
             :refer-macros [h1 h2 h3 h4 h5 section label header footer br
                            textarea p span a img ul li input div button]]
            [mxweb.style
             :refer [make-css-inline]
             :as css]
            [goog.dom :as dom]
            [goog.dom.classlist :as classlist]
            [goog.editor.focus :as focus]
            [goog.dom.selection :as selection]
            [goog.events.Event :as event]
            [goog.dom.forms :as form]

            [cljs-http.client :as client]
            [cognitect.transit :as t]
            [clojure.walk :refer [keywordize-keys]]
            [cljs.pprint :as pp]))

(defn test-page-3 []
  [(div {:id      "xx"
         :onclick #(let [me (evt-tag %)]
                     (when true                             ;; (= (:id @me) "xx")
                       (println :xx-click!! % (:id @me) (:clicks @me))
                       (mset!> me :clicks (inc (:clicks @me)))))}

     {:clicks (cI 0)}

     (str "Conten ?! Content rule" (<mget (mx-par me) :clicks) "|Ooops")

     (span {:style  (cF (make-css-inline me
                          :color "blue"
                          :background-color "red"
                          :padding (cF (let [c (<mget (mx-par (:tag @me)) :clicks)]
                                         (str (* c 6) "px")))))
            :hidden (cF (odd? (<mget (mx-par me) :clicks)))}
           {:content (cF (str "Himom style ?! " (<mget (mx-par me) :clicks)))})

     (span {:style "color:red;background-color:#eee;padding:10px"}
           {:content (cF (str "Himom style string! " (<mget (mx-par me) :clicks)))})

     (span {:style (cF (let [c (<mget (mx-par me) :clicks)]
                         {:color            "blue"
                          :background-color "yellow"
                          :padding          (str (* c 6) "px")}))}
           {:content (cF (str "Himom style ?! " (<mget (mx-par me) :clicks)))})

     (div
       (input {:id       "subId"
               :mxweb/type "checkbox"
               :value    "subvalue"
               :checked  (cF (<mget me :subbing?))
               :onclick  #(let [tgt (evt-tag %)]
                            (.stopPropagation %)
                            (mset!> (evt-tag %) :subbing?
                              (not (<mget me :subbing?))))}
              {:subbing? (cI true)})
       (label {:for "subId"}
              "Sub label OK?"))

     (div {:class "color-input" :style "margin-top:24px"}
       "Time color: "
       (input {:name     :timecolor
               :class    (cF (let [xx (fget #(= "xx" (<mget % :id)) me)]
                               (assert xx)
                               (when (even? (<mget xx :clicks))
                                 ["back-cyan" "boulder"])))
               :mxweb/type "text"
               :value    (cI "#0ff")}))

     (textarea {:cols        40 :rows 5
                :wrap        "hard"
                :placeholder "Tell me a story"
                ;;:value "Four score and seven"
                :autofocus   true}))])

(def ae-adderall "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:adderall&limit=1")
(def flickr "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&format=json&api_key=6f93d9bd5fef5831ec592f0b527fdeff&user_id=9395899@N08")
(def github "https://api.github.com/")
(def openstmap "http://www.openstreetmap.org/#map=4/38.01/-95.84")
(def mdn-css "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height?raw&section=Summary")
;;;;

;(defn parse-json$
;  ([j$] (parse-json$ j$ true))
;  ([j$ keywordize]
;   (let [r (t/reader :json)]
;     ((if keywordize keywordize-keys identity)
;       (t/read r j$)))))


#_(go (let [r (<! (client/get ae-adderall {:with-credentials? false}))]
        (if (:success r)
          (do
            (prn :body (keys (:body r)) #_(keys (parse-json$ (:body r))))
            (prn :success (:status r) (keys r) (count (:body r))))

          (prn :NO-success :stat (:status r) :ecode (:error-code r) :etext (:error-text r)))))

(def ae-brand
  "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:~a&limit=~a")

(def rx-nav-unk
  "https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=341248")

(defn evt-std [e]
  (.stopPropagation e)
  (.upgradeDom js/componentHandler))

(defn test-page-4 []

  [(h1 {:class "mdl-typography--display-2"} "Clojure NYC Meet-Up")
   (p {:class "mdl-typography--display-1"} "A Night to Remember")
   (div {:id      "xx"
         :onclick #(let [me (evt-tag %)]
                     (when (= (:id @me) "xx")
                       (println :xx-click!! % (:id @me) (:clicks @me))
                       (mset!> me :clicks (inc (:clicks @me)))
                       (evt-std %)))}

     {:clicks (cI 0)
      :brand  "adderall"}

     (do (println :running! (:id @me))
         (str "Content?! Content rule" (<mget me :clicks) "|Ooops"))

     (br)
     (div
       (button {:class "mdl-button mdl-js-button mdl-js-ripple-effect"
                :onclick #(evt-std %)}
               {:mdl true}
               "MDL Rizing")
       (br)
       (let [xx (mx-par me)]
         (println :id?? (:id @me))
         (assert (= "xx" (:id @xx)))
         (when (odd? (<mget xx :clicks))
           (button {:class "mdl-button mdl-js-button mdl-js-ripple-effect"
                    :onclick #(evt-std %)}
                   {:mdl true}
                   "MDL Rizing Dyno"))))
     (br)

     (div {}
         {:ae (cF (with-synapse (:github [])
                    (send-xhr rx-nav-unk #_ ae-adderall)))}
         (p (pp/cl-format "~a adverse event" (<mget me :brand)))
         (when-let [r (xhr-response (<mget me :ae))]
           (str "Booya!:" r)))

     #_ (div (let [ax (with-synapse (:github [])
                      (send-xhr ae-adderall))]
             (if-let [ae (first (:results (:body (xhr-response ax))))]

               [(str "Booya!! " (keys ae))
                (br)(:transmissiondate ae)
                (br)(str (:senderorganization (:sender ae)))
                (br)(str (keys (:patient ae)))
                (br)(str (dissoc (:patient ae) :drug))
                (br)(let [pt (:patient ae)]
                      (str "Age " (:patientonsetage pt) ", gender " (:patientsex pt)))
                (br)(div (for [d (take 3 (:drug (:patient ae)))]
                           (str (keys d))))]
               "No response yet"))))])

(defn matrix-build! []
  (md/make ::startwatch
    :mx-dom (cFonce (md/with-par me (test-page-4)))))

(comment
  [ae-count 1
   brand "adderall"
   top (send-xhr :brand-adv-events (cl-format nil ae-brand brand ae-count)
                 {:brand brand
                  :kids  (cF (when-let [aes (:results (xhr-selection me))]
                               (countit :aes aes)
                               (the-kids
                                 (for [ae aes]
                                   (make ::md/family
                                         :name :adverse-event
                                         :ae (select-keys ae [:transmissiondate
                                                              :sender
                                                              :serious])
                                         :patient (dissoc (:patient ae) :drug)
                                         :kids (patient-drugs ae))))))})])

#_
(div {:style {:background-color "yellow"
              :display "flex"
              :min-height "96px"
              :flex-direction "row"
              :flex-wrap "wrap"

              ;;:gap "24px"
              :justify-content "space-between"
              }}
  (map #(span {:style {:background "cyan"
                       :flex-basis "content"}}{}
          (str % ",")) (str/split "four score and seven years ago today our forefathers brought forth on this continent" " ")))