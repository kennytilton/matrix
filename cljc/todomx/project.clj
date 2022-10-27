(defproject todomx "0.1.0-SNAPSHOT"
  :description "The TodoMVC Classic implemented in mxWeb, the web un-framework for the Matrix reactive/datflow library"
  :url "https://github.com/kennytilton"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.7.1"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 [com.cognitect/transit-cljs "0.8.243"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [funcool/bide "1.5.0"]
                 [clj-http "3.7.0"]
                 [cljs-http "0.1.44"]
                 [cheshire "5.8.0"]
                 [com.taoensso/tufte "1.1.2"]
                 ;[com.tiltontec/matrix "0.1.6-SNAPSHOT"]
                 ;[com.tiltontec/xhr "0.1.1-SNAPSHOT"]
                 ;[com.tiltontec/webmx "0.1.7-SNAPSHOT"]
                 [com.tiltontec/matrix "0.1.3-SNAPSHOT"]
                 [com.tiltontec/xhr "0.1.1-SNAPSHOT"]
                 [com.tiltontec/webmx "0.1.0-SNAPSHOT"]]
  ;;:jvm-opts ^:replace ["-Xmx1g" "-server"]
  ;;:plugins [[lein-npm "0.6.2"]]
  ;;:npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets [:target-path "out" "release"]
  :target-path "target"
  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]}
          #_ {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:bo"   ["run" "-m" "figwheel.main" "-bo" "dev"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "todomx.test-runner"]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.1.3"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :resource-paths ["resources" "target"]
                   ;; need to add the compliled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["target/public" :target-path]}}
  #_ {:dev {:dependencies [[org.clojure/clojurescript "1.10.773"]
                                  [com.bhauman/figwheel-main "0.2.11"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :resource-paths ["target"]
                   :clean-targets ^{:protect false} ["target"]}})
