goog.require('Matrix.Cells')
goog.require('Matrix.Model')
goog.require('Matrix.mxWeb')
goog.require('Matrix.mxXHR')
goog.require('Hiring.usernote')
goog.require('Hiring.filtering')
goog.require('Hiring.jobListing')

const SLOT_CT = 5;

const hiringApp = new TagSession(null, 'HiringSession'
    , {
        jobs: cI([])
    });


// --- main ---------------------------------------

function WhoIsHiring() {
    return div( { id: "whoshiring"
                , style: "margin:0px;padding:36px"},
        h1("Ask HN: Who Is Hiring? (May 2018)")
        , p( i("All jobs scraped from the original <a href='https://news.ycombinator.com/item?id=16967543'>May 2018 listing</a>. " +
            "All filters are ANDed. RFEs welcome and can be raised " +
            "<a href='https://github.com/kennytilton/matrix/issues'>here</a>. " +
            "Stable GitHub source can be " +
            "<a href='https://github.com/kennytilton/kennytilton.github.io/tree/master/whoishiring'>" +
            "found here</a>."))
        , jobListingLoader()
        , mkJobSelects()
        , mkTitleRgx()
        , mkFullRgx()
        , p( i( "Separate above regex terms with || or && (higher priority) to combine expressions." +
            " Press 'Enter' or tab off to activate, including after clearing." +
            " Supply RegExp options after a comma. e.g. <b>taipei,i</b> for case-insensitive."))
        , sortBar()

        , h2({content: cF(c => {
            let pgr = c.md.fmUp("progress")
            return pgr.hidden ? "Jobs found: " + c.md.fmUp("job-list").selectedJobs.length
                : "Comments parsed: "+ 20 * c.md.fmUp("progress").value
        })})

        , progress({
            id: "progress"
            , max: cI(0)
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
    clg('building list item')
    return li({style: ""} //cF(c => c.md.par.selectedJobs.indexOf(j) === -1 ? "display:none" : "display:block")}
        , h3( j.title.map(h => h.textContent).join(" | "))
        , userAnnotations(j)
        , j.body.map( n => {
            if (n.nodeType === 1) {
                return "<p>" + n.innerHTML + "</p>"

            } else if (n.nodeType === 3) {
                return "<p>" + n.textContent + "</p>"

            } else {
                clg('UNEXPECTED Node type', n.nodeType, n.nodeName, n.textContent)
            }
        })
    )
}

