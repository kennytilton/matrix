// -------------------------------------------------------------
// --- first, the application without the application within ---

var categories = ['chat', 'code', 'bulk'];
var nubits = {};
categories.map( c=> nubits[c] = {});

var chats = {};
var sources = {};
var bitIds = ['preface', 'justhtml', 'webco', 'dynodom'];

var bits = new Array;

function defit (category, id, b) {
    if (!categories.includes(category))
        throw 'defbit> undefined category '+category;
    if (!bitIds.includes(id))
        throw 'defbit> undefined bit '+id;
    clg('hunh', category, id, nubits.category);
    nubits[category][id] = ()=>b;
}

function getit (category, id, b) {
    if (!categories.includes(category))
        throw 'getit> undefined category ' + category;
    if (!bitIds.includes(id))
        throw 'getit> undefined bit ' + id;
    return nubits[category][id]();
}

function defbit (id, b) { defit( 'bulk', id, b)}
function getbit( id) { return getit('bulk', id)}

function defchat (id, b) { defit( 'chat', id, b);}
function getchat( id) { return getit('chat', id)}

function defcode (id, b) { defit( 'code', id, b);}
function getcode( id) { return getit('code', id)}


// ------------------------------------------------------------------
// --- we "lift" localStorage into the Matrix. To a degree. ---------

const bit = cFI( c=> {
        let r = window.localStorage.getObject("CPMatrixTodo.bit");
        return r === null ? 0 : (r < 0? 0: (r >= bitIds.length? bit.length -1: r));
    },
    // we use an observer to persist the current "bit" number so page reloads pick up where we left off
    { observer: (n, md, newv ) => window.localStorage.setObject("CPMatrixTodo.bit", newv)});

// --- main ------------------------------------------
function CPMatrixTodo () {
    return [
        h1("Introducing Matrix&trade; and mxWeb&trade;"),
        toolbar(),
        div( c=> bitAssemble( bitIds[bit.v])),
        toolbar()
        //, h4("Cool")
    ];
}

window['CPMatrixTodo'] = CPMatrixTodo;

function bitAssemble( bid) {
    let codeString = getcode( bid),
        chat = getchat( bid),
        b = getbit( bid);

    if ( b.initFn)
        b.initFn();

    return [
        div( b.mxDom),
        h2( b.title),
        newsprint( chat),
        b.notes? div( h3("Nota bene:"),
            ul( {class: "techwrite",
                    style: "list-style:square"},
                b.notes.map( note=> li( {style: {margin_bottom: "6px"}},
                    note)))): null,
        div( h3("Code Highlights"),
            pre({class: 'precode'}, codeString))
    ];
}

function newsprint( text) {
    /*
    This is a great example of a custom Web component.
    Not so much the quickly hacked implementation, but
    the idea itself of filling a void in HTML (flowing
    text into columns like a newspaper) with a function
    which, once evolved, becomes a permanent asset. And
    it just yields standard HTML/CSS. And no preprocessor
    is required.
     */
    let pgs = text.split("\n"),
        brk = null;

    for ( let n =0, chars = 0; n < pgs.length; ++n) {
        chars += pgs[n].length;
        if ( chars > text.length * .40) {
            brk = ++n;
            break;
        }
    }

    return div( {style: {display: "flex",
            flex_direction: "row"},
            class: "techwrite"},
        div({class: "narrativecol"},
            pgs.slice(0, brk).map( pgr => p(pgr))),
        div({class: "narrativecol",
                style: "border-left: 1px solid #aaa;"},
            pgs.slice(brk).map( pgr => p(pgr))));
}

function toolbar () {
    return div({
            style: {background: "#fdfdfd",
                //margin_left: "96px",
                width: "380px",
                display: "flex",
                flex_direction: "row",
                align_items: "center"}},
        controls)
}

var controls = [
    button({class: cF( c=> "pure-button " +  ( c.md.disabled ? "pure-button-disabled":"")),
            style: "margin-left:18px",
            disabled: cF( ()=> bit.v <= 0),
            onclick: c=> --bit.v},
        "Back"),
    div( {style: "margin:8px"}, nTabs( bitIds.length)),
    button({class: cF( c=> "pure-button " +  ( c.md.disabled ? "pure-button-disabled":"")),
            disabled: cF( c=> bit.v >= bitIds.length - 1),
            onclick: c=> ++bit.v}
        , "Next"),
    input({
        id: "logToggle",
        type: "checkbox",
        checked: domLogging,
        onchange: (mx,e) => domLogging = e.target.checked,
        style: "margin-left:24px;margin-right:9px"
    }),
    label(
        { for: "logToggle",
            title: "open the JS console to see logging of all DOM manipulation."},
        "DOM logging")];


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

// -----------------------------------------------------------------------------------------------------
// -------- The bits -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

defbit('preface',
    {
        title: "Preface",
        notes: [
            "Here is a complete <a target='_blank' href='https://github.com/kennytilton/webmx/tree/master/js'>" +
                        "TodoMVC</a> implementation.",
            "Pardon my CSS. And even my Javascript. I am a native Lisper.",
            "We have a ClojureScript version as well."],
        mxDom:
            [section({ class: "todoapp"},
                header({class: "header"},
                    h1("todos"))),
                center( "Coming soon, the app.")]
    });

defbit('justhtml',
    {
        title: "An All-Javascript HTML Work-alike. And fast.",
        notes: null,
        mxDom: [
        section({class: "todoapp"},
            header({class: "header"},
                h1("todos"))),
        footer({class: "info"},
            [
                "Created by <a href='http://tiltontec.com'>Kenneth Tilton",
                "Inspired by <a href='http://todomvc.com'>TodoMVC</a>"
            ].map(s => p({}, s)))]
    });

defbit( "webco",
     {
        title: "Web Components? Done.",
        mxDom: [
        section({ class: "todoapp"},
            header({class: "header"},
                h1("todos"))),
        credits({style: "font-size:18px"},
            "Created by <a href='http://tiltontec.com'>Kenneth Tilton",
            "Inspired by <a href='http://todomvc.com'>TodoMVC</a>")]
    });

var Todos;

function todoAddNewEZ (mx, e) {
    if (e.key === 'Enter') {
        let title = e.target.value.trim();
        e.target.value = null; // clear input either way

        if (title !== '') {
            // concat forces new array so Matrix detects change
            Todos.items = Todos.items.concat({
                title: title,
                completed: false,
                deleted: false
            });
        }
    }
}

function todoAppHeader ( newTodoHandler ) {
    return header({class: "header"},
                h1("todos"),
                input({
                    class: "new-todo",
                    autofocus: true,
                    placeholder: "Type an item to do and hit Return.",
                    onkeypress: newTodoHandler
                }));
}

function todoDashboardEZ ( ...plugins ) {
    return footer({
            class: "footer",
            hidden: cF( c => Todos.empty)},
        span({ class: "todo-count"},
            {content: cF(c => {
                let remCt = Todos.items.filter(todo => !(todo.completed || todo.deleted)).length;
                // Todo: return strong( `${remCt}item${remCt === 1 ? '' : 's'} remaining`);
                return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;
            })}),
        (plugins || []).map( p => p())
    );
}

defbit("dynodom",
    {
        title: "Enter Data Flow",
        notes: ["New: changing data drives changing DOM population...",
            "...rather inefficiently for now, regenerating all LIs each time. We fix that shortly.",
            "A new Web component provides a modest first dashboard.",
            "Another component handles the header."],
        initFn: ()=> Todos = mkm( null, "Todos", {
            items: cI( []),
            empty: cF( c=> c.md.items.filter( td=> !td.deleted).length ===0)
        }),
        mxDom: [
            section({class: "todoapp"},
                todoAppHeader( todoAddNewEZ),
                section({
                        class: "main",
                        hidden: cF(c => Todos.items.empty)
                    },
                    ul({class: "todo-list"},
                            c => Todos.items
                                .map(td => li({style: {padding: "9px"}},
                                    td.title)))),
                todoDashboardEZ())]
    });

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

class Todo extends Model {
    constructor( title ) {
        super( null, null,
            {
                title: cI( title),
                completed: cI( false),
                deleted: cI( false)
            });
    }
}

function todoAddNewBetter (mx, e) {
    if (e.key !== 'Enter') return;
    let title = e.target.value.trim();
    if (title !== '') {
        // concat forces new array so change detected
        Todos.items = Todos.items.concat( new Todo( title));
    }
    e.target.value = null;
}

function todoLI( c, todo, extras) {
    return li({
            class: cF(c => (todo.completed ? "completed" : null))},
        { todo: todo},
        div({class: "view"},
            input({
                class: "toggle",
                type: "checkbox",
                checked: cF( c=> todo.completed),
                onclick: ()=> todo.completed = !todo.completed})
            , label({ content: todo.title })
            , extras? extras( c, todo) : null
            , button({ class: "destroy",
                onclick: ()=> todo.deleted = true})));
}

var moFlowChat = "To-dos now have their own JS class along with individual Cell-powered properties, \
and a fancier LI where those properties can be manipulated.\
\n\
Add a to-do now and examine the LI.\
\n\
The faint circle to the left is where you toggle whether a to-do has been completed. \
If you toggle one, look for 'Clear completed' in the dashboard. That is a working button. \
Give it a go, if you like.\
\n\
Remember, the spec says to hide the dashboard if there are no items, completed or not. \
Watch for the dashboard to disappear when you delete the last remaining item.\n\
\n\
When you hover over a to-do, a red 'X' appears to the far right. Click that to \
permanently delete a to-do item.\
\n\
As you play, keep an eye on 'items remaining'.";

var moFlowCode = "\
class Todo extends Model {\n\
    constructor( title ) {\n\
        super( null, null,\n\
            {\n\
                title: title,\n\
                completed: cI( false),\n\
                deleted: cI( false)\n\
            });\n\
    }\n\
}\n\
\n\
function todoLI( c, todo) {\n\
  return li({ <u>class: cF(c => (todo.completed ? 'completed' : null))}</u>,\n\
    div({class: 'view'},\n\
        input({\n\
            class: 'toggle',\n\
            type: 'checkbox',\n\
            <u>checked: cF( c=> todo.completed),</u>\n\
            <b><i>onclick: ()=> todo.completed = !todo.completed}</i></b>)\n\
\n\
        , label({ content: todo.title})\n\
\n\
        , button({ class: 'destroy',\n\
                   <b><i>onclick: ()=> todo.deleted = true</i></b>})));\n\
}\n\
\n\
function clearCompleted () {\n\
    return button({ class: 'clear-completed',\n\
                    <u>hidden: cF(c => !Todos.items.filter(td => td.completed).length)</u>,\n\
            onclick: mx => Todos.items\n\
                             .filter( td => td.completed )\n\
                             .map( <b><i>td => td.deleted = true</i></b>)},\n\
        'Clear completed');\n\
}";

function clearCompleted () {
    return button({ class: "clear-completed",
            hidden: cF(c => !Todos.items.filter(td => td.completed).length),
            onclick: mx => Todos.items.filter( td => td.completed ).map( td => td.deleted = true)},
        "Clear completed");
}

bits.push(
    function () {
        return {
            title: "To-Do properties join the data flow",
            chat: moFlowChat,
            code: moFlowCode,
            notes: ["Reactive data flow now includes model as well as view.",
                "Data flow connects the separate concerns of model and view.",
                "A simple derived 'empty' property keeps us DRY."],
            initFn: ()=> Todos = mkm( null, "Todos", {
                items: cI( [new Todo( "Wash car")]),
                empty: cF( c=> c.md.items.length===0)}),
            mxDom: [
                section({class: "todoapp"},
                    todoAppHeader( todoAddNewBetter),
                    section({
                            class: "main",
                            hidden: cF(c => Todos.empty)
                        },
                        ul({class: "todo-list"},
                            c => Todos.items
                                .filter(todo => !todo.deleted)
                                .map(td => todoLI( c, td )))),
                    todoDashboardEZ(clearCompleted))]
        }
    });

var xhrCode = "\
section({class: 'todoapp'},\n\
   todoAppHeader( todoAddNewBetter),\n\
   section({ class: 'main',\n\
             hidden: cF(c => Todos.empty)},\n\
      ul({ class: 'todo-list'},\n\
         { kidValues: cF(c => Todos.items),\n\
           kidKey: k => k.todo,\n\
           kidFactory: (c,td) => todoLI(c, td, aeAlertGI)},\n\
        c => c.kidValuesKids())),\n\
      todoDashboardEZ(clearCompleted))\n\
      \n\
function aeAlertGI ( c, todo ) {\n\
    return i( { class: 'aes material-icons md-36',\n\
                style: 'font-size:36px;color:red;background:white',\n\
                hidden: cF( c=> !c.md.aeInfo),\n\
                onclick: mx => alert( mx.aeInfo)},\n\
              { lookup: cF( c=> new mxXHR( aeBrandURI( todo.title),\n\
                                           { send: true,\n\
                                             delay: 500 + Math.random(5)*1000})),\n\
    \n\
                aeInfo: cF( function (c) {\n\
                    let xhr = c.md.lookup.xhr;\n\
                    if ( xhr) {\n\
                        if ( xhr.isSuccess() ) {\n\
                            let obj = xhr.getResponseJson();\n\
                            return obj.meta.results.total + ' Adverse Events found on FDA.gov';\n\
                        } else {\n\
                            return null;\n\
                        }\n\
                    }\n\
                })},\n\
           'warning')\n\
}\n\
\n\
function aeBrandURI (brand) {\n\
    return `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:${ brand }&limit=3`\n\
}\n\
";

bits.push(
    function () {
        return {
            title: "XHR joins the data flow",
            chat: xhrChat,
            code: xhrCode,
            notes: [
                "Reactive data flow now includes XHR as well as view.",
                "The mxXHR 'lift' was hacked just enough to support this panel. More to come.",
                "'kidValues' mechanism avoids even rebuilding existing proxies."],
            initFn: ()=> Todos = mkm( null, "Todos", {
                items: cI( ["adderall", "Yankees", "water", "aspirin"].map(td=> new Todo( td))),
                empty: cF( c=> c.md.items.length===0)}),
            mxDom: [
                section({class: "todoapp"},
                    todoAppHeader( todoAddNewBetter),
                    section({
                            class: "main",
                            hidden: cF(c => Todos.empty)
                        },
                        ul({class: "todo-list"},
                            {
                                kidValues: cF(c => Todos.items),
                                kidKey: k => k.todo,
                                kidFactory: (c,td) => todoLI(c, td, aeAlertGI)
                            },
                            c => c.kidValuesKids())),
                    todoDashboardEZ(clearCompleted))]
        }
    });

function aeBrandURI (brand) {
    return `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:${ brand }&limit=3`
}

function aeAlertGI ( c, todo ) {
    return i( {
                class: "aes material-icons md-36",
                hidden: cF( c=> !c.md.aeInfo),
                onclick: mx => alert( mx.aeInfo),
                style: "font-size:36px;color:red;background:white"
                },
        {
            lookup: cF( c=> new mxXHR( aeBrandURI( todo.title), {
                send: true,
                delay: 500 + Math.random(5)*1000})),

            aeInfo: cF( function (c) {
                let xhr = c.md.lookup.xhr;
                if ( xhr) {
                    if ( xhr.isSuccess() ) {
                        let obj = xhr.getResponseJson();
                        return obj.meta.results.total+ " Adverse Events found on FDA.gov";
                    } else {
                        return null;
                    }
                }
            })
        },
        "warning")
}
function aeAlertSVG () {
    return svg({
            class: "aes",
            style: "width:24px;height:24px",
            viewBox: "0 0 24 24"
        },
        path({
            fill: "#000000",
            d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"}))
}
// -------------------------------------------------------------
var xhrChat = "Callback Hell? In the imperative paradigm, yes. \
But the data flow paradigm is all about managing application state \
gracefully after asynchronous inputs. So...XHR is right in the data flow wheelhouse:\
\n\
We drive this home by forcing a fake delay of two seconds. Whenever the \
request returns, the response handler simply assigns the response to the \
appropriate input Cell. Matrix internals then propagate the change as \
with any other input.\
\n\
Here we pointlessly take the to-do item and look it up in the \
FDA.gov adverse events database. If you see the warning icon, give \
it a click.\
\n\
FDA.gov is aggressive about matching, so 'Wash car' will find results. \
And all drugs have adverse events, so do not be concerned by <i>any</i> results.";

// --------------------------------------------------------------------
// ----- Text Content -------------------------------------------------
defchat( 'preface',
    "Welcome to the development of an application within an application, each built \
on just HTML, CSS, and a fine-grained data flow system we call Matrix.\
\n\
The application developed will cover half the classic \
<a target='_blank' href='https://github.com/tastejs/todomvc/blob/master/app-spec.md'>TodoMVC spec</a> and \
appear live above. Code highlights from the pen will appear below.\
\n\
The first hundred lines of the source comprise the host application.\
\n\
Please check the notes below, then hit 'Next' to get started.");

defcode( 'preface',
    "All tag functions have the signature:\n\
  <i>tag</i>([<i>HTML attributes</i>, [<i>custom properties</i>,]] <i>children*</i>)\n\
\n\n\
section({class: 'todoapp'},\n\
   header({class: 'header'},\n\
      h1('todos'))),\n\
\n\
   p('The working app will appear here.')");

/// --- justhtml ----------------------------------------------------------------------

defcode('justhtml',
    "section({class: 'todoapp'},\n\
       header({class: 'header'},\n\
          h1('todos'))),\n\
    \n\
    footer({class: 'info'},\n\
       ['Created by &lt;a href='http://tiltontec.com'&gt;Kenneth Tilton', \n\
        'Inspired by &lt;a href='http://todomvc.com'&gt;TodoMVC</a>']\n\
        .map( s => p({},s)))");

defchat('justhtml',
    "A design imperative of mxWeb is to work so much \
like HTML that graphic designers can write it.\
\n\
Where we come up short, please file an RFE.\n\
\n\
mxWeb is also developer-friendly; we just code JS because <i>all</i> mxWeb authoring \
is just JS.\
\n\
As for speed, the point granularity of the data flow tells mxWeb \
precisely the DOM updates needed, avoiding VDOM diffing.\
\n\
Turn on 'DOM Logging' in our toolbar and open the JS console to track the action.");

/// --- webco - web components -------------------------------------------------------

defcode("webco", "\
function credits (attrs, ...content) {\n\
    return footer(Object.assign({}, {class: 'info'}, attrs),\n\
        content.map( s => p({},s)));\n\
}\n\n\
section({ class: 'todoapp'},\n\
   header({class: 'header'},\n\
      h1('todos'))),\n\
credits({style: 'font-size:18px'},\n\
   'Created by &lt;a href='http://tiltontec.com'&gt;Kenneth Tilton',\n\
   'Inspired by &lt;a href='http://todomvc.com'&gt;TodoMVC&lt;/a&gt;'])");

function credits (attrs, ...content) {
    return footer(Object.assign({}, {class: "info"}, attrs),
        // Look, Ma! No JSX! No toolchain! Standard JS....
        content.map( s => p({},s)));
}

defchat("webco",
    "Since we just code JS, developing a custom HTML element is as easy as writing a function. \
That function can take whatever parameters we like to make it as reusable as we like. \
\n\
With the same reuse objective, <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/Web_Components'>Web Components</a> look \
promising, but JS functions will be hard to top. \
\n\
The function 'credits' in the code below is a trivial example.");

defcode('dynodom', "\
Glossary:\n\
   - 'cI' creates an 'input' Cell.\n\
   - 'cF' creates a 'formula' Cell.\n\
   - 'mkm' makes a model (object with cells for properties)\n\
\n\
Todos = mkm( null, 'Todos', {\n\
            items: cI( []),\n\
            <b>empty: cF( c=> <i>c.md.items</i>.filter( td=> !<i>td.deleted</i>).length ===0)</b>\n\
        })\n\
\n\
section({class: 'todoapp'},\n\
  todoAppHeader( todoAddNewEZ),\n\
    section({\n\
            class: 'main',\n\
            <b>hidden: cF(c => <i>Todos.empty</i></b> )\n\
        },\n\
        ul({class: 'todo-list'},\n\
            c => Todos.items\n\
                .map(td => li({style: {padding: '9px'}},\n\
                              td.title)))),\n\
    todoDashboardEZ())\n\
\n\
function todoAddNewEZ (mx, e) {\n\
    if (e.key === 'Enter') {\n\
        let title = e.target.value.trim();\n\
        e.target.value = null; // clear input either way\n\
\n\
        if (title !== '') {\n\
            // concat forces new array so Matrix detects change \n\
            <b>Todos.items = Todos.items.concat({\n\
                title: title,\n\
                completed: false,\n\
                deleted: false\n\
            })</b>;\n\
        }\n\
    }\n\
}\n\
\n\
function todoAppHeader ( newTodoHandler ) {\n\
    return header({class: 'header'},\n\
                h1('todos'),\n\
                input({\n\
                    class: 'new-todo',\n\
                    autofocus: true,\n\
                    placeholder: 'Type an item to do and hit Return.',\n\
                    onkeypress: newTodoHandler\n\
                }));\n\
}\n\
\n\
function todoDashboardEZ ( ...plugins ) {\n\
    return footer({\n\
            class: 'footer',\n\
            <b>hidden: cF( c => <i>Todos.empty</i>)</b>},\n\
        span({ class: 'todo-count'},\n\
            {<b>content: cF(c => {\n\
                let remCt = <i>Todos.items</i>.filter(todo => !(<i>todo.completed</i> || <i>todo.deleted</i>)).length;\n\
                // Todo: return strong( `${remCt}item${remCt === 1 ? '' : 's'} remaining`);\n\
                return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;</b>\n\
            })}),\n\
        (plugins || []).map( p => p())\n\
    );\n\
}");

defchat( "dynodom", "\
Now to data flow: a change to the model triggers \
changed view content, including new DOM elements. \
\n\
A new to-do requires a new LI element. The first to-do requires a dashboard \
be unhidden. The dashboard shows a count of the items.\
\n\
Try it, if you like; the app within the app is live.\n\
\n\
Note the transparency of the data flow in the code below. Well, you \
cannot, it is transparent, so we highlighted the implicit pub/sub.");


// document.body.innerHTML =  tag2html( page());

