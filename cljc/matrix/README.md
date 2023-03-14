![Matrix cell culture](../../images/mx-banner-red.jpg)
# Matrix
`Matrix` solves this problem on its own: when (7) changes, how do we calculate (9) just once?

![DAG graphic](https://github.com/kennytilton/matrix/blob/main/cljc/matrix/resources/Directed_acyclic_graph.png?raw=true) 

[By Johannes Rössel](https://commons.wikimedia.org/w/index.php?curid=5559952)

The win? Fine-grained, gltch-free, transparent reactivity automatically extracted from declarative forms.

Too abstract? Here is how it looks/works [in a GUI](https://kennytilton.github.io/web-mx-quickstart/#/).

### Why "matrix"?
The movies were fun, but no, not that. And forget maths. Think "cell culture".

> A matrix provides structural support, regulates cell behavior, and plays a role in cellular signaling and communication. --ChatGPT

Not bad. We were motivated by this dictionary entry:

> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

Any property can be expressed as a formula, but when the property is the _children_ of an object, the very _population_ of our apps can grow or shrink as app events unfold. So "Matrix".

### Applications

The killer app for reactivity is the front-end, but Matrix has been applied successfully to non-GUI work as well, such as [RoboCells](https://sourceforge.net/projects/robocells/). The [RocoCup Simulation](https://www.robocup.org/leagues/23) server fed a UDP stream of complete, player-specific world perception states to player clients every 100ms, which they had to parse and react to. If your app is similar, you may just want standalone Matrix processing.

Feel free to reach out for guidance on how your application might be recast as a dataflow problem.

### Including Matrix in a project
Matrix is hosted on clojars.

[![Clojars Project](https://img.shields.io/clojars/v/com.tiltontec/matrix.svg?include_prereleases)](https://clojars.org/com.tiltontec/matrix)

In leiningen projects, add `[com.tiltontec/matrix "m.m.p-SNAPSHOT"]` to your dependencies.

For deps.edn projects, `com.tiltontec/matrix {:mvn/version "m.m.p-SNAPSHOT"`.

In your source, require `[tiltontec.model.core]`, `[titlontec.cell.core]`, and other NSes as needed. Work has begun on a new `[tiltontec.matrix.api]` to reduce the clutter.

### Testing
For the CLJ version, regression tests can be run by `lein test`. Other than MX-wrapped UI code, the tests are also the code examples.

### Matrix Highlights
The best way to understand/learn Matrix is in the context of a Matrix-powered UI such as [Web/MX](https://github.com/kennytilton/web-mx) or [Flutter/MX](https://github.com/kennytilton/flutter-mx). That said, these following takeaways from the annotated source all speak to the programmer D/X:

#### Universal reactivity (all the way down)
`ReactJS` introduced many of us to the magic of declarative programming, but only of the view. `Web/MX` extends the declarative magic to the entire application. 

#### "Wireless" reactivity: transparent, automatic dependency management
Matrix requires no explicit publish or subscribe. Access a property using the Matrix API `mget` (or call a function that does) and we have subscribed to it. Alter a property via `mset!` or `mswap!` and the entire dependency graph is updated, glitch-free.

#### Omniscience/Omnipotence
As Buddha said, everything is connected. Good U/X especially requires multiple elements to work together. The Matrix makes it easy for a U/X programmer to specify  the runtime state they need to make a widget work, anywhere in the app DAG. When the world needs to change, Matrix lets imperative code mutate any designated "input" property.

#### Omnipresence
If a third party library is not reactive, a one-time effort can make it reactive with more or less "glue" code.

#### Naturally Efficient
Because a matrix changes shape at the granularity of a property, minimal runtime execution follows from the same declarative code we are writing anyway to express our application. The `Web/MX` library can update just the `hidden` attribute of a DOM element if hiding something is the only behavior demanded by a user gesture, and our thin `localStorage` wrapper can silently update individual to-dos as the app maintains them in memory. 

### API Cheat Sheet
The core API of Matrix. More to come RSN.

#### Navigation

| Code | Comment |
| ---- | ------- |
| (fm-navig seeking starting-at & options) |	Search MX nodes for node matching `seeking`. |
(fmu seeking & starting)	| Search `up and around` from starting node, which defaults to lexical `me`.
(fasc seeking starting)	| Search ascending parent chain from starting.

#### Accessors
| Code | Comment |
| ---- | ------- |
(mget model property)	| The MX getter. Can be called from anywhere. When called in the scope of a Cell formula, establishes a reactive dependency on the gotten property.
(mset! model property value)	| The MX setter. Alias mreset!. Call from any imperative code. When calling from a watch/observer, must be wrapped in (with-cc :tag setter)
(mswap! md prop fn & args)|	mx swap!
(with-cc tag & body)	| Required wrapper for MX mutation in scope of a watch function.

#### Cells
| Code | Comment |
| ---- | ------- |
no cell involved | e.g. :answer 42	mset!/mswap! throw exceptions at run time.
(cI value & option-values)	| Marks the associated property as an MX input. eg, `:answer (cI 42)`
(cF & body)	| Provides a derived value for a property. Hidden parameter `me`. eg :answer (cF (* 6 9))
(cF+ [& option-values] & body)	| A version of `cF` that takes cell options such as :watch.
(cFn & body)	| Start as formula for initial value computation, then convert to input cell. Akin to "constructor initialization".
(cFonce & body)	| Start as formula for initial computation, then behave as immutable property. Alias `cF1`.

#### Cell Options
| Code | Comment |
| ---- | ------- |
:input?	| Can imperative code mutate this property? Macro cI: (cI 42)
:watch	| Alias :obs for observer. Expects an 'on-change' function: (fn [property me new prior cell])
:ephemeral?	| Ephemeral properties, when they take on a new value, propagate as usual but then revert silently to nil, without propagating in any way.
:lazy	| Several varieties of laziness: :always, :once-asked, :until-asked.
:async? | WIP. An async operation will be resolved and the property will assume the result as a state change.

## License

Copyright © 2017 [Kenneth Tilton](http://github.com/kennytilton)

Distributed under the Eclipse Public License.
