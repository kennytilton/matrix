(ns tiltontec.xhr.test-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [tiltontec.xhr-test]))

(doo-tests 'tiltontec.xhr-test)
