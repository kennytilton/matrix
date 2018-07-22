(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'mxweb.core
   :output-to "out/mxweb.js"
   :output-dir "out"})
