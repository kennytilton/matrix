(ns mxweb.mxintro.rxtrak
  (:require [cljs.pprint :as pp]
            [cljs-time.coerce :as tmc]
            [clojure.string :as str]
            [bide.core :as r]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]

            [tiltontec.util.core :refer [pln xor now map-to-json json-to-map uuidv4]]
            [tiltontec.cell.base :refer [unbound ia-type *within-integrity* *defer-changes*]]
            [tiltontec.cell.core :refer-macros [cF cF1 cF+ cFn cF+n cFonce] :refer [cI cset!> cswap!>]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]
            [tiltontec.cell.evaluate :refer [<cget]]


            [tiltontec.model.core :refer [matrix mx-par <mget mset!> mswap!>
                                          fget mxi-find mxu-find-type
                                          kid-values-kids] :as md]
            [mxweb.html
             :refer [io-read io-upsert io-clear-storage
                     tag-dom-create
                     dom-tag tagfo tag-dom
                     dom-has-class dom-ancestor-by-tag]
             :as mxweb]

            [mxweb.gen
             :refer-macros [section header h1 input footer p a
                            img h2 h3 h4
                            pre span label ul li div button br code]
             :refer [dom-tag evt-tag]]

            [mxweb.style :refer [make-css-inline]]

            [goog.dom :as dom]
            [goog.dom.classlist :as classlist]
            [goog.editor.focus :as focus]
            [goog.dom.selection :as selection]
            [goog.events.Event :as event]
            [goog.dom.forms :as form]

            [mxweb.example.todo
             :refer [make-todo td-title td-created bulk-todo
                     td-completed td-due-by td-upsert td-delete! load-all
                     td-id td-toggle-completed!]]
            ))

(def LISPNYC "Lisp-NYC")

;(io-clear-storage)

(def lesson (cF+n [:slot :lesson-no
                   :obs (fn-obs
                          (io-upsert LISPNYC
                            (.stringify js/JSON (map-to-json new))))]

              (if-let [ljs (io-read LISPNYC)]
                (json-to-map
                  (.parse js/JSON ljs))
                {:lesson 0})))

(declare lessons)


(defn back-forth []
  (div {:style {:display         "flex"
                :font-size       "24px"
                :background      "#ffd"
                :justify-content "space-between"}}
    (button {:style   (cF (when (zero? (:lesson (<cget lesson)))
                            "visibility:hidden"))
             :onclick (fn [_]
                        (cswap!> lesson update-in [:lesson]
                          #(if (pos? %) (dec %) 0)))}
      "<< ")
    (span {:onclick #(.reload js/window.location)}
      (second (nth lessons (max 0 (:lesson (<cget lesson))))))
    (button {:style   (cF (if (< (:lesson (<cget lesson))
                                (dec (count lessons)))
                            "display:block" "visibility:hidden"))
             :onclick (fn [e]
                        (cswap!> lesson update-in [:lesson]
                          #(if (< % (dec (count lessons)))
                             (inc %) %)))}
      ">>")))

(def hellocz
  "
  (let [a (cI 0)
        b (cF+ [:slot :b
                :obs (fn-obs (println :OBS slot :new new))]
            (min 2 (<cget a)))
        c (cF (min 40 (* 10 (<cget a))))
        x (cF (println :computing-x)
            (+ (<cget b)
              (<cget c)))
        dump (fn [tag]
               (println :DUMP tag :a (<cget a) :b (<cget b) :c (<cget c) :x (<cget x)))]
    (dump :starting)
    ;; note we now have standalone cells and per-cell observers.
    ;; note the absence of explicit subscribe (even <cget goes away soon).

    (cswap!> a inc)
    ;; note the absence of explicit publish. cswap!> or cset!> suffice.
    ;; note that X recomputes just once, tho B and C both change.
    (dump :post-inc-a-to-one)

    (cswap!> a inc)
    (dump :post-inc-a-to-two)

    (cswap!> a * 2)
    ;; note that B observer no longer fires since B stays at 2
    (dump :post-double-a-to-four)

    (cset!> a 4)
    ;; note that nothing runs since A was already 4
    (dump :post-set-a-to-four-again)
    )")

(defn hello-lisp-nyc []
  (md/make
    :mx-dom (cF (md/with-par me
                  [(back-forth)
                   (h1 "Hello, Lisp NYC!")
                   (img {:alt "I Love Lisp"
                         :src "resources/ilovelisp.jpeg"})]))))

(defn hello-cells []
  (let [a (cI 0)
        b (cF+ [:slot :b
                :obs (fn-obs (println :OBS slot :new new))]
            (min 2 (<cget a)))
        c (cF (min 40 (* 10 (<cget a))))
        x (cF (println :computing-x)
            (+ (<cget b)
              (<cget c)))
        dump (fn [tag]
               (println :DUMP tag :a (<cget a) :b (<cget b) :c (<cget c) :x (<cget x)))]
    (dump :starting)
    ;; note we now have standalone cells and per-cell observers.
    ;; note the absence of explicit subscribe (even <cget goes away soon).

    (cswap!> a inc)
    ;; note the absence of explicit publish. cswap!> or cset!> suffice.
    ;; note that X recomputes just once, tho B and C both change.
    (dump :post-inc-a-to-one)

    (cswap!> a inc)
    (dump :post-inc-a-to-two)

    (cswap!> a * 2)
    ;; note that B observer no longer fires since B stays at 2
    (dump :post-double-a-to-four)

    (cset!> a 4)
    ;; note that nothing runs since A was already 4
    (dump :post-set-a-to-four-again)
    )
  (md/make
    :mx-dom (cFonce (md/with-par me
                      [(back-forth)
                       (h1 "Hello, Cells!")
                       (img {:src "resources/smalldag.png"})
                       (h3 "Now with standalone cells and per-cell observers. (See console.)")
                       (pre {:style {:font-size "16px"
                                     :margin    "48px"}}
                         (str/replace hellocz #"<" "&lt;"))]))))

(defn next-refill [mx]
  (<mget mx :next-refill))

(defn drug-name [mx]
  (<mget mx :title))

(defn refill-within [mx]
  (<mget mx :refill-within))

(defn alarm? [mx]
  (<mget mx :alarm?))

(defn ms-days [d]
  (* d 24 60 60 1000))

(def hellomd
  "
  (let [rx (md/make
             :title \"adderall\"
             :refills (cI 5)
             :next-refill (cI (+ (now) (ms-days 5)))
             :seconds-remaining (cF+ [:obs (fn-obs
                                             (println :seconds-left new :for (drug-name me)))]
                                  (int (/ (- (next-refill me) (now)) 1000))))]
    (md/make
      :mx-dom (cFonce (md/with-par me
                        [(back-forth)
                         (h1 \"Hello, Model!\")
                         (h3 \"Model, yes. Working model, no.\")
                         (span (str \"Seconds to \"
                                 (drug-name rx)
                                 \":\" (refill-within rx)))))]))))")

(defn hello-model []
  (let [rx (md/make
             :title "adderall"
             :refills (cI 5)
             :next-refill (cI (+ (now) (ms-days 5)))
             :alarm? (cF (< (* (refill-within me) 1000) (ms-days 2)))
             :refill-within (cF+ [:obs (fn-obs
                                         (println :refill-within new :for (drug-name me)))]
                              (int (/ (- (next-refill me) (now)) 1000))))]
    (md/make
      :mx-dom (cFonce [(back-forth)
                       (h1 "Hello, Model!")
                       (h3 "Model, yes. Working model, no.")
                       (div {:style {:display         "flex"
                                     :flex-direction  "column"
                                     :justify-content "space-between"
                                     :margin-top      "36px"
                                     :height          "164px"
                                     :font-size       "48px"}}
                         (span {:flex-basis "content"}
                           (str "Seconds to "
                             (drug-name rx)
                             " refill: " (refill-within rx)))
                         (when-let [x (alarm? rx)]
                           (println :alarm x)
                           (span {:flex-basis "content"} " Get that refill!")))
                       (pre {:style {:font-size  "16px"
                                     :margin-top "36px"}}
                         (str/replace hellomd #"<" "&lt;"))]))))

(defn overdue? [mx]
  (<mget mx :overdue?))

(defn hello-matrix
  []
  (reset! matrix
    (md/make

      ;; these next two lines "lift" the system clock into the matrix where
      ;; other things can be affected by it.
      :time (cI (int (/ (now) 1000)))
      :ticker (cF1 (js/setInterval #(mswap!> me :time inc) 1000))

      :rx (cF1 (let [matrix me]
                 (md/make
                   :title "adderall"
                   :refills (cI 5)
                   :next-refill (cF1 (+ (<mget matrix :time) 5))
                   :alarm? (cF (< (refill-within me) 2))
                   :overdue? (cF (neg? (refill-within me)))
                   :refill-within (cF+ [:obs (fn-obs
                                               (println :refill-within new :for (drug-name me)))]
                                    (- (next-refill me) (<mget matrix :time))))))

      :mx-dom (cF (let [rx (<mget me :rx)]
                    (md/with-par me
                      [(back-forth)
                       (section {:class "todoapp"}
                         (h1 "&#x211e;Trak")
                         (h3 (str (rand-int 9999) " A multi-model, working Matrix."))
                         (div {:style {:display         "flex"
                                       :flex-direction  "column"
                                       :justify-content "space-between"
                                       :margin-top      "36px"
                                       :height          "164px"
                                       :font-size       "48px"}}
                           (span {:style {:flex-basis "content"}}
                             (str " Seconds to "
                               (drug-name rx)
                               " refill: " (refill-within rx)))
                           (span {:style
                                  (cF1 (make-css-inline me
                                         :visibility (cF (if (alarm? rx)
                                                           "visible" "hidden"))
                                         :flex-basis "content"))}
                             "Get that refill!")
                           (span {:style
                                  (cF1 (make-css-inline me
                                         :visibility (cF (if (overdue? rx)
                                                           "visible" "hidden"))
                                         :flex-basis "content"))} " C'mon, man!!")
                           (span "")))]
                      ))))))

(declare landing-page mx-todos mx-todo-items mx-find-matrix start-router mx-route)

(def lessons
  [[hello-lisp-nyc "hello-lisp-nyc"]
   [hello-cells "hello-cells"]
   [hello-model "hello-model"]
   [hello-matrix "hello-matrix"]])

(defn matrix-build! []
  (let [lesson-no (:lesson (<cget lesson))]
    (reset! matrix ((first (nth lessons lesson-no))))))

(defn start-router []
  (r/start! (r/router [["/" :All]
                       ["/active" :Active]
                       ["/completed" :Completed]])
    {:default     :ignore
     :on-navigate (fn [route params query]
                    (prn :bam-route route)
                    (mset!> @matrix :route (name route)))}))

;;; --- graveyard -----------------------------
#_(prn :build-mx-URL!!!! (.-documentURI js/document))

#_(do
    (io-clear-storage)
    (bulk-todo "ccc-" 400))

#_(let [us (.-documentURI js/document)]
    (last (str/split us "/")))

#_"In general, a so-called 'matrix' is a reactive structure that generates (through side
   effects) something else of practical use. In this case that something else
   is RxTrak(tm), a medications tracking app.

   The matrix nodes are Tag instances which map isomorphically
   to DOM nodes. If you will, the matrix makes a web page in its own image.

   matrix-build! is the unofficial 'main' of my matrix demo: my real entry point
   calls <some namespace>/matrix-build! and I just change <some namespace> to
   whichever demo namespace I am hacking on at the time. There is nothing obligatory
   about any of this.

   matrix-build! is responsible for building the initial matrix. Once built, app
   functionality arises from matrix objects changing in reaction to input Cell
   'writes' made by event handlers, triggering observers which manifest those
   changes usefully, in RxTrak either updating the DOM or writing
   to localStorage:"