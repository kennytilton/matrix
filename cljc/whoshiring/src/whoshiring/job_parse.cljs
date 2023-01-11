(ns whoshiring.job-parse
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [tiltontec.model.core :refer [mget] :as md]
            [whoshiring.job-memo :as memo]))

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

  (let [cn (.-className dom)
        dbg false #_(str/includes? (.-textContent dom) "Glide")]

    (when (has-class? dom #{"c5a" "cae" "c00" "c9c" "cdd" "c73" "c88"})
      (when-let [replies (.getElementsByClassName dom "reply")]
        (map (fn [r] (.remove r)) (prim-seq replies)))

      (swap! spec assoc :body [])                           ;; init

      (when dbg
        (prn :BAM!!!-five (.-className dom) (.-textContent dom)))

      (let [st (atom {:in-header?       true
                      :bar-ct           0
                      :header-has-link? false
                      :title-seg        []})
            child (.-childNodes dom)]

        (doseq [n (prim-seq child)]
          (cond
            (:in-header? @st)
            (if (and (= 1 (.-nodeType n))
                     (= "P" (.-nodeName n)))
              ;; ---- we have reached the end of the header. Process it. ----
              (let [htext (str/join " | "
                            (map #(.-textContent %) (:title-seg @st)))
                    hseg (remove str/blank? (map str/trim (str/split htext #"\|")))
                    hsmatch (fn [rx]
                              (not (nil? (some #(.match % rx) hseg))))]

                (swap! st assoc :in-header false)
                (swap! spec assoc :remote (and (hsmatch remoteOK)
                                               (not (hsmatch noremoteOK))))
                (swap! spec assoc :visa (and (hsmatch visaOK)
                                             (not (hsmatch novisaOK))))
                (swap! spec assoc :intern (and (hsmatch internOK)
                                               (not (hsmatch nointernOK))))
                (swap! spec assoc :onsite (hsmatch onsiteOK))

                (when (or (:header-has-link? @st)
                        (or (pos? (:bar-ct @st))
                          (:remote @spec) (:visa @spec) (:intern @spec) (:onsite @spec)))

                  (swap! spec assoc :OK true)
                  (swap! spec update-in [:body] conj n)
                  (when dbg (prn :company!!! (nth hseg 0) :hseg hseg))
                  (swap! spec assoc :company (nth hseg 0))
                  (swap! spec assoc :title-seg (:title-seg @st))
                  (swap! spec assoc :title-search htext)))
              ;; still in header...
              (do
                (swap! st update-in [:bar-ct] inc)
                (when (and (= 1 (.-nodeType n))
                           (= "A" (.-nodeName n)))
                  (swap! st assoc :header-has-link? true))
                (when dbg
                  (prn :bld-title-seg (.-nodeType n) (.-nodeName n) :n n))
                (swap! st update-in [:title-seg] conj n))
              )

            :default (swap! spec update-in [:body] conj n)))

        (when (:OK @spec)
          (swap! spec assoc :body-search
            (str/join "*4*2*"
              (map (fn [n] (.-textContent n)) (:body @spec)))))))

    ;; always fall through, but do not descend into replies
    (when (not= cn "reply")
      (doseq [child (prim-seq (.-children dom))]
        (job-parse-extend spec child)))))

;;; --- job parse ---------------------------------------

(defn job-parse
  "The top-level function that takes a dom node and
  tries to extract a job spec to drive the rest of
  the app. Note that no job results unless the parser
  marks :OK as true."
  ([loader dom]
   (job-parse loader dom (.-id dom)))

  ([loader dom hn-id]
   (let [spec (atom {:hn-id hn-id})]
     (doseq [child (prim-seq (.-children dom))]
       (job-parse-extend spec child))

     (when (:OK @spec)
       (assoc @spec
         :memo (let [mo-id (mget loader :month-hn-id)
                     job-id (:hn-id @spec)]
                 (or (get (mget (md/mx-par loader) :memos) (memo/job-memo-key mo-id job-id))
                   (memo/make-job-memo mo-id job-id))))))))