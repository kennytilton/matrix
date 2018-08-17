(ns mxintro.core-test
  (:require [clojure.test :refer :all]
            [tiltontec.util.core :as util]
            [tiltontec.cell.base :refer [unbound *defer-changes*]]
            [tiltontec.cell.core
             :refer [make-cell make-c-formula c-fn
                     cF cF cF+ cI cFonce]
             :as cell]
            [tiltontec.model.core :as md
             :refer [<mget mset!>]]
            [mxintro.stopwatch :refer [mk-stopwatch]])
  (:import (com.sun.java.accessibility.util TopLevelWindowMulticaster)))

(deftest t-cells-sugar-free
  ; We ourselves do not like syntactic sugar up front because it hides
  ; too much. We begin with wiring exposed. Just don't ask. Well..
  ;
  ; md/make, make-cell, and make-c-formula return refs in CLJ and
  ; atoms in CLJS, with maps inside that implement dataflow. make is
  ; for object instances, the others for instance properties.
  ;
  ; In formula cells, c-fn wraps the formula body and offers
  ; the anaphoric "me" variable akin to "this" or "self" in other domains.
  ;
  ; <mget and mset!> read and write property values with dataflow.
  ; In either case, (:some-property @something) is a backdoor.
  ;
  ; Now imagine we are modelling a stopwatch.
  ;
  (let [sw (md/make
             :start (util/now)
             :current (make-cell
                        :value (util/now)
                        :input? true)
             :elapsed (make-c-formula
                        :value unbound
                        :rule (c-fn (- (<mget me :current)
                                       (<mget me :start)))))]

    ;; we might have crossed an ms boundary, so do not look for equality
    (is (< (<mget sw :elapsed) 2))

    (Thread/sleep 1000)
    (mset!> sw :current (util/now))

    ;; computed values are first-class properties accessible by any code
    (prn :sw! (<mget sw :start) (<mget sw :current) (<mget sw :elapsed))

    (is (> (<mget sw :elapsed) 500))))

;; dependency tracking sees inside functions, so we can hide <mget et al
(defn start [me] (<mget me :start))
(defn current [me] (<mget me :current))
(defn elapsed [me] (<mget me :elapsed))
(defn set-current [me new-value] (mset!> me :current new-value))
;; In the Common Lisp version we have a macro that writes those
;; wrappers for us in the moral equivalent of defclass. In Javascript
;; we use define_property and get the wrappers automatically.

;; We have nice short wrappers for the cell makers as well
;; - cI is for input cells
;; - cF is for formulaic cells

(deftest t-cells-sugary
  (let [sw (md/make
             :start (util/now)
             :current (cI (util/now))
             :elapsed (cF (- (current me) (start me))))]

    (prn :begin-start (start sw) :current (current sw) :elapsed (elapsed sw))

    ;; we might have crossed an ms boundary, so do not look for equality
    (is (< (elapsed sw) 2))

    ;; Let's have some fun and really let time elapse
    (Thread/sleep 1000)

    (set-current sw (util/now))
    ;; if we try to cheat and change the start, we get an error todo

    (prn :after-delay-start (start sw) :current (current sw) :elapsed (elapsed
                                                                        sw))

    (is (>= (elapsed sw) 1000))))

(deftest t-matrix-rizing
  (let [max-elapsed 3000

        ;; If the system clock will not come to the Matrix, the
        ;; Matrix will wrap the system clock:
        clock (md/make
                :running? (cI true)
                :ticker (cFonce (future
                                  (loop []
                                    (binding [*defer-changes* false]
                                      (set-current me (util/now)))
                                    (Thread/sleep 1000)
                                    (if (<mget me :running?)
                                      (recur)
                                      (prn :clock-stopping)))))
                :current (cI (util/now)
                             :obs (fn [slot me new-val old-val c]
                                    (prn :obs-clock slot new-val))))
        stopwatch (md/make
                    :start (cFonce (current clock))
                    :elapsed (cF+ [:obs (fn [slot me new-val old-val c]
                                          (prn :obs-stopwatch slot new-val))]
                                  (- (current clock) (start me)))
                    :stopped? (cF (> (elapsed me)
                                     max-elapsed))
                    :final (cF (if (<mget me :stopped?)
                                 cache
                                 (elapsed me))))]
    ;; kick-off...
    (loop []
      (when-not (<mget stopwatch :stopped?)
        (prn :main-still-running (elapsed stopwatch))
        (Thread/sleep 250)
        (recur)))

    (is (<mget stopwatch :stopped?))

    (is (> (elapsed stopwatch) max-elapsed))

    (mset!> clock :running? false)))



(deftest test-make-sw
  (let [sw (mk-stopwatch)]
    (println :sw! (<mget sw :start) (<mget sw :current) (<mget sw :elapsed))
    (is (= (<mget sw :start) (<mget sw :current)))
    (is (< (<mget sw :elapsed) 2))

    (Thread/sleep 1000)
    (mset!> sw :current (util/now))
    (prn :sw! (<mget sw :current) (<mget sw :elapsed))

    (is (> (<mget sw :elapsed) 500))))


(defn record [me] (<mget me :record))
(defn finished? [me] (<mget me :finished?))
(defn broken? [me] (<mget me :broken?))

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
;++ make
;++ <mget, mset!>, mswap!
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
;++ cF/cFonce just to initialize
;++ cFn to initialize settable
;++ operating on the cache
; use trx for debug prints (no dependency)

;; -- Varieties
; ephemerals
;++ cFonce
; lazy cells
; synapses

;; -- Transparency
;++ make-cell -> cF/cI
;++ wrappers for <mget and mset!> -- macro to gen
;++ dependency reaches into functions

;; -- Observers
; ad hoc observers
; class and slot observers
; custom queue handlers
; with-cc for deferred mset/swap

;; -- Lifting
;++ lifting the system clock
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





