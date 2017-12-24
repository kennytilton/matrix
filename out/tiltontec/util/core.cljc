(ns tiltontec.util.core
  (:require [clojure.string :as $]
            #?(:cljs [cognitect.transit :as trx])
            #?(:cljs [tiltontec.util.base :as utm
                      :refer-macros [prog1 b-when wtrx]]
               :clj  [tiltontec.util.base :as utm
                      :refer :all])))

(defn type-of [x] (type x))

(defn xor [a b]
  (or (and a (not b))
    (and b (not a))))

(defn set-ify [x]
  (cond
   (nil? x) #{}
   (sequential? x) (set x)
   :else #{x}))

(defn cl-find [sought coll]
  (when-not (nil? sought)
    (some #{sought} coll)))

#?(:cljs
  (defn uuidv4 []
      (letfn [(hex [] (.toString (rand-int 16) 16))]
             (let [rhex (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 16))) 16)]
                  (uuid
                    (str (hex) (hex) (hex) (hex)
                         (hex) (hex) (hex) (hex) "-"
                         (hex) (hex) (hex) (hex) "-"
                         "4"   (hex) (hex) (hex) "-"
                         rhex  (hex) (hex) (hex) "-"
                         (hex) (hex) (hex) (hex)
                         (hex) (hex) (hex) (hex)
                         (hex) (hex) (hex) (hex)))))))

;; --- refs with maps conveniences -------------------

(defn ia-ref [x]
  (#?(:clj ref :cljs atom) x))

(defn any-ref? [x]
  (instance? #?(:cljs cljs.core.Atom
                :clj clojure.lang.Ref) x))

(defn rmap-setf [[slot ref] new-value]
  (assert (any-ref? ref))
  (assert (map? @ref))
  (#?(:clj alter :cljs swap!) ref assoc slot new-value)
  new-value)

(defn rmap-meta-setf [[slot ref] new-value]
  (assert (meta ref))
  (alter-meta! ref assoc slot new-value)
  new-value)
;; --- error handling -----------------


(defmulti err (fn [a1 & args] (fn? a1)))

(defmethod err true [fn & mas]
  (err (apply fn mas)))

(defmethod err :default [& bits]
  (throw (#?(:cljs js/Error. :clj Exception.)
           ($/join " " (cons "jz/err>" bits)))))

;; (defn upabc [a b c]
;;   (tiltontec.util.base/pabc2 a))

(defn flz [x]
  (if (isa? (type x) #?(:cljs cljs.core.LazySeq
                        :clj clojure.lang.LazySeq))
    (vec (doall x))
    x))
#_
(flz (map even? [1 2 3]))

(defn wtrx-test [n]
  (wtrx
   (0 10 "test" n)
   (when (> n 0)
     (wtrx-test (dec n)))))

;; --- deftest support ---------------------
;; These next two are lame because they just
;; look at slots (ignoring models). Use only
;; in tests looking at one model or at least
;; slot names do not duplicate.
;;

(defn slot-users [me slot]
  (set (map :slotq
            (map deref
                 (:callers @(slot @me) #{})))))

(defn slot-useds [me slot]
  (set (map :slot
            (map deref
                 (:useds @(slot @me) #{})))))

;;; --- FIFO Queue -----------------------------

(defn make-fifo-queue []
  (#?(:clj ref :cljs atom) []))

(defn fifo-data [q] @q)
(defn fifo-clear [q]
  (#?(:clj alter :cljs swap!) q empty))
(defn fifo-empty? [q]
  (empty? @q))
(defn fifo-peek [q]
  (first @q))

(defn fifo-add [q new]
  (#?(:clj alter :cljs swap!) q conj new))

(defn fifo-pop [q]
  (when-not (fifo-empty? q)
    (utm/prog1
     (first @q)
     (#?(:clj alter :cljs swap!) q subvec 1))))

;;; --- detritus ----------------------

(defn ensure-vec [x]
  (if (coll? x) (vec x) [x]))

(defn pln [& r]
  (println (pr-str r)))

(def ^:dynamic *plnk-keys* [])

(defn plnk [k & r]
  (if (string? (first r))
    (println (pr-str r))
    (when (or (= k :force)
              (some #{k} [*plnk-keys*]))                        ;; [:qxme :addk])
      (println (pr-str r)))))

(defn now []
  #?(:clj (System/currentTimeMillis)
    :cljs (.getTime (js/Date.))))

;;; --- json -----------------------------
#?(:cljs
  (defn map-to-json [map]
    (trx/write (trx/writer :json) map)))

#?(:cljs
  (defn json-to-map [json]
    (trx/read (trx/reader :json) json)))



;;; --- counting ----------------

(def counts (atom nil))

(defn counts-reset []
  (reset! counts nil))

(defn countit "Count it"
  ([path]
   (countit path 1))
  ([path n]
   (if (sequential? path)
     (if (counted? n)
       (countit path (count n))
       (swap! counts update-in path (fnil + 0) n))
     (countit [path] n))))

(do (counts-reset)
    ;; (swap! counts update-in [:a :c] (fnil + 0) 1)
    (countit [:a :b] 7)
    (countit (list :a :b) 3)
    (countit :x 2)
    (countit :y [1 2 3 4]))


    