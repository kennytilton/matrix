(ns tiltontec.util.base
  (:require [clojure.string :as str]
            [clojure.spec.alpha :as s]))

#?(:cljs (enable-console-print!))

;; ---- debug print statement hacks ---------------------

(def ^:dynamic *trx?* true)

#_
(alter-var-root #'*trx?* not)

(def ^:dynamic *trc-ensure* nil)
(def ^:dynamic *trx-path-id* nil)
(def ^:dynamic *trxdepth* 0)
(def last-trc (atom 0)) ;; s/b universal time

(def +mx-sid+ (atom 0))

(defn mx-sid-next []
  (swap! +mx-sid+ inc))

(defn call-trc$ [s bits]
  (str s ": " #?(:cljs (str bits)
                 :clj (str/join ", " bits))))


(defn call-trc [s & os]
  ;; (break) ;; uncomment to escape loop
  (when *trx?*
    (when s
      (let [path (apply str (repeat *trxdepth* "."))]
        (println path (call-trc$ s os))))))

(defmacro trx [label & vals]
  `(call-trc ~(when (not (nil? label))
                (str label))
             ~@vals))

(defn call-wtrx [fn lo hi trxargs]
  (binding [*trxdepth* (inc *trxdepth*)]
    (cond
      (<= lo *trxdepth* hi)
      (apply call-trc trxargs)
      (> *trxdepth* hi)
      (throw (#?(:cljs js/Error. :clj Exception.)
               (str "wtrx exceeded max depth " hi ":"
                 (apply call-trc$ (first trxargs)
                   (rest trxargs))))))
    (fn)))

(defmacro wtrx [[lo hi & trxargs] & body]
  `(call-wtrx (fn [] ~@body) ~lo ~hi (list ~@trxargs)))

(defmacro prog1 [& body]
  `(let [result# ~(first body)]
     ~@(rest body)
     result#))

(defmacro b-when [var form & body]
  `(when-let [~var ~form]
     ~@body))

(defmacro unless [form & body]
  `(when-not ~form
     ~@body))

;; --- easy access to maps in refs ----

(defmacro def-rmap-props [reader-prefix & props]
  `(do
     ~@(map (fn [prop#]
              `(defn ~(symbol (str (or reader-prefix "")
                                   prop#))
                 [~'ref]
                 (~(keyword prop#) @~'ref))) props)))

(defmacro def-rmap-meta-props [reader-prefix & props]
  `(do
     ~@(map (fn [prop#]
              `(defn ~(symbol (str (or reader-prefix "")
                                   prop#))
                 [~'ref]
                 (~(keyword prop#) (meta ~'ref)))) props)))

(defn mx-type [it]
  (or (when-let [m (meta it)]
        (:mx-type m))
    (type it)))

(defn mx-type? [it type]
  (isa? (mx-type it) type))

(comment
  (def email-regex #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")
  (s/def :acct/email-type (s/and string? #(re-matches email-regex %)))

  (s/def :acct/acctid int?)
  (s/def :acct/first-name string?)
  (s/def :acct/last-name string?)
  (s/def :acct/email :acct/email-type)

  (s/def :acct/person (s/keys :req [:acct/first-name :acct/last-name :acct/email]
                        :opt [:acct/phone]))

  (let [reqd [:acct/first-name :acct/last-name :acct/email :acct/zip]]
    (s/def :acct/person-ex (s/keys :req (~@reqd)
                          :opt [:acct/phone])))

  (s/explain :acct/person-ex
    {:acct/first-name "Bugs"})

  (s/valid? :acct/person
    {:acct/first-name "Bugs"
     :acct/last-name "Bunny"
     :acct/email "bugs@example.com"
     :acct/zip "10023"})

  (let [product-reqs '[::name ::sales-price ::cost-of-sale]
        product-opts [::intro-date ::disco-date ::seasonality]]
    (s/def ::product [:req-un [::name] :opt-un [::intro-date ::disco-date ::seasonality]]))

  (s/valid? ::product
    {::name "test"
     ::intro-date 42})

  (s/def ::overrides (macros/skeys :opt-un (disj (conj product-reqs product-opts) ::name)))
  (s/def ::complete-product (macros/skeys :req-un products-reqs :opt-un product-opts))
  (s/def ::full-product (macros/skeys :req-un (concat product-reqs product-opts))) ; For specs, generate a product with everything, optional or not.
  (map (fn [[x y]] (and x (pos? y))) [true 1 2 4 5])
  (find-if even? [1 2 3])
  (some even? [1 2 3])
  (some (fn [n] (when (even? n) n)) [1 2 3])
  (some #(when (even? %) %) [1 2 3])
  )