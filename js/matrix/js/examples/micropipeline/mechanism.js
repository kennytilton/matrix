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
        } else {
            // clg('fsm state unchanged', this.id, this.state);
        }
        //clg('tick!', mTick, this.id, this.state, newv);

    }
}


// --- Handshaking -----------------------------------------------------------

class HandShake extends Model {
    constructor( owner, islots = {}) {

        super( owner, islots.name || "anonShake",
            Object.assign(
                {
                    rq: cI(0),
                    ak: cI(0),
                    payload: cI(null),
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
    ack () {
        ast( this.rq > this.ak, "%s cannot be acked unless shaken r=%d, a=%d"
            , this.name, this.rq, this.ak);
        this.ak = this.rq;
    }
    ackd () {
        return( this.ak > 0 && this.ak === this.rq );
    }
    unackd () {
        return( this.rq > 0 && this.rq > this.ak);
    }
}

