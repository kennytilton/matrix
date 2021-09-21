(ns matrixrn.demo.tutorial.x110-its-not-just-me.separate-count-display
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mget mswap!]]
    [react]
    [react-native :as rn]
    [matrixrn.matrixrn :as mxn :refer [<> mku fmu mk with-props]]
    ["@expo/vector-icons" :refer [FontAwesome]]))

;; We introduce 'fmu', short:
;;    for "search [f]amily (the Matrix, in fact)
;;    starting from [m]e
;;    going [u]p only, though once "up" one level we search deep all siblings and their children recursively.
;; There are quite a few handy searchers, and they all end up in `fget`:
;;   fget [name starting-node options]
;;   (fget name starting-node
;;     :me? should the starting-node be checked as a match?
;;     :inside? do I search the tree below starting-node? Search would be depth-first, btw.
;;     :must? must a match be found? If so, an error is thrown on failure
;;     :up? should we search up from the starting-node?)

;;; TryThis[separate-count-display, avg]: move the counter out into a text box of it own.

(defn solution []
  (mku mxn/Screen {}
    {:tabBarLabel "Separate count display"
     :tabBarIcon  (fn []
                    (<> FontAwesome (clj->js {:name "users" :size 28})))}
    (mk rn/View {}
      {:style {:flex            1
               :padding         48
               :alignItems      "center"
               :backgroundColor "gold"}}
      (mk rn/Button
        {:name      :count-up
         :counter   (cI (+ 2 2))}
        (with-props [ [:disabled :disabled?]]
          {:title     "Click me to count higher"
           :onPress #(mswap! me :counter inc)}))
      (mk rn/Button {}
        (with-props [:title]
          {:title     "Click me to count lower"
           :onPress #(mswap! (fmu :count-up) :counter dec)}))
      (mxn/mk rn/Text {}
           {:style {:flex 1 :color "black" :backgroundColor "linen" :padding 4 :margin 9}}
           (mxn/strng (str "The count is now " (mget (fmu :count-up) :counter)))))))

