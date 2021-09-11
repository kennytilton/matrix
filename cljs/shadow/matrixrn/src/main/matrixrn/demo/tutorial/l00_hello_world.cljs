(ns matrixrn.demo.tutorial.l00-hello-world
  (:require
    [tiltontec.cell.core :refer-macros [cF] :refer [cI]]
    [tiltontec.model.core :refer [mget mswap!]]
    [react]
    [react-native :as rn]
    [applied-science.js-interop :as j]
    ["@react-navigation/bottom-tabs" :as rn-bottom-tabs]
    [matrixrn.matrixrn :as mxn :refer [mkuscreen mk with-props]]))

(defonce tabs-nav (rn-bottom-tabs/createBottomTabNavigator))

(defn lesson []
  ;; All "mk" maker functions have the signature:
  ;;     [component mx-props rn-element-props children*]
  ;;
  ;; component: an actual RN component
  ;; mx-props: reactive properties for the "host" Matrix object
  ;; rn-element-props: props that will be passed to react/createElement
  ;; children: zero or more child Matrix objectx
  ;;
  ;; mkuscreen?! Screen is a special case, so for now it gets its own "mku" (make unhooked)
  ;; Some black-belt macrology can prolly let this next just be "mkU"
  ;;
  (let [{:keys [Screen]} (j/lookup tabs-nav)]
    (mkuscreen Screen {}
      {:name "Hello, world."}
      (mk rn/Button
        ;; ----------------------------------------------------------------------
        ;; This first group of props are for the Matrix "host" object.
        ;; These can have fancy reactive Cells moderating properties.
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
         ;;   teh formula can be arbitrarily complexe CLJ code.
         :title     (cF (str "Click me to count higher: " (mget me :counter)))

         ;; do not count too high! There is no turning back once disabled, until we had
         ;; a countdown button in the next lesson.
         :disabled? (cF (= 42 (mget me :counter)))

         ;; TryThis: counting to 42 (to test the above) takes a lot of clicking!
         ;; Add a new computed ":times-six" property that is six times the :counter property,
         ;; and have :disabled? watch for /that/ property to get to 42.
         }
        ;; --------------------------------------------------------------
        ;; RN element props: these props are passed to createElement.
        ;; The map will be converted to JS by clj->js.
        ;; We can pull properties from 'me' (or elsewhere), but not use formulas here.
        {:title    (mget me :title)
         :disabled (mget me :disabled?)
         ;; ^^^ soon we will see a `with-props` macro to simplify the above

         :style    {:color "red"}
         ;; Below: 'me' is bound to an atom holding an MX map/instance
         ;; so we use a swap! wrapper that adds reactive notification
         :onPress  #(mswap! me :counter inc)}))))
