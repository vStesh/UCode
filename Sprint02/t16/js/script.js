'use strict'
function firstElements(arr, n) {

    let newarr = arr.slice();

    if (n < 0) {
        newarr = [];
        return newarr;
    }
    if(arr.length > n) {
        newarr.length = n;
    }
    else {
        newarr.length = arr.length;
    }


    return newarr;
}


