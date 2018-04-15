var mTick = 0;

var appdiv = null;

var dataTicks = [];

var goIntervalDelay = 1024;
var goInterval = null;

document.onkeydown = function(e) {
    e = e || window.event;
    clg('dockeydown:',e.key+'-'+e.keyCode);
    let app = dom2mx( document.getElementById('app'));


    let data = parseInt( e.key)
        , feeder = app.pipe.stgIn.feeder;

    if (isNaN( data)) {
        if (e.key==='t') {
            let r = app.pipe.take();
            clg('take took', r === undefined ? 'UDF' : r)
        } if (e.key==='c') {
            app.results = [];
            app.pipe.masterClear();

        } else if (e.key==='ArrowRight') {
            app.tick = ++mTick;
            app.runTicks();
        } else if (e.key==='ArrowDown') {
            feedStop = false;
            // window.requestAnimationFrame(()=> feedPipeAF(app, feeder));
            goInterval = setInterval( ()=> feedPipe(app, feeder), goIntervalDelay);
        } else if (e.key==='ArrowUp') {
            goIntervalDelay = goIntervalDelay / 2;
            clearInterval(goInterval);
            goInterval = setInterval( ()=> feedPipe(app, feeder), goIntervalDelay);
        } else if (e.key==='ArrowLeft') {
            goIntervalDelay = goIntervalDelay * 2;
            clearInterval(goInterval);
            goInterval = setInterval( ()=> feedPipe(app, feeder), goIntervalDelay);
        } else if (e.key==='.') {
            // feedStop = true;
            if (goInterval) {
                clearInterval(goInterval);
                goInterval = null;
            }
        }
    } else {
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function feedPipe (app, feeder) {
    app.tick = ++mTick;
    if (!(feeder.unreqd() || feeder.unackd())) {
        dataTicks.push( app.tick);
        feeder.data = {t: app.tick, d: getRandomInt(40)};
    }
    app.runTicks();
}

var feedStop = false;

function feedPipeAF (app, feeder) {
    app.tick = ++mTick;
    if (!(feeder.unreqd() || feeder.unackd())) {
        dataTicks.push( app.tick);
        feeder.data = {t: app.tick, d: getRandomInt(40)};
    }
    app.runTicks();
    if (!feedStop)
        window.requestAnimationFrame(()=> feedPipeAF(app, feeder));
}

var gProcesses = [plus1, squared, negated, divby3];

function MicroPipe () {
    return div({ id: 'app'},
            {
                tick: cI( mTick)
                , backlog: cI( null)
                , pipe: new Pipe( null, {
                    processes: gProcesses})
                , results: cI([42,17])

                , runTicks() {
                    this.piperIn.tick();
                    this.pipe.tick();
                    this.piperOut.tick();
                }

                , piperIn: cF(c=> new FSM( 'piperIn', c.md, function(ctx, is) {
                    let feeder = ctx.pipe.stgIn.feeder;
                    if ( is === 'init') {
                        if ( feeder.data ) {
                            if (feeder.unreqd()) {
                                if ( feeder.unackd()) {
                                    return 'getack';
                                } else {
                                    feeder.req();
                                }
                            } // else wait on data being reqd
                        } // else wait on data

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

                            //clg('DRIVER> RESULT!!!', out.data, ctx.results);
                            out.ack();
                            let newr = ctx.results.slice();
                            newr.push( out.data.d);
                            ctx.results = newr;
                            //clg('DRIVER> RESULT!!!', out.data, newr.results);


                            return 'init';
                        }
                    }
                }))
            },
            c => { let app = c.md;
                    return [div({class: "pure-g"},
                        div( {class: "pure-u-2-5"},
                            h4("Keyboard Commands"),
                            p("0-9    : Put N on D(in)"),
                            p(" c     : Master clear"),
                            p("right  : Step"),
                            p(""),
                            p(b("Animation Commands")),
                            p("down   : start/slower"),
                            p("up     : faster"),
                            p("period : stop"))

                        , div( {class: "pure-u-3-5"},
                                    h1({content: cF( c=> "MicroPipeline Simulator: " + app.tick)})
                                    , pipeView(c.md.pipe)))
                            //, div( c.md.results.map( r=>span( {class: "data"}, r)))
                    ]});
}

function pipeView( pipe) {
    let stageN = 1;
    return div( { class: "pure-u-4-5", style: "background:gray"} //  hh had pipe
            , pipe.stages.map( s=> stageView(s, stageN++)));
}

function stageView( stage, stageN) {
    return div( { class: "pure-g", style: "background:pink"}, //{style: "display:flex;flex-direction:column;margin:8px"},
        ( stageN===1? feederView( "Feeder", stage.feeder, stageN):null)
        , div( { class: "pure-u-5-5" }, // hh  "logicbox"
            b({ class: "pure-u-1-5"//, style: "margin-right:9px"
            }, "register")
            , div( {class: "pure-u-4-5" //"logic regsubbox"
                    , hidden: cF( c=> stage.data===null)}
                    , c=> (stage.data? span( {class: "bouncer data"
                                            , style: dataStyle(stage.data)
                                            , content: stage.data.d}) : null)))
        , div( {class: "pure-u-5-5"}, // "logicbox"}
            b({class: "pure-u-1-5"} //style: "margin-right:9px"}
                , "logic")
            , code( {class: "pure-u-4-5" } // "logic"}
                , stage.process.toString().replace("function ", "")))
        , feederView( "Out", stage.out, stageN+1));
}

function feederView( label, f, stageN) {
    return ( stageN % 2 === 1 )?
        div( {class: "pure-u-5-5 pure-g bundle"},
            raImg(f, rqSignal, stageN),
            payloadView(f, stageN),
            raImg(f, akSignal, stageN))
        : div( {class: "pure-u-5-5 pure-g bundle"},
            //{style: "display:flex;flex-direction:row;margin:8px;align-items:center"},
            raImg(f, akSignal, stageN),
            payloadView(f, stageN),
            raImg(f, rqSignal, stageN));
}

function raImg(hs, signalFn, stageN) {
    return div({class: "pure-u-1-5",
            style: "background:coral"},
        div( {style: "display:flex;flex-direction:row;margin:8px;align-items:center;"},
            span( {style: cF( c=> dataStyle(hs.data,'ramig'))}
                , (signalFn===akSignal?"A":"R")
                    + stageNDisplay(stageN))
            , img({ src: cF( c=> tnImgFormula(c))}
                , {signal: cF( c=> signalFn( c, hs))})));
}

function dataStyle (d, tag) {
    let ds =  d? "background:" +
                ['#fdd','#dfd','#ddf','#ffd','#fdf','#dff'][dataTicks.indexOf(d.t) % 6] : "";
    //if (d && tag) clg('dstyle', tag, ds, d.t, d.k, dataTicks.indexOf(d.t));
    return ds;
}

function payloadView( hs, stageN) {
    return div({ class: "pure-u-3-5"},
        div( {style: "display:flex;flex-direction:row;margin:8px;align-items:center"}
            , span("D" + stageNDisplay(stageN))
            , div( c=> span({class: "data bouncer"
                            , content: hs.data? hs.data.d+'':'...'
                            , style: dataStyle( hs.data)}))));
}

function stageNDisplay( n ) {
    return inParens(n === 1 ? "in":
        (n === 1+gProcesses.length? "out" : n));
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

