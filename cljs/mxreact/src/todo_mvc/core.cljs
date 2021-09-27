(ns todo-mvc.core
  (:require
   [clojure.string :as string]
   [helix.core :as hx :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [todo-mvc.components :as c]
   [todo-mvc.lib :refer [defnc]]
   [todo-mvc.storage :as storage]
   ["react-dom" :as rdom]
   ["react-router-dom" :as rr]))

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
    (d/p "Hi mom") #_
    ($ rr/BrowserRouter
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

(defn ^:export start
  []
  (rdom/render ($ App) (js/document.getElementById "app")))
