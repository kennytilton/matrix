(ns whoshiring.regex-search
  (:require [cljs.pprint :as pp]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI c-reset! make-cell]]
            [tiltontec.model.core
             :refer-macros [with-par]
             :refer [matrix mset!> <mget mswap!>] :as md]
            [mxweb.gen
             :refer-macros [section datalist option header i h1 input footer p a span label ul li div button]
             :refer [dom-tag evt-tag]]
            [whoshiring.ui-common :as util]
            [whoshiring.ui-common :as utl]
            [clojure.string :as str]))

;function buildRgxTree(mx, e) {
;    mx.rgxRaw = e.target.value.trim()
;
;    if (mx.rgxRaw === '') {
;        mx.rgxTree = null // test
;    } else {
;        if (mx.history.indexOf( mx.rgxRaw) === -1) {
;            //clg('adding to rgx!!!!', mx.rgxRaw)
;            mx.history = mx.history.concat(mx.rgxRaw)
;        }
;        rebuildRgxTree(mx)
;    }
;}



;function rebuildRgxTree( mx) {
;
;    let matchCase = mx.fmUp(:rgx-match-case).value
;        , cvtOrAnd = mx.fmUp("rgxOrAnd").value
;        , rxor = RegExp(" or ", 'g')
;        , rxand = RegExp(" and ", 'g')
;        , search =  cvtOrAnd? mx.rgxRaw.replace(rxor," || ").replace(rxand," && ") : mx.rgxRaw
;        // , search =  cvtOrAnd? mx.rgxRaw.replace(/\sor\s/," || ").replace(/\sand\s/," && ") : mx.rgxRaw
;
;    mx.rgxTree = search.split('||').map(orx => orx.trim().split('&&').map(andx => {
;        try {
;            let [term, options=''] = andx.trim().split(',')
;            if ( !matchCase && options.search('i') === -1)
;                options = options + 'i'
;            return new RegExp( term, options)
;        }
;        catch (error) {
;            alert(error.toString() + ": <" + andx.trim() + ">")
;        }
;    }))
;}



(defn rgx-tree-build [scope]
  #_(when-let [rgx-normal (not-empty (de-aliased scope))]
      (let [or-terms (str/split (js->clj rgx-normal) #"\|\|")]
        (into []
          (map (fn [or-term]
                 (into []
                   (map (fn [and-term]
                          (let [[term options] (str/split (str/trim and-term) ",")
                                netopts (if (and (not @db/rgx-match-case)
                                                 (not (str/includes? (or options "") "i")))
                                          (str options "i")
                                          "")]
                            (try
                              (js/RegExp. term netopts)
                              (catch js/Object ex
                                (js/alert (str "Invalid regex: " rgx-normal))
                                nil))))
                     (str/split or-term #"&&")))))
          or-terms))))

(defn fmUp [mx name]
  (md/mxu-find-name mx name))

(defn fmUpv [mx name slot]
  (<mget (fmUp mx name) :value))

(defn rebuild-regex-tree [mx]
  (let [match-case (fmUpv mx :rgx-match-case :on-off)
        search (<mget mx :regex-de-aliased)]
    (map (fn [or-clause]
           (map (fn [and-clause]
                  (let [[term options] (str/split (str/trim and-clause) #",")]
                    (js/RegExp. term (str options (when (and (not match-case)
                                                             (not (str/includes? (or options "") "i")))
                                                    "i")))))
             (str/split search #"&&")))
      (str/split search #"||"))))

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
              :onchange    (fn [e]
                             (mset!> (evt-tag e) :regex-raw (not-empty (str/trim (utl/target-val e)))))
              :onfocus     (fn [e]
                             (let [dom (.-target e)]
                               (.setSelectionRange dom 0 (count (.-value dom)))))
              :value       ""}
        {:name       rgx-id
         :regex-raw  (cI nil)
         :regex-de-aliased (cF (when-let [rgx-raw (not-empty (<mget me :regex-raw))]
                                 (if (<mget (md/mxu-find-name me :rgx-or-and) :on-off)
                                   (str/replace (str/replace rgx-raw #"\sand\s" " && ") #"\sor\s" " || ")
                                   rgx-raw)))
         :regex-tree (cF (rebuild-regex-tree me))
         :history    (cF (when-let [raw (not-empty (<mget me :regex-raw))]
                           (when-not (find #{raw} cache)
                           (conj cache raw))))})
      (datalist {:id datalist-id}
        (for [hs (<mget (md/mxu-find-name me rgx-id) :history)]
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

(defn mk-regex-match-case []
  (div {:style {:color       "#fcfcfc"
                :margin      "0 9px 0 0"
                :display     "flex"
                :flex-wrap   "wrap"
                :align-items "center"}}
    (input {:id       :rgx-match-case
            :type     "checkbox"
            :checked  (cF (<mget me :on-off))
            :onchange (fn [e] (mswap!> (evt-tag e) :on-off not))}
      {:name :rgx-match-case
       :on-off (cI false)})
    (label {:for :rgx-match-case}
      "match case")))

(defn mk-rgx-or-and []
  (div {:style {:color       "#fcfcfc"
                :margin      "0 9px 0 0"
                :display     "flex"
                :flex-wrap   "wrap"
                :align-items "center"}}
    (input {:id        :rgx-or-and
            :type      "checkbox"
            :checked   (cF (<mget me :on-off))
            :title     "Replace 'or/and' with '||/&&' for easier mobile entry."
            :on-change (fn [e] (mswap!> (evt-tag e) :on-off not))}
      {:name :rgx-or-and
       :on-off (cI true)})
    (label {:for :rgx-or-and}
      "allow or/and")))

(defn make-regex-options []
  (div
    (div {:style (merge util/hz-flex-wrap-centered
                   {:padding-right "12px"
                    :margin        "4px 0 9px 30px"})}
      (mk-regex-match-case)
      (mk-rgx-or-and)
      (span {:style   {:color  "white" :margin-left "24px"
                       :cursor "pointer"}
             :title   "Show/hide RegExp help"
             :onclick (fn [e]
                        (let [me (evt-tag e)]
                          (mswap!> me :helping not)))}
        {:name    :rgx-help-toggle
         :helping (cI false)}
        "help"))
    (utl/help-list regex-help :rgx-help-toggle)))



;function buildRgxTree(mx, e) {
;    mx.rgxRaw = e.target.value.trim()
;
;    if (mx.rgxRaw === '') {
;        mx.rgxTree = null // test
;    } else {
;        if (mx.history.indexOf( mx.rgxRaw) === -1) {
;            //clg('adding to rgx!!!!', mx.rgxRaw)
;            mx.history = mx.history.concat(mx.rgxRaw)
;        }
;        rebuildRgxTree(mx)
;    }
;}
;
;function rebuildRgxTrees( mx) {
;    ["titlergx", "listingrgx"].map( n => {
;        let rgmx = mx.fmUp(n);
;        if ( rgmx.rgxTree)
;            rebuildRgxTree(rgmx )
;    })
;}
;
;// new RegExp(search, 'g')
;
