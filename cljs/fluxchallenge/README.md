# SithTrak&trade;

Welcome to the Matrix&trade; implementation of The Flux Challenge&trade;, part three of an introduction to Matrix. In part one we covered [the big picture](https://github.com/kennytilton/mxtodomvc/blob/master/README.md), and in part two we looked at [building TodoMVC](https://github.com/kennytilton/mxtodomvc/blob/master/documentation/BuildingTodoMVC.md). 

In part three we explore the less glamorous but still vital mechanics of bringing a functional application to life: the Matrix lifecycle. But first, let us get the app running.

## Running the beast
Running SithTrak is a little different. One repo holds a server app to test against, then this repo implements the challenge, a client.

### the server
First, grab the whole Challenge (server and accepted submissions) and do the one-time install:
```` bash
git clone https://github.com/kennytilton/flux-challenge.git
cd flux-challenge/server
npm install
````
Now start up the supporting servers:
````
npm start
````
You should see a couple of announcements about the servers starting up.

### our SithTrak client
To run the Matrix implementation of the Flux Challenge, navigate to the matrix repo project, perhaps:
```cd matrix/cljs/fluxchallenge```
Now start the app:
```
lein fig:build
```
If all goes well, Figwheel will start a server and open the client in a browser tab near you.

If not, please ping me at kentilton at gmail. Now let us concentrate on the lifecycle mechanics required to implement the seeming magic of Matrix, in which properties and objects change and come and go seemingly by themselves.

![Flux Challenge](./docs/3.gif)

### The Challenge spec
Andre Staltz designed the Flux Challenge to expose weaknesses he sees in [Facebook's Flux](https://facebook.github.io/flux/) architecture.
```
This challenge's requirements were tailored to touch Flux's weakest spots, these are not typical web app requirements. On the other hand, analytics and sensors dashboard UIs resemble this challenge a lot.
````
Fortunately for our purposes, the Challenge requires a herky-jerky, start-stop behavior that in turn forces an app to allocate and deallocate resources such as Ajax requests intelligently as application state dictates. 

The tl;dr is that the spec requires an app to to do fresh lookups of Sith info as Siths come into view in case some data has changed, and cancel lookups when moot. In some of its own words:

> When either the current planet indicator changes OR loaded new rows: check if there is a displayed Dark Jedi whose home planet matches the current planet. If true, then display that Dark Jedi in red text, and cancel ALL ongoing HTTP requests for rows. Freeze the UI from scrolling until the current planet changes again and there is no red-highlighted Dark Jedi anymore.

In brief, slam on the brakes if:
* new socket info indicates Obi-Wan has landed on the Homeworld of a displayed Sith;
* if the user scrolls into view a Sith on whose Homeowlrd Obi-Wan was last known to be; or
* for a Sith scrolled out of view, cancel its Ajax lookup if it is outstanding.

The "brakes" are disabling scroll controls, changing one Sith's text color, and cancelling outstanding Ajax requests.

Enter Matrix.

## The Matrix Defined
Let us first reprise why this library is called Matrix (forget the otherwise entertaining movies):

> Formulas can compute more than just descriptive properties such as "completed". We might have `K` for "kids" holding the children of some parent, such as the `LI` nodes under a `UL` DOM list. In other words, the population of our application model can grow or shrink with events.  
  
We call a dynamic population of causally connected models a *matrix*.

> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

The implementation challenge may be clear to the astute reader: properties are watching and notifying other properties of objects wherever their declarative code cared to find them, and somehow we must gracefully add and remove objects *live* without breaking anything.

It turned out to be pretty easy.

### To be or not to be
So far in this series we have tried to stay out of the implementation weeds, but this write-up is indeed about How It Works&trade; so here goes.

The Matrix lifecycle API has two callbacks to support Matrix objects aka models coming and going: `md-awaken` and `not-to-be`. (`to-be` got lost in a refactoring.) As for the interconnected properties, they are handled for us by `not-to-be`, which calls `c-quiesce` on every property of a model leaving the Matrix. `c-quiesce` simply notifies its dependencies that it no longer needs notification.

We have not run into these because often they are not needed, and because a "lift" like mxWeb&trade; handles it for us where needed (such as adding and removing elements from the DOM). Now we need them.

#### Sith lookup cancellation
Getting back to our Sith Lord, one requirement is to cancel a lookup of the Sith's info if they get scrolled off. We are required not to cache data, so when a user scrolls a Sith out of view we drop it from the matrix.

First, we recompute the Sith population as the list of visible IDs changes
```
    (cF+ [:obs obs-siths-lost-abort]
       (mapv (fn [sid]
               (when sid
                 (or (some (fn [s]
                             ;; watch out for nils
                             (and s (= sid (sith-id s))) s)
                       (if (= cache unbound) [] cache))
                   (make-sith me sid))))
         (sith-ids me)))
```
Note the observer `obs-siths-lost-abort`. As the name suggests, it watches for Siths being lost and tends to their graceful demise.
```
(defn obs-siths-lost-abort [slot me news olds cell]
  (when (not= olds unbound)
    (doseq [lost (remove (set news) olds)]
      (when lost
        (not-to-be lost)))))
```
And finally, a `not-to-be` method specialized on the Sith takes care of outstanding XHRs:
```
(defmethod not-to-be [::Sith] [me]
  (when-let [lku (lookup me)]
    (when-not (xhr-response lku)
      ;; TODO move to new mxxhr/xhr-abort
      (xhr-abort lku)))
  ;; the lookup itself is a Matrix member, so...
  (not-to-be (lookup me)))
```

