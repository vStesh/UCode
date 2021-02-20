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



mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rlc2giLCJhIjoiY2tsZGtweWl6MTBjcDJ3czQ0ZHVoeG5tbiJ9.9TF2_GyYtZTCzdnWAhZapQ';

var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/stesh/ckldmhxh12ri617qlgp4h7lgm',
    center: [165.973, -50.604167],
    zoom: 13
});

let showCoordinates = () => {
    let {lng, lat} = map.getCenter();
    get('#coordinates').innerHTML = `<div>Longitude: ${lng}</div><div>Latitude: ${lat}</div>`;
}
showCoordinates();

let addMarker = () => {
    return new mapboxgl.Marker({
        draggable: true
    }).setLngLat(map.getCenter()).addTo(map);
}

let marker = addMarker();
map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
).on('result', () => {
    marker?.remove();
    marker = addMarker();
});

let geoLocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
});
map.addControl(geoLocate);

geoLocate.on('trackuserlocationstart', function() {
    marker.remove();
});

geoLocate.on('trackuserlocationend', function() {
    marker = addMarker();
});

map.on('move', () => {
    showCoordinates();
});

map.addControl(new mapboxgl.NavigationControl());