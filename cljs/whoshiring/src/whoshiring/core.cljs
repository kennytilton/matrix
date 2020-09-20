(ns ^:figwheel-hooks whoshiring.core
  (:require
    [goog.dom :as gdom]
    [tiltontec.cell.core
     :refer-macros [cF cF+ c-reset-next! cFonce cFn]
     :refer [cI c-reset! make-cell]]
    [tiltontec.model.core
     :refer-macros [with-par mdv!]
     :refer [matrix mswap!> <mget] :as md]
    [mxweb.gen
     :refer-macros [section header h1 input footer p a span label ul li div button br]
     :refer [dom-tag evt-tag]]
    [mxweb.html :refer [tag-dom-create *mxweb-trace*]]

    [whoshiring.ui-common :as utl]
    ;[whoshiring.sorting :as sort]
    ;[whoshiring.month-loader :as mld]
    [whoshiring.job-loader :refer [pick-a-month job-listing-loader]]
    [whoshiring.control-panel :refer [control-panel]]
    [whoshiring.job-list :refer [job-list]]
    ;[whoshiring.memo :as unt]
    ;[whoshiring.job-list-control-bar :as jlcb]
    ;[whoshiring.regex-ui :as rgxui]
    ;[whoshiring.filtering :as flt]
    [taoensso.tufte :as tufte]))

(println "This text is printed from src/whoshiring/core.cljs. Go ahead and edit it and see reloading in action.")

(enable-console-print!)

(tufte/add-basic-println-handler! {})

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
      (div {:content (cF (if (<mget me :helping)
                             "hide" "Pro Tips"))
            :class   "about"
            :title   "Usage hints, and credit where due."
            :onclick #(let [me (evt-tag %)]
                        (mswap!> me :helping not))}
        {:name :app-help
         :helping (cI false)})
      (div {:class "headermain"}
        (span {:class "askhn"} "Ask HN:")
        (span {:class "who"} "Who Is Hiring?")))
    (utl/help-list app-help-entry :app-help)))

;;; --- landing page ------------------------------------

(defn landing-page []
  (div {}
    (app-banner)
    (div {:style "margin:0px; background:#ffb57d"}
      (pick-a-month)
      (job-listing-loader)
      (control-panel)
      (job-list))))

(defn matrix-build! []
  ;;; In general, a matrix is a reactive structure that generates (through side
  ;;; effects!) something else of practical use. In this case that something else
  ;;; is a Do List app. The matrix nodes are Tag instances which map isomorphically
  ;;; to DOM nodes; the matrix creates a web page in its own image.
  ;;;
  ;;; matrix-build! is the unofficial "main" of my matrix demo: my real entry point
  ;;; calls <some namespace>/matrix-build! and I just change <some namespace> to
  ;;; whichever demo namespace I am hacking on at the time. There is nothing obligatory
  ;;; about any of this.
  ;;;
  ;;; matrix-build! is responsible for building the initial matrix. Once built, app
  ;;; functionality arises from matrix objects changing in reaction to input Cell
  ;;; "writes" made by event handlers, triggering observers which manifest those
  ;;; changes usefully, in rxtrak either by updating the DOM or writing to localStorage.

  #_(do                                                     ;; if needed
      (io-clear-storage))

  (reset! matrix (md/make ::whoApp
                   ;; load all to-dos into a depend-able list....
                   ;;:rxs (rxtrak.rx/rx-list)

                   ;; build the matrix dom once. From here on, all DOM changes are
                   ;; made incrementally by Tag library observers...
                   :mx-dom (cFonce (with-par me
                                     [(landing-page)])))))

(let [root (gdom/getElement "tagroot")
      app-matrix (matrix-build!)
      mx-dom (<mget app-matrix :mx-dom)
      app-dom (tag-dom-create
                mx-dom)]
  (set! (.-innerHTML root) nil)
  (gdom/appendChild root app-dom)
  (when-let [route-starter (<mget app-matrix :router-starter)]
    (route-starter)))






