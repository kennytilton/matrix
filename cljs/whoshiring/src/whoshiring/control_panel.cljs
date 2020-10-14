(ns whoshiring.control-panel
  (:require [tiltontec.model.core :as md]
            [clojure.string :as str]
            [tiltontec.cell.base :refer [unbound]]
            [tiltontec.cell.integrity :refer-macros [with-cc]]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI c-reset! make-cell]]
            [tiltontec.model.core
             :refer-macros [with-par mdv! mx-par fmu]
             :refer [matrix mset! mget mswap!] :as md]
            [mxweb.gen
             :refer [evt-mx dom-tag]]
            [mxweb.gen-macro
             :refer-macros [section header i h1 input footer p a span label ul li div button]]
            [whoshiring.regex-search :as regex]
            [whoshiring.ui-common :as utl]
            [whoshiring.job-memo :refer [job-memo] :as memo]
            [whoshiring.preferences
             :refer [pref pref! pref-swap!]]))

;;; --- filtering -------------------------------------------

(defn make-job-select [key [select-key help]]
  (div {:style "color: white; min-width:96px; display:flex; align-items:center"}
      (input {:id       select-key
              :title    help
              :class    (str key "-jSelect")
              :style    "background:#eee"
              :type     "checkbox"
              :checked  (cF (pref select-key))
              :onchange #(pref-swap! select-key not)}
        {:hidden-name (str/capitalize (name select-key))})
      (label {:for   select-key
              :title help}
        (name select-key))))

(defn make-job-selects-ex [key lbl j-major-selects]
  (div {:style (merge utl/hz-flex-wrap {:margin "8px 0 8px 24px"})}
    (map (fn [major]
           (div {:style "display:flex; flex:nowrap;"}
             (map (fn [info]
                    (make-job-select key info))
               major)))
      j-major-selects)))

(def title-selects
  [[[:remote "Does regex search of title for remote jobs"]
    [:onsite "Does regex search of title for on-site jobs"]]
   [[:interns "Does regex search of title for internships"]
    [:visa "Does regex search of title for Visa sponsors"]]])

(def user-selects
  [[[:starred "Show only jobs you have rated with stars"]
    [:noted "Show only jobs on which you have made a note"]]
   [[:applied "Show only jobs you have marked as applied to"]
    [:excluded "Show jobs you exluded from view"]]])

(defn make-title-selects []
  (make-job-selects-ex "title" "Title selects" title-selects))

(defn make-user-selects []
  (make-job-selects-ex "user" "User selects" user-selects))

;;; --- sorting ---------------------------------------------

(defn job-company-key [j]
  (or (:company j) ""))

(defn job-stars-enrich [job]
  (assoc job :stars 0))

(defn job-stars-compare [dir j k]
  ;; force un-starred to end regardless of sort order
  ;; order ties by ascending hn-id
  (let [j-stars (:stars j)
        k-stars (:stars k)]
    (if (pos? j-stars)
      (if (pos? k-stars)
        (* dir (if (< j-stars k-stars)
                 -1
                 (if (> j-stars k-stars)
                   1
                   (if (< (:hn-d j) (:hn-id k)) -1 1))))
        -1)
      (if (pos? k-stars)
        1
        (if (< (:hn-d j) (:hn-id k)) -1 1)))))

(def job-sorts [{:title "Creation" :key-fn :hn-id :order -1}
                {:title "Stars" :comp-fn job-stars-compare :order -1 :prep-fn job-stars-enrich}
                {:title "Company" :key-fn job-company-key :order 1}])

;;; --- job sort bar -------------------------------------------------------

(defn sort-bar-option [sort-control jsort]
  (button {:class    "sortOption"
           :style    (cF {:color (if (mget me :selected)
                                   "blue" "#222")})
           :selected (cF (= (:title jsort)
                           (:title (mget sort-control :job-sort))))
           :onclick  (fn [e]
                       (let [me (evt-mx e)]
                        (if (mget me :selected)
                          (mswap! sort-control :job-sort
                            update :order #(* -1 %))
                          (mset! sort-control :job-sort jsort))))
           :content  (cF (str (:title jsort) " "
                           (when (mget me :selected)
                             (if (= (:order (mget sort-control :job-sort)) -1)
                               (utl/unesc "&#x2798")
                               (utl/unesc "&#x279a")))))}))

(defn sort-control-bar []
  (div {:style {:padding 0
                :margin  "15px 0 0 24px"
                :display "flex"}}
    {:name     :sort-by
     :job-sort (cI nil)}
    (span {:style {:margin-right "6px"}} "Sort by:")
    (let [ctl me]
      (ul {:style (merge utl/hz-flex-wrap
                    {:list-style "none"
                     :padding    0
                     :margin     0})}
        (for [jsort job-sorts]
          (li (sort-bar-option ctl jsort)))))))

(defn job-count []
  (span {:style   "font-size:1em;margin-right:12px"
         :content (cF (str "Jobs: "
                        (count (mget (fmu :job-list) :selected-jobs))))}))

(defn excluded-toggle []
  (span {:style   (cF (str "padding-bottom:4px;cursor:pointer;display:flex;align-items:center;font-size:1em;"
                        "visibility:" (if (pos? (mget me :excluded-ct)) "visible;" "hidden;")
                        "border:" (if (pref :show-excluded-jobs) "thin solid red;" "none;")))
         :content (cF (str "&#x20E0;: " (mget me :excluded-ct)))
         :onclick #(pref-swap! :show-excluded-jobs not)
         :title   "Show/hide items you have excluded"}
    {:name        :show-excluded-jobs
     :on-off      (cF (pref :show-excluded-jobs))
     :excluded-ct (cF (count (filter (fn [j] (memo/job-memo j :excluded))
                               (mget (fmu :job-list) :selected-jobs))))}))

(def result-limit-default 42)

(defn result-limit []
  (div {:style (merge utl/hz-flex-wrap-centered
                 {:margin-left  "18px"
                  :margin-right "6px"})}
    (span "Show: ")
    (input {:value    (cF (mget me :limit))
            :style    "font-size:1em;max-width:48px;margin-left:6px;margin-right:6px"
            :onchange (fn [e]
                        (when-let [lim (try
                                         (js/parseInt (utl/target-val e) 10)
                                         (catch :default e nil))]
                          (when-not (js/Number.isNaN lim)
                            (mset! (evt-mx e) :limit lim))))}
      {:name  :result-limit
       :limit (cI result-limit-default)})))

(defn job-expansion-control []
  (button {:style   {:font-size "1em"
                     :min-width "96px"}
           :onclick (fn [e]
                      (mswap! (evt-mx e) :expanded not))
           :content (cF (if (mget me :expanded)
                          "Collapse all" "Expand all"))}
    {:expanded (cI false
                 :obs (fn [_ me newv oldv]
                        (when-not (= oldv unbound)
                          (let [jl (fmu :job-list)]
                            (with-cc :expansion
                              (doseq [jli (mget jl :kids)]
                                (mset! jli :expanded newv)))))))}))

(defn job-listing-control-bar []
  (div {
        :style (merge utl/hz-flex-wrap-centered
                 {:margin          "12px 0 0 0px"
                  :font-size       "1em"
                  :padding         "4px"
                  :border-style    "groove"
                  :border-color    "khaki"
                  :border-width    "2px"
                  :backgraound     "PAPAYAWHIP"
                  :justify-content "space-between"
                  :align-items     "center"})}
    (div {:style (merge utl/hz-flex-wrap-centered
                   {:flex-wrap "wrap"})}
      (job-count)
      (excluded-toggle)
      (result-limit)
      (job-expansion-control))))

;;; --- the control panel -------------------------------------

(defn control-panel []
  (div {:style "background-color:#ffb57d"}
    (utl/open-shut-case "os-filters" "Filters" true
      (i {:style   "margin-left:12px"
          :content (cF (if (mdv! :os-filters-toggle :on-off)
                         ""
                         (let [titles (array-seq (.getElementsByClassName js/document "title-jSelect"))
                               users (array-seq (.getElementsByClassName js/document "user-jSelect"))]
                           (str/join " " (remove nil?
                                           (map (fn [dom]
                                                  (when (.-checked dom)
                                                    (mget (dom-tag dom) :hidden-name)))
                                             (concat titles users)))))))})
      make-title-selects
      make-user-selects)
    (utl/open-case "rgx-filters" "Search"
      regex/make-title-regex
      regex/make-full-regex
      regex/make-regex-options)
    (sort-control-bar)
    (job-listing-control-bar)))