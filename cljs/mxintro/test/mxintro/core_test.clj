(ns mxintro.core-test
  (:require [clojure.test :refer :all]
            [tiltontec.util.core :as util]
            [tiltontec.cell.core
             :refer [cF cF cI]]
            [tiltontec.model.core :as md
             :refer [<mget mset!>]]
            [mxintro.stopwatch :refer [mk-stopwatch]])
  (:import (com.sun.java.accessibility.util TopLevelWindowMulticaster)))

(deftest test-make-sw
  (let [sw (mk-stopwatch)]
    (println :sw! (<mget sw :start) (<mget sw :current) (<mget sw :elapsed))
    (is (= (<mget sw :start) (<mget sw :current)))
    (is (< (<mget sw :elapsed) 2))

    (Thread/sleep 1000)
    (mset!> sw :current (util/now))
    (prn :sw!  (<mget sw :current) (<mget sw :elapsed))

    (is (> (<mget sw :elapsed) 500))))

;; dependency tracking sees inside functions, so...
(defn start [me] (<mget me :start))
(defn elapsed [me] (<mget me :elapsed))
(defn record [me] (<mget me :record))
(defn finished? [me] (<mget me :finished?))
(defn broken? [me] (<mget me :broken?))
(defn set-current [me new-value] (mset!> me :current new-value))
(defn set-finished? [me new-value] (mset!> me :finished? new-value))

(deftest test-husein-bolt
  ;; Moral: instances of the same "class" can have custom
  ;; rules for the same slots, and custom slots. Object re-use
  ;; is increase because objects no longer say so much.

  (let [sw (mk-stopwatch
             :record 9.580
             :finished? (cI false)
             :elapsed (cF (* 1/1000
                             (- (current me) (start me))))
             :broken? (cF (when (finished? me)
                            (< (elapsed me) (record me)))))]
    (is (not (finished? sw)))
    (is (nil? (broken? sw)))

    (set-current sw (+ (start sw) 9581))
    (set-finished? sw true)
    (prn :record (elapsed sw) (record sw) (if (broken? sw) :Yes!!!!! :Nah))))

;;; --- Topics ---------------------------

;; -- Operations
; make
; <mget, mset!>, mswap!
; error on setting unwrapped in cI
; error on setting formulaic (or why it got taken out)

;; -- Extensibility
; custom formulas same class
; custom properties same class

;; -- Internals
; make type defaults to ::model)
; mutation not detected
; -- unchanged test
; -- unchanged-if false?
; dynamic dependency (if A B C)
; md-awaken, not-to-be
; without-c-dependency

;; Efficiency
; propagation stops with unchanged
; dynamic dependency
; kids factory

;; -- Practices
; cF just to initialize
; cFn to initialize settable
; operating on the cache
; use trx for debug prints (no dependency)

;; -- Varieties
; ephemerals
; cFonce
; lazy cells
; synapses

;; -- Transparency
; make-cell -> cF/cI
; wrappers for <mget and mset!> -- macro to gen
; dependency reaches into functions

;; -- Observers
; ad hoc observers
; class and slot observers
; custom queue handlers
; with-cc for deferred mset/swap

;; -- Lifting
; lifting the system clock
; lifting local storage
; lifting XHR
; lifting Postgres GraphDb

;; -- Families
; kids
; kids factory
; kids cycles
; inter-object dependency
; - finding other objects
; - importance of finding via "kids" slot





