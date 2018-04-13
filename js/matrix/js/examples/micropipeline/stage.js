
class Stage extends Model {
    constructor( owner, islots={} ) {
        super( null, islots.name || "anonStage",
            Object.assign(
                {
                    dIn: cI( null),
                }, islots), false);

        ast(this.feeder && this.out, "feeder or out missing", islots.name);

        this.fsmIn = new FSM( 'stagein', this, stageInHandler );

        this.relayOut = 0;

        this.fsmOut = new FSM( 'stageout', this, stageOutHandler );

        withIntegrity(qAwaken, this, x => this.awaken());
    }
    tick () {
        this.fsmOut.tick();
        this.fsmIn.tick();
    }
}

function stageInHandler( stage, is) {
    if (is === 'init') {
        if (stage.feeder.reqd()) {
            stage.dIn = stage.feeder.payload;
            return 'ack';
        }
    } else if (is=== 'ack') {
        stage.feeder.ack();
        return 'process';
    } else if (is === 'process') {
        if ( stage.out.unackd()) {
            //clg('stagein> waiting for outAck', stage.name);
        } else {
            stage.out.payload = stage.process(stage.dIn);
            return 'relay';
        }
    } else if (is === 'relay') {
        stage.out.req();
        return 'init';
    }
}

function stageOutHandler( stage, is) {
    if ( is==='init') {
        if (stage.out.unackd()) {
            return 'getack';
        }
    } else if ( is === 'getack') {
        if ( stage.out.ackd() ) {
            return 'init';
        }
    }
}
