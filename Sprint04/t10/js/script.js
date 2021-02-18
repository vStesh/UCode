'use strict'
/* - - - Functions - - - */ 
/* Get element by Selector
* @selector - query selector of element
*/
let get = (selector) => document.querySelector(selector);
/* Create element with class and text
* @tag - tag of element
* @cl - class of element or empty
* @text - text include or empty
*/
let createInner = (tag, cl = false, text = '') => {
    let el = document.createElement(tag);
    if (cl) {
        el.classList.add(cl);
    }
    if (text) {
        el.innerHTML = text;
    }
    return el;
}
/* - - - End Functions - - - */
// 731

const apiToken = '4036670083044670';
const apiUrl = 'https://superheroapi.com/api.php/';
const maxRenderSearchQuantity = 20;
const maxHeroesToCompareQuantity = 20;

let arResultSearch = {};
let toCompare =  new Set;

let searchHero = () => {
    console.log(searchText.value);
    fetch(`${apiUrl}${apiToken}/search/${searchText.value}`)
        .then(respose => respose.json())
        .then(data => {
            if(data.response === 'error') {
                alert(data.error);
                console.log(data);
            } else {
                arResultSearch = {};
                data.results.map(item => arResultSearch[item.id] = item);
                renderSearchResult(data.results);
            }
            console.log(data);
        });
        searchText.value = '';    
}

let searchRandom = () => {
    fetch(`${apiUrl}${apiToken}/${Math.round(Math.random() * (731 - 1 + 1))}`)
        .then(respose => respose.json())
        .then(data => {
            if(data.response === 'error') {
                alert(data.error);
            } else {
                console.log(data);
                arResultSearch[data.id] = data;
                renderSearchResult([data]);
            }
            console.log(data);
        });  
}

let addToCompare = (e) => {
    toCompare.add(arResultSearch[e.currentTarget.id]);
    if(toCompare.size > maxHeroesToCompareQuantity) {
        alert('Maximum Heroes to compare: ' + maxHeroesToCompareQuantity);
        return;
    }
    e.currentTarget.classList.add('btn-green');
    get('#compare').innerHTML = 'Compare ' + toCompare.size;
}

let renderSearchResult = (searchResult) => {
    let render = '';
    for(let i = 0; i < maxRenderSearchQuantity && i < searchResult.length; i++) {
        render += `<button class="btn-res" id="${searchResult[i].id}"><b>${searchResult[i].name}</b><br/>${searchResult[i].biography['full-name']}</button>`;
        //console.log(searchResult[i].biography);
    }
    get('#search-result').innerHTML = render;
    document.querySelectorAll('.btn-res').forEach(item => item.addEventListener('click', addToCompare));
}
