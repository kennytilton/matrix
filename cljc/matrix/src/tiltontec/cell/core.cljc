(ns tiltontec.cell.core
  (:require

    [clojure.string :as str]
    [tiltontec.util.core
     :refer [any-ref? type-of err rmap-setf rmap-meta-setf pln]]

    ;#?(:clj [taoensso.tufte :as tufte :refer :all]
    ;   :cljs [taoensso.tufte :as tufte :refer-macros [defnp p profiled profile]])
    #?(:cljs [tiltontec.util.base
              :refer [type-cljc]
              :refer-macros [trx wtrx prog1 *trx?* def-rmap-slots def-rmap-meta-slots]]
       :clj  [tiltontec.util.base :refer :all])

    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [c-optimized-away? c-formula? c-value c-optimize
                      c-unbound? c-input? unbound c-md-name
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state *pulse* c-pulse-observed
                      *call-stack* *defer-changes* *custom-propagator*
                      c-rule c-me c-value-state c-callers
                      c-synapses unfin-biz-build *causation*
                      c-synaptic? c-pulse  c-ephemeral? c-slot c-slot-name
                      *depender* *finalize* *within-integrity*
                      *one-pulse?* *dp-log* *unfinished-business* pulse-initial
                      *c-prop-depth* md-slot-owning? c-lazy] :as cty])

    #?(:clj
       [tiltontec.cell.observer :refer :all]
       :cljs [tiltontec.cell.observer
              :refer-macros [fn-obs]
              :refer []])

    [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint cl-format]]
    #?(:clj
       [tiltontec.cell.integrity :refer :all]
       :cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]
              :refer []])
    [tiltontec.cell.evaluate :refer [c-get <cget c-value-assume ensure-value-is-current]]))

;;#?(:cljs (set! *print-level* 3))

; todo: stand-alone cells with observers should be observed when they are made


(def +valid-input-options+
  #{:obs :watch :slot :ephemeral? :unchanged-if
    :value :input? :debug :finalizer})
(def +valid-formula-options+
  #{:obs :watch :slot :input? :lazy :optimize :ephemeral? :unchanged-if
    :model :synaptic? :synapse-id
    :code :value :rule :async? :and-then? :debug :finalizer})

(defn c-options-canonicalize [options allowed]
  (loop [[k v & more] options
         res nil
         observer? false]
    (cond
      (nil? k) (reverse res)
      :else (do
              (assert (some #{k} allowed) (str "Cell option invalid: " k ". Only allowed are: " allowed))
              (when (and observer? (some #{k} [:obs :watch]))
                (err "make-c-formula> options include multiple :watch or :obs. Supply just one."))

              (recur more (conj res (case k
                                      :watch :obs
                                      k) v) (or observer? (some #{k} [:obs :watch])))))))

(defn make-cell [& kvs]
  (let [options (apply hash-map (c-options-canonicalize kvs
                                  +valid-input-options+))]
    (#?(:clj ref :cljs atom)
      (merge {:value              unbound
                  ::cty/state              :nascent
                  :pulse              nil
                  :pulse-last-changed nil
                  :pulse-observed     nil
                  :callers            #{}
                  :synapses           #{}                   ;; these stay around between evaluations
                  ;; todo: if a rule branches away from a synapse
                  ;;       it needs to be GCed so it starts fresh
                  :lazy               false                 ;; not a predicate (can hold, inter alia, :until-asked)
                  :ephemeral?         false
                  :input?             true}
            options)
      :meta {:type :tiltontec.cell.base/cell})))
#_
(defn make-cell [& kvs]
  (let [options (apply hash-map kvs)]
    (#?(:clj ref :cljs atom) (merge {:value              unbound
                                     ::cty/state         :nascent
                                     :pulse              nil
                                     :pulse-last-changed nil
                                     :pulse-observed     nil
                                     :callers            #{}
                                     :synapses           #{} ;; these stay around between evaluations
                                     ;; todo: if a rule branches away from a synapse
                                     ;;       it needs to be GCed so it starts fresh
                                     :lazy               false ;; not a predicate (can hold, inter alia, :until-asked)
                                     :ephemeral?         false
                                     :input?             true}
                               options)
      :meta {:type :tiltontec.cell.base/cell})))

(defn make-c-formula [& kvs]
  (let [options (apply hash-map (c-options-canonicalize kvs
                                  +valid-formula-options+))
        rule (:rule options)]
    (assert rule)
    (assert (fn? rule))


    (#?(:clj ref :cljs atom) (merge {:value              unbound
                                     ::cty/state         :nascent ;; s/b :unbound?
                                     :pulse              nil
                                     :pulse-last-changed nil
                                     :pulse-observed     nil
                                     :callers            #{}
                                     :useds              #{}
                                     :lazy               false
                                     :ephemeral?         false
                                     :optimize           true ;; this can also be :when-not-nil
                                     :input?             false} ;; not redundant: can start with rule, continue as input

                               options)
      :meta {:type :tiltontec.cell.base/c-formula})))

;;___________________ constructors _______________________________
;; I seem to have created a zillion of these, but I normally
;; use just cI, cF, and cFn (which starts out as cF and becomes cI).
;; 

(defmacro c-fn-var [[c] & body]
  `(fn [~c]
     (let [~'me (c-model ~c)
           ~'_cell ~c
           ~'_slot-name (c-slot ~c)
           ~'_cache (c-value ~c)]
       ~@body)))

(defmacro c-fn-var-ex [[c] & body]
  `(fn [~c]
     (let [~'me (c-model ~c)
           ~'_cell ~c
           ~'_slot-name (c-slot ~c)
           ~'_cache (c-value ~c)]
       ~@body)))

(defmacro c-fn [& body]
  `(c-fn-var (~'slot-c#) ~@body))

(defmacro c-fn-ex [& body]
  `(c-fn-var-ex (~'slot-c#) ~@body))

(defmacro cF [& body]
  `(make-c-formula
     :code '~body
     :value unbound
     :rule (c-fn ~@body)))

(defmacro cF+ [[& options] & body]
  `(make-c-formula
     ~@options
     :code '~body
     :value unbound
     :rule (c-fn ~@body)))

(defmacro cFn [& body]
  `(make-c-formula
     :code '(without-c-dependency ~@body)
     :input? true
     :value unbound
     :rule (c-fn (without-c-dependency ~@body))))

(defmacro cF+n [[& options] & body]
  `(make-c-formula
     ~@options
     :code '(without-c-dependency ~@body)
     :input? true
     :value unbound
     :rule (c-fn (without-c-dependency ~@body))))

(defmacro c_Fn [& body]
  `(make-c-formula
     :code '(without-c-dependency ~@body)
     :input? true
     :lazy :until-asked
     :value unbound
     :rule (c-fn (without-c-dependency ~@body))))

(defmacro cFn-dbg [& body]
  `(make-c-formula
     :code '(without-c-dependency ~@body)
     :input? true
     :debug true
     :value unbound
     :rule (c-fn (without-c-dependency ~@body))))

(defmacro cFn-until [args & body]
  `(make-c-formula
     :optimize :when-value-t
     :code '~body
     :input? true
     :value unbound
     :rule (c-fn ~@body)
     ~@args))

(defmacro cFonce [& body]
  `(make-c-formula
     :code '(without-c-dependency ~@body)
     :input? nil
     :value unbound
     :rule (c-fn (without-c-dependency ~@body))))

(defmacro c_1 [& body]
  `(make-c-formula
     :code '(without-c-dependency ~@body)
     :input? nil
     :lazy true
     :value unbound
     :rule (c-fn (without-c-dependency ~@body))))

(defmacro cF1 [& body]
  `(cFonce ~@body))

(defmacro cFdbg [& body]
  `(make-c-formula
     :code '~body
     :value unbound
     :debug true
     :rule (c-fn ~@body)))

(defmacro cF_ [[& options] & body]
  `(make-c-formula
     ~@options
     :code '~body
     :value unbound
     :lazy true
     :rule (c-fn ~@body)))

(defmacro c_F [[& options] & body]
  "Lazy until asked, then eagerly propagating"
  `(make-c-formula
     ~@options
     :code '~body
     :value unbound
     :lazy :until-asked
     :rule (c-fn ~@body)))

(defmacro c_Fdbg [& body]
  "Lazy until asked, then eagerly propagating"
  `(make-c-formula
     :code '~body
     :value unbound
     :lazy :until-asked
     :rule (c-fn ~@body)
     :debug true))

;; todo add validation somewhere of lazy option

(defmacro c-formula [[& kvs] & body]
  `(make-c-formula
     :code '~body                                           ;; debug aid
     :value unbound
     :rule (c-fn ~@body)
     ~@keys))

(defmacro cf-freeze [& [value]]
  (let [value-ref (or value '_cache)]
    `(do
       (rmap-setf [:optimize ~'_cell] :freeze)
       ~value-ref)))

(defmacro with-c-associating [& body]
  `(let [curr# (if (= ~'_cache tiltontec.cell.base/unbound) {} ~'_cache)]
     (if-let [key-values# (do ~@body)]
       (merge curr# (apply hash-map key-values#))
       curr#)))

(defmacro with-c-accumulating [& body]
  `(let [curr# (if (= ~'_cache tiltontec.cell.base/unbound) 0 ~'_cache)]
     (if-let [[new-op# new-value#] (do ~@body)]
       (new-op# curr# new-value#)
       curr#)))

(defmacro with-c-conj [initial-value & body]
  `(let [curr# (if (= ~'_cache tiltontec.cell.base/unbound)
                 ~initial-value
                 ~'_cache)]
     (if-let [new-elt# (do ~@body)]
       (conj curr# new-elt#)
       curr#)))

(defmacro with-c-latest [& body]
  `(let [curr# (when-not (= ~'_cache tiltontec.cell.base/unbound) ~'_cache)]
     (or (do ~@body)
       curr#)))

(defn cI [value & option-kvs]
  (apply make-cell
    :value value
    :input? true
    option-kvs))

;; --- where change and animation begin -------

(defn cset!> [c new-value]
  "The moral equivalent of a Common Lisp SETF, and indeed
in the CL version of Cells SETF itself is the change API dunction."
  (assert c)

  (cond
    (not (c-input? c))
    (let [me (c-model c)]
      (err str
        "MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL> invalid mswap!/mset!/md-reset! to the property '" (c-slot-name c) "', which is not mediated by an input cell.\n"
        "..> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI', 'cFn', or 'cF+n'. eg: (make... :answer (cFn <computation>)).\n"
        "..> look for MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL in the Matrix Errors documentation for  more details.\n"
        "..> FYI: intended new value is [" new-value "].\n"
        "..> FYI: the non-input cell is " @c "\n"
        "..> FYI: instance is of type " (type-cljc me) ".\n"
        "..> FYI: full instance is " @me "\n"
        "..> FYI: instance meta is " (meta me) "\n."))

    *defer-changes*
    (let [slot (c-slot-name c)
          me (c-model c)]
      (err
        "MXAPI_UNDEFERRED_CHANGE> undeferred mswap!/mset!/md-reset! to the property '" slot "' by an observer detected."
        "...> such mutations must be wrapped by WITH-INTEGRITY, must conveniently with macro WITH-CC."
        "...> look for MXAPI_UNDEFERRED_CHANGE in the Errors documentation for  more details.\n"
        "...> FYI: intended new value is [" new-value "]; current value is [" (get @me slot :no-such-slot) "].\n"
        "...> FYI: instance is of type " (type-cljc me) ".\n"
        "...> FYI: full instance is " @me "\n"
        "...> FYI: instance meta is " (meta me) "\n.")
      #_(err (cl-format true "MXAPI_UNDEFERRED_CHANGE> change to ~s must be deferred by wrapping it in WITH-INTEGRITY"
               (c-slot c))))
    ;-----------------------------------
    (some #{(c-lazy c)} [:once-asked :always true])
    (c-value-assume c new-value nil)
    ;-------------------------------------------
    :else
    (do                                                     ;; tufte/p :wi-cvassume-sync
      (#?(:clj dosync :cljs do)
        (with-integrity (:change (c-slot c))
          ;;(prn :inside-wi!!!-cval-assuming new-value)
          (c-value-assume c new-value nil))))))

(defn c-reset! [c new-value]
  (cset!> c new-value))

(defn cswap!> [c swap-fn & swap-fn-args]
  (cset!> c (apply swap-fn (<cget c) swap-fn-args)))

(defn c-swap! [c swap-fn & swap-fn-args]
  (cset!> c (apply swap-fn (<cget c) swap-fn-args)))


(defmacro c-reset-next! [f-c f-new-value]
  "Observers should have side-effects only outside the
cell-mediated model, but it can be useful to have an observer
kick off further change to the model. To achieve this we
allow an observer to explicitly queue a c-reset! for 
execution as soon as the current change is manifested."
  `(cond
     (not *within-integrity*)
     ;; todo new error to test and document
     (throw (#?(:clj Exception. :cljs js/Error.) "c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."
              (c-slot ~f-c)))
     ;---------------------------------------------
     :else
     (ufb-add :change
       [:c-reset-next!
        (fn [~'opcode ~'defer-info]
          (let [c# ~f-c
                new-value# ~f-new-value]
            (call-c-reset-next! c# new-value#)))])))

(defmacro cset-next!>
  "Completely untested!!!!!!!!!!!!!!!"
  [f-c f-new-value]
  `(c-reset-next! ~f-c ~f-new-value))


(defn call-c-reset-next! [c new-value]
  (cond
    ;;-----------------------------------
    (some #{(c-lazy c)} [:once-asked :always true])
    (c-value-assume c new-value nil)
    ;;-------------------------------------------
    :else
    (#?(:cljs do :clj dosync)
      (c-value-assume c new-value nil))))

(defn call-with-mx [fn]
  (binding [*pulse* (pulse-initial)
            *within-integrity* false
            *unfinished-business* (unfin-biz-build)
            *causation* '()
            *call-stack* nil
            *depender* nil
            *defer-changes* false
            *finalize* false
            *custom-propagator* nil
            *c-prop-depth* 0
            *one-pulse?* false
            *dp-log* false]
    (fn)))

(defmacro with-mx [&  body]
  `(call-with-mx
     (fn [] ~@body)))

;;; --- dag dump utility ----------------------------------------


(def ^:dynamic *dag-depth*
  "How far we are in edges from the starting node."
  0)

(def ^:dynamic *dag-prn-len*
  "How many edges to follow from users/callers."
  5)

(def +dag-visited+
  "Which DAG nodes have been dumped so far."
  (atom #{}))

(defn dag-prn [& os]
  (let [path (apply str (repeat *dag-depth* ".|"))]
    (apply println path os)))

(def ^:dynamic *dag-node-only-printer*
  (fn [tag c] (dag-prn tag :PM! (c-slot-name c) :of (c-md-name c))))

(declare dag-dump-1)

(defn dag-dump-callers [c]
  (let [ccs (take (or *dag-prn-len* 999)
              (c-callers c))]
    (when (seq ccs)
      (binding [*dag-depth* (inc *dag-depth*)]
        (doseq [cc ccs]
          ;; (dag-prn :used-by (c-slot-name cc) :of (c-md-name cc))
          (dag-dump-1 :used-by cc))))))
(def ^:dynamic *dag-callers-printer* dag-dump-callers)

(defn dag-dump-useds [c]
  (let [ccs (take (or *dag-prn-len* 999)
              (c-useds c))]
    (when (seq ccs)
      (binding [*dag-depth* (inc *dag-depth*)]
        (doseq [cc ccs]
          ;; (dag-prn :using (c-slot-name cc) :of (c-md-name cc))
          (dag-dump-1 :using cc))))))
(def ^:dynamic *dag-useds-printer* dag-dump-useds)

(defn dag-dump-1 [tag c]
  (cond
    (contains? @+dag-visited+ c)
    (dag-prn (str/upper-case (str tag ": "(c-slot-name c) "/" (c-md-name c))))
    :else (do
            (swap! +dag-visited+ conj c)
            (when-let [p *dag-node-only-printer*]
              (p tag c))
            (when-let [p *dag-callers-printer*]
              (p c))
            (when-let [p *dag-useds-printer*]
              (p c)))))

(defn dag-dump [tag c]
  (reset! +dag-visited+ #{})
  (binding [*dag-depth* 0]
    (dag-dump-1 tag c)))
