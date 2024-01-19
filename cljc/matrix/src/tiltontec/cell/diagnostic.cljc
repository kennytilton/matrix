(ns tiltontec.cell.diagnostic
  (:require
   [clojure.set :refer [intersection] :as set]
   [tiltontec.cell.base :refer [*mx-trace*]]))

(defn ensure-set [x]
  (cond
    (set? x) x
    (coll? x) (set x)
    :else #{x}))

(comment
  (ensure-set nil)
  (ensure-set 42)
  (ensure-set :a)
  (ensure-set #{42})
  (ensure-set [:a :b])
  (apply set/intersection
         (map ensure-set [42 [1 2 42] #{42}]))
  (conj [1 2] 3))

(defn match-loose [seek in]
  (when-not (nil? in)
    (cond
      (= in :all) true
      (and (coll? in)
           (some #{:all} in)) true
      :else (not-empty
             (set/intersection (ensure-set seek) (ensure-set in))))))

(defn mxtrc [& bits]
  (let [tag (first bits)]
    (assert (or (keyword? tag)
                (and (vector? tag)
                     (every? keyword? tag)))
            (str "mxtrc> first argument must be keyword or keywords to trace, not |"
                 tag "|"))
    (when (match-loose tag *mx-trace*)
      (apply prn :mxtrc> bits))))

(comment
  (mxtrc :boom "hi mom")
  (binding [*mx-trace* :boom]
    (mxtrc :bom "hi mom")))


