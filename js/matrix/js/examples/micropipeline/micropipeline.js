var mTick = 0;

function tickBump (e) {
    clg('bump', e.key, mx.tag);

    // let title = e.target.value.trim();
    //
    // e.target.value = null;
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    //clg('keydown', evt.key, typeof evt.key, evt.keyCode);
    let app = dom2mx( document.getElementById('app'));
    //clg('app ticks to ',  app.tick+1);
    app.tick = ++mTick;
    if (!isNaN( parseInt( evt.key))) {
        let fn = parseInt( evt.key);
        let f = app.pipe.feed( fn);
        if (f === fn) {
            clg('fed', fn);
        } else {
            clg('unfed BP', fn);
        }
    } else if (evt.key=='t') {
        let r = app.pipe.take();
        clg('take took', r===undefined? 'UDF':r)
    }
    app.pipe.tick();

};

function MicroPipe () {
    return div({ id: 'app'},
            {
                tick: cI( mTick)
                , pipe: new Pipe( null, {
                    name: "Une pipe"
                    , processes: [plus1, squared, negated]})
            },
            c => [h1({content: cF( c=> "MicroPipeline Simulator")})
                , img({src: "public/micropipeline.jpg"})
                , pipeView(c.md.pipe)]);
}

function pipeView( pipe) {
    return div(
        h2("Pipe " + pipe.name)
        , feederView( "Pipe Feeder", pipe.feeder)
        , div( pipe.stages.map( stageView))
        , feederView( "Pipe Out", pipe.out)
    );
}

function feederView( label, f) {
    return div(
        h3(label),
        div( {style: "display:flex;flex-direction:row;margin:8px;align-items:center"},
            payloadView(f),
            raImg(f, rqSignal),
            raImg(f, akSignal))
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

function raImg(hs, signalFn) {
    return div({style: "display:flex;flex-direction:row;margin:8px;align-items:center"},
        span(signalFn===akSignal?"A:":"R:")
        , img({src: cF( c=> tnImgFormula(c))
                , style: "min-width:100px"}
            , {signal: cF( c=> signalFn( c, hs))}));
}


function payloadView( hs) {
    return div(
            span("Data"),
            span({class: "payload", content: cF( c=> hs.payload)}));
}

function stageView( stage) {
    return div( {style: "display:flex;flex-direction:row;margin:8px"}
            , b( "Stage " + stage.name)
            , feederView( "Feeder", stage.feeder)
            , feederView( "Out", stage.out));
}

window['MicroPipe'] = MicroPipe;

function pipeTestIII ( ) {
    cellsReset();
    mTick = 0;
    let pipe = new Pipe( null, {
                        name: name
                        , processes: [plus1, squared, negated]});

    ++mTick;
    clg('sbok', pipe.feed(42));

    let f7 = true;

    for (let x = 0; ++x < 30; ) {
        if (f7) {
            let f = pipe.feed(7);

            if (f === undefined) {
                clg('tester sees backp!!!!!!!!!!!!!');
            } else {
                f7 = false;
                clg("tester second feed ok", f);
            }
        }
        ++mTick;
        pipe.tick();

        let r = pipe.take();
        if ( r !== undefined) {
            clg('bam', r);
        }
    }

}

// pipeTestIII();

