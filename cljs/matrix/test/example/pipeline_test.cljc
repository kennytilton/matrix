(ns example.pipeline-test
  #?(:cljs (:require-macros
             [cljs.core.async.macros :as m :refer [go alt!]]))
  (:require
    #?(:clj [clojure.test :refer :all]
       :cljs [cljs.test :as test :refer-macros [deftest is run-tests async testing]])

    [tiltontec.util.core :refer :all]
    [tiltontec.cell.base :refer [cells-init]]
    [example.pipeline :refer :all]
    #?(:clj [clojure.core.async :refer [put! go chan alt! ]]
       :cljs [cljs.core.async :refer
              [buffer dropping-buffer sliding-buffer put! take! chan promise-chan
               close! take partition-by offer! poll! <! >! alts!] :as async])))

(deftest data-ack-test
  (cells-init)

  (let [procs [(fn [data]
                 (map #(* % 2) data))

               (fn [data]
                 (map #(+ % 100) data))

               (fn [data]
                 (map #(- %) data))]

        pipe-in (chan)
        pipe-out (chan)
        pipe (make-pipeline
               pipe-in pipe-out
               procs)]

    (pln :gotpipe!!! pipe)
    (is (= (count procs)
          (count (pipe-segs pipe))))

    (pln :strt-pipe pipe)

    (pipe-start pipe)

    (go
      (put! pipe-in [0 1 2])
      (put! pipe-in [1000 2000 3000])
      (put! pipe-in [-1 -10 -100])
      (put! pipe-in [10 -20 30]))

    (go
      (loop []
        (let [tout (timeout 1000)
              result (alt!
                       tout :timeout
                       pipe-out
                       ([r] r))]
          (pln :bam-out result)
          ;(assert (not (nil? out)))
          #_
              (when (not= result :timeout)
                (is (or (= [[100 102 104]
                            [2100 4100 6100]])))
                (recur))))
      #_ (do
           (close! pipe-in)
           (close! pipe-out)))))

