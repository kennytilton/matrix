const a = [7, 2, 3, 3, 3, 4, 9]
    , b = [2, 2, 3, 3, 3, 4]
    , c = [5,8,9];

function maxseq (a, b) {
    let curr = null; best = null, toBeat = 0;
    for ( let ax=0; ax < a.length; ++ax ) {
        for ( let bx=0; bx < b.length; ++bx ) {
            best = betterOf( best, startSame( toBeat, a, ax, b, bx));
            toBeat = best.length;
        }
    }

    best = betterOf( curr, best);
    return best.sq
}

function startSame( toBeat, a, ax, b, bx) {
    let count = 0;
    while ( ax + count < a.length
            && bx + count < b.length
            && a[ax + count] === b[bx + count]) {
        ++count;
    }
    return ( count > toBeat? a.slice( ax, ax + count) : null);
}

function betterOf( a, b) {
    if (!a) {
        return b;
    } else if (!b) {
        return a;
    } else if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}