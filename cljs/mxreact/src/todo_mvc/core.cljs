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
   ["react-router-dom" :as rr]
   [mxreact.mxreact :refer [wmk]]))

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
  (d/div
    (d/section
      {:class "todoapp"}
      (d/header
        {:class "header"}
        (d/h1 "todos")
        (d/p "Hi mom")
        (d/p "Booya")))))

(defn lesson []
  (wmk "h1" {}
    {:style {:fontSize     72
             :fontFamily   "HelveticaNeue-Thin"
             :textAlign    "center"
             :color        "rgba(175, 47, 47, 0.15)"
             :marginBottom 20}}
    "todos"))

(defn demo []
  (md/make ::reactWebApp
    ;; md/make ^^^ wires up a map for membership in the Matrix as an object suitable for the Matrix node graph
    :rx-dom (cFonce
              ;; cFonce ^^ evaluates once and never runs again, even if it reads reactive properties
              (md/with-par me
                (lesson)))))

(defn matrix-build! []
  (reset! mxn/ssdict {})
  (reset! md/matrix (demo)))

(defn
  ;; not sure what effect this next bit has:
  ;; ^:dev/after-load
  start []
  (let [app-matrix (matrix-build!)
        root-mx (md/mget app-matrix :rx-dom)
        root-element (md/mget root-mx :react-element)]
    (expo-root/render-root
      (fn [] root-element))))

(defn init []
  (start))

(defn ^:export start
  []
  (rdom/render ($ App) (js/document.getElementById "app")))
