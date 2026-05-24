# Matrix Architecture

Matrix is a fine-grained dataflow engine for building live object graphs whose properties may be constant, externally assigned, or derived from other properties.

A Matrix application is a population of models. A model has Matrix-managed properties. Some properties receive values from imperative code. Other properties are formulas. Formula dependencies are discovered dynamically when formulas read Matrix-managed properties. A change to an input property starts propagation through the dependency graph, bringing dependent state current and then allowing observers to apply coherent state to the outside world.

The central architectural requirement is data integrity during state transition.

## Core Concepts

### Model

A model is an object participating in Matrix dataflow. Its properties may be ordinary immutable values, input cells, formula cells, ephemeral cells, lazy cells, or watched/observed cells.

Models may be arranged in trees or other reachable structures. A formula or observer may navigate the model population to read the state required for its computation. Those reads establish dependencies when they occur during formula evaluation.

### Cell

A cell mediates a model property.

Matrix code must distinguish between:

- input cells, which may be assigned by imperative code;
- formula cells, whose values are computed from other Matrix-managed state;
- cells with watches/observers, which react to coherent value changes;
- ephemeral cells, which model event-like occurrences;
- lazy cells, whose recomputation may be deferred according to their laziness mode;
- no-cell properties, which are outside Matrix dataflow and must not be treated as mutable dependencies.

A property outside Matrix management may be used as constant data. It must not be mutated as though it were part of the dataflow graph.

### Input Cells

Input cells are the boundary between the outside world and Matrix.

Typical input sources include UI events, timers, sockets, sensors, storage callbacks, and other imperative systems. In Matrix APIs, input mutation is normally performed by `mset!` or `mswap!`.

It cannot be formulas all the way down. Input cells are the authorized places where external facts enter the model.

### Formula Cells

Formula cells compute their value from other Matrix-managed properties.

A formula establishes dependencies by reading through the Matrix access path, for example `mget` or a function that calls `mget`. Dependencies are runtime facts, not declarations. If branching changes what a formula reads, the formula's dependencies must change with that branch.

A formula is responsible for the semantics of one property. It is not responsible for scheduling, subscribing, invalidating dependents, notifying observers, or maintaining the rest of the graph.

### Watches and Observers

Watches/observers are output participants. They let coherent Matrix state affect systems outside the model: DOM nodes, Flutter widgets, storage, sockets, logs, devices, or other imperative APIs.

Observers are not formula dependencies. They must observe a value change after the relevant Matrix state has become coherent for the propagation pulse.

If an observer must assign to an input cell, it must use the required continuation/defer mechanism, such as `with-cc`, so the new assignment does not create a new state transition inside the unfinished transition being observed.

### Synapses

A synapse is an internal cell created inside another cell's computation. It is useful for transformations such as filtering, throttling, grouping, smoothing, deltas, or local history.

A synapse participates in Matrix semantics. It is not an escape hatch from currentness, dependency tracking, or propagation integrity. A synapse may maintain private state only to the extent that state is mediated by the synapse's own semantics and does not expose partial or obsolete Matrix state.

## Propagation Pulse

A propagation pulse is the transition caused by assigning a new value to an input cell.

Let `S` be the coherent Matrix state before an input assignment. Let `X` be the assigned input cell. Propagation produces a new coherent state `S+`.

During the transition from `S` to `S+`, Matrix must prevent application code from observing a mixture of old and new dependent values. A formula, observer, or deferred task must not mistake partial propagation for coherent state.

A pulse has an identity. Cells have currentness relative to that pulse. Reads during propagation must either return a value already current for the pulse or force the necessary recomputation before returning.

## Data Integrity Contract

When application code assigns a new value to input cell `X`, Matrix guarantees the following for all non-lazy state affected by that assignment.

### Completeness

Every dependent value affected by the change to `X` is brought current.

A dependent may be direct or indirect. If `A` depends on `B`, and `B` depends on `X`, then a change to `X` must make `B` current before `A` can compute from `B`.

### Minimality

Only affected state is recomputed.

If `B` depends on `X`, and `B` recomputes to a value considered unchanged by its equality/unchanged predicate, then dependents of `B` are not affected by `X` through `B` and must not recompute for that path.

### Exactly-Once Eager Recalculation

Within one pulse, each affected eager formula cell is recomputed exactly once.

Duplicate evaluation is not a harmless performance issue. In a live system, duplicate evaluation can produce duplicate effects, stale intermediate reads, incorrect sequencing, or externally visible behavior.

### Current Reads

A formula reading another Matrix-managed property must see a value current with the pulse being processed.

It is invalid for a formula to compute from `X+` while also reading a dependent value still current only with prior state `S`.

### Dynamic Dependency Replacement

A formula's dependencies are the Matrix-managed properties actually read during the current formula evaluation.

Before a formula recomputes, obsolete dependencies from prior evaluations must be removed or made inactive. After recomputation, the dependencies observed in the new evaluation are the dependencies for future invalidation.

Branching must therefore be safe:

```clojure
(cF
  (if (mget me :enabled?)
    (mget me :expensive-derived-value)
    :disabled))
```

When `:enabled?` changes, the dependency on `:expensive-derived-value` must appear or disappear according to the branch actually taken.

### Observer Coherence

Observers must see only values current with the state transition they are observing.

An observer for a changed property must not run while other affected properties are still obsolete. An observer must not force or observe a partially propagated graph.

### Re-entrant Mutation Discipline

Observer-initiated mutation creates a new transition. It must not occur inside the current transition.

If observer code assigns input `Y` in response to `X`, the assignment to `Y` must be deferred so the transition caused by `X` completes first. The `Y` transition is then processed as its own pulse, with its own currentness and observer phase.

The sequence is:

```text
S  --assign X-->  S+  --deferred assign Y-->  S++
```

The forbidden sequence is:

```text
S  --assign X-->  partly propagated S+ / premature Y / mixed S++
```

### Deferred Task Isolation

Deferred client work scheduled during a pulse must run against coherent state for the intended pulse.

Deferred work created while processing `X` must not accidentally observe values from a later observer-queued transition as though they belonged to the `X` transition.

### Lazy Cell Currentness

Lazy cells may defer recomputation according to their laziness mode.

Deferral does not permit stale reads. When a lazy cell is read, it must either return a value current with all relevant visible dependencies or recompute before returning.

### Ephemeral Event Semantics

Ephemeral cells model events in a steady-state dataflow system.

When an ephemeral property takes on a non-nil value, that value propagates normally. After propagation, the property returns silently to nil without launching a second visible propagation wave.

## Scheduling Rules

Matrix owns propagation scheduling.

Application code may request input changes. Formula code may compute values. Observer code may perform output work. None of those roles may replace the propagation scheduler.

The scheduler must maintain these invariants:

1. A pulse has a single currentness identity.
2. Input assignment advances the pulse.
3. Formula recomputation occurs only when a cell is out of date.
4. A recomputed or assigned cell becomes current for the pulse.
5. Dependencies are captured only through Matrix-managed reads.
6. Listeners/dependents are notified in a way that prevents inconsistent intermediate views.
7. Observers run only after the value they observe and the affected graph are coherent.
8. Observer-initiated input changes are queued or deferred, not interleaved.

## Authoring Rules

### Use Matrix Accessors for Matrix State

Read Matrix-managed state through Matrix accessors.

Write input state through Matrix writers.

Do not maintain hidden parallel caches of derived Matrix state in ordinary mutable fields. If a value is derived from Matrix state and participates in application behavior, express it as a formula cell.

### Keep Derivation and Effects Separate

A formula computes a value.

An observer applies a coherent value to the outside world.

A formula must not be used as an output hook. It must not mutate other Matrix cells or perform externally visible effects as part of recomputation.

### Treat No-Cell Properties as Constants

A no-cell property is outside Matrix dependency management.

It may be used as construction-time or immutable data. It must not become a mutable fact read by formulas unless it is promoted to a Matrix-managed property.

### Use `with-cc` for Observer Mutation

Mutation from a watch/observer must use the required continuation/deferred mechanism.

A direct write from observer code is a propagation violation because it risks constructing `S++` before `S+` is coherent.

### Prefer Formulaic State Over Command Sequencing

When a property can be described as a function of other properties, it should be a formula.

Do not manually sequence updates such as:

```text
change A
then remember to update B
then remember to update C
then notify D
```

Use input cells for external facts and formula cells for derived facts.

## Wrappers and Front Ends

Matrix wrappers adapt the dataflow model to external systems.

A UI wrapper, storage wrapper, network wrapper, or device wrapper should not become the source of truth for derived application state. It should either:

- write external input into Matrix input cells; or
- observe coherent Matrix state and apply it to the external system.

The external system may have its own repaint, callback, or event model. That model does not replace Matrix propagation semantics.

A view redraw is not the same thing as model coherence.

## Realtime and Streaming Workloads

Matrix must support applications where inputs arrive continuously and derived state has operational consequences.

Examples include UI event streams, sockets, game/server perception feeds, sensor feeds, and motion-analysis inputs. In these cases, propagation integrity is not merely about avoiding redundant work. A duplicate evaluation, stale read, or premature observer may produce the wrong output at the wrong time.

For high-rate input streams, use Matrix mechanisms such as synapses, unchanged predicates, laziness, and explicit input boundaries to manage load without weakening coherence.

## Conformance Tests

Changes to Matrix core must be validated against the integrity contract.

A useful conformance suite should include at least these cases:

1. diamond dependency: `A` depends on `B` and `C`, both depend on `X`;
2. unchanged intermediate: `B` recomputes from `X` but remains unchanged, so `A` does not recompute;
3. dynamic branch: a formula switches between dependencies as a condition changes;
4. stale-read trap: a formula reads both `X` and another value derived from `X`;
5. observer coherence: observers read other affected properties and see only current values;
6. observer mutation: observer writes are deferred and processed as a later pulse;
7. duplicate-evaluation trap: each affected eager formula runs exactly once per pulse;
8. lazy read: lazy state returns current values when read after dependency changes;
9. ephemeral event: event value propagates, then resets silently;
10. synapse state: local synapse history survives recomputation without escaping the contract;
11. high-rate input: repeated input changes do not produce mixed-state observer output;
12. wrapper integration: external UI/storage/device updates occur from coherent observer state.

Any regression that preserves visible demo behavior but violates one of these cases is an architectural failure.

## Rules for Generated or Assisted Code

Generated code must use Matrix as the authority for Matrix-managed state.

A patch touching Matrix propagation, model properties, watches, wrappers, or realtime input processing must preserve the data integrity contract. Successful compilation, plausible UI behavior, or a passing smoke test is insufficient.

Generated code must not:

- replace formula cells with manually maintained mutable derived fields;
- bypass `mget` for dependency-relevant reads;
- bypass `mset!` or `mswap!` for input mutation;
- mutate Matrix state directly from observers without the required deferred mechanism;
- move observer effects into formulas;
- weaken unchanged predicates to force correctness by over-propagation;
- remove conformance tests because a wrapper or UI framework appears to make them unnecessary;
- treat redraw, repaint, or callback order as evidence of Matrix coherence.

Before accepting generated code, verify the affected source properties, derived properties, observers, and deferred mutations against the contract above.

## Architectural Boundary

Matrix is the state propagation engine.

Front-end libraries, storage systems, network APIs, sensors, and devices are external systems. They may feed Matrix inputs or receive coherent Matrix outputs. They do not own Matrix-derived state.

The architecture succeeds when application behavior is expressed as a small number of input facts, a larger population of formulaic facts, and observers that apply already-coherent facts to the world.

## References

- [Matrix repository README](README.md)
- [Clojure/ClojureScript Matrix README](cljc/matrix/README.md)
- [Synapses](cljc/matrix/Synapses.md)
- [The Cells Manifesto](https://tilton.medium.com/the-cells-manifesto-b21ed10329f0)
