(ns todo-mvc.core
  (:require
   [clojure.string :as string]
   [helix.core :as hx :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   ;[todo-mvc.components :as c]
   ;;[todo-mvc.lib :refer [defnc]]
   ;[todo-mvc.storage :as storage]
   [mxreact.mxreact :as mxr]
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

; (.createElement
;                        (hx/get-react)
;                        ~type
;                        (impl.props/dom-props ~(first args))
;                        ~@(rest args))

(defn App
  []
  (d/p "Hi fn mom 9")
  (.createElement (mxr/get-react)
    "p"
    {}
    "Hi mom 3"))

(defn ^:dev/after-load start
  []
  (rdom/render ($ App) (js/document.getElementById "app")))
