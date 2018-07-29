# Introduction to Matrix and mxWeb

mxWeb is a thin web un-framework built atop the Matrix dataflow library. Matrix endows application state with causal power over other program state, freeing the developer of the tedious and error-prone task of reliably propagating change across complex models.

Programmers specify formulas for individual properties of things, using transparent syntax that hides the wiring necessary to achieve the causation. An application emerges that runs by itself, more efficiently and reliably than is likely with manual state propagation.

Matrix has much good company in what lately has been called _reactive programming_. The differences are in degree, not spirit. We believe Matrix offers more granularity, more flexibility, finer granularity, and greater application coverage than others.

We introduce Matrix in the context of one of its derived works, mxWeb, because nothing challenges an application more than keeping application state consistent while an intelligent user does their earnest best to use a rich interface correctly.

So far, so fuzzy. Let's get an SPA running and look at some code. 

## Set-Up

````bash
git clone 
cd matrix/cljs/mxintro
lein deps
lein clean
lein fig:build
````
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL.

A web page should appear on a browser near you with a header saying just "hello, Matrix".




## License

Copyright © 2018 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
