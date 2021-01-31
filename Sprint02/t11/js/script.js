let _num = new RegExp(/^[0-9]*$/);
let num;

do {
    num = prompt('Ввведите число:');
}
while (!(_num.test(num)));

let res = 'Таблица умножения:\n';
let i = 1;
while (i < 11) {
    res += `${num} * ${i} = ${num * i}\n`;
    i++;
}
alert(res);


