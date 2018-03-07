goog.require('goog.net.XhrIo');
goog.provide('zoom.hunh');

var zoom={};zoom.hunh={};


class mxXHR extends Model {
    constructor( uri , options) {
        super( null, "mxXhr",
            {
                uri: cI( uri),
                xhr: cI( null) // returned by XhrIO.send
            });

        if ( options.send ){
            this.send( options.delay)
        }
    }

    // send( delay) {
    //     let mxx = this
    //         , xhr = new XMLHttpRequest()
    //         , go = function () {
    //                 xhr.addEventListener("load", (e)=> mxx.xhr = e.target);
    //                 xhr.addEventListener("abort", (e)=> mxx.xhr = e.target);
    //                 xhr.addEventListener("error", (e)=> mxx.xhr = e.target);
    //                 xhr.open('GET', mxx.uri);
    //                 xhr.responseType = "json";
    //                 xhr.send();
    //             };
    //
    //     if (delay)
    //         setTimeout( go, delay);
    //     else
    //         go();
    //     return mxx;
    // }

    send( delay) {
        let mxx = this
            , go = ()=> goog.net.XhrIo.send( mxx.uri, function(e) {
                let xhr = e.target;

                /* if ( xhr.isSuccess()) {
                    var obj = xhr.getResponseJson();
                }*/
            mxx.xhr = xhr;
            // withChg("xhrResult", ()=> mxx.xhr = xhr);

            });

        if (delay)
            setTimeout( go, delay);
        else
            go();
        return mxx;
    }
}

window['mxXHR'] = mxXHR;

function getXHR_JSON( datau ) {
    clg('getXHR_JSON Sending request for ['+ datau + ']');
    goog.net.XhrIo.send( datau, function(e) {
        this.xhr = e.target;
        clg('getXHR_JSONxhr', xhr.getStatus(), xhr.isSuccess());
        if ( xhr.isSuccess()) {
            var obj = xhr.getResponseJson();
            clg('getXHR_JSONtotal AEs', obj.meta.results.total);
        } else {
            clg('getXHR_JSONxhr last error', xhr.getLastError());
        }
    });
}

//getXHR_JSON( "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:chevy&limit=3");

function testXHR() {
    let it = mkm( null, "testX", {
        lookup: cF( function (c) {
            let mxx = new mxXHR( "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:adderall&limit=3");
            return mxx;
        }),
        result: cF( function (c) {
            let look = c.md.lookup;
            clg("result sees lookup", look, look.hunh, look.xhr);
            return look.xhr;
        }),
        stuff: cF( function (c) {
            let xhr = c.md.result;
            if ( xhr) {
                if ( xhr.isSuccess() ) {
                    let obj = xhr.getResponseJson();
                    clg('total AEs!!!!!!', obj.meta.results.total);
                    return obj.meta.results.total+ "AEs found";
                } else {
                    clg('xhr last error', xhr.getLastError());
                    return "Error " + xhr.getLastError();
                }
            } else {
                clg('No result!!!');
            }
        })
    });
    clg('sending!!!!!!!!!!!!', it.lookup.result);

    it.lookup.send();
    console.log('test result '+it.lookup.result);
}

function getabm () {
    clg('getabm!!!!!!!!!!!');
    // let mxx = new mxXHR("https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:adderall&limit=3"),
    //     bam = cF+ ({slot: "bam", observer: (slot, me, newv) => clg("bam", newv)},
    //         c => clg('bam rule sees', mxx.xhr));
    // mxx.send();
}

// getabm();

function xhraw (uri) {
    xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => { clg('load', e.target.response);
                                        debugger;});
    xhr.addEventListener("abort", (e)=> clg('abort', xhr == e.target));
    xhr.addEventListener("error", (e)=> clg('error', xhr == e.target));
    xhr.open('GET', uri);
    xhr.responseType = "json";
    xhr.send();
}


//xhraw("https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:Yankees&limit=3");