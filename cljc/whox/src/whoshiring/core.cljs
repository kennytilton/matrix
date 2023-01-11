(ns ^:figwheel-hooks whoshiring.core
  (:require
    [goog.dom :as gdom]
    [tiltontec.cell.core
     :refer-macros [cF cF+ c-reset-next! cFonce cFn]
     :refer [cI c-reset! make-cell]]
    [tiltontec.model.core
     :refer-macros [with-par mdv!]
     :refer [matrix mswap! mget] :as md]
    [mxweb.gen :refer [ evt-mx]]
    [mxweb.gen-macro :refer-macros [section header h1 input footer p a span label ul li div button br]]
    [mxweb.html :refer [tag-dom-create *mxweb-trace*]]
    [whoshiring.preferences :as up]
    [whoshiring.ui-common :as utl]
    [whoshiring.job-loader :refer [pick-a-month job-listing-loader]]
    [whoshiring.control-panel :refer [control-panel]]
    [whoshiring.job-list :refer [job-list]]
    [taoensso.tufte :as tufte]))

(enable-console-print!)

(tufte/add-basic-println-handler! {})

;;; --- app banner ------------------------------------------------------

(def app-help-entry
  ["Click any job header to show or hide the full listing."
   "Double-click job description to open listing on HN in new tab."
   "All filters are ANDed except as you direct within RegExp fields."
   "Your edits are kept in local storage, so stick to one browser."
   "Works off page scrapes taken often enough. E-mail <a href='mailto:kentilton@gmail.com'>Kenny</a> if they seem stopped."
   "RFEs welcome and can be raised <a href='https://github.com/kennytilton/whoshiring/issues'>here</a>. "
   "Built with <a href='https://github.com/kennytilton/matrix/blob/master/js/matrix/readme.md'>Matrix Inside</a>&trade;."
   "This page is not affiliated with Hacker News, but..."
   "..thanks to the HN crew for their assistance. All screw-ups remain <a href='https://news.ycombinator.com/user?id=kennytilton'>kennytilton</a>'s."
   "Graphic design by <a href='https://www.mloboscoart.com'>Michael Lobosco</a>."])

(defn app-banner []
  (div {:style {:background "PAPAYAWHIP"}}
    (header {}
      (div {:content (cF (if (mget up/prefs :app-help?)
                           "hide" "Pro Tips"))
            :class   "about"
            :title   "Usage hints, and credit where due."
            :onclick #(mswap! up/prefs :app-help? not)})
      (div {:class "headermain"}
        (span {:class "askhn"} "Ask HN:")
        (span {:class "who"} "Who Is Hiring")))
    (utl/help-list app-help-entry :app-help?)))

;;; --- landing page ------------------------------------

(defn landing-page []
  (div {}
    (app-banner)
    (div {:style "margin:0px; background:#ffb57d"}
      (pick-a-month)
      (job-listing-loader) ;; a hidden iframe used for parsing AskHN HTML
      (control-panel)
      (job-list))))

;;; --- app-specific "matrix" ------------------------------------------

(defn matrix-build! []
  (reset! matrix (md/make ::whosHiring
                   :mx-dom (cFonce (with-par me
                                     [(landing-page)])))))

(defn main []
  (println "[main]: loading")
  (let [root (gdom/getElement "tagroot") ;; must be defined in index.html
        app-matrix (matrix-build!)
        app-dom (tag-dom-create
                  (mget app-matrix :mx-dom))]
    (set! (.-innerHTML root) nil)
    (gdom/appendChild root app-dom)
    #_ (when-let [route-starter (mget app-matrix :router-starter)]
         (route-starter))))

(defn ^:dev/after-load after-load []
  (js/console.log "after load")
  (main))

(defn ^:dev/before-load before-load []
  (js/console.log "before load"))



