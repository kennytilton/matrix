(ns tiltontec.example.ticktock
  (:require [clojure.string :as str]
            [goog.dom :as gdom]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset! mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen :refer [evt-mx target-value]]
            [tiltontec.mxweb.gen-macro
             :refer-macros [img section header h1 input footer p a
                            pre code span i label ul li div button br]]
            [tiltontec.mxweb.html :refer [tag-dom-create]]))

;;; -------------------------------------------------------

(defn clock []
  (div {:class   "example-clock"                            ;; conventional CSS
        :style   (cF (str "color:"
                       ;; next we see:
                       ;; - "point" reactivity, efficient and self-documenting
                       ;; - "omniscience" -- navigate to any property of any other widget, here searching by name
                       ;; - transparency: mget is the standard property reader, usable anywhere, but silently
                       ;;   establishing dependency when used inside a formula.
                       (mget (mxu-find-name me :timecolor) :value)))
        :content (cF (if (mget me :tick)
                       (-> (js/Date.) .toTimeString (str/split " ") first)
                       "*checks watch*"))}
    ;; so far it is just HTML. The MDN reference is our reference.
    {:tick   (cI false
               ;; sophisticated state management extension "ephemeral" properties for modelling events
               :ephemeral? true)
     :ticker (cF ;; async state change handled gracefully by the state engine
               (js/setInterval
                 ;; "omnipotence" -- navigate freely to any input property of any widget and mutate at will
                   #(mset! me :tick true) 1000))}))

(defn color-input []
  (div {:class "color-input"}
    "Time color: "
    (input {:name     :timecolor
            :tag/type "text"
            :value    (cI "#0FF")
            :onchange #(mset! (evt-mx %)
                         :value (target-value %))})))

(defn matrix-build! []
  (reset! matrix
    (md/make ::ticktock
      :mx-dom (cFonce (md/with-par me
                        [(div {}
                           (h1 {} "Hello, world. 'Tis now....")
                           (clock)
                           (color-input))])))))

(defn main []
  (println "[main]: loading")
  (let [root (gdom/getElement "app")                        ;; must be defined in index.html
        app-matrix (matrix-build!)
        app-dom (tag-dom-create
                  (mget app-matrix :mx-dom))]
    (set! (.-innerHTML root) nil)
    (gdom/appendChild root app-dom)))

(main)