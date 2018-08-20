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
             :refer [tag-dom-create
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

(declare sith-ids obi-loc scroller-button sith-view the-sith-list
  nth-app-sith sith-app mtx-sith-ids disabled?)

(defn obs-siths-lost-abort [slot me news olds _]
  (when (not= olds unbound)
    (doseq [old olds]
      (when old
        (when (not (some #{old} news))
          (not-to-be old))))))

(defn app-scrollers [app]
  (div {:class    "css-scroll-buttons"
        :disabled (cF (with-obi? app))}
    ;
    ; The spec says to scroll two at a time but load Siths
    ; one at a time. Hmm. So in both cases we take the next
    ; Sith (master or apprentice) and set the ID buffer to
    ; include that along with a nil at beginnning or end depending
    ; on direction. This effectively loads the next by itself
    ; then, once its data is retrieved, loads the second by itself.
    ;
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
    ;
    ; Here we see a formulaic cell used just for lifecycle reasons, in this
    ; case so that the socket connection is guaranteed to be created before
    ; the "app" instance comes to life. In different circumstances, we could
    ; have the :obi-trakker socket change to different URIs, with superseded
    ; sockets being released in an observer.
    ;
    :obi-trakker (cF (if-let [sock (js/WebSocket. "ws://localhost:4000")]
                       (do
                         (set! (.-onmessage sock)
                           #(mset!> me :obi-loc (.-name (.parse js/JSON (.-data %)))))
                         sock)
                       (throw (js/Error. "Web socket connection failed: "))))
    ;
    ; The one "unsolicited" Matrix input. Others are XHR responses.
    ;
    :obi-loc (cI nil)
    ;
    ; These inputs derive from the XHR lookups of Sith information, but have
    ; the initial SIth defined by the spec hard-coded.
    ;
    :sith-ids (cI [nil nil 3616 nil nil])
    ;
    ; Siths are computed from sith-ids, which changes incrementally, so we
    ; check the property cache for a Sith with the right id before making
    ; a new one.
    ;
    :siths (cF+ [:obs obs-siths-lost-abort]
             (mapv (fn [sid]
                     (when sid
                       (or (some (fn [s]
                                   (when (and s (= sid (sith-id s)))
                                     s))
                             (if (= cache unbound) [] cache))
                         (make-sith me sid))))
               (sith-ids me)))
    ;
    ; This could just be a function call since the cost of
    ; checking at most five Siths is negligible.
    ;
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

     :disabled (cF (or
                     (disabled? (mx-par me))
                     ;
                     ; The spec says not to scroll if there is no "next" Sith,
                     ; but also wants optimistic loading. ie, iff we *know* there
                     ; is no next (because we have loaded a Sith with no next) do
                     ; we disable the scroller.
                     ;
                     ; So you can bang away at a scroller and end up with blanks
                     ; by goading the scroller into scrolling past the last
                     ; master or apprentice.
                     ;
                     (if-let [other-s (nth-app-sith me other-index)]
                       (if-let [i (info other-s)]
                         (nil? (get-in i [role :id]))
                         false)
                       false)))}))

(defn sith-view [par slot-n]
  (letfn [(sith-info [slot-n]
            (info (nth-app-sith par slot-n)))]
    (li {:class "css-slot"
         :style (cF (when-let [sith (nth-app-sith par slot-n)]
                      (when (with-obi? sith)
                        ;
                        ; I guess we style in red because we are required
                        ; to stop loading info when Obi is on the home planet
                        ; of a Sith we have in view.
                        ;
                        "color:red")))}
      (h3 {:content (cF (:name (sith-info slot-n)))})

      (h6 {:content (cF (when-let [i (sith-info slot-n)]
                          (str "Homeworld: " (get-in i [:homeworld :name]))))}))))

;;; --- sugar to hide some mget/mx-find noise -------------------------------

(defn sith-ids [me]
  (<mget me :sith-ids))

(defn obi-loc [me]
  (<mget me :obi-loc))

(defn sith-app [mx]
  (mxu-find-type mx ::sith-app))

(defn nth-app-sith [me n]
  (nth (<mget (sith-app me) :siths) n))

(defn mtx-sith-ids [mx]
  (<mget (sith-app mx) :sith-ids))

(defn the-sith-list [me]
  (mxu-find-name me "sith-list"))

(defn disabled? [me]
  (<mget me :disabled))