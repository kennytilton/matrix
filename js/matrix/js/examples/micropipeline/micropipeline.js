var mTick = 0;

function tickBump (e) {
    clg('bump', e.key, mx.tag);

    // let title = e.target.value.trim();
    //
    // e.target.value = null;
}
// document.onkeydown = function(evt) {
//     evt = evt || window.event;
//     clg('keydown', evt.keyCode);
//     let app = dom2mx( document.getElementById('app'));
//     clg('app', app, app.tag, app.tick);
//     app.tick = ++mTick;
//
// };

function MicroPipe () {
    return [
        div({ id: 'app'},
            { tick: cI( mTick)},
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

pipeTestIII();

