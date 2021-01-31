let firstName, lastName, fullName;
let _name = new RegExp(/^[a-zA-Z]*$/);

firstName = prompt('Enter your firs name');
lastName = prompt('Enter your last name');


if (firstName.match(_name) && lastName.match(_name) && !(firstName ==='' || lastName === '')) {
    fullName = firstName[0].toUpperCase() + firstName.substr(1, firstName.length);
    fullName += ' ' + lastName[0].toUpperCase() + lastName.substr(1, lastName.length);
    console.log(fullName);
    alert(fullName);
}
else {
    console.log('Wrong input!');
    alert('Wrong input!');
}
