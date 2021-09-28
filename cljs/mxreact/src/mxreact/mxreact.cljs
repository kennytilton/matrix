(ns mxreact.mxreact
  (:require-macros [mxreact.mxreact])
  (:require
    ["react" :as react]))

(defn ^js/React get-react [] react)