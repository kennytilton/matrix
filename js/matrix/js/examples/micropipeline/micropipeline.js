var mTick = 0;

var gProcesses = [plus1, squared, negated, divby3];

function Micropipeline () {
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

window['Micropipeline'] = Micropipeline;


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


var dataColors = ['#dfd','cyan'];

function dataStyle (d, tag) {
    let ds =  "background:" +
        (d? dataColors[dataTicks.indexOf(d.t) % dataColors.length]+";" : "none;");
    //if (d && tag) clg('dstyle', tag, ds, d.t, d.k, dataTicks.indexOf(d.t));
    return ds;
}

function inParens (x) {
    return "(" + x +")";
}

