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

        let stageN = 0
            , lastOut = this.stgIn = new HandShake( null, { name: "pipeStgIn"});

        this.stages = this.processes.map( proc => {
            let f = lastOut
                , o = new HandShake( null, {name: "hs-"+stageN+"->"+(stageN+1)})
                , s = new StageLight( null, {
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
        this.fsmIn.tick();
        this.stages.map( s => s.tick());
        this.fsmOut.tick();
    }
    feed( data) {
        clg('DRIVER> feeding pipe', data);

        this.feeder.payload = data;
        this.feeder.req();
        return data;
    }
}

// test that pipe does not accept new data until old out of the way

function pipeInHandler( pipe, is) {
    if (is === 'init') {
        if ( pipe.feeder.reqd()) {
            ast( pipe.feeder.payload !== null, 'pipe req sees no payload; you have to populate that before reqing');
            clg('pipein> fed!', pipe.feeder.payload);
            pipe.dIn = pipe.feeder.payload;
            pipe.feeder.ack();
            return 'process';
        }
    } else if (is === 'process') {
        pipe.stgIn.payload = pipe.dIn;
        pipe.stgIn.req();
        //clg('pipein> staged', pipe.dIn);
        return 'getack';

    } else if (is === 'getack') {
        if ( pipe.stgIn.ackd()) {
            //clg('pipein> ackd', pipe.dIn);
            return 'init';
        }
    }
}

function pipeOutHandler( pipe, is) {
    if (is === 'init') {
        if (pipe.stgOut.unackd()) {
            clg('pipeout> sees result', pipe.stgOut.payload);
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

