// map class initialize 
var map = L.map('map').setView([5.3600, -4.0083], 13);
map.zoomControl.setPosition('bottomright');

// adding osm tilelayer 
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//add map scale
// L.control.scale().addTo(map);