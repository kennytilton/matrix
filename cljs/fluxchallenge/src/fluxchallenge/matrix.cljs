(ns fluxchallenge.matrix
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [now pln]]
            [tiltontec.cell.base :refer [unbound]]
            [tiltontec.cell.evaluate :refer [not-to-be]]
            [tiltontec.cell.core :refer-macros [cF cF+ cFonce] :refer [cI]]
            [tiltontec.cell.integrity :refer-macros [with-cc]]
            [tiltontec.model.core
             :refer-macros [with-par]
             :refer [matrix mx-par <mget mset!> mxi-find mxu-find-name mxu-find-type
                     kid-values-kids] :as md]
            [mxweb.gen :refer [evt-tag target-value]
             :refer-macros [h1 h3 h6 input div section button ul li]]
            [mxweb.html
             :refer [io-read io-upsert io-clear-storage
                     tag-dom-create
                     mxu-find-tag mxu-find-class
                     tagfo tag-dom
                     dom-has-class dom-ancestor-by-tag]
             :as mxweb]

            [mxxhr.core
             :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status xhr-response
                     xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
                     xhr-selection xhr-to-map xhr-name-to-map]]
            [tiltontec.cell.synapse :refer-macros [with-synapse]]
            [fluxchallenge.sith :refer [with-obi? SLOT-CT make-sith info sith-id]]))

(declare scroller-button sith-view the-sith-list
  nth-app-sith sith-app mtx-sith-ids disabled?)

(defn sith-ids [me]
  (<mget me :sith-ids))

(defn obi-loc [me]
  (<mget me :obi-loc))

(defn obs-siths-lost-abort [slot me news olds _]
  (when (not= olds unbound)
    (doseq [old olds]
      (when old
        (when (not (some #{old} news))
          (not-to-be old))))))

(defn app-scrollers [app]
  (div {:class    "css-scroll-buttons"
        :disabled (cF (with-obi? app))}
    (scroller-button "up" :master 0
      (fn [me]
        (let [s0 (nth-app-sith me 0)
              m-id (and s0 (info s0)
                        (get-in (info s0) [:master :id]))]
          (mset!> app :sith-ids (vec (concat [nil m-id]
                                       (subvec (sith-ids app) 0 3)))))))
    (scroller-button "down" :apprentice (dec SLOT-CT)
      (fn [me]
        (let [s-last (nth-app-sith me (dec SLOT-CT))
              app-id (and s-last
                          (info s-last)
                          (get-in (info s-last) [:apprentice :id]))]
          (mset!> app :sith-ids
            (vec (concat (subvec (sith-ids app) 2)
                   [app-id nil]))))))))

(defn matrix-build! []
  (md/make ::sith-app
    :obi-trakker (cF (if-let [sock (js/WebSocket. "ws://localhost:4000")]
                       (do
                         (set! (.-onmessage sock)
                           #(mset!> me :obi-loc (.-name (.parse js/JSON (.-data %)))))
                         sock)
                       (throw (js/Error. "Web socket connection failed: "))))
    :obi-loc (cI nil)
    :sith-ids (cI [nil nil 3616 nil nil])
    :siths (cF+ [:obs obs-siths-lost-abort]
             (mapv (fn [sid]
                     (when sid
                       (let [curr-siths (if (= cache unbound) [] cache)]
                         (or (some (fn [s]
                                     (when (and s (= sid (sith-id s)))
                                       s))
                               curr-siths)
                           (make-sith me sid)))))
               (sith-ids me)))
    :with-obi? (cF (some with-obi? (<mget me :siths)))

    :mx-dom (cFonce
              (let [app me]
                (md/with-par me
                  [(div {:class "app=container"}
                     (h1 {:class   "css-planet-monitor"
                          :content (cF (str "Obi-Wan currently on "
                                         (or (obi-loc app) "...dunno")))})

                     (section {:class "css-scrollable-list"}
                       (ul {:class "css-slots"
                            :name  "sith-list"}
                         (mapv #(sith-view me %)
                           (range SLOT-CT)))

                       (app-scrollers app)))])))))

(defn scroller-button [dir role other-index on-click-handler]
  (button
    {:class    (cF (str "css-button-" dir
                     (when (disabled? me)
                       " css-button-disabled")))

     :onclick  #(on-click-handler (evt-tag %))

     :disabled (cF
                 (or
                   (disabled? (mx-par me))
                   (if-let [other-s (nth-app-sith me other-index)]
                     (if-let [i (info other-s)]
                       (do
                         ;;(prn :buttdis-info!! other-index i role)
                         (nil? (get-in i [role :id])))
                       (do                                ;(prn :no-other-info other-index)
                         true))
                     (do                                    ;(prn :no-other other-index)
                       true))))}
    {:ul (cF (the-sith-list me))}))

(defn sith-app [mx]
  (mxu-find-type mx ::sith-app))

(defn nth-app-sith [me n]
  (nth (<mget (sith-app me) :siths) n))

(defn sith-view [par slot-n]
  (letfn [(sith-info [slot-n]
            (info (nth-app-sith par slot-n)))]
    (li {:class "css-slot"
         :style (cF (when-let [sith (nth-app-sith par slot-n)]
                      (when (with-obi? sith)
                        "color:red")))}
      (h3 {:content (cF (or (:name (sith-info slot-n)) ""))})

      (h6 {:content (cF (if-let [i (sith-info slot-n)]
                          (str "Homeworld: " (get-in i [:homeworld :name]))
                          ""))}))))

;;; --- conveniences -------------------------------

(defn mtx-sith-ids [mx]
  (<mget (sith-app mx) :sith-ids))

(defn the-sith-list [me]
  (mxu-find-name me "sith-list"))

(defn disabled? [me]
  (<mget me :disabled))