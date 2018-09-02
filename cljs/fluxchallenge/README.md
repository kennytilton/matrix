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
Fortunately for our purposes, the Challenge requires a herky-jerky, start-stop behavior that in turn forces an app to allocate and deallocate resources such as Ajax requests intelligently as application state dictates. Here is a beaut:
```
When either the current planet indicator changes OR loaded new rows: check if there is a displayed Dark Jedi whose home planet matches the current planet. If true, then display that Dark Jedi in red text, and cancel ALL ongoing HTTP requests for rows. Freeze the UI from scrolling until the current planet changes again and there is no red-highlighted Dark Jedi anymore.
```
In brief, slam on the brakes if:
* new socket info indicates Obi-Wan has landed on the Homeworld of a displayed Sith; or
* if the user scrolls into view a Sith whose Homeowlrd Obi-Wan was last known to be on.

The "brakes" are disabling scroll controls, changing one Sith's text color, and cancelling outstanding Ajax requests.

Enter Matrix.

## The Matrix Defined
Let us first reprise why this library is called Matrix (forget the otherwise entertaining movies):

> Formulas can compute more than just descriptive properties such as "completed". We might have `K` for "kids" holding the children of some parent, such as the `LI` nodes under a `UL` DOM list. In other words, the population of our application model can grow or shrink with events.  
  
We call a dynamic population of causally connected models a *matrix*.

> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*


