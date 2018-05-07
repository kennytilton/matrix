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
        , sortBy = mx.fmUp("sortby").selection;

    return jobs.filter(j => remoteness === 'any'
                            || (remoteness === 'remote' && j.remote)
                            || (remoteness === 'onsite' && j.onsite))
        .filter(j => !visaok || j.visa)
        .filter(j => !internok || j.intern)
        .sort((j, k) => {
            let keyFn = sortBy.keyFn;
            return sortBy.order * (keyFn(j) < keyFn(k) ? -1 : 1)});

}

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
                    clg('contdoc');
                    b = md.dom.contentDocument.getElementsByTagName('body')[0];
                    clg('body!!!!!!!!!!', b);
                    let jobs = jobsCollect(b);
                    clg(' got jobs', jobs.length)
                    hiringApp.jobs = jobs;
                } else if (md.dom.contentWindow) { // IE
                    clg('contwin');
                    //b = md.dom.contentWindow.document.getElementsByTagName('body')[0];
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
        , sortBar()

        , h2({content: cF(c => "Jobs found: " + c.md.fmUp("job-list").kids.length)})
        , ul({}
            , {
                name: "job-list"
                , jobsFiltered: cF(c => jobListFilter(c.md, hiringApp.jobs))
                , kidValues: cF(c => c.md.jobsFiltered || [])
                , kidKey: j => j.hnId
                , kidFactory: jobListItem
            }
            , c => c.kidValuesKids()))
}

window['WhoIsHiring'] = WhoIsHiring;


