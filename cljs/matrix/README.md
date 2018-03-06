# Matrix / CLJS
### ...by TodoMVC Example

Welcome to the ClojureScript version of Matrix, a fine-grained dataflow (aka reactive) library we exemplify below with a description of how it supports [Tag](https://github.com/kennytilton/tag/tree/master/cljs), a sneaky-powerful Web framework as simple as its name.

We explain Tag in turn with a proof-of-concept implementation of the [TodoMVC Classic](https://github.com/tastejs/todomvc/blob/master/app-spec.md), the concept being...

> What happens if a sophisticated, generic reactive library supports every aspect of a web app, including the model, logical view, DOM manipulation, and object persistence?

Matrix itself -- the generic dataflow engine -- is a ClojureScript port of the Common Lisp original, [Cells](http://smuglispweeny.blogspot.com/2008/02/cells-manifesto.html). Cells has evolved over two decades to meet the demands of several enterprise applications, one of them this [algebra learning environment](http://tiltonsalgebra.com/#), another an 80kloc [clinical drug trial management system](http://smuglispweeny.blogspot.com/2008/03/my-biggest-lisp-project.html). So that much is reasonably solid. The rest is...proof-of-concept.

Let us begin by seeing the beast in action.

## Try the TodoMVC Demo

Here is a [live tryout](https://kennytilton.github.io/MatrixCLJS/).

## Build the TodoMVC Demo

This project was created from David Nolen's excellent [mies template](https://github.com/swannodette/mies).  First:
> make the Tag directory your present working directory.

Now follow these critical elements of the setup instructions from the `mies` template:

> Most of the following scripts require [rlwrap](http://utopia.knoware.nl/~hlub/uck/rlwrap/) (on OS X installable via brew).
>
> Build your project once in dev mode with the following script and then open `index.html` in your browser.
>
>    ./scripts/build
>
> To auto build your project in dev mode:
>
>    ./scripts/watch

If you have not already done so, open `Tag/index.html` in Chrome, FireFox, Opera or Safari on Mac OS X. You should see the same application as the live demo above.

## Reactive programming with MatrixCLJS

Now let us look at how we build reactive web apps. Since the Matrix dataflow library drives all aspects of this app -- abstract view, DOM updates, model, and persistence -- we should begin by getting a reasonable handle on Matrix dataflow in the abstract.

### Matrix from 30,000 feet
With the Matrix library, global variables or individual properties of objects can be expressed as so-called *cells*. Cells come in two flavors. *Formulaic* cells use standard HLL code to compute their value from other cells. For a dead simple example, the *TodoMVC* rules mandate we apply the "completed" class to to-do LIs if and only if the user has marked them as, well, completed:
````cljs
  (li {:class   (cF (if (md-get todo :completed) "completed" ""))
       ...}...)
````
Above we see the CSS `class` tracking the completed property of the lexically closed-over `todo`, a Matrix-aware object lifted from `window.localStorage`. `(md-get <x> <y>)` establishes dependency of the enclosing formula on property `y` of `x`. A so-called *observer* (discussed below) automatically propagates freshly computed values of `class` to the actual DOM.
                      
*Input* cells are assigned new values by conventional imperative code, usually in an event handler.
````cljs
(input {:class "toggle" ::tag/type "checkbox"
        :checked (cF (md-get todo :completed))
        :onclick #(md-reset! todo :completed (not (md-get todo :completed)))}) ;; <-- triggering the dataflow
````
`md-reset!` is the dataflow "writer" that mirrors `md-get`. It causes all direct or indirect dependents to recalculate. Note also the `checked` attribute, another example of a property following the `completed` property of our todo.

Why the "input" characterization? It cannot be rules all the way down. These cells are the inputs into the dataflow from outside imperative code. The diagram below is of a *directed acyclic graph* that can help imagine the flow that arises when input cells change and their new values are then consumed by dependent formulaic cells when their recomputation is triggered. In the diagram below, cells 7, 5, and 3 would be the input cells.

![DAG graphic](https://github.com/kennytilton/matrix/blob/master/cljs/matrix/resources/Directed_acyclic_graph.png) 

The dataflow engine propagates each new input value by recursively recomputing dependent formulaic cells in a [glitch](https://en.wikipedia.org/wiki/Reactive_programming#Glitches)-free cascade. We get useful behavior out of this cascading calculation via "on change" callbacks. We name these callbacks "observers" (not to be confused with [RxJS](http://reactivex.io/rxjs/) or [MobX](https://github.com/mobxjs/mobx/blob/master/README.md) *observables*). Much simplified:
````cljs
(defmethod observe-by-type [:tiltontec.webmx.html/tag] [slot me new-value prior-value _]
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

Speaking of (transparent) code, let us look at some more code to make the above more concrete. 

### Matrix Concrete: Sample Code

The view from 30k is nice but unsatisfying; I for one do not grasp a software library until I see it in the wild. The source code of this repository includes three heavily-annotated application source files: 

* Two belong to the TodoMVC implementation: [todomx/todo.cljs](https://github.com/kennytilton/webmx/blob/master/cljs/webmx/src/tiltontec/webmx/example/todo.cljs) covers how we load to-dos from `localStorage` into the application matrix so the view can track them reactively, [todomx/matrix.cljs](https://github.com/kennytilton/webmx/blob/master/cljs/webmx/src/tiltontec/webmx/example/todomvc.cljs) covers the app itself, predominantly the view.
* The third annotated source is [todomx/gentle-intro.cljs](https://github.com/kennytilton/webmx/tree/master/cljs/webmx/src/tiltontec/webmx/example), a zero-to-sixty progression of working examples starting with a basic reactive Cell and ending with point updates to the DOM in reaction to a change in the title of a to-do.
* Finally, [todomx/startwatch.cljs](https://github.com/kennytilton/webmx/blob/master/cljs/webmx/src/tiltontec/webmx/example/startwatch.cljs) demonstrates a fun capability in which formulaic Cells close over atoms in which they maintain state across rule invocations to support semantics derived from the *stream* of values they encounter. Think `RxJS Lite`. The moral here is that streams are emergent properties arising naturally from the values sampled by formulaic Cells; there is no need to construct or maintain them explicitly.

Check those out to see how the ideas of MatrixCLJS play out in working code. Or, if surfing code seems too much like work, here are the highlights.

### Matrix Highlights
These takeaways from the annotated source all speak to the programmer experience (including getting optimal DOM manipulation for free).

#### Universal reactivity (all the way down)
`ReactJS` introduced many of us to the magic of declarative programming, but only of the view. MatrixCLJS extends the declarative magic to the entire application. \[Aside: check out [MobX](https://github.com/mobxjs) to see a strong dataflow library driving the state in the ReactJS lifecycle.\] 

#### "Wireless" reactivity: transparent, automatic dependency management
No explicit publish or subscribe. Access a property (or call a function that does) and we have subscribed to it. If I have to overhaul a web page, I shuffle the view code about focusing only on the U/X; the dependency re-wiring takes care of itself. This quaity may be the most vital to a quality reactive programmer experience.

#### Omniscience
As Buddha said, everything is connected. Good U/X especially requires multiple elements to work together. The matrix makes it easy for a U/X programmer to reach the runtime state they need to make a widget work. This does not confuse separate concerns, it connects them.

#### Naturally Efficient
Because a matrix changes shape at the granularity of a property, minimal runtime execution follows from the same declarative code we are writing anyway to express our application. The `Tag` library can update just the `hidden` attribute of a DOM element if hiding something is the only behavior demanded by a user gesture, and our thin `localStorage` wrapper can silently update individual to-dos as the app maintains them in memory. 

#### Occam's Bulldozer, or: The Un-Framework
Aside from the largely transparent Matrix, there is no framework, just HTML and ClojureScript. A decent dataflow mechanism seems sufficient to make fast web apps easy to build. As circumstantial evidence, two other web libraries with nice dataflow capabilities also have two of the shortest, simplest solutions to the TodoMVC classic: [binding.scala](http://todomvc.com/examples/binding-scala/#/) and [Hoplon/Javelin](https://github.com/hoplon/demos/tree/master/todoFRP). Not a coincidence, we suspect.

## Summary
So what *does* happen when we build a web framework atop a sophisticated, truly reactive library? We get:
* declarative, functional syntax unifying all concerns;
* optimum performance from knowing exactly what changed with fine granularity (no diffing, no excessive VDOM generation);
* automatic state management;
* transparent and automatic dependency management (no publish/subscribe);
* transparent streams ala RxJS;
* a simple mechanism for manifesting the emergent dataflow (observers); and
* a minimum of artificial framework.

That list hits transparency and automation quite often, by design intent. In his keynote at Clojure Conj 2017 marking the tenth anniversary of Clojure, its inventor [Rich Hickey gave a nod](https://youtu.be/2V1FtfBDsLU?t=59m23s) to the languages that inspired him, and to the sensibilities of their inventors:

> Smalltalk and Common Lisp are languages that were obviously written by people trying to write programs for people.

MatrixCLJS was developed for people trying to building applications, and to us that means not having to think much about MatrixCLJS.

## Next steps
The next steps for MatrixCLJS are:
* Synapses [DONE]: Check out this [cursory treatment](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/Synapses.md) of synapses or, again, see the heavily annotated [todomx/startwatch.cljs](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/src/todomx/startwatch.cljs) and the [synapse tests](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/test/tiltontec/cell/synapse_test.cljc) to see how a free-floating or "anonymous" Cell can serve usefully as an intermediary (hence "synapse") between a host Cell and its dependencies.
* Eliminate Callback Hell [DONE]: Track [this write-up](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/XHR.md) to see how simple property-to-property dataflow greatly ameliorates the coding of elaborate remote request processing. Spoiler alert: we now have Callback Purgatory, no longer in Hell but some work remains when using the new synapse-enabled *XHR* module to reach remote request heaven. 
* `Tag 2.0`: this HTML library is quite incomplete and rough. It needs finishing, integration with the XHR module, and a few widgets would not hurt. A remote datagrid might be first.
* [Material Design](https://getmdl.io): not sure if this needs to be part of the framework, but we are suckers for eye candy.
* Documentation: [MDN](https://developer.mozilla.org/en-US/) by design imperative will be the doc for `Tag`, but the Matrix dataflow substrate needs doc.

We also must decide whether to work first on the ClojureScript version or the Javascript version. Send your votes and any corrections, comments, or questions to kentilton at gmail etc etc.

## License

Copyright © 2017 [Kenneth Tilton](http://github.com/kennytilton)

Distributed under the MIT Public License.
