class Stage extends Model {
    constructor(owner, islots = {}) {
        super(null, islots.name || "anonStage",
            Object.assign(
                {
                    data: cI(null),
                }, islots), false);

        ast(this.feeder && this.out, "feeder or out missing", islots.name);

        this.fsmIn = new FSM('stagein', this, stageInHandler);

        this.fsmOut = new FSM('stageout', this, stageOutHandler);

        withIntegrity(qAwaken, this, x => this.awaken());
    }

    tick() {
        this.fsmOut.tick();
        this.fsmIn.tick();
    }

    masterClear() {
        this.data = null;
        this.feeder.masterClear();
        this.out.masterClear();
        this.fsmIn = new FSM('stagein', this, stageInHandler);
        this.fsmOut = new FSM('stageout', this, stageOutHandler);
    }
}

function stageInHandler(stage, is) {
    if (is === 'init') {
        if (stage.feeder.reqd()) {
            if (stage.feeder.rq === mTick) {
                // slow it down a tick
                return 'capture';
            }
            // capture immediately
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
        if (stage.out.unackd()) {
            //clg('stagein> waiting for outAck', stage.name);
        } else {
            stage.out.data = {
                t: stage.data.t
                , od: stage.data.od
                , d: stage.process(stage.data.d)
            };
            return 'relay';
        }
    } else if (is === 'relay') {
        stage.out.req();
        return 'init';
    }
}

function stageOutHandler(stage, is) {
    if (is === 'init') {
        if (stage.out.unackd()) {
            return 'getack';
        }
    } else if (is === 'getack') {
        if (stage.out.ackd()) {
            return 'init';
        }
    }
}


function stageView(stage, stageN) {
    return div({class: "pure-g", style: "background:" + ["#bbb", "#ddd"][stageN % 2]}, //{style: "display:flex;flex-direction:column;margin:8px"},
        ( stageN === 1 ? bundleView("Feeder", stage.feeder, stageN) : null)
        , registerView(stage)
        , div({class: "pure-u-5-5 pure-g", style: "background:#ffd;" + flexrow}, // "logicbox"}
            b({class: "pure-u-1-5", style: "margin:6px"}
                , "logic")
            , div({
                    class: "pure-u-3-5",
                    style: "display:flex; align-items:center"
                },
                code(stage.process.toString()
                    .replace("function ", "")
                    .replace("return ", ""))))
        , bundleView("Out", stage.out, stageN + 1));
}

const flexrow = "display:flex;flex-direction:row;align-items:center;";

function registerView(stage) {
    return div({class: "pure-u-5-5 pure-g", style: "margin:3px"},
        div({class: "pure-u-2-5"})
        , div({class: "pure-u-2-5 pure-g"}
            , b({class: "pure-u-1-5", style: "margin-top:0.3em"}, "REG")
            , div({class: "pure-u-2-5"},
                span({
                    class: " data"
                    , style: cF(c => dataStyle(stage.data))
                    , content:
                        stage.data ? stage.data.d + '' : "..."
                }))))
}

function stageNDisplay(n) {
    //clg("stagendisplay", n);
    return inParens(n === 1 ? "in" :
        (n === 1 + gProcesses.length ? "out" : n));
}

