// https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png
// http://alt.opentopomap.org/{z}/{x}/{y}.png
// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
// http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpeg
// http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png
// http://otile1-s.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg
// http://irs.gis-lab.info/?layers=landsat&request=GetTile&z={z}&x={x}&y={y}
// http://tile.lonvia.de/hiking/{z}/{x}/{y}.png
// http://tile.lonvia.de/cycling/{z}/{x}/{y}.png
// http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png
// https://[abc].tile.thunderforest.com/landscape/{z}/{x}/{y}.png http://www.thunderforest.com/maps/landscape/
// https://[abc].tile.thunderforest.com/outdoors/{z}/{x}/{y}.png http://www.thunderforest.com/maps/outdoors/
// https://[abc].tile.thunderforest.com/transport/{z}/{x}/{y}.png
// https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png

var map = L.map('map');

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://opentopomap.org/about">OpenTopoMap</a>',
  maxZoom: 19
});
OpenStreetMap_Mapnik.addTo(map);

map.setView([17.810278,-89.373470], 7);

var maya = L.icon({
  iconUrl: './js/images/maya.png',
  iconRetinaUrl: './js/images/mayax2.png',
  iconSize: [69, 40],
  iconAnchor: [69, 40],
  popupAnchor: [-16, -38],
  shadowUrl: './js/images/marker-shadow.png',
});
var icon =  {icon: maya, title: "Maya"};

// http://forums.civfanatics.com/archive/index.php/t-454630.html
// http://www012.upp.so-net.ne.jp/klivo/majaoj/citynames.html

var coba = new L.LatLng(20.494722,-87.736111);
var coba_marker = L.marker(coba,icon).addTo(map);
coba_marker.bindPopup("<strong>Cobá</strong>");

var copan = new L.LatLng(14.84,-89.14);
var copan_marker = L.marker(copan,icon).addTo(map);
copan_marker.bindPopup("<strong>Copán</strong>");

var calakmul = new L.LatLng(18.105392,-89.810828);
var calakmul_marker = L.marker(calakmul,icon).addTo(map);
calakmul_marker.bindPopup("<strong>Calakmul</strong>");

var caracol = new L.LatLng(16.763889,-89.1175);
var caracol_marker = L.marker(caracol,icon).addTo(map);
caracol_marker.bindPopup("<strong>Caracol</strong>");

var cival = new L.LatLng(17.2825,-89.346667);
var cival_marker = L.marker(cival,icon).addTo(map);
cival_marker.bindPopup("<strong>Cival</strong>");

var mixco = new L.LatLng(14.871667,-90.664167);
var mixco_marker = L.marker(mixco,icon).addTo(map);
mixco_marker.bindPopup("<strong>Mixco Viejo</strong>");

var motul = new L.LatLng(17.026389,-89.901389);
var motul_marker = L.marker(motul,icon).addTo(map);
motul_marker.bindPopup("<strong>Motul de San José</strong>");

var quirigua = new L.LatLng(15.269444,-89.040278);
var quirigua_marker = L.marker(quirigua,icon).addTo(map);
quirigua_marker.bindPopup("<strong>Quiriguá</strong>");

var qumarkaj = new L.LatLng(15.023528,-91.171989);
var qumarkaj_marker = L.marker(qumarkaj,icon).addTo(map);
qumarkaj_marker.bindPopup("<strong>Q'umarkaj</strong>");

var rioazul = new L.LatLng(17.616667,-89.483333);
var rioazul_marker = L.marker(rioazul,icon).addTo(map);
rioazul_marker.bindPopup("<strong>Río Azul</strong>");

var rita = new L.LatLng(18.4022824,-88.3949961);
var rita_marker = L.marker(rita,icon).addTo(map);
rita_marker.bindPopup("<strong>Santa Rita Corozal</strong>");

var sayil = new L.LatLng(20.178,-89.6525);
var sayil_marker = L.marker(sayil,icon).addTo(map);
sayil_marker.bindPopup("<strong>sayil</strong>");

var seibal = new L.LatLng(16.511667,-90.061111);
var seibal_marker = L.marker(seibal,icon,icon).addTo(map);
seibal_marker.bindPopup("<strong>Seibal</strong>");

var tikal = new L.LatLng(17.222094,-89.623614);
var tikal_marker = L.marker(tikal,icon).addTo(map);
tikal_marker.bindPopup("<strong>tikal</strong>");
