# The Matrix and mxWeb FAQ
I had to make these up for now.
## Dataflow is unchecked mutation!
We remember that feeling. In truth, a DAG of nodes deriving their values from 
functions of other nodes are just an optimization of functional programming: 
computed values are cached for performance and the cache invalidation is reliably automatic.

Guy Steele compared constraint programming to automatic garbage collection, 
except in this case the automaticity is applied to internal state consistency.
## So you think you invented dataflow?
Nope. The prior, subsequent, and concurrent art is extensive. Dataflow is the 
wheel that keeps on being reinvented. Some libraries close to Matrix in spirit 
are Common Lisp 
Garnet KR, C++ Adam/Eve, Scheme FrTime, JS MobX, binding.Scala, CLJS 
Hoplon/Javen, and the CLJS Reagent ratom.
