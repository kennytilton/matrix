(ns testrun
  (:require
	[cljs.test :refer-macros [run-tests]]
	;; hhack [tiltontec.model.core]
        ))

(enable-console-print!)

(defn ^:export run []
  (run-tests #"tiltontec.util.*-test")
  #_(run-tests #"tiltontec.cell.*-test")
  #_(run-tests #"tiltontec.model.*-test"))
