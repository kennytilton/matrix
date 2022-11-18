(ns tiltontec.learn.basic
  (:require
    [clojure.string :as str]
    [clojure.pprint :refer [pprint cl-format] :as pp]
    [clojure.test :refer :all]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.util.core :refer [type-of err]]
    [tiltontec.cell.base :refer :all :as cty]
    [tiltontec.cell.integrity :refer [with-integrity with-cc]]
    [tiltontec.cell.observer
     :refer [defobserver fn-obs]]

    [tiltontec.cell.core :refer :all]

    [tiltontec.cell.evaluate :refer [c-get c-awaken]]
    [tiltontec.model.base :refer [md-cz md-cell]]
    [tiltontec.model.core :refer :all :as md]
    ))

(deftest boiler-1
  (cells-init) ;; make sure each test is isolated

  (let [boiler (md/make
                 :water-capacity 100
                 :filled-ratio-min 0.10
                 ; these ^^ are fixed attributes of a boiler

                 :water-amt (cI 40)
                 ; this ^ we can change by adding water, so we
                 ; MUST wrap it in an input (cI) cell
                 ; cI is short for "cell Input"

                 :filled-ratio (cF (/ (mget me :water-amt)
                                     (mget me :water-capacity)))
                 ; ^^ an interim computation, useful as documentation
                 ; even if only the water-low? rule uses it
                 ; cF is short for "cell Formulaic"

                 :water-low? (cF (< (mget me :filled-ratio)
                                   (mget me :filled-ratio-min))))]
    (is (not (mget boiler :water-low?)))

    (mset! boiler :water-amt 10)
    ; mset! destructively modifies a model property
    (is (not (mget boiler :water-low?)))

    (mset! boiler :water-amt 5)
    (is (mget boiler :water-low?))))