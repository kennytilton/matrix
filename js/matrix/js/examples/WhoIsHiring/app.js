goog.require('Matrix.Cells');
goog.require('Matrix.Model');
goog.require('Matrix.mxWeb');
goog.require('Matrix.mxXHR');

const SLOT_CT = 5;

const hiringApp = new TagSession(null, 'HiringSession'
    , {
        jobs: cI([])
    });

// ------ the view --------------------------------------

function jobListFilter(mx, jobs) {
    let remoteness = mx.fmUp("remoteness").selection
        , visaok = mx.fmUp("visaok").onOff
        , internok = mx.fmUp("internok").onOff
        , sortBy = mx.fmUp("sortby").selection
        , titleRgx = mx.fmUp("titlergx").rgx;

    return jobs.filter(j => remoteness === 'any'
                            || (remoteness === 'remote' && j.remote)
                            || (remoteness === 'onsite' && j.onsite))
        .filter(j => !visaok || j.visa)
        .filter(j => !internok || j.intern)
        .filter(j => !titleRgx || rgxTreeMatch( j.title, titleRgx))
        .sort((j, k) => {
            let keyFn = sortBy.keyFn
                , rawComp = (keyFn(j) < keyFn(k) ? -1 : 1);
            return sortBy.order * rawComp
    });

}

function rgxTreeMatch( s, ors) {
    return ors.some( orx => rgxAndMatch(s, orx))
}

function rgxAndMatch( s, ands) {
    return ands.every( andx => s.match( andx))
}

// function rgxAndMatch( s, ands) {
//     let res = ands.every( andx => {
//         let m = s.match( andx);
//         //clg('matching', m? 'YEP':'NOPE', andx, s)
//         return m
//     });
//     if (res) {
//         clg('AND Bingo!!!!!!!!!!!!!', res, s)
//     }
//     return res;
// }

function jobListItem(c, j) {
    //clg('joblistitem hdr0', j.hdrest[0])
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
            , p({content: j.hdrest.join(" | ")})

            //, div({content: j.body})
        ))
}

const MAX_STARS = 5;

function jobStars(j) {
    return div(c => {
        let stars = []
            , ujob = UJob.dict[j.hnId]
            , rating = ujob.stars;

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

// --- main ---------------------------------------

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

function WhoIsHiring() {
    // return h1("testin");
    return div(
        h1("Hacker News Who's Hiring?")
        , jobSocket()
        , remoteBar()
        , visaIntern()
        , mkTitleRgx()
        //, mkBodyRgx()
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


