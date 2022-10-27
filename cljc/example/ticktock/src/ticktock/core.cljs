(ns ticktock.core
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par <mget <mget mset!> mset!>
                     mxi-find mxu-find-name] :as md]
            [mxweb.gen
             :refer [evt-tag target-value]
             :refer-macros [h1 input div span]]
            [mxweb.html :refer [tag-dom-create]]))

(enable-console-print!)

(defn clock []
  (div {:class   "example-clock"
        :style   (cF (str "color:" (<mget (mxu-find-name me :timecolor) :value)))

        :content (cF (if (<mget me :tick)
                       (-> (js/Date.)
                           .toTimeString
                           (str/split " ")
                           first)
                       "*checks watch*"))}
       {:tick   (cI false :ephemeral? true)
        :ticker (cF (js/setInterval
                      #(mset!> me :tick true) 1000))}))

(defn color-input []
  (div {:class "color-input"}
       "Time color: "
       (input {:name     :timecolor
               :tag/type "text"
               :value    (cI "#f00")
               :onchange #(mset!> (evt-tag %)
                                  :value (target-value %))})))

(let [root (dom/getElement "tagroot")
      app-matrix (md/make
                   ::ticktock
                   :mx-dom (cFonce (md/with-par me
                                                [(div {}
                                                      (h1 {} "Hello, world. 'Tis now....")
                                                      (clock)
                                                      (color-input))])))
      app-dom (tag-dom-create
                (md/<mget app-matrix :mx-dom))]

  (set! (.-innerHTML root) nil)
  (dom/appendChild root app-dom))