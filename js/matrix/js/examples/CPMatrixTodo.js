// ----------------------------------------
// --- driver app initialization ----------
cellsReset();

var categories = ['chat', 'code', 'main'];
var nubits = {};
categories.map( c=> nubits[c] = {});

var chats = {};
var sources = {};
var bitIds = ['preface', 'justhtml', 'webco', 'dynodom', 'ktodo',
                'xhr', 'yourturn', 'summary'];

var bits = new Array;

function defit (category, id, it) {
    if (!categories.includes(category))
        throw 'defbit> undefined category '+category;
    if (!bitIds.includes(id))
        throw 'defbit> undefined bit '+id;

    nubits[category][id] = it;
}

function getit (category, id, b) {
    if (!categories.includes(category))
        throw 'getit> undefined category ' + category;
    if (!bitIds.includes(id))
        throw 'getit> undefined bit ' + id;

    return nubits[category][id];
}

function defbit (id, b) { defit( 'main', id, b)}
function getbit( id) { return getit('main', id)()}

function defchat (id, b) { defit( 'chat', id, b);}
function getchat( id) { return getit('chat', id)}

function defcode (id, b) { defit( 'code', id, b);}
function getcode( id) { return getit('code', id)}

// ------------------------------------------------
// -------- The bits ------------------------------
// ------------------------------------------------

defbit('preface',
    ()=>{return {
            title: "Preface",
            notes: [
                "The last hundred lines of the source comprise the host application, itself a demonstration of mxWeb.",
                "Here is a complete <a target='_blank' href='https://github.com/kennytilton/webmx/tree/master/js'>" +
                            "TodoMVC</a> implementation.",
                "Pardon my CSS. And even my Javascript. I am a native Lisper.",
                "We have a ClojureScript version as well."],
            mxDom:
                [section({ class: "todoapp"},
                    header({class: "header"},
                        h1("todos"))),
                    center( "Coming soon, the app.")]
    }});

defbit('justhtml',
    ()=>{return {
        title: "An All-JS, HTML Work-alike. And fast.",
        notes: null,
        mxDom: [
        section({class: "todoapp"},
            header({class: "header"},
                 h1("todos"))),
        footer({class: "info"},
            [
                "Created by <a href='http://tiltontec.com'>Kenneth Tilton",
                "Inspired by <a href='http://todomvc.com'>TodoMVC</a>"
            ].map(s => p({}, s)))
        ]
    }});

/// --- webco - Web Components -------------------------------
///

function credits (attrs, ...content) {
    return footer(Object.assign({}, {class: "info"}, attrs),
        // Look, Ma! No JSX! No toolchain! Standard JS....
        content.map( s => p({},s)));
}

defbit( "webco",
    ()=>{return {
        title: "Web Components Accompli",
        mxDom: [
        section({ class: "todoapp"},
            header({class: "header"},
                h1("todos"))),
        credits({style: "font-size:18px"},
            "Created by <a href='http://tiltontec.com'>Kenneth Tilton",
            "Inspired by <a href='http://todomvc.com'>TodoMVC</a>")]
    }});

class TodoList extends Model {
    constructor( titles ) {
        super( null, "TodoList",
            {
                items: cI( titles? titles.map( t=> new Todo(t)):[]),
                empty: cF( c=> c.md.items.length ===0),
                done: cF( c=> c.md.items.filter( td=> td.completed)),
                undone: cF( c=> c.md.items.filter( td=> !td.completed))
            });
        this.awaken();
    }
    add (td) {
        // if we mutate 'items', data flow internals will not see the change
        let newv = this.items.slice(0);
        newv.push( td);
        this.items = newv;
        return this;
    }
    delete (td) {
        // if we mutate 'items', data flow internals will not see the change
        let tdx = this.items.indexOf( td);
        if (tdx === -1) return;
        let is = this.items.slice(0);
        is.splice( tdx, 1);
        this.items = is;
        return this;
    }
}


var Todos;

function todoAddNewEZ (mx, e) {
    if (e.key === 'Enter') {
        let title = e.target.value.trim();
        e.target.value = null; // clear input either way

        if (title !== '') {
            Todos.add({
                title: title,
                completed: false
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
    return footer({ class: "footer",
                    hidden: cF(  c => Todos.empty )},
            span({ class: "todo-count"},
                 { content: cF(c => {
                                let remCt = Todos.undone.length;
                                return `${remCt} item${remCt === 1 ? '' : 's'} remaining`;
                    })}),
        (plugins || []).map( p => p())
    );
}

/// dynodom - DOM driven by data flow --------------------

defbit("dynodom",
    ()=>{return {
        title: "Enter Data Flow",
        notes: ["To-do LIs are all regenerated to accommodate one new to-do. We fix that shortly.",
            "Component functions break up the code as well as offer re-use."],
        initFn: ()=> Todos = new TodoList,
        mxDom: [
            section({class: "todoapp"},
                todoAppHeader( todoAddNewEZ),
                section({
                        class: "main",
                        hidden: cF(c => Todos.empty)
                    },
                    ul({class: "todo-list"},
                            c => Todos.items
                                    .map(td => li({style: {padding: "9px"}},
                                            td.title)))),
                todoDashboardEZ())]
    }});

// ----------------------------------------------------------
// --- ktodo - To-do gets its own data flow properties ------

class Todo extends Model {
    constructor( title ) {
        super( null, null,
            {
                title: title, // no editing this version
                completed: cI( false)
            });
            }
    delete () {
        Todos.delete( this);
    }
}

function todoAddNewBetter (mx, e) {
    if (e.key !== 'Enter') return;
    let title = e.target.value.trim();
    if (title !== '') {
        Todos.add( new Todo( title));
    }
    e.target.value = null;
}

function todoLI( attrs, c, todo, extras) {
    return li( Object.assign( { class: cF(c => (todo.completed ? "completed" : null))}, attrs),
            { todo: todo},
            div({class: "view"},
                input({ class: "toggle",
                        type: "checkbox",
                        checked: cF( c=> todo.completed),
                        onclick: ()=> todo.completed = !todo.completed})
                , label({ content: todo.title })
                , extras? extras( c, todo) : null
                , button({ class: "destroy",
                            onclick: ()=> todo.delete()})))
}

function clearCompleted () {
    return button({ class: "clear-completed",
                    hidden: cF(c=> Todos.done.length === 0),
                    onclick: mx => Todos.done.map( td=> td.delete())},
            "Clear completed");
}

// --- ktodo -- Individual properties of To-dos are cells -------
defbit('ktodo',
    ()=>{return {
        title: "To-Do properties join the data flow",
        initFn: ()=> {
            Todos = new TodoList(["Wash car"]);
        },
        mxDom: [
            section({class: "todoapp"},
                todoAppHeader( todoAddNewBetter),
                section({ class: "main",
                            hidden: cF( c=> Todos.empty)},
                    ul({class: "todo-list"},
                        c => Todos.items.map(td => todoLI( {}, c, td )))),
                todoDashboardEZ(clearCompleted))]
    }});

// --- xhr ---------------------------------------------------------

defbit('xhr',
    ()=>{return {
        title: "XHR joins the data flow",
        notes: [
            "The JS mxXHR lift into the Matrix was hacked just enough to support this panel.",
            "The 'kidValues' mechanism avoids rebuilding existing DOM and even proxies."],
        initFn: ()=> {
            Todos = new TodoList(["adderall", "Yankees"]);
        },
        mxDom: [
            section({class: "todoapp"},
                todoAppHeader( todoAddNewBetter),
                section({
                        class: "main",
                        hidden: cF( c=> Todos.empty)
                    },
                    ul({class: "todo-list"},
                        {
                            kidValues: cF(c => Todos.items),
                            kidKey: k => k.todo,
                            kidFactory: (c,td) => todoLI({}, c, td, aeAlertGI)
                        },
                        c => c.kidValuesKids())),
                todoDashboardEZ(clearCompleted))]
    }});

function aeBrandURI (brand) {
    return `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:${ brand }&limit=3`
}

function aeAlertGI ( c, todo ) {
    return i( {
                class: "aes material-icons md-36",
                hidden: cF( c=> c.md.aeInfo===null),
                style: cF(  c => { return { display: Todos.empty? "none":"block",
                                    font_size: "36px",
                                    color: "red",
                                    background: "white"}}),
                onclick: mx => alert( mx.aeInfo),
                },
        {
            lookup: cF( c=> new mxXHR( aeBrandURI( todo.title), {
                send: true,
                delay: 500 + Math.random(5)*1000})),

            aeInfo: cF( function (c) {
                let xhr = c.md.lookup.xhr;
                clg('xhr????', xhr)
                if ( xhr) {
                    clg('xhr!!!', xhr.status)
                    if ( xhr.isSuccess() ) {
                        let obj = xhr.getResponseJson();
                        return obj.meta.results.total + ' Adverse Events found on FDA.gov';
                    } else {
                        return null;

                    }

                    /*if (xhr.status === 200) {
                        let obj = xhr.response;
                        return obj.meta.results.total + " Adverse Events found on FDA.gov";
                    } else {
                        return null;
                    }*/
                } else {
                    return null;
                }
            })
        },
        "warning")
}

function todoMatchesFilter( td, filter ) {
    return filter==="All"
        || (filter==="Active" && !td.completed)
        || (filter==="Completed" && td.completed);
}

function fmK( from, className, how) {
    return from.fmUp( mx=>mx.class === className)
}

// --- yourturn: An exercise for you to try ---------------------

defbit('yourturn',
    ()=>{return {
        title: "Your turn!",
        notes: null,
        initFn: ()=> {
            Todos = new TodoList(["adderall", "Yankees", "Visine", "probiotics", "echinacea"]);
        },

        mxDom: [
            section({class: "todoapp"},
                todoAppHeader( todoAddNewBetter),
                section({ class: "main",
                        hidden: cF( c=> Todos.empty)},
                    ul({class: "todo-list"},
                        c => {
                            let f = fmK(c.md, "filters").selection;
                            return Todos.items
                                        //.filter(td=>todoMatchesFilter(td, f))
                                        .map( td=> todoLI( {hidden: cF( c=> !todoMatchesFilter( td, fmK(c.md, "filters").selection))}, c, td))
                        })),
                todoDashboardEZ( todoFilters, clearCompleted))]}});

function todoFilters () {
    return ul({class: "filters"},
        {selection: cI("All")},
        ['All', 'Active', 'Completed']
            .map(state => li(b({
                    class: cF(c => c.md.selected ? "selected" : ""),
                    onclick: mx => fmK(mx, "filters").selection = state
                },
                {
                    selected: cF(c => fmK(c.md, "filters").selection === state),
                    content: state
                }))))
}

/* --- counter ---------------------------------
var sillyCtr = cI(0);

defbit('cntr',
    ()=>{return {
        title: "Silly counter",
        mxDom: [
            h1({content: cF(c=>`clicked ${sillyCtr.v} times`)}),
            button({onclick: mx=> ++sillyCtr.v}, "click me!")]}});
*/

// ---------------------------------------------
// --- Summary ---------------------------------

defbit('summary',
    ()=>{return {
        title: "Summary: The Developer Experience",
        notes: null,
        code: null,
        mxDom:
            [
                section({ class: "todoapp"},
                    header({class: "header"},
                        h1("mxWeb"))),
                credits({style: "font-size:18px"},
                    "Created by <a target='_blank' href='mailto:ken@tiltontec.com'>Kenneth Tilton</a>",
                    "Part of the <a href='https://github.com/kennytilton/matrix/blob/master/js/matrix/readme.md'>Matrix System</a>")]
    }});


// --------------------------------------------------------------------
// ----- Text Content -------------------------------------------------

/// --- Your turn --------------------------

/*
defchat( 'yourturn', "Now it is your turn to try \
programming with data flow. You will notice some additions to the dashboard: widgets \
'All', 'Active', and 'Completed'. As you click them, they become highlighted in \
radio group fashion. But nothing else happens.\
\n\
Your mission is to make something else happen, namely, change which to-dos appear as the filter \
changes. The pen includes the 'matches' predicate shown below, as well as the code implementing \
the radio group effect. That contains the clues you need to complete the task.\
\n\
Some help: First, FYI, 'fmK' searches the Matrix tree (family, hence 'fm') for an element with the given \
class. That should just work for you.\
\n\
Second, hidden in the CSS of the pen are two solutions. One works via the hidden attribute on LIs, \
the other works by filtering the to-dos before generating the LIs.\
\n\
Good luck! If you need help, send <a target='_blank' href='mailto:ken@tiltontec.com'>me</a> a note.");
*/

defcode( 'yourturn', "\
function todoMatchesFilter( td, filter ) {\n\
    return filter==='All'\n\
        || (filter==='Active' && !td.completed)\n\
        || (filter==='Completed' && td.completed);\n\
}\n\
\n\
function todoFilters () {\n\
    return ul({class: 'filters'},\n\
            ['All', 'Active', 'Completed'].map( \n\
                state => li( b( { class: cF(c => c.md.selected ? 'selected' : ''),\n\
                                  onclick: mx => { mx.fmK('filters').selection = state}},\n\
                                { selected: cF(c => c.md.fmUp( 'app').selection === state),\n\
                                  content: state}))))\n\
}");


defchat( 'preface',
    "Welcome to the development of an application within an application, each built \
with mxWeb, a Web framework consisting of just HTML and CSS running within a \
fine-grained data flow system we call Matrix.\
\n\
The application developed will cover half the classic \
<a target='_blank' href='https://github.com/tastejs/todomvc/blob/master/app-spec.md'>TodoMVC spec</a> and \
appear live above.\
\n\
My focus will be the developer experience, but inquiring minds will wonder what is going on \
behind the scenes. <a target='_blank' href='https://github.com/kennytilton/matrix/blob/master/js/matrix/readme.md'>\
This will help.</a>\
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
        .map( s => p({},s)))"
);

defchat('justhtml',
    "A design imperative of mxWeb is to work so much \
like HTML that graphic designers can write it.\
\n\
Where we come up short, please file an RFE.\n\
\n\
mxWeb is also developer-friendly: we just code JS.\
\n\
As for speed, the point granularity of the data flow means \
we can make point DOM updates, avoiding VDOM and diffing.\
\n\
Turn on 'DOM Logging' in our toolbar and open the JS console to track the action."
);

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

defchat("webco",
    "Since we just code JS, developing a custom HTML element is as easy as writing a function. \
That function can take as many parameters as needed to support reuse. \
\n\
With the same reuse objective, <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/Web_Components'>Web Components</a> look \
promising, but JS functions will be hard to top. \
\n\
The function 'credits' in the code below is a trivial example. More interesting cases follow.");


// -------------------------------------------------------------------------------------
// -------------  dynodom --------------------------------------------------------------

defcode('dynodom', "\
Todos = mkm( null, 'Todos', {\n\
            items: cI( []),\n\
            <b>empty: cF( c=> <i>c.md.items</i>.filter( td=> !<i>td.deleted</i>).length ===0)</b>\n\
        })\n\
\n\
// the 'main' for this panel....\n\
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
            <strong>Todos.items = Todos.items.concat({\n\
                title: title,\n\
                completed: false,\n\
                deleted: false\n\
            })</strong>;\n\
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
                return `${remCt} item${remCt === 1 ? '' : 's'} remaining`;</b>\n\
            })}),\n\
        (plugins || []).map( plug => plug())\n\
    );\n\
}");

defchat( "dynodom", "\
And now data flow: a change to the model triggers \
changed view content, including new DOM elements. \
\n\
A new to-do requires a new LI element. The first to-do requires a dashboard \
be unhidden. The dashboard shows a count of the items.\
\n\
The app within the app is live. Try adding a to-do, if you like. \n\
\n\
Note the transparency with which data flow is accomplished. Well, you \
cannot. It is transparent. See the glossary for how we highlighted the implicit pub/sub.\
\n\
As promised, our components have gotten more interesting. One accepts a custom event\
handler, and the dashboard accepts optional plugin widgets.");

defchat('ktodo', "To-dos now have individual data flow properties, \
and a fancier LI where those properties can be manipulated.\
\n\
We pre-loaded a to-do for you. Feel free to add more.\
\n\
Toggle to-do completion with the faint circle to its left. \
Look for its styling to change. Look for 'items remaining' to change \
and for 'Clear completed' to come and go from the dashboard. That is a working button. \
Give it a go, if you like.\
\n\
The spec says to hide the dashboard if there are no items. \
Watch for the dashboard to disappear when you delete the last remaining item.\n\
\n\
When you hover over a to-do, a red 'X' appears to the far right. Click that to \
permanently delete a to-do item. Keep an eye on 'items remaining'.\
\n\
As an exercise, try to follow the declarative data flow chain of each behavior described.");

defcode('ktodo', "\
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
  return li({ <b>class: cF(c => (<i>todo.completed</i> ? 'completed' : null))}</b>,\n\
    div({class: 'view'},\n\
        input({\n\
            class: 'toggle',\n\
            type: 'checkbox',\n\
            <b>checked: cF( c=> <i>todo.completed</i>),</b>\n\
            <strong>onclick: ()=> todo.completed = !todo.completed}</strong>)\n\
\n\
        , label({ content: todo.title})\n\
\n\
        , button({ class: 'destroy',\n\
                   <strong>onclick: ()=> todo.deleted = true</strong>})));\n\
}\n\
\n\
function clearCompleted () {\n\
    return button({ class: 'clear-completed',\n\
                    <b>hidden: cF(c => !<i>Todos.items</i>.filter(td => <i>td.completed</i>).length)</b>,\n\
            onclick: mx => Todos.items\n\
                             .filter( td => td.completed )\n\
                             .map( <strong>td => td.deleted = true</strong>)},\n\
        'Clear completed');\n\
}");

defchat('xhr', "Callback Hell? In the imperative paradigm, yes.\n\
\n\
The data flow paradigm is all about propagating new inputs gracefully \
 to dependent application state, so asynchronous XHR completion handlers fit right in.\
\n\
We evince this with a random fake delay of up to several seconds. Whenever the \
request returns, the response handler simply assigns the response to the \
appropriate input Cell. Matrix internals handle the rest.\
\n\
In this example, we pointlessly look up each to-do title in the \
FDA.gov adverse events database. If you see the warning icon, give \
it a click.\
\n\
The FDA.gov search endpoint is aggressive about matching, so 'Wash car' will find results. \
And all drugs have adverse events, so do not be concerned by <i>any</i> results.\
\n\
This is a trivial callback scenario, but the data flow solution does scale. \
Here is my <a target='_blank' href='https://github.com/kennytilton/xhr/blob/master/cljs/xhr/XHR.md'>\
original investigation</a> into complex XHR via data flow.");


// --- xhr --------------------------------------------------------
defcode('xhr', "\
class mxXHR extends Model {\n\
    constructor( uri , options) {\n\
        super( null, 'mxXhr',\n\
            { uri: cI( uri),\n\
              xhr: cI( null)});\n\
    }\n\
\n\
    send( delay) {\n\
        let mxx = this;\n\
        goog.net.XhrIo.send( mxx.uri, function(e) {\n\
            withChg('xhrResult', ()=> <strong>mxx.xhr = e.target</strong>);\n\
        });\n\
        return mxx;\n\
    }\n\
}\n\n\
section({class: 'todoapp'},\n\
   todoAppHeader( todoAddNewBetter),\n\
   section({ class: 'main',\n\
             <b>hidden: cF(c => <i>Todos.empty</i>)</b>},\n\
      ul({ class: 'todo-list'},\n\
         { <b>kidValues: cF(c => <i>Todos.items</i>)</b>,\n\
           kidKey: k => k.todo,\n\
           kidFactory: (c,td) => todoLI({}, c, td, aeAlertGI)},\n\
        <b>c => <i>c.kidValuesKids()</i>)</b>),\n\
      todoDashboardEZ(clearCompleted))\n\
\n\
function aeAlertGI ( c, todo ) {\n\
    return i( { class: 'aes material-icons md-36',\n\
                style: 'font-size:36px;color:red;background:white',\n\
                <b>hidden: cF( c=> !<i>c.md.aeInfo</i>)</b>,\n\
                onclick: mx => alert( mx.aeInfo)},\n\
              { <b>lookup: cF( c=> new mxXHR( aeBrandURI( <i>todo.title</i>),\n\
                                           { send: true,\n\
                                             delay: 500 + Math.random(5)*1000}))</b>,\n\
    \n\
                <b>aeInfo: cF( function (c) {\n\
                    let <i>xhr = c.md.lookup.xhr</i>;\n\
                    if ( xhr) {\n\
                        if ( xhr.isSuccess() ) {\n\
                            let obj = xhr.getResponseJson();\n\
                            return obj.meta.results.total + ' Adverse Events found on FDA.gov';\n\
                        } else {\n\
                            return null;\n\
                        }\n\
                    }\n\
                })</b>},\n\
           'warning')\n\
}\n\
\n\
function aeBrandURI (brand) {\n\
    return `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:${ brand }&limit=3`\n\
}");


/// ------------------------------------------
/// --- Summary ------------------------------

defchat( 'summary',
    "All submissions to TodoMVC.com offer the same functionality, and most \
involve some reactive mechanism.\
\n\
The developer experience separates them.\
\n\
mxWeb requires only JS . No limits on expressiveness, no toolchain, yes rapid iteration.\
\n\
It is an un-framework, involving only thinly wrapped HTML and CSS. \
<a target='_blank' href='https://developer.mozilla.org/en-US/'>MDN</a> provides the reference manual.\
\n\
The reactive element so essential to UI development is transparent; just read \
and set properties normally and data flow emerges. \
mxWeb's prime objective is that the developer not have to think much about mxWeb.\
\n\
mxWeb draws us into building up that application in \
small semantic chunks, naturally decomposing complex UIs into simple, declarative formulas. \
Formulas refer freely to values from view, model, local storage, or the web. \
\n\
Why does a seamless developer experience matter?\
\n\
UI/UX programming involves more refactoring than original coding. No one knows how an interface feels \
until we try it. And then the requirements change, or the product succeeds and the requirements grow. \
Easier development means more time and energy for refactoring, and that means better UXes.\
\n\
If interested in this or the CLJS version, send <a target='_blank' href='mailto:ken@tiltontec.com'>me</a> a note");

// --- The driver app -----------------------------------------------
// ------------------------------------------------------------------
// --- we "lift" localStorage into the Matrix. To a degree. ---------

const currBitNo = cFI( c=> {
        let r = window.localStorage.getObject("CPMatrixTodo.bit");
        //clg('local bit no ', r);
        return r === null ? 0 : (r < 0? 0: (r >= bitIds.length? (bitIds.length - 1): r));
    },
    // we use an observer to persist the current "bit" number so page reloads pick up where we left off
    { observer: (n, md, newv ) => window.localStorage.setObject("CPMatrixTodo.bit", newv)});

// -------------------------------------------------------------------------------------
// --- Main ----------------------------------------------------------------------------

function CPMatrixTodo () {
    return [
        p({class: 'techtitular techtitle'}, "Introducing Matrix and mxWeb"),
        toolbar(),
        div( c=> bitAssemble( bitIds[currBitNo.v]))
        //toolbar()
    ];
}

window['CPMatrixTodo'] = CPMatrixTodo;

function codeGlossary() {
    return div( {style: "padding-left:12px;background:#f5f5f5"},
        ul( {class: "precode", style: "border:none;list-style:square;background:none"},
            [span("'cI' creates an input Cell"),
                span("'cF' creates a formulaic Cell"),
                span("'mkm' makes a model (object with cells for properties)"),
                i("Code that 'subscribes' to other data"),
                b("Code that computes derived data"),
                strong("Event code that feeds outside data into the Matrix flow")].map( g=> li(g))))
}

function bitAssemble( bid) {
    let codeString = getcode( bid),
        chat = getchat( bid),
        b = getbit( bid);

    if ( b.initFn) {
        b.initFn();
    }
    return [
        div( b.mxDom),
        p( {class: 'techtitular techsubtitle'}, b.title),
        newsprint( chat),
        b.notes? div( p({class: 'techheader'}, "Nota bene"),
            ul( {class: "techwrite",
                    style: "list-style:square"},
                b.notes.map( note=> li( {style: {margin_bottom: "6px"}},
                    note)))): null,

        codeString? [ div( p({class: 'techheader'}, "Code Highlights (glossary below)"),
            pre({class: 'precode'}, codeString)),
            div( p({class: 'techheader'}, "Code Glossary"),
                codeGlossary())] : null
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
    if (!text) return p("");

    let pgs = text.split("\n"),
        brk = null;

    for ( let n =0, chars = 0; n < pgs.length; ++n) {
        chars += pgs[n].length;
        if ( chars > text.length * 0.40) {
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
                margin_left: "24px",
                width: "400px",
                display: "flex",
                flex_direction: "row",
                align_items: "center"}},
        controls)
}
var nTabsStyle = "display:flex;flex-direction:row;margin:8px";
var controls = [
    button({class: cF( c=> "pure-button " +  ( c.md.disabled ? "pure-button-disabled":"")),
            style: "margin-left:18px",
            disabled: cF( ()=> currBitNo.v <= 0),
            onclick: c=> --currBitNo.v},
        "Back"),
    div( {style: nTabsStyle}, nTabs( bitIds.length)),
    button({class: cF( c=> "pure-button " +  ( c.md.disabled ? "pure-button-disabled":"")),
            disabled: cF( c=> currBitNo.v >= bitIds.length - 1),
            onclick: c=> ++currBitNo.v}
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
        tabs.push( div( c=> (ii===currBitNo.v) ?
            span( {style: "margin:6px"}, bitIds[ii] )
            : button( { onclick: ()=> currBitNo.v = ii,
                        title: cF( c=> getbit( bitIds[ii]).title),
                        style: cF( c=>"margin-left:8px;background-color:"
                                + (ii===currBitNo.v? "cyan":""))},
                         ""+i)));
    }
    return tabs;
}


// document.body.innerHTML =  tag2html( CPMatrixTodo());

