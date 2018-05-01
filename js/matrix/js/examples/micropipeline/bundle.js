class FSM {
    constructor( id, context, handler ) {
        this.id = id;
        this.ctx = context;
        this.state = 'init';
        this.handler = handler;
    }
    tick () {
        let newv = this.handler( this.ctx, this.state);
        if (newv) {
            this.state = newv;
        }
    }
}


// --- Handshaking -----------------------------------------------------------

class Bundle extends Model {
    constructor( owner, islots = {}) {

        super( owner, islots.name || "anonShake",
            Object.assign(
                {
                    rq: cI(0),
                    ak: cI(0),
                    data: cI(null),
                    val: cF( c=> {
                        if (c.md.rq === 0) {
                            return 'idle';
                        } else if (c.md.rq > c.md.ak) {
                            return 'shaken';
                        } else if (c.md.rq === c.md.ak) {
                            return 'shook';
                        } else {
                            return 'illogical';
                        }
                    })
                }, islots));

        withIntegrity(qAwaken, this, x => this.awaken());
    }
    masterClear() {
        this.rq=this.ak=0;
        this.data=null;
    }
    req () {
        ast( this.ak === this.rq, "%s cannot be toggled when idle r=%d, a=%d"
            , this.name, this.rq, this.ak);
        ast( mTick > this.rq, "%s cannot be toggled until mTick advances r=%d, t=%d"
            , this.name, this.rq, mTick);
        //clg('handshake rq advances to', this.rq, this.name);
        this.rq = mTick;
    }
    reqd () {
        return ( this.rq > this.ak);
    }
    unreqd () {
        return ( this.data && ( this.rq <= this.data.t));
    }
    ack () {
        ast( this.rq > this.ak, "%s cannot be acked unless reqd r=%d, a=%d"
            , this.name, this.rq, this.ak);
        this.ak = this.rq;
    }
    ackd () {
        return( this.ak > 0 && this.ak === this.rq );
    }
    unackd () {
        return( this.rq > this.ak);
    }
}

function bundleView( label, f, stageN) {
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

function payloadView( hs, stageN) {
    return div({ class: "pure-u-3-5"},
        div( {class: "pure-g"},
            div({class: "pure-u-2-5"}),
            div({class: "pure-u-1-5",
                    style: "display:flex;flex-direction:row;margin:8px;align-items:center"}
                , span("D" + stageNDisplay(stageN))
                , div( c=> span({class: "data bouncer"
                    , content: hs.data? hs.data.d+'':'...'
                    , style: "font-size:1em;" + dataStyle( hs.data)})))));
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

