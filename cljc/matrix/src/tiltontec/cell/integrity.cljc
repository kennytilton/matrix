(ns tiltontec.cell.integrity
  #?(:cljs (:require-macros [tiltontec.cell.integrity
                             :refer [with-integrity with-cc without-integrity with-async-change]]))
  (:require
   #?(:cljs [tiltontec.util.base
             :refer-macros [wtrx trx prog1]]
      :clj  [tiltontec.util.base
             :refer :all])
   [tiltontec.cell.base
    :refer [*defer-changes* *dp-log* *one-pulse?* *pulse*
            *unfinished-business* *within-integrity* +client-q-handler+
            c-optimized-away? c-pulse un-stopped]]
   [tiltontec.util.core
    :refer [err fifo-add fifo-peek fifo-pop plnk]]))

;; --- the pulse ------------------------------

(defn data-pulse-next
  ([] (data-pulse-next :anon))
  ([pulse-info]
   ;;(prn :dp-next!!!! pulse-info :now @*pulse*)
   (when-not *one-pulse?*
     (when *dp-log*
       (trx "dp-next> " (inc @*pulse*) pulse-info))
     (#?(:clj alter :cljs swap!) *pulse* inc))))            ;; hhack try as commute

(defn c-current? [c]
  (and (c-pulse c)
       (= (c-pulse c) @*pulse*)))

(defn c-pulse-update [c key]
  ;(prn :pulse-upd??? @*pulse* key (cinfo c))
  (when-not (c-optimized-away? c)
    (assert (or (nil? (c-pulse c))
                (>= @*pulse* (c-pulse c))))
    ;(prn :pulse-upd!!! @*pulse* key (cinfo c))
    (#?(:clj alter :cljs swap!) c assoc :pulse @*pulse*)))

;; --- ufb utils ----------------------------

(defn ufb-counts []
  (into {} (for [[k v] *unfinished-business*]
             [k (count @v)])))

(defn ufb-queue [opcode]
  (or (opcode *unfinished-business*)
      (err (str "ufb-queue> opcode unknown: " opcode))))

(defn ufb-add [opcode continuation]
  (fifo-add (ufb-queue opcode) continuation))

(defn ufb-assert-q-empty [opcode]
  (if-let [uqp (fifo-peek (ufb-queue opcode))]
    (do
      (err (str "ufb queue %s not empty, viz %s")
           opcode uqp))
    true))

;; --- the ufb and integrity beef ----------------------
;;    proper ordering of state propagation

(defn ufb-do
  ([opcode]
   (ufb-do (ufb-queue opcode) opcode))

  ([q opcode]
   (when-let [[defer-info task] (fifo-pop q)]
     (trx nil :ufb-do-yep defer-info task)
     (task opcode defer-info)
     (recur q opcode))))

(defn finish-business []
  (un-stopped
   (loop [tag :tell-dependents]
     (case tag
       :tell-dependents
       (do (do                                             ;; p :telldeps
             (ufb-do :tell-dependents))
           (ufb-do :awaken)

           (recur
            (if (fifo-peek (ufb-queue :tell-dependents))
              :tell-dependents
              :handle-clients)))

       :handle-clients
       (do
         (plnk :handle-clients!!!)
         (when-let [clientq (ufb-queue :client)]
           (if-let [cqh @+client-q-handler+]
             (cqh clientq)
             (ufb-do clientq :client))

           (recur
            (if (fifo-peek (ufb-queue :client))
              (do (plnk :re-handling-clients!!!!)
                  :handle-clients)
              :ephemeral-reset))))

       :ephemeral-reset
       (do (ufb-do :ephemeral-reset)
           (recur :deferred-state-change))

       :deferred-state-change
       (when-let [[defer-info task-fn] (fifo-pop (ufb-queue :change))]
         (data-pulse-next :defferred-state-chg)
         (task-fn :change defer-info)
         (recur :tell-dependents))))))

(declare call-with-integrity)

(defmacro with-integrity [[opcode info] & body]
  `(tiltontec.cell.integrity/call-with-integrity
    ~opcode
    ~info
    (fn [~'opcode ~'defer-info]
      ~@body)))

(defmacro with-cc [id & body]
  `(with-integrity (:change ~id)
     ~@body))

(defmacro without-integrity [& body]
  `(binding
    [*within-integrity* false
     *defer-changes* false
     *call-stack* '()]
     ~@body))

(defmacro with-async-change [id & body]
  `(binding
    [*within-integrity* false
     *defer-changes* false
     *call-stack* '()]
     (with-integrity [:change ~id]
       ~@body)))

(defn call-with-integrity [opcode defer-info action]
  ;;; hhack
  ;    (when opcode
  ;  (assert (cl-find opcode +ufb-opcodes+)
  ;          (str "Invalid opcode for with-integrity: %s. Allowed values: %s"
  ;                  opcode +ufb-opcodes+)))
  #_(when (and opcode *within-integrity*)
      (println :cwi opcode *within-integrity* defer-info))
  (do                                                       ;; wtrx (0 100 "cwi-begin" opcode *within-integrity*)
    (do                                                     ;; hun-stopped
      (#?(:cljs do :clj dosync)
       (cond
         *within-integrity*
         (if opcode
           (prog1
            :deferred-to-ufb-1
              ;; SETF is supposed to return the value being installed
              ;; in the place, but if the SETF is deferred we return
              ;; something that will help someone who tries to use
              ;; the setf'ed value figure out what is going on:
              ;; (pln :cwi-defers opcode (first (ensure-vec defer-info)))
            (ufb-add opcode [defer-info action]))

            ;; thus by not supplying an opcode one can get something
            ;; executed immediately, potentially breaking data integrity
            ;; but signifying by having coded the with-integrity macro
            ;; that one is aware of this.
            ;;
            ;; If you have read this comment.
            ;;
           (action opcode defer-info))

         :else (binding [*within-integrity* true
                         *defer-changes* false]
                 (when (or (zero? @*pulse*)
                           (= opcode :change))
                   (data-pulse-next [:cwi opcode defer-info]))

                 (prog1
                  (action opcode defer-info)

                  (do                                     ;; tufte/p :finbiz
                    (finish-business))
                  (ufb-assert-q-empty :tell-dependents)
                  (ufb-assert-q-empty :change))))))))

:integrity-ok
