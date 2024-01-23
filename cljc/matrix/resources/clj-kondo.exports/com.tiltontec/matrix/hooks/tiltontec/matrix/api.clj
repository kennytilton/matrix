(ns hooks.tiltontec.matrix.api)

(defmacro fn-watch [& body]
  `(fn [~'prop ~'me ~'new ~'old ~'c]
     [~'prop ~'me ~'new ~'old ~'c]
     ~@body))
