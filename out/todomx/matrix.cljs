(ns todomx.matrix
  (:require [cljs.pprint :as pp]
            [clojure.string :as str]
            [bide.core :as r]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]

            [tiltontec.util.core :refer [pln xor now]]
            [tiltontec.cell.base :refer [unbound ia-type *within-integrity* *defer-changes*]]
            [tiltontec.cell.core :refer-macros [c? c?+ c?n c?+n c?once] :refer [c-in]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]


            [tiltontec.model.core :refer [matrix mx-par md-get md-reset!
                                          mxi-find mxu-find-class mxu-find-type
                                          kid-values-kids] :as md]
            [tiltontec.tag.html
             :refer [io-read io-upsert io-clear-storage
                     tag-dom-create
                     dom-tag tagfo tag-dom
                     dom-has-class dom-ancestor-by-tag]
             :as tag]
            [tiltontec.tag.gen
             :refer-macros [section header h1 input footer p a span label ul li div button]
             :refer [dom-tag]]
            [goog.dom :as dom]
            [goog.dom.classlist :as classlist]
            [goog.editor.focus :as focus]
            [goog.dom.selection :as selection]
            [goog.events.Event :as event]
            [goog.dom.forms :as form]

            [todomx.todo :refer [make-todo td-title td-created bulk-todo
                                 td-completed td-upsert td-delete! load-all
                                 td-id td-toggle-completed!]]))

(declare landing-page mx-todos mx-todo-items mx-find-matrix start-router mx-route)

;;; --- the beef: matrix-build! ------------------------------------------

(defn matrix-build! []
  ;;; a matrix is a reactive structure that generates something else. In this case, the
  ;;; matrix nodes are Tag instances that map isomorphically to DOM nodes; the matrix
  ;;; this makes a real web page in its own image.
  ;;;
  ;;; matrix-build! is kinda the "main" of any matrix app: every app will
  ;;; have one that is responsible for building the initial matrix. Once built, app
  ;;; functionality (vs low-level implementation wiring) arises from matrix objects
  ;;; changing in reaction to input Cell writes by event handlers, triggering observers
  ;;; that manifest those changes usefully, in TodoMVC either updating the DOM or writing
  ;;; to localStorage:
  #_ (do
    (io-clear-storage)
    (bulk-todo "ccc-" 400))

  (reset! matrix (md/make ::todoApp
                   ;; load all to-dos into an observable list....
                   :todos (c?once (todomx.todo/todo-list))

                   ;; build the matrix dom once. From here on, all DOM changes are
                   ;; made incrementally by Tag library observers...
                   :mx-dom (c?once (md/with-par me
                                                (landing-page)))

                   ;; the spec wants the route persisted for some reason....
                   :route (c?+n [:obs (fn-obs               ;; fn-obs convenience macro provides handy local vars....
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
                            (md-reset! @matrix :route (name route)))}))

;;; --- the landing page -------------------------------

;; We use subroutines to break up the DOM generation into manageable chunks.
(declare todo-list-items todo-list-item dashboard-footer todo-entry-field)
;; We do so selectively so we are not forever chasing around to find functionality.
;; e.g, the footer is trivial, short, and callback-free: no need to break it out.

(defn landing-page []
  [(section {:class "todoapp"}
            (header {:class "header"}
                    (h1 {} "todos")
                    (todo-entry-field))

            (todo-list-items)
            (dashboard-footer))

   (footer {:class "info"}
           (p {} "Double-click a to-do list item to edit it.")
           (p {} "Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>.")
           (p {} "Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))])

;; --- to-do Entry -----------------------------------

(defn todo-entry-field []
  (input {:class       "new-todo"
          :autofocus   true
          :placeholder "What needs doing?"
          :onkeypress  #(when (= (.-key %) "Enter")
                          (profile {}
                                   (let [raw (form/getValue (.-target %))
                                         title (str/trim raw)
                                         todos (mx-todos)]
                                     (when-not (= title "")
                                       (do ;; tufte/p ::growtodo
                                         (md-reset! todos :items-raw
                                           (do;; tufte/p ::conj-todo
                                             (conj (md-get todos :items-raw) ;; 'raw' is 'before filtering out logical deletes'
                                                   (tufte/p ::mktodo
                                                     (make-todo {:title title})))))))
                                     (form/setValue (.-target %) ""))))}))

;; --- to-do list UL ---------------------------------
(declare toggle-all)

(defn todo-list-items []
  (section {:class  "main"
            :hidden (c? (md-get (mx-todos me) :empty?))}
           (toggle-all)
           (ul {:class       "todo-list"

                ;; kid-values, kid-key, and kid-factory drive the matrix mechanism
                ;; for avoiding re-genning a complete list of kids just to add or remove a few.
                ;; overkill for short TodoMVC to-do lists, but worth showing.

                :kid-values  (c? (when-let [rte (mx-route me)]
                                   (sort-by td-created
                                            (md-get (mx-todos me)
                                                    (case rte
                                                      "All" :items
                                                      "Completed" :items-completed
                                                      "Active" :items-active)))))
                :kid-key     #(md-get % :todo)
                :kid-factory todo-list-item}

               ;; cache is prior value for this implicit 'kids' slot; k-v-k uses it for diffing
               (kid-values-kids me cache))))

;; -- toggle-all -------------------------------------

(defn toggle-all []
  (div {
        ;; 'action' is an ad hoc bit of intermediate state that will be used to decide the
        ;; input HTML checked attribute and will also guide the label onclick handler.
        :action (c? (if (every? td-completed (mx-todo-items me))
                      :uncomplete :complete))}
    (input {:id        "toggle-all"
            :class     "toggle-all"
            ::tag/type "checkbox"
            :checked   (c? (= (md-get (mx-par me) :action) :uncomplete))})

    (label {:for     "toggle-all"
            ;; a bit ugly: handler below is not in kids rule of LABEL, so 'me' is the DIV.
            :onclick #(let [action (md-get me :action)]
                        (event/preventDefault %)            ;; else browser messes with checked, which we handle
                        (doseq [td (mx-todo-items)]
                          (md-reset! td :completed (when (= action :complete) (now)))))}
           "Mark all as complete")))


;; --- to-do item LI -----------------------------------------

(declare todo-edit)

(defn todo-list-item [me todo]
  ;;(println :building-li (:title @todo))
  (li {:class   (c? (if (td-completed todo) "completed" ""))
       :todo    todo                                        ;; key to identify lost/gained LIs in turn to optimize list maintenance
       :editing (c-in false)
       :display (c? (if-let [route (mx-route me)]
                      (cond
                        (or (= route "All")
                            (xor (= route "Active")
                                 (td-completed todo))) "block"
                        :default "none")
                      "block"))}

      (div {:class "view"}
        (input {:class   "toggle" ::tag/type "checkbox"
                :checked (c? (td-completed todo))
                :onclick #(td-toggle-completed! todo)})

        (label {:ondblclick #(let [li-dom (dom/getAncestorByTagNameAndClass
                                            (.-target %) "li")
                                   edt-dom (dom/getElementByClass
                                             "edit" li-dom)]
                               (classlist/add li-dom "editing")
                               (tag/input-editing-start edt-dom (td-title todo)))}
               (td-title todo))

        (button {:class   "destroy"
                 :onclick #(td-delete! todo)}))

      (input {:class     "edit"
              :onblur    #(todo-edit % todo)
              :onkeydown #(todo-edit % todo)})))

(defn todo-edit [e todo]
  (let [edt-dom (.-target e)
        li-dom (dom/getAncestorByTagNameAndClass edt-dom "li")]

    (when (classlist/contains li-dom "editing")
      (let [title (str/trim (form/getValue edt-dom))
            stop-editing #(classlist/remove li-dom "editing")]
        (cond
          (or (= (.-type e) "blur")
              (= (.-key e) "Enter"))
          (do
            (stop-editing)                                  ;; has to go first cuz a blur event will sneak in
            (if (= title "")
              (td-delete! todo)
              (md-reset! todo :title title)))

          (= (.-key e) "Escape")
          ;; this could leave the input field with mid-edit garbage, but
          ;; that gets initialized correctly when starting editing
          (stop-editing))))))

;; --- dashboard -------------------------------------

(defn dashboard-footer []
  (footer {:class  "footer"
           :hidden (c? (md-get (mx-todos me) :empty?))}

          (span {:class   "todo-count"
                 :content (c? (pp/cl-format nil "<strong>~a</strong>  item~:P remaining"
                                            (count (remove td-completed (mx-todo-items me)))))})

          (ul {:class "filters"}
              (for [[label route] [["All", "#/"]
                                   ["Active", "#/active"]
                                   ["Completed", "#/completed"]]]
                (li {} (a {:href     route
                           :selector label
                           :class    (c? (when (= (:selector @me) (mx-route me))
                                           "selected"))}
                          label))))

          (button {:class   "clear-completed"
                   :hidden  (c? (empty? (md-get (mx-todos me) :items-completed)))
                   :onclick #(doseq [td (filter td-completed (mx-todo-items))]
                               (td-delete! td))}
                  "Clear completed")))

;; --- convenient accessors ---------------------

(defn mx-route [mx]
  (md-get (mx-find-matrix mx) :route))

(defn mx-todos
  "Given a node in the matrix, navigate to the root and read the todos. After
  the matrix is initially loaded (say in an event handler), one can pass nil
  and find the matrix in @matrix. Put another way, a starting node is required
  during the matrix's initial build."
  ([]
   (md-get @matrix :todos))

  ([mx]
   (if (nil? mx)
     (mx-todos)
     (let [mtrx (mx-find-matrix mx)]
       (assert mtrx)
       (md-get mtrx :todos)))))

(defn mx-todo-items
  ([]
   (mx-todo-items nil))
  ([mx]
   (md-get (mx-todos mx) :items)))

(defn mx-find-matrix [mx]
  (mxu-find-type mx ::todoApp))
