//--- persistence ------------------------------------------------------

const JOB_LS_PREFIX = "whoishiring.";

class Job extends MXStorable {
    constructor(islots) {
        // clg('jconstruct', islots);
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
                        clg('job Storage->dict', j.hnId)
                        jd[j.hnId] = j;
                    }

                    return jd;
                })
            })
    }
}

const Jobs = Job.loadFromStorage();

// clg('keys', Object.keys(window.localStorage || {})[0]);

// var jj = MXStorable.load( Job, "whoishiring.82ac563f-4069-4a17-a84f-d3655279404e");
// clg("jjj",  jj.id, jj.hnId, Object.keys(jj))
// var jjj = window.localStorage.getObject( "whoishiring.82ac563f-4069-4a17-a84f-d3655279404e")
// clg("jjj",  jjj.id, jjj.hnId, Object.keys(jjj))

// clg('jobs LS count', MXStorable.countAllItems(JOB_LS_PREFIX));
// // var jjs = MXStorable.loadAllItems(Job, JOB_LS_PREFIX)
//
// MXStorable.removeAllItems(JOB_LS_PREFIX)
// clg('jobs LS count post clear', MXStorable.countAllItems(JOB_LS_PREFIX));
// clg('jload', jjs[0].id, jjs[0].hnId)
// clg('Jobs jobs ct', Jobs.jobs.length);

// --- loading user prefs -----------------------------

for(var key in Jobs.dict){
    var j = Jobs.dict[key];
    clg('loaded job', key, j.hnId, j.stars)
}

function jobsCollect(dom) {
    let raw = Array.prototype.slice.call(dom.querySelectorAll('.athing'))
        , jobs = [];

    for (let rn = 0
        ; rn <  raw.length
         && rn < 30
        ; ++rn) {

        let spec = jobSpec(raw[rn])
            , hnId = spec.hnId;

        if (spec.OK) {
            ast(hnId);
            //clg( 'OK job', hnId);
            if ( !Jobs.dict[hnId]) {
                clg('initializing user job', hnId)
                let j = new Job( {hnId: hnId});
                Jobs.dict[ hnId] = j;
            } else {
                clg('old userjob!!!!!', jct, hnId);
            }
            jobs.push(spec);
            if (++jct > 10) break;
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

    //if (cn) clg('sub'+tab, cn);
    if (cn === "hnuser") {
        j.user = dom.innerHTML
    } else if (cn === "comment") {
        j.comment = dom
        // clg('comment', dom.children.length, dom.children[0].tagName, dom.innerHTML)
    } else if (cn === "c00") {
        let ih = dom.innerHTML
            , ps = ih.split("<p>")
            , hdr = ps[0]
            , hs = hdr.split("|");

        if (hs.length > 1) {
            let rXonsite = new RegExp('on-?site', 'i')
                , rXremote = new RegExp('remote', 'i');
            j.OK = true
            j.company = hs[0]
            j.hdrest = hs.slice(1)
            // clg('job header', hs.length, hdr)
            if (hdr.match(rXonsite)) {
                //clg('onsite!!!!', hdr)
                j.onsite = true;
            } else j.onsite = false;
            if (hdr.match(rXremote)) {
                //clg('remote!!!!', hdr)
                j.remote = true;
            } else j.remote = false;

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