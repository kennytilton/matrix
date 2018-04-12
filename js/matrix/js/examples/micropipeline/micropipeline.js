var mTick = 0;

function tickBump (e) {
    clg('bump', e.key, mx.tag);

    // let title = e.target.value.trim();
    //
    // e.target.value = null;
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    //clg('keydown', evt.key, typeof evt.key, evt.keyCode);
    let app = dom2mx( document.getElementById('app'));
    //clg('app ticks to ',  app.tick+1);
    app.tick = ++mTick;
    if (!isNaN( parseInt( evt.key))) {
        let fn = parseInt( evt.key);
        let f = app.pipe.feed( fn);
        if (f === fn) {
            clg('fed', fn);
        } else {
            clg('unfed BP', fn);
        }
    } else if (evt.key=='t') {
        let r = app.pipe.take();
        clg('take took', r===undefined? 'UDF':r)
    }
    app.pipe.tick();

};

function MicroPipe () {
    return [
        div({ id: 'app'},
            {
                tick: cI( mTick)
                , pipe: new Pipe( null, {
                    name: name
                    , processes: [plus1, squared, negated]})
            },
            h1({content: cF( c=> "Hello, MicroPipeline! "+ c.md.fmTag('div').tick )}))];

}

window['MicroPipe'] = MicroPipe;

function pipeTestIII ( ) {
    cellsReset();
    mTick = 0;
    let pipe = new Pipe( null, {
                        name: name
                        , processes: [plus1, squared, negated]});

    ++mTick;
    clg('sbok', pipe.feed(42));

    let f7 = true;

    for (let x = 0; ++x < 30; ) {
        if (f7) {
            let f = pipe.feed(7);

            if (f === undefined) {
                clg('tester sees backp!!!!!!!!!!!!!');
            } else {
                f7 = false;
                clg("tester second feed ok", f);
            }
        }
        ++mTick;
        pipe.tick();

        let r = pipe.take();
        if ( r !== undefined) {
            clg('bam', r);
        }
    }

}

// pipeTestIII();

