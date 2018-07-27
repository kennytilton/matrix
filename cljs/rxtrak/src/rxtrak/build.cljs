(ns rxtrak.build
  (:require [cljs.pprint :as pp]
            [cljs-time.coerce :as tmc]
            [clojure.string :as str]
            [bide.core :as r]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]

            [tiltontec.util.core :refer [pln xor now]]
            [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [unbound ia-type *within-integrity* *defer-changes*]]
            [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]


            [tiltontec.model.core
             :refer-macros [with-par]
             :refer [matrix mx-par <mget mset!> mswap!>
                     fget mxi-find mxu-find-type
                     kid-values-kids] :as md]
            [tiltontec.webmx.html
             :refer [io-read io-upsert io-clear-storage
                     tag-dom-create
                     dom-tag tagfo tag-dom mxu-find-class
                     dom-has-class dom-ancestor-by-tag]
             :as tag]

            [tiltontec.webmx.gen
             :refer-macros [section header h1 input footer p a span label ul li div button br]
             :refer [dom-tag evt-tag]]

            [tiltontec.webmx.style :refer [make-css-inline]]
            [tiltontec.webmx.widget :refer [tag-checkbox]]

            [goog.dom :as dom]
            [goog.dom.classlist :as classlist]
            [goog.editor.focus :as focus]
            [goog.dom.selection :as selection]
            [goog.events.Event :as event]
            [goog.dom.forms :as form]

            [rxtrak.rx
             :refer [make-rx rx-title rx-created bulk-rx
                     rx-completed rx-upsert rx-delete! load-all
                     rx-id rx-toggle-completed!]]
            [rxtrak.rx-list-item :refer [rx-list-item]]))

(declare landing-page mx-rxs mx-rx-items mx-find-matrix start-router mx-route
  std-clock ae-autocheck?)

;;; --- the beef: matrix-build! ------------------------------------------

(defn matrix-build! []
  ;;; In general, a matrix is a reactive structure that generates (through side
  ;;; effects!) something else of practical use. In this case that something else
  ;;; is a Do List app. The matrix nodes are Tag instances which map isomorphically
  ;;; to DOM nodes; the matrix creates a web page in its own image.
  ;;;
  ;;; matrix-build! is the unofficial "main" of my matrix demo: my real entry point
  ;;; calls <some namespace>/matrix-build! and I just change <some namespace> to
  ;;; whichever demo namespace I am hacking on at the time. There is nothing obligatory
  ;;; about any of this.
  ;;;
  ;;; matrix-build! is responsible for building the initial matrix. Once built, app
  ;;; functionality arises from matrix objects changing in reaction to input Cell
  ;;; "writes" made by event handlers, triggering observers which manifest those
  ;;; changes usefully, in rxtrak either by updating the DOM or writing to localStorage.

  #_(do                                                     ;; if needed
      (io-clear-storage))

  (reset! matrix (md/make ::rxApp
                   ;; load all to-dos into a depend-able list....
                   :rxs (rxtrak.rx/rx-list)

                   ;; build the matrix dom once. From here on, all DOM changes are
                   ;; made incrementally by Tag library observers...
                   :mx-dom (cFonce (with-par me
                                     (landing-page)))

                   ;; the spec wants the route persisted for some reason....
                   :route (cF+n [:obs (fn-obs               ;; fn-obs convenience macro provides handy local vars....
                                        (when-not (= unbound old)
                                          (io-upsert "rx-matrixcljs.route" new)))]
                            (or (io-read "rx-matrixcljs.route") "All"))
                   :router-starter start-router)))

;;; --- routing -----------------------------------------

(defn start-router []
  (r/start! (r/router [["/" :All]
                       ["/active" :Active]
                       ["/completed" :Completed]])
    {:default     :ignore
     :on-navigate (fn [route params query]
                    (mset!> @matrix :route (name route)))}))

;;; --- the landing page -------------------------------

;; We use subroutines to break up the DOM generation into manageable chunks.
(declare rx-list-items dashboard-footer rx-entry-field toggle-all
  check-interactions)

;; We do so selectively so we are not forever chasing around to find functionality.
;; e.g, the footer is trivial, short, and callback-free: no need to break it out.

(defn landing-page []
  [(section {:class "todoapp"}
     (std-clock)
     (header {:class "header"}
       (h1 "&#x211e;Trak")
       (rx-entry-field))

     (rx-list-items)

     (div {:style {:display          "flex"
                   :flex-direction   "row"
                   :justify-content  "space-between"}}
       (ae-autocheck? me)
       (check-interactions me))

     (dashboard-footer))

   (footer {:class "info"}
     (p "Double-click a to-do list item to edit it.")
     (p "Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>.")
     (p "Inspired by <a href=\"http://todomvc.com/\">TodoMVC</a>."))])

;; --- to-do Entry -----------------------------------

(defn rx-entry-field []
  (input {:class       "new-todo"
          :autofocus   true
          :placeholder "What are you taking?"
          :onkeypress  (fn [evt]
                         (when (= (.-key evt) "Enter")
                           (do                              ;; profile {}
                             (let [raw (form/getValue (.-target evt))
                                   title (str/trim raw)
                                   rxs (mx-rxs)]
                               (when-not (= title "")
                                 (do                        ;; tufte/p ::growrx
                                   (mswap!> rxs :items-raw
                                     #(conj % (make-rx {:title title})))))
                               (form/setValue (.-target evt) "")))))}))

;; --- to-do list UL ---------------------------------

(defn rx-list-items []
  (section {:class  "main"
            :hidden (cF (<mget (mx-rxs me) :empty?))}

    (toggle-all)

    (ul {:class "todo-list"}

      ;; kid-values, kid-key, and kid-factory drive the matrix mechanism
      ;; for avoiding re-genning a complete list of kids just to add or remove a few.
      ;; This is overkill for short TodoMVC to-do lists -- just demonstrating the capability.

      {:selections  (cI nil)
       :kid-values  (cF (sort-by rx-created
                          (<mget (mx-rxs me)
                            (case (mx-route me)
                              "All" :items
                              "Completed" :items-completed
                              "Active" :items-active))))
       :kid-key     #(<mget % :rx)
       :kid-factory (fn [me rx]
                      (rx-list-item me rx (mx-find-matrix me)))}

      ;; cache is prior value for this implicit 'kids' slot; k-v-k uses it for diffing
      (kid-values-kids me cache))))

;; -- toggle-all -------------------------------------

(defn toggle-all []
  (div {} {;; 'action' is an ad hoc bit of intermediate state that will be used to decide the
           ;; input HTML checked attribute and will also guide the label onclick handler.
           :action (cF (if (every? rx-completed (mx-rx-items me))
                         :uncomplete :complete))}

    (input {:id        "toggle-all"
            :class     "toggle-all"
            ::tag/type "checkbox"
            :checked   (cF (= (<mget (mx-par me) :action) :uncomplete))})

    (label {:for     "toggle-all"
            ;; a bit ugly: handler below is not in kids rule of LABEL, so 'me' is the DIV, not the LABEL.
            :onclick #(let [action (<mget me :action)]
                        (event/preventDefault %)            ;; else browser messes with checked, which we handle
                        (doseq [td (mx-rx-items)]
                          (mset!> td :completed (when (= action :complete) (now)))))}
      "Mark all as complete")))

;; --- dashboard -------------------------------------

(defn dashboard-footer []
  (footer {:class  "footer"
           :hidden (cF (<mget (mx-rxs me) :empty?))}

    (span {:class   "todo-count"
           :content (cF (pp/cl-format nil "<strong>~a</strong>  item~:P remaining"
                          (count (remove rx-completed (mx-rx-items me)))))})

    (ul {:class "filters"}
      (for [[label route] [["All", "#/"]
                           ["Active", "#/active"]
                           ["Completed", "#/completed"]]]
        (li {} (a {:href     route
                   :selector label
                   :class    (cF (when (= (:selector @me) (mx-route me))
                                   "selected"))}
                 label))))

    (button {:class   "clear-completed"
             :hidden  (cF (empty? (<mget (mx-rxs me) :items-completed)))
             :onclick #(doseq [td (filter rx-completed (mx-rx-items))]
                         (rx-delete! td))}
      "Clear completed")))

;; --- miscellaneous components -----------------

(defn std-clock []
  (let [steps (atom 30)]
    (div {:class   "std-clock"
          :content (cF (subs (.toDateString
                               (js/Date.
                                 (<mget me :clock)))
                         4))}
      {:clock  (cI (now))
       :ticker (cFonce (js/setInterval
                         #(when (pos? (swap! steps dec))
                            (let [time-step (* 12 3600 1000)
                                  w (<mget me :clock)]
                              (mset!> me :clock (+ w time-step))))
                         1000))})))

;; --- AE autocheck -----------------------

(defn ae-autocheck? [me]
  (tag-checkbox me "ae-autocheck"
    "Auto-check AEs?" true
    {:class "ae-autocheck"
     :style "font-size:1.2em;margin:24px"}))

(defn my-find-class
  "Search up the matrix from node 'where' looking for element with class"
  [where class]
  (without-c-dependency
    (let [fc (name class)]
      (println :my-find-seeking fc)
      (fget (fn [mx]
              (let [mc (<mget mx :class)]
                (println (<mget mx :tag) :mc mc)
                (= fc mc)))
        where :me? false :up? true))))

(defn check-interactions [me]
  (button {:class   "li-show"
           :style   (cFonce (make-css-inline me
                              :font-size "24px"
                              :margin "24px"
                              :display (cF (let [ul (mxu-find-class (:tag @me) "todo-list")]
                                             (assert ul)
                                             ;;(println :sellll (<mget ul :selections))
                                             (if (> (count (<mget ul :selections)) 1)
                                               "block" "none")))
                              :display "block"))
           :onclick #(js/alert "Feature not yet implemented.")}

    {:rxs nil}

    (span {:style "font-size:0.7em;margin:2px;margin-top:0;vertical-align:top"}
      "Check Interactions")))

;; --- convenient accessors ---------------------

(defn mx-route [mx]
  (<mget (mx-find-matrix mx) :route))

(defn mx-rxs
  "Given a node in the matrix, navigate to the root and read the rxs. After
  the matrix is initially loaded (say in an event handler), one can pass nil
  and find the matrix in @matrix. The no-arg variant is offered as a dubious
  dev convenience (dubious since it adds the burden of knowing where one can
  safely assume the matrix atom has been loaded)."
  ([] (<mget @matrix :rxs))

  ([mx]
   (if (nil? mx)
     (mx-rxs)
     (let [mtrx (mx-find-matrix mx)]
       (assert mtrx (str "mx-rxs not finding matrix from " (tagfo mx)))
       (<mget mtrx :rxs)))))

(defn mx-rx-items
  ([] (mx-rx-items nil))
  ([mx] (<mget (mx-rxs mx) :items)))

(defn mx-find-matrix [mx]
  (mxu-find-type mx ::rxApp))
