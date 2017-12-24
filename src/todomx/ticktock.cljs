(ns todomx.ticktock
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [c? c?once] :refer [c-in]]
            [tiltontec.model.core
             :refer [matrix mx-par md-get md-reset! mxi-find mxu-find-name] :as md]
            [tiltontec.tag.gen :refer [evt-tag target-value] :refer-macros [h1 input div]]))

(declare clock time-color color-input)


(defn matrix-build! []
  (md/make ::ticktock
    :mx-dom (c?once (md/with-par me
                      [(div {}
                         (h1 {} "Hello, world. 'Tis now....")
                         (clock)
                         (color-input))]))))

(defn clock []
  (div {:class   "example-clock"
      :style   (c? (str "color:" (md-get (mxu-find-name me :timecolor) :value)))

      :tick (c-in false :ephemeral? true)
      :ticker (c? (js/setInterval #(md-reset! me :tick true) 1000))

      :content (c? (if (md-get me :tick)
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
            :value    (c-in "#0ff")
            :onchange #(md-reset! (evt-tag %)
                                  :value (target-value %))})))