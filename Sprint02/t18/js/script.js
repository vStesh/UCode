//let myarr = [6, 7, 2, 34, 12, 11, 9, 1, 4, 1, 3, 12, 22, 23, 18, 0, -3, 8, -9];
let retry;

//sortEvenOdd(myarr);

function sortEvenOdd(arr) {

    do {
        retry = false;
        for (let i = 0; i < arr.length - 1; i++) {// Если рядом четные или нечетные - сортируем их по возрастанию
            if((arr[i] % 2 === 0 && arr[i+1] % 2 === 0) || (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0)) {
                //console.log(arr[i] + ' ' + arr[i+1]);
                if (arr[i] > arr[i+1]) {
                    retry = changeItem(arr, i, i+1);
                }
            }
            else {// Нечетные переставляем вправо
                //console.log(arr[i] + ' ' + arr[i+1]);
                if(arr[i] % 2 !== 0) {
                    retry = changeItem(arr, i, i+1);
                }
            }

            //console.log(arr);
        }
    }
    while (retry);
    //console.log(arr);
}

function changeItem(arr, i, j) {
    let one = arr[i];
    arr[i] = arr[j];
    arr[j] = one;
    return true;
}