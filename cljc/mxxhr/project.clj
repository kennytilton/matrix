(defproject com.tiltontec/mxxhr "2.0.0-SNAPSHOT"
  :description "XMLHttpRequest for the Matrix (dataflow library)"
  :url "https://github.com/kennytilton/tiltontec.mxxhr"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.10.773"]
                 ;[org.clojure/clojure "1.10.0"]
                 [clj-http "3.10.3"]
                 [cljs-http "0.1.46"]
                 [cljs-ajax "0.7.5"]
                 [cheshire "5.10.0"]
                 [com.cognitect/transit-cljs "0.8.264"]
                 [se.haleby/stub-http "0.2.9"]
                 [com.taoensso/tufte "2.2.0"]
                 [com.tiltontec/matrix "5.0.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "1.1.8"]
            [lein-doo "0.1.11"]]
  :doo {:paths {:rhino "lein run -m org.mozilla.javascript.tools.shell.Main"}}
  :aliases {"test-cljs" ["with-profile" "test" "doo" "rhino" "test" "once"]
            "test-all"  ["do" ["test"] ["test-cljs"]]}
  :profiles
  {:test {:dependencies [[org.mozilla/rhino "1.7.13"]]
          :cljsbuild
          {:builds
           {:test
            {:source-paths ["src" "test"]
             :compiler {:output-to "target/main.js"
                        :output-dir "target"
                        :main mxxhr.test-runner
                        :optimizations :simple}}}}}})
