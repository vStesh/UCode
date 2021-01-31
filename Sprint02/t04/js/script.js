"use strict"
function solver(a, b, c, d, e) {
    let x = a ** 2 - 5 * b * c + d / 3 + e;
    if (x) {
        return x;
    }
    else {
        return 'Wrong input';
    }
}
