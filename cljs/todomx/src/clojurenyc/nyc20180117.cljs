(ns clojurenyc.nyc20180117
  (:require [cljs.pprint :as pp]
            [cljs-time.coerce :as tmc]
            [clojure.string :as str]
            [bide.core :as r]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]

            [tiltontec.util.core :refer [pln xor now]]
            [tiltontec.cell.base :refer [cells-reset unbound ia-type *within-integrity* *defer-changes*]]
            [tiltontec.cell.core
             :refer-macros [cF cF+ cFn cF+n cFonce]
             :refer [cI c-reset!]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]
            [tiltontec.cell.evaluate :refer [c-awaken <cget]]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI cset!> make-cell make-c-formula]]


            [tiltontec.model.core
             :refer-macros [with-par]
             :refer [matrix mx-par <mget mset!> mswap!>
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [tiltontec.webmx.html
             :refer [io-read io-upsert io-clear-storage
                     tag-dom-create
                     dom-tag tagfo tag-dom
                     dom-has-class dom-ancestor-by-tag]
             :as tag]

            [tiltontec.xhr
             :refer [send-xhr xhr-status xhr-response]]

            [tiltontec.webmx.gen
             :refer-macros [section header h1 input footer p a span label ul li div button br]
             :refer [dom-tag evt-tag]]

            [tiltontec.webmx.style :refer [make-css-inline]]))

(defn hello-world
  "A true hello-world, with just enough code to ensure
    we can execute our tool chain from begiining to end.

   Our core driver expects (1) an atom (2) containing a so-called matrix (a map)
   with (3) a property :mx-dom indexing something suitable for consumption by
   the Tag web framework we will be looking at later.

   (Please do not worry about the web aspect just yet; at first the console
   will show the important action.)

   We'll just return a normal atom and map and throughly unimpressive DOM and
   make sure this much works.

   What you should do:
   1. In a terminal, cd to the project root directory.
   2. Enter: scripts/build
   3. Confirm no errors from the build. Or just go for it:
   4. Open index.html (also in the root directory) in an HTML5-ready browser.
   5. Open your browser's developer console.

   What you should see:
   1. \"hello, world\" in the browser page.
   2. \"hello, console\" in the console.

   Takeaways:
   1. We're in business."
  []

  (println "hello, console")

  (atom {:mx-dom [(h1 "hello, world")]}))

(defn hello-cells []
  (cells-reset)
  (let [clock (cI nil)

        date (cF+ [:obs (fn-obs (println (str "The time is now " new)))]
                  (if-let [c (<cget clock)]
                    (.toTimeString
                      (js/Date. c))
                    "Dunno."))]

    (println :starting-time (<cget clock) (<cget date))

    (cset!> clock (now))

    (js/setTimeout
      #(cset!> clock (now))
      2000)

    (atom {:mx-dom [(h1 "hello cells")]})))

(defn lifting-clock
  "Takeaways:
  1. The values recalculate unprompted, driven by a matrix input.
  ie, It is a simple model, but it is running on its own given
  declarative specification.

  2. The model uses observers to operate outside itself, if only
  printing to the console.

  3. We have effectively lifted the system clock into the matrix where
  other values can react to it."
  []
  (cells-reset)
  (let [clock (cI (now)
                    :obs (fn-obs (println (str "It is now " new "ms!"))))

        date (cF+ [:obs (fn-obs (println (str "More readably: " new)))]
                  (.toTimeString
                    (js/Date.
                      (<cget clock))))

        gong (cF+ [:obs (fn-obs
                          (when new (println "GONG!")))]
                  (let [d (<cget date)]
                    (some #{(subs d 7 8)} ["0" "5"])))]

    ;; standalone cells need to be "awakened" by reading them.
    ;; gong eventually reaches all
    (println :starting-time (<cget gong))

    (js/setInterval
      #(cset!> clock (now))
      1000)

    (println "hello, gong show")

    (atom {:mx-dom [(h1 "Gong Show!")]})))

(defn lifting-storage
  "Takeaways:
  1. We have modestly connected localStorage into the matrix."
  []
  (cells-reset)
  (let [ls-key "nyc-lifting-storage"
        clock (cI nil)

        date (cF+ [:obs (fn-obs
                          (when new
                            (io-upsert ls-key new)))]
                  (when-let [c (<cget clock)]
                    (.toTimeString
                      (js/Date. c))))]

    ;; standalone cells need to be "awakened" by reading them.
    ;; gong eventually reaches all
    (println :starting-time (<cget date))

    (js/setInterval
      #(cset!> clock (now))
      1000)

    (println "hello, localStorage")

    (atom {:mx-dom [(h1 (str "The prior time was "
                             (or (io-read ls-key)
                                 "not recorded")))]})))

(def ae-lookup "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:~a&limit=1")

(def drug (atom "Freecell"))

(defn lifting-fda

  []
  (cells-reset)
  (let [ticker (atom nil)
        ls-key "nyc-lifting-fda"
        clock (cI (now))

        date (cF+ [:obs (fn-obs (println (str "More readably: " new)))]
                  (.toTimeString
                    (js/Date.
                      (<cget clock))))

        check-fda? (cF (let [d (<cget date)]
                         (some #{(subs d 7 8)} ["0" "5"])))

        fda-xhr (cF (when (<cget check-fda?)
                      (send-xhr (pp/cl-format nil ae-lookup @drug))))

        response (cF+ [:obs (fn-obs (when new
                                      (println :fda-says! (:status new))
                                      (if (= 200 (:status new))
                                        (js/clearInterval @ticker)
                                        (reset! drug "ibuprofen"))))]
                      (when-let [req (<cget fda-xhr)]
                        (println :awaiting (:status @req) (:response req))
                        (xhr-response req)))]

    (println :starting-lookup-response (<cget response))

    (reset! ticker (js/setInterval
                     #(cset!> clock (now))
                     1000))

    (println "hello, REST API")

    (atom {:mx-dom [(h1 "Checking FDA")]})))

(declare landing-page-mini nyc-std-clock)

(defn lifting-html []
  (reset! matrix (md/make ::lifting-html
                   :mx-dom (cFonce (with-par me
                                     (landing-page-mini))))))

(defn landing-page-mini []
  [(section {:class "todoapp"}
     (nyc-std-clock 1000)
     (nyc-std-clock 100)
     (nyc-std-clock 10)
     (header {:class "header"}
             (h1 "FDA (RSN)")))

   (footer {:class "info"}
     (p "Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>.")
     (p "CSS by <a href=\"http://todomvc.com\">TodoMVC</a>."))])

(defn nyc-std-clock [interval]
  (div {:class   "std-clock"
        :style   (when (= interval 1000)
                   (cFonce (make-css-inline me
                             :background (cF (let [clk (<mget (:tag @me) :clock)
                                                   s (Math/round (/ clk 1000))]
                                               (when (zero? (mod s 5))
                                                 "cyan"))))))
        :content (cF (let [c (<mget me :clock)
                           ts (str (.toTimeString
                                     (js/Date. c)))]
                       (if (= interval 1000)
                         ts
                         (str (subs ts 0 8)
                              "."
                              (pp/cl-format nil "~3'0d" (mod c 1000))
                              (subs ts 8)))))}
    {:clock  (cI (now))
     :ticker (cFonce (js/setInterval
                       #(mset!> me :clock (now))
                       interval))}))