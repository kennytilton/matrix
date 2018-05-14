goog.require('Matrix.Cells')
goog.require('Matrix.Model')
goog.require('Matrix.mxWeb')
goog.provide('Hiring.usernote')

//--- User Job Listing Annotations -------------
//
//
// ---- model / persistence --------------------

const JOB_LS_PREFIX = "whoishiring.";

// MXStorable.removeAllItems(JOB_LS_PREFIX);

class UserNotes extends MXStorable {
    constructor(islots) {
        super(Object.assign({
                lsPrefix: JOB_LS_PREFIX
            },
            islots,
            {
                hnId: islots.hnId
                , stars: cI(islots.stars) // null OK
                , hidden: cI(islots.hidden || false)
                , applied: cI(islots.applied || false)
                , notes: cI(islots.notes)
            }))
    }

    static storableProperties() {
        // created and deleted are provided by MXStorable
        return ["id", "hnId", "stars", "hidden", "applied", "notes"].concat(super.storableProperties());
    }

    static loadFromStorage() {
        return mkm(null, 'JobList'
            , {
                dict: cF(c => {
                    let jd = {}
                        , jobs = MXStorable.loadAllItems(UserNotes, JOB_LS_PREFIX) || [];
                    //clg('ujobs found', WhoIsHiring.length)
                    for (let jn = 0; jn < jobs.length; ++jn) {
                        let j = jobs[jn]
                        //clg('job Storage->dict', j.hnId)
                        jd[j.hnId] = j;
                    }

                    return jd;
                })
            })
    }
}

const UJob = UserNotes.loadFromStorage();

// ------ user annotations u/x --------------------------------------

function userAnnotations(j) {
    return div({style: "display:flex; flex-wrap:wrap; align-items:center"}
        , moreOrLess()
        , jobStars(j)
        , applied(j)
        , noteEditor(j)
        , a({
                style: "margin-left:6px"
                , href: `https://news.ycombinator.com/item?id=${j.hnId}`
                , title: "View listing on the HN site"}
            , img({ src: "dist/hn24.jpg"}))
    )
}

function moreOrLess () {
    return div( {style: hzFlexWrap}
        , {
            name: "showListing"
            , onOff: cI( false)
// /*            cF( c=> {
//                 clg('seeking ud', c.md, c.md.par)
//                 let ud = c.md.fmUp("udShowListing")
//                 clg("ud is", ud)
//                 return false // ud.onOff
//             })*/
        }
        , i({
            class: "material-icons"
            , style: "cursor:pointer"
            , onclick: mx => {
                mx.par.onOff = !mx.par.onOff
            }
            , title: "Show/hide full listing"
            , content: cF( c=> c.md.par.onOff? "expand_less":"expand_more")
        }))
}

const MAX_STARS = 5;

function jobStars(j) {
    return div({style: "margin-left:6px; display:flex; flex-wrap:wrap"}
    , c => {
        let stars = []
            , ujob = UJob.dict[j.hnId]
        for (let n = 0; n < MAX_STARS; ++n)
            stars.push(i({
                    class: "material-icons"
                    , style: cF(c => {
                        return "font-size:1em; cursor:pointer; color:" + ( ujob.stars >= c.md.starN ? "#000" : "#eee")
                    })
                    , onclick: mx => {
                        ujob.stars = (ujob.stars === mx.starN ? 0 : mx.starN);
                    }
                }
                , {starN: n + 1}
                , "grade"))
        return stars
    })
}

// --- notes ---------------------------------------------

function noteEditor(j) {
    let ujob = UJob.dict[j.hnId]

    return div({style: "margin-left:18px"}
        , {editing: cI(false)}
        , i({
            class: "material-icons"
            , style: cF(c => {
                let c1 = ( ujob.notes && ujob.notes.length > 0) ? "#f00" : "#000"

                return "cursor:pointer;color:" + ( ujob.notes && ujob.notes.length > 0 ? "#f00" : "#000")

            })
            , onclick: mx => {
                mx.par.editing = !mx.par.editing
            }
            , content: "note_add"
        })
        , textarea({
                style: cF(c => "display:"
                    + (c.md.par.editing ? "block" : "none"))
                , cols: 60
                , placeholder: "Your notes here"
                , onchange: (mx, e) => {
                    clg('bam', e.target.value)
                    ujob.notes = e.target.value
                }
            }
            , ujob.notes || "")
    )
}

function applied(j) {
    let ujob = UJob.dict[j.hnId]

    return div({
            style: "display:flex; align-items:center"
        }
        , input({
                id: "applied?"
                , type: "checkbox", style: "margin-left:18px"
                , checked: cF(c => ujob.applied || false)
                , onclick: mx => ujob.applied = !ujob.applied
            }
            , {name: "applied?"}),
        label({for: "applied?"}, "Applied"))
}