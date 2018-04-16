var mTick = 0;

var appdiv = null;

var dataTicks = [];

var goIntervalDelay = 256;
var goInterval = null;

document.onkeydown = function(e) {
    e = e || window.event;
    clg('dockeydown:',e.key+'-'+e.keyCode);
    let app = dom2mx( document.getElementById('app'))
        , data = parseInt( e.key);;
    ast(app, "dom no app");

    if (isNaN( data)) {
        if (e.key==='t') {
            let r = app.pipe.take();
            clg('take took', r === undefined ? 'UDF' : r)

        } if (e.key==='c') {
            app.results = [];
            app.pipe.masterClear();

        } else if (e.key==='ArrowRight') {
            feedPipeAuto(app, 'stop');
            app.tick = ++mTick;
            app.runTicks();

        } else if (e.key==='ArrowDown') {
            feedPipeAuto( app, 'start');

        } else if (e.key==='ArrowUp') {
            feedPipeAuto( app, 2);

        // } else if (e.key==='ArrowLeft') {
        //     feedPipeAuto(2);

        } else if (e.key==='.') {
            feedPipeAuto( app, 'stop');
        }
    } else {
        let feeder = app.pipe.stgIn.feeder;
        if (feeder.unreqd() || feeder.unackd()) {
            alert('Unable to pipe '+ data + ' due to backpressure.');
        } else {
            app.tick = ++mTick;
            dataTicks.push( app.tick);
            clg('dataticks', dataTicks);
            feeder.data = {t: app.tick, d: data, od: data};
        }
    }
};

function feedPipeAuto( app, how) {
    ast(app);
    if (how === 'start') {
        feedStop = false;
        if (goInterval) {
            clearInterval(goInterval);
            goIntervalDelay = goIntervalDelay/2;
            goInterval = setInterval( ()=> feedPipe(app), goIntervalDelay);
        } else {
            goInterval = setInterval( ()=> feedPipe(app), goIntervalDelay);
        }
    } else if (how === 'stop') {
        feedStop = true;
        if (goInterval) {
            clearInterval(goInterval);
            goInterval = null;
        }
    } else {
        if (goInterval) {
            clearInterval(goInterval);
        }
        goIntervalDelay = goIntervalDelay * how;
        goInterval = setInterval(() => feedPipe(app), goIntervalDelay);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function feedPipe (app) {
    ast(app,"no app");
    ast(app.pipe, "no pipe");
    ast(app.pipe.stgIn, "no stgin");
    let feeder = app.pipe.stgIn.feeder;
    app.tick = ++mTick;
    if (!(feeder.unreqd() || feeder.unackd())) {
        let d = getRandomInt(40);
        dataTicks.push( app.tick);
        feeder.data = {t: app.tick, d: d, od: d};
    }
    app.runTicks();
}

var feedStop = false;

function feedPipeAF (app, feeder) {
    app.tick = ++mTick;
    if (!(feeder.unreqd() || feeder.unackd())) {
        let d = getRandomInt(40);

        dataTicks.push( app.tick);
        feeder.data = {t: app.tick, d: d, od: d};
    }
    app.runTicks();
    if (!feedStop)
        window.requestAnimationFrame(()=> feedPipeAF(app, feeder));
}

var gProcesses = [plus1, squared, negated, divby3];

function piperInFSMTransiton (ctx, is) {
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
}

function piperOutFSMTransition (ctx, is) {
    out = ctx.pipe.stgOut.out;
    if (is === 'init') {
        if (out.unackd()) {
            let rct = ctx.results.length;

            if (rct === 0 || out.data.t > ctx.results[rct - 1].t) {
                //clg('DRIVER> RESULT!!!', out.data.t, out.data.d);
                let newr = ctx.results.slice(rct < 5 ? 0 : 1);
                newr.push(out.data);
                ctx.results = newr;
                //clg('DRIVER> RESULT!!!', out.data, newr.results);
            }
            out.ack(); // why re-ack necessary?
            return 'init';
        }
    }
}

function MicroPipe () {
    return div({ id: 'app'},
            {
                tick: cI( mTick)
                , backlog: cI( null)
                , pipe: new Pipe( null, {
                    processes: gProcesses})
                , results: cI([])

                , runTicks() {
                    this.piperIn.tick();
                    this.pipe.tick();
                    this.piperOut.tick();
                }

                , piperIn: cF(c=> new FSM( 'piperIn', c.md, piperInFSMTransiton))

                , piperOut: cF( c=> new FSM( 'piperOut', c.md, piperOutFSMTransition))
            },
            c => { let app = c.md;
                    return [div({class: "pure-g"},
                        div( {class: "pure-u-1-4"},
                            div( {style: "margin-top:96px"},
                            h4("Keyboard Commands"),
                                div({style: "margin-left:18px"},
                                    p("0-9    : Inject 0-9 on D(in)"),
                                    p(" c     : Master clear"),
                                    p("")),
                            p(b("Animation Commands")),
                                div({style: "margin-left:18px"},
                                    p("right  : Step"),
                                    p("down   : Start/Faster"),
                                    p("up     : Slower"),
                                    p("period : Stop")))
                        , div( b("Results")
                                , div( {style: "margin-left:18px"},
                                    c.md.results.map( r=>p( r.od+' => '+r.d)))))

                        , div( {class: "pure-u-3-4"},
                            h1({content: cF( c=> "Micropipeline Illustrator at " + app.tick)})
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
    return div( { class: "pure-g", style: "background:"+["#bbb","#ddd"][stageN%2]}, //{style: "display:flex;flex-direction:column;margin:8px"},
        ( stageN===1? feederView( "Feeder", stage.feeder, stageN):null)
        , registerView( stage)
        , div( {class: "pure-u-5-5 pure-g",style: "background:#ffd;"+flexrow}, // "logicbox"}
            b({class: "pure-u-1-5", style: "margin:6px"}
                , "logic")
            , div( {class: "pure-u-3-5",
                    style: "display:flex; align-items:center"},
                code( stage.process.toString()
                    .replace("function ", "")
                    .replace("return ", ""))))
        , feederView( "Out", stage.out, stageN+1));
}
const flexrow = "display:flex;flex-direction:row;align-items:center;";

function registerView( stage) {
    return div({class: "pure-u-5-5 pure-g", style:"margin:3px"},
        div({class: "pure-u-2-5"})
        , div({class: "pure-u-2-5 pure-g"}
            , b({class: "pure-u-1-5", style: "margin-top:0.3em"}, "REG")
            , div( {class: "pure-u-2-5"},
                c => (stage.data ? span({
                    class: "bouncer data"
                    , style: dataStyle(stage.data)
                    , content: stage.data.d+''
                }) : span({class: "data"}, "...")))));
}

function payloadView( hs, stageN) {
    return div({ class: "pure-u-3-5"},
        div( {class: "pure-g"},
            div({class: "pure-u-2-5"}),
            div({class: "pure-u-1-5",
                    style: "display:flex;flex-direction:row;margin:8px;align-items:center"}
                , span("D" + stageNDisplay(stageN))
                , div( c=> span({class: "data bouncer"
                    , content: hs.data? hs.data.d+'':'...'
                    , style: dataStyle( hs.data)})))));
}

function feederView( label, f, stageN) {
    return ( stageN % 2 === 1 )?
        div( {class: "pure-u-5-5 pure-g bundle"},
            raImg(f, rqSignal, stageN),
            payloadView(f, stageN),
            raImg(f, akSignal, stageN))
        : div( {class: "pure-u-5-5 pure-g bundle"},
            raImg(f, akSignal, stageN),
            payloadView(f, stageN),
            raImg(f, rqSignal, stageN));
}

function raImg(hs, signalFn, stageN) {
    return div({class: "pure-u-1-5"},
        div( {style: "display:flex;flex-direction:row;margin:8px;align-items:center;"},
            span( {style: cF( c=> dataStyle(hs.data,'ramig'))}
                , (signalFn===akSignal?"A":"R")
                    + stageNDisplay(stageN))
            , img({ class: "signal", src: cF( c=> tnImgFormula(c))}
                , { signal: cF( c=> signalFn( c, hs))})));
}

var dataColors = ['#dfd','cyan'];

function dataStyle (d, tag) {
    let ds =  "background:" +
        (d? dataColors[dataTicks.indexOf(d.t) % dataColors.length]+";" : "none;");
    //if (d && tag) clg('dstyle', tag, ds, d.t, d.k, dataTicks.indexOf(d.t));
    return ds;
}
// function dataStyle (d, tag) {
//     let ds =  d? "background:" +
//         dataColors[dataTicks.indexOf(d.t) % dataColors.length]+";" : "";
//     //if (d && tag) clg('dstyle', tag, ds, d.t, d.k, dataTicks.indexOf(d.t));
//     return ds;
// }

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
        (c.md.signal === 'zz'? "tnNull":"tnFall")) + ".png";
}



window['MicroPipe'] = MicroPipe;

function inParens (x) {
    return "(" + x +")";
}

