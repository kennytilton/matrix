const todoSession = new TagSession( null, 'TodoFRPSession',
                        { routes: {'/completed' : ()=> todoRoute.v = 'Completed',
                                   '/active'    : ()=> todoRoute.v = 'Active',
                                   '/'          : ()=> todoRoute.v = 'All'}});

function todoFRP() {

    todoSession.init();

    return Tag.mxToHTML(
        [section({ class: "todoapp", name: "todoapp"},
            header({class: "header"},
                h1("todos"),
                input({ class: "new-todo",
                        autofocus: true,
                        placeholder: "What needs doing?",
                        onkeypress: 'todoAddNew'})),

            section({ class: "main",
                      hidden: cF( c => Todos.empty)},

                input({ id: "toggle-all",
                        type: "checkbox",
                        class: "toggle-all",
                        checked: cF( c => Todos.items.length > 0
                                          && Todos.items.every( i => i.completed))}),

                label( "Mark all as complete",
                    { for: "toggle-all",
                      onclick: 'toggleAllCompletion( this)'}),

                ul({ class: "todo-list", name: "todo-list",
                     kidValues: cF( c=> Todos.routeItems),
                     kidKey: k => k.todo,
                     kidFactory: todoListItem},
                   c => c.kidValuesKids())),

            todoDashboard()),

        footer({class: "info"},
            ['Double-click the text of a todo to change it',
             'Created by <a href="http://tiltontec.com">Kenneth Tilton',
             'Inspired by <a href="http://todomvc.com">TodoMVC</a>']
                .map( s => p({},s)))]);
}

window['todoFRP'] = todoFRP;

function todoAddNew (dom, e) {
    if (e.key !== 'Enter') return;

    let title = e.target.value.trim();
    if (title !== '')
        // gotta force a new array so matrix internals will see the change
        Todos.itemsRaw = Todos.itemsRaw.concat(new Todo({title: title}));

    e.target.value = null;
}

function toggleAllCompletion (dom) {
    let toggall = document.getElementById("toggle-all"),
        makeDone = !dom2mx(toggall).checked;

    Todos.items.filter( td => xor( td.completed, makeDone))
                .map( td => td.completed = makeDone);
}

//--- the do-list item beef ----------------------------------------------------------

function todoListItem( c, todo) {
    return li({ todo: todo,
                class: cF(c => (todo.completed ? "completed" : ""))},

            div({class: "view"},
                input({class: "toggle", type: "checkbox",
                        checked: cF( c=> todo.completed),
                        todo: todo,
                        onclick: 'todoToggleCompleted',
                        title: cF( c=> `Mark ${todo.completed? "in" : ""}complete.`)}),

                label( cF( c => todo.title),
                    { ondblclick: 'todoStartEditing'}),

                button(null, { class: "destroy",
                                todo: todo,
                                onclick: 'dom2mx(this).todo.delete()'})),

            input({ name: "myEditor", class: "edit",
                    todo: todo,
                    value: cFI( c=> todo.title),
                    onblur: 'todoEdit',
                    onkeydown: 'todoEdit', // picks up Escape. Not needed in CLJS version... goog.closure?
                    onkeypress: 'todoEdit'}));
}

function todoToggleCompleted (dom,e) {
    let mx = dom2mx(dom),
        todo = mx.todo;
    clg('tTC toggle', mx.tag, mx.id, dom.id);
    todo.completed = !todo.completed;
}

//--- item editing callbacks

function todoStartEditing (dom,e) {
    let li = dom2mx(dom).fmTag('li', 'myLi') // find overarching li, then...
        , edt = li.fmDown('myEditor');
    edt.dom.li = li; // avoid a little navigation later
    li.dom.classList.add("editing");
    edt.dom.focus();
    edt.dom.setSelectionRange(0, edt.dom.value.length); // the correct UX starting an edit
}

function todoEdit ( edtdom, e) {
    let li = edtdom.li;
    if ( !li.dom.classList.contains("editing")) return;

    if (e.type === 'blur' || ['Escape', 'Enter'].includes( e.key)) {
        if ( e.key === 'Escape') {
            e.target.value = li.todo.title;
        } else {
            let title = e.target.value.trim();
            if (title === '') {
                li.todo.delete();
            } else {
                li.todo.title = e.target.value = title;
            }
        }
        li.dom.classList.remove('editing');
    }
}

//--- the dashboard of controls/readouts below the list of to-dos ------------------------

function todoDashboard () {
    return footer({class: "footer",
                    hidden: cF( c => Todos.empty)},

            span({ class: "todo-count",
                    content: cF(c => { let remCt = Todos.items.filter(todo => !todo.completed).length;
                                    return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;})}),

            ul( { class: "filters", name: "filters"},
                [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]
                    .map( ([ label, route]) => li({},  a({href: route,
                                                        content: label, // selector: label,
                                                        selected: cF( c => todoRoute.v === label),
                                                        class: cF( c => c.md.selected ? "selected":"")})))),

            button("Clear completed",
                { class: "clear-completed",
                  hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0),
                  onclick: 'Todos.items.filter( td => td.completed ).map( td => td.delete())'}));
}

