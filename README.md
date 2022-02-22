![Matrix cell culture](images/mx-banner-red.jpg)

Welcome to the "mono" repo for Matrix, the generic, point-to-point reactive engine that began as Common Lisp [Cells](https://github.com/kennytilton/cells) over twenty years ago.

This repo contains:
* Clojure/ClJS version
* a JavaScriot version
* wrappers at various stages of development for HTML/CSS, ReactJS, and ReactNative; and
* wrappers for XHR and localStorage, with more to come.

Here is our road map, absent requests for specific implementations for evaluation/adoption:
* a hands-on, progressive Matrix+CLJS+mxWeb learning experience, linking to...
* ...reference-style documentation as needed;
* the same for Javascript;
* the same for CLJS React Natuve.


Please watch this space for frequent updates, or contact me directly: kentilton at gmail dot com.

# Matrix from 30,000 feet
With the Matrix library, global variables or individual properties of objects can be expressed as so-called *cells*. Cells come in two flavors. *Formulaic* cells use standard HLL code to compute their value from other cells. For a dead simple example, the *TodoMVC* rules mandate we apply the "completed" class to to-do LIs if and only if the user has marked them as, well, completed:
````cljs
  (li {:class   (c? (when (<mget todo :completed)
                        "completed"))
       ...}...)
````
Above we see the CSS `class` tracking the completed property of the lexically closed-over `todo`, another Matrix-aware object lifted from `window.localStorage`. `(<mget <x> <y>)` establishes dependency of the enclosing formula on property `y` of `x`. A so-called *observer* (discussed below) automatically propagates freshly computed values of `class` to the actual DOM.
                      
*Input* cells are assigned new values by conventional imperative code, usually in an event handler.
````cljs
(input {:class "toggle" ::tag/type "checkbox"
        :checked (c? (<mget todo :completed))
        :onclick #(mswap!> todo :completed)}) ;; <-- mswap!> does swap and triggers dataflow to dependents
````
`mswap!>` is a dataflow "writer" that mirrors `<mget`. It causes all direct or indirect dependents to recalculate. (Note also the `checked` attribute, another example of a property following the `completed` property of our todo.)

Why the "input" characterization? It cannot be rules all the way down. These cells are the inputs into the dataflow from outside imperative code. The diagram below is of a *directed acyclic graph* depicting the flow that arises when input cells change and their new values are consumed by formulaic cells (when their recomputation is triggered). In the diagram below, cells 7, 5, and 3 would be the input cells.

![DAG graphic](https://github.com/kennytilton/matrix/blob/main/cljs/matrix/resources/Directed_acyclic_graph.png?raw=true) 

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
