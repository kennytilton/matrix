(ns mxweb.example.ticktock
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par <mget <mget mset!> mset!> mxi-find mxu-find-name] :as md]
            [mxweb.gen :refer [evt-tag target-value] :refer-macros [h1 input div span]]))

(declare clock time-color color-input)


(defn matrix-build! []
  (md/make ::ticktock
    :mx-dom (cFonce (md/with-par me
                      [(div {}
                         (h1 {} "Hello, world. 'Tis now....")
                         (clock)
                         (color-input))]))))

(defn clock []
  (div {:class   "example-clock"
      :style   (cF (str "color:" (<mget (mxu-find-name me :timecolor) :value)))

      :tick (cI false :ephemeral? true)
      :ticker (cF (js/setInterval #(mset!> me :tick true) 1000))

      :content (cF (if (<mget me :tick)
                     (-> (js/Date.)
                         .toTimeString
                         (str/split " ")
                         first)
                     "*checks watch*"))}))

(defn color-input []
  (div {:class "color-input"}
    "Time color: "
    (input {:name     :timecolor
            :tag/type "text"
            :value    (cI "#000")
            :onchange #(mset!> (evt-tag %)
                                  :value (target-value %))})))