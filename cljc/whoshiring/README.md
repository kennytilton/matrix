## The Who's Hiring mxWeb&trade; Demo App

This subdirectory holds a CLJS version of the mxWeb demo application that offers a browser for the Hacker News monthly AskHN question, "Who's hiring in [month, year]?". 

Here is a [live site](https://kennytilton.github.io/whoishiring/) where you can try the JS version. That version does not remember your search settings, newly implemented only in this CLJS version.

Execute these commands in a terminal, then watch your browser for the app to open automatically on `localhost:9500`:
```bash
cd matrix/cljc/whoshiring
clojure -M -m figwheel.main --build whoshiring --repl
```
