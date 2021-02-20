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
let toCompareArr = [];
let origArr = [];
let newArr = [];

function searchHero () {
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

function searchRandom () {
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

function addToCompare (e) {
    toCompare.add(arResultSearch[e.currentTarget.id]);
    if(toCompare.size > maxHeroesToCompareQuantity) {
        alert('Maximum Heroes to compare: ' + maxHeroesToCompareQuantity);
        return;
    }
    e.currentTarget.classList.add('btn-green');
    get('#compare').innerHTML = 'Compare ' + toCompare.size;
}

function renderSearchResult (searchResult) {
    let render = '';
    for(let i = 0; i < maxRenderSearchQuantity && i < searchResult.length; i++) {
        render += `<button class="btn-res" id="${searchResult[i].id}"><b>${searchResult[i].name}</b><br/>${searchResult[i].biography['full-name']}</button>`;
        //console.log(searchResult[i].biography);
    }
    get('#search-result').innerHTML = render;
    document.querySelectorAll('.btn-res').forEach(item => item.addEventListener('click', addToCompare));
}

function compareHero () {
    if (toCompare.size < 2) {
        alert('Добьте хотя бы 2 героя для сравнения');
        return;
    }
    renderCharts();
}

/* - - Google Charts - - */








function getDataArray () {
    let result = [];
    for (let i = 0; i <= toCompareArr.length; i++) {
        result[i] = new Array();
        if(i === 0) {
            let powers = Object.keys(toCompareArr[0].powerstats);
            console.log(powers);
        
            for (let j = 0; j <= powers.length; j++) {
                if(j === 0) {
                    result[i].push('Compare Heroes');
                    continue;
                }
                result[i].push(powers[j - 1]);
            }
            continue;
        }
        for (let j = 0; j < result[0].length; j++) {
            if(j === 0) {
                result[i].push(toCompareArr[i - 1].name);
                continue;
            }
            if(!toCompareArr[i - 1].powerstats[[result[0][j]]]) {
                result[i].push(0);
                continue;
            }
            result[i].push(+toCompareArr[i - 1].powerstats[[result[0][j]]]);
        }
        //console.log(i, powers);
    }
    origArr = result;
    console.log('result',result);
    return result;
}

function renderCharts () {
    
    get('#search-result').innerHTML = '';
    if(get('.power-buttons')) {
        get('.power-buttons').innerHTML = '';
    }
    
    toCompareArr = [];
    for (let value of toCompare) {
        toCompareArr.push(value);
    }
    origArr = getDataArray();
    newArr = origArr;
    console.log('arr', toCompareArr);
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);
    console.log('origArr',origArr);
    renderPowerBtn();


}


function changeArrData (e) {
    e.currentTarget.classList.toggle('power-item-active');
    let powersArr = [0];
    document.querySelectorAll('.power-item').forEach((item, key, arr) => {
        if(item.classList.contains('power-item-active')) {
        powersArr.push(+item.id.substr(4,1));
        }
    });
    newArr = [];
    origArr.forEach((item, key, arr) => {
        newArr.push([]);
        for(let i = 0; i < item.length; i++) {
            if(powersArr.includes(i)) {
               newArr[key].push(item[i]);
            };
        }
    });
    drawChart(newArr);
    console.log('powAr', powersArr);
    console.log('neAr', newArr);
    console.log(e.currentTarget.id);
}

function renderPowerBtn () {
    let render = '<div class="power-buttons">';
    for(let i = 1; i < origArr[0].length; i++) {
        render += `<div class="power-item power-item-active" id="pow-${i}" >${origArr[0][i]}</div>`;
    }
    render += '</div>';
    console.log(render);
    get('#columnchart').insertAdjacentHTML('afterend', render);
    document.querySelectorAll('.power-item').forEach((item, key, arr) => {
        item.addEventListener('click', changeArrData);
    });
}

function drawChart (arr = false) {
    
    var data = google.visualization.arrayToDataTable(arr ? arr : origArr);

    var options = {
        chart: {
            
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}