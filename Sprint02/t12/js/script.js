let _num = new RegExp(/^[0-9]*$/);
let num;

do {
    num = prompt('Ввведите число 3 до 99:');
}
while (!(_num.test(num) && num > 2 && num < 100));

let res = 'This page says\n';
let i = 0;
while (i < num) {
    for (let j = 0; j < i + 1; j++) {
        res += '*';
    }
    res += '\n';
    i++;
}
alert(res);


