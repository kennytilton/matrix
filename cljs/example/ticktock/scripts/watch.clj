(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'ticktock.core
   :output-to "out/ticktock.js"
   :output-dir "out"})
