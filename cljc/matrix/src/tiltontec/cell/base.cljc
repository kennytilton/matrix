(ns tiltontec.cell.base
  #?(:cljs (:require-macros [tiltontec.cell.base
                             :refer [un-stopped without-c-dependency]]))
  (:require
   [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint]]
   #?(:clj [clojure.string :as str])
   #?(:cljs [tiltontec.util.base :as utm
             :refer [mx-type mx-type?]
             :refer-macros [def-rmap-props]]
      :clj  [tiltontec.util.base :as utm
             :refer [def-rmap-props mx-type mx-type?]])
   #?(:cljs [tiltontec.util.core
             :refer [any-ref? mut-set!]
             :as ut]
      :clj  [tiltontec.util.core :refer [any-ref? mut-set!] :as ut])))

;; --- the Cells beef -----------------------
(defn pulse-initial []
  (#?(:clj ref :cljs atom) 0))

(def ^:dynamic *pulse* (pulse-initial))
(def ^:dynamic *custom-propagator* nil)
(def ^:dynamic *one-pulse?* false)
(def ^:dynamic *dp-log* false)

(defn pulse-now [] @*pulse*)

(defn cells-init []
  #?(:cljs (reset! *pulse* 0)
     :clj  (dosync
            (ref-set *pulse* 0))))

(def ^:dynamic *causation* '())
(def ^:dynamic *call-stack* nil)
(def ^:dynamic *depender*
  "*depender* let's us differentiate between the call stack and
and dependency. The problem with overloading *call-stack* with both roles
is that we miss cyclic reentrance when we use without-c-dependency in a
rule to get once behavior or just when fm-traversing to find someone"
  nil)

(def ^:dynamic *defer-changes* false)
(def +client-q-handler+ (atom nil))

(defonce unbound (gensym "unbound-cell-value"))
(defn when-bound [x]
  (when (not= x unbound) x))

(defn cache-value [cache]
  (when-bound cache))

(defonce uncurrent (gensym "uncurrent-formulaic-value"))

(def ^:dynamic *quiesce* false)

;;; --- unfinished business post state change ------------------------

(def +ufb-opcodes+ [:tell-dependents
                    :awaken
                    :client
                    :ephemeral-reset
                    :change])

(defn unfin-biz-build []
  (into {} (for [i +ufb-opcodes+]
             [i (#?(:cljs atom :clj ref) [])])))

(def ^:dynamic *unfinished-business*
  (unfin-biz-build))

;;; -----------------------------

(def ^:dynamic *within-integrity* false)

;; --- debug stuff -----------------------------

(def ^:dynamic *c-prop-depth* 0)

(def ^:dynamic *mx-trace* nil)
(def ^:dynamic *mx-minfo* nil)

(def ^:dynamic +stop+ (atom false))                         ;; emergency brake

(defn cells-reset
  ([] (cells-reset {}))
  ([options]
   (reset! *pulse* 0)
   (reset! +client-q-handler+ (:client-queue-handler options))))

(defmacro without-c-dependency [& body]
  `(binding [*depender* nil]
     ~@body))

(defn +cause []
  (first *causation*))

;; --- 19000 ----------------------------------

(defn c-stopper [why]
  (reset! +stop+ why))                                      ;; in webserver, make sure each thread binds this freshly

(def +c-stopper+ (atom c-stopper))

(defn c-stop
  ([] (c-stop true))
  ([why]
   (@+c-stopper+ why)))

(defn c-stopped []
  @+stop+)

(defmacro un-stopped [& body]
  `(when-not @+stop+
     ~@body))

(defn ustack$ [tag]                                         ;; debug aid
  (str tag "ustack> " (vec (map (fn [c] (:prop @c)) *call-stack*))))

(defn c-break [& args]
  (when-not +stop+
    (println #_ut/err (str args))))

(defn c-warn [& args]
  (when-not +stop+
    (println (apply str "WARNING: " args))))

;; ------------------------------------------------------

(derive ::model ::object)
(derive ::cell ::object)
(derive ::c-formula ::cell)

(defn c-formula? [c]
  (mx-type? c ::c-formula))

(defn c-ref? [x]
  (and (any-ref? x)
       (mx-type? x ::cell)))

(def-rmap-props c-
  me prop state input? rule pulse pulse-last-changed pulse-watched
  useds users callers optimize ephemeral? code
  lazy synapses synaptic? async?)

(defn dpc [cell & bits]
  (when (:debug @cell)
    (apply prn bits)))

(defn c-code$ [c]
  (with-out-str (binding [*print-level* 20]
                  (pprint (:code @c)))))

(defn c-value [c]
  (assert (any-ref? c))
  (cond
    (and (c-ref? c)
         (map? @c)) (:value @c)
    :else @c))

(declare cdbg)

(defn c-optimized-away? [c]
  (when-not (c-ref? c)
    (prn :caway-notc c (meta c)))
  (assert (c-ref? c) "c-awy?-got-not-c")
  (or (not (map? @c))
      (not (contains? @c ::state))
      (= :optimized-away (::state @c))))

(defn c-model [rc]
  (:me @rc))

(defn c-md-name [c]
  (if-let [md (c-model c)]
    (or (:name @md)
        "anon")
    "no-md"))

(defn c-prop-name [rc]
  (:prop @rc))

(defn c-value-state [rc]
  (let [v (c-value rc)]
    (cond
      (= v unbound) :unbound
      (= v uncurrent) :uncurrent
      :else :valid)))

(defn c-unbound? [rc]
  (= :unbound (c-value-state rc)))

(defn c-valid? [rc]
  (= :valid (c-value-state rc)))

(defn c-pulse-unwatched? [c]
  (if-let [pulse-watched (c-pulse-watched c)]
    (> @*pulse* pulse-watched)
    true))

;; --- dependency maintenance --------------------------------

(defn dependency-record [used]
  (when-not (c-optimized-away? used)
    (mut-set! *depender* :useds
              (conj (c-useds *depender*) used))
    (mut-set! used :callers
              (conj (c-callers used) *depender*))))

(defn dependency-drop [used caller]
  (mut-set! caller :useds (disj (c-useds caller) used))
  (mut-set! used :callers (disj (c-callers used) caller)))

(defn unlink-from-callers [used]
  (doseq [caller (c-callers used)]
    (dependency-drop used caller)))

(defn unlink-from-used
  "Tell dependencies they need not notify us when they change, then clear our record of them."
  [caller _why]
  (doseq [used (c-useds caller)]
    (dependency-drop used caller)))

;; debug aids --------------

(defn c-props [c k]
  (assert (c-ref? c))
  (set (map c-prop (k @c))))

;; --- defmodel rizing ---------------------

(defn md-ref? [x]
  ;;(trx :md-ref?-sees x)
  (any-ref? x))
;; hhack (mx-type? x ::model)

;; --- mdead? ---

(defn md-state [me]
  (::state (meta me)))

(defn mdead? [me]
  (= :dead (md-state me)))

;;---

#?(:clj
   (comment
     (defn filter-vector-func [coll ?s]
       (reduce
        (fn [x y]
          (prn :y y)
          (let [{:keys [id name surname]} y]
            (prn :keys id name surname)
            (if (str/includes? (str/lower-case name) (str/lower-case ?s))
              (conj x id name)
              x)))
        []
        coll))
     (filter-vector-func {:id 1 :name "ali" :surname "veli"} "a")))

(defn md-prop-owning? [_class-name _prop-name]
  ;; hhack
  false)

(defn c-debug?
  ([c] (c-debug? c :annon))
  ([c tag]
   (when-let [dbg (:debug @c)]
     (or (true? dbg)
         (= dbg tag)
         (and (coll? dbg) (some #{tag} dbg))))))

(defn minfo [me]
  (cond
    *mx-minfo* (do
                 (assert (fn? *mx-minfo*))
                 (*mx-minfo* me))
    :else (cond
            (nil? me) :NIL-MD
            (not (any-ref? me)) :NOT-ANY-REF
            (not (md-ref? me)) :NOT-MD
            :else [(or (:name @me) :anon)
                   (meta me)])))

(defn cinfo [c]
  (cond
    (nil? c) :NIL-C
    (not (any-ref? c)) :NOT-ANY-REF-C
    (not (c-ref? c)) :NOT-C-REF
    :else [(c-prop-name c)
           (c-md-name c)
           (:mx-sid @c)
           [:pulse (:pulse @c)]
           [:val-state (c-value c) (c-value-state c)]
           [:useds (count (:useds @c))
            :callers (count (:callers @c))]
           (mx-type c)
           (c-async? c)]))

(defn cdbg [c tag & bits]
  (when c
    (assert (or (= c true)
                (c-ref? c)) (str "cdbg> passed non c-ref? " tag (if (any-ref? c)
                                                                  @c c)))
    (assert (keyword? tag) (str "cdbg> second parame s/b keyword tag, got: " tag))
    (when (or (= c true) (:debug @c))
      (prn)
      (apply prn :cdbg> tag :cinfo (cinfo c) bits))))
