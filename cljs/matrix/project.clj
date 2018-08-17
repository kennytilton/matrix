(defproject tiltontec/matrix "0.1.5-SNAPSHOT"
  :description "Matrix dataflow library for CLJS"
  :scm {:name "git"
        :url "https://github.com/kennytilton/matrix"
        ;:url "https://github.com/kennytilton/matrix/tree/master/cljs/matrix"
        :dir "./cljs/matrix"
        }
  :url "http://tiltontec.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.312"]
                 ;;[org.clojure/core.async "0.2.374"]
                 [org.clojure/data.int-map "0.2.4"]
                 [com.cognitect/transit-cljs "0.8.243"]
                 ;;[com.taoensso/tufte "1.1.2"]
                 ]

  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-npm "0.6.2"]]
  
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :test-paths ["test"]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target"
  :cljsbuild {:builds {;; [note to self: go back to 5/26 on rube repo for minify]
                       ;;
                       :mxdev {:source-paths ["src"]
                                  :compiler {:output-to "resources/public/js/main.js"
                                             :output-dir "resources/public/js/out"
                                             :optimizations :whitespace}}
                       :mxtest {:source-paths ["src" "test"]
                                   :compiler {:output-to "resources/public/js/main-test.js"
                                              :optimizations :whitespace
                                              :pretty-print true}}
                       }
              :test-commands {"unit" ["phantomjs"
                                      "resources/test/phantom/runner.js"
                                      "resources/test/test.html"]}})
