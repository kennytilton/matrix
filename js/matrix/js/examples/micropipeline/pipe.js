class Pipe extends Model {
    constructor( owner, islots={} ) {
        super( null, islots.name || "anonPipe",
            {
                dIn: cI( null),
                //dInCopy: null,
                dOut: cI( null)
                //stages: processes.map( p=> new Stage(p))
            });

        this.dInCopy = null;
        this.feeder = new HandShake( null, { name: "pipeFeed"});
        this.fsmIn = new FSM( 'pipein', this, pipeInHandler );

        this.out = new HandShake( null, { name: "pipeOut"});
        this.fsmOut = new FSM( 'pipeout', this, pipeOutHandler );

        withIntegrity(qAwaken, this, x => this.awaken());
    }
    feed( data) {
        this.dIn = data;
        this.feeder.req();
        return data;
    }
    relayOut() {
        this.relay = mTick;
    }
    take() {
        this.out.ack();
        return this.dOut;
    }
}

// test that pipe does not accept new data until old out of the way

function pipeInHandler( pipe, is) {
    //clg('pipein entry', is);
    if (is === 'init') {
        //clg('pipeIn init', pipe.feeder.rq, pipe.feeder.ak,mTick);
        if ( pipe.feeder.reqd()) {
            clg('pipe in fed!', pipe.dIn);
            ast( pipe.dIn, 'pipe req sees no dIn; you have to populate that before reqing');
            pipe.dInCopy = pipe.dIn;
            pipe.feeder.ack();
            return 'process';
        }
    } else if ( is === 'process') {
        // nada processing for now
        clg('processing!!!', pipe.dInCopy);
        pipe.dOut = pipe.dInCopy;
        pipe.relayOut();
        return 'init';
    }
}

function pipeOutHandler( pipe, is) {
    if (is === 'init') {
        if ( pipe.relay > pipe.out.rq) {
            clg('pipeout relaying');
            pipe.out.req();
            return 'getack';
        }

    } else if ( is === 'getack') {
        if ( pipe.out.ak === pipe.out.rq ) {
            return 'init';
        }
    }
}

