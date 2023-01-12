(ns whoshiring.ui-common
  (:require
    [goog.string :as gs]
    [clojure.string :as str]
    ;;[whoshiring.db :as db]
    [cljs.reader :as reader]
    [tiltontec.cell.base :refer [c-unbound?]]
    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]
    [tiltontec.model.core
     :refer-macros [with-par cFkids mdv! fmu]
     :refer [matrix mget mswap! mset!] :as md]
    [tiltontec.mxweb.gen
     :refer [make-tag dom-tag evt-mx target-value]]
    [tiltontec.mxweb.gen-macro
     :refer-macros [img section header h1 input footer p a span label ul li div button br]]
    [whoshiring.preferences :as up]))

;;; --- clj++ --------------------------------------

(defn push-new [coll x]
  (if (some #{x} coll)
    coll (conj coll x)))

(defn target-val [e]
  (.-value (.-target e)))

(def hz-flex-wrap {:display   "flex"
                   :flex-wrap "wrap"})

(def hz-flex-wrap-centered
  {:display     "flex"
   :flex-wrap   "wrap"
   :align-items "center"})

(def hz-flex-wrap-bottom
  {:display     "flex"
   :flex-wrap   "wrap"
   :align-items "bottom"})

(defn unesc [entity]
  (gs/unescapeEntities entity))

(defn slide-in-anime [show?]
  (if show? "slideIn" "slideOut"))

;;; --- reusable components -----

(defn help-list [helpItems pref-property]
  (div {:class   (cF (str "help " (slide-in-anime (mget up/prefs pref-property))))
        :style   (cF {:display     (if (mget up/prefs pref-property)
                                     "block" "none")
                      :margin-top  0
                      :padding-top "6px"})
        :onclick #(mset! up/prefs pref-property false)}
    (div {:style {:cursor      "pointer"
                  :textAlign   "left"
                  :marginRight "18px"}}
      (ul {:style {:listStyle  "none"
                   :marginLeft 0}}
        (map #(li {:style {:padding 0
                           :margin  "0 18px 9px 0"}}
                (span %))
          helpItems)))))

(defn toggle-char [db-key title init-open? on-char off-char & [style]]
  (span {:style   (merge {:font-weight "bold"
                          :cursor      "pointer"
                          :margin-left "9px"
                          :font-family "Arial"
                          :font-size   "1em"} style)
         :title   title
         :onclick #(mswap! (evt-mx %) :on-off not)}
    {:name   db-key
     :on-off (cI init-open?)}
    (unesc (if (mget me :on-off) on-char off-char))))

(defn slide-in-rule [c show?]
  (if show?
    "slideIn"
    (if (c-unbound? c)
      "" "slideOut")))

(defn open-case [name title & case-factories]
  (div
    (span {:style   "margin-left:24px;min-width:48px"
           :content title})
    (for [cf case-factories]
      (cf))))

(defn open-shut-case [name title init-open? echo-widget & case-factories]
  (let [osc-name (keyword (str name "-toggle"))]
    (div
      (div {:class "selector"}
        (span title)
        (toggle-char osc-name
          (str "Show/hide " title)
          init-open? "&#x25be" "&#x25b8")
        echo-widget)
      (div {:class (cF (str "osBody "
                         (slide-in-rule _cell
                           (mdv! osc-name :on-off))))
            :style (cF {:background "#ff6600"
                        :padding    "6px"
                        :display    (if (mdv! osc-name :on-off)
                                      "block" "none")})}
        (for [cf case-factories]
          (cf))))))