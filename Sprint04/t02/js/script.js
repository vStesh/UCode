let img = document.querySelector('#img');
let detail = document.querySelector('#detail');

let humanProperties = {
    firstName: 'Кларк',
    lastName: 'Кент',
    gender: 'male',
    age: 27,
    calories: 500,
}
//img.innerHTML = `<img class="big-img" src="assets/images/human.jpg">`;



class Human {
    // firstName = '';
    // lastName = '';
    // gender = '';
    // age = '';
    // calories = 0;
    foto = 'assets/images/human.jpg';
    constructor(prop) {
        this.firstName  = prop.firstName;
        this.lastName   = prop.lastName;
        this.gender     = prop.gender;
        this.age        = prop.age;
        this.calories   = prop.calories;
    }

    sleepFor() {

    }

    feed() {

    }
}

class Superhero extends Human {

    foto = 'assets/images/superhero.jpg';

    constructor() {
    
    }

    fly() {

    }
    fightWithEvil() {

    }
}

let human = new Human(humanProperties);
showHumman();
let timerId = startLife();
let validateId = setInterval(() => {   
    if(human.calories < 0) {
        clearInterval(timerId);
    }
    if(human.calories < 483) {
        document.querySelector('#hungry-msg').setAttribute('style', 'display: block;')
    }
}, 10);

function showHumman() {
    img.innerHTML = `<img class="big-img" src="${human.foto}"><div class="hungry-msg" id="hungry-msg">I'm HUNGRY!!</div><div class="sleep">I'm sleeping!</div><div class="" id="sleep-time"></div>`;

    detail.insertAdjacentHTML('beforeend', `<div class="first-name"><span class="first-name__label">Имя:</span><span class="first-name__value" id="firs-name">${human.firstName}</span></div>`);
    detail.insertAdjacentHTML('beforeend', `<div class="last-name"><span class="last-name__label">Фамилия:</span><span class="last-name__value" id="last-name">${human.lastName}</span></div>`);
    detail.insertAdjacentHTML('beforeend', `<div class="last-name"><span class="last-name__label">Пол:</span><span class="last-name__value" >${human.gender}</span></div>`);
    detail.insertAdjacentHTML('beforeend', `<div class="last-name"><span class="last-name__label">Возраст:</span><span class="last-name__value" >${human.age}</span></div>`);
    detail.insertAdjacentHTML('beforeend', `<div class="calories"><span class="calories__label">Калории:</span><span class="calories__value" id="calories">${human.calories}</span></div>`);
    
    detail.insertAdjacentHTML('beforeend', `<div class="sleep-for" onclick="sleepFor()">Спать</div>`);
    detail.insertAdjacentHTML('beforeend', `<div class="sleep-for" onclick="feed()">Кушать</div>`);

    

}

function showHero() {

}

function startLife() {
    return setInterval(() => {   
        human.calories -= 200 / (100 * 60); 
        document.querySelector('#calories').innerHTML = Math.floor(human.calories);
    }, 10);
}

function switchSleep(start = true) {
    if(start) {
        clearInterval(timerId);
    } else {
        timerId = startLife();
    }
}

function showMessage(text) {

}

function sleepFor() {
    let sec = 10;
    switchSleep(true);
    setTimeout(switchSleep, 1000 * sec, false);
    let timeSleep = setInterval(() => {
        sleeping(sec);
        sec -= 1;
    }, 1000);
    setTimeout(clearInterval, 1000 * sec, timeSleep);


}

function sleeping(sec) {
    document.querySelector('#sleep-time').innerHTML = sec;
    sec -= 1;
}

function feed() {

}