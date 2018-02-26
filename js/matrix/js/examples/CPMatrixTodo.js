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

bits.push([
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
        ["Double-click the text of a todo to change it",
         "Created by <a href='http://tiltontec.com'>Kenneth Tilton",
         "Inspired by <a href='http://todomvc.com'>TodoMVC</a>"]
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

bits.push([
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

function todoCredits () {
    return credits({style: "font-size:12px"},
        "Double-click the text of a todo to change it",
        "Created by <a href='http://tiltontec.com'>Kenneth Tilton",
        "Inspired by <a href='http://todomvc.com'>TodoMVC</a>")
}
var TodosLite = cI([]);

function todoLiteAddNew (mx, e) {
    if (e.key !== 'Enter') return;
    let title = e.target.value.trim();
    if (title !== '') {
        // concat forces new array so change detected
        TodosLite.v = TodosLite.v.concat({title: title, completed: false});
    }
    e.target.value = null;
}

var enterTodos = "\
var TodosLite = cI([]);\n\n\
function todoLiteAddNew (mx, e) {\n\
    if (e.key !== 'Enter') return;\n\
    let title = e.target.value.trim();\n\
    if (title !== '') {\n\
        TodosLite.v = TodosLite.v.concat({title: title,\n\
                                          completed: false});\n\
    }\n\
    e.target.value = null;\n\
}\n\n\
section({ class: 'todoapp'},\n\
        header({class: 'header'},\n\
            h1('todos'),\n\
            input({ class: 'new-todo',\n\
                autofocus: true,\n\
                placeholder: 'What needs doing?',\n\
                onkeypress: todoLiteAddNew}))),\n\
     section({ class: 'main',\n\
                hidden: cF( c => TodosLite.v.length === 0)},\n\
         ul({ class: 'todo-list'},\n\
             c=> TodosLite.v.map( td => li( td.title))))";

bits.push([
    enterTodos,
    ["New: changing data drives changing DOM population...",
        "...rather inefficiently for now, regenerating all LIs each time. We can fix that.",
        "For a standalone cell like TodosLite, we have to use the property 'v' for gets and writes.",
        "We use JS concat instead of push to force a new array so ...",
        "... data flow internals will detect the change (default unchanged test is ===)."],

    [section({ class: "todoapp"},
        header({class: "header"},
            h1("todos"),
            input({ class: "new-todo",
                autofocus: true,
                placeholder: "What needs doing?",
                onkeypress: todoLiteAddNew}))),
     section({ class: "main",
                hidden: cF( c => TodosLite.v.length === 0)},
         ul({ class: "todo-list"},
             c=> TodosLite.v.map( td => li( td.title)))),
    todoCredits()]]);

class Todo extends Model {
    constructor( title ) {
        super( { title: cI( title),
                completed: cI( false)})
    }
}


function todoBetterAddNew (mx, e) {
    if (e.key !== 'Enter') return;
    let title = e.target.value.trim();
    if (title !== '') {
        // concat forces new array so change detected
        TodosLite.v = TodosLite.v.concat( new Todo( title));
    }
    e.target.value = null;
}

bits.push([
    enterTodos,
    ["We drop the credits to save real estate."],

    [section({ class: "todoapp"},
        header({class: "header"},
            h1("todos"),
            input({ class: "new-todo",
                autofocus: true,
                placeholder: "What needs doing?",
                onkeypress: todoBetterAddNew}))),
        section({ class: "main",
                hidden: cF( c => TodosLite.v.length === 0)},
            ul({ class: "todo-list"},
                c=> TodosLite.v.map( td => li( td.title))))]]);

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
    [codeString, notes, code] = bit;
    return [
        div( {style: { margin_top: "36px",
                        display: "flex",
                        flex_direction: "row"}},
            div( b("Code Highlights"), pre({class: 'precode'}, codeString)),
            div( code)),
        h2("Nota bene:"),
        ul( {class: "techwrite",
                style: "font-size:18px;list-style:square"},
            notes.map( note=> li( {style: {margin_bottom: "6px"}},
                note)))
    ];
}
function CPMatrixTodo () {
    return [
        h1("Introducing Matrix&trade; and mxWeb&trade;"),
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
                + (ii===bit.v? "cyan":""))}, ""+i));
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

