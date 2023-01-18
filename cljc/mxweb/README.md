# mxWeb

The [Matrix](https://github.com/kennytilton/matrix/tree/master/cljs/matrix) dataflow library applied to the Web. 

An [mxWeb Training Guide](https://github.com/kennytilton/mxweb-trainer/wiki) is under construction. It contains a series of graded exercises, each with its own tutorial doc and coding exercise(s).

Yes, MatrixRN is under construction.

### Just Run It

mxWeb is a library, but can also be run as a Web app to try examples.

To run the current example, just:
```bash
cd matrix/cljc/mxweb
clojure -M -m figwheel.main --build svg-examples --repl
```

### Overview

Optimally efficient, fine grained, truly reactive DOM programming in CLJS, without React, without _virtual dom_.

### How it works

Matrix-powered `models` (CLJS typed maps) are arranged in a tree isomorphic to a Web page DOM tree. Each Matrix node/model will transparently become a DOM node, long-lived across many renderings, coming and going only as the display responds to user interaction. Again, _not_ VDOM.

DOM maintenance happens only when necessary; if an application state change requires only that some text turn red, the only DOM work will be to change the span's style `color` attribute. Internally, the "red" decision will be made by the formula (function) for the span object style property. mxWeb includes an observer for such properties that applies them to the DOM node corresponding to the Matrix span map.

### Working Examples

[rxTrak](https://github.com/kennytilton/matrix/tree/master/cljs/rxtrak) takes [TodoMVC](https://todomvc.com/) to a new level by incorporating an AJAX lookup of each "to-do", now rX prescription, on the [FDA Drug database](https://open.fda.gov/apis/) looking adverse events with that drug. 

[rxTrak](https://github.com/kennytilton/matrix/tree/master/cljs/rxtrak) demonstrates the grace with which Matrix handles async as does the [Matrix Flux Challenge](https://github.com/kennytilton/matrix/tree/master/cljs/fluxchallenge) implementation. The [Flux Challenge](https://github.com/staltz/flux-challenge) originated from author Staltz's concern: "It's my personal belief that Flux does not provide an elegant way of coordinating multiple async data sources...".

And of course the [training guide](https://github.com/kennytilton/mxweb-trainer/wiki) is full of smaller working examples.

### License

Copyright © 2016 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
