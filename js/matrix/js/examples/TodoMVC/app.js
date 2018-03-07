const todoSession = new TagSession( null, 'TodoMVCSession',
                        { routes: {'/completed' : ()=> todoRoute.v = 'Completed',
                                   '/active'    : ()=> todoRoute.v = 'Active',
                                   '/'          : ()=> todoRoute.v = 'All'}});

function todoMVC() {

    todoSession.init();

    return tag2html( [
        section({ class: "todoapp"},
            header({class: "header"},
                h1("todos"),
                input({ class: "new-todo",
                        autofocus: true,
                        placeholder: "What needs doing?",
                        onkeypress: todoAddNew}))
            , section({ class: "main",
                      hidden: cF( c => Todos.empty)},

                input({ id: "toggle-all",
                        type: "checkbox",
                        class: "toggle-all",
                        checked: cF( c => Todos.items.length > 0
                                          && Todos.items.every( i => i.completed))}),

                label(
                    { for: "toggle-all",
                      onclick: toggleAllCompletion},
                    "Mark all as complete")

                , ul({ class: "todo-list"},
                     {name: "todo-list",
                     kidValues: cF( c=> Todos.routeItems),
                     kidKey: k => k.todo,
                     kidFactory: todoListItem},
                   c => c.kidValuesKids()))
            , todoDashboard()),

        footer({class: "info"},
            ['Double-click the text of a todo to change it',
             'Created by <a href="http://tiltontec.com">Kenneth Tilton',
             'Inspired by <a href="http://todomvc.com">TodoMVC</a>']
                .map( s => p({},s)))]);
}

window['todoMVC'] = todoMVC;

function todoAddNew (mx, e) {
    if (e.key !== 'Enter') return;

    let title = e.target.value.trim();
    if (title !== '')
        // use concat vs push to force a new array so
        // matrix internals will detect the change (unchanged test is ===)
        Todos.itemsRaw = Todos.itemsRaw.concat(new Todo({title: title}));

    e.target.value = null;
}

function toggleAllCompletion () {
    let toggall = document.getElementById("toggle-all"),
        newCompleted = !dom2mx(toggall).checked;

    Todos.items.filter( td => xor( td.completed, newCompleted))
                .map( td => td.completed = newCompleted);
}

//-------------------------------------------------------------------------------
//--- the do-list item ----------------------------------------------------------

function todoListItem( c, todo) {
    return li({ class: cF(c => [(todo.completed ? "completed" : ""),
                                (c.md.editing ? "editing" : "")])},
                {todo: todo,
                editing: cI( false)},

            div({class: "view"},
                input({class: "toggle",
                        type: "checkbox",
                        checked: cF( c=> todo.completed),
                        onclick: mx => mx.todo.completed = !mx.todo.completed,
                        title: cF( c=> `Mark ${todo.completed? "in" : ""}complete.`)},
                    {todo: todo})

                , label({ ondblclick: todoStartEditing},
                        { content: cF( c=> todo.title)})

                , button({ class: "destroy",
                         onclick: mx => mx.todo.delete()},
                        {todo: todo})
            )

            , input({ class: "edit",
                    value: cFI( c=> todo.title),
                    onblur: todoEdit,
                    onkeydown: todoEdit, // picks up Escape. Not needed in CLJS version... goog.closure?
                    onkeypress: todoEdit},
            {name: "myEditor"})
    );
}

// ------------------------------------------------------------------------------
// --- to-do list item callbackse -----------------------------------------------


function todoStartEditing (mx,e) {
    let li = mx.fmTag('li') // find overarching li, then...
        , edt = li.fmDown('myEditor');
    li.editing = true;
    edt.dom.focus();
    edt.dom.setSelectionRange(0, edt.dom.value.length); // the correct UX starting an edit
}

function todoEdit ( edtmx, e) {
    let li = edtmx.fmTag('li');
    if ( !li.editing) return;

    if (e.type === 'blur' || ['Escape', 'Enter'].includes( e.key)) {
        if ( e.key === 'Escape') {
            // restore original value from before start of abandoned edit
            e.target.value = li.todo.title;
        } else {
            let title = e.target.value.trim();
            if (title === '') {
                li.todo.delete();
            } else {
                li.todo.title = e.target.value = title;
            }
        }
        li.editing = false;
    }
}

//----------------------------------------------------------------------------------------
//--- the dashboard of controls/readouts below the list of to-dos ------------------------

function todoDashboard () {
    return footer({class: "footer",
                    hidden: cF( c => Todos.empty)},
        span({ class: "todo-count"},
            {content: cF(c => { let remCt = Todos.items.filter(todo => !todo.completed).length;
                return `<strong>${remCt}</strong> item${remCt === 1 ? '' : 's'} remaining`;})})

        , ul( { class: "filters"}, {name: "filters"},
                [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]
                    .map( ([ label, route]) => li( a({href: route,
                                                        class: cF( c => c.md.selected ? "selected":"")},
                        { selected: cF( c => todoRoute.v === label),
                            content: label}))))

        , button({ class: "clear-completed",
                  hidden: cF(c => Todos.items.filter(todo => todo.completed).length === 0),
                  onclick: mx => Todos.items.filter( td => td.completed ).map( td => td.delete())},
            "Clear completed")
        );
}

