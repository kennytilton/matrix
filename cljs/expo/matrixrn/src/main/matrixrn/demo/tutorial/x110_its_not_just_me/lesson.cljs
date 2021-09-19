(ns matrixrn.demo.tutorial.x110-its-not-just-me.lesson
  (:require
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mget mswap!]]
    [react]
    [react-native :as rn]
    [matrixrn.matrixrn :as mxn :refer [mku fmu mk with-props]]))

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

(defn lesson []
  (mku mxn/Screen {}
    {:name "Hello, Others."}
    (mk rn/View {}
      {:style {:flex            1
               :padding         48
               :alignItems      "center"
               :backgroundColor "gold"}}
      (mk rn/Button
        {:name      :count-up
         :counter   (cI (+ 2 2))
         :title     (cF (str "Click me to count higher: " (mget me :counter)))}
        (with-props [:title [:disabled :disabled?]]
          {:onPress #(mswap! me :counter inc)}))

      (mk rn/View {}
        {}
        (when (> (mget (fmu :count-up) :counter) 5)
          (mk rn/Button
            {:title     (cF (str "Click me for no reason"))}
            (with-props [:title]
              {:onPress #(mswap! me :counter inc)}))))

      (mk rn/Button
        ;; `fmu` is short for find other mx searching up from me
        ;; this expands into `fget`, a family search utility we document below.
        {:title (cF (str "Count lower from: " (mget (fmu :count-up) :counter)))}
        (with-props [:title]
          {:onPress #(mswap! (fmu :count-up) :counter dec)}))
      ;;; TryThis[separate-count-display, avg]: move the counter out into a text box of it own.
      ;;; Text is a little weird, and we do have not fully wrapped it yet, so
      ;;; for now the solution will involve sth like:
      #_ (mxn/mk rn/Text {}
           {:style {:flex 1 :color "black" :backgroundColor "linen" :padding 4 :margin 9}}
           (mxn/strng (clojure.string/str "The count is now " _navigate_ to counter and take :count_))))))

