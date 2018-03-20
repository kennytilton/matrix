(ns example.pipeline-test
  #?(:cljs (:require-macros
             [cljs.core.async.macros :as m :refer [go alt!]]))
  (:require
    #?(:clj [clojure.test :refer :all]
       :cljs [cljs.test :as test :refer-macros [deftest is run-tests async testing]])

    [tiltontec.util.core :refer :all]
    [tiltontec.cell.base :refer [cells-init]]
    [example.pipeline :refer :all]

    #?(:clj [clojure.core.async
             :refer [put! timeout go chan alt! alt!! <!! <! >! >!!]]
       :cljs [cljs.core.async
              :refer [buffer dropping-buffer sliding-buffer put! take!
                      chan promise-chan close! take partition-by offer!
                      poll! <! >! alts!] :as async])))

(def gclock (atom 0))

(deftest pipe-clocked-outside
  (cells-init)
  (reset! gclock 0)

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

    (let [data [[1]
                [0 1 2]
                [1000 2000 3000]
                [-1 -10 -100]
                [10 -20 30]]
          top-chan (chan)]
      (go
        (doseq [datum data]
          (loop []
            (when-let [beat (<! top-chan)]
              (if (<  beat @gclock)
                (do
                  (pln :missed-beat!!! beat)
                  (recur))
                (do
                  (pln :drvr-putting-top beat datum)
                  (put! pipe-in datum)))))))

      (go
        (loop []
          (let [tout (timeout 1000)
                result (alt!
                         tout :timeout
                         pipe-out
                         ([r] r))]
            (pln :drvr-bam-out result)
            (when (not= result :timeout)
              (recur)))))

      (dotimes [n (count data)]
        (let [base (inc @gclock)
              step 1]
          (swap! gclock + step)

          (dotimes [n step]
            (>!! top-chan (+ base n)))))

      (<!! (timeout 2000))

      (pln :driver-exiting))))

(deftest pipe-clocked-inside
  (cells-init)
  (reset! gclock 0)

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

    (pipe-start pipe)

    (let [data [[42]
                [0 1 2]
                [1000 2000 3000]
                [-1 -10 -100]
                [10 -20 30]]]
      (go
        (doseq [datum data]
          (pln :drvr-putting-top  datum)
          (put! pipe-in datum)))

      (loop []
        (let [tout (timeout 1000)
              result (alt!!
                       tout :timeout
                       pipe-out
                       ([r] r))]
          (pln :drvr-bam-out result)
          (when (not= result :timeout)
            (recur))))

      (pln :driver-exiting))))

