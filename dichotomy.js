//main function
let func = function(x){
    return Math.sin(x) * 0.5; 
}

//default values of dichotomy function
const DEFAULTS = {
    a: -1,          //start
    b: 1,           //end
    eps: 0.0001,    //precision
    nMax: 50        //max number of recursive calls
}

function dichotomy(a = DEFAULTS.a, b = DEFAULTS.b, ba, eps = DEFAULTS.eps, n = 0, nMax = DEFAULTS.nMax){

    n++;

    ba = Math.abs(b - a);
    let c = (a + b)/2;
    let fac = func(a) * func(c);

    if (fac > 0) a = c;
    if (fac < 0) b = c;
    
    if (ba < eps || n > nMax){ 
        return {min: a, max: b, avg: Math.round((a+b)/2 / eps) * eps};
    } else {
        return dichotomy(a,b,ba,eps,n);
    }
}