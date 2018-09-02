# SithTrak&trade;

Welcome to the Matrix&trade; implementation of The Flux Challenge&trade;, part three of an introduction to Matrix. In part one we covered [the big picture](https://github.com/kennytilton/mxtodomvc/blob/master/README.md), and in part two we looked at [building TodoMVC](https://github.com/kennytilton/mxtodomvc/blob/master/documentation/BuildingTodoMVC.md). In part three we explore the less glamorous but still vital mechanics of bringing a functional application to life: the Matrix lifecycle.

Let us first reprise why this library is called Matrix (forget the movie):
```
Formulas can compute more than just descriptive properties such as "completed". We might have `K` for "kids" holding the children of some parent, such as the `LI` nodes under a `UL` DOM list. In other words, the population of our application model can grow or shrink with events. 

We call a dynamic population of causally connected models a *matrix*.
```
> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*


## Running the beast
Running SithTrak is a little different. One repo holds a server app to test against, then this repo implements the challenge, a client.

### the server
First, grab the whole Challenge:
```` bash
git clone https://github.com/kennytilton/flux-challenge.git
````
Now start up the supporting servers:
````
cd flux-challenge/server
npm install
npm start
````
You should see a couple of announcements about the servers starting up. The `npm install` is needed only the first time.

### our SithTrak client

Now open `matrix/cljs/fluxchallenge/resources/public/index.html` in a browser.

What should happen is [defined here](https://github.com/staltz/flux-challenge/blob/master/README.md). The tl;dr:
* show where Obi-Wan is as he moves around;
* start by looking up and showing a hardcoded Sith (3616);
* bracket that Sith with master above and apprentice below, if anys;
* scroll up and down two at a time;
* always lookup afresh when scrolling to get latest info;
* if a lookup for Sith is active when the Sith gets scrolled off, abort the lookup;
* if Obi-Wan is on the planet of a Sith:
* ...highlight that Sith in red;
* ...disable scrolling.



