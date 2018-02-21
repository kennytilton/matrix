function gettingStarted(n) {
    clg("getsrarted version", n);
    switch (n) {
        case 0:
            // we can offer one node....
            return h1( "Hello, world. (single node) case=" +n);
            break;
        case 1:
            // ...or an array of nodes.
            return [ h1("Hello, world. (multi node) case=" +n),
                    h1("Booya!")
                , h1({style: "background:yellow"}, "bingo")
                , h1({style: "background:gray"}, {name: "boing"}, "bongo")
                , h1({style: "background:cyan"}, {name: "coolio"}, c => "yowza "+c.md.name)
            ];
            break;
        case 110:
            // ...or an array of nodes.
            return [ h2("Hello, world. (multi node) case=" +n),
                h2("Booya!")
                , h2({style: "background:yellow"}, "bingo")
                , h2({style: "background:gray"}, {name: "boing"}, "bongo")
                , h2({style: "background:cyan"}, {name: "coolio"}, c => "yowza "+c.md.name)
        ];
            break;
        case 2:
             // If a map is the first argument, we take it to be HTML attributes
            // return [h2( {style: "background-color:yellow"}, ["Credits RSN....."])];
            return [ section({ class: "todoapp"},
                        header({class: "header"},
                            h1("todos"))),

                h2( {style: "background-color:yellow"}, "Credits RSN..?.")];
            break;

        case 3: // Web components? We don't need no stinkin web components!
            return [ section({ class: "todoapp"},
                        header({class: "header"},
                            h1("todos"))),

                // any function with any parameters is fine, just return
                // a DOM-generating function....
                todoMVCCredits('<a href="http://tiltontec.com">Kenny Tilton')];
            break;

        case 4: // JSX? Pre-processor? We don't need no etc!
            return [ section({ class: "todoapp"},
                        header({class: "header"},
                            h1("todos"))),

                // see this function for why we call it 'without JSX'
                todoMVCCreditsSansJSX('<a href="http://tiltontec.com">Kenny Tilton')];
            break;

        case 5:
            return tag("h1",
                    {style: "background-color:yellow"},{},
                    "Just attrs (bkg yellow) and string content");
            break;

        case 6:
            return tag("h1",
                    {style: "background-color:yellow"},
                    {test42: cF( c => 40+2)},
                    c=> "attrs, customs, ruled string content " + c.md.test42);

        case 7:
            return h1( {style: "background-color:yellow"},
                {test42: cF( c => 40+2)},
            c=> "attrs, customs, ruled string content " + c.md.test42);

        case 8:
            return h1( {style: {background_color: "cyan",
                                padding: "36px"}},
                {test42: cF( c => 40+2)},
            c=> "style literal object " + c.md.test42);

        case 9:
            return h1( {style: mkCSS({background_color: cF( c => "cy"+"an"),
                                      padding: cF( c => "36"+"px")})},
                    {test42: cF( c => 40+2)},
                    c=> "style object " + c.md.test42);

        case 10: // style property tracks tag custom input cell updated by onclick handler
            return h1( { style: mkCSS({
                                    background_color: cF( c => (((c.md.tag.ival % 2) === 0)? "black":"red")),
                                    color: "white",
                                    font_size: cF( c=> c.md.tag.ival + "px"),
                                    padding: cF( c => c.md.tag.ival+"px")}),
                        onclick: mx => mx.ival += 1},
                    { ival: cI( 14)},
                c=> "booya ival=" + c.md.ival);

        case 11:
            let whoa = {title: "Lucky Jim"};
            return [label({id: 4232}, "Cool"),
                label({ id: 4243, for: "toggle-all",
                    onclick: mx => clg('case 11 inline handler', mx)},
                    whoa.title)];

        case 12:
            return [ h1({ onclick: function (mx, e, prop) {
                clg("case 12new onclick", e, dom2mx(e.target)===mx)
            }}, "new onclick!")];

        case 13:
            let newonc = function (mx, e, prop) {
                clg("new onclick", e, mx.id, dom2mx(e.target)===mx)
            };
            return [ h1({ id: "himom", onclick: newonc}, "new onclick 2!")];

        default:
            return h1("Undefined gettingStarted case: " + n);
    }
}


function todoMVCCredits (createdBy) {
    // simulated "web component", aka custom Tag
    return footer({class: "info"},
            p('Double-click the text of a todo to change it'),
            p('Created by '+createdBy),
            p('Inspired by <a href="http://todomvc.com">TodoMVC</a>'));
}

function todoMVCCreditsSansJSX (createdBy) {
    // credits showing off full power of JS for page building -- without JSX
    return footer({class: "info"},
            ['Double-click the text of a todo to change it',
                'Created by '+createdBy,
                'Inspired by <a href="http://todomvc.com">TodoMVC</a>']
                .map( s => p({},s)));
}
window['gettingStarted'] = gettingStarted;