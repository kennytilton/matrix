(ns todo-mvc.components
  (:require [helix.core :as helix]))

(defmacro title [& args]
  `(helix/$ Title ~@args))

(defmacro app-footer [& args]
  `(helix/$ AppFooter ~@args))

(defmacro new-todo [& args]
  `(helix/$ NewTodo ~@args))

(defmacro todo-item [& args]
  `(helix/$ TodoItem ~@args))
