(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'mxweb.core
   :output-to "out/tiltontec.mxweb.js"
   :output-dir "out"})
