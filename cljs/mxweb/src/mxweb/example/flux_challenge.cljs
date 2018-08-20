(ns mxweb.example.flux-challenge
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [now pln]]
            [tiltontec.cell.base :refer [unbound]]

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
            [tiltontec.cell.synapse :refer-macros [with-synapse]]))

(def SLOT_CT 5)

(declare scroller-button sith-view the-sith-list <get-info the-matrix mtx-sith-ids disabled?
  <get-obi-loc)

(defn matrix-build! []
  (md/make ::flux-challenge
    :obi-trakker (cF (if-let [sock (js/WebSocket. "ws://localhost:4000")]
                       (do
                         (set! (.-onmessage sock)
                           #(mset!> me :obi-loc (.-name (.parse js/JSON (.-data %)))))
                         sock)
                       (throw (js/Error. "Web socket connection failed: "))))
    :obi-loc (cI nil)
    :sith-ids (cI [-1 -2 3616 -3 -4])

    :mx-dom (cFonce (md/with-par me
                      [(div {:class "app=container"}
                         (h1 {:class   "css-planet-monitor"
                              :content (cF (str "Obi-Wan currently on "
                                             (or (<get-obi-loc me) "...dunno")))})

                         (section {:class "css-scrollable-list"}
                           (ul {:class "css-slots"
                                :name  "sith-list"}

                             {:kid-values  (cF (mtx-sith-ids me))
                              :kid-key     #(<mget % :sith-id)
                              :kid-factory (fn [me sith-id]
                                             (sith-view me sith-id))

                              :next-up     (cF (get-in (<get-info (first (<mget me :kids)))
                                                 [:master :id]))
                              :next-down   (cF (get-in (<get-info (last (<mget me :kids)))
                                                 [:apprentice :id]))}

                             (kid-values-kids me cache))

                           (div {:class    "css-scroll-buttons"
                                 :disabled (cF (some #(<mget % :with-obi?) (<mget (the-sith-list me) :kids)))}
                             (scroller-button "up")
                             (scroller-button "down"))))]))))

(defn scroller-button [dir]
  (button
    {:class    (cF (str "css-button-" dir
                     (when (disabled? me)
                       " css-button-disabled")))

     :onclick  (cF #(let [ul (<mget me :ul)]
                      (dotimes [_ 2]
                        (mset!> (the-matrix me) :sith-ids
                          (case dir
                            "up" (vec (concat [(<mget ul :next-up)] (subvec (mtx-sith-ids me) 0 (dec SLOT_CT))))
                            "down" (vec (conj (subvec (mtx-sith-ids me) 1) (<mget ul :next-down))))))))

     :disabled (cF (or
                     (disabled? (mx-par me))
                     (not (<mget (<mget me :ul) (case dir "up" :next-up "down" :next-down)))))}
    {:ul       (cF (the-sith-list me))}))

(declare obs-sith-bracket slot-set-maybe)

(defn sith-view [par sith-id]
  (li {:class "css-slot"
       :style (cF (when (<mget me :with-obi?)
                    "color:red"))}
    {
     :sith-id   sith-id

     :look-up   (cF (let [sith-id (<mget me :sith-id)]
                      (when (> sith-id 0)
                        (send-xhr (str "http://localhost:3000/dark-jedis/" sith-id)))))

     :info      (cF+ [:obs (fn [slot me sith]
                             (when sith
                               (obs-sith-bracket me sith-id sith)))]

                  (when-let [lku (<mget me :look-up)]
                    (when (= 200 (:status (xhr-response lku)))
                      (:body (xhr-response lku)))))

     :with-obi? (cF (when-let [i (<get-info me)]
                      (= (get-in i [:homeworld :name])
                        (<get-obi-loc me))))}

    (h3 {:content (cF (let [i (<get-info (mx-par me))
                            n (:name i)]
                        n))})

    (h6 {:content (cF (when-let [hw (get-in (<get-info (mx-par me))
                                      [:homeworld :name])]
                        (str "Homeworld: " hw)))})))

(defn obs-sith-bracket [me sith-id sith]
  (with-cc :bracket-info
    (let [curr-ids (mtx-sith-ids me)
          slot-n (.indexOf curr-ids sith-id)
          [m? m-ids] (slot-set-maybe :m curr-ids (dec slot-n) (get-in sith [:master :id]))
          [a? new-ids] (slot-set-maybe :a m-ids (inc slot-n) (get-in sith [:apprentice :id]))]
      (when (or m? a?)
        (mset!> (the-matrix me) :sith-ids new-ids)))))

(defn slot-set-maybe [tag slots slot-n elt]
  (if (and elt (>= slot-n 0) (< slot-n SLOT_CT) (not= elt (nth slots slot-n)))
    [true (vec (concat (subvec slots 0 slot-n)
                 [elt]
                 (subvec slots (inc slot-n))))]
    ;; else
    [false slots]))

;;; --- conveniences -------------------------------

(defn the-matrix [mx]
  (mxu-find-type mx ::flux-challenge))

(defn <get-obi-loc [me]
  (<mget (the-matrix me) :obi-loc))

(defn mtx-sith-ids [mx]
  (<mget (the-matrix mx) :sith-ids))

(defn the-sith-list [me]
  (mxu-find-name me "sith-list"))

(defn disabled? [me]
  (<mget me :disabled))

(defn <get-info [me]
  (<mget me :info))