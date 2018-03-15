(ns example.micropipeline-test
  (:require
    [clojure.test :refer :all]
    [core.async :as async :refer :all]
    [tiltontec.util.core :refer :all]
    [tiltontec.cell.base :refer [cells-init]]
    [example.micropipeline :refer :all]))


(deftest data-ack
  (cells-init)
  (let [pipe (make-pipeline
               (fn [data]
                 (map #(* % 2) data))
               (fn [data]
                 (map #(+ % 100) data)))]
    (if (async/>!! (:in-data (first (:steps pipe))) [0 1 2])
      (do
        (pln :piped!)
        (let [out (async/<!! (:out-data (last (:steps pipe))))]
          (is (not (nil? out)))
          (is (= out [1 3 5])))))))
