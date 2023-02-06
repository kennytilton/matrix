(defproject com.tiltontec/matrix "4.3.1-SNAPSHOT"
  :description "Matrix dataflow library for CLJ/CLJS"
  :scm {:name "git"
        :url  "https://github.com/kennytilton/matrix"}
  :url "http://tiltontec.com"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.10.773"]
                 [org.clojure/core.async "1.6.673"]
                 [org.clojure/data.int-map "1.0.0"]
                 [com.cognitect/transit-cljs "0.8.264"]
                 [com.taoensso/nippy "3.2.0"]
                 [clj-http "3.10.3"]
                 [cheshire "5.10.0"]
                 [org.clojure/java.data "1.0.95"]
                 [org.clojure/tools.reader "1.3.6"]]

  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-cljsbuild "1.1.8"]
            [lein-npm "0.6.2"]]

  :profiles {:dev {:dependencies [[cider/piggieback "0.5.1"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}

  :test-paths ["test"]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :deploy-repositories [["releases" {:sign-releases false :url "https://clojars.org/repo"}]
                        ["snapshots" {:sign-releases false :url "https://clojars.org/repo"}]]
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target"
  :cljsbuild {:builds        {;; [note to self: go back to 5/26 on rube repo for minify]
                              ;;
                              :mxdev  {:source-paths ["src"]
                                       :compiler     {:output-to     "resources/public/js/main.js"
                                                      :output-dir    "resources/public/js/out"
                                                      :optimizations :whitespace}}
                              :mxtest {:source-paths ["src" "test"]
                                       :compiler     {:output-to     "resources/public/js/main-test.js"
                                                      :optimizations :whitespace
                                                      :pretty-print  true}}
                              }
              :test-commands {"unit" ["phantomjs"
                                      "resources/test/phantom/runner.js"
                                      "resources/test/test.html"]}})
