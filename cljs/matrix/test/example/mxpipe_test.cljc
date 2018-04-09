(ns example.mxpipe-test
  #?(:cljs (:require-macros
             [cljs.core.async.macros :as m :refer [go alt!]]))
  (:require
    #?(:clj [clojure.test :refer :all]
       :cljs [cljs.test :as test
              :refer-macros [deftest is run-tests async testing]])

            [tiltontec.util.core :refer :all]
            [tiltontec.cell.base :refer [cells-init]]
            [example.mxpipe :refer :all]

    #?(:clj
            [tiltontec.model.core :as md
             :refer [the-kids make <mget mset!> mswap!>]]
       :cljs [tiltontec.model.core
              :refer-macros [the-kids mdv!]
              :refer [fget <mget fasc fm! make mswap! mset!> backdoor-reset!]
              :as md])

    #?(:clj
            [clojure.core.async
             :refer [put! timeout go chan alt! alt!! <!! <! >! >!!]]
       :cljs [cljs.core.async
              :refer [buffer dropping-buffer sliding-buffer put! take!
                      chan promise-chan close! take partition-by offer!
                      poll! <! >! alts!] :as async])))

#_
(deftest pipe-clocked-outside
  (pln :go)
  (cells-init)

  (let [procs [(fn [data]
                 (map #(* % 3) data))

               #_(fn [data]
                   (map #(+ % 100) data))

               #_(fn [data]
                   (map #(- %) data))]

        pipe (make-mxpipe procs)
        pipe-in (:in-chan @pipe)
        pipe-out (:out-chan @pipe)
        running (atom true)]

    (is (= (count procs)
          (count (pipe-segs pipe))))

    (assert (and pipe pipe-in pipe-out))

    (let [data [[14]
                ;[0 1 2]
                ;[1000 2000 3000]
                ;[-1 -10 -100]
                ;[10 -20 30]
                ]]
      #_
      (go
        (loop []
            (when @running
              (dosync
                (>! pipe-in [(rand-int 100)])))))

      (go
        (doseq [datum data]
          (pln :goput datum)
          (dosync
            (put! pipe-in datum))))

      #_
      (go
        (dotimes [n 30]
          (when @running
            (pln :clock-bump (inc n))
            (dosync
              (mswap!> pipe :clock inc)))))

      (let [psn (last (pipe-segs pipe))]
        (go
          (loop []
            (when (pseg)))))
      (go
        (loop []
          ))
      (loop [n 2]
        (pln :looping!!! n)
        (when (pos? n)
          (let [tout (timeout 10)
                result (alt!!
                         tout :timeout
                         pipe-out
                         ([r] r))]
            (pln :drvr-bam-out result)
            (if (= result :timeout)
              (reset! running false)
              (recur (dec n))))))

      (pln :driver-exiting))))



