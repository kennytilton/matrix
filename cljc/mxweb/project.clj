(defproject tiltontec/mxweb "1.0.0"
  :description "A Web un-Framework for the Matrix (dataflow library)"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :url "https://github.com/kennytilton"
  :dependencies [[org.clojure/clojure "1.11.0"]
                 [org.clojure/clojurescript "1.11.4"]
                 [com.cognitect/transit-cljs "0.8.264"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [funcool/bide "1.7.0"]
                 [clj-http "3.10.3"]
                 [cljs-http "0.1.46"]
                 [cheshire "5.10.0"]
                 [com.taoensso/tufte "2.4.5"]
                 [tiltontec/matrix "4.2.0-SNAPSHOT"]
                 [tiltontec/mxxhr "0.2.0-SNAPSHOT"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[source-map-support "0.5.19"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release" :target-path]
  :target-path "target")