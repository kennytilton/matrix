// --- loading job data -----------------------------------------

function jobListingLoader() {
    return div(
        progress({
            id: "progress"
            , max: cI( 2000)
            , value: cI(0)
        }, {name: "progress"})
        , iframe({
            src: "files/whoishiring-2018-05.html" // "files/hiring-201805-06e.htm"
            , style: "display: none; width:1000px; height:100px"
            , onload: md => jobsCollect(md)
        }))
}


function jobsCollect(md) {
    if (md.dom.contentDocument) { // FF
        hnBody = md.dom.contentDocument.getElementsByTagName('body')[0];
        let chunkSize = 10
            , listing = Array.prototype.slice.call(hnBody.querySelectorAll('.athing'))
            , tempJobs = []
            , progressBar = md.fmUp("progress");

        ast(progressBar);

        if (listing.length > 0) {
            progressBar.max = Math.floor( listing.length / chunkSize)+""
            parseListings( listing, tempJobs, chunkSize, progressBar)
        }


    }
}

function parseListings( listing, tempJobs, chunkSize, progressBar) {
    let chunker = chunk => {
        let jct = Math.min(chunk.length, chunkSize)

        if (jct > 0) {
            //clg('parsing', jct, chunk.length);
            for (jn = 0; jn < jct; ++jn) {
                let spec = jobSpec(chunk[jn])

                if (spec.OK) {
                    let hnId = spec.hnId;
                    //clg('specok', hnId);

                    if (!UJob.dict[hnId]) {
                        UJob.dict[hnId] = new UserJob({hnId: hnId});
                    }
                    tempJobs.push(spec)
                }
            }
            let v = progressBar.value;
            progressBar.value = v + 1;
            window.requestAnimationFrame(() => chunker(chunk.slice(jct)));
        } else {
            hiringApp.jobs = tempJobs;
        }
    }
    chunker( listing);
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

        if (child[0].nodeType === 3
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
                        //clg('raw title seg', n.nodeType, n.textContent, n.nodeName)
                        j.title.push(n)
                    }
                } else {
                    //clg('pgrn', i, n.nodeName, n.innerHTML)
                    j.body.push(n)
                }
            }


            let htext = j.title.map(h => h.textContent).join(" | ")
                , hseg = htext.split("|").map(s => s.trim())

            let internOK = new RegExp(/((internship|intern)(?=|s,\)))/, 'i')
                , visaOK = new RegExp(/((visa|visas)(?=|s,\)))/, 'i')
                , remoteOK = new RegExp(/(remote)/, 'i')
                , hsmatch = rx => hseg.some(hs => hs.match(rx) !== null);

            j.company = hseg[0]
            j.OK = true || j.company.search("Privacy.com") === 0;

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