

; Summary
; -------
; This gentle introduction to MatrixCLJS is meant only to make concrete
; what we mean by dataflow, the matrix, and how the matrix can
; drive a web application expressively, efficiently, and simply.
;
; We will try to stay out of the implementation weeds.
;
; Highlights
; ----------
; 1. One key element to watch for is that the Matrix dataflow engine connects
; everything: view, model, DOM maintenance, application semantics, and persistence.
; This arose naturally once we hit on dataflow because all those things *do* interact, so
; to leverage our new reactive toy we worked out how to bring them under the dataflow
; umbrella. Here is a perfect example:
;
; The TodoMVC challenge specifies numerous dependencies of appearance and even
; widget behavior on the number and state of to-do items. At first we just had the to-dos
; represented as a native CLJS map. No dataflow there, so we knocked off
; a couple of quick dataflow-enabled Matrix classes (one for a to-do, one for a list of them) and
; and at start-up loaded to-dos from localStorage into these matrix objects. (See todomx/todo.cljs
; and the 'load-all' function near the end.) Now the view could dynamically track the to-dos, and
; controls could act on the to-dos and (a) transparently trigger view updates and (b) have the to-dos
; transparently persist themselves.
;
; 2. Another thing to watch for: the absence of explicit publish and subscribe.
; Hand-wired dataflow is better than nothing but works against programming flow and the
; quick refactoring we encounter when evolving a complex UI/UX based on user input.
;
; 3. Another key element to watch for: aside from the dataflow library, the
; code is just standard ClojureScript and HTML. There *is* the Tag library for
; HTML generation, but its design imperative is to work exactly like HTML/CSS. This means
; easy flow from graphic designers to applications. Indeed, astute graphic designers can likely
; work on MatrixCLJS code directly.
;
; Executing this code (opional)
; -----------------------------
; (This next bit is optional because the source below is meant to be readable just by following the comments.)
;
; - git clone https://github.com/kennytilton/todoFRP.git
;
; - cd todoFRP
; - git checkout matrixjs
; - cd todo/MatrixCljs
;
; Edit todomx/core.cljs to call gi/matrix-build! instead of tmx/matrix-build!.
;
; - .scripts/build
;
; ...and if you think you will want to play with the code along the way:
; - .scripts/watch
;
; Now open MatrixCLJS/index.html in Chrome, FireFox, Opera or Safari on Mac OS X and
; open the JS console to see the output.
;
; Other environments have not been tested.
;
; Help available from kentilton at gmail etc.
;
; The Code
; ----------
; And now the annotated code....
;


(ns mxweb.example.gentle-intro
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [put! chan <! >! close!]]
    [clojure.string :as str]
    [cljs.pprint :as pp]

    [tiltontec.util.core :refer [pln xor now map-to-json uuidv4]]
    [tiltontec.cell.base :refer [unbound ia-type *within-integrity* c-value]]
    [tiltontec.cell.evaluate :refer [c-get]]
    [tiltontec.cell.core
     :refer-macros [cF cF+ cFn cF+n cFonce fn-obs]
     :refer [cI c-reset!]]
    [tiltontec.cell.observer :refer-macros [fn-obs]]
    [tiltontec.model.core
     :refer [matrix mx-par <mget mset!> mxi-find  kid-values-kids] :as md]
    [mxweb.html
     :refer [io-read io-upsert io-clear-storage
             dom-tag tagfo tag-dom mxu-find-class
             dom-has-class dom-ancestor-by-tag]
     :as tag]
    [mxweb.gen
     :refer-macros [section header h1 input footer p a span label ul li div button]
     :refer [dom-tag]]
    [cljs-http.client :as client]))

; Edit matrix-build! below to run any of the "gentle-intro-*" functions and rebuild (or have
; a terminal open running ./scripts/watch and make sure the rebuilds succeed).
;
; Or just read the code, which is annotated with the expected console output:

(declare gentle-intro-input-cells
         gentle-intro-formulaic-cells
         gentle-intro-models
         gentle-intro-to-Tag)

(defn matrix-build! []
  ;; edit here vvvvvv to rotate thru the gentle-intro* functions declared above
  (gentle-intro-to-Tag))

(def gentle-intro-ls-key "matrixcljs-gentle-intro")
(def edit-intro-instructions "Edit function matrix-build! in todomx/gentle_intro.cljs to try other examples.")

(defn gentle-intro-input-cells []

  (pln "----- Part A: An input cell and its accessors ---------------------------------")
  ;
  ; We simply make a standalone input cell using 'cI' (a convenience wrapper for 'make-cell')
  ; to hold a vector of simple string to-dos, then get and reset!
  ;
  (let [todos (cI ["wash car"
                     "mow lawn"])]

    ; Next we access the wrapped value via 'c-get', a bit of exposed wiring we will lose
    ; once we get to model objects:
    (pln "wrapped value:" (c-get todos))
    ; console: "wrapped value:" ["wash car" "mow lawn"]

    ; ...and mutate the value:
    (c-reset! todos ["learn Mandarin"])
    (pln "changed value:" (c-get todos))
    ; console: "changed value:" ["learn Mandarin"]
    )

  ;
  ; Next we have a matrix to-do list maintain the actual persistent to-do list in local storage,
  ; using an "on change" observer/callback:
  ;
  (pln "----- Part B: observers let the matrix have useful effect -------------------")

  (tag/io-clear-storage)
  (let [todos (cI nil
                    ; :obs is short for observer. All observers take the same parameters.
                    ; We demo the matrix operating on the non-matrix world (here, localStorage)
                    ; via an observer:
                    :obs (fn [slot me new-value prior-value cell]
                           (tag/io-upsert gentle-intro-ls-key
                                          (.stringify js/JSON
                                                      (map-to-json {:todos new-value})))))]
    ;
    ; above we provided a custom observer just for this instance of a Cell. When we get to
    ; full-blown objects we will be able to specify an observer for a property + object type, or
    ; for any property of an object type.
    ;
    ; We can also override the default observer for the whole Matrix engine.

    (println "Storage before cI reset says:" (tag/io-read gentle-intro-ls-key))
    ; console: Storage before cI reset says: nil

    (pln "Storing a couple of todos...")
    (c-reset! todos ["wash dog" "learn Mandarin"])
    (println "localStorage after reset says:" (tag/io-read gentle-intro-ls-key)))
  ; console: Storage after reset says: "[\"^ \",\"~:todos\",[\"wash dog\",\"learn Mandarin\"]]"

  ; Summary: we saw Cell getters, setters, and observers -- just the basics.
  ; n.b.: Do not confuse the matrix "observer" with the RxJS "observable" concept. Matrix
  ; observers are ancillary to dataflow, available for side-effects.

  (md/make ::dummyApp
           ; we build just a visible reminder of where we are in the intro:
           :mx-dom [(div {}
                      (h1 {} "Gentle Intro: Input cells")
                      (p {} "Input cells, accessors, and observers connecting matrix to world")
                      (p {} "(see JS console for output)->")
                      (p {} edit-intro-instructions))]))

(defn gentle-intro-formulaic-cells []

  ; ----- A chain of formulaic cells ------------------------------------------

  (let [;; our input cell again, starting empty
        todos (cI [])

        ;; some helper fns to hide the setters
        add-todo (fn [todo]
                   (pln :procedural-adding-todo!!!)
                   (c-reset! todos (conj (c-value todos) todo)))

        clear-todos (fn []
                      (pln :procedural-clearing-todos!!!)
                      (c-reset! todos nil))

        ;; A chain of formulaic cells, with print statements in the rules (so
        ;; we can tell who is recalculating) and observers so we can see the results.
        ;; The 'fn-obs' macro provides the parameters slot, me, new, old, and c for cell:

        todo-count (cF+ [:obs (fn-obs
                                ;; we'll have some fun and foreshadow the requisite TodoMVC HTML;
                                (pln "HTML soon:" (pp/cl-format nil "<strong>~a</strong>  item~:P remaining" new)))]
                        (pln "rule: counting todos!")
                        (count (c-get todos)))

        todos-empty (cF+ [:obs (fn-obs
                                 (pln "obs: empty:" new))]
                         (pln "rule: testing empty!")
                         (zero? (c-get todo-count)))

        html-hidden (cF+ [:obs (fn-obs
                                 (pln "obs: hidden:" new))]
                         (pln "rule: testing if dom should be hidden")
                         (c-get todos-empty))]


    (pln "starting value of hidden" (c-get html-hidden))
    ; in the console: starting hidden true

    (add-todo "clean dishes")
    ; in the console we see evidence:
    ; the list changes so it gets recounted
    ; the count changes so empty re-evaluates
    ; empty changes to false, so hidden re-evaluates to false
    ; console: "<strong>1</strong>  item remaining"

    (add-todo "file taxes")
    ; in the console:
    ; the list and count change, so empty re-evaluates
    ; empty decides it is unchanged as false, so hidden does not recompute.
    ; console: "<strong>2</strong>  items remaining"

    ; Summary: dataflow, stopping when a recomputed value is unchanged from before.
    ; Note that explicit publish and subscribe are not needed; a Cell depends on
    ; which other Cells it used, and (not demonstrated in this example) only those
    ; used in the prior computation.

    (md/make ::dummyApp
             :mx-dom [(div {}
                        (h1 {} "Gentle Intro: Formulaic cells")
                        (p {} "Formulaic cells, matrix HTML")
                        (p {} "(see JS console for output)->")
                        (p {} edit-intro-instructions))])))

(defn gentle-intro-models []
  ;
  ; "Models" are objects some of whose properties are wrapped in Cells. We use the term
  ; "model" not in the MVC sense but in the sense of a "working model". With properties as Cells,
  ; model objects react autonomously to state change. They act outside the Matrix via property
  ; observers and trigger other models to change. In effect, our objects are now animated by
  ; causal power over each other. Hence "working model".
  ;
  ; And again, in this usage a widget on the screen is also a "working model" in our app matrix.
  ;
  ; Yes, this scared us at first, the idea of our object models running by themselves. But this
  ; is not the under-specified, non-deterministic chaos of constraint logic programming: our
  ; rules were as linear and unambiguous as spreadsheet formulae. So once we got over the
  ; seeming loss of control we found automatic dataflow quite liberating. Our creations were
  ; easier to understand and more reliable. Soon manual state change propagation (when we
  ; fell back into old ways) was the paradigm that felt strange.
  ;
  ; Anyway... here is the to-do model used in the full implementation of TodoMVC. We will
  ; ignore most properties and just demonstrate model property accessors on the title and
  ; a whimsical 'versions' property.
  ;
  (let [to-do (md/make
                :type ::todo                                ;; useful once we get to TodoMVC proper

                ; these first two properties never change so are not wrapped in Cells
                :id (str gentle-intro-ls-key (uuidv4))
                :created (now)

                ;; now wrap mutable slots as Cells...
                :title (cI "Sell car")
                :versions (cF+ [:obs (fn-obs (pln :version new (<mget me :title)))]
                               ; we count the revisions of a todo,
                               ; a bit of silliness but I cannot think of a
                               ; formula for a todo (but note the availability
                               ; of the current value 'cache' to a formula).
                               (when (<mget me :title)
                                 (inc (if (= cache unbound) 0 cache))))

                ; these next two will be controlled by the user in the real TodoMVC
                :completed (cI false)
                :deleted (cI nil))]

    ; console: (:version 1 "Sell car")
    ; What triggered that? md/make brings matrix models to life ASAP by evaluating all formulaic cells
    ; and observing all cells, input or formulaic. Ergo, we got console output straight away.


    (mset!> to-do :title "Sell car and boat")
    ; console:  (:version 2 "Sell car and boat")

    (md/make ::dummyApp
             :mx-dom [(div {}
                        (h1 {} "Gentle Intro: Models")
                        (p {} "Models: objects with cells as properties")
                        (p {} "(see JS console for output)->")
                        (p {} edit-intro-instructions))])))

(def ^:export to-do 42)

(defn gentle-intro-to-Tag []
  ;
  ; Tag is a thin, Matrix-enabled HTML-generator with the design imperative
  ; that it work just like HTML, such that MDN can be its reference. We do not
  ; want to add to the learning curve gratuitously, and this might make Tag approachable
  ; for graphic designers.
  ;
  ; Matrix-enabled means HTML attributes and DOM structure can be declaratively
  ; expressed as Cells and react on the fly to changes in application state.
  ;
  ; Cells mediate individual HTML attributes, and DOM updates are correspondingly minimal.
  ; Cells also mediate the children of a DOM container and as with ReactJS a mechanism
  ; exists (not shown in this simple example) to avoid excessive DOM reconstruction
  ; when the children of a container change partially.
  ;

  (let [to-do (md/make
                :type ::todo
                :title (cI "Sell car")
                :completed (cI true))

        ; a bit of syntactic sugar to hide the <mget wiring:
        completed #(<mget % :completed)
        title #(<mget % :title)]

    #_ (go (let [response (<! (client/get "https://api.github.com"
                                          {:with-credentials? false}))]
             (prn (:status response))
             (prn (:body response))))

    (md/make ::dummyApp
             :mx-dom [(div {:style "margin:24px"}
                        (h1 {} "Gentle Intro to Tag&trade;")

                        (p {} "(click below to toggle whether to-do has been done)") ;; <-- User Guide

                        (p {:onclick #(binding [tag/*mxweb-trace* "toggle"]
                                        (mset!> to-do :completed (not (completed to-do))))
                            ; The dataflow engine propagates the change to the to-do to
                            ; the next two properties, and the console shows those changes
                            ; being propagated to the DOM attributes (and no DOM added or removed).

                            :style   (cF (str/join ";" ["background-color:white"
                                                        (str "color:"
                                                             (if (completed to-do) "red" "green"))]))

                            :content (cF (str (title to-do)
                                              (when (completed to-do)
                                                " (done)")))}))])

    ; ie, the view displays the todo and has a control to toggle the todo 'completed' property.
    ; When the todo 'completed' property changes the view style and content properties change
    ; and the console shows an observer updating only the style and content of one DOM element.

    ; Summary: a generic dataflow capability connecting properties of objects can support
    ; declarative authoring of web applications, seamlessly unifying the separate concerns
    ; of model, view, HTML generation, and persistence.
    ;
    ; This authoring can avoid explicit publication and subscribe to speed development and (especially)
    ; refactoring. The developer focuses on functionality instead of manually wiring and re-wiring
    ; framework mechanisms to arrange the same dataflow that is an emergent property of
    ; an automatic system.
    ;
    ; By operating at the property level, the dataflow engine supports maximally efficient
    ; DOM updates for free -- virtual DOM and its diffing are obviated because the
    ; dataflow engine has the information it needs to update the logical minimum given any
    ; particular state change.
    ;
    ; Internally, the dataflow engine can guarantee quality (non-duplicative, glitch-free, one-way)
    ; dataflow and do so across all separate concerns.
    ))