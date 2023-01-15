## The Who's Hiring mxWeb&trade; Demo App

### Warning: This demo app is being shared on an emergency basis, in the middle of refactoring, and barely works.

This subdirectory holds a CLJS version of the mxWeb demo application that offers a browser for the Hacker News monthly AskHN question, "Who's hiring in [month, year]?". 

Execute these commands in a terminal, then watch your browser for the app to open automatically on `localhost:9500`:
```bash
cd matrix/cljc/whoshiring
clojure -M -m figwheel.main --build whoshiring --repl
```
