(ns hooks.tiltontec.cell.synapse)

(defmacro with-synapse [[synapse-id [& closure-bindings]] & body]
  `(let [~@closure-bindings]
     [~synapse-id (do ~@body)]))

(defmacro cSyn [[synapse-id [& closure-bindings]] & body]
  `(let [~@closure-bindings]
     [~synapse-id (do ~@body)]))
