(ns mxweb-trainer.core
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset!
                     mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [section header h1 input footer p a span label ul li div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [tiltontec.mxweb.html :refer [tag-dom-create]]))

(enable-console-print!)

(defn color-input []
  (div {:class "color-input"}
    "Time color: "
    (input {:name     :timecolor
            :tag/type "text"
            :value    (cI "#f00")
            :onchange (fn [e]
                        (prn :evt (evt-mx e) (target-value e))
                        (mset! (evt-mx e)
                         :value (target-value e)))})))

(defn clock []
  (div {:class   "example-clock"
        :style   (cF (str "color:" (mget (mxu-find-name me :timecolor) :value)))

        :content (cF (if (mget me :tick)
                       (-> (js/Date.)
                         .toTimeString
                         (str/split " ")
                         first)
                       "*checks watch*"))}
    {:tick   (cI false :ephemeral? true)
     :ticker (cF (js/setInterval
                   #(mset! me :tick true) 1000))}))

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (js/console.log "start")
  (let [root (dom/getElement "app")
        app-matrix (md/make
                     ::ticktock
                     :mx-dom (cFonce (md/with-par me
                                       [(div {}
                                          (h1 {} "Hello, world. 'Tis now....")
                                          (clock)
                                          (color-input)
                                          )])))
        app-dom (tag-dom-create
                  (md/mget app-matrix :mx-dom))]

    (set! (.-innerHTML root) nil)
    (dom/appendChild root app-dom)))

(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(comment
  (ns ticktock.core
    (:require [goog.dom :as dom]
              [clojure.string :as str]
              [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
              [tiltontec.model.core
               :refer [matrix mx-par <mget <mget mset!> mset!>
                       mxi-find mxu-find-name] :as md]
              [mxweb.gen
               :refer [evt-tag target-value]
               :refer-macros [h1 input div span]]
              [mxweb.html :refer [tag-dom-create]]))

  (enable-console-print!)

  (defn clock []
    (div {:class   "example-clock"
          :style   (cF (str "color:" (<mget (mxu-find-name me :timecolor) :value)))

          :content (cF (if (<mget me :tick)
                         (-> (js/Date.)
                           .toTimeString
                           (str/split " ")
                           first)
                         "*checks watch*"))}
      {:tick   (cI false :ephemeral? true)
       :ticker (cF (js/setInterval
                     #(mset!> me :tick true) 1000))}))

  (defn color-input []
    (div {:class "color-input"}
      "Time color: "
      (input {:name     :timecolor
              :tag/type "text"
              :value    (cI "#f00")
              :onchange #(mset!> (evt-tag %)
                           :value (target-value %))})))

  (let [root (dom/getElement "tagroot")
        app-matrix (md/make
                     ::ticktock
                     :mx-dom (cFonce (md/with-par me
                                       [(div {}
                                          (h1 {} "Hello, world. 'Tis now....")
                                          (clock)
                                          (color-input))])))
        app-dom (tag-dom-create
                  (md/<mget app-matrix :mx-dom))]

    (set! (.-innerHTML root) nil)
    (dom/appendChild root app-dom)))