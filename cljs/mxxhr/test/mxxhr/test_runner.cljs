(ns mxxhr.test-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [mxxhr.core-test]))

(doo-tests 'tiltontec.xhr-test)
