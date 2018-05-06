class FSM {
    constructor(id, context, handler) {
        this.id = id;
        this.ctx = context;
        this.state = 'init';
        this.handler = handler;
    }

    tick() {
        let newv = this.handler(this.ctx, this.state);
        if (newv) {
            this.state = newv;
        }
    }
}


// --- Handshaking -----------------------------------------------------------

class Bundle extends Model {
    constructor(owner, islots = {}) {
        super(owner, islots.name || "anonShake",
            Object.assign(
                {
                    rq: cI(0),
                    ak: cI(0),
                    data: cI(null)
                }, islots));

        withIntegrity(qAwaken, this, x => this.awaken());
    }

    masterClear() {
        this.rq = this.ak = 0;
        this.data = null;
    }

    req() {
        ast(this.ak === this.rq, "%s cannot be toggled when idle r=%d, a=%d"
            , this.name, this.rq, this.ak);
        ast(mTick > this.rq, "%s cannot be toggled until mTick advances r=%d, t=%d"
            , this.name, this.rq, mTick);
        //clg('handshake rq advances to', this.rq, this.name);
        this.rq = mTick;
    }

    reqd() {
        return ( this.rq > this.ak);
    }

    unreqd() {
        return ( this.data && ( this.rq <= this.data.t));
    }

    ack() {
        ast(this.rq > this.ak, "%s cannot be acked unless reqd r=%d, a=%d"
            , this.name, this.rq, this.ak);
        this.ak = this.rq;
    }

    ackd() {
        return ( this.ak > 0 && this.ak === this.rq );
    }

    unackd() {
        return ( this.rq > this.ak);
    }
}

function bundleView(label, bundle, stageN) {
    return ( stageN % 2 === 1 ) ?
        div({class: "pure-u-5-5 pure-g bundle"},
            raImg(bundle, rqSignal, stageN),
            payloadView(bundle, stageN),
            raImg(bundle, akSignal, stageN))
        : div({class: "pure-u-5-5 pure-g bundle"},
            raImg(bundle, akSignal, stageN),
            payloadView(bundle, stageN),
            raImg(bundle, rqSignal, stageN));
}

function payloadView(bundle, stageN) {
    return div({class: "pure-u-3-5"},
        div({class: "pure-g"},
            div({class: "pure-u-2-5"}),
            div({
                    class: "pure-u-1-5",
                    style: "display:flex;flex-direction:row;margin:8px;align-items:center"
                }
                , span("D" + stageNDisplay(stageN))
                , div(c => span({
                    class: "data bouncer"
                    , content: bundle.data ? bundle.data.d + '' : '...'
                    , style: "font-size:1em;" + dataStyle(bundle.data)
                })))));
}


function raImg(bundle, signalFn, stageN) {
    let ackp = (signalFn === akSignal);
    return div({class: "pure-u-1-5"},
        div({style: "display:flex;flex-direction:row;margin:8px;align-items:center;"},
            span({
                    style: cF(c => {
                        let app = c.md.fmUp("app");
                        if (app.tick === (ackp ? bundle.ak : bundle.rq)) {
                            return "background:cyan";
                        } else {
                            // clg("raimgstyle"
                            //     , stageN
                            //     , ackp
                            //     , (ackp ? bundle.ak : bundle.rq)
                            //     , app.tick);
                            return dataStyle(bundle.data, 'ramig');
                        }
                    })
                }
                , (ackp ? "A" : "R") + stageNDisplay(stageN))
            , img({class: "signal", src: cF(c => tnImgFormula(c))}
                , {signal: cF(c => signalFn(c, bundle))})));
}

function rqSignal(c, bundle) {
    let r = bundle.rq;
    if (r) {
        return (c.pv === 'up') ? 'down' : 'up';
    } else {
        return 'zz';
    }
}

function akSignal(c, bundle) {
    let r = bundle.ak;
    if (r) {
        return (c.pv === 'up') ? 'down' : 'up';
    } else {
        return 'zz';
    }
}

function tnImgFormula(c) {
    return "public/" + (c.md.signal === 'up' ? "tnRise" :
        (c.md.signal === 'zz' ? "tnNull" : "tnFall")) + ".png";
}

