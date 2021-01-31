'use strict'
let i = prompt('Введите число от 1 до 4');
    if (i == 1) {
        alert((i * 2) / 'a');
    }
    else if (i == 2) {
        alert((i - i) / 0);
    }
    else if (i == 3) {
        alert(0 * Infinity);
    }
    else if (i == 4) {
        alert ((i * 40000000) == Infinity);
    }
    else {
        alert('Wrong input');
    }
