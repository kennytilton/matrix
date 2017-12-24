(ns tiltontec.tag.html
  (:require
    [clojure.string :as str]
    [clojure.walk :refer [stringify-keys]]
    [cljs.pprint :as pp]
    [tiltontec.util.core :refer [pln]]
    [tiltontec.cell.base :refer [md-ref? ia-type unbound]]
    [tiltontec.cell.observer :refer [observe observe-by-type]]
    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
    [tiltontec.model.core
     :refer-macros [the-kids mdv!]
     :refer [md-get fasc fm! make md-reset! backdoor-reset!]
     :as md]

    [goog.dom :as dom]
    [goog.html.SafeHtml :as safe]
    [goog.dom.classlist :as classlist]
    [goog.html.sanitizer.HtmlSanitizer :as sanitizer]
    [goog.editor.focus :as focus]
    [goog.ui.Control :as control]
    [goog.dom.selection :as selection]
    [goog.dom.forms :as form]

    [taoensso.tufte :as tufte :refer-macros (defnp p profiled profile)]))

(def ^:dynamic *tag-trace* false)

(defn tagfo [me]
  (select-keys @me [:id :tag :class :name]))

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

(defn tag-attrs [mx]
  (let [beef (remove nil? (for [k [:class :hidden :placeholder :checked :disabled
                                   :autofocus :href ::type :for
                                   :onclick :ondblclick :onkeypress :onblur :onmouseover
                                   :onchange :onkeydown :id :tagsid
                                   :style :value]]
                            (when-let [v (md-get mx k)]
                              [(name k) v])))]
    (apply js-obj
           (apply concat beef))))

(defn tag-dom-create
  ([me] (tag-dom-create me nil))
  ([me dbg]
   (cond
     (string? me) (dom/safeHtmlToNode (sanitizer/sanitize me))
     (coll? me) (let [frag (.createDocumentFragment js/document)]
                  (doseq [tag me]
                    (dom/appendChild frag (tag-dom-create tag)))
                  frag)
     :default
     (do (when-let [dbg (or dbg *tag-trace*)]
           (pln :tag-dom-create dbg (tagfo me)))
         (apply dom/createDom (md-get me :tag)
                (tag-attrs me)
                (concat                                     ;; to-do: need this?
                  (map #(tag-dom-create % dbg) (md-get me :kids))
                  (when-let [c (md-get me :content)]
                    [(tag-dom-create c)])))))))

(def +true-html+ {::type "type"})

(defn true-html [keyword]
  (or (keyword +true-html+)
      (name keyword)))

(defn tag-dom [me]
  ;; This will return nil when 'me' is being awakened and rules
  ;; are firing for the first time, because 'me' has not yet
  ;; been installed in the actual DOM, so call this only
  ;; from event handlers and the like.
  (let [id (md-get me :id)]
    (assert id)
    (or (md-get me :dom-cache)
        (if-let [dom (dom/getElement (str id))]
          (backdoor-reset! me :dom-cache dom)
          (println :no-element id :found)))))

(defn tag [me]
  (md-get me :tag))



(defmethod observe [:kids :tiltontec.tag.html/tag] [_ me newv oldv _]
  (when (not= oldv unbound)
    ;; oldv unbound means initial build and this incremental add/remove
    ;; is needed only when kids change post initial creation

    (p ::observe-kids
       (let [pdom (tag-dom me)
          lost (clojure.set/difference (set oldv) (set newv))
          gained (clojure.set/difference (set newv) (set oldv))]

      (cond
        (empty? gained)
        ;; just lose the lost
        (doseq [oldk lost]
          (.removeChild pdom (tag-dom oldk))
          (when-not (string? oldk)
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
                                        (tag-dom-create newk))))

                   (dom/removeChildren pdom)
                   (dom/appendChild pdom frag)))))))

(def +global-attr+ (set [:class :checked :hidden]))
(def +inline-css+ (set [:display]))

(defmethod observe-by-type [:tiltontec.tag.html/tag] [slot me newv oldv _]
  ;; todo: this needs serious work, including supporting a new TagStyle type
  ;; where every style sub-property can have its own Cell.
  ;; Prolly need better handling of class attribute, if only with a little API
  ;; providing easy add/remove class.
  ;; (pln :observing-tag *tag-trace* (tagfo me) slot newv oldv)
  (when (not= oldv unbound)
    (when-let [dom (tag-dom me)]
      (when *tag-trace*
        (pln :observing-tag *tag-trace* (tagfo me) slot newv oldv))

      (cond
        (= slot :content) (set! (.-innerHTML dom) newv)

        (= slot :style) (set! (.-style dom) newv)

        (+global-attr+ slot)
        (case slot
          :hidden (set! (.-hidden dom) newv)
          :class (classlist/set dom newv)
          :checked (set! (.-checked dom) newv)
          )

        (+inline-css+ slot)
        (do                                                 ;; (println :obs-inline-css!!! slot)
          (case slot
            :display (set! (.-display (.-style dom)) newv)))))))



;;; --- local storage ------------------------

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

;;; ---- tag-specific utilities ----------------------------------------------

(defn input-editing-start [dom initial-value]
  (form/setValue dom initial-value)
  (focus/focusInputField dom)
  ;; a lost bit of sound U/X: select all text when starting edit of a populated field...
  (selection/setStart dom 0)
  (selection/setEnd dom (count initial-value)))