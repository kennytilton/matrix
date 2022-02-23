# shadow-cljs - browser quickstart

This is a minimum template you can use as the basis for CLJS projects intended to run in the browser.

## Required Software

- [node.js (v6.0.0+)](https://nodejs.org/en/download/)
- [Java JDK (8+)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or [Open JDK (8+)](http://jdk.java.net/10/)

## User Guide

This repository only shows a basic example of how to get a basic Browser build.

Please refer to the full [User Guide](https://shadow-cljs.github.io/docs/UsersGuide.html) for more information.


## Running the Example

```bash
git clone https://github.com/shadow-cljs/quickstart-browser.git quickstart
cd quickstart
npm install
npx shadow-cljs server
```

This runs the `shadow-cljs` server process which all following commands will talk to. Just leave it running and open a new terminal to continue.

The first startup takes a bit of time since it has to download all the dependencies and do some prep work. Once this is running we can get started.

```txt
npx shadow-cljs watch app
```

This will begin the compilation of the configured `:app` build and re-compile whenever you change a file.

When you see a "Build completed." message your build is ready to be used.

```txt
[:app] Build completed. (23 files, 4 compiled, 0 warnings, 7.41s)
```

You can now then open [http://localhost:8020](http://localhost:8020).

The app is only a very basic skeleton with the most useful development tools configured.

`shadow-cljs` is configured by the `shadow-cljs.edn` config. It looks like this:

```clojure
;; shadow-cljs configuration
{:source-paths ; .cljs files go here
 ["src/dev"
  "src/main"
  "src/test"] 

 :dependencies ; covered later
 [] 

 :dev-http ; starts a http dev server on http://localhost:8020 and serves `public`
 {8020 "public"}

 :builds
 {:app ; build identifier
  {:target :browser
   :output-dir "public/js"
   :asset-path "/js"

   :modules
   {:main ; becomes public/js/main.js
    {:init-fn starter.browser/init}}}}}

```

It defines the `:app` build with the `:target` set to `:browser`. All output will be written to `public/js` which is a path relative to the project root (ie. the directory the `shadow-cljs.edn` config is in).

`:modules` defines the how the output should be bundled together. For now we just want one file. The `:main` module will be written to `public/js/main.js`, it will include the code from the `:entries` and all their dependencies.

The last part is the actual `index.html` that is loaded when you open `http://localhost:8020`. It loads the generated `/js/main.js` and then calls `start.browser.init` which we defined in the `src/main/start/browser.cljs`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <title>Browser Starter</title>
</head>
<body>
<h1>shadow-cljs - Browser</h1>
<div id="app"></div>
<noscript>You need to enable JavaScript to run this app.</noscript>
<script src="/js/main.js"></script>
</body>
</html>
```

## Live reload

To see the live reload in action you can edit the `src/main/start/browser.cljs`. Some output will be printed in the browser console.

## REPL

During development it the REPL is very useful.

From the command line use `npx shadow-cljs cljs-repl app`.

```
shadow-cljs - config .../shadow-cljs.edn
shadow-cljs - connected to server
cljs.user=>
```

This can now be used to eval code in the browser (assuming you still have it open). Try `(js/alert "Hi.")` and take it from there. You might want to use `rlwrap npx shadow-cljs cljs-repl app` if you intend to type a lot here.

You can exit the REPL by either `CTRL+C` or typing `:repl/quit`.

## Release

The `watch` process we started is all about development. It injects the code required for the REPL and the all other devtools but we do not want any of that when putting the code into "production" (ie. making it available publicly).

The `release` action will remove all development code and run the code through the Closure Compiler to produce a minified `main.js` file. Since that will overwrite the file created by the `watch` we first need to stop that.

Use `CTRL+C` to stop the `watch` process and instead run `npx shadow-cljs release app`.

When done you can open `http://localhost:8020` and see the `release` build in action. At this point you would usually copy the `public` directory to the "production" web server.

Note that in the default config we overwrote the `public/js/main.js` created by the `watch`. You can also configure a different path to use for release builds but writing the output to the same file means we do not have to change the `index.html` and test everything as is.
