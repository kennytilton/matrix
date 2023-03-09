(ns tiltontec.matrix.api
  (:require
    [clojure.set :refer [difference]]

    #?(:cljs
       (:require-macros [tiltontec.matrix.api]))

    #?(:cljs [tiltontec.util.base
              :refer [type-cljc]
              :refer-macros [trx prog1 *trx?* def-rmap-slots]]
       :clj  [tiltontec.util.base
              :refer :all])

    [tiltontec.util.core
     :refer [any-ref? type-of err rmap-setf rmap-meta-setf pln]]

    #_ #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                      c-unbound? c-input? ia-type? ia-type
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state *pulse* c-pulse-observed
                      *call-stack* *defer-changes* unbound
                      c-rule c-me c-value-state c-callers *causation*
                      c-synaptic? c-pulse c-pulse-last-changed c-ephemeral? c-slot c-slots
                      *depender* *quiesce*
                      *c-prop-depth* md-slot-owning? c-lazy] :as cty])

    [tiltontec.cell.evaluate :as eval]

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF+ c-reset-next! cFonce cFn]
              :refer [c-reset! make-cell] :as c]
       :clj  [tiltontec.cell.core :as c])

    [tiltontec.model.core :as md]

    ))

(def matrix
  "Optionally populated with the root of a tree of Models."
  tiltontec.model.core/matrix)

(defmacro with-mx [&  body]
  `(tiltontec.cell.core/call-with-mx
     (fn [] ~@body)))

;;;---------------------------------------------

(defmacro cf-freeze [& body]
  `(tiltontec.cell.core/cf-freeze ~@body))

(defn cI [value & option-kvs]
  (apply tiltontec.cell.core/make-cell
    :value value
    :input? true
    option-kvs))

(defmacro cF [& body]
  `(tiltontec.cell.core/make-c-formula
     :code '~body
     :value tiltontec.cell.base/unbound
     :rule (tiltontec.cell.core/c-fn ~@body)))

;(defmacro cF [& body]
;  `(tiltontec.cell.core/cF ~@body))

(defmacro cF+ [[& options] & body]
  `(tiltontec.cell.core/make-c-formula
     ~@options
     :code '~body
     :value tiltontec.cell.base/unbound
     :rule (tiltontec.cell.core/c-fn ~@body)))

(defmacro cFn [& body]
  `(tiltontec.cell.core/make-c-formula
     :code '(tiltontec.cell.base/without-c-dependency ~@body)
     :input? true
     :value tiltontec.cell.base/unbound
     :rule (tiltontec.cell.core/c-fn (tiltontec.cell.base/without-c-dependency ~@body))))

(defmacro cFonce [& body]
  `(tiltontec.cell.core/make-c-formula
     :code '(tiltontec.cell.base/without-c-dependency ~@body)
     :input? nil
     :value tiltontec.cell.base/unbound
     :rule (tiltontec.cell.core/c-fn (tiltontec.cell.base/without-c-dependency ~@body))))

(defmacro cF1 [& body]
  `(tiltontec.cell.core/cFonce ~@body))

;;; -------------------------------------------



(defn make [& arg-list]
  (apply tiltontec.model.core/make arg-list))

(defmacro mpar [& [me]]
  (let [me (or me 'me)]
    `(:parent @~me)))

(defn mset! [me slot new-value]
  (tiltontec.model.core/mset! me slot new-value))

(defn mswap! [me slot swap-fn & swap-fn-args]
  (apply tiltontec.model.core/mswap! me slot swap-fn swap-fn-args))

(defn mget [me slot]
  (tiltontec.model.core/mget me slot ))

(defmacro with-integrity [[opcode info] & body]
  `(tiltontec.cell.integrity/call-with-integrity
     ~opcode
     ~info
     (fn [~'opcode ~'defer-info]
       ~@body)))

(defmacro with-cc [id & body]
  `(tiltontec.cell.integrity/with-integrity (:change ~id)
     ~@body))

(defn md-quiesce [me]
  (eval/md-quiesce me))

;;; --- navigation ---------------------------------

(defn fm-navig [what where & options]
  (apply md/fm-navig what where options))

(defn fasc [what where & options]
  (apply md/fasc what where options))

(defmacro fmu [name & [me]]
  "Search matrix ascendents from node 'me' (defaulting to 'me in current scope) looking for element with given name"
  (let [me-ref (or me 'me)]
    `(let [name# ~name]
       (tiltontec.model.core/fm-navig #(= name# (mget % :name))
         ~me-ref :me? false :up? true :inside? false))))