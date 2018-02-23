// -------------------------------------------------------------------------------
// --- js/Date in the Matrix -----------------------------------------------------
//
//  Vast room for elaboration on this component. RFEs welcome.
//
//
class mxTimer extends Model {
    constructor( owner, islots) {
        ast( islots.func, "mxTimer requires func parameter");
        ast( islots.delay, "mxTimer requires delay parameter");

        super( owner, islots.name || "anonTimer",
            Object.assign(
                {
                    onp: true,
                    intervalID: cF( c=> c.md.onp ? setInterval( c.md.func, c.md.delay, c) : null,
                        {observer: function( n, md, newv, priorv, c) {
                            //console.log('intervalID Obs :'+newv );
                            if ( priorv !== kUnbound) {
                                clg('nailing old interval', priorv, md.delay);
                                clearInterval( priorv);
                            }
        }})
                }, islots));

        withIntegrity(qAwaken, this, x => this.awaken());
    }

    dbg() { return `mxTimer ${this.name}`}

    static cname() { return "mxTimer"}
}

// obs(this.name, this.md, this.pv, vPrior, this);

function mkTimer( owner, delay, func, onp = true, extras) {
    return new mxTimer( owner,
        Object.assign( { delay: cI( delay), func: func, onp: onp}, extras));
}

var t1 = mkTimer( null, 2000, c=> clg('slave 1', c.sid, Date.now()), cI( true));

var t2 = mkTimer( null, 2000, function(c) {
    //clg('master boom', c.md.ctr);
    t1.onp = ( t1.delay > 0);
    t1.delay = t1.delay - 100;
    c.md.ctr = (c.md.ctr===kUnbound || isNaN(c.md.ctr))? 0 : c.md.ctr  + 1;
}, {ctr: cI(0)});