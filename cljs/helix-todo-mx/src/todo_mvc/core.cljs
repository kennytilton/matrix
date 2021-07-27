(ns todo-mvc.core
  (:require
   [clojure.string :as string]
   [helix.core :as hx :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [helix.impl.props :as impl.props]
   [todo-mvc.components :as c]
   [todo-mvc.lib :refer [defnc]]
   [todo-mvc.storage :as storage]
   [todo-mvc.build :as build]
   ["react" :as r]
   ["react-dom" :as rdom]
   ["react-router-dom" :as rr]
   [tiltontec.util.core :refer [pln] :as utco]
   [tiltontec.cell.core :refer-macros [cI cF]
    :refer [cset!>] :as cells]
   [tiltontec.model.core :refer [mget]]
   [tiltontec.cell.evaluate :refer [c-get] :as evc]
   [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]
   [todo-mvc.mxreact :as mxr]))

(defn todo [id title]
  {:id id
   :title title
   :completed? false})

(defn all-complete? [todos]
  (every? :completed? todos))

(defmulti todo-actions (fn [_ action] (first action)))

(defmethod todo-actions
  ::init [state _]
	;; initialize with empty vector if nothing in local storage
  (or state []))

(defmethod todo-actions
  ::add [todos [_ title]]
  (conj todos (todo (random-uuid) title)))

(defmethod todo-actions
  ::remove [todos [_ id]]
  (into [] (remove #(= (:id %) id)) todos))

(defmethod todo-actions
  ::toggle [todos [_ id]]
  (into
   []
   (map
    #(if (= (:id %) id)
       (update % :completed? not)
       %))
   todos))

(defmethod todo-actions
  ::update-title [todos [_ id title]]
  (into
   []
   (map
    #(if (= (:id %) id)
       (assoc % :title (string/trim title))
       %))
   todos))

(defmethod todo-actions
  ::toggle-all [todos _]
  (let [all-complete? (all-complete? todos)]
    (into [] (map #(assoc % :completed? (not all-complete?))) todos)))

(defmethod todo-actions
  ::clear-completed [todos _]
  (filterv (comp not :completed?) todos))

(defnc App
  []
  (let [[todos dispatch] (storage/use-persisted-reducer
                          "todos-helix"
                          todo-actions
                          nil
                          #(todo-actions % [::init]))
        active-todos (filter (comp not :completed?) todos)
        completed-todos (filter :completed? todos)

				;; TodoList handlers
        add-todo #(dispatch [::add (string/trim %)])
        remove-todo #(dispatch [::remove %])
        toggle-todo #(dispatch [::toggle %])
        update-todo-title (fn [id title]
                            (dispatch [::update-title id title]))
        toggle-all #(dispatch [::toggle-all])
        clear-completed #(dispatch [::clear-completed])

        todo-list (fn [visible-todos]
                    (for [{:keys [id] :as todo} visible-todos]
                      (c/todo-item {:key id
                                    :on-toggle toggle-todo
                                    :on-destroy remove-todo
                                    :on-update-title update-todo-title
                                    & todo})))]
    (pln :bam-mx)

    (d/div
      (d/section
        {:class "todoapp"}
        (d/header
          {:class "header"}
          (c/title))))

    #_ ($ rr/BrowserRouter
      (c/title)
      #_
       (d/div
        (d/section
         {:class "todoapp"}
         (d/header
          {:class "header"}
          (c/title)
          (c/new-todo {:on-complete add-todo}))
         (when (< 0 (count todos))
           (<>
            (d/section
             {:class "main"}
             (d/input {:id "toggle-all" :class "toggle-all" :type "checkbox"
                       :checked (all-complete? todos) :on-change toggle-all})
             (d/label {:for "toggle-all"} "Mark all as complete")
             (d/ul
              {:class "todo-list"}
              ($ rr/Switch
                 ($ rr/Route {:path "/active"}
                    (todo-list active-todos))
                 ($ rr/Route {:path "/completed"}
                    (todo-list completed-todos))
                 ($ rr/Route {:path "/"}
                    (todo-list todos)))))
            (d/footer
             {:class "footer"}
             (d/span
              {:class "todo-count"}
              (d/strong (count active-todos))
              " items left")
             (d/ul
              {:class "filters"}
              (d/li ($ rr/NavLink {:to "/" :activeClassName "selected" :exact true} "All"))
              (d/li ($ rr/NavLink {:to "/active" :activeClassName "selected"} "Active"))
              (d/li ($ rr/NavLink {:to "/completed" :activeClassName "selected"} "Completed")))
             (d/button {:class "clear-completed"
                        :on-click clear-completed} "Clear completed")))))
        (c/app-footer)))))

(defnc sad [{:keys [answer] :as props}]
  ;; use helix.dom to create DOM elements
  ;(prn :props props)
  (prn :sadin answer)
  (d/div "Universe, " (d/strong answer) "!"))

(defn red-black
  [props]
  (let [on? (goog.object/get props "on")]
    (r/createElement
      "div"
      #js {:style #js {:background (if on? "red" "black")}}
      "Hello, Hx")))

(defn mx-to-rx [mx-dom]
  ;; mx-dom s/b a ::mxrn.elt product  of make-rnc
  (prn :rendering (mget mx-dom :rendering))
  (mget mx-dom :rendering))

(defn ^:export start
  []
  ;; (rdom/render ($ App) (js/document.getElementById "app"))
  (enable-console-print!)

  (tufte/add-basic-println-handler! {})

  (let [app-dom (js/document.getElementById "app")
        app-matrix (build/matrix-build!)
        rx-dom (mget app-matrix :rx-dom)]

    (rdom/render
      ;($ "div" "OK")
      #_ ($ "div" ($ "p" "Hiya, ")
        ($ "p" "Mom"))
      ;; (d/$d "div" "ok2")
      #_ (d/h1 {:on-click #(prn :click! %)}
        "Todos")
      ;; ($ sad {:answer 42})
      ;; ^js/React.Element
      #_  (.createElement
           (hx/get-react)
           "div"
           nil
           "nicer")
      #_ (hx/create-element
        "div"
        nil
        "Hunh")

      ;; (d/p "Part of " (d/a {:href "http://todomvc.com"} "TodoMVC"))
      ;; ($ red-black {:on true})
      ;;($ rn-elt)
      (mx-to-rx rx-dom)
       app-dom)))