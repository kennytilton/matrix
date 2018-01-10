# Usage

Your project.clj dependency: `[com.tiltontec/matrix "0.1.2-SNAPSHOT"]`

See example project `todomx` in its own repo for individual modules to require. (Yes, we need to simplify that.)

To build locally, check the scripts directory. `scripts/build` from the project root dir to build once, `scripts/watch` to build continuously.

# Matrix from 30,000 feet
With the Matrix library, global variables or individual properties of objects can be expressed as so-called *cells*. Cells come in two flavors. *Formulaic* cells use standard HLL code to compute their value from other cells. For a dead simple example, the *TodoMVC* rules mandate we apply the "completed" class to to-do LIs if and only if the user has marked them as, well, completed:
````cljs
  (li {:class   (c? (if (md-get todo :completed) "completed" ""))
       ...}...)
````
Above we see the CSS `class` tracking the completed property of the lexically closed-over `todo`, a Matrix-aware object lifted from `window.localStorage`. `(md-get <x> <y>)` establishes dependency of the enclosing formula on property `y` of `x`. A so-called *observer* (discussed below) automatically propagates freshly computed values of `class` to the actual DOM.
                      
*Input* cells are assigned new values by conventional imperative code, usually in an event handler.
````cljs
(input {:class "toggle" ::tag/type "checkbox"
        :checked (c? (md-get todo :completed))
        :onclick #(md-reset! todo :completed (not (md-get todo :completed)))}) ;; <-- triggering the dataflow
````
`md-reset!` is the dataflow "writer" that mirrors `md-get`. It causes all direct or indirect dependents to recalculate. Note also the `checked` attribute, another example of a property following the `completed` property of our todo.

Why the "input" characterization? It cannot be rules all the way down. These cells are the inputs into the dataflow from outside imperative code. The diagram below is of a *directed acyclic graph* that can help imagine the flow that arises when input cells change and their new values are then consumed by dependent formulaic cells when their recomputation is triggered. In the diagram below, cells 7, 5, and 3 would be the input cells.

![DAG graphic](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/resources/Directed_acyclic_graph.png) 

The dataflow engine propagates each new input value by recursively recomputing dependent formulaic cells in a [glitch](https://en.wikipedia.org/wiki/Reactive_programming#Glitches)-free cascade. We get useful behavior out of this cascading calculation via "on change" callbacks. We name these callbacks "observers" (not to be confused with [RxJS](http://reactivex.io/rxjs/) or [MobX](https://github.com/mobxjs/mobx/blob/master/README.md) *observables*). Much simplified:
````cljs
(defmethod observe-by-type [:tiltontec.tag.html/tag] [slot me new-value prior-value _]
  (case slot
        :hidden (set! (.-hidden dom) new-value)
        :class (classlist/set dom new-value)
        :checked (set! (.-checked (tag-dom me)) new-value
        ....)))
````
In contrast with RxJS and MobX, Matrix observers work off to the side, if you will, as ancillary participants tapping into the main flow to produce tangible behavior. Think "UN observer vs. combatant". 

We refer to the combination of cascading recomputation and consequent observation as *dataflow*. Objects with Cells as properties are called *models* in the sense of a *working model*, this because these objects change and act autonomously as driven by dataflow. Hence the *md-* prefix, by the way.

Matrix includes support for arranging models as a tree in which a model can have zero or more children and children have one parent and have a reference to that parent. This omni-directional linkage means any cell formula or observer can reach any other cell in the tree of models; they have perfect information. We call a population of objects connected by interdependent cell properties a *matrix* in concordance with this definition (forget the otherwise fine movie): 

> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

In the case of TodoFRP, that something else is an interactive do-list. 

A major design goal was ease of use by programmers. Dependencies are established transparently by simply reading a property. Dataflow is triggered simply by assigning a new value to an input cell. Shuffle the code during a refactoring and the pub/sub moves with it. 
