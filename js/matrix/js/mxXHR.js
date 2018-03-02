goog.require('goog.net.XhrIo');

class mxXHR extends Model {
    constructor( uri ) {
        super( null, "mxXhr",
            {
                uri: cI( uri),
                hunh: cI('hunh'),
                xhroo: cI( null, {observer: (slot, me, newv) => clg('bambam', newv, newv===null)}) // returned by XhrIO.send
            });
    }

    send() {
        let mxx = this;

        goog.net.XhrIo.send( mxx.uri, function(e) {
            let xhr = e.target;

            if ( xhr.isSuccess()) {
                var obj = xhr.getResponseJson();
            }
            withChg("xhrResult",
                function() {
                    mxx.xhroo = xhr;
                    // clg('xhr post bam', mxx.xhroo.getStatus());
                });
        });
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

window['getXHR_JSON'] = getXHR_JSON;

/**
 * Basic logging to an element called "log".
 *
 * @param {string} msg Message to display on page
 */
function log(msg) {
    document.getElementById('log').appendChild(document.createTextNode(msg));
    document.getElementById('log').appendChild(document.createElement('br'));
}
