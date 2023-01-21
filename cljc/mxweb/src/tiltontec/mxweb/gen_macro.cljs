(ns tiltontec.mxweb.gen-macro
  (:refer-clojure :exclude [map meta time])
  (:require [clojure.walk :as walk]
            [goog.object :as gobj]
            [tiltontec.mxweb.gen :refer [make-tag]])
  (:require-macros [tiltontec.mxweb.gen-macro]))

(defn jso-map
  "Uses the Google Closure object module to get the keys and values of any JavaScript Object
  and put them into a ClojureScript map"
  [obj]
  (walk/keywordize-keys (zipmap (gobj/getKeys obj) (gobj/getValues obj))))