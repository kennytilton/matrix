//--- persistence ------------------------------------------------------

const JOB_LS_PREFIX = "whoishiring.";

// MXStorable.removeAllItems(JOB_LS_PREFIX);

class Job extends MXStorable {
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
                        , jobs = MXStorable.loadAllItems(Job, JOB_LS_PREFIX) || [];
                    //clg('ujobs found', jobs.length)
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
        ; rn < raw.length && (jobs.length < 50)
        ; ++rn) {

        let spec = jobSpec(raw[rn])
            , hnId = spec.hnId;

        if (spec.OK) {
            ast(hnId);
            //clg( 'OK job', hnId);
            if (!UJob.dict[hnId]) {
                //clg('initializing user job', hnId)
                let j = new Job({hnId: hnId});
                UJob.dict[hnId] = j;
            }
            jobs.push(spec)
        }
    }

    return jobs;
}

function jobSpec(dom) {
    //clg('jopspec', dom.id, dom.tagName, dom.classList)
    let j = {hnId: dom.id}
    for (let n = 0; n < dom.children.length; ++n) {
        jobSpecBuild(j, dom.children[n])
    }
    return j
}

function jobSpecBuild(j, dom) {
    let cn = dom.className;

    if (cn === "hnuser") {
        j.user = dom.innerHTML

    } else if (cn === "age") {
        j.age = dom.children[0].innerHTML

    } else if (cn.length === 3 && "c5a,cae,c00,c9c,cdd,c73,c88".search(cn) !== -1) {
        let rs = dom.getElementsByClassName('reply');
        Array.prototype.map.call(rs, function (e) {
            e.remove()
        });

        let child = dom.childNodes
            , inHeader = true;

        if ( child[0].nodeType === 3
            // && child[0].textContent.search("Instructure") !== -1
            && child[0].textContent.split("|").length > 1) {

            j.title = []
            j.body = []

            for (let i = 0; i < child.length; i++) {
                n = child[i]

                if (inHeader) {
                    if (n.nodeType === 1 && n.nodeName === 'P') {
                        inHeader = false
                        //clg('pgr1', n, n.nodeName, n.innerHTML)
                        j.body.push(n)
                    } else {
                        clg('raw title seg', n.nodeType, n.textContent, n.nodeName)
                        j.title.push(n)
                    }
                } else {
                    //clg('pgrn', i, n.nodeName, n.innerHTML)
                    j.body.push(n)
                }
            }


            let htext = j.title.map(h => h.textContent).join(" | ")
                , hseg = htext.split("|").map( s=> s.trim())

            let internOK = new RegExp(/((internship|intern)(?=|s,\)))/, 'i')
                , visaOK = new RegExp(/((visa|visas)(?=|s,\)))/, 'i')
                , remoteOK = new RegExp(/(remote)/, 'i')
                , hsmatch = rx => hseg.some(hs => hs.match(rx) !== null);

            j.company = hseg[0]
            j.OK = true || j.company.search("Privacy.com")===0;

            j.titlesearch = htext
            j.bodysearch = j.body.map(n => n.textContent).join('<**>')
            j.remote = hsmatch(remoteOK)
            j.visa = hsmatch(visaOK)
            j.intern = hsmatch(internOK)
        }
    }
    if (cn === "reply") {
        dom.remove()
    } else {
        for (let n = 0; n < dom.children.length; ++n) {
            jobSpecBuild(j, dom.children[n])
        }
    }
}