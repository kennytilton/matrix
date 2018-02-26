var bits = new Array();

var b0 = "\
section({class: 'todoapp'},\n\
   header({class: 'header'},\n\
      h1('todos'))),\n\
\n\
footer({class: 'info'},\n\
   ['Double-click the text of a todo to change it',\n\
    'Created by &lt;a href='http://tiltontec.com'&gt;Kenneth Tilton', \n\
    'Inspired by &lt;a href='http://todomvc.com'&gt;TodoMVC</a>']\n\
    .map( s => p({},s)))";

bits.push(() => [
    b0,
    ["mxWeb&trade; function signatures mirror HTML tag syntax.",
    "Meaning a graphic designer could learn mxWeb.",
    "JSX? Bah. We code straight JS.",
    "Meaning 'No toolchain required'. Toolchains bite."],

    [section({ class: "todoapp"},
        header({class: "header"},
            h1("todos"))),

    footer({class: "info"},
        // Look, Ma! No JSX! No toolchain! Standard JS....
        ['Double-click the text of a todo to change it',
         'Created by <a href=\"http://tiltontec.com\">Kenneth Tilton',
         'Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>']
            .map( s => p({},s)))]]);

var csCredits = "\
function credits (attrs, ...content) {\n\
    return footer(Object.assign({}, {class: 'info'}, attrs),\n\
        // Look, Ma! No JSX! No toolchain! Standard JS....\n\
        content.map( s => p({},s)));\n\
}\n\n\
bits.push(() => [\n\
    section({ class: 'todoapp'},\n\
        header({class: 'header'},\n\
            h1('todos'))),\n\
    credits({style: 'font-size:18px'},\n\
        'Double-click the text of a todo to change it',\n\
        'Created by &lt;a href='http://tiltontec.com'&gt;Kenneth Tilton',\n\
        'Inspired by &lt;a href='http://todomvc.com'&gt;TodoMVC&lt;/a&gt;'])";

function credits (attrs, ...content) {
    return footer(Object.assign({}, {class: "info"}, attrs),
        // Look, Ma! No JSX! No toolchain! Standard JS....
        content.map( s => p({},s)));
}

bits.push(() => [
    csCredits,
    ["This is just JS, so we can write our own DOM functions aping HTML syntax...",
    "...meaning the W3C can stop working on <a href='https://developer.mozilla.org/en-US/docs/Web/Web_Components'>Web Components</a>."],

    [section({ class: "todoapp"},
        header({class: "header"},
            h1("todos"))),

    credits({style: "font-size:18px"},
        "Double-click the text of a todo to change it",
        "Created by <a href='http://tiltontec.com'>Kenneth Tilton",
        "Inspired by <a href='http://todomvc.com'>TodoMVC</a>")]]);

// ----------------------------------------------------------
// ----------------------------------------------------------
// --- below, the code that manages this pen ----------------
// ----------------------------------------------------------
// ----------------------------------------------------------


const bit = cFI( c=> {let r = window.localStorage.getObject("CPMatrixTodo.bit");
        return r === null ? 0 : (r < 0? 0: (r >= bits.length? bit.length -1: r));},
    // we use an observer to persist the current "bit" number so page reloads pick up where we left off
    { observer: (n, md, newv ) => window.localStorage.setObject("CPMatrixTodo.bit", newv)});

function bitAssemble( bit) {
    var codeString, notes, code;
    [codeString, notes, code] = bit();
    return [
        pre({class: 'cody'}, codeString),
        div( code),
        h2("Nota bene:"),
        ul( {style: "font-size:18px"},
            notes.map( n=> li( n)))
    ];
}
function CPMatrixTodo () {
    return [
        div({style: {background: "#fdfdfd",
                display: "flex",
                flex_direction: "row",
                align_items: "center"}},
            controls),
        div( c=> bitAssemble( bits[bit.v]))];
}

window['CPMatrixTodo'] = CPMatrixTodo;

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

