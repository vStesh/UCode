'use strict'
let properties = document.querySelector('#properties')
let magician_element = document.querySelector('.magician')
let head = document.querySelector('#head')
let protoBtn = document.querySelectorAll('.protoBtn')

const magician = {
    _hat: './assets/images/hat.png',
    _getPortrait() {
        if (this._portrait) return this._portrait;
        else return './assets/images/magician.png';
    },
    'do magic'() {
        console.log(`ABRACADABRAThe prototype of ${this.name} is `);
        console.log(Object.getPrototypeOf(this));
    },
    'say Hello'(){
        console.log('Hello my name is ' + this.name);
    }
};


let createText = (element) => {
    //console.log(element);
    let hello = `<button id="sayHello">do magic</button><br>
    <button id="sayHello">Say Hello</button>
    <div class="wolfBtn">
    </div>
    <div class="description">
    </div>
    `;
    if(element === undefined) {
        hello = `<button id="sayHello">do magic</button><br>
        <div class="description">
        </div>`;
        properties.innerHTML = '';
        properties.insertAdjacentHTML('afterbegin', hello);
        document.getElementById('sayHello').addEventListener('click', magician['do magic']);
        // let sayHello = document.querySelectorAll('#sayHello');
        // sayHello.forEach(element => element.addEventListener('click', sayhello));
        return '';
    }
    
    properties.innerHTML = '';
    properties.insertAdjacentHTML('afterbegin', hello);
    let sayHello = document.querySelectorAll('#sayHello')
    sayHello.forEach(element => element.addEventListener('click', sayhello))
    let hero = document.querySelector('.description');
        if(element.name)
    hero.insertAdjacentHTML('beforeend', `<span>name: <span class="propValue"> ${element.name}</span></span><br>`)
        if (element.age)
    hero.insertAdjacentHTML('beforeend', `<span>age: <span class="propValue">${element.age}</span></span><br>`)
        if (element.species)
    hero.insertAdjacentHTML('beforeend', `<span>species: <span class="propValue">${element.species}</span></span><br>`)
        if (element.job) 
    hero.insertAdjacentHTML('beforeend', `<span>job: <span class="propValue">${element.job}</span></span><br>`)
        if (element.title) 
    hero.insertAdjacentHTML('beforeend', `<span>title: <span class="propValue">${element.title}</span></span><br>`)
    if (element.color) 
        hero.insertAdjacentHTML('beforeend', `<span>color: <span class="propValue">${element.color}</span></span><br>`)
    return hero
}




//head.src = magician._getPortrait();
        //createText(magician);

let wolfMixin = {
    transform () {
        if(!document.querySelector(".howl_btn")) {
            document.querySelector(".wolfBtn").insertAdjacentHTML('afterend','<button onclick="wolf()" class="howl_btn">howl</button>');
            head.src = './assets/images/werewolf.png';
        } else {
            document.querySelector(".howl_btn").remove();
            head.src = this._portrait;
        }
    },
    thehowl() {
        console.log('ARH-WOOOOOOOOOOOOOOOOOOOO');
    }
}

function transformWolf() {
    werewolf.transform();
}
function wolf() {
    werewolf.thehowl();
}

function changeStatus(elem) {
    //console.log(elem);
    for (let i = 0; protoBtn[i]; i++) {
        protoBtn[i].setAttribute('class', 'protoBtn')
    }
    let name = elem.innerHTML.split(' ')[0];
    if (name === 'human') {
        Object.setPrototypeOf(magician, human);
        head.src = magician._getPortrait();
        createText(magician);
        protoBtn[1].setAttribute('class', 'protoBtn active')
        
    } else if (name === 'vampire') {
        Object.setPrototypeOf(magician, vampire);
        head.src = magician._getPortrait();
        createText(magician);
        protoBtn[2].setAttribute('class', 'protoBtn active')
    } else if (name === 'dog') {
        Object.setPrototypeOf(magician, dog);
        head.src = magician._getPortrait();
        createText(magician);
        protoBtn[3].setAttribute('class', 'protoBtn active')
    } else if (name === 'werewolf') {
        Object.setPrototypeOf(magician, werewolf);
        Object.assign(Wolf.prototype, wolfMixin);
        head.src = magician._getPortrait();
        createText(magician);
        document.querySelector(".wolfBtn").insertAdjacentHTML('afterbegin', `<button onclick="transformWolf()">Transform</button> <br>`);
        protoBtn[4].setAttribute('class', 'protoBtn active');
    }
    else {
        Object.setPrototypeOf(magician, creature);
        
        head.src = magician._getPortrait();
        createText();
        //protoBtn[0].setAttribute('class', 'protoBtn active')
    }
}


class Creature {
    constructor (name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    
    sayHello () {
        console.log(`Hello, my name is ${this.name}`);
    }
}


class Human extends Creature {
    constructor (name, age, species, job) {
        super(name, age, species);
        this.job = job;
        this._portrait = './assets/images/human.png';
    }    
}

class Vampire extends Creature {
    constructor (name, age, species, job, title) {
        super(name, age, species);
        this.job = job;
        this.title = title;
        this._portrait = './assets/images/vampire.png';
    }
}

class Dog extends Creature {
    constructor (name, age, species, color) {
        super(name, age, species);
        this._portrait = './assets/images/dog.png';
    this.color = color;
    }
}

class Wolf extends Human {
    constructor (name, age, species, job) {
        super(name, age, species);
        this.job = job;
        this._portrait = './assets/images/human.png';
    }  
}
let creature = new Creature();
let human = new Human('Linda', 22, 'human', 'doctor');
let vampire = new Vampire('Vlad', 915, 'vampire', 'unemployed', 'count');
let dog = new Dog('Fluffy', 3, 'dog', 'brown');
let werewolf = new Wolf('Linda', 22, 'human', 'doctor');;

let sayhello = (e) => {
    let name = e.target.innerHTML.toLowerCase();
    if(name === 'do magic'){
        magician["do magic"]()
    }else{
        magician['say Hello']()
    }
}

createText();