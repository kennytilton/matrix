var dataTicks = [];

var goIntervalDelay = 256;
var goInterval = null;

document.onkeydown = function(e) {
    e = e || window.event;
    clg('dockeydown:',e.key+'-'+e.keyCode);
    let app = dom2mx( document.getElementById('app'))
        , data = parseInt( e.key);;
    ast(app, "dom no app");

    if (isNaN( data)) {
        if (e.key==='t') {
            let r = app.pipe.take();
            clg('take took', r === undefined ? 'UDF' : r)

        } if (e.key==='c') {
            app.results = [];
            app.pipe.masterClear();

        } else if (e.key==='ArrowRight') {
            feedPipeAuto(app, 'stop');
            app.tick = ++mTick;
            app.runTicks();

        } else if (e.key==='ArrowDown') {
            feedPipeAuto( app, 'start');

        } else if (e.key==='ArrowUp') {
            feedPipeAuto( app, 2);

            // } else if (e.key==='ArrowLeft') {
            //     feedPipeAuto(2);

        } else if (e.key==='.') {
            feedPipeAuto( app, 'stop');
        }
    } else {
        let feeder = app.pipe.stgIn.feeder;
        if (feeder.unreqd() || feeder.unackd()) {
            alert('Unable to pipe '+ data + ' due to backpressure.');
        } else {
            app.tick = ++mTick;
            dataTicks.push( app.tick);
            clg('dataticks', dataTicks);
            feeder.data = {t: app.tick, d: data, od: data};
        }
    }
};

function feedPipeAuto( app, how) {
    ast(app);
    if (how === 'start') {
        feedStop = false;
        if (goInterval) {
            clearInterval(goInterval);
            goIntervalDelay = goIntervalDelay/2;
            goInterval = setInterval( ()=> feedPipe(app), goIntervalDelay);
        } else {
            goInterval = setInterval( ()=> feedPipe(app), goIntervalDelay);
        }
    } else if (how === 'stop') {
        feedStop = true;
        if (goInterval) {
            clearInterval(goInterval);
            goInterval = null;
        }
    } else {
        if (goInterval) {
            clearInterval(goInterval);
        }
        goIntervalDelay = goIntervalDelay * how;
        goInterval = setInterval(() => feedPipe(app), goIntervalDelay);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function feedPipe (app) {
    ast(app,"no app");
    ast(app.pipe, "no pipe");
    ast(app.pipe.stgIn, "no stgin");
    let feeder = app.pipe.stgIn.feeder;
    app.tick = ++mTick;
    if (!(feeder.unreqd() || feeder.unackd())) {
        let d = getRandomInt(40);
        dataTicks.push( app.tick);
        feeder.data = {t: app.tick, d: d, od: d};
    }
    app.runTicks();
}

var feedStop = false;

function feedPipeAF (app, feeder) {
    app.tick = ++mTick;
    if (!(feeder.unreqd() || feeder.unackd())) {
        let d = getRandomInt(40);

        dataTicks.push( app.tick);
        feeder.data = {t: app.tick, d: d, od: d};
    }
    app.runTicks();
    if (!feedStop)
        window.requestAnimationFrame(()=> feedPipeAF(app, feeder));
}