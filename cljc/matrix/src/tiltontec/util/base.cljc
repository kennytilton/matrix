(ns tiltontec.util.base
  #?(:cljs (:require-macros [tiltontec.util.base
                             :refer [wtrx trx prog1 b-when unless def-rmap-props def-rmap-meta-props]]))
  #?(:clj (:require
           [clojure.string :as str])))

#?(:cljs (enable-console-print!))

;; ---- debug print statement hacks ---------------------

(def ^:dynamic *trx?* true)

#_(alter-var-root #'*trx?* not)

(def ^:dynamic *trc-ensure* nil)
(def ^:dynamic *trx-path-id* nil)
(def ^:dynamic *trxdepth* 0)
(def last-trc (atom 0)) ;; s/b universal time

(def +mx-sid+ (atom 0))

(defn mx-sid-next []
  (swap! +mx-sid+ inc))

(defn call-trc$ [s bits]
  (str s ": " #?(:cljs (str bits)
                 :clj (str/join ", " bits))))

(defn call-trc [s & os]
  ;; (break) ;; uncomment to escape loop
  (when *trx?*
    (when s
      (let [path (apply str (repeat *trxdepth* "."))]
        (println path (call-trc$ s os))))))

(defmacro trx [label & vals]
  `(call-trc ~(when (not (nil? label))
                (str label))
             ~@vals))

(defn call-wtrx [fn lo hi trxargs]
  (binding [*trxdepth* (inc *trxdepth*)
            *print-level* 3]
    (cond
      (<= lo *trxdepth* hi)
      (apply call-trc trxargs)
      (> *trxdepth* hi)
      (throw (#?(:cljs js/Error. :clj Exception.)
              (str "wtrx exceeded max depth " hi ":"
                   (call-trc$ (first trxargs) (rest trxargs))))))
    (fn)))

(defmacro wtrx [[lo hi & trxargs] & body]
  `(call-wtrx (fn [] ~@body) ~lo ~hi (list ~@trxargs)))

(defn prx [tag & bits]
  (when tag
    (binding [*print-level* 3]
      (apply prn tag bits))))

(defmacro prog1 [& body]
  `(let [result# ~(first body)]
     ~@(rest body)
     result#))

(defmacro b-when [var form & body]
  `(when-let [~var ~form]
     ~@body))

(defmacro unless [form & body]
  `(when-not ~form
     ~@body))

;; --- easy access to maps in refs ----

(defmacro def-rmap-props [reader-prefix & props]
  `(do
     ~@(map (fn [prop#]
              `(defn ~(symbol (str (or reader-prefix "")
                                   prop#))
                 [~'ref]
                 (~(keyword prop#) @~'ref))) props)))

(defmacro def-rmap-meta-props [reader-prefix & props]
  `(do
     ~@(map (fn [prop#]
              `(defn ~(symbol (str (or reader-prefix "")
                                   prop#))
                 [~'ref]
                 (~(keyword prop#) (meta ~'ref)))) props)))

(defn mx-type [it]
  (or (when-let [m (meta it)]
        (:mx-type m))
      (type it)))

(defn mx-type? [it type]
  (isa? (mx-type it) type))
