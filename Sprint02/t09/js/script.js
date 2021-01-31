'use strict'
let hero1 = { //Black Widow
    team        : 'Avengers',
    universe    : 'Marvel',
    race        : 'human',
    eyeColor    : 'green',
    hairColor   : 'lightBrown/green',
}
let hero2 = { //Superman
    team        : 'Teen Titans',
    universe    : 'DC Comics',
    race        : 'kryptonian',
    eyeColor    : 'blue',
    hairColor   : 'black',
}
let hero3 = { //Robin
    team        : 'Justice League Of Americ',
    universe    : 'DC Comics',
    race        : 'human',
    eyeColor    : 'blue',
    hairColor   : 'black',
}
let hero4 = { //Iron Man
    team        : 'S.H.I.E.L.D.',
    universe    : 'Marvel',
    race        : 'human',
    eyeColor    : 'blue',
    hairColor   : 'black',
}


let hero = hero1;

if ((hero.team === 'Avengers' || hero.team === "S.H.I.E.L.D.")
        && hero.universe    === "Marvel"
        && hero.race        === 'human'
        && hero.eyeColor    === 'green'
        && hero.hairColor   === 'lightBrown/green') {
    alert('This is Black Widow!');
}
else if ((hero.team === 'Justice League Of Americ' || hero.team === "Teen Titans")
        && hero.universe    === "DC Comics"
        && (hero.race       === 'human' || hero.race    === 'kryptonian')
        && hero.eyeColor    === 'blue'
        && hero.hairColor   === 'black') {
    alert('This is a Superman or Robin!');
}
else {
    alert("Didn't recognize!");
}
