(ns todomx.core
  (:require
    [goog.dom :as dom]
    [tiltontec.model.core :as md]
    [tiltontec.tag.html :refer [tag-dom-create *tag-trace*]]
    ;;[goog.net.XhrIo :as xhr]

    ; --- vvvv matrix-build! possiblilities --------
    [todomx.matrix :as tmx]
    [example.gentle-intro :as gi]
    [todomx.ticktock :as tt]
    [todomx.startwatch :as sw]
    [ajax.core :refer [GET POST]]
    [taoensso.tufte :as tufte :refer (defnp p profiled profile)]))

(enable-console-print!)

(tufte/add-basic-println-handler! {})

;function reqListener () {
;                         console.log(this.responseText);
;                         }
;
;var oReq = new XMLHttpRequest();
;oReq.addEventListener("load", reqListener);
;oReq.open("GET", "http://www.example.org/example.txt");
;oReq.send();

;(defn xhr-handler [response]
;  (.log js/console (str response)))
;
;(defn xhr-error-handler [{:keys [status status-text]}]
;  (.log js/console (str "something bad happened: " status " " status-text)))

;(GET "http://google.com"
;     {:headers {"Access-Control-Allow-Headers" "Content-Type"
;                "Access-Control-Allow-Origin" "*"}
;      :handler xhr-handler
;      :error-handler xhr-error-handler})

(let [root (dom/getElement "tagroot")

      app-matrix (tmx/matrix-build!)                         ;; <-- switch to (gi/matrix-build!) to explore the gentle intro
      app-dom (binding [*tag-trace* nil]                ;; <-- set to nil if console too noisy
                (tag-dom-create
                  (md/md-get app-matrix :mx-dom)))
      ;;io (goog.net.XhrIo.)
      ;;req (js/XMLHttpRequest. )
      ]

  ;(client/get "http://example.com"
  ;            {:async? true}
  ;            ;; respond callback
  ;            (fn [response] (println "response is:" response))
  ;            ;; raise callback
  ;            (fn [exception] (println "exception message is: " (.getMessage exception))))

  ;(println :xhr!!! req)
  ;(println :creds (.-withCredentials req))
  ;
  ;(.addEventListener req "load" (fn [e] (println :booya e)))
  ;(.open req "GET" "http://google.com")
  ;(.setRequestHeader req "Access-Control-Allow-Origin" "*")
  ;(.send req )
  ;(println (str "IO!!! " io))
  ;(println :json? (.stringify js/JSON
  ;            {:hello "world"}))

  ;(with-routes!
  ;  {"/something" {:status 200 :content-type "application/json"
  ;                 :body   (json/generate-string {:hello "world"})}}
  ;  (let []
  ;    (println :url uri)
  ;    (.send goog.net.XhrIo (str uri "/something?test=42")
  ;           (fn [e]
  ;             (let [r (.-target e)]
  ;               (println "xhr target" r)
  ;               (println "OK?" (.isSuccess r))
  ;               (println "txt" (.getResponseText r)))))))

  (set! (.-innerHTML root) nil)
  (dom/appendChild root app-dom)
  (when-let [route-starter (md/md-get app-matrix :router-starter)]
    (route-starter)))
