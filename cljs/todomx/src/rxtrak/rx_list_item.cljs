(ns rxtrak.rx-list-item
  (:require [cljs.pprint :as pp]
            [clojure.string :as str]
            [bide.core :as r]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled profile)]

            [tiltontec.util.core :refer [pln xor now]]
            [tiltontec.cell.base :refer [unbound ia-type *within-integrity* *defer-changes*]]
            [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
            [tiltontec.cell.evaluate :refer [not-to-be]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]
            [tiltontec.cell.synapse
             :refer-macros [with-synapse]
             :refer []]


            [tiltontec.model.core :refer [matrix mx-par <mget mset!> mswap!>
                                          fget mxi-find mxu-find-type
                                          kid-values-kids] :as md]
            [tiltontec.webmx.html
             :refer [io-read io-upsert io-clear-storage
                     tag-dom-create
                     mxu-find-tag mxu-find-class
                     dom-tag tagfo tag-dom
                     dom-has-class dom-ancestor-by-tag]
             :as tag]

            [tiltontec.xhr
             :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
                     xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
                     xhr-selection xhr-to-map xhr-name-to-map xhr-response]]

            [tiltontec.webmx.gen
             :refer-macros [section header h1 input footer p a
                            span label ul li div button br]
             :refer [dom-tag evt-tag]]

            [tiltontec.webmx.style :refer [make-css-inline]]

            [goog.dom :as dom]
            [goog.dom.classlist :as classlist]
            [goog.editor.focus :as focus]
            [goog.dom.selection :as selection]
            [goog.events.Event :as event]
            [goog.dom.forms :as form]

            [rxtrak.rx
             :refer [make-rx rx-title rx-created bulk-rx
                     rx-completed rx-upsert rx-delete! load-all
                     rx-id rx-toggle-completed! rx-due-by]]
            [cljs-time.coerce :as tmc]
            [clojure.string :as $]))

(declare rx-edit
  ae-explorer
  due-by-input)

(defn rx-list-item [me rx matrix]
  (let [ul-tag me]
    (li {:class   (cF [(when (<mget me :selected?) "chosen")
                       (when (<mget me :editing?) "editing")
                       (when (rx-completed rx) "completed")])

         :display (cF (if-let [route (<mget matrix :route)]
                        (cond
                          (or (= route "All")
                            (xor (= route "Active")
                              (rx-completed rx))) "block"
                          :default "none")
                        "block"))}
      ;;; custom slots..
      {:rx        rx
       ;; above is also key to identify lost/gained LIs, in turn to optimize list maintenance

       :selected? (cF (some #{rx} (<mget ul-tag :selections)))

       :editing?  (cI false)}

      (let [rx-li me]
        [(div {:class "view"}
           (input {:class   "toggle" ::tag/type "checkbox"
                   :checked (cF (not (nil? (rx-completed rx))))
                   :onclick #(rx-toggle-completed! rx)})

           (label {:onclick    (fn [evt]
                                 (mswap!> ul-tag :selections
                                   #(if (some #{rx} %)
                                      (remove #{rx} %)
                                      (conj % rx))))

                   :ondblclick #(do
                                  (mset!> rx-li :editing? true)
                                  (tag/input-editing-start
                                    (dom/getElementByClass "edit" (tag-dom rx-li))
                                    (rx-title rx)))}
             (rx-title rx))

           (due-by-input rx)

           (ae-explorer rx)

           (button {:class   "destroy"
                    :onclick #(rx-delete! rx)}))

         (letfn [(rx-edt [event]
                   (rx-edit event rx-li))]
           (input {:class     "edit"
                   :onblur    rx-edt
                   :onkeydown rx-edt}))]))))

(defn rx-edit [e rx-li]
  (let [edt-dom (.-target e)
        rx (<mget rx-li :rx)
        li-dom (tag-dom rx-li)]

    (when (classlist/contains li-dom "editing")
      (let [title (str/trim (form/getValue edt-dom))
            stop-editing #(mset!> rx-li :editing? false)]
        (cond
          (or (= (.-type e) "blur")
            (= (.-key e) "Enter"))
          (do
            (stop-editing)                                  ;; has to go first cuz a blur event will sneak in
            (if (= title "")
              (rx-delete! rx)
              (mset!> rx :title title)))

          (= (.-key e) "Escape")
          ;; this could leave the input field with mid-edit garbage, but
          ;; that gets initialized correctly when starting editing
          (stop-editing))))))

;;; --- due-by input -------------------------------------------

(defn due-by-input [rx]
  (input {::tag/type "date"

          :class     "due-by"
          :value     (cFn (when-let [db (rx-due-by rx)]
                            (let [db$ (tmc/to-string (tmc/from-long db))]
                              (subs db$ 0 10))))

          :oninput   #(mset!> rx :due-by
                        (tmc/to-long
                          (tmc/from-string
                            (form/getValue (.-target %)))))

          :disabled (cF (println :disabled-sees (rx-completed rx))
                      (rx-completed rx))

          :style     (cFonce (make-css-inline me
                               :border "none"
                               :font-size "14px"
                               :display (cF (if (and (rx-completed rx)
                                                     (not (rx-due-by rx)))
                                              "none" "block"))

                               :background-color (cF (when-let [clock (mxu-find-class (:tag @me) "std-clock")]
                                                       (if-let [due (rx-due-by rx)]
                                                         (if (rx-completed rx)
                                                           cache ;; cF expansion has cache (prior value) in lexical scope
                                                           (let [time-left (- due (<mget clock :clock))]
                                                             (cond
                                                               (neg? time-left) "red"
                                                               (< time-left (* 24 3600 1000)) "coral"
                                                               (< time-left (* 2 24 3600 1000)) "yellow"
                                                               :default "green")))
                                                         "#e8e8e8")))))}))

;;; -----------------------------------------------------------
;;; --- adverse events ----------------------------------------

(defn de-whitespace [s]
  ($/replace s #"\s" ""))

(def ae-by-brand "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:~(~a~)&limit=3")

(defn ae-explorer [rx]
  (button {:class   "li-show"
           :style   (cF (str "display:"
                          (or (when-let [xhr (<mget me :ae)]
                                (let [aes (xhr-response xhr)]
                                  (when (= 200 (:status aes))
                                    "block")))
                            "none")))
           :onclick #(js/alert "Feature not yet implemented.")}

    {:ae (cF+ [:obs (fn-obs
                      (when-not (or (= old unbound) (nil? old))
                        (not-to-be old)))]
           (when (<mget (mxu-find-class me "ae-autocheck") :on?)
             (make-xhr (pp/cl-format nil ae-by-brand
                         (js/encodeURIComponent (rx-title rx)))
               {:name name :send? true})))}

    (span {:style "font-size:0.7em;margin:2px;margin-top:0;vertical-align:top"}
      "View Adverse Events")))

