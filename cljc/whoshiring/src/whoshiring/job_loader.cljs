(ns whoshiring.job-loader
  (:require [clojure.walk :as walk]
            [cljs.pprint :as pp]
            [whoshiring.ui-common :as utl]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI]]
            [tiltontec.cell.integrity :refer-macros [with-cc]]
            [tiltontec.model.core
             :refer-macros [with-par mdv! mpar fmu]
             :refer [fmo matrix mset! mget mswap!] :as md]
            [tiltontec.web-mx.base :refer [tag? kw$ tag-dom]]
            [tiltontec.web-mx.html
             :refer [io-read io-upsert io-clear-storage
                      tagfo
                     dom-has-class dom-ancestor-by-tag]
             :as web-mx]

            [tiltontec.web-mx.api :refer [evt-md select tag-dom-create] :as g]
            [whoshiring.job-parse :as jp]
            [whoshiring.job-memo :as memo]))

(defn gMonthlies-cljs
  "The gMonthlies table of xx contents is defined in index.html for extensibility,
  then translated here to CLJS-ese, except hnId: remains camel-case :hnId."
  []
  (walk/keywordize-keys (js->clj js/gMonthlies)))

(defn get-monthly-def
  "Retrieve month info based on HN message Id"
  [hn-id]
  (some (fn [month]
          (when (= (:hnId month) hn-id)
            month))
    (gMonthlies-cljs)))

;;; --- pick-a-month components -----------------

(defn month-selector []
  (g/select {:name     :search-mo
             :class    "searchMonth"
             :onchange #(let [me (evt-md %)
                              pgr (fmu :progress-bar)]
                          (mset! pgr :value 0)
                          (mset! pgr :maxN 0)
                          (mset! pgr :seen #{})
                          (mset! pgr :hidden false)
                          (mset! me :value (utl/target-val %)))}
    {:value (cI (:hnId (nth (gMonthlies-cljs) 0)))}
    (map #(let [{:keys [hnId desc]} %]
            (g/option {}{:value hnId} desc))
      (gMonthlies-cljs))))

(defn hn-month-link []
  ;; An HN icon <a> tag linking to the actual HN page.
  (g/a {:href  (cF (pp/cl-format nil "https://news.ycombinator.com/item?id=~a"
                     (mdv! :search-mo :value)))
        :title "View on the HN site"
        :style {:margin-right "9px"}}
    (g/img {:src "dist/hn24.png"})))

(defn month-load-progress-bar []
  (g/progress {:max    (cF (str (mget me :maxN)))
               :hidden (cI false)
               :value  (cI 0)}
    {:name :progress-bar
     :maxN (cI 0)
     :seen (cI #{})}))

(def PARSE_CHUNK_SIZE 20)

(defn month-jobs-total []
  (g/span {:style   "color: #fcfcfc; margin: 0 12px 0 12px"
           :content (cF
                      (if (mget (fmu :job-loader) :fini)
                        (str "Total jobs: " (count (mget (fmu :job-loader) :jobs)))
                        (str "Parsing: " (* 1 PARSE_CHUNK_SIZE (mget (fmu :progress-bar) :value)))))}))

;; --- pick-a-month itself ----------------------------------

(defn pick-a-month []
  (g/div {:class "pickAMonth"}
    (month-selector)
    (g/div {:style utl/hz-flex-wrap-centered}
      (hn-month-link)
      (month-jobs-total)
      (month-load-progress-bar))))

;;; ----   job-listing-loader -----------------------------

(def scraped-html-path "/scrapes/~a/~a.html")

(defn month-page-urls
  "Compute a vector of string URLs to be scraped, given month info
  hard-coded in index.html. Look for a script tag defining gMonthlies."
  [month-hn-id]

  (when month-hn-id
    (if-let [mo-def (get-monthly-def month-hn-id)]          ;; hard-coded table in index.html
      (map (fn [pg-offset]
             ;; files are numbered off-by-one to match the page param on HN
             (pp/cl-format nil scraped-html-path month-hn-id (inc pg-offset)))
        (range (:pgCount mo-def)))
      (throw (js/Exception. (str "msg id " month-hn-id " not defined in gMonthlies table."))))))

;;; -------------------------------------------------

(defn frame-zap [md]
  (set! (.-innerHTML (tag-dom md)) ""))

(def PAGE_JOBS_MAX 1000)                                    ;; hhack

(defn parse-listings [loader listings chunk-size progress-bar pg-no]
  (let [total (count listings)
        tot-char 0
        temp-jobs (atom nil)]
    (letfn [(cleanup []
              (mset! loader :jobs @temp-jobs)
              (mset! loader :fini true)
              (frame-zap loader))
            (chunker [offset]
              (let [jct (min (- total offset) chunk-size)]
                (if (pos? jct)
                  (do
                    (dotimes [jn jct]
                      (let [dom (nth listings (+ offset jn))]
                        #_(when (some #{(.-id dom)} (mget progress-bar :seen))
                            (prn :dup-job pg-no (.-id dom)))
                        (when-not (some #{(.-id dom)} (mget progress-bar :seen))
                          (mswap! progress-bar :seen conj (.-id dom))
                          (let [spec (jp/job-parse loader dom)]
                            (when (:OK spec)
                              (swap! temp-jobs conj spec))))))
                    (mswap! progress-bar :value inc)
                    (if (< (count @temp-jobs) PAGE_JOBS_MAX)
                      (js/requestAnimationFrame #(chunker (+ offset jct)))
                      (cleanup)))
                  (cleanup))))]
      (chunker 0))))

;;; --- getting aThings from pages ------------------------------------

(def ATHING-PARSE-MAX 1000)                                 ;; hhack 1000

(defn jobs-collect [loader pg-no]
  (if-let [cont-doc (.-contentDocument (tag-dom loader))]
    (let [hn-body (aget (.getElementsByTagName cont-doc "body") 0)]
      (if-let [a-things (seq (take ATHING-PARSE-MAX (prim-seq (.querySelectorAll hn-body ".athing"))))]
        (do (set! (.-innerHTML hn-body) "")                 ;; free up memory
            ;; (prn :athings pg-no (count a-things))
            (let [pgr (md/mxu-find-name loader :progress-bar)]
              (mswap! pgr :maxN +
                (Math/floor (/ (count a-things) PARSE_CHUNK_SIZE)))
              (parse-listings loader a-things PARSE_CHUNK_SIZE pgr pg-no)))
        (mset! loader :fini true)))
    (mset! loader :fini true)))

(defn make-page-loader [hn-id pg-no]
  (g/iframe {:src    (cF (pp/cl-format nil "scrapes/~a/~a.html"
                           hn-id pg-no))
             :style  "display:none"
             :onload #(jobs-collect (evt-md %) pg-no)}
    {:month-hn-id hn-id
     :jobs        (cI nil)
     :fini        (cI false)
     :pg-no       pg-no}))


;
;function extraJobParse(md, jobName) {
;    md.jobs = null
;    if (md.dom.contentDocument) {
;        hnBody = md.dom.contentDocument.getElementsByTagName('body')[0];
;        let chunkSize = PARSE_CHUNK_SIZE
;            , listing = Array.prototype.slice.call(hnBody.querySelectorAll('.athing'));
;
;        if (listing.length > 0) {
;            listing[0].id = jobName // todo m/b
;            let spec = jobSpec(listing[0])
;
;            if (spec.OK) {
;                let hnId = spec.hnId;
;
;                UNote.dict[hnId] = new UserNotes({hnId: hnId});
;
;                if (!UNote.dict[hnId]) {
;                    //clg('making Unote for hnId!!!!!!', hnId)
;                    UNote.dict[hnId] = new UserNotes({hnId: hnId});
;                }
;                md.jobs = [spec]
;            } else {
;                clg('extra not OK')
;            }
;        } else {
;            clg('no job!!!!!!!!!')
;
;        }
;    } else {
;        clg('no content!!!!!!!!!')
;    }
;}

(defn extra-job-parse [loader job-name]
  (if-let [cont-doc (.-contentDocument (tag-dom loader))]
    (let [hn-body (aget (.getElementsByTagName cont-doc "body") 0)
          a-things (prim-seq (.querySelectorAll hn-body ".athing"))]
      (if (seq a-things)
        (do (set! (.-innerHTML hn-body) "")
            (let [spec (jp/job-parse loader (first a-things) "triplebytefull")]
              (mset! loader :fini true)
              (mset! loader :jobs [spec])))
        (mset! loader :fini true)))
    (mset! loader :fini true)))

(defn make-extra-job-loader [job-name]
  (g/iframe {:src    (cF (pp/cl-format nil "dist/extras/~a.html"
                           job-name))
             :style  "display:none"
             :onload #(extra-job-parse (evt-md %) job-name)}
    {:name (str job-name "loader")
     :jobs        (cI nil)
     :fini        (cI false)}))

(defn job-listing-loader []
  (g/div {:style "visibility:collapsed;"}
    {:name  :job-loader
     :fini  (cF+ [:watch (fn [_ me fini?]
                         (when fini?
                           (with-cc :hide-prgbar
                             (mset! (fmu :progress-bar)
                               :hidden true))))]
              (every? (fn [loader] (mget loader :fini))
                (mget me :kids)))
     :jobs  (cF (when (mget me :fini)
                  (apply concat
                    (map (fn [k] (mget k :jobs))
                      (mget me :kids)))))
     :memos (cF (memo/month-job-memos (mget (fmu :search-mo) :value)))}
    (let [hn-id (mget (fmu :search-mo) :value)
          mo-def (get-monthly-def hn-id)
          pg-ct (:pgCount mo-def)]
      (conj (map (fn [pg-no]
                   (make-page-loader hn-id (inc pg-no)))
              (range pg-ct))
        (make-extra-job-loader "triplebytefull")))))

