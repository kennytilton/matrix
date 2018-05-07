//--- persistence ------------------------------------------------------

const JOB_LS_PREFIX = "whoishiring.";

class Job extends MXStorable {
    constructor(islots) {
        super( Object.assign( {
                lsPrefix: JOB_LS_PREFIX},
            islots,
            {
                hnId: islots.hnId
                , stars: cI(islots.stars) // null OK
                , hidden: cI( islots.hidden || false)
                , applied: cI( islots.applied || false)
                , notes: cI( islots.notes)
            }))
    }

    static storableProperties () {
        // created and deleted are provided by MXStorable
        return ["id", "hnId", "stars", "hidden", "applied", "notes"].concat(super.storableProperties());
    }

    static loadFromStorage() {
        return mkm( null, 'JobList'
            , {
                dict: cF(c => {
                    let jd = {}
                        , jobs = MXStorable.loadAllItems(Job, JOB_LS_PREFIX) || [];
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

const UJob = Job.loadFromStorage();

function jobsCollect(dom) {
    let raw = Array.prototype.slice.call(dom.querySelectorAll('.athing'))
        , jobs = [];

    for (let rn = 0
        ; rn <  raw.length
         // && rn < 100
        ; ++rn) {

        let spec = jobSpec(raw[rn])
            , hnId = spec.hnId;

        if (spec.OK) {
            ast(hnId);
            //clg( 'OK job', hnId);
            if ( !UJob.dict[hnId]) {
                //clg('initializing user job', hnId)
                let j = new Job( {hnId: hnId});
                UJob.dict[ hnId] = j;
            }
            jobs.push(spec)
            //if (jobs.length > 100) break;
        }
    }

    return jobs;
}

function jobSpec(dom) {
    //clg('jopspec', dom.id, dom.tagName, dom.classList)
    let j = {hnId: dom.id}
    for (let n = 0; n < dom.children.length; ++n) {
        jobSpecBuild(j, dom.children[n], 0)
    }
    return j
}

function jobSpecBuild(j, dom, deep) {
    let cn = dom.className
        , tab = '' + deep;

    for (let n = 0; n < deep; ++n) {
        tab = tab + '..';
    }

    if ( cn === "hnuser" ) {
        j.user = dom.innerHTML

    } else if (cn === "age") {
        j.age = dom.children[0].innerHTML

    } else if ("c5a,cae,c00,c9c,cdd,c73,c88".search(cn) !== -1) {
        let ih = dom.innerHTML
            , ps = ih.split("<p>")
            , hdr = ps[0]
            , hs = hdr.split("|")
            , hsmatch = function(rx) {
            for (hn=1; hn < hs.length; ++hn) {
                if (hs[hn].match(rx) !== null) {
                    return true
                }
            }
            return false
        };

        if (hs.length > 1) {
            let onsite = new RegExp(/(on-?site)/, 'i')
                //, internOK = new RegExp('/^(intern|interns(?=,)|internship)$/','i')
                , internOK = new RegExp(/((internship|intern)(?=|s,\)))/,'i')
                , visaOK = new RegExp(/((visa|visas)(?=|s,\)))/,'i')
                , remote = new RegExp(/(remote)/, 'i');
            j.OK = true
            j.company = hs[0]
            j.hdrest = hs.slice(1)
            j.body = ps.slice(1).join("<p>")
            //clg('job header', hs.length, hdr)
            //clg('hdrest0', j.hdrest[0])
            j.onsite =  hsmatch(onsite)
            j.remote = hsmatch(remote)
            j.visa = hsmatch(visaOK)
            j.intern = hsmatch(internOK)
            // if (hdr.search("INTERN") !== -1) {
            //     clg("Intern!!!!", j.intern, hdr)
            // }
        }
    }
    if (cn === "reply") {
        dom.remove()
    } else {
        for (let n = 0; n < dom.children.length; ++n) {
            jobSpecBuild(j, dom.children[n], deep + 1)
        }
    }
}