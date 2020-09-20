(defproject whoshiring "0.1.0-SNAPSHOT"
  :description "A browser for replies to the monthly AskHN Who's Hiring question."
  :url "https://github.com/kennytilton"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 ;; [tiltontec/matrix "0.1.6-SNAPSHOT"]
                 [tiltontec/mxweb "0.1.7-SNAPSHOT"]]

  :source-paths ["src"]

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:bo"   ["run" "-m" "figwheel.main" "-bo" "dev"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "whoshiring.test-runner"]}

  :profiles {:dev {:dependencies [[org.clojure/clojurescript "1.10.773"]
                                  [com.bhauman/figwheel-main "0.2.11"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :resource-paths ["target"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["target"]}})

