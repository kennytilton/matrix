(ns tiltontec.cell.evaluate
  (:require
    [clojure.string :as str]
    [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint cl-format]]
    [clojure.set :refer [difference]]
    ;#?(:clj [taoensso.tufte :as tufte :refer :all]
    ;   :cljs [taoensso.tufte :as tufte :refer-macros (defnp p profiled profile)])
    #?(:cljs [tiltontec.util.base
              :refer-macros [wtrx trx prog1]]
       :clj  [tiltontec.util.base
              :refer :all])
    [tiltontec.util.core
     :refer [any-ref? rmap-setf err rmap-meta-setf set-ify]]
    #?(:clj  [tiltontec.cell.base :refer :all :as cty]
       :cljs [tiltontec.cell.base
              :refer-macros [without-c-dependency pcell]
              :refer [c-optimized-away? c-pulse-unobserved? c-formula? c-value c-optimize
                      *one-pulse?* *dp-log* *unfinished-business*
                      *custom-propagator*
                      c-unbound? c-input? ia-type
                      c-model mdead? c-valid? c-useds c-ref? md-ref?
                      c-state *pulse* c-pulse-observed c-code$
                      *call-stack* *defer-changes* dpc minfo cinfo
                      c-rule c-me c-value-state c-callers dependency-record unlink-from-used
                      unlink-from-callers *causation*
                      c-synaptic? dependency-drop c-md-name
                      c-pulse c-pulse-last-changed c-ephemeral? c-slot c-slot-name
                      *depender* *quiesce*
                      *c-prop-depth* md-slot-owning? c-lazy] :as cty])
    [tiltontec.cell.observer :refer [c-observe]]
    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]
              :refer [c-current? c-pulse-update]]
       :clj  [tiltontec.cell.integrity :refer :all])))



#?(:cljs (set! *print-level* 3))

(defn ephemeral-reset [rc]
  ;; (trx :eph-reset?????? (:slot @rc)(:ephemeral? @rc)) 
  (when (c-ephemeral? rc)                                   ;; allow call on any cell, catch here
    ;
    ; as of Cells3 we defer resetting ephemerals because everything
    ; else gets deferred and we cannot /really/ reset it until
    ; within finish_business we are sure all callers have been recalculated
    ; and all observers completed (which happens with recalc).
    ;
    ;;(trx :ephh-reset!!! (:slot @rc))
    (with-integrity (:ephemeral-reset rc)
      (when-let [me (:me @rc)]
        ;; presumption next is that model cells live in
        ;; their own internal slot of model FNYI
        (#?(:clj alter :cljs swap!) me assoc (:slot @rc) nil))
      (#?(:clj alter :cljs swap!) rc assoc :value nil))))

(declare calculate-and-set)

(defn ensure-value-is-current
  "The key to data integrity: recursively check the known dependency
  graph to decide if we are current, and if not kick off recalculation
  and propagation."

  [c debug-id ensurer]

  (cond
    ; --------------------------------------------------
    *quiesce*
    ; we got kicked off during md-quiesce processing
    ; just return what we have if valid, else nil
    (cond
      (c-unbound? c)
      (do
        (trx :unbound!!! c-slot)
        (err "evic> unbound slot %s of model %s"
          (c-slot c) (c-model c)))

      (c-valid? c)                                          ;; probably accomplishes nothing
      (c-value c))

    ;; --- easy way out: our pulse is current ---------------
    (c-current? c)
    (c-value c)

    ;; --- also easy with an optimize edge case lost to history -------
    (and (c-input? c)
      (c-valid? c)
      ;; a cFn (ruled-then-input) cell will not be valid at first
      (not (and (c-formula? c)
             (= (c-optimize c) :when-value-t)
             (nil? (c-value c)))))
    (c-value c)

    ;; --- above we had valid values so did not care. now... -------
    (when-let [md (c-model c)]
      (mdead? (c-model c)))
    (err #?(:clj format :cljs str) "evic> model %s of cell %s is dead" (c-model c) c)

    ;; --- no more early exits  -------------------
    (or (not (c-valid? c))
      (loop [[used & urest] (seq (c-useds c))]
        (when used
          (ensure-value-is-current used :nested c)
          ;; now see if it actually changed; maybe it just got made current because no
          ;; dependency was out of date. If so, that alone does not mean we need to re-run.
          (or (when-let [last-changed (c-pulse-last-changed used)]
                (> last-changed (c-pulse c)))
            (recur urest)))))
    (do                                                     ;; we seem to need update, but...
      (when-not (c-current? c)
        ;; Q: how can it be current after above checks indicating not current?
        ;; A: if dependent changed during above loop over used and its observer read/updated me
        (calculate-and-set c :evic ensurer))
      (c-value c))

    ;; we were behind the pulse but not affected by the changes that moved the pulse
    ;; record that we are current to avoid future checking:
    :else (do
            ;;(trx :just-pulse!!!!! (c-slot c))
            (c-pulse-update c :valid-uninfluenced)
            (c-value c))))

(defn c-get
  "The API for determing the value associated with a Cell.
  Ensures value is current, records any dependent, and
  notices if a standalone  cell has never been observed."

  [c]
  #_(when (= (c-slot c) :ae-response)
      (println :cget-entry (c-slot c) (ia-type (c-model c))
        (if *depender* (c-slot *depender*) :nodepender)))
  (cond
    (c-ref? c) (prog1
                 (with-integrity ()
                   (let [prior-value (c-value c)]
                     ;;(println :cget-to-evic (c-slot c) (ia-type (c-model c)))
                     (when *depender*
                       (str "asker="
                         (c-slot *depender*)
                         (c-md-name *depender*)))
                     (prog1

                       (let [ev (ensure-value-is-current c :c-read nil)]
                         ;; (when (= (c-slot c) :ae-response) (println :evic ev))
                         ev)
                       ;; this is new here, intended to awaken standalone cells JIT
                       ;; /do/ might be better inside evic, or test here
                       ;; to see if c-model is nil? (trying latter...)
                       (when (and (nil? (c-model c))
                               (= (c-state c) :nascent)
                               (c-pulse-unobserved? c))
                         (rmap-setf [::cty/state c] :awake)
                         (c-observe c prior-value :cget)
                         (ephemeral-reset c)))))
                 (when *depender*
                   (dependency-record c)))
    (any-ref? c) @c
    :else c))

(defn <cget [c]
  (c-get c))

(declare calculate-and-link
  c-value-assume)

(defn calculate-and-set
  "Calculate, link, record, and propagate."
  [c dbgid dbgdata]
  (do                                                       ;; (wtrx [0 20 :cnset-entry (c-slot c)]
    (let [[raw-value propagation-code] (calculate-and-link c)]
      ;;(trx :cn-set-sees!!!! (c-slot c) raw-value propagation-code)
      (when-not (c-optimized-away? c)
        (assert (map? @c) "calc-n-set")

        ;; this check for optimized-away? arose because a rule using without-c-dependency
        ;; can be re-entered unnoticed since that clears *call-stack*. If re-entered, a subsequent
        ;; re-exit will be of an optimized away cell, which will have been assumed
        ;; as part of the opti-away processing.
        ;;(trx :calc-n-set->assume raw-value)
        (c-value-assume c raw-value propagation-code)))))

(defn calculate-and-link
  "The name is accurate: we do no more than invoke the
  rule of a formula and return its value*, but along the
  way the links between dependencies and dependents get
  determined anew.

  * Well, we also look to see if a synaptic cell has attached a
  propagaion code to a vector used to wrap the raw value, which we then unpack."
  [c]
  ;(when (some #{c} ))
  ;(prn :cnlink-entry c (count *call-stack*) (some #{c} *call-stack*))
  (when (some #{c} *call-stack*)
    (let [me (c-model c)
          slot (c-slot-name c)]
      (err str
        "MXAPI_COMPUTE_CYCLE_DETECTED> cyclic dependency detected while computing slot '"
        slot "' of model '" (c-md-name c) "'.\n"
        "...> formula for " slot ":\n"
        (c-code$ c)
        "\n...> full cell: \n"
        @c
        "\n\n...> callstack, latest first: \n"
        (str/join "\n" (mapv (fn [cd]
                               (str "....> md-name:" (c-md-name cd) " slot: " (c-slot-name cd)
                                 "\n....>    code:" (c-code$ cd)))
                         *call-stack*)))))

  (binding [*call-stack* (cons c *call-stack*)
            *depender* c
            *defer-changes* true]
    (unlink-from-used c :pre-rule-clear)
    (assert (c-rule c) (#?(:clj format :cljs str) "No rule in %s type %s" (:slot c) (type @c)))
    (let [raw-value ((c-rule c) c)
          prop-code? (and (c-synaptic? c)
                       (vector? raw-value)
                       (contains? (meta raw-value) :propagate))]
      (if prop-code?
        [(first raw-value) (:propagate (meta raw-value))]
        [raw-value nil]))))

;;; --- awakening ------------------------------------

(defmulti c-awaken (fn [c]
                     #?(:clj  (type c)
                        :cljs (:type (meta c)))))

(defmethod c-awaken :default [c]
  (cond
    (coll? c) (doseq [ce c]
                (c-awaken ce))
    :else
    (println :c-awaken-fall-thru (if (any-ref? c)
                                   [:ref-of (type c) @c]
                                   [:unref c (type c)]))))

(defmethod c-awaken ::cty/cell [c]
  (assert (c-input? c))
  ;
  ; nothing to calculate, but every cellular slot should be output on birth
  ;

  (#?(:clj dosync :cljs do)
    ;;(prn :awk-c c @*pulse* (c-pulse-observed c)(c-value-state c))
    (when (c-pulse-unobserved? c)                           ;; safeguard against double-call
      (when-let [me (c-me c)]
        (rmap-setf [(c-slot c) me] (c-value c)))
      (c-observe c :cell-awaken)
      (ephemeral-reset c))))

(defmethod c-awaken ::cty/c-formula [c]
  (#?(:clj dosync :cljs do)
    ;; hhack -- bundle this up into reusable with evic
    ;;(trx :c-formula-awk (c-slot c)(c-current? c))
    (binding [*depender* nil]
      (when-not (c-current? c)
        (calculate-and-set c :fn-c-awaken nil)))))

;; ------------------------------------------------------------

(declare c-absorb-value
  optimize-away?!
  propagate
  c-value-changed?)

(defn md-slot-value-store [me slot value]
  (assert me)
  (assert (any-ref? me))
  ;(trx :mdsv-store slot (flz value))
  (rmap-setf [slot me] value))

(defn c-value-assume
  "The Cell assumes a new value at awakening, on c-reset!, or
   after formula recalculation.

  We record the new value, set the Cell state to :awake, make
  its pulse current, check to see if a formula cell can be
  optimized away, and then propagate to any dependent formula
  cells."

  [c new-value propagation-code]

  (assert (c-ref? c))
  ;; (println :cva-entry (c-slot c) new-value)
  (do                                                       ;; (wtrx (0 100 :cv-ass (:slot @c) new-value)
    (prog1 new-value                                        ;; sans doubt
      (without-c-dependency
        (let [prior-value (c-value c)
              prior-state (c-value-state c)
              callers (c-callers c)]                        ;; copy callers before possible optimize-away

          ;; --- cell maintenance ---
          ;; even if no news at least honor the reset!
          ;;
          (rmap-setf [:value c] new-value)
          (rmap-setf [::cty/state c] :awake)
          #_(trx :new-vlue-installed (c-slot c) new-value (:value c))
          ;;
          ;; --- model maintenance ---
          (when (and (c-model c)                            ; redundant with next check, but logic is impeccable
                  (not (c-synaptic? c)))                    ; synapses just manage cell state, no model property
            (md-slot-value-store (c-model c) (c-slot c) new-value))

          (c-pulse-update c :slotv-assume)
          (when (and (not (c-optimized-away? c))
                  (not= propagation-code false)
                  (c-value-changed? c new-value prior-value))
            ;;(prn :setting-last-changed @c)
            (rmap-setf [:pulse-last-changed c] @*pulse*))
          #_(println :maybe-propping (c-slot c) new-value
              :priorstate prior-state
              :propcode propagation-code
              :changed? (c-value-changed? c new-value prior-value))

          ; we optimize here because even if unchanged we may not have c-useds,
          ; now that, with the :freeze option, we are doing "late" optimize-away
          (when-let [optimize (and (c-formula? c)
                                (c-optimize c))]
            (optimize-away?! c prior-value))

          (when (or (not (some #{prior-state} [:valid :uncurrent]))
                  (= propagation-code true)                 ;; forcing
                  (when-not (= propagation-code false)
                    (c-value-changed? c new-value prior-value)))
            ;; --- something happened ---
            ;; --- data flow propagation -----------
            (when-not (or (= propagation-code :no-propagate)
                        (c-optimized-away? c))
              (assert (map? @c))
              (propagate c prior-value callers))))))))

;; --- unlinking ----------------------------------------------


(defn md-cell-flush [c]
  (assert (c-ref? c))
  (when-let [me (c-model c)]
    (rmap-meta-setf [:cells-flushed me]
      (conj (:cells-flushed (meta me))
        [(c-slot c) (c-pulse-observed c)]))))

;; --- optimize away ------------------------------------------
;; optimizing away cells who turn out not to depend on anyone 
;; saves a lot of work at runtime.

(defn optimize-away?!
  "Optimizes away cells who turn out not to depend on anyone, 
  saving a lot of work at runtime. A caller/user will not bother
  establishing a link, and when we get to models cget will 
  find a non-cell in a slot and Just Use It."
  [c prior-value]
  (when (and (c-formula? c)
          (or (empty? (c-useds c))
            (= :freeze (c-optimize c))
            (and (= :when-value-t (c-optimize c))
              (not (nil? (c-value c)))))
          (c-optimize c)
          (not (c-optimized-away? c))                       ;; c-streams (FNYI) may come this way repeatedly even if optimized away
          (c-valid? c)                                      ;; /// when would this not be the case? and who cares?
          (not (c-synaptic? c))                             ;; no slot to cache invariant result, so they have to stay around)
          (not (c-input? c)))                               ;; yes, dependent cells can be inputp
    (when (= :freeze (c-optimize c))
      (unlink-from-used c :freeze))

    (rmap-setf [::cty/state c] :optimized-away)
    (c-observe c prior-value :opti-away)

    (when-let [me (c-model c)]
      (rmap-meta-setf [:cz me] (assoc (:cz (meta me)) (c-slot c) nil))
      (md-cell-flush c))

    ;; let callers know they need not check us for currency again
    (doseq [caller (seq (c-callers c))]
      (ensure-value-is-current caller :opti-used c)
      (when-not (c-optimized-away? caller)
        (dependency-drop c caller)))
    ;; (prn :ACTUALLY-OPTI-AWAY! (cinfo c))
    (#?(:clj ref-set :cljs reset!) c (c-value c))))

;; --- c-quiesce -----------

(defn c-quiesce [c]
  (assert (c-ref? c))
  (when-let [onq (:on-quiesce @c)]
    (onq c))
  (unlink-from-callers c)
  (unlink-from-used c :quiesce)
  (#?(:clj ref-set :cljs reset!) c :dead-c #_ [:dead-c @c]))

;; --- md-quiesce --

(defn md-quiesce-self [me]
  (when-let [onq (:on-quiesce (meta me))]
    (onq me))
  (doseq [c (vals (:cz (meta me)))]
    (when c
      ;; not if optimized away
      (c-quiesce c)))
  (#?(:clj ref-set :cljs reset!) me nil)
  (rmap-meta-setf [::cty/state me] :dead))

(defmulti md-quiesce (fn [me]
                      (assert (md-ref? me))
                      [(ia-type me)]))

(defmethod md-quiesce :default [me]
  (md-quiesce-self me))

;----------------- change detection ---------------------------------

(defmulti unchanged-test
  "Cells does not propagate when nothing changes. By default, the
  test is =, but cells can inject a different test, and when we get
  to models it will be possible for a slot to have associated
  with it a different test."

  (fn [me slot]
    [(when me (type @me)) slot]))

(defmethod unchanged-test :default [self slotname]
  =)

(defn c-value-changed? [c new-value old-value]
  (not ((or (:unchanged-if @c)
          (unchanged-test (c-model c) (c-slot c)))
        new-value old-value)))

;;--------------- change propagation  ----------------------------

(declare propagate-to-callers

  md-slot-cell-flushed)

(defn propagate
  "A cell:
  - notifies its callers of its change;
  - calls any observer; and
  - if ephemeral, silently reverts to nil."
  ;; /do/ support other values besides nil as the "resting" value 

  [c prior-value callers]
  ;;(prn :propagate (cinfo c))
  (cond
    *one-pulse?* (when *custom-propagator*
                   (*custom-propagator* c prior-value))
    ;; ----------------------------------
    :else
    (do
      (binding [*depender* nil
                *call-stack* nil
                *c-prop-depth* (inc *c-prop-depth*)
                *defer-changes* true]
        ;; --- manifest new value as needed ---
        ;;
        ;; 20061030 Trying not.to.be first because doomed instances may be interested in callers
        ;; who will decide to propagate. If a family instance kids slot is changing, a doomed kid
        ;; will be out of the kids but not yet quiesced. If the propagation to this rule asks the kid
        ;; to look at its siblings (say a view instance being deleted from a stack who looks to the psib
        ;; pb to decide its own pt), the doomed kid will still have a parent but not be in its kids slot
        ;; when it goes looking for a sibling relative to its position.
        (when (and prior-value
                (c-model c)
                (md-slot-owning? (type (c-model c)) (c-slot c)))
          (when-let [ownees (difference (set-ify prior-value) (set-ify (c-value c)))]
            (doseq [ownee ownees]
              (md-quiesce ownee))))

        (propagate-to-callers c callers)
        ;;(trx :obs-chkpulse!!!!!!!! @*pulse* (c-pulse-observed c))

        (when-not (c-optimized-away? c)                     ;; they get observed at the time
          ;;(trx :not-opti!!!! @c)
          (when (or (c-pulse-unobserved? c)
                  (some #{(c-lazy c)}
                    [:once-asked :always true]))            ;; messy: these can get setfed/propagated twice in one pulse+
            ;;(println :observing!!!!!!!!!!! (c-slot c) (c-value c))
            (c-observe c prior-value :propagate)))

        ;;
        ;; with propagation done, ephemerals can be reset. we also do this in c-awaken, so
        ;; let the fn decide if C really is ephemeral. Note that it might be possible to leave
        ;; this out and use the pulse to identify obsolete ephemerals and clear them
        ;; when read. That would avoid ever making again bug I had in which I had the reset
        ;; inside slot-value-observe,
        ;; thinking that that always followed propagation to callers. It would also make
        ;; debugging easier in that I could find the last ephemeral value in the inspector.
        ;; would this be bad for persistent CLOS, in which a DB would think there was still a link
        ;; between two records until the value actually got cleared?
        ;;
        (ephemeral-reset c)))))

(defn propagate-to-callers [c callers]
  ;;
  ;;  We must defer propagation to callers because of an edge case in which:
  ;;    - X tells A to recalculate
  ;;    - A asks B for its current value
  ;;    - B must recalculate because it too uses X
  ;;    - if B propagates to its callers after recalculating instead of deferring it
  ;;       - B might tell H to reclaculate, where H decides this time to use A
  ;;       - but A is in the midst of recalculating, and cannot complete until B returns.
  ;;         but B is busy eagerly propagating. "This time" is important because it means
  ;;         there is no way one can reliably be sure H will not ask for A
  ;;
  (when-not (empty? callers)
    (let [causation (cons c *causation*)]                   ;; closed over below
      (with-integrity (:tell-dependents c)
        (if (mdead? (c-model c))
          (do (trx "WHOAA!!!! dead by time :tell-deps dispatched; bailing" c))
          (binding [*causation* causation]
            (doseq [caller (seq callers)]
              (cond
                (or                                         ;; lotsa reasons NOT to proceed
                  (= (c-state caller) :quiesced)
                  (c-current? caller)                       ;; happens if I changed when caller used me in current pulse+
                  (some #{(c-lazy caller)} [true :always :once-asked])

                  (and (not (some #{c} (c-useds caller)))   ; hard to follow, but it is trying to say
                    (not (c-optimized-away? c))))           ; "go ahead and notify caller one more time
                ; even if I have been optimized away cuz they need to know."
                ; Note this is why callers must be supplied, having been copied
                ; before the optimization step.
                (do #_(trx :not-propping @*pulse* (c-slot c)
                        ;; :val (c-value c)
                        :to (c-slot caller) :caller         ;; @caller
                        (c-state caller) :current (c-current? caller)
                        :c-not-used? (not (some #{c} (c-useds caller)))
                        :c-not-opti (not (c-optimized-away? c))))

                :else
                (calculate-and-set caller :propagate c)))))))))
