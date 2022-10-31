(ns tiltontec.model.core
  #?(:cljs (:require-macros
             [tiltontec.model.core :refer [cFkids with-par]]))
  (:require
    [clojure.set :refer [difference]]
    #?(:cljs [tiltontec.util.base
              :refer-macros [trx prog1 *trx?* def-rmap-slots]]
       :clj  [tiltontec.util.base
              :refer :all])
    [tiltontec.util.core
     :refer [any-ref? type-of err rmap-setf rmap-meta-setf pln]]
    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency]
              :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                      c-unbound? c-input? ia-type? ia-type
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state +pulse+ c-pulse-observed
                      *call-stack* *defer-changes* unbound
                      c-rule c-me c-value-state c-callers caller-ensure
                      unlink-from-callers *causation*
                      c-synaptic? caller-drop
                      c-pulse c-pulse-last-changed c-ephemeral? c-slot c-slots
                      *depender* *not-to-be*
                      *c-prop-depth* md-slot-owning? c-lazy] :as cty])
    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]]
       :clj  [tiltontec.cell.integrity :refer [with-integrity]])

    [tiltontec.cell.observer
     :refer [observe]]

    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF+ c-reset-next! cFonce cFn]
              :refer [cI c-reset! make-cell]]
       :clj  [tiltontec.cell.core :refer :all])

    [tiltontec.cell.evaluate :refer [c-get c-awaken not-to-be]]
    [tiltontec.model.base :refer [md-cell md-install-cell md-awaken]]
    ))

(def matrix
  "Each app will populate this with the root of its application matrix."
  (atom nil))

(defn md-name [me]
  (:name @me))

(defn md-get [me slot]
  ;; (trx :md-get slot me)
  (assert me (str "md-get passed nil for me accessing slot: " slot))
  (when (any-ref? me)
    (if-let [c (md-cell me slot)]
      (c-get c)
      (slot @me))))

(defn mget [me slot] (md-get me slot))

(defn md-getx [tag me slot]
  (md-get me slot)
  #_(wtrx [0 100 (str "md-getx " tag slot (ia-type me))]
      (if-let [c (md-cell me slot)]
        (c-get c)
        (slot @me))))

(def ^:dynamic *par* nil)

(defmacro with-par [meform & body]
  `(binding [tiltontec.model.core/*par* ~meform]
     ~@body))

;;; --- accessors ----

(defn md-reset! [me slot new-value]
  ;; (println :md-reset slot )
  (assert me)
  (if-let [c (md-cell me slot)]
    (do                                                     ;; (println :gotc!)
      (c-reset! c new-value))
    (do
      ;(println :reset-meta slot (meta me))
      ;(println :reset-meta-flushed slot (:cells-flushed (meta me)))
      ;(println :cz (:cz (meta me)))
      (if (contains? @me slot)
        (do
          (err str
            "MXAPI_ILLEGAL_MUTATE_NONCELL> invalid mswap!/mset!/md-reset! to the property '" slot "', which is not mediated by any cell.\n"
            "...> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI'. eg: (make... :answer (cI 42)).\n"
            "...> look for MXAPI_ILLEGAL_MUTATE_NONCELL in the Errors documentation for  more details.\n"
            "...> FYI: intended new value is [" new-value "]; initial value was [" (get @me slot :no-such-slot) "].\n"
            "...> FYI: instance is of type " (type-cljc me) ".\n"
            "...> FYI: full instance is " @me "\n"
            "...> FYI: instance meta is " (meta me) "\n.")
          )
        (err str
          "MXAPI_ILLEGAL_MUTATE_NOSUCHSLOT> mswap!/mset!/md-reset! was attempted to non-existent slot \"" slot "\".\n"
          "...> FYI: known slots are" (keys @me))
          ))))

(defn mset! [me slot new-value]
  (md-reset! me slot new-value))

(defn mswap! [me slot swap-fn & swap-fn-args]
  (mset! me slot (apply swap-fn (mget me slot) swap-fn-args)))

(defn backdoor-reset!? [me slot new-value]
  (if-let [c (md-cell me slot)]
    (c-reset! c new-value)
    (rmap-setf [slot me] new-value)))

(defn backdoor-reset! [me slot new-value]
  (rmap-setf [slot me] new-value))

(defn make [& arg-list]
  ;; (prn :make-entry (count arg-list) (first arg-list))
  (cond
    (odd? (count arg-list)) (apply make :type arg-list)
    :else
    (#?(:clj dosync :cljs do)
      ;;(println :md-making (nth arg-list 1))
      (let [iargs (apply hash-map arg-list)
            me (#?(:clj ref :cljs atom)
                 (merge {:par *par*}
                   (->> arg-list
                     (partition 2)
                     (filter (fn [[slot v]]
                               (not (= :type slot))))
                     (map (fn [[k v]]
                            (vector k (if (c-ref? v)
                                        unbound
                                        v))))
                     (into {})))
                 :meta {:state :nascent
                        :type (get iargs :type ::cty/model)})]
        (assert (meta me))
        #_(when-not (:par @me)
            (println :no-par!!!! me))
        (rmap-meta-setf
          [:cz me]
          (->> arg-list
            (partition 2)
            (filter (fn [[slot v]]
                      (md-install-cell me slot v)))
            (map vec)
            (into {})))

        (with-integrity (:awaken me)
          (md-awaken me)
          #_(println :md-awaken-complete))
        me))))

;;; --- family ------------------------------------

(def mm-obj #?(:clj Object :cljs js/Object))

(defn md-kids [me] (md-get me :kids))

(defn fm-kids-observe [me newk oldk c]
  (when-not (= oldk unbound)
    ;;(prn :fm-kids-observe)
    (let [lostks (difference (set oldk) (set newk))]
      (when-not (empty? lostks)
        (doseq [k lostks]
          ;;(prn :obs-k-not2be!! k)
          (not-to-be k))))))

(defmethod observe [:kids ::family]
  [_ me newk oldk c]
  ;;(prn :observe-kids-family-method)
  (fm-kids-observe me newk oldk c))

(defmethod not-to-be [::family]
  [me]
  ;;(prn :family-not-to-be! me)
  (doseq [k (:kids @me)]
    (when (md-ref? k)
      ;;(prn :fm-not-to-be-kid!)
      (not-to-be k)))
  (not-to-be-self me))

(defn mx-par [me]
  (:par @me))

(defn fget= [seek poss]
  (assert (or (any-ref? poss) (string? poss))
    (str "poss not ref " (string? poss)))
  ;; (println :fget= (fn? seek) (keyword? seek))
  (cond
    (not (any-ref? poss))                                   ;; string child of html label?
    (do (println :fget=bailnotref poss)
        false)

    (fn? seek) (do                                          ;; (println :trying-fn)
                 (seek poss))
    (keyword? seek) (do
                      ;; (trx :fget=sees seek (:name @poss) (ia-type poss))
                      (or (= seek (:name @poss))
                        (isa? (ia-type poss) seek)))
    :else (do (trx :fget=-else-pplain=! seek)
              (= seek poss))))

(defn fasc [what where & options]
  (when (and where what)
    (let [options (merge {:me? false :wocd? true}
                    (apply hash-map options))]
      (binding [*depender* (if (:wocd? options) nil *depender*)]
        (or (and (:me? options)
                 (fget= what where)
                 where)

          (when-let [par (:par @where)]
            (fasc what par
              :me? true))

          (when (:must? options)
            (err :fasc-must-failed what where options)))))))

(defn nextsib [mx]
  (without-c-dependency
    (loop [sibs (md-kids (mx-par mx))]
      (when sibs
        (if (= mx (first sibs))
          (second sibs)
          (recur (rest sibs)))))))

(defn prevsib [mx]
  (without-c-dependency
    (loop [sibs (md-kids (mx-par mx))]
      (when sibs
        (cond
          (= mx (first sibs)) nil
          (= mx (second sibs)) (first sibs)
          :default
          (recur (rest sibs)))))))

(defn fget [what where & options]
  ;;(println :fget-entry (if (any-ref? where) [(:tag @where)(:class @where)] where) (any-ref? where))
  (when (and where what (any-ref? where))
    ;(println :w)
    (let [options (merge {:me? false, :inside? false, :up? true, :wocd? true ;; without-c-dependency
                          } (apply hash-map options))]
      ;;(println :fget-opts options)
      ;(println :T)
      (binding [*depender* (if (:wocd? options) nil *depender*)]

        (when (any-ref? where)
          ;(println :f)
          (or (and (:me? options)
                   (fget= what where)
                   where)

            (and (:inside? options)
                 (if-let [kids (md-get where :kids)]
                   (do
                     (trx nil :inside-kids!!! (:name @where))
                     (if-let [netkids (remove #{(:skip options)} kids)]
                       (do
                         (some #(fget what %
                                  :me? true
                                  :inside? true
                                  :up? false) netkids))
                       (trx nil :no-net-kids)))
                   (trx nil :inside-no-kids (:name @where))))

            (and (:up? options)
                 (when-let [par (:par @where)]
                   (fget what par
                     :up? true
                     :me? true
                     :skip where
                     :inside? true)))

            (when (:must? options)
              (err :fget-must-failed what where options))))))))

(defn fm! [what where]
  (fget what where :me? false :inside? true :must? true :up? true))

(defmacro mdv! [what slot & [me]]
  (let [me (or me 'me)]
    `(md-get (tiltontec.model.core/fm! ~what ~me) ~slot)))

(defn mxu-find-name
  "Search up the matrix from node 'where' looking for element with given name"
  [where name]
  (fget #(= name (md-get % :name))
    where :me? false :up? true :inside? false))

(defmacro fmu [name & [me]]
  (let [me-ref (or me 'me)]
    `(let [name# ~name]
       (fget #(= name# (md-get % :name))
         ~me-ref :me? false :up? true :inside? false))))

(defn mxu-find-id
  "Search up the matrix from node 'where' looking for element with given id"
  [where id]
  (fget #(= id (md-get % :id))
    where :me? false :up? true :inside? false))

(defn mxu-find-type
  "Search matrix ascendants only from node 'me' for first with given tag"
  [me type]
  (assert me)
  (fasc (fn [visited]
          (= type (ia-type visited))) me))

(defn fmi-w-class [where class]
  (fget #(when (any-ref? %)
           (= class (md-get % :class)))
    where :inside? true :up? false))

(defn mxi-find
  "Search matrix below node 'where' for node with property and value"
  [where property value]
  (fget #(when (any-ref? %)
           (= value (md-get % property)))
    where :inside? true :up? false))

(defn fmo [me id-name]
  (or (mxu-find-name me id-name)
    (mxu-find-id me id-name)
    (throw (str "fmo> not id or name " id-name))))

(defn fmov
  ([me id-name]
   (fmov me id-name :value))
  ([me id-name slot-name]
   (when-let [mx (fmo me id-name)]
     (if (contains? @mx slot-name)
       (mget mx slot-name)
       (throw (str "fmov> " id-name " lacks " slot-name " property"))))))

(defmacro the-kids [& tree]
  `(binding [*par* ~'me]
     (assert *par*)
     ;;(println :bingo-par (any-ref? *par*))
     (doall (remove nil? (flatten (list ~@tree))))))

(defmacro cFkids [& tree]
  `(cF (assert ~'me "no me for cFkids")
     ;;(print :cFkids-me!!! (:id (deref ~'me)))
     (the-kids ~@tree)))

(defn kid-values-kids [me x-kids]
  (let [k-key (md-get me :kid-key)
        _ (assert k-key)
        x-kids (when (not= x-kids unbound)
                 (into {} (for [k x-kids]
                            [(k-key k) k])))
        k-factory (md-get me :kid-factory)]
    (assert (and k-factory))

    (doall
      (map-indexed
        (fn [idx kid-value]
          (or (and x-kids (get x-kids kid-value))
            (binding [*par* me]
              (k-factory me kid-value))))
        (md-get me :kid-values)))))

