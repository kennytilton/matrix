(defproject todomx "0.1.0-SNAPSHOT"
  :description "The TiltonTec MatrixCLJS treatment of TodoFRP/MVC"
  :url "https://github.com/kennytilton"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.671"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [funcool/bide "1.5.0"]
                 [clj-http "3.7.0"]
                 [cljs-http "0.1.44"]
                 ;;[clj-http-lite "0.3.0"]
                 [cljs-ajax "0.7.2"]
                 [cheshire "5.8.0"]
                 [se.haleby/stub-http "0.2.3"]
                 [com.taoensso/tufte "1.1.2"]
                 #_ [hiccups "0.3.0"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target")
