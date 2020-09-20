(ns whoshiring.job-loader
  (:require [clojure.walk :as walk]
            [cljs.pprint :as pp]
            [whoshiring.ui-common :as utl]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn]
             :refer [cI c-reset! make-cell]]
            [tiltontec.cell.integrity :refer-macros [with-cc]]
            [tiltontec.model.core
             :refer-macros [with-par mdv! mx-par]
             :refer [fmo matrix mset!> <mget mswap!>] :as md]
            [mxweb.html
             :refer [io-read io-upsert io-clear-storage
                     tag-dom-create
                     dom-tag tagfo tag-dom
                     dom-has-class dom-ancestor-by-tag]
             :as mxweb]
            [mxweb.gen
             :refer-macros [section select option progress header
                            iframe i h1 input footer p a span label ul li div button]
             :refer [evt-tag dom-tag]]
            [whoshiring.job-parse :as jp]
            [whoshiring.local-storage :as st]
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
  (select {:name     :search-mo
           :class    "searchMonth"
           :onchange (fn [e]
                       (let [me (evt-tag e)
                             pgr (md/mxu-find-name me :progress-bar)]
                         (mset!> pgr :value 0)
                         (mset!> pgr :maxN 0)
                         (mset!> pgr :seen #{})
                         ;; (mset!> pgr :hidden false))
                         (mset!> me :value (utl/target-val e))))}
    {:value (cI (:hnId (nth (gMonthlies-cljs) 0)))}
    (map #(let [{:keys [hnId desc]} %]
            (option {:value hnId} desc))
      (gMonthlies-cljs))))

(defn hn-month-link []
  ;; An HN icon <a> tag linking to the actual HN page.
  (utl/view-on-hn {:style {:margin-right "9px"}}
    (cF (pp/cl-format nil "https://news.ycombinator.com/item?id=~a"
          (mdv! :search-mo :value)))))

(defn month-load-progress-bar []
  (progress {:max    (cF (str (<mget me :maxN)))
             :hidden (cI false)                             ;; (cF (mdv! :search-mo :value))
             :value  (cI 0)}
    {:name :progress-bar
     :maxN (cI 0)
     :seen (cI #{})}))

(def PARSE_CHUNK_SIZE 10)                                   ;; hhack

(defn month-jobs-total []
  (span {:style   "color: #fcfcfc; margin: 0 12px 0 12px"
         :content (cF
                    (if (<mget (md/mxu-find-name me :job-loader) :fini)
                      (str "Total jobs: " (count (<mget (md/mxu-find-name me :job-loader) :jobs)))
                      (str "Parsing: " (* 1 PARSE_CHUNK_SIZE (<mget (md/mxu-find-name me :progress-bar) :value)))))}))

;; --- pick-a-month itself ----------------------------------

(defn pick-a-month []
  (div {:class "pickAMonth"}
    (month-selector)
    (div {:style utl/hz-flex-wrap-centered}
      (hn-month-link)
      (month-jobs-total)
      (month-load-progress-bar))))

;;; ----   job-listing-loader -----------------------------


(def public-res "/scrapes/~a/~a.html")

(defn month-page-urls
  "Compute a vector of string URLs to be scraped, given month info
  hard-coded in index.html. Look for a script tag defining gMonthlies."
  [month-hn-id]

  (when month-hn-id
    (if-let [mo-def (get-monthly-def month-hn-id)]          ;; hard-coded table in index.html
      (map (fn [pg-offset]
             ;; files are numbered off-by-one to match the page param on HN
             (pp/cl-format nil public-res month-hn-id (inc pg-offset)))
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
    (letfn [(chunker [offset]
              ;; todo cljourify
              (let [jct (min (- total offset) chunk-size)]
                (if (pos? jct)
                  (do
                    (dotimes [jn jct]
                      (let [dom (nth listings (+ offset jn))]
                        (when-not (some #{(.-id dom)} (<mget progress-bar :seen))
                          (mswap!> progress-bar :seen conj (.-id dom))
                          (let [spec (jp/job-parse loader dom)]
                            (when (:OK spec)
                              (swap! temp-jobs conj spec))))))
                    (mswap!> progress-bar :value inc)
                    (if (< (count @temp-jobs) PAGE_JOBS_MAX)
                      (js/requestAnimationFrame #(chunker (+ offset jct)))
                      (do
                        (mset!> loader :jobs @temp-jobs)
                        (mset!> loader :fini true)
                        (frame-zap loader))))
                  (do
                    (mset!> loader :jobs @temp-jobs)
                    (mset!> loader :fini true)
                    (frame-zap loader)))))]
      (chunker 0))))

;;; --- getting aThings from pages ------------------------------------

(def ATHING-PARSE-MAX 1000)                                 ;; hhack 1000

(defn jobs-collect [loader pg-no]
  (if-let [cont-doc (.-contentDocument (tag-dom loader))]
    (let [hn-body (aget (.getElementsByTagName cont-doc "body") 0)]
      (if-let [a-things (seq (take ATHING-PARSE-MAX (prim-seq (.querySelectorAll hn-body ".athing"))))]
        (do (set! (.-innerHTML hn-body) "")                 ;; free up memory
            (let [pgr (md/mxu-find-name loader :progress-bar)]
              (mswap!> pgr :maxN +
                (Math/floor (/ (count a-things) PARSE_CHUNK_SIZE)))
              (parse-listings loader a-things PARSE_CHUNK_SIZE pgr pg-no)))
        (mset!> loader :fini true)))
    (mset!> loader :fini true)))

(defn make-page-loader [hn-id pg-no]
  (iframe {:src    (cF (pp/cl-format nil "/scrapes/~a/~a.html"
                         hn-id pg-no))
           :style  "display:none"
           :onload (fn [e]
                     (jobs-collect (evt-tag e) pg-no))}
    {:month-hn-id hn-id
     :jobs        (cI nil)
     :fini        (cI false)
     :pg-no       pg-no}))

(defn job-listing-loader []
  (div {:style "visibility:collapsed;"}
    {:name  :job-loader
     :fini  (cF+ [:obs (fn [slot me fini?]
                         (when fini?
                           (with-cc :hide-prgbar
                             (mset!> (md/mxu-find-name me :progress-bar)
                               :hidden true))))]
              (every? (fn [ldr] (<mget ldr :fini))
                (<mget me :kids)))
     :jobs  (cF (when (<mget me :fini)
                  (apply concat
                    (map (fn [k] (<mget k :jobs))
                      (<mget me :kids)))))
     :memos (cF (st/io-get-wild (st/askwho-ls-key (<mget (md/mxu-find-name me :search-mo) :value))
                  (fn [raw-obj]
                    (let [json-obj (st/io-read-json raw-obj)]
                      (memo/load-job-memo json-obj)))))}
    (let [hn-id (<mget (md/mxu-find-name me :search-mo) :value)
          mo-def (get-monthly-def hn-id)
          pg-ct (:pgCount mo-def)]                          ;; hhack
      (map (fn [pg-no]
             (make-page-loader hn-id (inc pg-no)))
        (range pg-ct)))))

