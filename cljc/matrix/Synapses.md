# Synapses

[Just tossing in some random thoughts before dashing on to a write-up of Callback Purgatory, where we will in fact see a tremendous motivating example of Synapses. This write-up assumes the reader has read the [Matrix overview](https://github.com/kennytilton/tag/blob/master/cljs/README.md); we pick up here from a quick mention there of what we call *synapses*.]

> syn·apse [sin-aps, si-naps] Physiology *noun* - A junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.

What are synapses? Synapses are pretty much the same as Cells except they are spawned within the bodies of other Cells and can be accessed only by those other Cells. Think "anonymous function". They most commonly access one other Cell-managed property and serve to transform the values of that other property in ways useful to the host Cell, say by filtering, throttling, compressing, or taking a moving average of them -- whatever the developer likes, because like normal Cells the synapse body is authored using arbitrary HLL code.

So synapses are Cells that sit between two other Cells mediating the values passing from one to the other. Let us look at a very simple one that returns to its host rule the delta between two consecutive values of another cell. The use case is an alarm we want to turn on if we see a sensor value jump by more than five:
````
(deftest synaptic-delta
  (let [sensor (cI nil)
        alarm (cF (when-let [delta (with-synapse (:delta-sensor [prior (atom nil)])
                                     (when-let [reading (c-get sensor)]
                                       (let [delta (Math/abs (if @prior
                                                               (- reading @prior)
                                                               0))]
                                         (reset! prior reading)
                                         delta)))]
                    (if (> delta 5)
                      :on :off)))]
    ...))
````
In the remaining test code not shown we reset the sensor to different values checking that the alarm state follows correctly given the simulated sensor readings. 

The `with-synapse` form can be thought of this way (which would never work!):
````
(deftest synaptic-delta
  (let [sensor (cI nil)
        alarm (cF (if (let [prior (atom nil)]
                           (cF (when-let [reading (c-get sensor)]
                                  (let [delta (Math/abs (if @prior
                                                            (- reading @prior)
                                                            0))]
                                     (reset! prior reading)
                                     delta))))
                    (if (> delta 5)
                      :on :off)))]
    ...))
````
That would never work because we would get a new internal formulaic Cell (with all new state in the `prior` atom), but the `with-synapse` form addresses that and we end up with a standalone (anonymous cell) that sits between the `alarm` and `sensor` cells. 

By the way, the full form is rather verbose, but where we see common uses of synapses we can create a library of canned synapses so the above looks like:
````
(deftest synaptic-delta
  (let [sensor (cI nil)
        alarm (cF (if (> (cSynDelta (:threshhold 5)
                            (c-get sensor))
                      :on :off)))]
    ...))
````
Note also that in such a simple case a second explicit "sensor-delta" cell could have been defined for the alarm cell to consult, but here again the analogy of an anonymous function helps: in languages such as C that lack anonymous functions we are forced to define named top-level functions to get an address used only in one place (such as a sort comparison parameter). Synapses, like anonymous functions, let us avoid such needless proliferation of top-level entities.

Transforming a stream of values to its first derivative is fun, but synapses were originally developed to throttle a stream of values coming into an expensive computation with unnecessary granularity. We saw we could get by with knowing the external value only when it had changed by a certain amount.
````
(deftest synaptic-sensitivity
  ; here we look at a twist on the delta synapse: this time we report the
  ; unmodified stream value only when it has changed by a certain amount
  ; when compared with the prior value reported
  (cells-init)
  (let [temp (cI 0)
        alarm (cF (expensive-alarm-determination
                    (with-synapse (:sensitivity-x [sensitivity 10.0
                                                   reported (atom nil)]) 
                      (when-let [raw-temp (c-get temp)]
                        (cond
                          (or (nil? @reported)
                              (>= (Math/abs (- raw-temp @reported))
                                  sensitivity))
                          (do (reset! reported raw-temp)
                              ^{:propagate true} [raw-temp])
                          
                          :else ^{:propagate false} [raw-temp])))))]
    ...testing code...
    ))
````
In the above case we report the sampled value untransformed but only often enough to get the alarmed turned on in time without killing the CPU with superfluous determinations.

For more examples of synapses, check the source of the [synapse tests](https://github.com/kennytilton/matrix/blob/master/cljs/test/tiltontec/cell/synapse_test.cljc). One of those tests (`synaptic-grouping`) monitors an input Cell, buffering each value as it arrives, and emiting them in groups of three. ie, the synapse treats a dependency on an individual property as a stream. Let us look at this more closely.

## Synapses: Islands in a Stream
Two other excellent dataflow libraries are Javascript libraries [MobX](https://github.com/mobxjs/mobx) and [RxJS](https://github.com/Reactive-Extensions/RxJS). In its doc, MobX [compares itself with RxJS](https://github.com/mobxjs/mobx/wiki/Mobx-vs-Reactive-Stream-Libraries-%28RxJS,-Bacon,-etc%29) and concludes MobX is better for steady-state expressiveness and RxJS is better for streams.

> So, in summary, when should you use stream libraries over MobX? Answer: when time or history plays an important role. The above examples is where MobX shines; if you can derive it from the state you have now, transparent reactive programming is a lot easier and more consistent [...] But if time plays an important role, like when throttling, accumulating events or having complex join patterns like zip, these are the cases where you want to work with streams.

But if we think on it, where there is data*flow* we should be able to find *streams*. We felt MobX was being modest and sent them [this JsFiddle](https://jsfiddle.net/kennytilton/s7mp43tr/) derived from one of theirs, showing MobX could indeed work over streams of values. And MobX like synapses have a major advantage over the RxJS approach: instead of trying to work out how to get desired semantics from fixed stream operators joining multiple streams, we write arbitrary HLL code that pulls from multiple streams and then adds whatever semantics we like via the HLL logic. Consider again this diagram from the earlier write-up.

![DAG graphic](https://github.com/kennytilton/matrix/blob/master/cljs/resources/Directed_acyclic_graph.png) 

Every node in that graph presents a stream of values, even the input cells although we are forced to guess the source of their values since any imperative code is free to write to them. (They are the "goto"s of dataflow.) But these streams arise naturally from our application coding, so we do not think about them until the rare case where we have a performance problem that can be ameliorated by throtttling or some such, or the case of [the XHR module](https://github.com/kennytilton/xhr/blob/master/cljs/XHR.md) where we use synapses to let a normally functional Cell body maintain state across invocations.




