(ns mxweb.example.gloss
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce cF+] :refer [cI]]
            [tiltontec.cell.base :refer [unbound]]
            [tiltontec.model.core
             :refer [matrix mx-par <mget mset!> mswap!> mxi-find mxu-find-name nextsib] :as md]
            [mxweb.gen :refer [evt-tag target-value] :refer-macros [h1 button input div span]]
            [mxweb.style
             :refer [make-css-inline]
             :as css]))

(declare clock time-color color-input)

(defn matrix-build! []
  (md/make ::gloss
    :mx-dom (cFonce (md/with-par me
                      [(div {}
                         (h1 {} "FRP Gloss")


                         (div {:style {:background-color "yellow"
                                       :display          "flex"
                                       :flex-direction   "row"
                                       :justify-content  "space-between"
                                       :margin "48px"}}

                           (map (fn [mode]
                                  (div {:style {:background-color "white"
                                                :display          "flex"
                                                :flex-direction   "column"
                                                :justify-content  "space-between"
                                                :font-size        "24px"
                                                }}
                                    (button {:style {:flex-basis "content"
                                                     :margin "6px"}
                                             :onclick #(mset!> (evt-tag %) :clicked? true)}

                                      {:clicks  (cF (cond
                                                      (<mget me :clicked?)
                                                      (+ cache
                                                        (if (or (= mode "Ten")
                                                              (<mget (nextsib me) :onp))
                                                          1 0))

                                                      (<mget (nextsib me) :to-onp)
                                                      (case mode
                                                        "Zero" 0
                                                        "Five" cache
                                                        "Ten" cache)

                                                      :default
                                                      (if (= cache unbound)
                                                        0 cache)))

                                       :clicked? (cI nil :ephemeral? true)}

                                      (str mode "-" (<mget me :clicks)))

                                    (button {:style   (cF (make-css-inline me
                                                            :flex-basis "content"
                                                            :margin "6px"
                                                            :background-color (cF (if (<mget (:tag @me) :onp) "cyan" "pink"))))
                                             :onclick #(mswap!> (evt-tag %) :onp not)}
                                      {:onp    (cI true)
                                       :to-onp (cF+ [:ephemeral? true]
                                                 (when (<mget me :onp)
                                                   (not (= cache unbound))))}
                                      "Toggle")))
                             ["Zero" "Five" "Ten"]))
                         )]))))




