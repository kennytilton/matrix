(ns matrixrn.demo.tutorial.x110-its-not-just-me.core
  (:require
    [react]
    ["@react-navigation/native" :refer [NavigationContainer]]
    [tiltontec.cell.core :refer-macros [cFonce]]
    [tiltontec.model.core :as md]
    [matrixrn.matrixrn :as mxn :refer [mk]]
    [matrixrn.demo.tutorial.x110-its-not-just-me.lesson :as lesson]
    [matrixrn.demo.tutorial.x110-its-not-just-me.separate-count-display :as sep]))

(defn demo []
  (md/make ::rnApp
    ;; md/make ^^^ wires up a map for membership in the Matrix as an object suitable for the Matrix node graph
    :rx-dom (cFonce
              ;; cFonce ^^ evaluates once and never runs again, even if it reads reactive properties
              (md/with-par me
                ;; 'with-par' binds 'me', this mx object, to dynamic var *mx-par*, a vital but almost
                ;; completely transparent dynamic value.
                ;;
                ;; Only at the top of the MX do we need to bind *mx-par* parent using `with-par`.
                ;; Macrology handles that elsewhere. The Matrix is a simple tree in which avery node
                ;; except the top node has a parent, and every node has zero or more children ("kids").
                (mk NavigationContainer {} {}
                  (mk mxn/Navigator {} {}
                    (lesson/lesson)
                    (sep/solution)))))))
