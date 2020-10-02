(ns whoshiring.job-parse
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [tiltontec.model.core :refer [mget] :as md]
            [whoshiring.job-memo :as memo]
            [whoshiring.local-storage :as st]))

(declare job-parse-extend)

(def dbg (atom true))

(defn job-parse
  "The top-level function that takes a dom node and
  tries to extract a job spec to drive the rest of
  the app. Note that no job results unless the parser
  marks :OK as true."
  [loader dom]
  (let [spec (atom {:hn-id (.-id dom)})]
    (doseq [child (prim-seq (.-children dom))]
      (job-parse-extend spec child))

    (when (:OK @spec)
      (assoc @spec
        :memo (let [mo-id (mget loader :month-hn-id)
                    job-id (:hn-id @spec)]
                (or (get (mget (md/mx-par loader) :memos) (memo/askwho-ls-key mo-id job-id))
                  (memo/make-job-memo mo-id job-id)))))))

;;; key regexs used to decide job attributes for search filters

(def internOK (js/RegExp. "internship|intern|interns" "i"))
(def nointernOK (js/RegExp. "no internship|no intern" "i"))
(def visaOK (js/RegExp. "visa|visas" "i"))
(def novisaOK (js/RegExp. "no visa|no visas" "i"))
(def onsiteOK (js/RegExp. "on.?site" "i"))
(def remoteOK (js/RegExp. "remote" "i"))
(def noremoteOK (js/RegExp. "no remote" "i"))

(defn has-class? [dom class-set]
  (when-let [raw-class (.-className dom)]
    (seq (set/intersection class-set
           (set (str/split raw-class #" "))))))

(defn job-parse-extend
  "A parsed job (a spec) begins as {:hn-id <HN id>} then
  gets extended as we recursively explore the .aThing. Note that
  not all aThings are jobs, so look for :ok being set"
  [spec dom]

  (let [cn (.-className dom)]
    (when (has-class? dom #{"c5a" "cae" "c00" "c9c" "cdd" "c73" "c88"})
      (when-let [rs (.getElementsByClassName dom "reply")]
        (map (fn [e] (.remove e)) (prim-seq rs)))
      (let [child (.-childNodes dom)
            c0 (aget child 0)]
        ;; pre-digest all nodes
        (swap! spec assoc :body [])                         ;; needed?
        (if (and (= 3 (.-nodeType c0))
                 (pos? (count (filter #{\|} (.-textContent c0)))))

          (let [s (atom {:in-header true
                         :title-seg []})]
            (doseq [n (prim-seq child)]
              (if (:in-header @s)
                (if (and (= 1 (.-nodeType n))
                         (= "P" (.-nodeName n)))
                  (do
                    (swap! s assoc :in-header false)
                    (swap! spec update-in [:body] conj n))
                  (swap! s update-in [:title-seg] conj n))
                (swap! spec update-in [:body] conj n)))

            (let [htext (str/join " | "
                          (map (fn [h] (.-textContent h)) (:title-seg @s)))
                  hseg (map str/trim (str/split htext #"\|"))
                  hsmatch (fn [rx]
                            (not (nil?
                                   (some (fn [h] (.match h rx)) hseg))))]
              (swap! spec assoc :OK true)

              (swap! spec assoc :company (nth hseg 0))
              (swap! spec assoc :title-seg (:title-seg @s))
              (swap! spec assoc :title-search htext)
              (swap! spec assoc :body-search
                (str/join "*4*2*"
                  (map (fn [n] (.-textContent n)) (:body @spec))))

              (swap! spec assoc :remote (and (hsmatch remoteOK)
                                             (not (hsmatch noremoteOK))))
              (swap! spec assoc :visa (and (hsmatch visaOK)
                                           (not (hsmatch novisaOK))))
              (swap! spec assoc :intern (and (hsmatch internOK)
                                             (not (hsmatch nointernOK))))
              (swap! spec assoc :onsite (hsmatch onsiteOK)))))))

    ;; always fall through, but do not descend into replies
    (when (not= cn "reply")
      (doseq [child (prim-seq (.-children dom))]
        (job-parse-extend spec child)))))