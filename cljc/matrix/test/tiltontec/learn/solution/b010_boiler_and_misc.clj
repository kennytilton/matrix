(ns tiltontec.learn.solution.b010-boiler-and-misc
  (:require
    [clojure.test :refer :all]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.cell.base :refer :all]
    [tiltontec.cell.integrity :refer [with-integrity with-cc]]
    [tiltontec.cell.core :refer :all]
    [tiltontec.model.base :refer [md-cz]]
    [tiltontec.model.core :refer :all :as md]
    [tiltontec.learn.util :refer :all]))

(deftest knock-knock
  (cells-init)                                              ;; make sure each test is isolated

  (let [sound-count (atom 0)
        world (md/make
                :sound-heard (cI nil
                               :ephemeral? true
                               :obs (fn [slot me new prior cell]
                                      (swap! sound-count inc)
                                      (prn :sound-heard-count @sound-count)
                                      (obs-slot-new slot me new prior cell)))
                :speech (cF+ [:obs obs-slot-new]
                          (case (mget me :sound-heard)
                            nil :silence
                            :knock-knock :who-is-there?
                            [:hello (mget me :sound-heard)])))]

    (pgr-prn :world-built)
    (is (= :silence (mget world :speech)))

    (pgr-prn :mutating :sound-heard :knock-knock)
    (mset! world :sound-heard :knock-knock)
    (is (= :who-is-there? (mget world :speech)))

    (pgr-prn :mutating :sound-heard :world)
    (mset! world :sound-heard :world)
    (is (= [:hello :world] (mget world :speech)))

    (pgr-prn :mutating :sound-heard-5-times :world)
    (reset! sound-count 0)
    (dotimes [_ 5]
      (mset! world :sound-heard :world))

    (is (= @sound-count 5))

    (pgr-prn :fini!)))