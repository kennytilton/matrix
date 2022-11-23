(ns tiltontec.learn.solution.b020-async-integrity
  (:require
    [clojure.test :refer :all]
    [clojure.core.async :refer [go timeout <! <!!]]
    [tiltontec.util.base
     :refer :all]
    [tiltontec.cell.base :refer :all]
    [tiltontec.cell.core :refer :all]
    [tiltontec.model.core :refer :all :as md]
    [tiltontec.cell.integrity :refer [with-async-change]]
    [tiltontec.learn.util :refer :all]
    [cheshire.core :refer :all]))

(deftest async-auto-close
  (cells-init)                                              ;; make sure each test is isolated
  (let [alert (md/make
                :open? (cI false :obs (fn [slot me new old cell]
                                        (prn :obs-open-now new)
                                        (when new
                                          (go
                                            (let [delay (timeout 1000)]
                                              (<! delay)
                                              (with-async-change :auto-close
                                                (mset! me :open? false))))))))]
    (is (not (mget alert :open?)))
    (mset! alert :open? true)
    (is (mget alert :open?))
    (Thread/sleep 1500)
    (is (not (mget alert :open?)))))