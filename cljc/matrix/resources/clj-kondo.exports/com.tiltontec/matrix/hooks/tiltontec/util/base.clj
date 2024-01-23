(ns hooks.tiltontec.util.base)

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

(defmacro wtrx [[lo hi & trxargs] & body]
  `(do [~lo ~hi (list ~@trxargs)] ~@body))

(defmacro b-when [var form & body]
  `(when-let [~var ~form]
     ~@body))

(defmacro trx [label & vals]
  `(do ~(when (not (nil? label))
          (str label))
       [~@vals]))
