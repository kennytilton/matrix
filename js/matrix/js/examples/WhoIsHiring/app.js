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

var tooManyJobsWarned = false;

function WhoIsHiring() {
    return div( {
            style: "margin:0px;padding:36px"
        },
        div( {style: hzFlexWrap}
            , span({style: "padding:4px;font-size:2em; margin-bottom:12px;background:orange"}
                , "Ask HN: Who Is Hiring?")
            , appHelpOption())
        , appHelp()
        , pickAMonth()
        , jobListingLoader()
        , mkJobSelects()
        , mkTitleRgx()
        , mkFullRgx()
        , sortBar()
        , jobCount()
        , progress({
            max: cI(0)
            , hidden: cI( null)
            , value: cI(0)
        }, {name: "progress"})

        , jobList()
    )
}

window['WhoIsHiring'] = WhoIsHiring;

function resultMax() {
    return div( {style: hzFlexWrap}
        , span("Limit")
        , input({
                value: cF( c=> c.md.results)
                , style:"max-width:24px;margin-left:6px;margin-right:6px"
                , onchange: (mx,e) => {
                    clg('macchag', e.target.value)
                    mx.results = parseInt( e.target.value)
                }}
            , {name: "resultmax"
                , results: cI( 42)}))
}

function jobCount() {
    return div({style: "display:flex;max-height:16px;align-items:center"}
        , resultMax()

        , span({ content: cF(c => {
            let pgr = c.md.fmUp("progress")
            return pgr.hidden ? "Jobs found: " + c.md.fmUp("job-list").selectedJobs.length
                : "Comments parsed: "+ 20 * c.md.fmUp("progress").value})})
        , button({
                style: cF(c=> {
                    let pgr = c.md.fmUp("progress")
                    return "max-height:16px; margin-left:24px;display:"+ (pgr.hidden? "block":"none")
                })
                , onclick: mx => {
                    let all = document.getElementsByClassName('listing-toggle');
                    Array.prototype.map.call(all, tog => tog.onOff = !mx.expanded)
                    mx.expanded = !mx.expanded
                }

                , content: cF( c=> c.md.expanded? "Collapse all":"Expand all")
            }
            , { name: "expander", expanded: cI(true)}))
}

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

function jobList () {
    return ul({style: "list-style-type: none; background-color:#eee; padding:0"}
        , {
            name: "job-list"
            , selectedJobs: cF(c => jobListFilter(c.md, hiringApp.jobs) || [])
            , kidValues: cF(c => {
                let jsort = jobListSort(c.md, c.md.selectedJobs) || []
                    , mxlim = c.md.fmUp("resultmax");
                return jsort.slice(0,mxlim.results)
            })
            , kidKey: li => li.job
            , kidFactory: jobListItem
        }
        , c => c.kidValuesKids())
}

const appHelpEntry = [
    "All filters are ANDed."
    , "RFEs welcome and can be raised " +
    "<a href='https://github.com/kennytilton/matrix/issues'>here</a>. "
    , "GitHub source can be " +
    "<a href='https://github.com/kennytilton/kennytilton.github.io/tree/master/whoishiring'>" +
    "found here</a>."
]

function appHelp () {
    return ul({
            class: cF( c=> slideInRule(c, c.md.fmUp("appHelpOption").onOff))
            , style: cF( c=> "display:" + (c.md.fmUp("appHelpOption").onOff? "block":"none"))
        }
        , appHelpEntry.map( e=> li(e)))
}

// --- jobListItem ---------------------------------------------------------

function jobListItem(c, j) {

    return li({
            style: cF(c=> {
                let kn = c.md.fmUp("job-list").kidValues.indexOf(j)
                return "padding:4px;background-color:" + (kn % 2? "#ffd":"#eee")
            })
            , onclick: mx=> {
                let mol = mx.fmDown("showListing")
                mol.onOff = !mol.onOff
            }}
        , { name: "job-listing", job: j}
        , div( { style: "cursor:pointer;display:flex"}
            , moreOrLess( )
            , span({onclick: mx=> {
                let mol = mx.fmUp("showListing")
                mol.onOff = !mol.onOff
            }}, j.title.map(h => h.textContent).join(" | ")))
        , div( {
                class: cF( c=> {
                    let show = c.md.fmUp('showListing').onOff;
                    if (c.pv === kUnbound) {
                        return show ? "slideIn" : ""
                    } else {
                        return show ? "slideIn" : "slideOut"
                    }
                })
                , style: cF( c=> "margin:6px;background:#fff; display:"+ ( c.md.fmUp('showListing').onOff? "block":"none"))

            }
            , userAnnotations(j)
            , div( { style: "margin:6px"}
                , c=> c.md.fmUp("showListing") ?
                    j.body.map( (n,x) => {
                    if (n.nodeType === 1) {
                        return "<p>" + n.innerHTML + "</p>"

                    } else if (n.nodeType === 3) {
                        return "<p>" + n.textContent + "</p>"

                    } else {
                        clg('UNEXPECTED Node type', n.nodeType, n.nodeName, n.textContent)
                    }
                }) : null)))
}

function moreOrLess () {
    return i({
        class: "listing-toggle material-icons"
        , style: "cursor:pointer;color:#888"
        , onclick: mx => {
            mx.onOff = !mx.onOff
        }
        , title: "Show/hide full listing"
        , content: cF( c=> c.md.onOff? "arrow_drop_down":"arrow_right")
    }, {
        name: "showListing"
        , onOff: cFI( c=> {
            let expander = c.md.fmUp("expander")
            return expander.expanded
        })
    })
}

