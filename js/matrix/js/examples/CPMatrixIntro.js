// --- ignore this implementation stuff -------------

const bit = cFI( c=> {let r = window.localStorage.getObject("CPMatrixIntro.bit");
        return r === null ? 0 : r;},
    { name: 'bitNo',
        observer: (n, md, newv ) => window.localStorage.setObject("CPMatrixIntro.bit", newv)
    });

var bits = new Array();

function CPMatrixIntro () {
    return [ div( {style: "background:#fdfdfd;display:flex;flex-direction: row;align-items: center;"},
        controls),
        div( c=> bits[bit.v])];
}

window['CPMatrixIntro'] = CPMatrixIntro;

//--- the beef -----------------------------------------
/*
 */
bits.push(()=> [ h1( "Welcome to mxWeb and Matrix"),
    pre( "Matrix is a generic, finely granular data flow\n\
library that lets any toplevel var or object property\n\
be defined as a function of other such values.\n\n\
mxWeb lets us generate data flow-enabled Web content with\n\
an API closely mirroring HTML and CSS.\n\n\
We say we 'lift' HTML and CSS into the Matrix. We lift things\n\
into the Matrix because data flow is such a powerful paradigm.\n\
And it is fun."),

    h2("Using this Pen"),
    pre("Use the Back/Next buttons to step through the\n\
different examples. Use the numeric buttons to jump around.\n\n\
We show a little code with some of the examples, but for the\n\
most part you will have to dive into the JS panel to see the code.\n\n\
Let us begin by clicking NEXT above...")])

bits.push(()=> pre("Our design imperative for mxWeb is to mirror HTML and\n\
and CSS as closely as possible, such that\n\
MDN Web Docs (https://developer.mozilla.org/en-US/) can be\n\
its documentation. Ideally, strong graphic designers should\n\
be able to maintain mxWeb apps.\n\
   \n\
Where we come up short, please file an RFE."))

// Just like HTML, the renderer can take just a string...
bits.push(() => "As with HTML, a page can just be a string. Or...");

// ... or strings of HTML markup:
bits.push(() => "<h1>...or strings of HTML markup. Or...</h1>");

bits.push(() => ["...or arrays of such strings, including...", ["<br>","nested arrays (which get flattened)"],"<h1>hello, world.</h1>"]);

var hardHat = "<h3 class='caution'>Hard hat area</h3>";
bits.push(() =>
    [h2("At long last..."),
        pre("Our first look at mxWeb&trade; tag API functions.\n\
In HTMLese we say:"),
        xmp( hardHat),
        hardHat,
        p("In mxWeb&trade; we say:"),
        code("h3({ class: 'caution'}, 'Hard hat area')"),
        h3({ class: "caution"}, "Hard hat area"),
        pre("ie, where HTML has &lt;<i>tag [attributes*]&gt; content*&lt;/tag&gt;</i>,\n\
mxWeb function signatures are <i>tag( [attributes map], content*</i>).")]);

bits.push(() =>
    [pre("In-line styles can be a string or map. Later we will show off data flow."),
        h1("Unstyled"),
        h2({style: "color:red"},
            "A string in-line style."),
        // We need to use underscores where HTML wants hyphens
        h3({style: {color: "#00f", font_size: "2em"}}, "A map style."),
        p("The code for the above:"),
        code('h3({style: {color: "#00f", font_size: "2em"}}, "A map style.")'),
        pre("n.b. We had to use an underscore for the JS font_size key to specify CSS font-size.")]);

function hello_web_component (salut) {
    // enter Matrix DOM generation
    return h1(`${salut}, world.`);
}

bits.push(() => [pre("In effect, we now have web components*, aka custom tags:\n\
write whatever function you like with any parameters you like.\n\
As long as you eventually return strings or mxWeb components, it will work."),
    pre({class:'cody'}, "function hello_web_component (salut) {\n\
   return h1(`${salut}, world.`);\n\
}\n\n\
hello_web_component(\"Bonjour\")"),
    hello_web_component("Bonjour"),
    "* Some info on ",
    a({href: "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
        target: "_blank"}, "Web components")]);

bits.push(() => [ h2("Event handlers..."),
        pre("...and custom properties, an optional second parameter to any mxWeb&trade; tag."),
        p( pre({class:'cody'}, 'button({ class: "pure-button",\n\
            onclick: me => console.log(`Button ${me.name} clicked ${++me.clicks} times.`)},\n\
        {name: "plus-1",\n\
         clicks: cI(0)},\n\
        "++Plus")')),
    pre("Please check the console to see button working."),
    button({ class: "pure-button",
            onclick: me => console.log(`Button ${me.name} clicked ${++me.clicks} times.`)},
        {name: "plus-1",
         clicks: cI(0)},
        "++Plus")]
    );

// --- the code that manages this pen -----------------------

function nTabs (n) {
    tabs = [];
    for( let i=0; i < n; ++i) {
        let ii = i;
        tabs.push( button( {onclick: ()=> bit.v = ii,
            style: cF( c=>"margin-left:8px;background-color:"
                + (ii===bit.v? "cyan":"yellow"))}, ""+i));
    }
    return tabs;
}
var controls = [button({style: "font-size:2em;padding-left:9px",
    disabled: cF( ()=> bit.v <= 0),
    onclick: function(c) {
        clg('bam=', bit.v);
        bit.v = bit.v - 1;
    }}, "Back"),
    div( nTabs( bits.length)),
    button({style: "font-size:2em;padding-left:9px",
            hidden: cF( ()=> bit.v + 1 >= bits.length),
            onclick: function(c) {
                clg('bam=', bit.v);
                bit.v = bit.v + 1;
            }}
        , "Next")];

// document.body.innerHTML =  tag2html( page());

