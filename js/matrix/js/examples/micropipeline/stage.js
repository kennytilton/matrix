
class Stage extends Model {
    constructor( owner, islots={} ) {
        super( null, islots.name || "anonStage",
            Object.assign(
                {
                    data: cI( null),
                }, islots), false);

        ast(this.feeder && this.out, "feeder or out missing", islots.name);

        this.fsmIn = new FSM( 'stagein', this, stageInHandler );

        this.fsmOut = new FSM( 'stageout', this, stageOutHandler );

        withIntegrity(qAwaken, this, x => this.awaken());
    }
    tick () {
        this.fsmOut.tick();
        this.fsmIn.tick();
    }
    masterClear () {
        this.data = null;
        this.feeder.masterClear();
        this.out.masterClear();
        this.fsmIn = new FSM( 'stagein', this, stageInHandler );
        this.fsmOut = new FSM( 'stageout', this, stageOutHandler );
    }
}

function stageInHandler( stage, is) {
    if (is === 'init') {
        if (stage.feeder.reqd()) {
            if (stage.feeder.rq === mTick) {
                return 'capture';
            }
            // clg('capturing with', stage.feeder.rq, mTick);
            stage.data = stage.feeder.data;
            return 'ack';
        }
    } else if (is === 'capture') {
        stage.data = stage.feeder.data;
        return 'ack';
    } else if (is === 'ack') {
        stage.feeder.ack();
        return 'process';
    } else if (is === 'process') {
        if ( stage.out.unackd()) {
            //clg('stagein> waiting for outAck', stage.name);
        } else {
            stage.out.data = {t: stage.data.t
                            , od: stage.data.od
                            , d: stage.process(stage.data.d)};
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



