var mTick = 0;

var appdiv = null;

var dataTicks = [];

document.onkeydown = function(e) {
    e = e || window.event;
    clg('dockeydown:',e.key+'-'+e.keyCode);
    let app = dom2mx( document.getElementById('app'));


    let data = parseInt( e.key);

    if (isNaN( data)) {
        if (e.key=='t') {
            let r = app.pipe.take();
            clg('take took', r === undefined ? 'UDF' : r)
        } else if (e.key==='ArrowRight') {
            app.tick = ++mTick;
            app.runTicks();
        }
    } else {
        let feeder = app.pipe.stgIn.feeder;

        if (feeder.unreqd() || feeder.unackd()) {
            alert('Unable to pipe '+ data + ' due to backpressure.');
        } else {
            app.tick = ++mTick;
            dataTicks.push( app.tick);
            clg('dataticks', dataTicks);
            feeder.data = {t: app.tick, d: data};
        }
    }
};


function MicroPipe () {
    return div({ id: 'app'},
            {
                tick: cI( mTick)
                , backlog: cI( null)
                , pipe: new Pipe( null, {
                    processes: [plus1, squared, negated]})

                , runTicks() {
                    this.piperIn.tick();
                    this.pipe.tick();
                    this.piperOut.tick();
                }
                , piperIn: cF(c=> new FSM( 'piperIn', c.md, function(ctx, is) {
                    clg('this', this);
                    clg('ctx', ctx, c.md===ctx);
                    let feeder = ctx.pipe.stgIn.feeder;
                    if ( is === 'init') {
                        if ( feeder.data ) {
                            if (feeder.unreqd()) {
                                clg('feeder unreqd!', feeder.data.t)
                                if ( !feeder.unackd()) {
                                    clg('req!!!!!!');
                                    feeder.req();
                                } // else wait on ack
                            } // else wait on data
                        }
                        return 'getack';
                    } else if (is === 'getack') {
                        if ( feeder.ackd()) {
                            return 'init';
                        }
                    }
                }))
                , piperOut: cF( c=> new FSM( 'piperOut', c.md, function(ctx, is) {
                    out = ctx.pipe.stgOut.out;
                    if (is === 'init') {
                        if ( out.unackd()) {
                            clg('DRIVER> RESULT!!!', out.data);
                            out.ack();
                            return 'init';
                        }
                    }
                }))
            },
            c => [h1({content: cF( c=> "MicroPipeline Simulator: " +
                                 c.md.fmUp('div').tick)})

                , pipeView(c.md.pipe)]);
}

function pipeView( pipe) {
    let stageN = 1;
    return div( { class: "pipe"}
            , pipe.stages.map( s=> stageView(s, stageN++)));
}

function stageView( stage, stageN) {
    return div( {style: "display:flex;flex-direction:column;margin:8px"}
        , ( stageN===1? feederView( "Feeder", stage.feeder, stageN):null)
        , div( { class: "logicbox"}
            , b({style: "margin-right:9px"}, "register")
            , div( {class:"logic regsubbox", hidden: cF( c=> stage.data===null)}
                    , c=> (stage.data? span( {class: "bouncer data"
                                            , style: dataStyle(stage.data)
                                            , content: stage.data.d}) : null)))
        , div( {class: "logicbox"}
            , b({style: "margin-right:9px"}, "logic")
            , code( {class: "logic"}, stage.process.toString().replace("function ", "")))
        , feederView( "Out", stage.out, stageN+1));
}

function feederView( label, f, stageN) {
    return ( stageN % 2 === 1 )?
        div( {class: "bundle"},
            raImg(f, rqSignal, stageN),
            payloadView(f, stageN),
            raImg(f, akSignal, stageN))
        : div( {style: "display:flex;flex-direction:row;margin:8px;align-items:center"},
            raImg(f, akSignal, stageN),
            payloadView(f, stageN),
            raImg(f, rqSignal, stageN));
}

function raImg(hs, signalFn, stageN) {
    return div({style: "display:flex;flex-direction:row;margin:8px;align-items:center;"},
        span( {style: cF( c=> dataStyle(hs.data,'ramig'))
            }
            , (signalFn===akSignal?"A":"R")
                + inParens(stageN > 0 ? stageN : ["","In","Out"][-stageN]))
        , img({ src: cF( c=> tnImgFormula(c))}
            , {signal: cF( c=> signalFn( c, hs))}));
}

function dataStyle (d, tag) {
    let ds =  d? "background:" +
                ['#fdd','#dfd','#ddf','#ffd','#fdf','#dff'][dataTicks.indexOf(d.t) % 6] : "";
    if (d && tag) clg('dstyle', tag, ds, d.t, d.k, dataTicks.indexOf(d.t));
    return ds;
}

function payloadView( hs, stageN) {
    return div({style: "display:flex;flex-direction:row;margin:8px;align-items:center"}
            , span("D" + inParens(stageN > 0 ? stageN : ["","In","Out"][-stageN]))
            , div( c=> span({class: "data bouncer"
                            , content: hs.data? hs.data.d:''
                            , style: dataStyle( hs.data)})));
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



window['MicroPipe'] = MicroPipe;

function inParens (x) {
    return "(" + x +")";
}

