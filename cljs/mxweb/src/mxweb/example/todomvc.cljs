(ns mxweb.example.todomvc
  (:require [cljs.pprint :as pp]
            [cljs-time.coerce :as tmc]
            [clojure.string :as str]
            [bide.core :as r]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]

            [tiltontec.util.core :refer [pln xor now]]
            [tiltontec.cell.base :refer [unbound]]
            [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce cF1] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]


            [tiltontec.model.core :refer [matrix mx-par <mget mset!>
                                          fget mxi-find mxu-find-type
                                          kid-values-kids] :as md]
            [mxweb.html
             :refer [io-read io-upsert io-clear-storage
                     tag-dom-create
                     dom-tag tagfo tag-dom
                     dom-has-class dom-ancestor-by-tag]
             :as mxweb]

            [mxweb.gen
             :refer-macros [section header h1 input footer p a span label ul li div button br]
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
            [mxweb.example.todomx-list-item :refer [todo-list-item]]))

(declare landing-page mx-todos mx-todo-items mx-find-matrix start-router mx-route)

;;; --- the beef: matrix-build! ------------------------------------------

(defn matrix-build! []
  ;;; In general, a matrix is a reactive structure that generates through side
  ;;; effects something else of practical use. In this case that something else
  ;;; is a Do List app. The matrix nodes are Tag instances which map isomorphically
  ;;; to DOM nodes. If you will, the matrix makes a web page in its own image.
  ;;;
  ;;; matrix-build! is the unofficial "main" of my matrix demo: my real entry point
  ;;; calls <some namespace>/matrix-build! and I just change <some namespace> to
  ;;; whichever demo namespace I am hacking on at the time. There is nothing obligatory
  ;;; about any of this.
  ;;;
  ;;; matrix-build! is responsible for building the initial matrix. Once built, app
  ;;; functionality arises from matrix objects changing in reaction to input Cell
  ;;; "writes" made by event handlers, triggering observers which manifest those
  ;;; changes usefully, in TodoMX either updating the DOM or writing
  ;;; to localStorage:

  #_(do
      (io-clear-storage)
      (bulk-todo "ccc-" 400))

  (reset! matrix (md/make ::todoApp


                   ;; load all to-dos into an observable list....
                   :todos (cF1 (mxweb.example.todo/todo-list))

                   ;; build the matrix dom once. From here on, all DOM changes are
                   ;; made incrementally by Tag library observers...
                   :mx-dom (cF1 (md/with-par me
                                  (landing-page)))

                   ;; the spec wants the route persisted for some reason....
                   :route (cF+n [:obs (fn-obs               ;; fn-obs convenience macro provides handy local vars....
                                        (when-not (= unbound old)
                                          (io-upsert "todo-matrixcljs.route" new)))]
                                (or (io-read "todo-matrixcljs.route") "All"))
                   :router-starter start-router)))

;;; --- routing -----------------------------------------

(defn start-router []
  (r/start! (r/router [["/" :All]
                       ["/active" :Active]
                       ["/completed" :Completed]])
            {:default     :ignore
             :on-navigate (fn [route params query]
                            (prn :bam-route route)
                            (mset!> @matrix :route (name route)))}))

;;; --- the landing page -------------------------------

;; We use subroutines to break up the DOM generation into manageable chunks.
(declare todo-list-items dashboard-footer todo-entry-field std-clock ae-autocheck?)
;; We do so selectively so we are not forever chasing around to find functionality.
;; e.g, the footer is trivial, short, and callback-free: no need to break it out.

(defn landing-page []
  [
   (section {:class "todoapp"}
            (std-clock)
            (header {:class "header"}
                    (h1 "todos")
                    (todo-entry-field))

            (todo-list-items)

            (dashboard-footer))

   (footer {:class "info"}
           (p "Double-click a to-do list item to edit it.")
           (p "Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>.")
           (p "Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))])

;; --- to-do Entry -----------------------------------

(defn todo-entry-field []
  (input {:class       "new-todo"
          :autofocus   true
          :placeholder "What needs doing?"
          :onkeypress  #(when (= (.-key %) "Enter")
                          (do                               ;; profile {}
                            (let [raw (form/getValue (.-target %))
                                  title (str/trim raw)
                                  todos (mx-todos)]
                              (when-not (= title "")
                                (do                         ;; tufte/p ::growtodo
                                  (mset!> todos :items-raw
                                    (do                     ;; tufte/p ::conj-todo
                                      (conj (<mget todos :items-raw) ;; 'raw' is 'before filtering out logical deletes'
                                            (tufte/p ::mktodo
                                              (make-todo {:title title})))))))
                              (form/setValue (.-target %) ""))))}))

;; --- to-do list UL ---------------------------------
(declare toggle-all)

(defn todo-list-items []
  (section {:class  "main"
            :hidden (cF (<mget (mx-todos me) :empty?))}
           (toggle-all)
           (ul {:class "todo-list"}

               ;; kid-values, kid-key, and kid-factory drive the matrix mechanism
               ;; for avoiding re-genning a complete list of kids just to add or remove a few.
               ;; overkill for short TodoMVC to-do lists, but worth showing.

               {:selections  (cI nil)
                :kid-values  (cF (when-let [rte (mx-route me)]
                                   (sort-by td-created
                                            (<mget (mx-todos me)
                                                    (case rte
                                                      "All" :items
                                                      "Completed" :items-completed
                                                      "Active" :items-active)))))
                :kid-key     #(<mget % :todo)
                :kid-factory (fn [me todo]
                               (todo-list-item me todo (mx-find-matrix me)))}

               ;; cache is prior value for this implicit 'kids' slot; k-v-k uses it for diffing
               (kid-values-kids me cache))))

;; -- toggle-all -------------------------------------

(defn toggle-all []
  (div {} {;; 'action' is an ad hoc bit of intermediate state that will be used to decide the
           ;; input HTML checked attribute and will also guide the label onclick handler.
           :action (cF (if (every? td-completed (mx-todo-items me))
                         :uncomplete :complete))}

    (input {:id        "toggle-all"
            :class     "toggle-all"
            ::mxweb/type "checkbox"
            :checked   (cF (= (<mget (mx-par me) :action) :uncomplete))})

    (label {:for     "toggle-all"
            ;; a bit ugly: handler below is not in kids rule of LABEL, so 'me' is the DIV.
            :onclick #(let [action (<mget me :action)]
                        (event/preventDefault %)            ;; else browser messes with checked, which we handle
                        (doseq [td (mx-todo-items)]
                          (mset!> td :completed (when (= action :complete) (now)))))}
           "Mark all as complete")))

;; --- AE autocheck -----------------------

(defn ae-autocheck? []
  (div {:id "ae-autocheck"
        :class "ae-autocheck"
        :onchange #(println :divchg!!! %)
        :style "margin:24px"}
    {:on? (cI false)}

    (input {:id        "ae-autocheckbox"
            ::mxweb/type "checkbox"
            :onchange #(let [on? (<mget me :on?)]
                         (event/preventDefault %)            ;; else browser messes with checked, which we handle
                         (println :ae-chkbox-onchange on? (.-value (.-target %)))
                         (mset!> me :on? (not on?)))
            :checked   (cF (println :checked????? (<mget (mx-par me) :on?))
                           (<mget (mx-par me) :on?))})

    (label {:for     "ae-autocheckbox"
            ;; a bit ugly: handler below is not in kids rule of LABEL, so 'me' is the DIV.
            :onclick #(let [on? (<mget me :on?)]
                        (event/preventDefault %)            ;; else browser messes with checked, which we handle
                        (println :ae-label-click on?)
                        (mset!> me :on? (not on?)))}
           "Auto AE")))


;; --- to-do item LI -----------------------------------------

(defn std-clock []
  (let [steps (atom 0)]
    (div {:class   "std-clock"
          :content (cF (subs (.toDateString
                               (js/Date.
                                 (<mget me :clock)))
                             4))}
      {:clock  (cI (now))
       :ticker (cFonce (js/setInterval
                         #(when (pos? (swap! steps dec))
                            (let [time-step (* 6 3600 1000)
                                  w (<mget me :clock)]
                              (mset!> me :clock (+ w time-step))))
                         1000))})))

;; --- dashboard -------------------------------------

(defn dashboard-footer []
  (footer {:class  "footer"
           :hidden (cF (<mget (mx-todos me) :empty?))}

          (span {:class   "todo-count"
                 :content (cF (pp/cl-format nil "<strong>~a</strong>  item~:P remaining"
                                            (count (remove td-completed (mx-todo-items me)))))})



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
                   :hidden  (cF (empty? (<mget (mx-todos me) :items-completed)))
                   :onclick #(doseq [td (filter td-completed (mx-todo-items))]
                               (td-delete! td))}
                  "Clear completed")))

;; --- convenient accessors ---------------------

(defn mx-route [mx]
  (<mget (mx-find-matrix mx) :route))

(defn mx-todos
  "Given a node in the matrix, navigate to the root and read the todos. After
  the matrix is initially loaded (say in an event handler), one can pass nil
  and find the matrix in @matrix. Put another way, a starting node is required
  during the matrix's initial build."
  ([]
   (<mget @matrix :todos))

  ([mx]
   (if (nil? mx)
     (mx-todos)
     (let [mtrx (mx-find-matrix mx)]
       (assert mtrx)
       (<mget mtrx :todos)))))

(defn mx-todo-items
  ([]
   (mx-todo-items nil))
  ([mx]
   (<mget (mx-todos mx) :items)))

(defn mx-find-matrix [mx]
  (mxu-find-type mx ::todoApp))
