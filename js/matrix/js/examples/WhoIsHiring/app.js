goog.require('Matrix.Cells');
goog.require('Matrix.Model');
goog.require('Matrix.mxWeb');
goog.require('Matrix.mxXHR');

const SLOT_CT = 5;

var jct = 0;

const hiringApp = new TagSession(null, 'HiringSession'
    , {
        jobs: cI([])
        , jobsFiltered: cF(c => c.md.jobs || [])
    });

// '.c5a,.cae,.c00,.c9c,.cdd,.c73,.c88'


// ------ the view --------------------------------------

function propComp(p1, p2) {
    return (p1 < p2 ? -1 : 1)
}

function jobListFilter(mx, jobs) {
    let remoteness = mx.fmUp("remoteness").selection
        , filtered = jobs.filter(j => {
        return remoteness === 'any'
            || (remoteness === 'remote' && j.remote)
            || (remoteness === 'onsite' && j.onsite)
    })
        , sortBy = mx.fmUp("sortby").selection
        , sorted = filtered.sort((jj, kk) => {
        let j = Jobs.dict[jj.hnId], k = Jobs.dict[kk.hnId];
        clg('sorting', sortBy.prop, sortBy.order, jj.hnId, j.hnId, kk.hnId, k.hnId)
        let prop = sortBy.prop
            , order = sortBy.order
            , comp = order * propComp(jj[prop] || j[prop], kk[prop] || k[prop]);

        clg('comp', prop, order, comp, j[prop], k[prop])

        return comp
    });
    return sorted;
}

function jobListItem(c, j) {
    clg('jobListItem', j.hnId);
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
            , p(j.hdrest.join(" | "))

            //, div({content: j.comment.innerHTML})
        ))
}

const MAX_STARS = 5;

function jobStars(j) {
    return div(c => {
        let stars = []
            , ujob = Jobs.dict[j.hnId]
            , rating = ujob.stars;
        clg('star', j.hnId, 'rating', rating)

        for (let n = 0; n < MAX_STARS; ++n)
            stars.push(i({
                    class: "material-icons"
                    , style: cF(c => {
                        return "cursor:pointer; color:" + ( rating >= c.md.starN ? "#0f0" : "#eee")
                    })
                    , onclick: mx => {
                        clg('setting', j.hnId, mx.starN);
                        ujob.stars = (ujob.stars === mx.starN ? 0 : mx.starN);
                    }
                }
                , {starN: n+1}
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

function remoteBar() {
    return ul({}, {
            name: "remoteness"
            , selection: cI('any')
        }
        , [["Any", 'any'], ["On-site", 'onsite'], ["Remote", 'remote']]
            .map(([label, value]) => button({
                style: cF(c => c.md.selected ? "background:cyan" : "")
                , onclick: mx => {
                    clg('setting selection', mx.value, mx.selection, mx.tag);
                    mx.fmUp("remoteness").selection = mx.value;
                }
                , content: label
            }, {
                value: value
                , selected: cF(c => c.md.fmUp("remoteness").selection === value)
            })))
}

function sortBar() {
    return ul({}, {
            name: "sortby"
            , selection: cI({prop: 'stars', order: -1})
        }
        , [["Message Id", 'hnId'], ["Stars", 'stars'], ["Company", 'company'], ["Age", 'age']]
            .map(([label, value]) => button({
                style: cF(c => c.md.selected ? "background:cyan" : "")
                , onclick: mx => {
                    clg('setting selection', mx.value, mx.selection, mx.tag);
                    mx.fmUp("sortby").selection = {prop: mx.value, order: 1};
                }
                , content: label
            }, {
                value: value
                , selected: cF(c => c.md.fmUp("sortby").selection.prop === value)
            })))
}

window['WhoIsHiring'] = WhoIsHiring;


