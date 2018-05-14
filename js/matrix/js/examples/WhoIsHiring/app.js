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
        div( {style: hzFlexWrap}
            , span({style: "font-size:2em; margin-bottom:12px"}
                ,"Ask HN: Who Is Hiring? (May 2018)")
            , appHelpOption())
        , appHelp()
        , jobListingLoader()
        , mkJobSelects()
        , mkTitleRgx()
        , mkFullRgx()
        , sortBar()
        //, mkUserDefaults()

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

        , ul({style: "list-style-type: none; background-color:#eee; padding:0"}
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

function appHelpOption () {
    return i({
            class: "material-icons", style: "cursor:pointer; margin-left:9px"
            , onclick: mx => mx.onOff = !mx.onOff
            , title: "Show/hide app help"
            , content: cF( c=> c.md.onOff? "help":"help_outline")
        }
        , { name: "appHelpOption"
            , onOff: cI( false)})
}

const appHelpEntry = [
    "All jobs scraped from the original <a href='https://news.ycombinator.com/item?id=16967543'>May 2018 listing</a>. "
    , "All filters are ANDed."
    , "RFEs welcome and can be raised " +
    "<a href='https://github.com/kennytilton/matrix/issues'>here</a>. "
    , "GitHub source can be " +
    "<a href='https://github.com/kennytilton/kennytilton.github.io/tree/master/whoishiring'>" +
    "found here</a>."
]

function appHelp () {
    return ul({style: cF( c=> "display:" + (c.md.fmUp("appHelpOption").onOff? "block":"none"))}
        , appHelpEntry.map( e=> li(e)))
}

// --- jobListItem ---------------------------------------------------------

function jobListItem(c, j) {
    return li({style: "margin-bottom:9px; background-color:#fff"} //cF(c => c.md.par.selectedJobs.indexOf(j) === -1 ? "display:none" : "display:block")}
        , b( j.title.map(h => h.textContent).join(" | "))
        , userAnnotations(j)
        , div( {style: cF( c=> "display:"+ ( c.md.fmUp('showListing').onOff? "block":"none"))}
            , j.body.map( n => {
                if (n.nodeType === 1) {
                    return "<p>" + n.innerHTML + "</p>"

                } else if (n.nodeType === 3) {
                    return "<p>" + n.textContent + "</p>"

                } else {
                    clg('UNEXPECTED Node type', n.nodeType, n.nodeName, n.textContent)
                }
            }))
    )
}

