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
    return j.age
}

function jobCompanyKey(j) {
    return j.company
}

function jobStarsKey(j) {
    return UJob.dict[j.hnId].stars;
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

