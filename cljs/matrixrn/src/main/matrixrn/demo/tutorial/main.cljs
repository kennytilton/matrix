(ns matrixrn.demo.tutorial.main
  (:require
    [react]
    ["@react-navigation/native" :refer [NavigationContainer]]
    [tiltontec.cell.core :refer-macros [cFonce]]
    [tiltontec.model.core :refer [cFkids with-par matrix mx-par mget mset! mswap!] :as md]
    [matrixrn.matrixrn :as mxn :refer-macros [mk mku with-props]]
    [matrixrn.demo.tutorial.x100-hello-world.lesson :as hello]
    [matrixrn.demo.tutorial.x100-hello-world.times-six :as times-six]
    [matrixrn.demo.tutorial.x110-its-not-just-me.lesson :as others]
    [matrixrn.demo.tutorial.x110-its-not-just-me.separate-count-display :as others-sol]
    [matrixrn.demo.tutorial.x120-web-component.lesson :as webco]
    [matrixrn.demo.tutorial.x120-web-component.thumb-color :as thumb-color]
    [matrixrn.demo.tutorial.x120-web-component.decimal-display :as hex-dec]
    [matrixrn.demo.tutorial.x120-web-component.rgb-slider :as rgb-slider]
    [matrixrn.demo.tutorial.x130-xhr-async-reactivity.lesson :as xhr]
    [matrixrn.demo.tutorial.x130-xhr-async-reactivity.auto-clear :as autoclear]
    [matrixrn.demo.tutorial.x130-xhr-async-reactivity.response-map :as response]))

(defn demo []
  (md/make ::rnApp
    ;; md/make ^^^ wires up a map for membership in the Matrix as an object suitable for the Matrix node graph
    :rx-dom (cFonce
              ;; cFonce ^^ evaluates once and never runs again, even if it reads reactive properties

              (with-par me
                ;; 'with-par' binds 'me', this mx object, to dynamic var *mx-par*, a vital but almost
                ;; completely transparent dynamic value.
                ;;
                ;; Only at the top of the MX do we need to bind *mx-par* parent using `with-par`.
                ;; Macrology handles that elsewhere. The Matrix is a simple tree in which avery node
                ;; except the top node has a parent, and every node has zero or more children ("kids").

                ;; uncomment below in ascending order to follow tutorial....
                (mk NavigationContainer {} {}
                  (mk mxn/Navigator {} {}
                    (response/solution)
                    ;;(autoclear/solution)
                    ;(xhr/lesson)
                    ;(rgb-slider/solution)
                    ;(hex-dec/solution)
                    ;(thumb-color/solution)
                    ;(webco/lesson)
                    ;(others-sol/solution)
                    ;(others/lesson)
                    ;(times-six/solution)
                    ;;#_
                    (hello/lesson)))))))
