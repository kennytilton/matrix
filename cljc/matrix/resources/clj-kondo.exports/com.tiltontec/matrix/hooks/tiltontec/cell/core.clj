(ns hooks.tiltontec.cell.core)

(defmacro c-f [& body]
  `(let [~'me nil
         ~'_cell nil
         ~'_prop-name nil
         ~'_cache nil]
     [~'me ~'_cell ~'_prop-name ~'_cache]
     ~@body))

(defmacro c-f+ [kvs & body]
  `(let [~'me nil
         ~'_cell nil
         ~'_prop-name nil
         ~'_cache nil]
     (apply hash-map ~kvs)
     [~'me ~'_cell ~'_prop-name ~'_cache]
     ~@body))
