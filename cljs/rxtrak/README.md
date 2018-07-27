# rxTrak&trade;

A medication tracking demo of mxWeb&trade;, the poster child for the Matrix&trade; dataflow library.

> You say "reactive" we say "dataflow".

## Overview

rxTrak will be the pedagogic vehicle to carry developers the rest of the way down the path on which Facebook's ReactJS has started them. Thanks to ReactJS, the programming hoi polloi has discovered the joy of declarative, functional programming, but the Facebook engineers abandoned us just as we got to the hard part: state management.

Nothing challenges a software system more than an intelligent user doing their earnest best to use a computer iterface correctly. Remember Scotty trying to talk into the Macintosh mouse? 'Nuff said. But Facebook engineers famously claimed as a feature that we could manage state anyway we liked, oddly also stipulating Flux as the necessary architecture.

Dan Abramov made a brave attempt with Redux, a batch cycle of rendered views emitting event actions triggering state change and then the re-rendering of views, but it was a mess. As with everything Lisps touch, ClojureScript re-frame by Mike Thompson turned out vastly better, but the artificiality of Flux remains.

### Pub-Sub no mas
Enter Hoplon/Javelin, MobX, and binding.Scala. These truly reactive frameworks (Facebook has retracted the name and explicity rejected the reactive paradigm) support a more natural expression of the one-way dataflow Facebook engineers correctly identified as vital to front-end developer sanity, one in which the framework magically identifies and automates the dataflow DAG implicit in the natural coding of an interface.

By "natural" we mean without giving it any thought. We just think about our application, author views declaratively as Facebook delivered, mutate the state we want to change right in the event handler of the widget dedicated to giving the user access to that state, and...we are done.

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
