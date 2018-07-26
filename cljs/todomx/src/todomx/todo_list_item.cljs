(ns todomx.todo-list-item
  (:require [cljs.pprint :as pp]
            [clojure.string :as str]

            [tiltontec.util.core :refer [pln xor]]
            [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]

            [tiltontec.model.core :refer [matrix mx-par <mget mset!> mswap!>] :as md]
            [tiltontec.webmx.html
             :refer [input-editing-start mxu-find-tag mxu-find-class
                     dom-tag tagfo tag-dom]
             :as tag]

            [tiltontec.webmx.gen
             :refer-macros [section header h1 input footer p a span label ul li div button]
             :refer [dom-tag evt-tag]]

            [goog.dom :as dom]
            [goog.dom.classlist :as classlist]
            [goog.dom.forms :as form]

            [todomx.todo
             :refer [make-todo td-title td-created bulk-todo
                     td-completed td-upsert td-delete! load-all
                     td-id td-toggle-completed!]]))

(declare todo-edit)

(defn todo-list-item [me todo matrix]
  (li
    ;; HTML attributes...
    {:class   (cF #{(when (<mget me :editing?) "editing")
                    (when (td-completed todo) "completed")})

     :display (cF (if-let [route (<mget matrix :route)]
                    (cond
                      (or (= route "All")
                        (xor (= route "Active")
                          (td-completed todo))) "block"
                      :default "none")
                    "block"))}

    ;;; custom slots...
    {;; to-do is handy to have around, and serves as key
     ;; to identify lost/gained LIs, in turn to optimize list maintenance
     :todo     todo

     :editing? (cI false)}

    ;;; content......
    (let [todo-li me]

      [(div {:class "view"}
         (input {:class   "toggle" ::tag/type "checkbox"
                 :checked (cF (not (nil? (td-completed todo))))
                 :onclick #(td-toggle-completed! todo)})

         (label {:ondblclick #(do
                                (mset!> todo-li :editing? true)
                                (tag/input-editing-start
                                  (dom/getElementByClass "edit" (tag-dom todo-li))
                                  (td-title todo)))}
           (td-title todo))

         (button {:class   "destroy"
                  :onclick #(td-delete! todo)}))

       (letfn [(todo-edt [event]
                 (todo-edit event todo-li))]
         (input {:class     "edit"
                 :onblur    todo-edt
                 :onkeydown todo-edt}))])))


(defn todo-edit [e todo-li]
  (let [edt-dom (.-target e)
        todo (<mget todo-li :todo)
        li-dom (tag-dom todo-li)]

    (when (classlist/contains li-dom "editing")
      (let [title (str/trim (form/getValue edt-dom))
            stop-editing #(mset!> todo-li :editing? false)]
        (cond
          (or (= (.-type e) "blur")
            (= (.-key e) "Enter"))
          (do
            (stop-editing)                                  ;; has to go first cuz a blur event will sneak in
            (if (= title "")
              (td-delete! todo)
              (mset!> todo :title title)))

          (= (.-key e) "Escape")
          ;; this could leave the input field with mid-edit garbage, but
          ;; that gets initialized correctly when starting editing
          (stop-editing))))))