(defproject tiltontec/mxxhr "0.1.2-SNAPSHOT"
  :description "XMLHttpRequest for the Matrix (dataflow library)"
  :url "https://github.com/kennytilton/mxxhr"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [clj-http "3.7.0"]
                 [cljs-http "0.1.45"]
                 [cljs-ajax "0.7.2"]
                 [cheshire "5.8.0"]
                 [com.cognitect/transit-cljs "0.8.243"]
                 [se.haleby/stub-http "0.2.3"]
                 [com.taoensso/tufte "1.1.2"]
                 [tiltontec/matrix "0.1.5-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-doo "0.1.6"]]
  :doo {:paths {:rhino "lein run -m org.mozilla.javascript.tools.shell.Main"}}
  :aliases {"test-cljs" ["with-profile" "test" "doo" "rhino" "test" "once"]
            "test-all"  ["do" ["test"] ["test-cljs"]]}
  :profiles
  {:test {:dependencies [[org.mozilla/rhino "1.7.7"]]
          :cljsbuild
          {:builds
           {:test
            {:source-paths ["src" "test"]
             :compiler {:output-to "target/main.js"
                        :output-dir "target"
                        :main mxxhr.test-runner
                        :optimizations :simple}}}}}})
