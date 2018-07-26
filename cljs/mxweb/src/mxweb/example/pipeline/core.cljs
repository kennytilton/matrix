(ns mxweb.example.pipeline.core
  (:require-macros
    [cljs.core.async.macros :as m :refer [go alt!]])
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [pln]]
            [tiltontec.cell.base :refer [ia-type]]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [mxweb.example.pipeline.pipeline :as pline
             :refer [pseg-processor pipe-segs pipe-start]]
            [tiltontec.model.core
             :refer [matrix mx-par <mget <mget mset!> mset!> mxi-find mxu-find-name
                     mxu-find-type]
             :as md]

            [mxweb.gen :refer [evt-tag target-value]
             :refer-macros [h1 h4 h5 input div span button p]]

            [cljs.core.async
             :refer [buffer dropping-buffer sliding-buffer put! take!
                     timeout
                     chan promise-chan close! take partition-by offer!
                     poll! <! >! alts!] :as async]))

(declare clock pipe-seg-view pipe-feed)

(defn mtx-pipeline [me]
  (<mget (mxu-find-type me ::pipedemo) :pipeline))

(defn matrix-build! []
  ;;;;(pline/pipe-go)
  (md/make ::pipedemo
    :pipeline (pipe-start
                (pline/make-pipeline 1000
                [(fn [data]
                   (map #(* % 2) data))

                 (fn [data]
                   (map #(+ % 100) data))

                 (fn [data]
                   (map #(- %) data))]))
    :mx-dom (cFonce (md/with-par me
                      (assert me)
                      (pln :me-is me (ia-type me))
                      (let [mtx me]
                        (assert mtx)
                        [(div {}
                           (h1 "Hello, Pipeline!")
                           #_(button {:onclick #(pipe-start (mtx-pipeline me))}
                             "Prime")
                           (button {:onclick #(pipe-feed (mtx-pipeline me)
                                                [[42]
                                                 [0 1 2]
                                                 ;[1000 2000 3000]
                                                 ;[-1 -10 -100]
                                                 ;[10 -20 30]
                                                 ])}
                             "Feed")

                           (p {:content (cF (str "pipe-fst: " (<mget (mtx-pipeline me) :fst)))})
                           (p {:content (cF (str "pipe-in: " (<mget (mtx-pipeline me) :input)))})

                           (for [k (pipe-segs (<mget mtx :pipeline))]
                             (pipe-seg-view me k))

                           (p {:content (cF (pln :pipeout-runs!!!!!!!!! (<mget (mtx-pipeline me) :poutput))
                                          (str "pipe-out: " (<mget (mtx-pipeline me) :poutput)))})
                           )])))))

(def pipe-data (atom nil))
(def pipe-fed (atom nil))
(def pipe-gov (atom 0))

(defn feed-pipe []
  (when-let [datum (first @pipe-data)]
    (cond
      (pos? @pipe-gov) (swap! pipe-gov - 15)
      :default
      (do
        (reset! pipe-gov 1000)
        (swap! pipe-data rest)
        (pln :feed-pipe-feeding datum)
        (go (put! (<mget @pipe-fed :in-data) datum))))

    ;(pln :framing!!!)
    (.requestAnimationFrame js/window feed-pipe)))

(defn pipe-feed [pipe data]
  (reset! pipe-fed pipe)
  (reset! pipe-data data)
  (feed-pipe)
  (pln :past-feed-pipe-pulling)
  (loop [dn 0]

    (when (< dn (count data))
      (go (let [result (<! (<mget pipe :out-data))]
            (pln :drvr-bam-out result)))
      (recur (inc dn))))
  (pln :driver-exiting))

#_
(defn pipe-save []

  (let [data [[42]
              [0 1 2]
              [1000 2000 3000]
              ;[-1 -10 -100]
              ;[10 -20 30]
              ]]
    (go
      (doseq [datum data]
        (go (<! (timeout 1000)))
        (pln :drvr-putting-top  datum)
        (put! (<mget pipe :in-data) datum)))

    (loop [dn 0]
      (pln :loop-read!!! dn)
      (when (< dn (count data))
        (go (let [result (<! (<mget pipe :out-data))]
              (pln :drvr-bam-out result)))
        (recur (inc dn))))

    (pln :driver-exiting)))

(defn pipe-seg-view [me seg]
  (div {:style "background:cyan"}
    (h4 (str "Pipe Seg#" (<mget seg :id)))
    (h5 {:content (cF ;;(pln :computing-fst-view!!!!!!!! (<mget seg :fst))
                    (str "state:" (<mget seg :fst) (rand-int 1000)))})))

(defn clock []
  (div {:class   "example-clock"
        :style   (cF (str "color:" (<mget (mxu-find-name me :timecolor) :value)))

        :tick (cI false :ephemeral? true)
        :ticker (cF (js/setInterval #(mset!> me :tick true) 1000))

        :content (cF (if (<mget me :tick)
                       (-> (js/Date.)
                         .toTimeString
                         (str/split " ")
                         first)
                       "*checks watch*"))}))

