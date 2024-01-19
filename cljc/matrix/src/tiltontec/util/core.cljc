(ns tiltontec.util.core
  (:require
   #?(:cljs [tiltontec.util.base :as utm
             :refer-macros [prog1 b-when wtrx]]
      :clj  [tiltontec.util.base :as utm
             :refer :all])
   [clojure.string :as str]))

(defn type-of [x] (type x))

(defn xor [a b]
  (or (and a (not b))
      (and b (not a))))

(declare pln xpln)

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
               "4" (hex) (hex) (hex) "-"
               rhex (hex) (hex) (hex) "-"
               (hex) (hex) (hex) (hex)
               (hex) (hex) (hex) (hex)
               (hex) (hex) (hex) (hex)))))))

;; --- refs with maps conveniences -------------------

(defn ia-ref [x]
  (#?(:clj ref :cljs atom) x))

(defn any-ref? [x]
  (instance? #?(:cljs cljs.core.Atom
                :clj  clojure.lang.Ref) x))

(defn mut-set!
  ([mut prop new-value] (mut-set! mut prop new-value nil))
  ([mut prop new-value tag]
   (when-not (any-ref? mut)
     (pln "model.util.core/rmap-setf> prop:" prop :tag tag
          "new-value:" new-value
          "failed assertion any-ref? on ref:" mut)
     (assert false "see console"))
   (when-not (map? @mut)
     (pln "model.util.core/rmap-setf> prop:" prop :tag tag
          "new-value:" (or new-value :NIL)
          "failed assertion map? on ref:" @mut)
     (assert false "see console"))
   (#?(:clj alter :cljs swap!) mut assoc prop new-value)
   new-value))

(defn rmap-setf
  ([[prop ref] new-value]
   (rmap-setf [prop ref] new-value nil))
  ([[prop ref] new-value tag]
   (assert (any-ref? ref)
           (pln "model.util.core/rmap-setf> prop:" prop :tag tag
                "new-value:" new-value
                "failed assertion any-ref? on ref:" ref))
   (when-not (map? @ref)
     (pln "model.util.core/rmap-setf> prop:" prop :tag tag
          "new-value:" (or new-value :NIL)
          "failed assertion map? on ref:" @ref)
     (assert false))
   (#?(:clj alter :cljs swap!) ref assoc prop new-value)
   new-value))

(defn rmap-meta-setf [[prop ref] new-value]
  (assert (meta ref))
  (alter-meta! ref assoc prop new-value)
  ;;(prn :altermeta!! prop new-value)
  new-value)
;; --- error handling -----------------

;; todo lose this altogether
(defmulti err (fn [a1 & args] (fn? a1)))

(defmethod err true [fn & mas]
  (err (apply fn mas)))

(defmethod err :default [& bits]
  (throw (#?(:cljs js/Error. :clj Exception.)
          (str/join " " (cons "mxerr>" bits)))))

(defn flz [x]
  (if (isa? (type x) #?(:cljs cljs.core.LazySeq
                        :clj  clojure.lang.LazySeq))
    (vec (doall x))
    x))
#_(flz (map even? [1 2 3]))

(defn wtrx-test [n]
  (wtrx
   (0 10 "test" n)
   (when (> n 0)
     (wtrx-test (dec n)))))

;; --- deftest support ---------------------
;; These next two are lame because they just
;; look at props (ignoring models). Use only
;; in tests looking at one model or at least
;; prop names do not duplicate.
;;

(defn prop-users [me prop]
  (set (map :propq
            (map deref
                 (:callers @(prop @me) #{})))))

(defn prop-useds [me prop]
  (set (map :prop
            (map deref
                 (:useds @(prop @me) #{})))))

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

(defn pln [& args]
  (locking *out*
    (println (str/join " " args))))

(defn xpln [& args])

(defn eko [key value]
  (pln :eko!!! key value)
  value)

(def ^:dynamic *plnk-keys* [])

(defn plnk [k & r]
  (if (string? (first r))
    (println (pr-str r))
    (when (or (= k :force)
              (some #{k} [*plnk-keys*]))                      ;; [:qxme :addk])
      (println (pr-str r)))))

(defn now []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getTime (js/Date.))))

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


