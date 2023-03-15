(ns tiltontec.matrix.api
  #?(:cljs
     (:require-macros [tiltontec.matrix.api]))
  (:require
    #?(:cljs [tiltontec.util.base
              :refer-macros [trx prog1 *trx?* def-rmap-props]
              :as ubase]
       :clj  [tiltontec.util.base
              :as ubase])
    [tiltontec.util.core :as ucore]
    [tiltontec.cell.evaluate :as eval]
    [tiltontec.cell.base :as cb]
    ;[tiltontec.cell.watch :as cw]
    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF+ c-reset-next! cFonce cFn]
              :refer [c-reset! make-cell] :as c]
       :clj  [tiltontec.cell.core :as c])
    [tiltontec.model.core :as md]))

(defn any-ref? [it]
  (ucore/any-ref? it))

(defn rmap-meta-setf [[prop me] new-value]
  (ucore/rmap-meta-setf [prop me] new-value))

(defmacro the-kids
  "Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding"
  [& tree]
  `(binding [tiltontec.model.core/*parent* ~'me]
     (assert tiltontec.model.core/*parent*)
     (doall (remove nil? (flatten (list ~@tree))))))

(defmacro mdv!
  "Search matrix ascendents from node 'me' looking for `what`, and extract `slot`"
  [what slot & [me]]
  (let [me (or me 'me)]
    `(tiltontec.model.core/mget (tiltontec.model.core/fm! ~what ~me) ~slot)))

;;; --- watch -----------------------------------------

;(defmulti watch-by-type (fn [prop-name me new-val old-val c]
;                            [(ubase/mx-type me)]))
;
;(defmethod watch-by-type :default [prop me new-val old-val c]
;  (cw/watch-by-type prop me new-val old-val c))
;
;(defmulti watch (fn [prop-name me new-val old-val c]
;                  [prop-name (ubase/mx-type me)]))
;
;(defmethod watch :default [slot-name me new-val old-val c]
;  (cw/watch slot-name me new-val old-val c))

(defn md-ref? [it]
  (cb/md-ref? it))

(def unbound cb/unbound)

(def matrix
  "Optionally populated with the root of a tree of Models."
  tiltontec.model.core/matrix)

(defn mx-type [it]
  (ubase/mx-type it))

(defmacro with-mx [& body]
  `(tiltontec.cell.core/call-with-mx
     (fn [] ~@body)))

(defmacro with-par [meform & body]
  `(binding [tiltontec.model.core/*parent* ~meform]
     ~@body))

;;;---------------------------------------------

(defn c-value [c] (cb/c-value c))
(defn c-model [c] (cb/c-model c))
(defn c-prop-name [c] (cb/c-prop-name c))

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

(defn mset! [me prop new-value]
  (md/mset! me prop new-value))

(defn mswap! [me prop swap-fn & swap-fn-args]
  (apply md/mswap! me prop swap-fn swap-fn-args))

(defn backdoor-reset! [me prop new-value]
  (md/backdoor-reset! me prop new-value))

(defn mget [me prop]
  (tiltontec.model.core/mget me prop))

(defn mget? [me prop]
  (tiltontec.model.core/mget? me prop))

(defmacro with-integrity [[opcode info] & body]
  `(tiltontec.cell.integrity/call-with-integrity
     ~opcode
     ~info
     (fn [~'opcode ~'defer-info]
       ~@body)))

(defmacro with-cc [id & body]
  `(tiltontec.cell.integrity/with-integrity (:change ~id)
     ~@body))

(defmulti md-quiesce (fn [me]
                       (assert (md-ref? me))
                       [(mx-type me)]))

(defmethod md-quiesce :default [me]
  (eval/md-quiesce me))

(defn md-quiesce-self [me]
  (eval/md-quiesce-self me))

;;; --- navigation ---------------------------------

(defn fm-navig [what where & options]
  (apply md/fm-navig what where options))

(defn fasc [what where & options]
  (apply md/fasc what where options))

(defmacro fmu [name & [me]]
  "Search matrix ascendents from node 'me' (defaulting to 'me in current scope) looking for element with given name"
  (let [me-ref (or me 'me)]
    `(let [name# ~name]
       (tiltontec.model.core/fm-navig #(= name# (tiltontec.model.core/mget? % :name))
         ~me-ref :me? false :up? true :inside? false))))

(defn fm!
  "Search matrix ascendents and descendents from node 'where', for 'what', throwing an error when not found"
  [what where]
  (md/fm! what where))

;;; --- debug --------------------------

(defn minfo [me]
  (cb/minfo me))

(defn cinfo [c]
  (cb/cinfo c))