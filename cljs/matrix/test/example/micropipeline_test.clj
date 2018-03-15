(ns example.micropipeline-test
  (:require
    [clojure.test :refer :all]

    [tiltontec.util.core :refer :all]
    [tiltontec.cell.base :refer [cells-init]]
    [example.micropipeline :refer :all]
    [clojure.core.async :as a]))

(deftest data-ack-test
  (cells-init)
  (pln :cinit!)
  (let [procs [(fn [data]
                 (map #(* % 2) data))

               (fn [data]
                 (map #(+ % 100) data))]
        pipe-in (a/chan)
        pipe-out (a/chan)
        pipe (make-pipeline
               pipe-in pipe-out
               procs)]

    (pln :gotpipe!!! pipe)
    (is (= (count procs)
          (count (pipe-segs pipe))))

    (pln :strt-pipe pipe)

    (pipe-start pipe)

    (a/go
      (a/put! pipe-in [0 1 2])
      (a/put! pipe-in [1000 2000 3000]))

    (a/go
      (loop []
        (let [tout (a/timeout 1000)
              result (a/alt!
                       tout :timeout
                       pipe-out
                       ([r] r))]
          (pln :bam-out result)
          ;(assert (not (nil? out)))
          (when (not= result :timeout)
            (is (or (= [[100 102 104]
                        [2100 4100 6100]])))
            (recur))))
      #_ (do
           (a/close! pipe-in)
           (a/close! pipe-out)))))
