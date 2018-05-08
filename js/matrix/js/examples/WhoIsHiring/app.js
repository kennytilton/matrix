goog.require('Matrix.Cells');
goog.require('Matrix.Model');
goog.require('Matrix.mxWeb');
goog.require('Matrix.mxXHR');

const SLOT_CT = 5;

const hiringApp = new TagSession(null, 'HiringSession'
    , {
        jobs: cI([])
    });


// --- main ---------------------------------------

function WhoIsHiring() {
    // return h1("testin");
    return div(
        h1("Hacker News Who's Hiring?")
        , jobSocket()
        // , remoteBar()
        , mkJobSelects()
        , mkTitleRgx()
        , mkBodyRgx()
        , sortBar()

        , h2({content: cF(c => "Jobs found: " + c.md.fmUp("job-list").kids.length)})
        , ul({}
            , {
                name: "job-list"
                , kidValues: cF(c => jobListFilter(c.md, hiringApp.jobs) || [])
                , kidKey: j => j.hnId
                , kidFactory: jobListItem
            }
            , c => c.kidValuesKids()))
}

window['WhoIsHiring'] = WhoIsHiring;

// --- jobListItem ---------------------------------------------------------

function jobListItem(c, j) {
    return li(
        div(
            // p({content: j.hnId + ' > ' + j.user})
            div({
                    style: {
                        display: "flex"
                        , "align-items": "center"
                    }
                }
                , tag("b", {style: "margin-right:12px"}, {}, j.company), jobStars(j))
            , h4(j.title.map( h=>h.textContent).join(" | "))
            , j.body.map( bd=> p({content: bd.innerHTML}))
        ))
}

// --- loading job data -----------------------------------------

function jobSocket() {
    return iframe({
            src: "resource/hiring-201805-06e.htm"
            , style: "display: none; width:1000px; height:100px"
            , onload: md => {
                if (md.dom.contentDocument) { // FF
                    b = md.dom.contentDocument.getElementsByTagName('body')[0];
                    hiringApp.jobs = jobsCollect(b);
                } else {
                    alert('Only FireFox is supported.');
                }
            }
        }
        , {
            name: "hnews"
            , inner: cI("not yet")
        })
}

// --- filtering ------------------------------------------------

function jobListFilter(mx, jobs) {
    let remoteok = mx.fmUp("REMOTEok").onOff
        , visaok = mx.fmUp("VISAok").onOff
        , internok = mx.fmUp("INTERNok").onOff
        , sortBy = mx.fmUp("sortby").selection
        , titleRgx = mx.fmUp("titlergx").rgxTree
        , bodyRgx = mx.fmUp("bodyrgx").rgxTree

    clg('remoteok tree', remoteok)

    return jobs.filter(j => !remoteok || j.remote)
        .filter(j => !visaok || j.visa)
        .filter(j => !internok || j.intern)
        .filter(j => !titleRgx || rgxTreeMatch( j.titlesearch, titleRgx))
        .filter(j => !bodyRgx || rgxTreeMatch( j.bodysearch, bodyRgx))
        .sort((j, k) => {
            let keyFn = sortBy.keyFn
                , rawComp = (keyFn(j) < keyFn(k) ? -1 : 1);
            return sortBy.order * rawComp
        });

}

function rgxTreeMatch( s, ors) {
    return ors.some( ands => ands.every( andx => s.match( andx)))
}

// ------ the view --------------------------------------

const MAX_STARS = 5;

function jobStars(j) {
    let stars = []
        , ujob = UJob.dict[j.hnId]
        , rating = ujob.stars;

    clg('jobstars', j.hnId, ujob, rating)

    return div(c => {
        for (let n = 0; n < MAX_STARS; ++n)
            stars.push(i({
                    class: "material-icons"
                    , style: cF(c => {
                        return "cursor:pointer; color:" + ( rating >= c.md.starN ? "#0f0" : "#eee")
                    })
                    , onclick: mx => {
                        //clg('setting', j.hnId, mx.starN);
                        ujob.stars = (ujob.stars === mx.starN ? 0 : mx.starN);
                    }
                }
                , {starN: n + 1}
                , "grade"))
        return stars
    })
}
