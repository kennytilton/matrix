(defproject rxtrak "0.1.2-SNAPSHOT"
  :description "A primary demo project for Matrix and mxWeb"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.4"]
                 [com.cognitect/transit-cljs "0.8.280"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [funcool/bide "1.7.0"]
                 [clj-http "3.12.3"]
                 [cljs-http "0.1.46"]
                 [cheshire "5.8.1"]
                 [com.taoensso/tufte "2.4.5"]
                 [com.tiltontec/matrix "4.2.1-SNAPSHOT"]
                 [com.tiltontec/mxxhr "1.0.1-SNAPSHOT"]
                 [com.tiltontec/web-mx "1.0.0-SNAPSHOT"]]

  :resource-paths ["resources" "target"]

  :clean-targets ^{:protect false} ["target/public"]

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.17"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]
                                  ;; to silence SL4J warnings
                                  [org.slf4j/slf4j-nop "1.7.30"]
                                  ]}}

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "rxtrak" "-r"]})

