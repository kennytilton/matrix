var bits = new Array();

bits.push(()=> [ h1( "Welcome to mxWeb and Matrix"),
    pre( "Matrix is a fine-grained data flow library where\n\
any toplevel var or object property can be\n\
defined as a function of other such values.\n\n\
mxWeb&trade; lets us generate data flow-enabled Web content\n\
using an API closely mirroring HTML and CSS.\n\n\
We say mxWeb 'lifts' HTML and CSS into the Matrix.\n\
We lift things into the Matrix simply because\n\
the data flow paradigm is so powerful. And fun."),

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
    return h3(`${salut}, world.`);
}

bits.push(() => [pre("In effect, we now have web components*, aka custom tags: we write\n\
whatever function we like with any parameters we like. As long as \n\
we eventually return strings or mxWeb components, we are good.\n\n\
Note that we are also one up on JSX: we write standard JS to generate DOM."),
    pre({class:'cody'}, "function hello_web_component (salut) {\n\
   return h3(`${salut}, world.`);\n\
}\n\n\
['Bonjour', 'Aloha', 'Ciao', 'Howdy'].map(\n\
        s=> hello_web_component(s))"),
    ["Bonjour", "Aloha", "Ciao", "Howdy"].map(
        s=> hello_web_component(s)),
    "* Some info on ",
    a({href: "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
        target: "_blank"}, "Web components")]);

bits.push(() => [
        h2("Event handlers..."),
        pre("...and custom properties, an optional second parameter\n\
to any mxWeb&trade; tag. 'name' will come in handy later\n\
in navigating the Matrix.\n\n\
It may not jump out at us, but being able to extend Matrix objects\n\
with custom attributes contibutes a lot to object reuse."),
        pre({class:'cody'}, "button({ class: 'pure-button',\n\
         onclick: me => console.log(`Button ${me.name} handled ${e} at ${Date.now)}.`)},\n\
       {name: 'plus-1'},\n\
       '++Plus')"),
        button({ class: "pure-button",
                onclick: (me, e) => console.log(`Button ${me.name} handled ${e} at ${Date.now()}.`)},
            {name: "plus-1"},
            "++Plus"),
        pre("Please check the console to see the onclick handler working.\n\n\
The astute observer may deduce that mxWeb&trade; augments\n\
event handling by giving the DOM a standard handler which\n\
calls our handlers with the involved mxWeb widget as the first parameter.\n\n\
The win is that the handler we write for a Matrix element is the\n\
handler that runs on the DOM event. Which is nice.")
    ]
);

bits.push(() => [
        h2("Enter Data Flow"),
        pre("Well, just a bit of data flow: the observer callback, which\n\
is vital to Matrix programming. The observer sits on\n\
a custom 'clicks' property, a so-called input cell (hence 'cI')\n\
to which we are free to assign values from imperative code.\n\n\
Input cells are inputs to the Matrix data flow graph; it cannot\n\
be formulae All the Way Down&trade;."),
    pre({class: 'cody'}, "button({onclick: me => ++me.clicks},\n\
      {name: 'plus-1',\n\
       clicks: cI(0, {observer: (slot, me, newv) =>\n\
                         console.log(`Button ${me.name} clicked ${newv} times.`)})},\n\
       '++Plus')"),
        button({class: "pure-button",
                onclick: me => ++me.clicks},
            {name: "plus-1",
                clicks: cI(0, {observer: (slot, me, newv) => console.log(`Button ${me.name} clicked ${newv} times.`)})},
            "++Plus"),
        pre("Please check the console to see button working.")
    ]
);

bits.push(() => [
        h2("Intra-object Data Flow"),
        pre("We start with simple intra-object data flow so we can\n\
defer for a moment the complexity of navigating\n\
the Matrix in search of other data.\n\n\
Click the button to see its color and content\n\
derived from the number of clicks, which again\n\
we track in a custom 'input' cell."),

        pre({class: 'cody'},
            "button({style: cF( c=> 'background:' + (c.md.clicks % 2 == 0? 'cyan':'yellow')),\n\
        onclick: me => ++me.clicks,\n\
        content: cF( c=> '++Plus '+c.md.clicks)},\n\
      {clicks: cI(0)})"),
        button({class: "pure-button",
                style: cF( c=> "background:" + (c.md.clicks % 2 == 0? "cyan":"yellow")),
                onclick: me => ++me.clicks,
                content: cF( c=> "++Plus "+c.md.clicks)},
            {name: "plus-1",
                clicks: cI(0)})
    ]
);


bits.push(() => section(
        h2("Inter-object Data Flow"),
        pre("The world is our data flow oyster.\n\n" +
            "'fmUp' searchs up the family of Matrix objects to find 'plus-1'.\n" +
            "There is quita lot of family search capability in the Matrix API,\n" +
            "but in the end we are just traversing a simple tree of parent/kids\n" +
            "with a matching function to find a desired other Matrix object\n" +
            "bearing information we seek."),

    pre({class: 'cody'}, "button({onclick: me => ++me.clicks},\n\
    {name: 'plus-1',\n\
     clicks: cI(0)}, '++Oysters'),\n\n\
p({content: cF( c=> `We will have ${c.md.fmUp('plus-1').clicks} oysters, please.`)}))"),

        button({onclick: me => ++me.clicks},
            {name: "plus-1",
                clicks: cI(0)}, "++Oysters"),

        p({content: cF( c=> `We will have ${c.md.fmUp("plus-1").clicks} oysters, please.`)})));



// button({onclick: me => ++me.clicks, "++Plus ")},
//     {name: "plus-1",
//         clicks: cI(0)}),
//     h1({content: cF( c=> "Bam "+ c.md.fmUp("plus-1").clicks)}))

// ----------------------------------------------------------
// ----------------------------------------------------------
// --- below, the code that manages this pen ----------------
// ----------------------------------------------------------
// ----------------------------------------------------------


const bit = cFI( c=> {let r = window.localStorage.getObject("CPMatrixIntro.bit");
                    return r === null ? 0 : (r < 0? 0: (r >= bits.length? bit.length -1: r));},
    // we use an observer to persist the current "bit" number so page reloads pick up where we left off
    { observer: (n, md, newv ) => window.localStorage.setObject("CPMatrixIntro.bit", newv)});

function CPMatrixIntro () {
    return [
        div({style: {background: "#fdfdfd",
            display: "flex",
            flex_direction: "row",
            align_items: "center"}},
            controls),
        div( c=> bits[bit.v])];
}

window['CPMatrixIntro'] = CPMatrixIntro;

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
var controls = [
    button({class: cF( c=> "pure-button " +  ( c.md.disabled ? "pure-button-disabled":"")),
            disabled: cF( ()=> bit.v <= 0),
            onclick: c=> --bit.v},
        "Back"),
    div( {style: "margin:8px"}, nTabs( bits.length)),
    button({class: cF( c=> "pure-button " +  ( c.md.disabled ? "pure-button-disabled":"")),
            disabled: cF( c=> bit.v >= bits.length - 1),
            onclick: c=> ++bit.v}
        , "Next")];

// document.body.innerHTML =  tag2html( page());

