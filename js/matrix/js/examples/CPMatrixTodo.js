var bits = new Array();

var welcome = "Welcome to the development of an application within an application built \
on nothing more than HTML, CSS, and a fine-grained data flow library.\
\n\
Impossible, you say? Sixty-four submissions to TodoMVC cannot be in vain! Read on.\
\n\
Speaking of TodoMVC, that is the application we will be developing within \
this Matrix/mxWeb&trade; driver application.\
\n\
Please check the notes below then hit 'Next' to get started.";


var bz = "\
section({class: 'todoapp'},\n\
   header({class: 'header'},\n\
      h1('todos'))),\n\
\n\
   p('The working app will appear here.')";

bits.push(
    {
        title: "Preface",
        chat: welcome,
        code: bz,
        notes: ["The above is a sample of the frames to come.",
            "Pardon my CSS. And even my Javascript. I am a native Lisper.",
            "We have a ClojureScript version as well."],
        mxDom:
            [section({ class: "todoapp"},
                header({class: "header"},
                    h1("todos"))),
             center("Coming soon, the app.")]
    });

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

var notVDom = "\
The Prime Directive&trade; of mxWeb code is to work and look so much \
like HTML and CSS that graphic designers will be able to write it.\
\n\
Where we come up short, please file an RFE.\n\
\n\
mxWeb is developer firendly, too; we code JS freely because <i>all</i> mxWeb authoring \
is just JS.\
\n\
As for speed, this is not VDOM and there is no diffing, yet DOM maintenance is \
more efficient than those allow. The point granularity of the data flow engine \
tells mxWeb the exact minimum of DOM updates needed at every turn.";

bits.push(
    {
        title: "An All-Javascript HTML Work-alike. And fast.",
        chat: notVDom,
        code: b0,
        notes: [
            "mxWeb&trade; DOM generator signatures mirror HTML tag syntax.",
            "Meaning a graphic designer could learn mxWeb.",
            "JSX? Bah. We code straight JS.",
            "Meaning No Toolchain Required&trade;. Yeah."],
        mxDom: [
            section({class: "todoapp"},
                header({class: "header"},
                    h1("todos"))),
            footer({class: "info"},
                [
                    "Double-click the text of a todo to change it",
                    "Created by <a href='http://tiltontec.com'>Kenneth Tilton",
                    "Inspired by <a href='http://todomvc.com'>TodoMVC</a>"
                ].map(s => p({}, s)))]
    });

var csCredits = "\
function credits (attrs, ...content) {\n\
    return footer(Object.assign({}, {class: 'info'}, attrs),\n\
        // Look, Ma! No JSX! No toolchain! Standard JS....\n\
        content.map( s => p({},s)));\n\
}\n\n\
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

var webcoDone = "\
One nice thing about everything being just Javascript is that \
writing a custom tag is as easy as writing a function.\
\n\
We can treate a function that apes HTML syntax (a tag with optional attributes, \
followed by zero or more content elements) or we can throw convention aside \
and create any signature we like.\
\n\
Our only obligation is to return one or an array of products of mxWeb DOM \
generators.";

bits.push(
    {
        title: "Web Components? Done.",
        chat: webcoDone,
        code: csCredits,
        notes: [
            "See the function 'credits'? We now can write our own DOM functions aping HTML syntax...",
            "...and the W3C can stop working on <a href='https://developer.mozilla.org/en-US/docs/Web/Web_Components'>Web Components</a>."],
        mxDom: [
            section({ class: "todoapp"},
                header({class: "header"},
                    h1("todos"))),
            credits({style: "font-size:18px"},
                "Double-click the text of a todo to change it",
                "Created by <a href='http://tiltontec.com'>Kenneth Tilton",
                "Inspired by <a href='http://todomvc.com'>TodoMVC</a>")]
    });

var TodosLite = cI([]);

function todoAddNewEZ (mx, e) {
    if (e.key === 'Enter') {
        let title = e.target.value.trim();
        e.target.value = null; // clear input either way

        if (title !== '') {
            // we start with a simple JS object as our to-do
            // concat forces new array so change detected
            TodosLite.v = TodosLite.v.concat({
                title: title,
                completed: false,
                deleted: false
            });
        }
    }
}

var enterTodos = "\
Below:\n\
   - underscores highlight code involving data flow.\n\
   - 'cI' creates an 'input Cell'.\n\
   - 'cF' creates a 'formula Cell.\n\n\n\
<b>var TodosLite = cI([]);</u> // a rare standalone cell. Use TodosLite.v to read/write.</b>\n\
\n\
document.body.innerHTML =  tag2html(\n\
    todoAppHeader( todoAddNewEZ),\n\
    section({ <u>hidden: cF( c => TodosLite.v.length === 0)},</u>\n\
      ul( c=> <u>TodosLite.v.map( td => li( td.title))))</u>,\n\
    todoDashboardEZ());\n\
\n\
function todoAddNewEZ (mx, e) {\n\
    if (e.key === 'Enter') {\n\
        let title = e.target.value.trim();\n\
        e.target.value = null; // clear input either way\n\
\n\
        if (title !== '') {\n\
            // we start with a simple JS object as our to-do\n\
            // concat forces new array so change gets detected by Matrix engine\n\
            <i>TodosLite.v = TodosLite.v.concat({title: title, completed: false});</i>\n\
        }\n\
    }\n\
}\n\n\
function todoDashboardEZ () {\n\
    return footer({ <u>hidden: cF( c => TodosLite.v.length ===0)}</u>,\n\
        span({} {content: cF(c => {\n\
                   <u>let remCt = TodosLite.v.filter(todo => !todo.completed).length;</u>\n\
                   return `&lt;strong>${remCt}&lt;/strong> item${remCt === 1 ? '' : 's'} remaining`;\n\
            })}));}\n\
\n\
function todoAppHeader ( newTodoHandler ) {\n\
    return section({class: 'todoapp'},\n\
            header({class: 'header'},\n\
                h1('todos'),\n\
                input({\n\
                    class: 'new-todo',\n\
                    autofocus: true,\n\
                    placeholder: 'What needs doing?',\n\
                    onkeypress: newTodoHandler\n\
                })));\n\
}";

var enterFlow = "\
Now to data flow. Our first use case is a doozey: we must \
dynamically add DOM (an LI, in fact) when the user enters a new Todo.\
\n\
Go ahead, try it; the app within the app is live.\n\
\n\
We must also make appear a dashboard with a count of the \
items not yet completed.\
\n\
Note the transparency of the data flow in the code below. Well, you \
cannot, it is transparent, so we underscored (literally) the places \
dependency is established and italicized where data propagation is triggered.\
\n\
Transparency is vital to the data flow paradigm. TodoMVC requires \
just a dozen dependencies, but real-world applications \
involve hundreds.\
\n\
Manual publish/subscribe works but gets old fast.";

function todoAppHeader ( newTodoHandler ) {
    return section({class: "todoapp"},
            header({class: "header"},
                h1("todos"),
                input({
                    class: "new-todo",
                    autofocus: true,
                    placeholder: "Type an item to do and hit Return.",
                    onkeypress: newTodoHandler
                })));
}

function todoDashboardEZ ( ...plugins ) {
    return footer({
            class: "footer",
            hidden: cF( c => TodosLite.v.filter( td=> !td.deleted).length ===0)},
        span({ class: "todo-count"},
            {content: cF(c => {
                let remCt = TodosLite.v.filter(todo => !(todo.completed || todo.deleted)).length;
                // Todo: return strong( `${remCt}item${remCt === 1 ? '' : 's'} remaining`);
                return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;
            })}),
        (plugins || []).map( p => p())
    );
}

bits.push(
    {
        title: "Enter Data Flow",
        chat: enterFlow,
        code: enterTodos,
        notes: [
            "New: changing data drives changing DOM population...",
            "...rather inefficiently for now, regenerating all LIs each time. We can fix that.",
            "A new Web component will provide our first cut at a dashboard.",
            "Another component lets us hide the header."
        ],
        mxDom: [
            todoAppHeader( todoAddNewEZ),
            section({
                    class: "main",
                    hidden: cF(c => TodosLite.v.length === 0)
                },
                ul({class: "todo-list"},
                    c => TodosLite.v
                            .map(td => li({style: {padding: "9px"}},
                                td.title)))),
            todoDashboardEZ()]
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
        TodosLite.v = TodosLite.v.concat( new Todo( title));
    }
    e.target.value = null;
}

function todoLI( c, todo) {
    return li({ class: cF(c => (todo.completed ? "completed" : null))},
                div({class: "view"},
                    input({
                            class: "toggle",
                            type: "checkbox",
                            checked: cF( c=> todo.completed),
                            onclick: ()=> todo.completed = !todo.completed})

                    , label({ content: todo.title })

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
                    <u>hidden: cF(c => !TodosLite.v.filter(td => td.completed).length)</u>,\n\
            onclick: mx => TodosLite.v\n\
                             .filter( td => td.completed )\n\
                             .map( <b><i>td => td.deleted = true</i></b>)},\n\
        'Clear completed');\n\
}";

function clearCompleted () {
    return button({ class: "clear-completed",
            hidden: cF(c => !TodosLite.v.filter(td => td.completed).length),
            onclick: mx => TodosLite.v.filter( td => td.completed ).map( td => td.deleted = true)},
        "Clear completed");
}

bits.push(
    {
        title: "To-Do properties join the data flow",
        chat: moFlowChat,
        code: moFlowCode,
        notes: [""],
        mxDom: [
            todoAppHeader(todoAddNewBetter),
            section({
                    class: "main",
                    hidden: cF(c => TodosLite.v.length === 0)
                },
                ul({class: "todo-list"},
                    c => TodosLite.v
                        .filter(todo => !todo.deleted)
                        .map(td => todoLI( c, td)))),
            todoDashboardEZ(clearCompleted)]
    });

// -------------------------------------------------------------
// -------------------------------------------------------------
// --- below, the application without the application within ---
// -------------------------------------------------------------
// -------------------------------------------------------------


// ------------------------------------------------------------------
// --- Next we "lift" localStorage into the Matrix. To a degree. ----

const bit = cFI( c=> {
    let r = window.localStorage.getObject("CPMatrixTodo.bit");
    return r === null ? 0 : (r < 0? 0: (r >= bits.length? bit.length -1: r));
    },
    // we use an observer to persist the current "bit" number so page reloads pick up where we left off
    { observer: (n, md, newv ) => window.localStorage.setObject("CPMatrixTodo.bit", newv)});

function toolbar () {
    return div({
            style: {background: "#fdfdfd",
            display: "flex",
            flex_direction: "row",
            align_items: "center"}},
        controls)
}
function CPMatrixTodo () {
    return [
        h1("Introducing Matrix&trade; and mxWeb&trade;"),
        toolbar(),
        div( c=> bitAssemble( bits[bit.v])),
        toolbar()
    ];
}

window['CPMatrixTodo'] = CPMatrixTodo;

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
                div({class: "narrativecol"},
                    pgs.slice(brk).map( pgr => p(pgr))));
}

function bitAssemble( b) {
    var codeString, notes, code;

    return [
        div( b.mxDom),
        h2( b.title),
        newsprint( b.chat),
        div( h3("Code Highlights"),
            pre({class: 'precode'}, b.code)),

        h3("Nota bene:"),
        ul( {class: "techwrite",
                style: "list-style:square"},
            b.notes.map( note=> li( {style: {margin_bottom: "6px"}},
                note)))
    ];
}

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
        , "Next"),
    input({
        id: "logToggle",
        type: "checkbox",
        value: true,
        onchange: (mx,e) => domLogging = e.target.checked,
        style: "margin-left:24px;margin-right:9px"
    }),
    label(
        { for: "logToggle",
        title: "open the JS console to see logging of all DOM manipulation."},
        "DOM logging")];

// document.body.innerHTML =  tag2html( page());

