(ns tiltontec.matrix.api
  #?(:cljs
     (:require-macros [tiltontec.matrix.api
                       :refer [with-mx without-c-dependency cf-freeze the-kids cFkids with-par
                               fn-watch cF cF+ cFn cF+n cFonce cF1 with-cc mpar fmu mdv!
                               with-mx-trace with-minfo with-minfo-std
                               with-integrity]]))
  (:require
    #?(:cljs [tiltontec.util.base
              :refer-macros [trx prog1 *trx?* def-rmap-props]
              :as ubase]
       :clj  [tiltontec.util.base
              :as ubase])
    [tiltontec.util.core :as ucore]
    ;[tiltontec.cell.diagnostic :refer ]
    [tiltontec.cell.base :as cb]
    #?(:cljs [tiltontec.cell.core
              :refer-macros [c-reset-next!]
              :refer [c-reset! make-cell] :as c]
       :clj  [tiltontec.cell.core :as c])
    [tiltontec.cell.diagnostic :as diag]
    [tiltontec.model.core :as md]))

(defn prx [tag & bits]
  (apply ubase/prx tag bits))

(defn any-ref? [it]
  (ucore/any-ref? it))

(defn rmap-meta-setf [[prop me] new-value]
  (ucore/rmap-meta-setf [prop me] new-value))

(def unbound cb/unbound)

;;; --- the matrix --------------------------------------------

(def matrix
  "Optionally populated with the root of a tree of Models."
  tiltontec.model.core/matrix)

(defmacro with-mx [& body]
  `(tiltontec.cell.core/call-with-mx
     (fn [] ~@body)))

;;;
(defn md-name [me]
  (:name @me))

(defn mname [me]
  (:name @me))

(defn mx-type [it]
  (ubase/mx-type it))

(defn md-state [it]
  (cb/md-state it))

(defn md-ref? [it]
  (cb/md-ref? it))

;;;--- cells ------------------------------------------

;;;;;; --- cell accessors ------------------------------------------

(defn c-value [c] (cb/c-value c))
(defn c-model [c] (cb/c-model c))
(defn c-prop-name [c] (cb/c-prop-name c))

;;; --- cell formula utilities ----------------------------------

(defmacro without-c-dependency [& body]
  `(tiltontec.cell.base/without-c-dependency ~@body))

(defmacro cf-freeze
  "Stop listening to dependents.
  Return the specified optional value, or the current latest value."
  [& [value-form]]
  `(tiltontec.cell.core/cf-freeze ~value-form))

;;; --- models ---------------------------------------

(defmacro def-mget [reader-prefix & props]
  `(do
     ~@(map (fn [prop#]
              `(defn ~(symbol (str (or reader-prefix "") (name prop#)))
                 [~'ref]
                 (tiltontec.model.core/mget ~'ref ~(keyword (name prop#))))) props)))

;;; --- parent/kids ---------------------------------------------

(defmacro the-kids
  "Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding"
  [& tree]
  `(binding [tiltontec.model.core/*parent* ~'me]
     (assert tiltontec.model.core/*parent*)
     (doall (remove nil? (flatten (list ~@tree))))))

(defmacro cFkids
  "Syntax sugar for formulae that define :kids props"
  [& tree]
  `(cF (assert ~'me "no me for cFkids")
       (the-kids ~@tree)))

(defmacro with-par [meform & body]
  `(binding [tiltontec.model.core/*parent* ~meform]
     ~@body))

(defn kid-values-kids
  "A pattern commonly employed in matrix applications is to define a :kid-factory on some
   'parent' cell, and use it to enrich the value extracted from the parent's kid cells.

   This function maps across the :kids-values, invoking the factory as it goes"
  [me existing-kids]
  (md/kid-values-kids me existing-kids))

;;; --- watch -----------------------------------------

(defmacro fn-watch
  "Shortcut definer for cell-specific watchs.
body can be multiple sexprs with access to
call parameters: prop, me, new, old, and c."
  [& body]
  `(fn [~'prop ~'me ~'new ~'old ~'c]
     ~@body))

;;; --- cell factories -----------------------------------------

(defn cI [value & option-kvs]
  (apply tiltontec.cell.core/make-cell
    :value value
    :input? true
    option-kvs))

(defmacro cF [& body]
  `(tiltontec.cell.core/make-c-formula
     :code '~body
     :rule (tiltontec.cell.core/c-fn ~@body)))

(defmacro cF+ [[& options] & body]
  `(tiltontec.cell.core/make-c-formula
     ~@options
     :code '~body
     :rule (tiltontec.cell.core/c-fn ~@body)))

(defmacro cFn [& body]
  `(tiltontec.cell.core/make-c-formula
     :code '(tiltontec.cell.base/without-c-dependency ~@body)
     :input? true
     :rule (tiltontec.cell.core/c-fn (tiltontec.cell.base/without-c-dependency ~@body))))

(defmacro cF+n [[& options] & body]
  `(tiltontec.cell.core/make-c-formula
     ~@options
     :code '(tiltontec.cell.base/without-c-dependency ~@body)
     :input? true
     :rule (tiltontec.cell.core/c-fn (tiltontec.cell.base/without-c-dependency ~@body))))

(defmacro cFonce [& body]
  `(tiltontec.cell.core/make-c-formula
     :code '(tiltontec.cell.base/without-c-dependency ~@body)
     :input? nil
     :rule (tiltontec.cell.core/c-fn (tiltontec.cell.base/without-c-dependency ~@body))))

(defmacro cF1 [& body]
  `(tiltontec.cell.core/cFonce ~@body))

;;; --- model factory ----------------------------------------

(defn make [& arg-list]
  (apply tiltontec.model.core/make arg-list))

;;; --- mutation -----------------------------------

(defn mset! [me prop new-value]
  (md/mset! me prop new-value))

(defn mswap! [me prop swap-fn & swap-fn-args]
  (apply md/mswap! me prop swap-fn swap-fn-args))

(defn mget [me prop]
  (tiltontec.model.core/mget me prop))

(defn mget? [me prop & [alt-value]]
  (tiltontec.model.core/mget? me prop alt-value))

;;; --- integrity ---------------------------------

(defmacro with-integrity [[opcode info] & body]
  `(tiltontec.cell.integrity/call-with-integrity
     ~opcode
     ~info
     (fn [~'opcode ~'defer-info]
       ~@body)))

(defmacro with-cc [id & body]
  `(tiltontec.cell.integrity/with-integrity (:change ~id)
     ~@body))

;;; --- navigation ---------------------------------

(defmacro mpar [& [me]]
  (let [me (or me 'me)]
    `(:parent @~me)))

(defn fm-navig [what where & options]
  (apply md/fm-navig what where options))

(defn fasc "Search up from `where`, excluding where and following only parent links for `what`."
  [what where & options]
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

(defn mxu-find-type
  "Search matrix ascendants from node 'me' for first with given tag"
  [me type]
  (assert me)
  (fasc (fn [visited]
          (= type (mx-type visited))) me))

(defmacro mdv!
  "Search matrix ascendents from node 'me' looking for `what`, and extract `slot`"
  [what slot & [me]]
  (let [me (or me 'me)]
    `(tiltontec.model.core/mget (tiltontec.model.core/fm! ~what ~me) ~slot)))

;;; --- debug --------------------------

(defmacro with-mx-trace [target & body]
  `(binding [cb/*mx-trace* ~target]
     ~@body))

(defn mxtrc [& bits]
  (apply diag/mxtrc bits))

(defmacro with-minfo [minfo-body & body]
  `(binding [cb/*mx-minfo* (fn [~'me]
                             ~minfo-body)]
     ~@body))

(defmacro as-ignored [expr]
  (list 'do (symbol "#_") expr))

(comment
  (prn 1 (as-ignored [:x 1]) 2))

(defmacro with-minfo-std [& body]
  `(binding [cb/*mx-minfo* nil]
     ~@body))



(defn minfo [me]
  (cb/minfo me))

(defn cinfo [c]
  (cb/cinfo c))
