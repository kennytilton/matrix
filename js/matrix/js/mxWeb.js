

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
    for( let k of mx.kids) {
        notToBe( k);
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

            incubator.innerHTML = newk.toHTML();

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

function obsStyleProperty (property, md, newv, oldv, c) {
	if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
	//clg(`setting ${property}!!! `+ newv);
	md.dom.style[property] = newv;
}

function obsTagEventHandler (property, md, newv, oldv, c) {
	if (oldv===kUnbound) return; // on awaken, all HTML is assembled at once
	//clg(`setting tag ${md.dbg()} style ${property}!!! `+ newv);
	md.dom.style.set[property] = newv;
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
	toHTML() {
		let tag = this.tag
			, others = tagAttrsBuild(this)
			, s = tagStyleBuild(this)
			, attrs = `${others} ${s}`;
		ast(tag);
        return `<${tag} ${attrs}>${this.content || this.kidsToHTML()}</${tag}>`;
	}

    static mxToHTML (mx) {
        // for now we are assuming matrix page will be an array of matrices since body
        // can have multiple children
        return mx.reduce( function( cum, chunk) { return cum + chunk().toHTML()}, "");
    }

    kidsToHTML() {
		return this.kids? this.kids.reduce((pv, kid)=>{ return pv+kid.toHTML();},''):'';
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
			} else if (CommonCSSPropsJS.get(slot)) {
				obs = obsStyleProperty;
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

/* global Tag TagEvents CommonCSSPropsJS */
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

const HtmlProperties = new Set([
	'contentEditable','dataset','dir','isContentEditable','lang'
	,'offsetHeight','offsetLeft','offsetParent','offsetTop','offsetWidth','onabort','onblur'
	,'onchange','onclick','onclose','oncontextmenu','oncopy','oncut','ondblclick'
	,'onerror','onfocus','oninput','onkeydown'
	,'onkeypress','onkeyup','onload','onmousedown'
	,'onmousemove','onmouseout','onmouseover','onmouseup','onpaste','onpointercancel'
	,'onpointerdown','onpointerenter','onpointerleave','onpointermove','onpointerout'
	,'onpointerover','onpointerup','onreset','onresize','onscroll','onselect','onselectstart'
	,'onsubmit','ontouchcancel','ontouchmove','ontouchstart','outerText','style','tabIndex'
	,'title']);

const CSSProps = new Set(['align-content','align-items','align-self','all','<angle>','animation'
	,'animation-delay','animation-direction','animation-duration','animation-fill-mode','animation-iteration-count'
	,'animation-name','animation-play-state','animation-timing-function','backface-visibility'
	,'background','background-attachment','background-blend-mode','background-clip','background-color'
	,'background-image','background-origin','background-position','background-repeat','background-size'
	,'block-size','border','border-block-end','border-block-end-color','border-block-end-style'
	,'border-block-end-width','border-block-start','border-block-start-color'
	,'border-block-start-style','border-block-start-width','border-bottom','border-bottom-color'
	,'border-bottom-left-radius','border-bottom-right-radius','border-bottom-style','border-bottom-width'
	,'border-collapse','border-color','border-image','border-image-outset','border-image-repeat'
	,'border-image-slice','border-image-source','border-image-width','border-inline-end'
	,'border-inline-end-color','border-inline-end-style','border-inline-end-width','border-inline-start'
	,'border-inline-start-color','border-inline-start-style','border-inline-start-width','border-left'
	,'border-left-color','border-left-style','border-left-width','border-radius','border-right'
	,'border-right-color','border-right-style','border-right-width','border-spacing','border-style','border-top'
	,'border-top-color','border-top-left-radius','border-top-right-radius','border-top-style','border-top-width'
	,'border-width','bottom','box-decoration-break','box-shadow','box-sizing','break-after','break-before'
	,'break-inside','caption-side','ch','clear','clip','clip-path','cm','color','column-count','column-fill'
	,'column-gap','column-rule','column-rule-color','column-rule-style','column-rule-width','column-span'
	,'column-width','columns','content','counter-increment','counter-reset','cursor','direction','display'
	,'empty-cells','filter','flex','flex-basis','flex-direction','flex-flow','flex-grow','flex-shrink'
	,'flex-wrap','float','font','font-family','font-feature-settings','font-kerning','font-language-override'
	,'font-size','font-size-adjust','font-stretch','font-style','font-synthesis','font-variant'
	,'font-variant-alternates','font-variant-caps','font-variant-east-asian','font-variant-ligatures'
	,'font-variant-numeric','font-variant-position','font-weight','grid','grid-area','grid-auto-columns'
	,'grid-auto-flow','grid-auto-rows','grid-column','grid-column-end','grid-column-gap','grid-column-start'
	,'grid-gap','grid-row','grid-row-end','grid-row-gap','grid-row-start','grid-template','grid-template-areas'
	,'grid-template-columns','grid-template-rows','height','hyphens','hz','image-orientation','image-rendering'
	,'image-resolution','ime-mode','initial','inline-size','isolation','justify-content','left','letter-spacing'
	,'line-break','line-height','list-style','list-style-image','list-style-position','list-style-type','margin'
	,'margin-block-end','margin-block-start','margin-bottom','margin-inline-end','margin-inline-start','margin-left'
	,'margin-right','margin-top','mask','mask-clip','mask-composite','mask-image','mask-mode','mask-origin'
	,'mask-position','mask-repeat','mask-size','mask-type','max-block-size','max-height','max-inline-size'
	,'max-width','min-block-size','min-height','min-inline-size','min-width','mix-blend-mode','object-fit'
	,'object-position','offset-block-end','offset-block-start','offset-inline-end','offset-inline-start'
	,'opacity','order','orphans','outline','outline-color','outline-offset','outline-style','outline-width'
	,'overflow','overflow-wrap','overflow-x','overflow-y','padding','padding-block-end','padding-block-start'
	,'padding-bottom','padding-inline-end','padding-inline-start','padding-left','padding-right','padding-top'
	,'page-break-after','page-break-before','page-break-inside','perspective','perspective-origin','pointer-events'
	,'position','quotes','resize','revert','right','ruby-align','ruby-merge','ruby-position','scroll-behavior'
	,'scroll-snap-coordinate','scroll-snap-destination','scroll-snap-type','shape-image-threshold','shape-margin'
	,'shape-outside','tab-size','table-layout','text-align','text-align-last','text-combine-upright'
	,'text-decoration','text-decoration-color','text-decoration-line','text-decoration-style','text-emphasis'
	,'text-emphasis-color','text-emphasis-position','text-emphasis-style','text-indent','text-orientation'
	,'text-overflow','text-rendering','text-shadow','text-transform','text-underline-position','top','touch-action'
	,'transform','transform-box','transform-origin','transform-style','transition','transition-delay'
	,'transition-duration','transition-property','transition-timing-function','unicode-bidi','unset'
	,'vertical-align','vh','visibility','vmax','vmin','vw','white-space','widows','width','will-change','word-break'
	,'word-spacing','word-wrap','writing-mode','z-index','zoom']);

const CommonCSSPropsJS = new Map([['background','background'], ['backgroundAttachment','background-attachment']
	, ['backgroundColor','background-color'], ['backgroundImage','background-image']
	, ['backgroundPosition','background-position'], ['backgroundRepeat','background-repeat']
	, ['border','border'], ['borderBottom','border-bottom'], ['borderBottomColor','border-bottom-color']
	, ['borderBottomStyle','border-bottom-style'], ['borderBottomWidth','border-bottom-width']
	, ['borderColor','border-color'], ['borderLeft','border-left'], ['borderLeftColor','border-left-color']
	, ['borderLeftStyle','border-left-style'], ['borderLeftWidth','border-left-width']
	, ['borderRight','border-right'], ['borderRightColor','border-right-color']
	, ['borderRightStyle','border-right-style'], ['borderRightWidth','border-right-width']
	, ['borderStyle','border-style'], ['borderTop','border-top'], ['borderTopColor','border-top-color']
	, ['borderTopStyle','border-top-style'], ['borderTopWidth','border-top-width'], ['borderWidth','border-width']
	, ['clear','clear'], ['clip','clip'], ['color','color'], ['cursor','cursor'], ['display','display']
	, ['filter','filter'], ['font','font'], ['fontFamily','font-family'], ['fontSize','font-size']
	, ['fontVariant','font-variant'], ['fontWeight','font-weight'], ['height','height'], ['left','left']
	, ['letterSpacing','letter-spacing'], ['lineHeight','line-height'], ['listStyle','list-style']
	, ['listStyleImage','list-style-image'], ['listStylePosition','list-style-position']
	, ['listStyleType','list-style-type'], ['margin','margin'], ['marginBottom','margin-bottom']
	, ['marginLeft','margin-left'], ['marginRight','margin-right'], ['marginTop','margin-top']
	, ['overflow','overflow'], ['padding','padding'], ['paddingBottom','padding-bottom']
	, ['paddingLeft','padding-left'], ['paddingRight','padding-right'], ['paddingTop','padding-top']
	, ['pageBreakAfter','page-break-after'], ['pageBreakBefore','page-break-before'], ['position','position']
	, ['cssFloat','float'], ['textAlign','text-align'], ['textDecoration','text-decoration']
	, ['textIndent','text-indent'], ['textTransform','text-transform'], ['top','top']
	, ['verticalAlign','vertical-align'], ['visibility','visibility']
	, ['width','width'], ['zIndex','z-index']]);

function tagAttrsBuild(md) {
	let attrs = '';
	for (let prop in md) {
		if (md.hasOwnProperty(prop)) {
			if (TagEvents.has(prop)) {
				//clg('bingo event!!!!!!!!!! '+prop);
                let code = md[prop];
                if ( ["this","\\("].every( clue => code.search(clue) == -1 ) )
                    attrs += ` ${prop}="${md[prop]}(this, event)"`;
                else
                    attrs += ` ${prop}="${code}"`;
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

function tagStyleBuild(md) {
	let ss = '';
	for (let prop in md) {
		if (md.hasOwnProperty(prop)) {
			let cssProp = CommonCSSPropsJS.get(prop);
			//clg('md prop '+prop+'='+cssProp);
			if (cssProp) {
				let cssValue = md[prop];
				// note the shift from js prop name to CSS name
				ss += `${cssProp}:${cssValue};`;

			}
		}
	}
	return ss===''? '' : ` style="${ss}"`;
}


function tag( tag, islots, kids) {
    // clg(`tag ${tag} ${islots.name} sees parent ${parent}, kids ` + kids);
    //clg('tag entry', tag, typeof kids, kids, kids==='undefined', kids instanceof Array);

    return function (c) {
        //clg('tag ', typeof par, id, par === null, isModel(par), typeof par ==='undefined', factory.cname());
        let opts = Object.assign({}, {tag: tag}
                                , kids ? {kids: cKids( kids)} : null
                                , islots)
            , tg = new Tag( c ? c.md : null
                            , islots.name || tag
                            , opts);
        //clg(`tag sees ids ${id} and mdid ${md.id} name ${md.name}`);
        if (!isTag(tg)) throw 'tag made not-isTag';
        return tg;
    };
}

function div(islots) {
	return tag('div', islots, cdrArgs(arguments));
}
function header(islots) {
	return tag('header', islots,  cdrArgs(arguments));
}
function footer(islots) {
	return tag('footer', islots, cdrArgs(arguments));
}
function h1(content, islots) {
	return tag('h1', Object.assign( {content: content}, islots), cddrArgs(arguments));
}
function h2(content, islots) {
	return tag('h2', Object.assign( {content: content}, islots), cddrArgs(arguments));
}
function h3(content, islots) {
	return tag('h3', Object.assign( {content: content}, islots), cddrArgs(arguments));
}
function h4(content, islots) {
	return tag('h4', Object.assign( {content: content}, islots), cddrArgs(arguments));
}
function h5(content, islots) {
	return tag('h5', Object.assign( {content: content}, islots), cddrArgs(arguments));
}
function h6(content, islots) {
	return tag('h6', Object.assign( {content: content}, islots), cddrArgs(arguments));
}
function section(islots) {
	return tag('section', islots, cdrArgs(arguments));
}

function ul(islots) {
	return tag('ul', islots, cdrArgs(arguments));
}

function li(islots) {
	return tag('li', islots, cdrArgs(arguments));
}
// todo Standardize all these so islots precedes content
function label(content, islots) { // can a label have kids?
	return tag('label', Object.assign( {content: content}, islots), cddrArgs(arguments));
}
function labelx(islots) { // todo can a label have kids?
	ast( islots.content, 'labelx sees islots sans content');
	return tag('label', islots, cdrArgs(arguments));
}
function button(content, islots, kids) {
	return tag('button', Object.assign( {content: content}, islots), cddrArgs(arguments));
}
function span( islots) {
	return tag('span', islots);
}
function input(islots) {
	return tag('input', islots, cdrArgs(arguments));
}
function p(islots, content) {
	return tag('p', Object.assign( {content: content}, islots));
}
function img(islots) {
	return tag('img', islots);
}
function a(islots, content) {
	return tag('a', Object.assign( {content: content}, islots));
}

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