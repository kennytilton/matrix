class Stage extends Model {
    constructor( owner, islots={} ) {
        super( null, islots.name || "anonStage",
            Object.assign(
                {
                    dIn: cI( null),
                    dOut: cI( null)
                }, islots), false);

        this.dInCopy = null;
        this.fsmIn = new FSM( 'stagein', this, stageInHandler );

        this.relayOut = 0;

        this.fsmOut = new FSM( 'stageout', this, stageOutHandler );

        withIntegrity(qAwaken, this, x => this.awaken());
    }
    tick () {
        this.fsmIn.tick();
        this.fsmOut.tick();
    }
}


function stageInHandler( stage, is) {
    ast( stage.feeder);
    if (is === 'init') {
        ast( stage.feeder);
        //clg('stageIn init', stage.feeder.rq, stage.feeder.ak,mTick);
        if ( stage.feeder.reqd()) {
            ast( stage.feeder.payload, 'stage req sees no payload', stage.name);
            stage.dIn = stage.feeder.payload;
            clg('stage-in> fed!', stage.name, stage.dIn);
            stage.dInCopy = stage.dIn;
            stage.feeder.ack();
            return 'process';
        }
    } else if ( is === 'process') {
        // nada processing for now
        clg('stage-in> processing!!!', stage.dInCopy);
        stage.dOut = stage.process( stage.dInCopy);
        clg('stage-in> computed!', stage.name, stage.dOut);
        stage.relayOut = mTick;
        return 'init';
    }
}

function stageOutHandler( stage, is) {
    ast( stage.out);
    if (is === 'init') {
        if ( stage.relayOut > stage.out.rq) {
            clg('stage-out> relaying', stage.dOut);
            stage.out.payload = stage.dOut;
            stage.out.req();
            return 'getack';
        }
    } else if ( is === 'getack') {
        if ( stage.out.ak === stage.out.rq ) {
            return 'init';
        }
    }
}

// testStage2();

function testStage2 () {
    cellsReset();
    mTick=0;

    let s1 = new Stage( null, {
        name: "s-1"
        , process: d => d + 1})

        , s2 = new Stage( null, {
        name: "s-2"
        , process: d => d*d})
        , hs = new HandShake( null, {name: "h1-h2"});

    s1.out = s2.feeder = hs;

    let fedTick = null
        , hsIn = new HandShake( null, {name: "drv-s1"})
        , hsOut = new HandShake( null, {name: "s2-drv"})
        , piperIn = new FSM( 'piper', null, function(ctx, is) {
            //clg('piper FSM state/mtick at entry', is, mTick);
            if ( is === 'init') {
                hsIn.payload = 42;
                clg('pipeIN> feeding stage-1', hsIn.payload);
                hsIn.req();
                return 'getack';
            } else if (is === 'getack') {
                if (hsIn.ak = hsIn.rq) {
                    clg('pipeIN> got stage-1 ack');
                    fedTick = mTick;
                    return 'init';
                }
            }
        })
        , piperOut = new FSM( 'piper', null, function(ctx, is) {
            //clg('piper FSM state/mtick at entry', is, mTick);
            if (is === 'init') {
                if ( hsOut.rq > fedTick) {
                    clg('pipeOUT> got result', hsOut.payload);
                    return 'fini';
                }
            } else {
                ast('tester sees is %s', is);
            }
        })
    ;

    s1.feeder = hsIn;
    s2.out = hsOut;

    for (let t=0; piperOut.state != 'fini' && t < 7; ++t) {
        clg('DRIVER TICK', ++mTick);
        piperIn.tick()
        s1.tick();
        s2.tick();
        piperOut.tick();
    }
    //ast( p.out.ak > 0);
    //ast( p.out.ak === p.out.rq);
}

class StageLight extends Model {
    constructor( owner, islots={} ) {
        super( null, islots.name || "anonStage",
            Object.assign(
                {
                    dIn: cI( null),
                }, islots), false);

        ast(this.feeder && this.out, "feeder or out missing", islots.name);

        this.fsmIn = new FSM( 'stagein', this, stageLightInHandler );

        this.relayOut = 0;

        this.fsmOut = new FSM( 'stageout', this, stageLightOutHandler );

        withIntegrity(qAwaken, this, x => this.awaken());
    }
    tick () {
        this.fsmIn.tick();
        this.fsmOut.tick();
    }
}

function stageLightInHandler( stage, is) {
    ast( stage.feeder);
    if (is === 'init') {
        if ( stage.feeder.reqd()) {
            // todo here and elsewhere allow falsey data thru pipeline
            ast( stage.feeder.payload !== null, 'stage req sees no payload', stage.name);
            stage.dIn = stage.feeder.payload;
            // clg('stage-in> fed!', stage.name, stage.dIn);
            stage.feeder.ack();
            return 'process';
        }
    } else if (is === 'process') {
        if ( stage.out.unackd()) {
            clg('stagein> waiting for outAck', stage.name);
        } else {
            stage.out.payload = stage.process(stage.dIn);
            clg('stage-in> computed!', stage.name, stage.out.payload);
            return 'relay';
        }
    } else if (is === 'relay') {
        stage.out.req();
        return 'init';
    }
}

function stageLightOutHandler( stage, is) {
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


function testStageLight () {
    cellsReset();
    mTick=0;

    let s1 = new StageLight( null, {
        name: "s-1"
        , process: d => d + 1})

        , s2 = new StageLight( null, {
        name: "s-2"
        , process: d => d*d})
        , hs = new HandShake( null, {name: "h1-h2"});

    s1.out = s2.feeder = hs;

    let fedTick = null
        , hsIn = new HandShake( null, {name: "drv-s1"})
        , hsOut = new HandShake( null, {name: "s2-drv"})
        , piperIn = new FSM( 'piper', null, function(ctx, is) {
            //clg('piper FSM state/mtick at entry', is, mTick);
            if ( is === 'init') {
                hsIn.payload = 42;
                clg('pipeIN> feeding stage-1', hsIn.payload);
                hsIn.req();
                return 'getack';
            } else if (is === 'getack') {
                if (hsIn.ak = hsIn.rq) {
                    clg('pipeIN> got stage-1 ack');
                    fedTick = mTick;
                    return 'init';
                }
            }
        })
        , piperOut = new FSM( 'piper', null, function(ctx, is) {
            //clg('piper FSM state/mtick at entry', is, mTick);
            if (is === 'init') {
                if ( hsOut.rq > fedTick) {
                    clg('pipeOUT> got result', hsOut.payload);
                    return 'fini';
                }
            } else {
                ast('tester sees is %s', is);
            }
        })
    ;

    s1.feeder = hsIn;
    s2.out = hsOut;

    let driver = function (tick) {
        clg('DRIVER TICK', mTick = tick);
        piperIn.tick()
        s1.tick();
        s2.tick();
        piperOut.tick();
        if ( piperOut.state != 'fini') {
            clg('not fini', mTick);
            setTimeout( driver, 2000, tick+1)
        }

    };
    driver(1);

    clg('fini?', piperOut.state);

}

// testStageLight();