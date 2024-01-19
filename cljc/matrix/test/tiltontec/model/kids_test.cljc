(ns tiltontec.model.kids-test
  (:require
   #?(:clj  [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.util.base
             :refer [mx-type?]
             :refer-macros [trx prog1 *trx?*]]
      :clj  [tiltontec.util.base
             :refer :all])
   #?(:clj  [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [md-ref?] :as cty])
   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF cF+ c-reset-next! cFonce cFn with-mx]
             :refer [cI]]
      :clj  [tiltontec.cell.core :refer [cF cI with-mx]])
   #?(:clj  [tiltontec.model.core :refer [mdv! mget mset! the-kids] :as md]
      :cljs [tiltontec.model.core
             :refer-macros [the-kids mdv!]
             :refer [make mget mset!]
             :as md])))

(deftest k-notq2be
  (with-mx
    (let [f (md/make ::md/family
                     :ee (cI 2)
                     :kids (cF (the-kids
                                (when (odd? (mget me :ee))
                                  (md/make
                                   :name :yep
                                   :value (cF (do
                                                (let [par (:parent @me)]
                                                  (let [ee (mget par :ee)]
                                                    (* 14 ee))))))))))]
      (is (mx-type? f ::md/family))
      (is (empty? (mget f :kids)))

      (do
        (mset! f :ee 3)
        (is (not (empty? (mget f :kids))))
        (is (= 42 (mdv! :yep :value f)))

        (let [dmw (first (mget f :kids))]
          (assert (md-ref? dmw))
          (mset! f :ee 0)
          (is (empty? (mget f :kids)))
          (is (nil? @dmw))
          (is (= :dead (::cty/state (meta dmw)))))))))

#?(:cljs (do
           (cljs.test/run-tests)))

