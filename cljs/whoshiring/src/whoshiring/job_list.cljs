(ns whoshiring.job-list
  (:require
    [tiltontec.cell.base :as cb]
    [tiltontec.cell.core
     :refer-macros [cF cF+ c-reset-next! cFonce cFn]
     :refer [cI c-reset! make-cell]]
    [tiltontec.model.core
     :refer-macros [with-par mdv! mx-par]
     :refer [matrix mset!> <mget mswap!> fget *par*] :as md]
    [mxweb.gen
     :refer-macros [section header i h1 input footer p a span label ul li div button]
     :refer [evt-tag dom-tag]]
    [whoshiring.filtering :as flt]
    [whoshiring.user-annotations :as ua]
    [goog.string :as gs]
    [cljs.pprint :as pp]
    [whoshiring.ui-common :refer [target-val] :as utl]
    [whoshiring.job-loader :as loader]
    [whoshiring.job-memo :as memo]))

(defn node-to-hiccup [n]
  (case (.-nodeType n)
    1 (case (.-tagName n)
        "A" (a {:href (.-href n)}
              (.-textContent n))
        "P" (p (map node-to-hiccup
                 (array-seq (.-childNodes n))))
        "DIV" (div (map node-to-hiccup
                     (array-seq (.-childNodes n))))
        (p (str "Unexpected tag = " (.-tagName n))))
    3 (span (.-textContent n))
    (p (str "Unexpected n type = " (.-nodeType n)))))

(defn deets? [me]
  (<mget (md/mxu-find-name me :job-listing) :expanded))

(defn job-header [job]
  (div {:style   {:cursor  "pointer"
                  :display "flex"}
        :onclick (fn [e]
                   (mswap!> (md/mxu-find-name (evt-tag e) :job-listing)
                     :expanded not))}
    (span {:style (cF (str "color:red;max-height:16px;margin-right:9px; display:"
                          (if (or (deets? me)
                                (zero? (memo/<job-memo job :stars)))
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
          :ondoubleclick #(jump-to-hn (:hn-id job))}
      (when (deets? me)
        (map node-to-hiccup
          (remove (fn [n] (= "reply" (.-className n)))
            (:body job)))))))

(defn job-list-item [job-no job]
  (li {:class "jobli"
       :style (cF {:cursor  "pointer"
                   :display (if (and (memo/<job-memo job :excluded)
                                     (not (<mget (md/mxu-find-name me :show-excluded-jobs) :on-off))
                                     ; if they have asked to see excluded items, show regardless
                                     (not (<mget (md/mxu-find-name me "ExcludedID") :on-off)))
                              "none" "block")})}
    {:name :job-listing
     :expanded (cI false)
     :job  job}
    (job-header job)
    (job-details job)))

(defn job-list-sort [me jobs]
  (let [{:keys [key-fn comp-fn order prep-fn] :as spec}
        (<mget (md/mxu-find-name me :sort-by) :job-sort)]
    (cond
      spec (sort (fn [j k]
                   (if comp-fn
                     (comp-fn order j k)
                     (* order (if (< (key-fn j) (key-fn k)) -1 1))))
             (map (or prep-fn identity) jobs))
      :default (map identity jobs))))

(defn job-list []
  (ul {:style {:list-style-type "none"
                 :background      "#eee"
                 ;; these next defeat gratuitous default styling of ULs by browser
                 :padding         0
                 :margin          0}}
      {:name          :job-list
       :selected-jobs (cF (let [raw-jobs (<mget (md/mxu-find-name me :job-loader) :jobs)
                                sel-jobs (flt/job-list-filter me raw-jobs)]
                            sel-jobs))
       :sorted-jobs   (cF (job-list-sort me
                            (<mget me :selected-jobs)))
       :kid-factory   job-list-item
       :kid-key       #(<mget % :job)
       :kid-values    (cF (take (or (<mget (md/mxu-find-name me :result-limit) :limit) 999999)
                            (<mget me :sorted-jobs)))}
      (md/kid-values-kids me cache)))








