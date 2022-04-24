# Matrix for ClojureDart

A port to Clojure of [Matrix](https://github.com/kennytilton/matrix), a generic, fine-grained, transparent, reactive state manager.



## Getting Started on Mac OS X

We begin with the [ClojureDart "Getting started"](https://github.com/Tensegritics/ClojureDartPreview/blob/main/doc/flutter-quick-start.md).

In our case, we spent a day upgrading XCode and sorting out the Dart and Flutter set-up, and then getting the CLJD "Hello world" ^^^ running. The resulting project is how this project was created.

Then we added the Matrix code you will find here, including a test suite from the CLJC version. Anyway...

> FLASH! The "Getting Started" example has now also been done using a nascent `mx-flutter` library. Please see that [here](https://github.com/kennytilton/matrix/blob/main/cljd/matrix/src/tiltontec/mx_cljd_world.cljd).

### Step One
Work thru the CLJD Hello World separately to make sure you have your dependencies right. This step can be skipped if you have confidence in your CLJD support (XCode, Dart, Flutter).

### Step Two
Download or pull a local copy of the entire [Matrix mono repo](https://github.com/kennytilton/matrix).

In a terminal:

* `cd matrix/cljd/matrix`;
* start the Flutter debugger: `dart devtools`.

This ^^^ command does not return. After a few seconds, look for a new browser tab "DevTools for Futter". We like to tear that off and keep it handy because that will be our console.

* In a new terminal, `open -a Simulator`. An iPhone simulator should open.
* That ^^^ command returns, so in the same terminal: `clj -M -m cljd.build flutter`

That build ^^^ command does not return, and takes about thirty seconds before you should see "hello, world v.nnn" on the simulator, where nnn is a randomw number that lets us confirm a changed app has been reloaded.

That build command ends by displaying something like:
```
The Flutter DevTools debugger and profiler on iPhone 12 is available at: http://127.0.0.1:9101?uri=http://127.0.0.1:61927/mq2Vp_UbNtE=/
```
We will need that info to connect the Flutter DevTools browser app to our app.

* copy the displayed URL, in this case `http://127.0.0.1:9101?uri=http://127.0.0.1:61927/mq2Vp_UbNtE=/` and paste it into the Flutter Devtools input field under "Connecting to a Running App";
* click "Connect" to the right of the input field;
* the DevTools interface will change to be a Flutter Inspector.

If you look at the Flutter Inspector console you will see sundry print diagnostics from the Matrix regression test suite, and anything else I happen to be exploring. All that is done in the `main` function [here](https://github.com/kennytilton/matrix/blob/main/cljd/matrix/src/tiltontec/main.cljd).


### Workflow
Here is how I work:

* start with the above;
* edit this project in IntelliJ+Cursive, with the Flutter plug-in installed;
* * I told IntelliJ to use clj formatting for .cljd files; more Cursive support is on the way;
* after changes I save in IntelliJ and look at the "build" terminal for errors;
* if I am curious some CLJD issue, like how to run the Math `abs` method, I do this:
* * add snippets of code to the main function, after the test suite runner;
* * save;
* * check the "build" for errors;
* * switch to the build terminal and hit Return to trigger a sim reload;
* * check the Flutter console for print output.

Ping @kennytilton on #clojurians Slack for help!
