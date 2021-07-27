(ns todo-mvc.storage
  (:require [cljs.reader :as reader]
            [helix.hooks :as hooks]))

(defn get-storage [key]
  (when-let [v (.getItem js/window.localStorage key)]
    (reader/read-string v)))

(defn set-storage [key val]
  (.setItem js/window.localStorage key (pr-str val)))

(defn use-persisted-reducer
  ([storage-key reducer initial-state init]
   (let [initial (get-storage storage-key)
         reducer-tuple (hooks/use-reducer reducer initial init)
         [state] reducer-tuple]
     (hooks/use-effect
      :auto-deps
      (set-storage storage-key state))
     reducer-tuple)))
