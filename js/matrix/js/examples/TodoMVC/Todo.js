//--- persistence ------------------------------------------------------

const TODO_LS_PREFIX = "todos-MatrixJS.";

class Todo extends MXStorable {
    constructor(islots) {
        super( Object.assign( {
                lsPrefix: TODO_LS_PREFIX},
                islots,
                { title: cI(islots.title),
                completed: cI(islots.completed || false)}))
    }

    static storableProperties () {
        // created and deleted are provided by MXStorable
        return ["title", "completed"].concat(super.storableProperties());
    }

    static loadFromStorage() {
        return mkm( null, 'TodoGroup',
            { itemsRaw: cI( MXStorable.loadAllItems( Todo, TODO_LS_PREFIX)
                                        .sort( (a,b) => a.created < b.created ? -1 : 1) || []),

            items: cF( c => c.md.itemsRaw.filter( td => !td.deleted)),

            routeItems: cF( c => c.md.items
                                    .filter( td => todoRoute.v === 'All'
                                                || xor( todoRoute.v==='Active', td.completed))
                                    .sort( (a,b) => a.created < b.created ? -1 : 1)),

            empty: cF( c => c.md.items.length === 0)})
    }
}

const todoRoute = cFI( c=> {let r = window.localStorage.getObject("todo-matrix.route");
                            return r === null ? "All" : r;},
                    { name: 'route',
                        observer: (n, md, newv ) => window.localStorage.setObject("todo-matrix.route", newv)
                    });

const Todos = Todo.loadFromStorage();

