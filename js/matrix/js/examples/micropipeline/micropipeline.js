
function pipeTest () {
    cellsReset();
    mTick=0;

    let pipe = new Pipe( null, {
                name: "topipe"
                , processes: [plus1]})
        , piperIn = new FSM( 'piperIn', null, function(ctx, is) {
            //clg('piper FSM state/mtick at entry', is, mTick);
            if ( is === 'init') {
                clg('DRIVER> feeding pipe', 0);
                pipe.feed(0);
                clg('piperIN> fed pipe', pipe.feeder.payload);
                return 'getack';
            } else if (is === 'getack') {
                if ( pipe.feeder.ackd()) {
                    clg('DRIVER> got pipe ack');
                    return 'fini';
                }
            }
        })
        , piperOut = new FSM( 'piperOut', null, function(ctx, is) {
            if (is === 'init') {
                if ( pipe.out.unackd()) {
                    clg('DRIVER> got result', pipe.out.payload);
                    return 'fini';
                }
            }
        });

    let driver = function (tick) {
        clg('DRIVER TICK', mTick = tick);
        piperIn.tick()
        pipe.tick();
        piperOut.tick();
        if ( tick < 5 && piperOut.state != 'fini') {
            //clg('DRIVER not fini', mTick);
            setTimeout( driver, 500, tick+1)
        } else if (piperOut.state === 'fini') {
            clg('BAM! result', pipe.out.payload);
        }

    };
    driver(1);

    clg('fini?', piperOut.state);
}

pipeTest();


function plus1 (x) {
    return x+1;
}

function squared (x) {
    return x * x;
}

function negated (x) {
    return -x;
}

function MicroPipe () {
    // let p = new Pipe([ plus1, squared, minus1])
    //     , s0 = p.stage[0]
    //     , sn = p.stage[p.stage.length-1]
    //     , ast = 'init';
    //
    // s0.dIn = 3;
    // s0.fr.req();
    // ast = 'getack';
    //
    // for ( t = mTick + 1; ++t < 10; ) {
    //     clg('tick', t, ast);
    //     fsmTick( pipe);
    //     if (ast === 'getack') {
    //         if (s0.fr.ak === s0.fr.req) {
    //             clg('pipeacks!');
    //             ast = 'getresult;'
    //         }
    //     } else if ( ast === 'getresult') {
    //         if ( sn.to.req > sn.to.ak ) {
    //             sn.to.ak = sn.to.req;
    //             clg("Bingo result!", sn.dOut);
    //             break;
    //         }
    //     }
    //     mTick = t;
    // }

    return [ h1("Hello, MicroPipeline!")];
    // return [
    //     p({class: 'techtitular techtitle'}, "Introducing Matrix and mxWeb"),
    //     toolbar(),
    //     div( c=> bitAssemble( bitIds[currBitNo.v]))
    //     //toolbar()
    // ];
}

window['MicroPipe'] = MicroPipe;



/*

What we will do is have an FSM that takes one input, a pulse.

On each pulse the FSM will react to data represented by cIs by
setting other cIs. These will be there just for the view to follow.

We will not have formulas moving data because they would move data automatically
multiple steps and we want the user to be able to start, stop, or slow the action.

Conceivably single-steps can be cell-automated, but then we have a mix and this
is not complicated propagation anyway. We will see.

Data can be a 32-bit integer, the JS max, representing any number of values (up to 32).

I think wires will be made explicit, and two stages will share every wire, so we need
to go beyond trees.

The processing circuitry can be a simple function reading from input data and writing
to output data. So the stage will have two chunks of data, not necessarily having
the same number of bits.

We will need to work out what happens at the beginning and end of the pipeline. It seems
the pipeline itself is just a recursively owning stage with the pipeline stages serving as
the super-stage function. So the pipeline has an R-in and A-in and R-out and A-out, and the
test function can push and pull values asynchronously so it can keep the asybch thing going while driving
the pipeline and displaying values.

OK, here goes:

pipe:
    Ri
    Ai
    Di
    no processing function, but a processing vector of stages
    Ro
    Ao
    Do

stage:
    Ri
    Ai
    Di
    processing function
    Ro
    Ao
    Do

Now one stage's Ro is another stage's Ri, and this should be one object. Likewise for the acks.

The pipe Ri, Ai and Ro, Ao will not be connected to anything besides the pipe at construction time. They
will simply be accessible to a test harness.

The wires do not need to know their owners.

? Can a pipeline be a stage?

make-pipe takes a list of functions and returns a pipeline
with a ve

comm:
    req, ack: cI(0). When req > ack, we have new data for receiver. When bumps to match, we have acked.

stage:
    stageN: my position in parent pipe stage vector
    fr, to: comm
    processor: function or stage[]

pipe:
    din, dout; integers? bit vectors?
    processor: stage[]

Processing
==========
caller FSM:
    Thread 0
    --------
    initial
        get next datum, wherever u are getting it from
        P.dIn = next datum
        P.fr.r = tick;
        :getPAck

    getPAck:
        if P.fr.ak = P.fr.r
            :initial
        else
            :getPack

    Thread 1
    --------
    initial:
        if P.to.r > P.to.ak
            <consume P.dOut>
            P.to.ak = P.to.r
        endif
        :initial


pipe FSM:
    Thread 0
    --------
    initial:
        if fr.r = fr.ak
            :initial
        else
            ;; we assume our dIn has been set
            S0.dIn = dIn
            inc S0.fr.r
            :getStage0Ack

    getStage0Ack:
        if S0.fr.ak = .fr.r
            fr.ak = fr.r;
            :initial
        else
            getStage0Ack

    Thread 1
    --------
    initial:
        if SN.to.r > SN.to.ak
            dout = SN.dout;
            to.r = SN.to.r
            :getCallerAck;
        else
            :initial

    getCallerAck:
        if to.ak = to.r
            :initial


What we can do is have a big function that hits all the FSMs in some reasonable
order and then call it on user command or kick it off in a loop at an interval,
or just requesting animation frame. We still use a counter to detect toggling.
*/