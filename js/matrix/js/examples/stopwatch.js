function stopWatch () {
    return tag2html(div (h1("On your mark. Get set..."), clock2()));
}

window['stopWatch'] = stopWatch;

function clock1 () {
    return h2({class: "example-clock"},
        {tick: cI( false, {ephemeralp: true}),
        ticker: cF( c=> setInterval( () => c.md.tick = true, 200)),
        content: cF( function (c) {
            if (c.md.tick) {
                let d = new Date;
                return d.toTimeString() + " and " +
                    d.getUTCMilliseconds()+"ms";
            } else {
                return "*checks watch*";
            }
        })});
}

function clock2 () {
    return h2({class: "example-clock"},
        {
            ticker: mkTimer( null, 1000, c=> clg('slave 1', c.sid, Date.now()));
            content: cF( function (c) {
                if (c.md.tick) {
                    let d = new Date;
                    return d.toTimeString() + " and " +
                        d.getUTCMilliseconds()+"ms";
                } else {
                    return "*checks watch*";
                }
            })});
}