

const jsDom = []; // here we will link JS "mirror" DOM to actual DOM by their numerical ids

function dom2mx(dom, mustFind=true) {
	let js = jsDom[dom.id];
	if ( !js && mustFind) {
		throw `dom2mx cannot find jsDom with dom.sid ${dom.sid}, dom.id ${dom.id}`;
	}
	return js;
}

function obsContent (slot, md, newv, oldv, c) {
	if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
	// clg(`obsContent of ${md.name || md.id} setting ihtml!!! to ${newv} from ${oldv}`);
	ast( md.dom, "Tag obs Content");
	md.dom.innerHTML = newv;
}

function notToBe( mx) {
    mx.state = kDoomed;
    clg(' not to be!', mx, typeof mx);
    clg('kids ', mx.kids, typeof mx.kids, mx.kids===null);
    if ( mx.kids ) {
        for( let k of mx.kids) {
            notToBe( k);
        }
    }
    for (let slot in mx.cells) {
        let c = mx.cells[slot];
        c.quiesce();
    }
    mx.state = kDead;
}
function obsKids (slot, md, newv, oldv, c) {

	if (oldv===kUnbound) return; // on awaken all HTML is assembled at once

    let pdom = md.dom,
        frag = document.createDocumentFragment();

    ast(pdom);

    for (let oldk of oldv)
        if (!find(oldk,newv)) {
            notToBe(oldk);
        }

    for (let newk of newv) {
        if (find( newk, oldv)) {
            frag.appendChild( pdom.removeChild(newk.dom));
        } else {
            let incubator = document.createElement('div');

            incubator.innerHTML = Tag.toHTML( newk);

            let newDom = newk.domCache = incubator.removeChild( incubator.firstChild);
            frag.appendChild( newDom);
        }
    }

    pdom.innerHTML = null;
    pdom.appendChild( frag);
}

function obsDisabled (slot, md, newv, oldv, c) {
	if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
	md.dom.disabled = !!newv;
}

function obsStyleProperty (mxprop, md, newv, oldv, c) {
	if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
    let cssProp = mxprop.replace('_', '-')
	clg(`setting ${cssProp}!!! `+ newv);
	md.tag.dom.style[cssProp] = newv;
}

function obsTagEventHandler (property, md, newv, oldv, c) {
	if (oldv===kUnbound) return; // on awaken, all HTML is assembled at once
	//clg(`setting tag ${md.dbg()} style ${property}!!! `+ newv);
    // todo this is untested, might need translation of property
	md.dom[property] = newv;
}

var AttrAliases = new Map([['class','className']]);

function obsAttrGlobal (property, md, newv, oldv, c) {
	if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
	let trueAttr = AttrAliases.get(property) || property;
	md.dom[trueAttr] = newv;
}

class TagSession extends Model {
    constructor(parent, name, islots) {

        let superSlots = Object.assign({sid: ++sid}, islots);

        super(parent, (name || islots.name), superSlots, false);

        // this.routes = islots['routes'];
    }
    static make(parent, name, islots) {
        let ts = new TagSession( parent, name, islots);
        // todo this is unfortunate: perhaps we do as another automatic call such as to super, or as Model static
        if (ts.awakenOnInitp) {
            ts.awaken();
        } else {
            withIntegrity(qAwaken, ts, ts => {
                clg('awakening tag session!!!', ts.name);
                ts.awaken();
                return null;
            })
        }
    }
    static cname() {
        return "TagSession"
    }
    init () {
        Router(this.routes).init();
    }
}
window['TagSession'] = TagSession;

class Tag extends Model {
	constructor(parent, name, islots) {

		let superSlots = Object.assign({}, islots);
		delete superSlots.id;

		super( parent, (name || islots.name), superSlots, false);

		this.sid = ++sid;

		if (islots.id) {
			/// console.warn(`Provided dom id ${islots.id} is your responsibility.`);
			this.id = islots.id;
		} else {
			this.id = this.sid;
		}

		this.slotObservers = [];
		this.callbacks = new Map;

		// --- binding jsDom with dom -----------------
		jsDom[this.id]=this;
		this.domCache = null;
		Object.defineProperty( this, 'dom',
			{enumerable: true,
			get: ()=> {
				if (this.domCache===null) {
					this.domCache = document.getElementById(this.id);
					ast(this.domCache, "Unable to locate DOM for Tag via Tag.id " + this.id);
					if (!this.domCache) {
					    clg('no dom', name);
					    throw 'Tag unanble find DOM';
                    }
				}
				return this.domCache;}});

		// todo this is unfortunate: perhaps we do as another automatic call such as to super, or as Model static
		if (this.awakenOnInitp) {
			this.awaken();
		} else {
			withIntegrity(qAwaken, this, x=> {
				this.awaken();
		});
		}
	}
	dbg() { return `tag ${this.tag} nm=${this.name} id=${this.id} `}
    static cname() { return "Tag"}
    static isTagKid (k) {
	    // Tag children can be strings or functions (called with a Cell whos md is the parent) that return Tags
        return isString(k) || (k instanceof Function) || (k instanceof Array);
    }

    tagToHTML() {
		let tag = this.tag
			, others = tagAttrsBuild(this)
			, s = tagStyleBuild(this)
			, attrs = `${others} ${s}`;
		ast(tag);
        return `<${tag} ${attrs}>${this.content || this.kidsToHTML()}</${tag}>`;
	}

    static toHTML (mx) {
        if (isString(mx)) {
            return mx;
        } else if ( Array.isArray(mx)) {
            return mx.reduce(function (cum, chunk) {
                return cum + Tag.toHTML(chunk)
            }, "");
        } else if ( typeof mx === "function") {
            return mx().tagToHTML();
        } else {
            return mx.tagToHTML();
        }
    }

    kidsToHTML() {
	    //clg('making kids HTML for', this.dbg());
		return this.kids? this.kids.reduce((pv, kid)=>{ return pv + Tag.toHTML( kid);},''):'';
	}
	slotObserverResolve(slot) {
		let obs = this.slotObservers[slot];
		if (!obs) {
			if (slot === 'content') {
				obs = obsContent;
			} else if (slot === 'kids') {
				obs = obsKids;
			} else if (slot === 'disabled') {
				obs = obsDisabled;
			} else if (TagEvents.has(slot)) {
				obs = obsTagEventHandler;
			} else if (TagAttributesGlobal.has(slot)) {
				obs = obsAttrGlobal;
			} else {
				//console.warn(`tag ${this.tag} not resolving observer for ${slot}`);
				obs = kObserverUnresolved;
			}
			this.slotObservers[slot] = obs;
		}
		return obs;
	}
	fmTag(tag, key) {
		return this.fmUp(md=> md.tag===tag,{}, key)
	}
}
window['Tag'] = Tag;

var isTag = x => x instanceof Tag;

function setClick (dom, event) {
	//clg('setclick dom id '+dom.id);
	let jso = jsDom[dom.id];
	//clg('setclick jsdom '+jso.id);
	jso.click = event;
}

// ---- formerly tags.js ------------------------------------------

/* global Tag TagEvents */
const TagAttributesGlobal =  new Set(['accesskey','autofocus','checked','class','contenteditable'
	,'contextmenu','dir','draggable','dropzone','hidden','href','id','itemid','itemprop','itemref','itemscope'
	,'itemtype','lang','spellcheck','src','style','tabindex','title','translate', 'type']);

const TagEvents =  new Set(['onabort','onautocomplete','onautocompleteerror','onblur','oncancel'
	,'oncanplay','oncanplaythrough','onchange','onclick','onclose','oncontextmenu','oncuechange'
	,'ondblclick','ondrag','ondragend','ondragenter','ondragexit','ondragleave','ondragover'
	,'ondragstart','ondrop','ondurationchange','onemptied','onended','onerror','onfocus'
	,'oninput','oninvalid','onkeydown','onkeypress','onkeyup','onload','onloadeddata'
	,'onloadedmetadata','onloadstart','onmousedown','onmouseenter','onmouseleave','onmousemove'
	,'onmouseout','onmouseover','onmouseup','onmousewheel','onpause','onplay','onplaying'
	,'onprogress','onratechange','onreset','onresize','onscroll','onseeked','onseeking'
	,'onselect','onshow','onsort','onstalled','onsubmit','onsuspend','ontimeupdate','ontoggle'
	,'onvolumechange','onwaiting']);

function tagEventHandler( event, prop ) {
    clg( 'Bam tagEventHandler!', event, prop);
    let md = dom2mx( event.target);
    md.callbacks.get(prop)(md, event, prop)
}
function tagAttrsBuild(md) {
	let attrs = '';
	for (let prop in md) {
		if (md.hasOwnProperty(prop)) {
			if (TagEvents.has(prop)) {
				clg('bingo event!!!!!!!!!! '+prop);
				ast( md[prop] instanceof Function);
				md.callbacks.set( prop, md[prop]);
                attrs += ` ${prop}="tagEventHandler(event, '${prop}')"`;
                /*let code = md[prop];
                if ( ["this","\\("].every( clue => code.search(clue) == -1 ) )
                    attrs += ` ${prop}="${md[prop]}(this, event)"`;
                else
                    attrs += ` ${prop}="${code}"`;*/
			} else {
				switch (prop) {
					case 'disabled':
					case 'autofocus':
					case 'hidden':
					case 'checked':
						// booleans can stand alone. So weird.
						if (md[prop]) {
						 attrs += ` ${prop}`;
						 }
						break;
					case 'value': // todo make tagSpecificAttrs a class attribute of appropriate tags
						attrs += ` ${prop}="${md[prop]}"`;
						break;
					case 'placeholder': // todo make tagSpecificAttrs a class attribute of appropriate tags
						attrs += ` ${prop}="${md[prop]}"`;
						break;

                    case 'style':
                        attrs += tagStyleBuild( md);
                        break;

					default: {
						/*if (md.tag=='button') {
						 clg(md.tag + ' def prop ' + prop +'='+ md[prop]);
						 clg(TagAttributesGlobal.has(prop));
						 }*/
						if (TagAttributesGlobal.has(prop) && md[prop]) {
							// clg('bingo attr global '+prop+'='+md[prop]);
							attrs += ` ${prop}="${md[prop]}"`;
						}
					}
				}
			}
		}
	}
	//if (md.tag==='input') clg(md.tag + ' attrs ' + attrs);
	return attrs;
}

function tag( tag, attrs, customs, kids) {

    return function (c) {
        //clg('tag ', typeof par, id, par === null, isModel(par), typeof par ==='undefined', factory.cname());
        let cu = customs || {}
            , opts = Object.assign({}, {tag: tag}
                    , kids ? {kids: cKids( kids)} : null
                    , attrs, cu)
            , tg = new Tag( c ? c.md : null
            , cu.name || tag
            , opts);
        //clg(`tag sees ids ${id} and mdid ${md.id} name ${md.name}`);
        return tg;
    };
}

function genTagEx(tagName) {
    window[tagName] = function () {
        if ( Tag.isTagKid( arguments[0])) {
            return tag( tagName, {}, {}, allArgs(arguments));
        } else {
            if ( Tag.isTagKid( arguments[1])) {
                return tag( tagName, arguments[0], {}, cdrArgs(arguments));
            } else {
                return tag( tagName, arguments[0],  arguments[1], cddrArgs(arguments));
            }
        }
    }
}

['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio',
    'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink',
    'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center',
    'cite', 'code', 'col', 'colgroup', 'command', 'content',
    'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed',
    'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
    'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen',
    'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'multicol',
    'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output',
    'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rp', 'rt', 'rtc', 'ruby',
    's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span',
    'strike', 'strong', 'style', 'sub', 'summary', 'sup',
    'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title',
    'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'].map( tg => genTagEx( tg));

//-------------------------------------------------------------------------------
// ---------------- in-line Style ----------------------------------------------
//

class CSS extends Model {
    constructor(tag, islots) {

        let superSlots = Object.assign({}, islots); // todo do we need a copy?

        super(null, 'css', superSlots, false);

        this.cssProps = [];
        for ( let k in islots)
            this.cssProps.push( k);

        clg("cssProps!!!!", this.cssProps);

        this.sid = ++sid; // todo purpose unclear
        this.tag = tag;
        this.slotObservers = [];

        withIntegrity(qAwaken, this, x => this.awaken());
    }

    dbg() { return `CSS ${this.tag.tag} tagnm=${this.tag.name}`}

    static cname() { return "CSS"}

    slotObserverResolve(slot) {
        return obsStyleProperty;
    }
}

function mkCSS( props) {
    return function (tag) {
        return new CSS( tag, props)
    }
}

function tagStyleBuild(md) {
    let ss = '',
        style = md.style;

    if ( style instanceof Function) {
        clg(' model style!!!!');
        style = style( md);
    }
    clg('doing style', style);

    if ( isString( style)) {
        ss = style;
    } else if ( style instanceof CSS ) {
        style.cssProps.forEach( function (mxprop) {
            let cssProp = mxprop.replace('_', '-')
                , cssValue = style[mxprop];
            clg('bildstyle',mxprop, cssProp, cssValue);
            ss += `${cssProp}:${cssValue};`;
        })
    } else { // raw map
        for (let prop in style) {
            let cssProp = prop.replace('_', '-')
                , cssValue = style[prop];
            clg('bildstyle',cssProp, cssValue);
            ss += `${cssProp}:${cssValue};`;
        }
    }

    return ss===''? '' : ` style="${ss}"`;
}


//-------------------------------------------------------------------------------
//--- Persistence via window.localStorage ---------------------------------------

class MXStorable extends Model {
    // this constructor can create a new storable (in window.localStorage
    // as well as the matrix), or load a storable into the matrix

    constructor( icslots) {
        let islots = icslots || {},
            netSlots = Object.assign(
                // these first two will be overridden when loading fro localStorage
                { id: (islots.lsPrefix || "MXSTOR_ANON")  + uuidv4(),
                    created: Date.now()},
                islots,
                // on load from storage, this deleted will be present and thus
                // not loaded as mutable input cell. ie, no undelete.
                {deleted: islots.deleted || cI(null)});

        super(null, null, netSlots, false);

        this.store();
    }

    static storableProperties () { return ["id", "created","deleted"]}

/*    static make( klass, islots ) {
        let s = new klass( islots);
        s.store();
        return s;
    }*/

    toJSON () {
        // clg('or constructor', this.constructor.storableProperties());
        return this.constructor.storableProperties()
            .reduce( (j, p) => { j[p] = this[p];
                return j;}, {});
    }

    static load (klass, id) {
        let obj = window.localStorage.getObject( id);
        //clg('loading', id, obj.deleted);
        return new klass( obj)
    }

    static obsAnyChange ( slot, row, newv, priorv, c) {
        row.store();
    }

    slotObserverResolve(slot) {
        // tell the Matrix engine about our slot observer (same for all slots)
        return MXStorable.obsAnyChange
    }

    store () {
        MXStorable.storeObject( this.id, this.toJSON());
    }

    static storeObject ( id, obj) {
        window.localStorage.setObject( id, obj);
    }

    delete() {
        this.deleted = Date.now();
    }

    static loadAllItems(klass, prefix) {
        return Object.keys(window.localStorage)
            .filter( k => k.startsWith( prefix))
            .map( key => MXStorable.load( klass, key));
    }
}

window['MXStorable'] = MXStorable;

MXStorable.prototype['make'] = MXStorable.prototype.make;
MXStorable.prototype['toJSON'] = MXStorable.prototype.toJSON;
MXStorable.prototype['load'] = MXStorable.prototype.load;
MXStorable.prototype['store'] = MXStorable.prototype.store;
MXStorable.prototype['storeObject'] = MXStorable.prototype.storeObject;
MXStorable.prototype['delete'] = MXStorable.prototype.delete;
MXStorable.prototype['loadAllItems'] = MXStorable.prototype.loadAllItems;