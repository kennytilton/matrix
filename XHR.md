# XHR: Towards Callback Heaven
We continue [our exploration](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/README.md) of the unexpected efficacy of simple property-to-property dataflow, and again we offer merely a proof-of-concept solution, the concept this time being...

> Can a sophisticated, generic reactive library eliminate Callback Hell (CBH), aka the challenge of writing what could be simple structured code if only we did not have to make an XMLHttpRequest at every turn.

If the reader is not familiar with CBH, here is one solid example:

![callback hell code example](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/resources/callback-hell.jpg)

The telltale signature of CBH is (a) the deep indentation of (b) asynchronous handler within handler. 

## Enter Matrix
We approached this challenge with no little trepidation, mostly because we had never had the occasion to code such a beast, and partly because of the "Hell" bit. We trust our fellow developers on such things. Bracing us was the history of dataflow success against hard problems. And had we thought on it, we might have seen that CBH would be no different.

### Step One: Load the Matrix
What we learned [with web apps]((https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/README.md)) was that, with everything (model, view, control, persistence) implemented as matrix objects (objects capable of dataflow), we did not need anything else in the way of a framework. HTML, CSS, and CLJS -- all mature and well-documented -- sufficed to put up an efficient dynamic web app with powerful declarative code.

Let us pause to make sure the reader groks "implement as matrix object". One good example arose in the classic TodoMVC challenge, where we "lifted" a JSON to-do item from `window.localStorage` into the matrix with this code (`c-in` creating input cells):
````
(defn- reload-todo [todo-json-map]
  (apply md/make
     ;; add a type to guide some methods...
     :type      ::todo

     ;; now wrap in cells those properties we might mutate...
     :title     (c-in (:title todo-json-map))
     :completed (c-in (:completed todo-json-map false))
     :deleted   (or (:deleted todo-json-map) ;; once deleted, always deleted
                    (c-in nil))})))))
````
Since the tricky requirements of the [TodoMVC spec](https://github.com/tastejs/todomvc/blob/master/app-spec.md) involved having the view reflect the state of the Todo items, we were pretty much done once Todos were in the Matrix. 

Let us then begin our attempt to resolve CBH with a matrix version of an XHR:
````
(model/make
    :type :tiltontec.xhr.core/xhr
    :uri uri
    :response (c-in nil))))))
````
Oh, cool. We need only one* XHR property backed by a Cell, the `response`. Our plan is to pack the entire response (or error) into that property when the Ajax request completes. Look for `md-reset!`, the dataflow trigger function: 
````
(defn xhr-send [xhr]
  (let [uri (md-get xhr :uri)]
  
    ;; dispatch the actual XHR....
    (client/get (md-get xhr :uri)
      {:async? true}
      
      ;; when the remote resource answers, trigger a matrix dataflow with the response...
      (fn [response]
        (md-reset! xhr :response {:status (:status response)
                                  :body   (parse-string (:body response) true)}))
                                  
      ;; or exception
      (fn [exception]
        (let [error-data (:data (bean exception))]
          (md-reset! xhr :response {:status (:status error-data)
                                    :body   (parse-string (:body error-data) true)}))))))
````
Great. Now XHRs are active players in the matrix, asynchronously driving its proven, glitch-free data recalculation engine as responses or exceptions come back. A view can own an XHR in one property and have a second HTML property that says (where anaphor `me` is the view) `(when-let response (md-get (:xhr me) :response)...)` and magically emit HTML when the response gets set. Yeah.

### Step Two: *Grow* the Matrix
\* Okay, we lied: make that *two* XHR properties backed by Cells. The second is the ubiquitous `kids`, short for children. In Matrix (as we construct it -- others could use other approaches), everything is a tree (hence the ubiquity).  The Matrix crucially supports graceful growth or shrinkage of that tree as driven by, you guessed it, the dataflow. Let us understand this before digging further into CBHell.

In our [TodoMVC solution](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/README.md), we see of course that *properties* of an object vary according to the surrounding state. For example, the class of a to-do item view depends on whether the model to-do has been completed:
````cljs
  (li {:class   (c? (if (md-get todo :completed) "completed" ""))
       ...}...)
````
Awesome. But we also need to vary the *population* of to-dos in the to-do list view as to-dos come and go and as the user filters them. Somewhat simplified:
````
(defn todo-list-items []
  (ul {:kids (c? (when-let [rte (mx-route me)]
                  (map todo-list-item
                     ;;
                     ;; both the overall number of (mx-todos me) (effectively an app-global input cell into which
                     ;; new to-dos are pushed in a way that triggers dataflow) and the route/filter chosen by 
                     ;; the user (another input cell) will fluctuate over time, reinvoking this code. 
                     ;;
                     ;; (Not shown is our mechanism for avoiding regenerating everything each time.)
                     ;;
                     (md-get (mx-todos me)
                             (case rte
                                "All" :items
                                "Completed" :items-completed
                                "Active" :items-active))))})
````
The Tag HTML library has an observer on the `kids` property so it knows when the matrix `UL` adds or removes `LI`s. It updates the DOM accordingly *and* works with MatrixCLJS to arrange for new/lost matrix objects to get up to speed or be quiesced in a way that does not break things (bringing us close to the internal weeds we promised to avoid).

> Fun Matrix historical note: when we hit upon dataflow we were stunned by its power and, like many who have since discovered some form of reactive library, we kept wondering when we would wake up from the dream -- when the library would hit some too low limit in what it could do. Dynamic, dataflow-driven population change was one place we were sure our luck would run out, and when it did not we suspected dataflow was deeply sound as paradigms go.

Below we will see dynamic `kids` expressing in tree form the sequence of callbacks of our Hellish use case above. But first, let us look now at how we came to see that sequence as a tree. (OK, the indentation should have been a tip-off.)

### Step Three: Hey, is that SQL?
Look again at the diagram above of our use case. Does it remind you of anything? Let me help: it takes a given user and collects all the comments for each post made by the friend. ie, Each XHR after the first is effectively doing an SQL join off of information gleaned from earlier XHRs! 

Just as Postgres (our fav) reads a little data then reads a little more based on what it found, the hellish callback cluster works outwards from an initial lookup by issuing new XHRs to get related data. The "hell" is in having to get there by juggling callbacks.

Enter the Matrix, a spreadsheet-like data network *designed* to be driven by asynchronous events.

### Step Four: Callback Heaven
We did not have a source of friends, posts, and comments so we gathered drug adverse events, products, labelling info, and recall notices from [OpenFDA](https://open.fda.gov). Here is the code (look for SEND-XHR, all caps in this write-up just to help you find them -- there are not as many as in our use case in part because OpenFDA responses happen to be trees themselves, saving us some XHR "joins"):
````
(SEND-XHR :brand-adv-events (cl-format nil ae-brand-template "adderall" ae-count)
  ;; returns "ae-count" adverse events for Adderall, and for each a list of all other drugs
  ;; being taken by the patient who experienced the event.
  {:brand brand
   :kids  (c? (for [ae (:results (xhr-selection me))]
                (make ::md/family
                  :name :adverse-event
                  :ae (select-keys ae [:transmissiondate :sender :serious])
                  :patient (dissoc (:patient ae) :drug)
                  :kids (for [drug (:drug (:patient ae))
                              :let [ndc (first (get-in drug [:openfda :product_ndc]))
                                    mfr-name (first (get-in drug [:openfda :manufacturer_name]))]]
                          (make ::md/family
                            :name :patient-drug
                            :ndc ndc
                            :drugindication (:drugindication drug)
                            :medicinalproduct (:medicinalproduct drug)
                            ;;
                            ;; now we build a heterogeneous family of XHRs, one to get drug label info
                            ;; and one to get possibly multiple recall notices by the manufacturer (of any drug)
                            ;;
                            :kids (c? (the-kids
                                        (when ndc
                                          (SEND-XHR :drug-label (cl-format nil drug-label ndc)))
                                        (when mfr-name
                                          (SEND-XHR :mfr-recall
                                            (cl-format nil mfr-recalls mfr-name))))))))))})
````
The indentation lives, but that is inherent in functionality so it *should* be there. Gone are the apparent callbacks.

Not shown above is the view code that would own `:brand-adv-events` XHR. It might be a "results" UL that would spawn sub-panel LIs for each AE returned. Those views would simply read the root AE XHR and grow as it grows. The root response will contain event information and patient information, but perhaps not yet any of the drugs. It will be able to render what it has. When the drug information comes in, the view assembly code runs again and finds the drug info and shows that. And all that seeming complexity is handled by the dataflow engine implementing the declarative specification above.

### Results
It turns out that two qualities of Matrix aligned well with features of Callback Hell, features that are problems for imperative code.

First we have the ability of the matrix to "grow" new members gracefully as driven by state changes aligned perfectly with SQL-like structured queries that go after more and more data as each query is satisfied: an initial XHR produces root results which spawn "child" XHRs that feed off the root results.

Second, the matrix was designed from the beginning to work off data fed into matrix "inputs" by imperative code, generally by asynchronous UI event handlers. A remote REST API driving our matrix with asynchronous responses is no different than a web user deciding to click a mouse.

### Conclusion
Callback Hell was right in the matrix wheelhouse all along. It just took us a while to see the incrementally expanding nature of a CBHell query, and to realize that callbacks *always* drive a matrix (so no worries).

## Shake 'n Bake, or Callback Purgatory
What you see above is actually our second take on applying Matrix to Callback Hell. In this section we describe the first thing we tried, which we have christened the "Shake 'n Bake" approach. (You will see.) It is too much fun to discard, and it may well solve edge cases better than the more sober approach above, so we will spare it the code axe. Indeed, it may be seen as syntactic-sugar or higher-GL than the above, and prefered by some. Here goes.

The idea was to let a complex query requiring multiple nested XHRs be expressed as a single block of apparently callback-free structured code in a single Cell formula. `if-else` and `for-each` and all that.

We got it to work using (a) [synapses](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/Synapses.md)  (anonymous formulaic Cells "owned" by a property's formulaic cell) and (b) repeated invocations of one declarative formula until that formula produced a cumulative result of so many XHR responses. The repeated invocations needed to resolve a single formula prompted the [Shake 'n Bake](https://youtu.be/i208-wFj8qs?t=1m28s) moniker. 

Here are some examples excerpted from [the XHR test suite](https://github.com/kennytilton/todoFRP/blob/matrixjs/todo/MatrixCLJS/test/tiltontec/xhr/core_test.cljc).

### Asynchronous made serial
We begin with simple example in which we execute three XHRs without blocking and without *coding* callbacks (a `send-xhr` function sets up callbacks for us which feed responses into the `response` input Cell) but in sequence such that each subsequent XHR can work of the results of earlier XHRs:
````
(let [content (c? (when-let [google (xhr-resolved (with-synapse (:s-goog)
                                                 (send-xhr "http://google.com")))]
                    (when-let [yahoo (xhr-resolved (with-synapse (:s-yahoo)
                                                  (send-xhr "http://yahoo.com")))]
                      (when-let [youtube (xhr-resolved (with-synapse (:s-tube)
                                                     (send-xhr "http://youtube.com")))]
                        (generate-html google yahoo youtube)))))]
  (println :google-yahoo-youtube (c-get content)))
````
> Nowhere above do we motivate the need for sequential XHR processing. More elaborate examples approximating the callback nightmare opening example are in development.

How on earth does that work? If you are new to Matrix dataflow, it will be hard to follow. We wrote the thing and it makes *our* head spin. Let us walk through the mechanics, delving a bit into some Matrix internalese:
* The key is recalling that a formulaic cell rule gets re-run by Matrix internals any time one of its dependencies changes.
* On the first invocation, a matrix XHR with a null `response` is created and an actual XHR hitting google.com is dispatched.  The function `xhr-resolved` looks at the `response` and sees that it is null, so it returns NIL and we fall out of the `content` rule with a NIL result. But the `content` rule is now "watching" the `response` of the matrix XHR.
* Next, the actual XHR gets a response and the callback supplied by `send-xhr` calls `md-reset!` on the `response` of the matrix XHR. The dataflow engine sees it must re-run the `content` rule and does so.
* Now the synapse wrapping the google XHR proves crucial. Synapses let rules maintain state across invocations. In this case, the form that created the synapse (and sent the XHR) sees the XHR already exists simply returns it. 
* The function `xhr-resolved` sees the XHR has a `response` and returns it (to the `when-let` binding of `google`).
* The `google` variable is now bound to an XHR which of course is truthy, so we continue on to the next synapse and send an XHR to Yahoo.
* Rinse, repeat (shake 'n bake) until the third XHR is resolved and the `content` cell returns HTML generated from the responses to all three requests.

How could an application work off this cell which only eventually (and asynchronously) yields a result? One example: the `content` cell above could actually be the rule to produce the content of an HTML `div`. That `div` would start out empty, but when the rule finally produced a result (some nested HTML) that result would be installed in the empty 'div' by the HTML engine and appear.

The head-spinner is that this one rule, once invoked, will run repeatedly and asynchronously driven by Ajax responses until all have been answered. Then never run again[1]. Normally formulaic Cells produce a complete result on their first invocation and recompute new complete results as their inputs change. In the case here of XHRs, a formula expresses a computation that begins by producing a null result but then on its own (driven by the asynchronous requests it dispatches) runs repeatedly until it converges on the intended result.

[1] Never again? In fact, if the synapse body were to reference some other cell property to build its URI, that synapse would run again if the other cell property changed. That in turn would trigger the containing rule to run and produce a new XHR, and new XHRs downstream from its creation. All while the orginal XHRs might still be in transit. So we could do this, but we would have to deal with any outstanding XHRs. This is why this solution is labelled "Purgatory". Asynchronous processing is somewhat tamed, but not completely. Work remains to get us to Callback Heaven.

### Asynchronus in parallel as one result
This time we let three requests run in parallel but return them together when all have completed.
````
(let [sites ["http://google.com" "http://yahoo.com" "http://youtube.com"]
      xhr-cell (c? (when-let [xhrs (with-synapse (:make-xhrs [])
                                      (map send-xhr sites))]
                      (when (every? #(some #{(xhr-status-key %)} [:responded :error]) xhrs)
                         xhrs)))]
     (cf-await xhr-cell)
     ...)
````
Function `cf-await` loops until the xhr-cell value is non-nil. The cell initially returns nil and then runs again each time a request is resolved, because the function `xhr-status-key` reads the input cell `status` which, again, gets set by the callback handlers as responses are received.

### Branching requests based on success of initial request
We write structured if-else code handling asynchronous requests without blocking or coding callbacks ourselves. See `cx-if-else` followed by two test cases:
````
  (c? (when-let [google (synaptic-xhr :s-goog goog-uri)]
                  (if (xhr-error? google)
                    (when-let [yahoo (synaptic-xhr :s-yahoo "http://yahoo.com")]
                      (cpr :goog-error-try-yahoo)
                      (list yahoo))
                    (when-let [youtube (synaptic-xhr :s-youtube "http://youtube.com")]
                      (cpr :goog-ok-add-youtube)
                      (list google youtube)))))
````
Each test involves running the cell formula three times:
1. The request to Google is dispatched and the code then reads `response` via `xhr-error`, setting up a dependency on `response`.
1. eventually `response` is set by the callback handler, triggering the second run. That issues one of two requests (driven by the error status) and again checks that requests `response`, depending now on that.
1 The second response is received and set and the rule runs again, and the accumulated responses are returned.

## Conclusion
*Shake 'n Bake* is a viable alternative to complex callback sequences, but introduces synapses and the oddity of a formula running repeatedly to come up with one result. On the other hand, it lets us write natural structured code while more transparently arranging for the same tree of XHRs to be built, so it may be the XHR 3GL to the explicit 2GL construction of a tree of XHRs.

Sounds like one for developer preference.

