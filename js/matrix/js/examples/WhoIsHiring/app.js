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
        h1("Hacker News &quot;Who Is Hiring?&quot; Browser")
        , p( i("All jobs scraped from the original <a href='https://news.ycombinator.com/item?id=16967543'>May 2018 listing</a>. " +
            "All filters are ANDed. RFEs welcome and can be raised " +
            "<a href='https://github.com/kennytilton/matrix/issues'>here</a>."))
        , jobListingLoader()
        , mkJobSelects()
        , mkTitleRgx()
        , mkBodyRgx()
        , sortBar()

        , h2({content: cF(c => "Jobs found: " + c.md.fmUp("job-list").selectedJobs.length)})
        , progress({
            id: "progress"
            , max: cI(2000)
            , hidden: cI( null)
            , value: cI(0)
        }, {name: "progress"})

        , ul({}
            , {
                name: "job-list"
                , selectedJobs: cF(c => jobListFilter(c.md, hiringApp.jobs) || [])
                , kidValues: cF(c => jobListSort(c.md, c.md.selectedJobs) || [])
                , kidKey: j => j.hnId
                , kidFactory: jobListItem
            }
            , c => c.kidValuesKids()))
}

window['WhoIsHiring'] = WhoIsHiring;

// --- jobListItem ---------------------------------------------------------

function jobListItem(c, j) {
    return li({style: cF(c => c.md.par.selectedJobs.indexOf(j) === -1 ? "display:none" : "display:block")}
        , h3(j.title.map(h => h.textContent).join(" | "))
        , userAnnotations(j)
        , j.body.map(bd => p(bd.textContent))
        //, j.body.map(bd => p({content: bd.innerHTML}))
    )
}

