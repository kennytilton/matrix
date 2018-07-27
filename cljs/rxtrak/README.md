# rxTrak&trade;

A personal medication tracking demo of the mxWeb&trade; UI un-framework, itself the poster child for Matrix&trade;, a point granular dataflow library.

> You say "reactive" we say "dataflow".

## Overview

rxTrak hopes to carry developers down the rest of the functional path on which Facebook's ReactJS has started them. Thanks to ReactJS, the programming hoi polloi has discovered the joy of declarative, functional programming, but the Facebook engineers dropped us off just as we got to the hard part: state management.

> Nothing challenges software more than managing the state to support an intelligent user doing their earnest best to use a computer iterface correctly. 

Remember Scotty trying to talk into the Macintosh mouse? 'Nuff said. But Facebook engineers claimed as a feature that they would not tell us how to manage state, the problem Fred Brooks deemed so intractable that _No Silver Bullet_ was possible.

Oddly, FB engineers then specified how to manage state. Flux. 
![Flux](documentation/flux.png)
Dan Abramov made a brave attempt with Redux, but what started simple scaled ornate. As with everything Lisps touch, ClojureScript re-frame by Mike Thompson turned out vastly better, but the artificiality of Flux remains.

### Pub-Sub no mas
Enter Hoplon/Javelin, the Reagent ratom, MobX, and binding.Scala. These truly reactive frameworks support a more natural expression of the one-way dataflow Facebook engineers correctly identified as vital to front-end developer sanity, one in which the framework magically identifies and automates the dataflow DAG implicit in the natural coding of an interface.

> Facebook now says React was the wrong name, say it should have been called ScheduleJS, and go so far as to reject the reactive paradigm because of its unscheduled eagerness.

By "natural" we mean "without giving dependencies any thought". We just think about our application semantics, author views declaratively, mutate application state in response to user gestures, and then...we are done.

### Enough yapping
The rest of this page describes how to run the completed demo. Over in the documentation we will wlak you through how to build it yourself, introducing first Matrix dataflow and then the mxWeb un-framework.

## Development

To get an interactive development environment run:

    lein fig:build

This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

	lein clean

To create a production build run:

	lein clean
	lein fig:min


## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
