(ns whoshiring.job-memo-ui
  (:require [whoshiring.ui-common :as utl]
            [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn-dbg]
             :refer [cI c-reset! make-cell]]
            [tiltontec.model.core
             :refer-macros [with-par mdv! mx-par fmu]
             :refer [matrix mset! mget mswap!] :as md]
            [tiltontec.mxweb.gen
             :refer [evt-mx]]
            [tiltontec.mxweb.gen-macro :refer-macros [textarea img section header h1 input footer p a span label ul li div button br]]
            [whoshiring.job-memo :refer [job-memo job-memo-set! job-memo-swap!]]))

;;; --- stars ------------------------------------------

(def MAX-STARS 3)

(defn job-stars [job]
  (div {:style utl/hz-flex-wrap-bottom}
    (for [sn (range MAX-STARS)]
      (span {:style   (cF {:cursor "pointer"
                           :color  (if (>= (job-memo job :stars) (inc sn))
                                     "red" "gray")})
             :onclick #(job-memo-set! job :stars
                         (if (= sn (dec (job-memo job :stars))) ;; comp against dec is off-by-one adj
                           ;; ie, if you click my maxth star you mean clear
                           0 (inc sn)))}
        (utl/unesc "&#x2605;")))))

(defn applied-toggle [job]
  (div {:style "display:flex; flex-wrap: wrap; align-items:center"}
    (input {:id      (str "applied?" (:hn-id job))
            :type    "checkbox"
            :style   "margin-left:18px"
            :checked (cF (or (job-memo job :applied) false))
            :onclick #(job-memo-swap! job :applied not)}
      {:name :applied})
    (label {:for   (str "applied?" (:hn-id job))
            :style (cF (str "color:" (if (job-memo job :applied) "red" "black")))}
      "Applied")))

(defn note-toggle [job]
  (span {:style   (cF (str "margin-left:18px; cursor:pointer;color:"
                        (if (job-memo job :notes) "cyan" "#000")))
         :title   "Show/hide editor for your own notes"
         :onclick #(mswap! (evt-mx %) :editing not)}
    {:name    :note-toggle
     :editing (cFn-dbg (pos? (count (job-memo job :notes))))}
    "Notes"))

(defn exclude-job [job]
  (span {:content "&#x20E0;"
         :style   (cF (str "margin:4px 4px 8px 0;font-size:1em;"
                        (if (job-memo job :excluded)
                          "color:red;font-weight:bolder" "black")))
         :onclick #(job-memo-swap! job :excluded not)}))

(defn note-editor [job]
  (letfn [(editing? [me]
            (mget (fmu :note-toggle) :editing))]
    (textarea {:class       (cF (if (editing? me)
                                  "slideIn" "slideOut"))
               :style       (cF (str "padding:8px;margin-left:12px;margin-right:12px;"
                                  "display:" (if (editing? me) "flex" "none")))
               :placeholder "Your notes here!"
               :onchange    #(job-memo-set! job :notes (utl/target-val %))}
      (or (job-memo job :notes) ""))))

(defn user-annotations [job]
  (div {:style "display:flex; flex-direction: column"}
    (div {:class "userAnnotations"}
      (job-stars job)
      (applied-toggle job)
      (note-toggle job)
      (exclude-job job))
    (note-editor job)))
