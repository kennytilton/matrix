goog.require('Matrix.Cells')
goog.require('Matrix.Model')
goog.require('Matrix.mxWeb')
goog.require('Hiring.usernote')
goog.provide('Hiring.filtering')

// --- filtering and sorting ------------------------------------------------

function jobListFilter(mx, jobs) {

    let remoteok = mx.fmUp("REMOTE").onOff
        , visaok = mx.fmUp("VISA").onOff
        , internok = mx.fmUp("INTERN").onOff
        , starred = mx.fmUp("Starred").onOff
        , applied = mx.fmUp("Applied").onOff
        , noted = mx.fmUp("Noted").onOff
        , sortBy = mx.fmUp("sortby").selection
        , titleRgx = mx.fmUp("titlergx").rgxTree
        , listingRgx = mx.fmUp("listingrgx").rgxTree

    return jobs.filter(j => !remoteok || j.remote)
        .filter(j => !visaok || j.visa)
        .filter(j => !internok || j.intern)
        .filter(j => !applied || UJob.dict[j.hnId].applied)
        .filter(j => !starred || UJob.dict[j.hnId].stars > 0)
        .filter(j => !noted || UJob.dict[j.hnId].notes)

        .filter(j => !titleRgx || rgxTreeMatch(j.titlesearch, titleRgx))
        .filter(j => !listingRgx
            || rgxTreeMatch(j.titlesearch, listingRgx)
            || rgxTreeMatch(j.bodysearch, listingRgx))
};

function rgxTreeMatch(s, ors) {
    return ors.some(ands => ands.every(andx => s.match(andx)))
}

// --- filtering U/X ------------------------------------------------

const jSelects = [["REMOTE", "Does regex search of title for remote jobs"]
    , ["INTERN", "Does regex search of title for internships"]
    , ["VISA", "Does regex search of title for Visa sponsors"]
    , ["Starred", "Show only jobs you have rated with stars"]
    , ["Applied", "Show only jobs you have marked as applied to"]
    , ["Noted", "Show only jobs on which you have made a note"]]

function mkJobSelects() {
    return div({style: {display: "flex"}}
        , span({style: "min-width:80px"},
            "Selects:")
        , jSelects.map( info => div(
            input({
                id: info[0]+"ID"
                , type: "checkbox"
                , style: "margin-left:18px"
                , checked: cF(c => c.md.onOff)
                , title: info[1]
                , onclick: mx => {
                        mx.onOff = !mx.onOff
                    }
            }
            , {name: info[0], onOff: cI(false)})
        , label( {
                for: info[0]+"ID"
                , title: info[1]
            }, info[0]))))
}

// --- sorting ------------------------------------------------------

function jobListSort(mx, jobs) {
    let sortBy = mx.fmUp("sortby").selection

    return jobs.sort((j, k) => {
        let keyFn = sortBy.keyFn
            , rawComp = (keyFn(j) < keyFn(k) ? -1 : 1);
        return sortBy.order * rawComp
    });

}

function jobHnIdKey(j) {
    return j.hnId
}

function jobCompanyKey(j) {
    return (j.company || '')
}

function jobStarsKey(j) {
    let uj = UJob.dict[j.hnId];
    return (uj && uj.stars) || 0;
}

function sortBar() {
    return div({
            style: {
                display: "flex"
                , "align-items": "center"
            }
        }
        , span({style: "min-width:40px"}, "Sort by:")
        , ul({}, {
                id: "sortby", name: "sortby"
                , selection: cI({keyFn: jobHnIdKey, order: -1})
            }
            , [["Message Id", jobHnIdKey], ["Stars", jobStarsKey]
                , ["Company", jobCompanyKey]]
                .map(([label, keyFn]) => button({
                    style: cF(c => c.md.selected ? "background:cyan" : "")
                    , onclick: mx => {
                        let currSel = mx.fmUp("sortby").selection;
                        clg('setting selection', mx.selection);
                        mx.fmUp("sortby").selection =
                            (currSel.keyFn === mx.keyFn ?
                                {keyFn: mx.keyFn, order: -currSel.order}
                                : {keyFn: mx.keyFn, order: 1});
                    }
                    , content: label
                }, {
                    keyFn: keyFn
                    , selected: cF(c => c.md.fmUp("sortby").selection.keyFn === keyFn)
                }))))

}

function mkTitleRgx() {
    return mkListingRgx('title', "Title Regex", 'title')
}

function mkFullRgx() {
    return mkListingRgx('listing', "Listing Regex", 'title and listing', true)
}

function mkListingRgx(prop, lbl, desc, autofocus = false) {
    return labeledRow(lbl + ": ", input({
        autofocus: autofocus
        , placeholder: `Regex for ${desc} search`
        , onkeypress: buildRgxTree
        , onchange: buildRgxTree
        , value: ''
        , style: "min-width:300px;font-size:1em"
    }, {
        name: prop + "rgx"
        , rgxTree: cI(null)
    }))
}

function labeledRow(label, ...children) {
    return div({
            style: {
                display: "flex"
                , "margin-top" : "9px"
                , "align-items": "center"
            }
        }
        , span({style: "min-width:104px"}, label)
        , children)
}

function buildRgxTree(mx, e) {
    if (!(e.type === 'change' || (e.type==='keypress' && e.key === 'Enter')))
        return

    let rgx = e.target.value.trim()

    if (rgx === '') {
        mx.rgxTree = null // test
        return
    }

    mx.rgxTree = rgx.split('||').map(orx => orx.trim().split('&&').map(andx => {
        try {
            let [term, options=''] = andx.trim().split(',')
            return new RegExp( term, options)
        }
        catch (error) {
            alert(error.toString() + ": <" + andx.trim() + ">")
        }
    }))
}