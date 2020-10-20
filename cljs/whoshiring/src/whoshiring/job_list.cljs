(ns whoshiring.job-list
  (:require
    [tiltontec.cell.base :as cb]
    [tiltontec.cell.core
     :refer-macros [cF cF+ c-reset-next! cFonce cFn]
     :refer [cI c-reset! make-cell]]
    [tiltontec.model.core
     :refer-macros [with-par mdv! mx-par fmu]
     :refer [matrix mset! mget mswap! fget *par*] :as md]
    [mxweb.gen
     :refer [evt-mx]]
    [mxweb.gen-macro
     :refer-macros [img section header h1 input footer p a
                    pre code span i label ul li div button br]]
    [whoshiring.control-panel :as ctl]
    [whoshiring.job-memo-ui :as ua]
    [cljs.pprint :as pp]
    [whoshiring.ui-common :refer [target-val] :as utl]
    [whoshiring.job-memo :refer [job-memo] :as memo]
    [whoshiring.preferences
     :refer [pref pref! pref-swap!]]))

(defn node-to-hiccup [n]
  (case (.-nodeType n)
    1 (case (.-tagName n)
        "A" (a {:href (.-href n)}
              (.-textContent n))
        "P" (p (map node-to-hiccup
                 (array-seq (.-childNodes n))))
        "DIV" (div (map node-to-hiccup
                     (array-seq (.-childNodes n))))
        "PRE" (pre (map node-to-hiccup
                     (array-seq (.-childNodes n))))
        "CODE" (code (map node-to-hiccup
                     (array-seq (.-childNodes n))))
        "I" (i (map node-to-hiccup
                     (array-seq (.-childNodes n))))
        (p (str "Unexpected tag = " (.-tagName n) :n (.-textContent n))))
    3 (span (.-textContent n))
    (p (str "Unexpected n type = " (.-nodeType n)))))

(defn deets? [me]
  (mget (fmu :job-listing) :expanded))

(defn job-header [job]
  (div {:style   {:cursor  "pointer"
                  :display "flex"}
        :onclick #(mswap! (md/mxu-find-name (evt-mx %) :job-listing)
                    :expanded not)}
    (span {:style (cF (str "color:red;max-height:16px;margin-right:9px; display:"
                        (if (or (deets? me)
                              (zero? (memo/job-memo job :stars)))
                          "none" "block")))}
      (utl/unesc "&#x2b51"))
    (div (map node-to-hiccup
           (:title-seg job)))))

(defn jump-to-hn [hn-id]
  (.open js/window (pp/cl-format nil "https://news.ycombinator.com/item?id=~a" hn-id) "_blank"))

(defn job-details [job]
  (div {:class (cF (if (deets? me) "slideIn" "slideOut"))
        :style (cF {:margin     "6px"
                    :background "#fff"
                    :display    (if (deets? me) "block" "none")})}
    (ua/user-annotations job)
    (div {:style         {:margin   "6px"
                          :overflow "auto"}
          :ondblclick #(jump-to-hn (:hn-id job))}
      (when (deets? me)
        (map node-to-hiccup
          (remove (fn [n] (= "reply" (.-className n)))
            (:body job)))))))

(defn job-list-item [job-no job]
  (li {:class "jobli"
       :style (cF {:cursor  "pointer"
                   :display (if (and (memo/job-memo job :excluded)
                                     (not (pref :show-excluded-jobs))
                                     ; if they have asked to see excluded items, show regardless
                                     (not (pref :excluded)))
                              "none" "block")})}
    {:name     :job-listing
     :expanded (cI true)
     :job      job}
    (job-header job)
    (job-details job)))

;; --- filtering ---------------------------------------------

(defn regex-tree-match [rgx-tree text]
  (some (fn [ands]
          (when ands
            (every? (fn [andx]
                      (when andx
                        (boolean (re-find andx text))))
              ands))) rgx-tree))

(defn job-list-filter [me jobs]
  (let [remote (pref :remote)
        onsite (pref :onsite)
        interns (pref :interns)
        visa (pref :visa)
        excluded (pref :excluded)
        starred (pref :starred)
        applied (pref :applied)
        noted (pref :noted)
        title-regex (mget (fmu "titlergx") :regex-tree)
        listing-regex (mget (fmu "listingrgx") :regex-tree)]
    (filter (fn [job]
              (and
                (or (not remote) (:remote job))
                (or (not onsite) (:onsite job))
                (or (not visa) (:visa job))
                (or (not interns) (:intern job))
                (or (not excluded) (job-memo job :excluded))
                (or (not starred) (pos? (job-memo job :stars)))
                (or (not applied) (job-memo job :applied))
                (or (not noted) (job-memo job :notes))
                (or (not (seq title-regex))
                  (regex-tree-match title-regex
                    (job :title-search)))
                (or (not (seq listing-regex))
                  (regex-tree-match listing-regex
                    (job :title-search))
                  (regex-tree-match listing-regex
                    (job :body-search)))))
      jobs)))

;;; --- sorting ---------------------------------------------

(defn job-list-sort [me jobs]
  (cond
    (seq (pref :job-sort))
    (let [{:keys [key-fn comp-fn order] :as spec}
          (some (fn [full]
                  (when (= (:title full)
                          (:title (pref :job-sort)))
                    (merge full (pref :job-sort))))
            ctl/job-sorts)]
      (sort (fn [j k]
              (if comp-fn
                (comp-fn order j k)
                (* order (if (< (key-fn j) (key-fn k)) -1 1))))
        (map identity jobs)))
    :default (map identity jobs)))

;;; --- the list ----------------------------------------------

(defn job-list []
  (ul {:style {:list-style-type "none"
               :background      "#eee"
               ;; these next defeat gratuitous default styling of ULs by browser
               :padding         0
               :margin          0}}
    {:name          :job-list
     :selected-jobs (cF (job-list-filter me
                          (mget (fmu :job-loader) :jobs)))
     :sorted-jobs   (cF (job-list-sort me
                          (mget me :selected-jobs)))
     :kid-factory   job-list-item
     :kid-key       #(mget % :job)
     :kid-values    (cF (take (or (pref :max-jobs-to-show) 999999)
                          (mget me :sorted-jobs)))}
    (md/kid-values-kids me cache)))








