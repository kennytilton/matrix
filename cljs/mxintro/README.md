# Introduction to Matrix and mxWeb

mxWeb is a thin web un-framework built atop the Matrix dataflow library. Matrix endows application state with causal power over other program state, freeing the developer of the tedious and error-prone task of reliably propagating change across complex models.

Matrix has much good company in this field known as _reactive programming_. We believe Matrix offers more transparency, finer granularity, more expressiveness, and greater application coverage, but the differences are in degree, not spirit.

Below we introduce Matrix in the context of mxWeb, because nothing challenges a developer more than keeping application state consistent while an intelligent user does their best to use a rich interface correctly.

So far, so fuzzy. Let's get "hello, Matrix" running and look at some code. 

## Set-Up

````bash
git clone https://github.com/kennytilton/matrix.git
cd matrix/cljs/mxintro
lein deps
lein clean
lein fig:build
````
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. A web page should appear on a browser near you with a header saying just "hello, Matrix".

## Dataflow


## License

Copyright © 2018 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
