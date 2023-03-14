![Matrix cell culture](../../images/mx-banner-red.jpg)
# Matrix
`Matrix` addresses this problem...

![DAG graphic](https://github.com/kennytilton/matrix/blob/main/cljc/matrix/resources/Directed_acyclic_graph.png?raw=true) 

...with this solution: fine-grained, gltch-free, transparent reactivity, extracted from declarative forms.

### Why "matrix"?
The movies were fun, but no, not that. Nor math. Think "cell culture".

> A matrix provides structural support, regulates cell behavior, and plays a role in cellular signaling and communication. --ChatGPT

Not bad. We were motivated by this dictionary entry:

> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

Any property can be expressed as a formula, but when the property is the _children_ of an object, the very population of our apps can reat dynamically to surrounding events. So "Matrix".

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
For the CLJ version, regression tests can be run by `lein test`.

### Matrix Highlights
The best way to understand/learn Matrix is in the context of a Matrix-powered UI such as [Web/MX](https://github.com/kennytilton/web-mx) or [Flutter/MX](https://github.com/kennytilton/flutter-mx). That said, these following takeaways from the annotated source all speak to the programmer D/X:

#### Universal reactivity (all the way down)
`ReactJS` introduced many of us to the magic of declarative programming, but only of the view. `Web/MX` extends the declarative magic to the entire application. 

#### "Wireless" reactivity: transparent, automatic dependency management
Matrix requires no explicit publish or subscribe. Access a property using the Matrix API `mget` (or call a function that does) and we have subscribed to it. Alter a property via `mset!` or `mswap!` and the entire dependency graph is updated, glitch-free.

#### Omniscience
As Buddha said, everything is connected. Good U/X especially requires multiple elements to work together. The Matrix makes it easy for a U/X programmer to specify  the runtime state they need to make a widget work, anywhere in the app DAG.

#### Naturally Efficient
Because a matrix changes shape at the granularity of a property, minimal runtime execution follows from the same declarative code we are writing anyway to express our application. The `Web/MX` library can update just the `hidden` attribute of a DOM element if hiding something is the only behavior demanded by a user gesture, and our thin `localStorage` wrapper can silently update individual to-dos as the app maintains them in memory. 


## License

Copyright © 2017 [Kenneth Tilton](http://github.com/kennytilton)

Distributed under the Eclipse Public License.
