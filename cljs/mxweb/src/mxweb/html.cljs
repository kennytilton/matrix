(ns mxweb.html
  (:require
    [clojure.string :as str]
    [clojure.walk :refer [stringify-keys]]
    [cljs.pprint :as pp]
    [tiltontec.util.base :refer [type-cljc]]
    [tiltontec.util.core :refer [pln]]
    [tiltontec.cell.base :refer [md-ref? ia-type unbound]]
    [tiltontec.cell.observer :refer [observe observe-by-type]]
    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
    [tiltontec.model.core
     :refer-macros [the-kids mdv!]
     :refer [fget <mget fasc fm! make mset!> backdoor-reset!]
     :as md]

    [mxweb.style
     :refer [style-string] :as tagcss]

    [goog.dom :as dom]
    [goog.html.SafeHtml :as safe]
    [goog.dom.classlist :as classlist]
    [goog.html.sanitizer.HtmlSanitizer :as sanitizer]
    [goog.editor.focus :as focus]
    [goog.ui.Control :as control]
    [goog.dom.selection :as selection]
    [goog.dom.forms :as form]

    [taoensso.tufte :as tufte :refer-macros (defnp p profiled profile)]))

(def ^:dynamic *mxweb-trace* false)

(defn tagfo [me]
  (if (string? me)
    "string"
    (select-keys @me [:id :tag :class :name])))

(defn dom-has-class [dom class]
  (classlist/contains dom class))

(defn dom-ancestor-by-class [dom class]
  (dom/getAncestorByTagNameAndClass dom nil class))

(defn dom-ancestor-by-tag [dom tag]
  (dom/getAncestorByTagNameAndClass dom tag))

(declare tag-dom-create)

(defn map-less-nils [m]
  (apply dissoc m
         (for [[k v] m :when (nil? v)] k)))

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
          (println :html-no-element id :found)))))

(defn tag-attrs [mx]
  (let [beef (remove nil? (for [k (:attr-keys @mx)]
                            (when-let [v (<mget mx k)]
                              [(name k) (case k
                                          :style (tagcss/style-string v)
                                          :class (if (coll? v)
                                                   (str/join " " v)
                                                   v)
                                          v)])))]
    (apply js-obj
           (apply concat beef))))

(defn tag-dom-create
  ([me] (tag-dom-create me false))
  ([me dbg]
   (cond
     (string? me) (dom/safeHtmlToNode (sanitizer/sanitize me))
     (coll? me) (let [frag (.createDocumentFragment js/document)]
                  (doseq [tag me]
                    (when tag ;; tolerate nils
                      (dom/appendChild frag (tag-dom-create tag))))
                  frag)
     :default
     (do (when-let [dbg (or dbg *mxweb-trace*)]
           (pln :tag-dom-create dbg (tagfo me)))
         ;;(pln :domcre-attrs (:attr-keys @me) (mxweb-attrs me))
         (let [dom (apply dom/createDom (<mget me :tag)
                          (tag-attrs me)
                          (concat                           ;; to-do: need this?
                            (map #(tag-dom-create % dbg) (<mget me :kids))
                            (when-let [c (<mget me :content)]
                              [(tag-dom-create c)])))]

           dom)))))

(def +true-html+ {::type "type"})

(defn true-html [keyword]
  (or (keyword +true-html+)
      (name keyword)))

(defn tag [me]
  (<mget me :tag))

(defn tag? [me]
  (= (type-cljc me) :mxweb.base/tag))

(defmethod observe [:kids :mxweb.base/tag] [_ me newv oldv _]
  (when (not= oldv unbound)
    ;; oldv unbound means initial build and this incremental add/remove
    ;; is needed only when kids change post initial creation
    ;;(println :obstagkids!!!!! (tagfo me))
    (do                                                     ;; p ::observe-kids
      (let [pdom (tag-dom me)
            lost (clojure.set/difference (set oldv) (set newv))
            gained (clojure.set/difference (set newv) (set oldv))]

        (cond
          (empty? gained)
          ;; just lose the lost
          (doseq [oldk lost]
            (.removeChild pdom (tag-dom oldk))
            (when-not (string? oldk)
              (println :obs-tag-kids-dropping (tagfo oldk))
              (not-to-be oldk)))

          :default (let [frag (.createDocumentFragment js/document)]
                     ;; GC lost from matrix;
                     ;; move retained kids from pdom into fragment,
                     ;; add all new kids to fragment, and do so preserving
                     ;; order dictated by newk:

                     (doseq [oldk lost]
                       (when-not (string? oldk)
                         ;; no need to remove dom, all children replaced below.
                         (not-to-be oldk)))

                     (doseq [newk newv]
                       (dom/appendChild frag
                         (if (some #{newk} oldv)
                           (.removeChild pdom (tag-dom newk))
                           (do ;;(println :obs-tag-kids-building-new-dom (tagfo newk))
                               (tag-dom-create newk)))))

                     (dom/removeChildren pdom)
                     (dom/appendChild pdom frag)))))))

(def +inline-css+ (set [:display]))


(defmethod observe-by-type [:mxweb.base/tag] [slot me newv oldv _]
  (when (not= oldv unbound)
    (when-let [dom (tag-dom me)]
      #_ (when *mxweb-trace*
        (when-not (some #{slot} [:tick])
          (pln :observing-tagtype (tagfo me) slot newv oldv)))

      (cond
        (= slot :content)
        (do ;;(pln :setting-html-content newv dom)
          (.requestAnimationFrame js/window
            #(do ;;(prn :ani-frame! newv)
                 (set! (.-innerHTML dom) newv))))

        (some #{slot} (:attr-keys @me))
        (do
          ;;(pln :dom-hit-attr!!!! (tagfo me) slot newv oldv)
          (case slot
            :style (set! (.-style dom) (style-string newv))

            :hidden (set! (.-hidden dom) newv)
            :disabled (if newv
                        (.setAttribute dom "disabled" true)
                        (.removeAttribute dom "disabled"))
            :class (classlist/set dom (if (sequential? newv)
                                        (str/join " " newv)
                                        newv))
            :checked (set! (.-checked dom) newv)
            (do
              ;(pln :obs-by-type-genset slot newv)
              (.setAttribute dom (name slot) newv))))

        (+inline-css+ slot)
        (throw (js/Error. (str "mxweb obs sees oldskool style: " slot)))))))

;;; --- local storage ------------------------

(defn mxu-find-class
  "Search up the matrix from node 'where' looking for element with class"
  [where class]
  (fget #(= (name class) (<mget % :class))
        where :me? false :up? true))

(defn mxu-find-tag
  "Search up the matrix from node 'where' looking for element with class"
  [where tag]
  (fget #(= (name tag) (<mget % :tag))
        where :me? false :up? true))

(defn mxu-find-id
  "Search up the matrix from node 'where' looking for element with class"
  [where id]
  (fget #(= (name id) (<mget % :id))
        where :me? false :up? true))

;;; --- localStorage io implementation --------------------------------

(defn io-upsert [key val]
  (.setItem (.-localStorage js/window) key val))

(defn io-read [key]
  (.getItem (.-localStorage js/window) key))

(defn io-delete [key]
  (.removeItem (.-localStorage js/window) key))

(defn io-clear-storage []
  (.clear (.-localStorage js/window)))

(defn io-all-keys []
  (.keys js/Object (.-localStorage js/window)))

(defn io-find [key-prefix]
  (loop [keys (io-all-keys)
         found []]
    (if (seq keys)
      (recur (rest keys)
             (if (str/starts-with? (first keys) key-prefix)
               (conj found (first keys))
               found))
      found)))

(defn io-truncate [key-prefix]
  (doseq [key (io-find key-prefix)]
    (io-delete key)))

;;; ---- mxweb-specific utilities ----------------------------------------------

(defn input-editing-start [dom initial-value]
  (form/setValue dom initial-value)
  (focus/focusInputField dom)
  ;; a lost bit of sound U/X: select all text when starting edit of a populated field...
  (selection/setStart dom 0)
  (selection/setEnd dom (count initial-value)))