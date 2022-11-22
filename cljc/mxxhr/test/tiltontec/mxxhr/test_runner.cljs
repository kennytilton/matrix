(ns tiltontec.mxxhr.test-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [tiltontec.mxxhr.core-test]))

(doo-tests 'tiltontec.mxxhr.core-test)
