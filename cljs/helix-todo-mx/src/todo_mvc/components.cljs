(ns todo-mvc.components
  (:require
   [helix.core :as hx :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [todo-mvc.lib :refer [defnc]])
  (:require-macros
   [todo-mvc.components]))

(defn enter-key? [ev]
  (= (.-which ev) 13))

(defn escape-key? [ev]
  (= (.-which ev) 27))

(defnc Title
  []
  (d/h1 {:on-click #(prn :click! %)}
    "Todos"))

(defnc AppFooter []
  (d/footer
   {:class "info"}
   (d/p "Double click to edit a todo")
   (d/p "Part of " (d/a {:href "http://todomvc.com"} "TodoMVC"))))

(defnc NewTodo
  [{:keys [on-complete]}]
  (let [[new-todo set-new-todo] (hooks/use-state "")
        on-change #(set-new-todo (.. % -target -value))]
    (d/input
     {:class "new-todo"
      :placeholder "What needs to be done?"
      :autoFocus true
      :value new-todo
      :on-key-down #(when (enter-key? %)
                      (on-complete new-todo)
                      (set-new-todo ""))
      :on-change on-change})))

(defn init-state [title]
  {:editing? false
   :title title})

(defmulti todo-actions (fn [state action] (first action)))

(defmethod todo-actions
  ::start-editing [state _]
  (assoc state :editing? true))

(defmethod todo-actions
  ::stop-editing [state _]
  (assoc state :editing? false))

(defmethod todo-actions
  ::update-title [state [_ new-title]]
  (assoc state :title new-title))

(defmethod todo-actions
  ::reset [state [_ initial-title]]
  (init-state initial-title))

(defnc TodoItem
  [{:keys [id title completed? on-toggle on-destroy on-update-title]}]
  (let [initial-title title
        [{:keys [editing?
                 title]} dispatch] (hooks/use-reducer
                                    todo-actions
                                    initial-title
                                    init-state)
        input-ref (hooks/use-ref nil)
        focus-input #(when-let [current (.-current input-ref)]
                       (.focus current))]
    (hooks/use-layout-effect
     :auto-deps
     (when editing?
       (focus-input)))
    (d/li
     {:class (cond
               editing? "editing"
               completed? "completed")}
     (d/input
      {:class "edit"
       :value title
       :on-change #(dispatch [::update-title (.. % -target -value)])
       :ref input-ref
       :on-key-down #(cond
                       (and (enter-key? %)
                            (= (.. % -target -value) "")) (on-destroy id)
                       (enter-key? %) (do (on-update-title id title)
                                          (dispatch [::stop-editing]))
                       (escape-key? %) (do (dispatch [::reset initial-title])))
       :on-blur #(when editing?
                   (on-update-title id title)
                   (dispatch [::stop-editing]))})
     (d/div
      {:class "view"}
      (d/input
       {:class "toggle"
        :type "checkbox"
        :checked completed?
        :on-change #(on-toggle id)})
      (d/label {:on-double-click #(dispatch [::start-editing])} title)
      (d/button
       {:class "destroy"
        :on-click #(on-destroy id)})))))
