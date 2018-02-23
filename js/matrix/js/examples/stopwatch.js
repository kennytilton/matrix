function stopWatch () {
    return tag2html(div (h1("On your mark. Get set..."), clock()));
}

window['stopWatch'] = stopWatch;

function clock () {
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
        })})
}