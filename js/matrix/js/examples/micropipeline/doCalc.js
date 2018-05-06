
// Sample input/output:
// "6+9-12" => 3
// "1+2-3+4-5+6-7" => -2

var xpr = "6+12-5^2";

var st = 'init'
    , res = 0
    , ans = 0;

function Micropipeline () {
    console.log('calc ' + doCalc("6+12-5^2+1/5"));
    return h1("doCalc");
}

function doCalc (xpr) {
// You are building an educational website and want to create a simple
// calculator for students to use. The calculator will only allow addition and subtraction of positive integers.

// Given an expression string using the "+" and "-" operators like "5+16-2", write a function to parse the string and returns the result.


    st = 'init';
    optr = null;
    reg = 0;
    ans = 0;

    for ( let n=0; n < xpr.length; ++n) {
        let inp = xpr[n]
            , v = parseInt(inp);
        console.log('inp=' + inp);
        if (st === 'init') {
            if (isNaN(v)) {
                console.log('oops init ' + v);
            } else {
                reg = v;
                st = 'finishnum';
            }
        } else if (st === 'finishnum') {
            if (isNaN(v)) {
                procOptr(inp);
            } else {
                reg = 10 * reg + v;
                st = 'finishnum';
            }
        }
    }

    procReg();
    return ans;
}

function procOptr (v) {
    procReg();
    console.log('procoptr sees ', v);
    reg = 0;
    optr = v;
    st = 'init';
}

function procReg() {
    clg('preg', optr, reg, ans);
    if (!optr) optr = '+';
    if (optr === '^')
        ans = ans ** reg;
    else if (optr === '/')
        ans = ans / reg;
    else
        ans = ans + (optr === '+'? 1:-1) * reg;
}
