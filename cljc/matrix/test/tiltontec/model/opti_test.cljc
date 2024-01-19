(ns tiltontec.model.opti-test
  (:require
   #?(:clj  [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.cell.core
             :refer-macros [cF+ c-reset-next! cFonce cFn]
             :refer [c-reset! cI make-c-formula make-cell]]
      :clj  [tiltontec.cell.core
             :refer [c-reset! cI make-c-formula make-cell]])
   #?(:clj  [tiltontec.model.core :refer :all :as md]
      :cljs [tiltontec.model.core
             :refer-macros [cFkids the-kids mdv!]
             :refer [make mget mswap!]
             :as md])
   [tiltontec.matrix.api :refer [cF cf-freeze with-mx]]))

(deftest opti-map-value
  (with-mx
    (let [me (md/make
              :style (cF {:color :red}))]
      (is (= (mget me :style)
             {:color :red}))
      (is (= (mget me :style)
             {:color :red}))
      (prn :flushed (:cells-flushed (meta me)))
      (prn :cz (:cz (meta me)))
      (prn :style (:style @me)))))

(deftest md-freeze-default
  (with-mx
    (let [fm (md/make
              :aa (cI 1)
              :bb (cF (cond
                        (= 2 (mget me :aa)) (cf-freeze)
                        (> (mget me :aa) 2) 43
                        :else 42)))]
      (is (= 1 (mget fm :aa)))
      (is (= 42 (mget fm :bb)))
      (mswap! fm :aa inc)
      (is (= 2 (mget fm :aa)))
      (is (= 42 (mget fm :bb)))

      (mswap! fm :aa inc)
      (is (= 3 (mget fm :aa)))
      (is (= 42 (mget fm :bb))))))

(deftest md-freeze-specific
  (with-mx
    (let [fm (md/make
              :aa (cI 1)
              :bb (cF (cond
                        (= 2 (mget me :aa)) (cf-freeze 17)
                        (> (mget me :aa) 2) 43
                        :else 42)))]
      (is (= 1 (mget fm :aa)))
      (is (= 42 (mget fm :bb)))
      (mswap! fm :aa inc)
      (is (= 2 (mget fm :aa)))
      (is (= 17 (mget fm :bb)))

      (mswap! fm :aa inc)
      (is (= 3 (mget fm :aa)))
      (is (= 17 (mget fm :bb))))))
