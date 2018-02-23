// -------------------------------------------------------------------------------
// --- js/Date in the Matrix -----------------------------------------------------
//
//  Vast room for elaboration on this component. RFEs welcome.
//
//
class mxTimer extends Model {
    constructor( owner, islots) {
        ast( islots.delay, "mxTimer requires delay parameter");

        super( owner, islots.name || "anonTimer",
            Object.assign(
                {
                    onp: true,
                    time: cI( Date.now()),
                    func: cF( c=> ()=> c.md.time = Date.now()),
                    intervalID: cF( c=> c.md.onp ? setInterval( c.md.func, c.md.delay, c) : null,
                        {observer: function( n, md, newv, priorv, c) {
                            console.log('intervalID Obs :'+newv );
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
    let opts =  Object.assign( { delay: delay, onp: onp}, extras);

    if (func)
        opts.func = func;

    return new mxTimer( owner, opts);
}

/*
var t1 = mkTimer( null, 2000);

var tb = cF( c=> `The time is now ${t1.time}`,
            { observer: (c, m, nv) => clg(`tb sees ${nv}`)});

console.log('tb '+ tb.v);
*/

/*
var t2 = mkTimer( null, 2000, function(c) {
    //clg('master boom', c.md.ctr);
    t1.onp = ( t1.delay > 0);
    t1.delay = t1.delay - 100;
    c.md.ctr = (c.md.ctr===kUnbound || isNaN(c.md.ctr))? 0 : c.md.ctr  + 1;
}, {ctr: cI(0)});
*/

class mxTimeout extends Model {
    constructor( owner, islots) {
        ast( islots.func, "mxTimeout requires func parameter");
        clg('building timeout');
        super( owner, islots.name || "anonTimer",
            Object.assign(
                {
                    cancel: false,
                    intervalID: cF( c=> c.md.cancel ? null : setTimeout( c.md.func, c.md.delay || 0, c),
                        { observer: function( n, md, newv, priorv, c) {
                            //console.log('intervalID Obs :'+newv );
                            if ( priorv !== kUnbound) {
                                clg('nailing timeout', priorv, md.delay);
                                clearInterval( priorv);
                            }
                        }})
                }, islots));

        withIntegrity(qAwaken, this, x => this.awaken());
    }

    dbg() { return `mxTimeout ${this.name}`}

    static cname() { return "mxTimeout"}
}

function mkTimeout( owner, delay, func, onp = true, extras) {
    return new mxTimeout( owner,
        Object.assign( { delay: cI( delay), func: func, onp: onp}, extras));
}

// var to1 = mkTimeout( null, 2000, c=> clg('timeout 1', c.sid, Date.now()));

