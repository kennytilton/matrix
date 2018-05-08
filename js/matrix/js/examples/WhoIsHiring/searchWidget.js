function visaIntern() {
    return div({style: {display: "flex"}}
        , span({ style: "margin-right:36px"},
            "Status:")
        , input({ type: "checkbox"
                , checked: cF( c=> c.md.onOff)
                , onclick: mx => mx.onOff = !mx.onOff}
            , {name: "internok", onOff: cI(false)}
            , "INTERN?")
        , input({ type: "checkbox"
                , checked: cF( c=> c.md.onOff)
                , onclick: mx => mx.onOff = !mx.onOff}
            , {name: "visaok", onOff: cI(false)}
            , "VISA?")
    )
}

function remoteBar() {
    // todo make like sortby
    return div({
            style: {
                display: "flex"
                , "align-items": "center"
            }
        }
        , span("Locus: ")
        , ul({}, {
                name: "remoteness"
                , selection: cI('any')
            }
            , [["Any", 'any'], ["On-site", 'onsite'], ["Remote", 'remote']]
                .map(([label, value]) => button({
                    style: cF(c => c.md.selected ? "background:cyan" : "")
                    , onclick: mx => {
                        //clg('setting selection', mx.value, mx.selection, mx.tag);
                        mx.fmUp("remoteness").selection = mx.value;
                    }
                    , content: label
                }, {
                    value: value
                    , selected: cF(c => c.md.fmUp("remoteness").selection === value)
                }))))
}

function jobHnIdKey(j) {
    return j.hnId
}

function jobAgeKey(j) {
    return (j.age || '')
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
        , span("Sort by: ")
        , ul({}, {
                id: "sortby", name: "sortby"
                , selection: cI({keyFn: jobStarsKey, order: -1})
            }
            , [["Message Id", jobHnIdKey], ["Stars", jobStarsKey]
                , ["Company", jobCompanyKey], ["Age", jobAgeKey]]
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

function labeledRow( label, ...children) {
    return div({
            style: {
                display: "flex"
                , "align-items": "center"
            }
        }
        , span( label)
        , children)
}

function mkBodyRgx() {
    return mkListingRgx( 'body', "Body Regex", "Clojur || Lisp || BPM || Postgre", true)
}

function mkListingRgx( prop, lbl, ivalue, autofocus=false) {
    return labeledRow( lbl + ": ", input({
        autofocus: autofocus
        , placeholder: `Regex for ${prop} search`
        , onkeypress: buildRgxTree
        , value: ivalue || ''
    }, {
        name: prop+ "rgx"
        , rgxTree: cI( null)
    }))
}

function mkTitleRgx() {
    return mkListingRgx( 'title', "Title Regex")
}
function buildRgxTree (mx, e) {

    if (e.key !== 'Enter')
        return

    let rgx = e.target.value.trim()

    if (rgx === '') {
        mx.rgxTree = null // test
        return
    }

    clg('building tree', rgx)

    mx.rgxTree = rgx.split('||').map( orx=> orx.trim().split('&&').map(andx => {
        try {
            return new RegExp( andx.trim())
        }
        catch(error) {
            alert( error.toString() + ": <" + andx.trim() + ">")
        }
    }))

    clg('loaded ', mx.rgxTree)
}

