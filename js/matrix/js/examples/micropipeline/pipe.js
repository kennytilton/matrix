class Pipe extends Model {
    constructor( owner, islots={} ) {
        super( null, islots.name || "anonPipe"
            , Object.assign(
                {
                    dIn: cI( null),
                    dOut: cI( null)
                }, islots)
            , false);

        ast( this.processes.length > 0);  // see if none Just Works

        this.feeder = new HandShake( null, { name: "pipeFeeder"});
        this.fsmIn = new FSM( 'pipein', this, pipeInHandler );

        let stageN = 1
            , lastOut = this.stgIn = new HandShake( null, { name: "pipeStgIn"});

        this.stages = this.processes.map( proc => {
            let f = lastOut
                , o = new HandShake( null, {name: "hs-"+stageN+"->"+(stageN+1)})
                , s = new Stage( null, {
                        name: "s-"+ stageN
                        , feeder: f
                        , process: proc
                        , out: o});
            lastOut = o;
            ++stageN;
            return s;
        });
        this.stgOut = lastOut;

        this.out = new HandShake( null, { name: "pipeOut"});
        this.fsmOut = new FSM( 'pipeout', this, pipeOutHandler );

        withIntegrity(qAwaken, this, x => this.awaken());
    }
    tick () {
        // this.fsmOut.tick();
        // for (let sn = this.stages.length-1; sn >= 0; --sn) {
        //     this.stages[sn].tick();
        // }
        // this.fsmIn.tick();
        this.fsmIn.tick();
        this.stages.map( s=> s.tick());
        this.fsmOut.tick();
    }
    feed( data) {
        if ( this.feeder.unackd()) {
            clg("DRIVER> Backpressure!", data);
            return undefined;
        } else {
            clg('DRIVER> feeding pipe', data);
            this.feeder.payload = data;
            this.feeder.req();
            return data;
        }
    }
    take() {
        if (this.out.unackd()) {
            let result = this.out.payload;
            clg('DRIVER> RESULT!!!', result);
            this.out.ack();
            return result;
        } else {
            return undefined;
        }
    }
}

// test that pipe does not accept new data until old out of the way

function pipeInHandler( pipe, is) {
    let fdr = pipe.feeder
        , stg = pipe.stgIn;

    if (is === 'init') {
        if ( fdr.reqd()) {
            clg('pipein> sees req!', fdr.rq, mTick, 'data', fdr.payload);
            return 'feedstage1';
        }

    } if (is === 'feedstage1') {
        clg('pipein> stage 1 loading', fdr.payload);
        stg.payload = fdr.payload;
        return 'reqstage1';

    } if (is === 'reqstage1') {
        stg.req();
        clg('pipein> stage 1 reqd', pipe.dIn);
        return 'getackstage1';

    } else if (is === 'getackstage1') {
        if ( stg.ackd()) {
            clg('pipein> stage 1 ackd', pipe.dIn);
            return 'ackpipefeed';
        }
    } else if (is==='ackpipefeed') {
        clg('pipein> acking', mTick);
        fdr.ack();
        return 'init';
    }
}

function pipeOutHandler( pipe, is) {
    if (is === 'init') {
        if (pipe.stgOut.unackd()) {
            clg('pipeout> loads last stage result', pipe.stgOut.payload);
            pipe.out.payload = pipe.stgOut.payload;
            pipe.stgOut.ack();
            return 'pipeout';
        }
    } else if (is === 'pipeout') {
        pipe.out.req();
        return 'getack';

    } else if (is === 'getack') {
        if (pipe.out.ackd() ) {
            return 'init';
        }
    }
}

