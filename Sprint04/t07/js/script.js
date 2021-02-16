'use strict'
let user = {
  name: document.getElementById('name').value,
  age: document.getElementById('age').value,
  email: document.getElementById('email').value
};

// Don't edit above this line

let oldValue = {};

function editOld(f) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      console.log(args[0].previousElementSibling.id);
      oldValue[args[0].previousElementSibling.id] = document.getElementById(args[0].previousElementSibling.id).value;
      target.apply(thisArg, args);
      console.log(oldValue);
    }
  });
}

edit = editOld(edit);

function saveOld(f) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      let id = args[0].previousElementSibling.id;
      let value = document.getElementById(args[0].previousElementSibling.id).value;
      if(!validate(id, value)) {
        document.getElementById(id).value = oldValue[id];
        alert('Недопустимое значение!');
      }
      target.apply(thisArg, args);
    }
  });
}

save = saveOld(save);

function validate(id, value) {
  if(id == 'name') {
    let regexp = /^[A-Za-zА-Яа-я\s]{2,}$/;
    if(!regexp.test(value)) {
      return false;
    }
    value = value.replace(/\s{2,}/g, ' ');//Удаляем по 2 пробела и более
    value = value.replace(/^\s{1,}/, '');//Удаляем пробелы впереди
    value = value.replace(/\s{1,}$/, '');//Удаляем пробелы сзади
    let arr = value.split(' ');
    if(arr.length !== 2) {
      return false;
    }
    // переводим в Имя Фамилия
    value = arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase() + ' ' + arr[1][0].toUpperCase() + arr[1].slice(1).toLowerCase();
    document.getElementById(id).value = value;
    return regexp.test(value);
    return false;
  }
  if(id == 'age') {
    let regexp = /^[1-9]\d{0,2}$/;
    console.log(value, regexp.test(value));
    return regexp.test(value);
  }
  if(id == 'email') {
    value = value.replace(/^\s{1,}/, '');//Удаляем пробелы впереди
    value = value.replace(/\s{1,}$/, '');//Удаляем пробелы сзади
    if(!(value.indexOf('@') > 0) || value.indexOf('@') == value.length - 1) {
      return false;
    }
    // Проверяем наличие только одной собаки @
    let arr = value.split('@');
    if(arr.length !== 2) {
      return false;
    }
    // Проверяем наличие точки в домене
    if(!(arr[1].indexOf('.') > 0)) {
      return false;
    }
    let regexp = /[0-9A-Za-z]/g;
    let regexp1 = /[-_.]/g;
    let result = [];
    // Удаляем все допустимые символы, чтобы получить пустую строку
    result[0] = arr[0].replace(regexp, '');
    result[0] = result[0].replace(regexp1, '');
    result[1] = arr[1].replace(regexp, '');
    result[1] = result[1].replace(regexp1, '');
    console.log('res', result);
    if((result[0] + result[1]).length > 0) {
      return false;
    }
    return true;
  }
  return false;
}


// Don't edit below this line

function edit(btn) {
  btn.innerHTML = 'save';
  btn.setAttribute('onclick', 'save(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.removeAttribute('disabled');
}

function save(btn) {
  btn.innerHTML = 'edit';
  btn.setAttribute('onclick', 'edit(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.setAttribute('disabled', 'true');
  user[input.id] = document.getElementById(input.id).value;
  document.getElementById(input.id).value = user[input.id];
}
