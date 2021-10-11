(ns tutorial.x100-hello-world.lesson
  (:require
    [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
    [tiltontec.model.core :refer [with-par mx-par matrix mget mset! mswap!] :as md]
    [react]

    [mxreact.mxreact :as mxr :refer [mx$ div p button]]
    ))

(defn app []
  (md/make :mxreact/mxReactApp
    :rx-dom
    (cFonce (with-par me
              ;; All DOM maker macros have the signature:
              ;;     (TAG mx-props react-props children*]
              ;;
              ;; TAG: div, span, button, et al
              ;; mx-props: reactive properties for the "host" Matrix object
              ;; react-props: props that will be passed to react/createElement
              ;; children: zero or more child Matrix objects
              ;;
              (div {} {}
                (doall ;; todo work ths into cFkids
                  ;; children are flattened and nils removed, so this nested array is no problem.
                  (for [msg ["Click the button, watch the title change. When you get to 42, the"
                             "the button will be disabled."]]
                    (p {}{} msg)))

                (button
                  ;; ----------------------------------------------------------------------
                  ;; This first group of props are for the Matrix "host" object.
                  ;; These can be moderated by reactive Cells, or just be assigned literals.
                  ;;
                  {
                   ;; cI is short for "input cell".
                   ;; We provide the starting value, then arbitrary imperative code can change it.
                   ;; The starting value form is evaluated immediately.
                   :counter   (cI (+ 2 2))

                   ;; cF is short for "formulaic cell".
                   ;; The formula will be first evaluated as soon as this Button instance is added to the Matrix tree,
                   ;; then evaluated each time its dependencies change.
                   ;;
                   ;; Notes:
                   ;;   `mget` is a getter that establishes dependency;
                   ;;   'me' is an anaphor (established by the macro cF) akin to 'self' or 'this';
                   ;;   the formula can be arbitrarily complexe CLJ code.
                   :title     (cF (str "Click me to count higher: " (mget me :counter)))

                   :tx-color (cF (if (even? (mget me :counter))
                                   "red" "green"))

                   ;; do not count too high! There is no turning back once disabled, until we had
                   ;; a countdown button in the next lesson.
                   :disabled? (cF (= 42 (mget me :counter)))

                   ;; TryThis[times-six,avg]: counting to 42 (to test the above) takes a lot of clicking!
                   ;; Add a new computed ":times-six" property that is six times the :counter property,
                   ;; and have :disabled? watch for /that/ property to get to 42.
                   }
                  ;; --------------------------------------------------------------
                  ;; React element props: these props are passed to createElement.
                  ;; The map will be (deeply) converted to JS by clj->js.
                  ;; Note: We can pull properties from 'me' (or elsewhere), but not use formulas here.
                  {:disabled (mget me :disabled?)
                   ;; ^^^ soon we will discover the macro `with-props` to make the above less boilerplate-y

                   :style    {:color (mget me :tx-color)}
                   ;; Below: 'me' is bound to an atom holding an MX map/instance
                   ;; so we use a swap! wrapper that adds reactive notification
                   ;; to modify the counter. We could just `swap!`, but then no dataflow
                   :onClick  #(mswap! me :counter inc)}
                  (mx$ (mget (mx-par me) :title))))))))
