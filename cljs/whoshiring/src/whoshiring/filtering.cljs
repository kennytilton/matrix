(ns whoshiring.filtering
  (:require [whoshiring.ui-common :as utl]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI c-reset! make-cell]]
            [tiltontec.model.core
             :refer-macros [with-par]
             :refer [matrix <mget mset!> mswap!>] :as md]
            [mxweb.gen
             :refer-macros [section header i h1 input footer p a span label ul li div button]
             :refer [evt-tag dom-tag]]
            [whoshiring.job-memo :refer [<job-memo]]))

(defn make-job-select [key [tag help]]
  (let [input-id (str tag "ID")]
    (div {:style "color: white; min-width:96px; display:flex; align-items:center"}
      (input {:id      input-id
              :title   help
              :class   (str key "-jSelect")
              :style   "background:#eee"
              :type    "checkbox"
              :checked (cF (<mget me :on-off))
              :onchange (fn [e]
                         (mswap!> (evt-tag e) :on-off not))}
        {:name   input-id
         :on-off (cI false)})
      (label {:for input-id
              :title help}
        tag))))

(defn make-job-selects-ex [key lbl j-major-selects]
  (div {:style (merge utl/hz-flex-wrap {:margin "8px 0 8px 24px"})}
    (map (fn [major]
           (div {:style "display:flex; flex:nowrap;"}
             (map (fn [info]
                    (make-job-select key info))
               major)))
      j-major-selects)))

(def title-selects
  [[["REMOTE" "Does regex search of title for remote jobs"]
    ["ONSITE" "Does regex search of title for on-site jobs"]]
   [["INTERNS" "Does regex search of title for internships"]
    ["VISA" "Does regex search of title for Visa sponsors"]]])

(def user-selects
  [[["Starred" "Show only jobs you have rated with stars"]
    ["Noted" "Show only jobs on which you have made a note"]]
   [["Applied" "Show only jobs you have marked as applied to"]
    ["Excluded" "Show jobs you exluded from view"]]])

(defn make-title-selects []
  (make-job-selects-ex "title" "Title selects" title-selects))

(defn make-user-selects []
  (make-job-selects-ex "user" "User selects" user-selects))

(defn regex-tree-match [rgx-tree text]
  (prn :titty text)
  (prn :pansy rgx-tree)
  (some (fn [ands]
          (prn :nancy ands)
          (when ands
            (every? (fn [andx]
                      (prn :bottom andx)
                      (when andx
                        (boolean (re-find andx text))))
              ands))) rgx-tree))

(defn job-list-filter [me jobs]
  (let [fup? (fn [name]
               (<mget (md/mxu-find-name me (str name "ID")) :on-off))
        remote (fup? "REMOTE")
        onsite (fup? "ONSITE")
        interns (fup? "INTERNS")
        visa (fup? "VISA")
        excluded (fup? "Excluded")
        starred (fup? "Starred")
        applied (fup? "Applied")
        noted (fup? "Noted")
        title-regex (<mget (md/mxu-find-name me "titlergx") :regex-tree)
        listing-regex (<mget (md/mxu-find-name me "listingrgx") :regex-tree)]

    (filter (fn [job]
              ;; (prn :applied applied (memo/<job-memo job :applied))
              (and
                (or (not remote) (:remote job))
                (or (not onsite) (:onsite job))
                (or (not visa) (:visa job))
                (or (not interns) (:intern job))
                (or (not excluded) (<job-memo job :excluded))
                (or (not starred) (pos? (<job-memo job :stars)))
                (or (not applied) (<job-memo job :applied))
                (or (not noted) (<job-memo job :notes))
                (or (not (seq title-regex))
                  (regex-tree-match title-regex
                    (job :title-search)))
                (or (not (seq listing-regex))
                  (regex-tree-match listing-regex
                    (job :title-search))
                  (regex-tree-match listing-regex
                    (job :body-search)))))
      jobs)))
