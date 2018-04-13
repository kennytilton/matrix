var mTick = 0;

function tickBump (e) {
    clg('bump', e.key, mx.tag);

    // let title = e.target.value.trim();
    //
    // e.target.value = null;
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    let app = dom2mx( document.getElementById('app'));
    app.tick = ++mTick;

    if (!isNaN( parseInt( evt.key))) {
        let fn = parseInt( evt.key);
        let f = app.pipe.feeder.payload = fn;
        if (f === fn) {
            clg('fed', fn);
        } else {
            alert('Unable to pipe '+ fn + ' due to backpressure.');
        }
    } else if (evt.key=='t') {
        let r = app.pipe.take();
        clg('take took', r===undefined? 'UDF':r)
    }
    app.runTicks();

};

function MicroPipe () {
    return div({ id: 'app'},
            {
                tick: cI( mTick)
                , inputs: cI([7,42,3])
                , pipe: new Pipe( null, {
                    name: "Une pipe"
                    , processes: [plus1, squared, negated]})

                , piperIn: cF1( c=> new FSM( 'piperIn', c.md, function( app, is) {
                    let feeder = app.pipe.feeder;
                    if ( is === 'init') {
                        return 'checkpayload';
                    } else if (is === 'checkpayload') {
                        let i = c.md.inputs.pop();

                        if (!i) {
                            return 'fini';
                        } else {
                            clg('payload!!!!!=', i, !i);
                            feeder.payload = i;
                            return 'inject';
                        }
                    } else if (is==='inject') {
                        if (!feeder.rq || feeder.ackd()) {
                            clg('piperIn> injects pipe', mTick);
                            feeder.req();
                            return 'getack';
                        }
                    } else if (is === 'getack') {
                        if ( feeder.ackd()) {
                            clg('DRIVER> got pipe ack');
                            return 'checkpayload';
                        }
                    }
                }))

                , piperOut: cF1( c=> new FSM( 'piperOut', c.md, function( app, is) {
                    let out = app.pipe.out;
                    if (is === 'init') {
                        if ( out.unackd()) {
                            clg('DRIVER> RESULT!!!', out.payload);
                            out.ack();
                            return 'init';
                        }
                    }
                }))

                , runTicks() {
                    this.piperOut.tick();
                    this.pipe.tick();
                    this.piperIn.tick();

                }
            },
            c => [h1({content: cF( c=> "MicroPipeline Simulator: " +
                                 c.md.fmUp('div').tick)})
                //, img({src: "public/micropipeline.jpg"})
                , pipeView(c.md.pipe)]);
}

function pipeView( pipe) {
    let stageN = 1;
    return div(
        h2("Pipe " + pipe.name)
        , div( c=> c.md.par.fmTag('div').inputs.map( i=> span(" v"+i)))
        , piperView( "Pipe Feeder", pipe.feeder, -1)
        , div( pipe.stages.map( s=> stageView(s, stageN++)))
        , piperView( "Pipe Out", pipe.out, -2)
    );
}
function piperView( label, f, stageN) {
    return div(
        //h3(label),
        div( {style: "display:flex;flex-direction:row;margin:8px;align-items:center"},
            raImg(f, rqSignal, stageN),
            payloadView(f),
            raImg(f, akSignal, stageN))
    );
}
function payloadView( hs) {
    return div(
            b("REG"),
            div( c=> span({class: "payload bouncer", content: hs.payload})));
}

function stageView( stage, stageN) {
    return div( {style: "display:flex;flex-direction:column;margin:8px"}
        , ( stageN===1? feederView( "Feeder", stage.feeder, stageN):null)
        , b( "Stage " + stage.name)
        , feederView( "Out", stage.out, stageN+1));
}

function feederView( label, f, stageN) {
    return div(
        //h3(label),
        div( {style: "display:flex;flex-direction:row;margin:8px;align-items:center"},
            raImg(f, rqSignal, stageN),
            payloadView(f),
            raImg(f, akSignal, stageN))
    );
}

function rqSignal( c, hs) {
    let r = hs.rq;
    if (r) {
        return (c.pv==='up')? 'down':'up';
    } else {
        return 'zz';
    }
}

function akSignal( c, hs) {
    let r = hs.ak;
    if (r) {
        return (c.pv==='up')? 'down':'up';
    } else {
        return 'zz';
    }
}

function tnImgFormula(c) {
    return "public/" + (c.md.signal === 'up'? "tnRise":
        (c.md.signal === 'zz'? "tnNull":"tnFall")) + ".jpg";
}

function raImg(hs, signalFn, stageN) {
    return div({style: "display:flex;flex-direction:row;margin:8px;align-items:center"},
        span((signalFn===akSignal?"A":"R")+"("+
            (stageN > 0 ? stageN : ["","In","Out"][-stageN])+")")
        , img({src: cF( c=> tnImgFormula(c))}
            , {signal: cF( c=> signalFn( c, hs))}));
}
window['MicroPipe'] = MicroPipe;

