(ns tiltontec.model.core
  #?(:cljs (:require-macros
             [tiltontec.model.core :refer [cFkids with-par]]))
  (:require
    [clojure.set :refer [difference]]
    #?(:cljs [tiltontec.util.base
              :refer [mx-type]
              :refer-macros [trx prog1 *trx?* def-rmap-props]]
       :clj  [tiltontec.util.base
              :refer :all])
    [tiltontec.util.core
     :refer [any-ref? type-of err rmap-setf rmap-meta-setf pln]]
    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                      c-unbound? c-input?
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state *pulse* c-pulse-observed
                      *call-stack* *defer-changes* unbound
                      c-rule c-me c-value-state c-callers *causation*
                      c-synaptic? c-pulse c-pulse-last-changed c-ephemeral? c-prop c-props
                      *depender* *quiesce*
                      *c-prop-depth* md-prop-owning? c-lazy] :as cty])
    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]]
       :clj  [tiltontec.cell.integrity :refer [with-integrity]])

    [tiltontec.cell.observer
     :refer [observe]]

    [tiltontec.cell.evaluate :refer [md-quiesce md-quiesce-self]]

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF+ c-reset-next! cFonce cFn]
              :refer [cI c-reset! make-cell]]
       :clj  [tiltontec.cell.core :refer :all])

    [tiltontec.cell.evaluate :refer [c-get c-awaken md-quiesce]]
    [tiltontec.model.base :refer [md-cell md-install-cell md-awaken]]
    ))

(def matrix
  "Each app will populate this with the root of its application matrix."
  (atom nil))

(defn md-name [me]
  (:name @me))

(defn mget [me prop]
  (assert me (str "mget passed nil for me accessing prop: " prop))
  (assert (any-ref? me) (str "mget passed non-model for me accessing prop: " prop ": " me))
  (if (not (contains? @me prop))
    (do ;(prn :mget>nosuchprop!!! prop :me @me)
      (err str
        "MXAPI_ILLEGAL_GET_NO_SUCH_prop> mget was attempted on non-existent prop \"" prop "\"."
        "\n...> FYI: known props are" (keys @me)
        "\n...> FYI: use mget? if prop might not exist."))
    (do                                                     ;; when (any-ref? me)
      (if-let [c (md-cell me prop)]
        (c-get c)
        (prop @me)))))

(defn mget? [me prop]
  (assert me (str "mget passed nil for me accessing prop: " prop))
  (assert (any-ref? me) (str "mget passed non-model for me accessing prop: " prop ": " me))
  (when (contains? @me prop)
    (mget me prop)))

(comment
  (let [m (make ::test
            :answer 42)]
    (mget m :answerx)))

(defmacro def-mget [reader-prefix & props]
  `(do
     ~@(map (fn [prop#]
              `(defn ~(symbol (str (or reader-prefix "") (name prop#)))
                 [~'ref]
                 (tiltontec.model.core/mget ~'ref ~(keyword (name prop#))))) props)))

(def ^:dynamic *parent* nil)

(defmacro with-par [meform & body]
  `(binding [tiltontec.model.core/*parent* ~meform]
     ~@body))

;;; --- accessors ----

(defn mset! [me prop new-value]
  ;; (println :md-reset prop )
  (assert me)
  (if-let [c (md-cell me prop)]
    (do
      (c-reset! c new-value))
    (do
      (if (contains? @me prop)
        (do
          (err str
            "MXAPI_ILLEGAL_MUTATE_NONCELL> invalid mswap!/mset!/md-reset! to the property '" prop "', which is not mediated by any cell.\n"
            "...> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI'. eg: (make... :answer (cI 42)).\n"
            "...> look for MXAPI_ILLEGAL_MUTATE_NONCELL in the Errors documentation for  more details.\n"
            "...> FYI: intended new value is [" new-value "]; initial value was [" (get @me prop :no-such-prop) "].\n"
            "...> FYI: instance is of type " (mx-type me) ".\n"
            "...> FYI: full instance is " @me "\n"
            "...> FYI: instance meta is " (meta me) "\n.")
          )
        (err str
          "MXAPI_ILLEGAL_MUTATE_NO_SUCH_prop> mswap!/mset!/md-reset! was attempted to non-existent prop \"" prop "\".\n"
          "...> FYI: known props are" (keys @me))
        ))))

(defn mreset!
  "alternate syntax conforming with clojure terminology"
  [me prop new-value]
  (mset! me prop new-value))

(defn md-reset! "deprecated. use mset!"
  [me prop new-value]
  (mset! me prop new-value))

(defn md-set! "deprecated. use mset!"
  [me prop new-value]
  (mset! me prop new-value))

(defn mswap! [me prop swap-fn & swap-fn-args]
  (mset! me prop (apply swap-fn (mget me prop) swap-fn-args)))

(defn backdoor-reset!? [me prop new-value]
  (if-let [c (md-cell me prop)]
    (c-reset! c new-value)
    (rmap-setf [prop me] new-value)))

(defn backdoor-reset! [me prop new-value]
  (rmap-setf [prop me] new-value))

(defn make [& arg-list]
  (cond
    (odd? (count arg-list)) (apply make :mx-type arg-list)
    :else
    (#?(:clj dosync :cljs do)
      ;;(println :md-making (nth arg-list 1))
      (let [iargs (apply hash-map arg-list)
            meta-keys #{:mx-type :on-quiesce}
            me (#?(:clj ref :cljs atom)
                 (merge {:parent *parent*}
                   (->> arg-list
                     (partition 2)
                     (filter (fn [[prop v]]
                               (not (some #{prop} meta-keys))))
                     (map (fn [[k v]]
                            (vector k (if (c-ref? v)
                                        unbound
                                        v))))
                     (into {})))
                 :meta {:state     :nascent
                        :mx-type      (get iargs :mx-type ::cty/model)
                        :on-quiesce (get iargs :on-quiesce)})]
        (assert (meta me))

        (rmap-meta-setf
          [:cz me]
          (->> arg-list
            (partition 2)
            (filter (fn [[prop v]]
                      (when-not (some #{prop} meta-keys)
                        (md-install-cell me prop v))))
            (map vec)
            (into {})))

        (with-integrity (:awaken me)
          (md-awaken me))

        me))))

;;; --- family ------------------------------------

(def mm-obj #?(:clj Object :cljs js/Object))

(defn md-kids [me] (mget me :kids))

(defn fm-kids-observe [me newk oldk c]
  (when-not (= oldk unbound)
    ;;(prn :fm-kids-observe)
    (let [lostks (difference (set oldk) (set newk))]
      (when-not (empty? lostks)
        (doseq [k lostks]
          ;;(prn :obs-k-not2be!! k)
          (md-quiesce k))))))

(defmethod observe [:kids ::family]
  [_ me newk oldk c]
  ;;(prn :observe-kids-family-method)
  (fm-kids-observe me newk oldk c))

(defmethod md-quiesce [::family]
  [me]
  ;;(prn :family-md-quiesce! me)
  (doseq [k (:kids @me)]
    (when (md-ref? k)
      ;;(prn :fm-md-quiesce-kid!)
      (md-quiesce k)))
  (md-quiesce-self me))

(defn md-par [me]
  (:parent @me))

(defmacro mpar [& [me]]
  (let [me (or me 'me)]
    `(:parent @~me)))

(defmacro mdv!
  "Search matrix ascendents from node 'me' looking for `what`, and extract `prop`"
  [what prop & [me]]
  (let [me (or me 'me)]
    `(mget (tiltontec.model.core/fm! ~what ~me) ~prop)))

(defn fm-navig=
  "Return true if 'poss' is the matrix reference we 'seek'

   There are 4 branches to this.

   'poss' is not a ref, return false
   'seek' is a fn?, we return result of invoke it with 'poss'
   'seek' is a keyword?, we return true if it is = with (:name poss)
   :else compare 'poss' and 'seek' directly using ="

  [seek poss]
  (assert (or (any-ref? poss) (string? poss))
    (str "poss not ref " (string? poss)))
  ;; (println :fm-navig= (fn? seek) (keyword? seek))
  (cond
    (not (any-ref? poss))                                   ;; string child of html label?
    (do (println :fm-navig=bailnotref poss)
        false)

    (fn? seek) (do                                          ;; (println :trying-fn)
                 (seek poss))
    (keyword? seek) (do
                      ;; (trx :fm-navig=sees seek (:name @poss) (mx-type poss))
                      (or (= seek (:name @poss))
                        (isa? (mx-type poss) seek)))
    :else (do (trx :fm-navig=-else-pplain=! seek)
              (= seek poss))))

(defn fasc
  "Search matrix ascendents for 'what', starting at 'where'

   See fm-navig= for options about 'what' can be

   if :me? is true, and (fm-navig= what where) return 'where'

   if (:parent @where) returns a parent, recurse up the family tree

   return an error when (:must? options) is true and we nothing is found"
  [what where & options]
  (when (and where what)
    (let [options (merge {:me? false :wocd? true}
                    (apply hash-map options))]
      (binding [*depender* (if (:wocd? options) nil *depender*)]
        (or (and (:me? options)
              (fm-navig= what where)
              where)

          (when-let [par (:parent @where)]
            (fasc what par
              :me? true))

          (when (:must? options)
            (err :fasc-must-failed what where options)))))))

(defn nextsib [mx]
  (without-c-dependency
    (loop [sibs (md-kids (md-par mx))]
      (when sibs
        (if (= mx (first sibs))
          (second sibs)
          (recur (rest sibs)))))))

(defn prevsib [mx]
  (without-c-dependency
    (loop [sibs (md-kids (md-par mx))]
      (when sibs
        (cond
          (= mx (first sibs)) nil
          (= mx (second sibs)) (first sibs)
          :default
          (recur (rest sibs)))))))

(defn fm-navig
  "Search matrix ascendents and descendents for 'what', starting at 'where'

   if :me? is true, and (fm-navig= what where) return 'where' (:me? is false by default)

   if :inside? is true, try kids recursively (after removing any listed in :skip option)

   if :up? is true, invoke fm-navig on ancestor (skipping 'where')"
  {:style/indent 1}
  [what where & options]
  ;;(println :fm-navig-entry (if (any-ref? where) [(:tag @where)(:class @where)] where) (any-ref? where))
  (when (and where what (any-ref? where))
    ;(println :w)
    (let [options (merge {:me? false, :inside? false, :up? true, :wocd? true ;; without-c-dependency
                          } (apply hash-map options))]
      ;;(println :fm-navig-opts options)
      ;(println :T)
      (binding [*depender* (if (:wocd? options) nil *depender*)]

        (when (any-ref? where)
          ;(println :f)
          (or (and (:me? options)
                (fm-navig= what where)
                where)

            (and (:inside? options)
              (if-let [kids (mget? where :kids)]
                (do
                  (trx nil :inside-kids!!! (:name @where))
                  (if-let [netkids (remove #{(:skip options)} kids)]
                    (do
                      (some #(fm-navig what %
                               :me? true
                               :inside? true
                               :up? false) netkids))
                    (trx nil :no-net-kids)))
                (trx nil :inside-no-kids (:name @where))))

            (and (:up? options)
              (when-let [par (:parent @where)]
                (fm-navig what par
                  :up? true
                  :me? true
                  :skip where
                  :inside? true)))

            (when (:must? options)
              (err :fm-navig-must-failed what where options))))))))

(defn fm!
  "Search matrix ascendents and descendents from node 'where', for 'what', throwing an error when not found"
  [what where]
  (fm-navig what where :me? false :inside? true :must? true :up? true))

(defn mxu-find-name
  "Search matrix ascendents from node 'where' looking for element with given name"
  [where name]
  (fm-navig #(= name (mget? % :name))
    where :me? false :up? true :inside? false))

(defmacro fmu [name & [me]]
  "Search matrix ascendents from node 'me' (defaulting to 'me in current scope) looking for element with given name"
  (let [me-ref (or me 'me)]
    `(let [name# ~name]
       (fm-navig #(= name# (mget? % :name))
         ~me-ref :me? false :up? true :inside? false))))

(defn mxu-find-id
  "Search matrix ascendents from node 'where' looking for element with given id"
  [where id]
  (fm-navig #(= id (mget? % :id))
    where :me? false :up? true :inside? false))

(defn mxu-find-type
  "Search matrix ascendants from node 'me' for first with given tag"
  [me type]
  (assert me)
  (fasc (fn [visited]
          (= type (mx-type visited))) me))

(defn fmi-w-class
  "Search matrix descendents from 'where' for first with given :class"
  [where class]
  (fm-navig #(when (any-ref? %)
               (= class (mget? % :class)))
    where :inside? true :up? false))

(defn mxi-find
  "Search matrix descendents from node 'where' for node with property and value"
  [where property value]
  (fm-navig #(when (any-ref? %)
               (= value (mget? % property)))
    where :inside? true :up? false))

(defn fmo
  "Search matrix ascendents from node 'me' for 'id-name', trying first as a name, then as an id"
  [me id-name]
  (or (mxu-find-name me id-name)
    (mxu-find-id me id-name)
    (throw (str "fmo> not id or name " id-name))))

(defn fmov
  "Use 'fmo' and extract :value (or prop indicated by :prop-name)"
  ([me id-name]
   (fmov me id-name :value))
  ([me id-name prop-name]
   (when-let [mx (fmo me id-name)]
     (if (contains? @mx prop-name)
       (mget mx prop-name)
       (throw (str "fmov> " id-name " lacks " prop-name " property"))))))

(defmacro the-kids
  "Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding"
  [& tree]
  `(binding [*parent* ~'me]
     (assert *parent*)
     (doall (remove nil? (flatten (list ~@tree))))))

(defmacro cFkids
  "Syntax sugar for formulae that define :kids props"
  [& tree]
  `(cF (assert ~'me "no me for cFkids")
     (the-kids ~@tree)))

(defn kid-values-kids
  "A pattern commonly employed in matrix applications is to define a :kid-factory on some
   'parent' cell, and use it to enrich the value extracted from the parent's kid cells.

   This function maps across the :kids-values, invoking the factory as it goes"
  [me x-kids]
  (let [k-key (mget me :kid-key)
        _ (assert k-key)
        x-kids (when (not= x-kids unbound)
                 (into {} (for [k x-kids]
                            [(k-key k) k])))
        k-factory (mget me :kid-factory)]
    (assert (and k-factory))

    #_(prn :kvk-loading (count (mget me :kid-values))
        (map :hn-id (mget me :kid-values)))

    (doall
      (map-indexed
        (fn [idx kid-value]
          (or (and x-kids (get x-kids kid-value))
            (binding [*parent* me]
              (k-factory me kid-value))))
        (mget me :kid-values)))))
