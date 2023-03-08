(ns tiltontec.matrix.api

  (:require
    [clojure.set :refer [difference]]
    #?(:cljs [tiltontec.util.base
              :refer [type-cljc]
              :refer-macros [trx prog1 *trx?* def-rmap-slots]]
       :clj  [tiltontec.util.base
              :refer :all])

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
              :refer-macros [cF cF+ c-reset-next! cFonce cFn]
              :refer [cI c-reset! make-cell]]
       :clj  [tiltontec.cell.core :refer :all])

    [tiltontec.model.core :as md]

    ))

(defn make [& arg-list]
  (apply md/make arg-list))

(defmacro mpar [& [me]]
  (let [me (or me 'me)]
    `(:parent @~me)))

(defn mset! [me slot new-value]
  (md/mset! me slot new-value))

(defn mswap! [me slot swap-fn & swap-fn-args]
  (apply md/mswap! me slot swap-fn swap-fn-args))

(defn mget [me slot]
  (md/mget me slot ))

(defmacro with-integrity [[opcode info] & body]
  `(tiltontec.cell.integrity/call-with-integrity
     ~opcode
     ~info
     (fn [~'opcode ~'defer-info]
       ~@body)))

(defmacro with-cc [id & body]
  `(with-integrity (:change ~id)
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
       (fm-navig #(= name# (mget % :name))
         ~me-ref :me? false :up? true :inside? false))))