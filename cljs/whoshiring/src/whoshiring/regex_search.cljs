(ns whoshiring.regex-search
  (:require [cljs.pprint :as pp]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI c-reset! make-cell]]
            [tiltontec.model.core
             :refer-macros [with-par fmu]
             :refer [matrix mset! mget mswap!]]
            [mxweb.gen
             :refer [evt-mx]]
            [mxweb.gen-macro :refer-macros [section datalist option header i h1 input footer p a span label ul li div button]]
            [whoshiring.ui-common :as utl]
            [clojure.string :as str]
            [whoshiring.preferences :refer [pref pref-toggle!]]))

(defn rebuild-regex-tree [me]
  (map (fn [or-clause]
         (map (fn [and-clause]
                (let [[term options] (str/split (str/trim and-clause) #",")]
                  (js/RegExp. term (str options (when (and (not (pref :match-case))
                                                           (not (str/includes? (or options "") "i")))
                                                  "i")))))
           (str/split (str/trim or-clause) #"&&")))
    (str/split (mget me :regex-de-aliased) #"\|\|")))

(defn make-listing-regex [prop lbl desc]
  (let [rgx-id (str prop "rgx")
        datalist-id (str prop "list")]
    (div {:style {:display        "flex"
                  :flex-direction "column"
                  :margin         "6px 18px 0px 30px"}}
      (span {:style   "color:white;font-size:0.7em"
             :content lbl})
      (input {:placeholder (pp/cl-format nil "Regex for ~a search" desc)
              :list        datalist-id
              :onchange    #(mset! (evt-mx %) :regex-raw (not-empty (str/trim (utl/target-val %))))
              :onfocus     #(let [dom (.-target %)]
                              (.setSelectionRange dom 0 (count (.-value dom))))
              :value       ""}
        {:name             rgx-id
         :regex-raw        (cI nil)
         :regex-de-aliased (cF (when-let [rgx-raw (not-empty (mget me :regex-raw))]
                                 (if (pref :or-and-aliasing)
                                   (str/replace (str/replace rgx-raw #"\sand\s" " && ") #"\sor\s" " || ")
                                   rgx-raw)))
         :regex-tree       (cF (rebuild-regex-tree me))
         :history          (cF (when-let [raw (not-empty (mget me :regex-raw))]
                                 (when-not (find #{raw} cache)
                                   (conj cache raw))))})
      (datalist {:id datalist-id}
        (for [hs (mget (fmu rgx-id) :history)]
          (option {:value hs}))))))

(defn make-title-regex []
  (make-listing-regex "title" "Titlex Only" "title"))

(defn make-full-regex []
  (make-listing-regex "listing" "Full Listing" "title and listing"))

(def regex-help
  ["Press <kbd style='background:cornsilk;font-size:1em'>Enter</kbd> or <kbd style='background:cornsilk;font-size:1em'>Tab</kbd> to activate, including after clearing."
   "Separate <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions'>JS RegExp-legal</a> terms with <b>||</b> or <b>&&</b> (higher priority) to combine expressions."
   "'Allow or/and' option treats those as ||/&& for easier mobile entry."
   "Regex terms are split on comma and passed to <code>new RegExp(pattern,flags)</code>."
   "e.g. Enter <b>taipei,i</b> for case-insensitive search."])

(defn mk-match-case []
  (div {:style {:color       "#fcfcfc"
                :margin      "0 9px 0 0"
                :display     "flex"
                :flex-wrap   "wrap"
                :align-items "center"}}
    (input {:id       :match-case
            :type     "checkbox"
            :checked  (cF (pref :match-case))
            :onchange #(pref-toggle! :match-case)})
    (label {:for :match-case}
      "match case")))

(defn mk-rgx-or-and []
  (div {:style {:color       "#fcfcfc"
                :margin      "0 9px 0 0"
                :display     "flex"
                :flex-wrap   "wrap"
                :align-items "center"}}
    (input {:id        :rgx-or-and
            :type      "checkbox"
            :checked   (cF (pref :or-and-aliasing))
            :title     "Replace 'or/and' with '||/&&' for easier mobile entry."
            :onchange #(pref-toggle! :or-and-aliasing)})
    (label {:for :rgx-or-and}
      "allow or/and")))

(defn make-regex-options []
  (div
    (div {:style (merge utl/hz-flex-wrap-centered
                   {:padding-right "12px"
                    :margin        "4px 0 9px 30px"})}
      (mk-match-case)
      (mk-rgx-or-and)
      (span {:style   {:color  "white" :margin-left "24px"
                       :cursor "pointer"}
             :title   "Show/hide RegExp help"
             :onclick #(pref-toggle! :rgx-help?)}
        "help"))
    (utl/help-list regex-help :rgx-help?)))

