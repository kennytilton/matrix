(ns hooks.tiltontec.model.core)

(defmacro def-mget [reader-prefix & props]
  `(do
     ~@(map (fn [prop#]
              `(defn ~(symbol (str (or reader-prefix "") (name prop#)))
                 [~'ref]
                 (tiltontec.model.core/mget ~'ref ~(keyword (name prop#)))))
            props)))
