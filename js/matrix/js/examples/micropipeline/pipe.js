class Pipe extends Model {
    constructor( owner, islots={} ) {
        super( null, islots.name || "anonPipe", islots, false);

        ast( this.processes.length > 0);  // see if none Just Works

        let lastOut = null
            , stageN = 1;

        this.stages = this.processes.map( proc => {
            let f = lastOut || new Bundle( null, { name: "ex->" + stageN })
                , o = new Bundle( null, {name: "hs-"+stageN+"->"+(stageN+1)})
                , s = new Stage( null, {
                        name: "s-"+ stageN
                        , feeder: f
                        , process: proc
                        , out: o});
            lastOut = o;
            ++stageN;
            return s;
        });
        this.stgIn = this.stages[0];
        ast(this.stgIn, "no stgIn!!!!!");
        this.stgOut = this.stages[this.stages.length-1];

        withIntegrity(qAwaken, this, x => this.awaken());
    }
    masterClear () {
        this.stages.map( stg=> stg.masterClear())
    }
    tick () {
        // for (let sn = this.stages.length-1; sn >= 0; --sn) {
        //     this.stages[sn].tick();
        // }

        this.stages.map( s=> s.tick());
    }

    feed( data) {
        let fdr = this.stgIn.feeder;
        if ( fdr.unackd()) {
            clg("DRIVER> Backpressure!", data);
            return undefined;
        } else {
            clg('DRIVER> feeding pipe', data);
            fdr.data = data;
            fdr.req();
            return data;
        }
    }
    take() {
        out = this.stgOut;
        if (out.unackd()) {
            let result = out.data;
            clg('DRIVER> RESULT!!!', result);
            out.ack();
            return result;
        } else {
            return undefined;
        }
    }
}

