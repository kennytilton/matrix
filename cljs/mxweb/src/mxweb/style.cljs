(ns mxweb.style
  (:require
    [tiltontec.util.base :refer [type-cljc]]
    [tiltontec.util.core :refer [pln]]
    [tiltontec.cell.base :refer [md-ref? ia-type unbound]]
    [tiltontec.cell.observer :refer [observe observe-by-type]]
    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
    [tiltontec.model.core
     :refer-macros [the-kids mdv!]
     :refer [<mget fasc fm! make mset!> backdoor-reset!]
     :as md]
    [mxweb.base :refer [tag?]]
    [goog.dom.classlist :as classlist]
    [goog.style :as gstyle]
    [goog.dom :as dom]
    [cljs.pprint :as pp]
    [clojure.string :as str]))

;; todo move to utill or put all this in mxweb

(defn tag-dom [me]
  ;; This will return nil when 'me' is being awakened and rules
  ;; are firing for the first time, because 'me' has not yet
  ;; been installed in the actual DOM, so call this only
  ;; from event handlers and the like.
  (let [id (<mget me :id)]
    (assert id)
    (or (<mget me :dom-cache)
        (if-let [dom (dom/getElement (str id))]
          (backdoor-reset! me :dom-cache dom)
          (println :style-no-element id :found)))))

(defn make-css-inline [tag & stylings]
  (assert (tag? tag))
  (apply make
         :type :mxweb.css/css
         ;;:mxweb-id (when mxweb (:id @mxweb))
         :tag tag
         :css-keys (for [[k _] (partition 2 stylings)] k)
         stylings))

(defn style-string [s]
  (cond
    (string? s) s
    (nil? s) ""

    (map? s)
    (str/join ";"
      (for [[k v] s]
        (pp/cl-format nil "~a:~a" (name k) v)))

    (= :mxweb.css/css (ia-type s))
    (style-string (select-keys @s (:css-keys @s)))

    :default
    (do
      (println :ss-unknown s (type s))
      "")))

(defmethod observe-by-type [:mxweb.css/css] [slot me newv oldv _]
  (when (not= oldv unbound)
    (let [dom (tag-dom (:tag @me))]
      ;;(println :dom-hit-setStyle!!! slot newv oldv)
      (gstyle/setStyle dom (name slot) newv))))