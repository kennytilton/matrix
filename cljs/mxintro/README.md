# Introduction to Matrix and mxWeb

Fundamentally, `Matrix` endows application state with causal power over other program state, freeing the developer of the burden of reliably propagating unpredictable change across highly interdependent models.

More grandly, Matrix brings our application models to life, animating them in response to streams of external inputs. Hence the name.

> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

### You say "reactive", we say "dataflow"
Most folks today call this _reactive programming_. That describes well the programmer mindset in the small, but we find _dataflow_ more descriptive of the emergent systems. A financial analyst builds a spreadsheet model of a business by writing individual cell formulas over other cells, yes, but their goal is to play "what if?" by changing critical inputs and watching the effect propagate across the model.

Matrix has much good company in this field. We believe Matrix offers more simplicity, transparency, granularity, expressiveness, efficiency, and functional coverage, but in each dimension differs in degree, not spirit.

### mxWeb "poster" application
`mxWeb` is a thin web framework built atop Matrix. We introduce Matrix in the context of mxWeb, because nothing challenges a developer more than keeping application state consistent while an intelligent user does their best to use a rich interface correctly.

So far, so fuzzy. Let's get "hello, Matrix" running and then look at some code. 

## Set-Up

````bash
git clone https://github.com/kennytilton/matrix.git
cd matrix/cljs/mxintro
lein deps
lein clean
lein fig:build
````
This will auto compile and send all changes to the browser without the need to reload. After the compilation process is complete, you will get a Browser Connected REPL. A web page should appear on a browser near you with a header saying just "hello, Matrix". 

For issues, questions, or comments, ping us at kentilton on gmail, or @hiskennyness on Slack in the #Clojurians channel.

## Dataflow


## License

Copyright © 2018 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
