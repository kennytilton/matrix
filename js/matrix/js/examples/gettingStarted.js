function gettingStarted(n) {
    switch (n) {
        case 0:
            // we can offer one node....
            return Tag.mxToHTML( h1("Hello, world. (single node) case=" +n));
            break;
        case 1:
            // ...or an array of nodes.
            return Tag.mxToHTML( [h1("Hello, world. (multi node) case=" +n),
                h2("Booya!")]);
            break;
        case 2:
            return Tag.mxToHTML(
                // If a map is the first argument, we take it to be HTML attributes
                // todo: get consistent on tag sig
                [
                    section({ class: "todoapp"},
                        header({class: "header"},
                            h1("todos"))),
                    h2( "Credits RSN...",
                        {style: "background-color:yellow"})
                ]);
            break;

        case 3: // Web components? We don't need no stinkin web components!
            return Tag.mxToHTML(
                // If a map is the first argument, we take it to be HTML attributes
                // todo: get consistent on tag sig
                [
                    section({ class: "todoapp"},
                        header({class: "header"},
                            h1("todos"))),
                    
                    // any function with any parameters is fine, just return
                    // a DOM-generating function....
                    todoMVCCredits('<a href="http://tiltontec.com">Kenny Tilton')
                ]);
            break;
        default:
            return Tag.mxToHTML( h1("Undefined gettingStarted case: " +n))
    }
}

function todoMVCCredits (createdBy) {
    //
    return footer({class: "info"},
        ['Double-click the text of a todo to change it',
            'Created by '+createdBy,
            'Inspired by <a href="http://todomvc.com">TodoMVC</a>']
            .map( s => p({},s)));
}
window['gettingStarted'] = gettingStarted;