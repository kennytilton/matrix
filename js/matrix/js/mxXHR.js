goog.require('goog.net.XhrIo');

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

    send( delay) {
        let mxx = this
            , go = ()=> goog.net.XhrIo.send( mxx.uri, function(e) {
                let xhr = e.target;

                /* if ( xhr.isSuccess()) {
                    var obj = xhr.getResponseJson();
                }*/
                withChg("xhrResult",
                    ()=> mxx.xhr = xhr);

            });

        if (delay)
            setTimeout( go, delay);
        else
            go();
        return mxx;
    }
}

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
    let mxx = new mxXHR("https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:adderall&limit=3"),
        bam = cF + ({slot: "bam", observer: (slot, me, newv) => clg("bam", newv)},
            c => clg('bam rule sees', mxx.xhr));
    mxx.send();
}

// getabm();


