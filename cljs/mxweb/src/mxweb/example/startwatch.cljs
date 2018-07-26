
(ns mxweb.example.startwatch
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [now]]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer-macros [with-par]
             :refer [matrix mx-par <mget mset!> mxi-find mxu-find-name] :as md]
            [mxweb.gen :refer [evt-tag target-value] :refer-macros [h1 input div]]
            [tiltontec.cell.synapse :refer-macros [with-synapse]]))

(declare clock time-color)

(defn matrix-build! []
      (md/make ::startwatch
               :mx-dom (cFonce (md/with-par me
                                            [(div {}
                                               (h1 {} "On your mark. Get set...open your browser console.")
                                               (clock))]))))

;; Now we are getting a bit advanced with our dataflow, and I must say this is not something
;; I have done much of except when modelling physical systems (ISTR a pendulum), but we see
;; below an important feature of Cells (if you do need it): stream semantics, aka "RxJS Lite".
;;
;; Cell formulas are declarative and authored with a static mindset, even though the whole point
;; of Cells is to manage change gracefully. And that is the declarative magic many have first
;; discovered in ReactJS: describe how the world should be given any relevant data and let the
;; underlying engine arrange for that to happen as the world changes.
;;
;; But what if it is the *stream* of values undertaken by some property that matters? Below we
;; see an example of throttling a busy stream down to a desired pace. A so-called "synapse"
;; checks how recently it let a value "through" to its containing formula simply by keeping
;; a bit of history in an atom closed over by the synapse body and then attaching meta data
;; for the Cells engine to work off. (Aside: in Lisp we used multiple values.)
;;
;; The synapse-test source contains other synapse tricks such as bulking values in threes,
;; returning the delta of the two most recent values, and not passing values until a certain
;; delta -- a sensitiviyt, if you will -- from the prior reported value has been reached.
;; In fact, a synapse is sort of an anonymous cell sitting in the middle of a containing
;; Cell HLL code formula, and the like any cell we can do any semantic filtering we like
;; in the HLL code of a synapse.
;;
;; Again, this does not come up a lot in real-world UI programming, but when we get to the
;; independent problem of Callback Hell synapses will prove indispensable.
;;
;; To run this, just make sure you have the whole project built (via ./scripts/build) and
;; then open startwatch.html in your browser. It will run automatically. Open the browser
;; console to see evidence of the synaptic throttling.
;;
;; Btw, this started as a copy of a more elaborate stopwatch demo but then got whittled down
;; just to show a synapse at work.
;;

(def hits (atom 0))
(def start (atom 0))
(def maxr (atom 0))

(defn clock []
  (reset! hits 0)
  (reset! maxr 0)
  (reset! start (now))

  (div {:class   "example-clock"
        ;;
        ;; The ephemeral? option may be new to you. It says "revert me to nil immediately after propagation".
        ;; Ths way a stream of identical values always looks like something new. It also is handy for
        ;; events which should happen and be propagated but not be around if the same rule runs because
        ;; something else triggered it.
        ;;
        ;; Further down we kick off a timer that just sets "tick" to true
        ;; and lets the "change" propagate.
        ;;
        :tick    (cI false :ephemeral? true)

        ;; We rather trickily set off a rapid timer when the div comes to life.
        ;; This is just a handy place to do that. It only runs once because it has
        ;; no dependencies to trigger re-execution.
        ;;
        ;; Also, this whole example is a bit silly: if we wanted the ticks to happen just
        ;; once per second we could set that interval here. What we are doing is simulating
        ;; an input over which we have no control, such as an external device that sends
        ;; data at a fixed rate we cannot change.

        :ticker  (cF (js/setInterval #(mset!> me :tick true) 10))

        :content (cF (if (<mget me :tick)
                         (let [d (js/Date.)
                               es (/ (- (now) @start) 1000)]
                           (swap! hits inc)
                           (when (> es 1)
                            (let [r (Math/round (/ @hits es))]
                              (when (> r @maxr)
                                (reset! maxr r))))
                           (str @maxr " > "(first (str/split (.toTimeString d) " ")) ":" (.getUTCMilliseconds d)))
                         "*checks watch*"))
        #_ (cF (let [self me]
                       (if (with-synapse (:throttle [last (atom nil)])
                             ;; the following is quite a bunch of code revealing some of how synapses work.
                             ;; With common requirements such as time-throttling we can reduce all this
                             ;; to a one-liner cSynTimely macro or something.
                             ;; (println :self-me self me (= self me))
                             (when (<mget self :tick)
                               ;; the browser console will show with this print statement the full load
                               ;; of events coming through. Ouside the synapse body, a second print statememnt
                               ;; will show when the "content" formula actually gets re-run (and actually
                               ;; then leads to a DOM update).
                               ;;(println :tick-raw-unthrottled (now))

                               (let [prop? (or (nil? @last)
                                               (>= (- (now) @last) 1))]
                                 (when prop?
                                   (reset! last (now)))

                                 ;; In Common Lisp we can say (values true :propagate). For Closure, we must by
                                 ;; synapse API contract (a) wrap the return value in a vector and (b) use meta
                                 ;; to communicate whether or not to propagate.
                                 ^{:propagate prop?} [true])))

                         (let [d (js/Date.)]
                           ;; this next print reveals which ticks got out of the synapse.
                           ;;(println :tick!!!!!!!!!!!!!!!!!)
                           (str (first (str/split (.toTimeString d) " ")) ":" (.getUTCMilliseconds d)))
                         "*checks watch*")))}))