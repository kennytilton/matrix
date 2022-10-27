(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'todomx.core
   :output-to "out/todomx.js"
   :output-dir "out"})
