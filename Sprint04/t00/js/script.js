'use strict'

const magician = {
    _hat: './assets/images/hat.png', 
    _getPortrait(){
        if (this._portrait) return this._portrait;
        else return './assets/images/magician.png'; 
    },
    'do magic'(){
        console.log(`ABRACADABRA The prototype of ${this.name} is `);
        console.log(Object.getPrototypeOf(this)); 
    },
    'say Hello'(){
        console.log(`Hello, my name is ${this.name}!`);
    }
};

class Creature {
    constructor (name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

class Human extends Creature {

}

class Dog extends Creature {
    constructor () {
        this.color = '';
    }
}

class Vampire extends Human {

}