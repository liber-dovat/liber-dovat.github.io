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
  iconUrl: './js/images/maya_20.png',
  iconRetinaUrl: './js/images/maya_40.png',
  iconSize: [35, 20],
  iconAnchor: [35, 20],
  popupAnchor: [-16, -38],
//   shadowUrl: './js/images/marker-shadow.png',
});
var ciudad = {icon: maya, title: "Maya"};

// http://forums.civfanatics.com/archive/index.php/t-454630.html
// http://www012.upp.so-net.ne.jp/klivo/majaoj/citynames.html
// https://en.wikipedia.org/wiki/List_of_Maya_sites

// https://github.com/Leaflet/Leaflet/issues/859

var altun = new L.LatLng(17.76395,-88.347061);
var altun_marker = L.marker(altun,ciudad).bindLabel("Altun Ha", {noHide: true}).addTo(map);
altun_marker.bindPopup("<strong>Altun Ha</strong>");

var becan = new L.LatLng(18.516667,-89.466667);
var becan_marker = L.marker(becan,ciudad).bindLabel("Becan", {noHide: true}).addTo(map);
becan_marker.bindPopup("<strong>Becan</strong>");

var bonampak = new L.LatLng(16.704,-91.065);
var bonampak_marker = L.marker(bonampak,ciudad).bindLabel("Bonampak", {noHide: true}).addTo(map);
bonampak_marker.bindPopup("<strong>Bonampak</strong>");

var cahal = new L.LatLng(17.1457,-89.0741);
var cahal_marker = L.marker(cahal,ciudad).bindLabel("Cahal Pech", {noHide: true}).addTo(map);
cahal_marker.bindPopup("<strong>Cahal Pech</strong>");

var calakmul = new L.LatLng(18.105392,-89.810828);
var calakmul_marker = L.marker(calakmul,ciudad).bindLabel("Calakmul", {noHide: true}).addTo(map);
calakmul_marker.bindPopup("<strong>Calakmul</strong>");

var caracol = new L.LatLng(16.763889,-89.1175);
var caracol_marker = L.marker(caracol,ciudad).bindLabel("Caracol", {noHide: true}).addTo(map);
caracol_marker.bindPopup("<strong>Caracol</strong>");

var cerros = new L.LatLng(18.358333,-88.351944);
var cerros_marker = L.marker(cerros,ciudad).bindLabel("Cerros", {noHide: true}).addTo(map);
cerros_marker.bindPopup("<strong>Cerros</strong>");

var chichen = new L.LatLng(20.6829,-88.56865);
var chichen_marker = L.marker(chichen,ciudad).bindLabel("Chichen Itza", {noHide: true}).addTo(map);
chichen_marker.bindPopup("<strong>Chichen Itza</strong>");

var cival = new L.LatLng(17.2825,-89.346667);
var cival_marker = L.marker(cival,ciudad).bindLabel("Cival", {noHide: true}).addTo(map);
cival_marker.bindPopup("<strong>Cival</strong>");

var coba = new L.LatLng(20.494722,-87.736111);
var coba_marker = L.marker(coba,ciudad).bindLabel("Cobá", {noHide: true}).addTo(map);
coba_marker.bindPopup("<strong>Cobá</strong>");

var copan = new L.LatLng(14.84,-89.14);
var copan_marker = L.marker(copan,ciudad).bindLabel("Copán", {noHide: true}).addTo(map);
copan_marker.bindPopup("<strong>Copán</strong>");

var edzna = new L.LatLng(19.5968,-90.2291);
var edzna_marker = L.marker(edzna,ciudad).bindLabel("Edzna", {noHide: true}).addTo(map);
edzna_marker.bindPopup("<strong>Edzna</strong>");

var ek = new L.LatLng(20.891111,-88.136389);
var ek_marker = L.marker(ek,ciudad).bindLabel("Ek' Balam", {noHide: true}).addTo(map);
ek_marker.bindPopup("<strong>Ek' Balam</strong>");

var izamal = new L.LatLng(20.928959,-89.017642);
var izamal_marker = L.marker(izamal,ciudad).bindLabel("Izamal", {noHide: true}).addTo(map);
izamal_marker.bindPopup("<strong>Izamal</strong>");

var lamanai = new L.LatLng(17.7525,-88.654444);
var lamanai_marker = L.marker(lamanai,ciudad).bindLabel("Lamanai", {noHide: true}).addTo(map);
lamanai_marker.bindPopup("<strong>Lamanai</strong>");

var merida = new L.LatLng(21.091,-89.5903);
var merida_marker = L.marker(merida,ciudad).bindLabel("Mérida, Dzibilchaltun", {noHide: true}).addTo(map);
merida_marker.bindPopup("<strong>Mérida, Dzibilchaltun</strong>");

var mirador = new L.LatLng(17.75505,-89.920431);
var mirador_marker = L.marker(mirador,ciudad).bindLabel("El Mirador", {noHide: true}).addTo(map);
mirador_marker.bindPopup("<strong>El Mirador</strong>");

var mixco = new L.LatLng(14.871667,-90.664167);
var mixco_marker = L.marker(mixco,ciudad).bindLabel("Mixco Viejo", {noHide: true}).addTo(map);
mixco_marker.bindPopup("<strong>Mixco Viejo</strong>");

var motul = new L.LatLng(17.026389,-89.901389);
var motul_marker = L.marker(motul,ciudad).bindLabel("Motul de San José", {noHide: true}).addTo(map);
motul_marker.bindPopup("<strong>Motul de San José</strong>");

var palenque = new L.LatLng(17.483978,-92.046328);
var palenque_marker = L.marker(palenque,ciudad).bindLabel("Palenque", {noHide: true}).addTo(map);
palenque_marker.bindPopup("<strong>Palenque</strong>");

var quirigua = new L.LatLng(15.269444,-89.040278);
var quirigua_marker = L.marker(quirigua,ciudad).bindLabel("Quiriguá", {noHide: true}).addTo(map);
quirigua_marker.bindPopup("<strong>Quiriguá</strong>");

var qumarkaj = new L.LatLng(15.023528,-91.171989);
var qumarkaj_marker = L.marker(qumarkaj,ciudad).bindLabel("Q'umarkaj", {noHide: true}).addTo(map);
qumarkaj_marker.bindPopup("<strong>Q'umarkaj</strong>");

var rioazul = new L.LatLng(17.616667,-89.483333);
var rioazul_marker = L.marker(rioazul,ciudad).bindLabel("Río Azul", {noHide: true}).addTo(map);
rioazul_marker.bindPopup("<strong>Río Azul</strong>");

var rita = new L.LatLng(18.4022824,-88.3949961);
var rita_marker = L.marker(rita,ciudad).bindLabel("Santa Rita Corozal", {noHide: true}).addTo(map);
rita_marker.bindPopup("<strong>Santa Rita Corozal</strong>");

var rey = new L.LatLng(21.060833,-86.781111);
var rey_marker = L.marker(rey,ciudad).bindLabel("El Rey", {noHide: true}).addTo(map);
rey_marker.bindPopup("<strong>El Rey</strong>");

var sayil = new L.LatLng(20.178,-89.6525);
var sayil_marker = L.marker(sayil,ciudad).bindLabel("Sayil", {noHide: true}).addTo(map);
sayil_marker.bindPopup("<strong>Sayil</strong>");

var seibal = new L.LatLng(16.511667,-90.061111);
var seibal_marker = L.marker(seibal,ciudad,ciudad).bindLabel("Seibal", {noHide: true}).addTo(map);
seibal_marker.bindPopup("<strong>Seibal</strong>");

var takalik = new L.LatLng(14.645833,-91.736111);
var takalik_marker = L.marker(takalik,ciudad).bindLabel("Takalik Abaj", {noHide: true}).addTo(map);
takalik_marker.bindPopup("<strong>Takalik Abaj</strong>");

var tikal = new L.LatLng(17.222094,-89.623614);
var tikal_marker = L.marker(tikal,ciudad).bindLabel("Tikal", {noHide: true}).addTo(map);
tikal_marker.bindPopup("<strong>Tikal</strong>");

var tonina = new L.LatLng(16.900212,-92.003846);
var tonina_marker = L.marker(tonina,ciudad).bindLabel("Tonina", {noHide: true}).addTo(map);
tonina_marker.bindPopup("<strong>Tonina</strong>");

var tulum = new L.LatLng(20.214722,-87.428889);
var tulum_marker = L.marker(tulum,ciudad).bindLabel("Tulum", {noHide: true}).addTo(map);
tulum_marker.bindPopup("<strong>Tulum</strong>");

var uxmal = new L.LatLng(20.359444,-89.771389);
var uxmal_marker = L.marker(uxmal,ciudad).bindLabel("Uxmal", {noHide: true}).addTo(map);
uxmal_marker.bindPopup("<strong>Uxmal</strong>");

var uaxactun = new L.LatLng(17.393561,-89.634533);
var uaxactun_marker = L.marker(uaxactun,ciudad).bindLabel("Uaxactun", {noHide: true}).addTo(map);
uaxactun_marker.bindPopup("<strong>Uaxactun</strong>");

var xtampak = new L.LatLng(19.766667,-89.65);
var xtampak_marker = L.marker(xtampak,ciudad).bindLabel("Xtampak", {noHide: true}).addTo(map);
xtampak_marker.bindPopup("<strong>Xtampak</strong>");

var xunantunich = new L.LatLng(17.0900115,-89.1437969);
var xunantunich_marker = L.marker(xunantunich,ciudad).bindLabel("Xunantunich", {noHide: true}).addTo(map);
xunantunich_marker.bindPopup("<strong>Xunantunich</strong>");

var yaxchilan = new L.LatLng(16.9,-90.966667);
var yaxchilan_marker = L.marker(yaxchilan,ciudad).bindLabel("Yaxchilan", {noHide: true}).addTo(map);
yaxchilan_marker.bindPopup("<strong>Yaxchilan</strong>");

var yaxha = new L.LatLng(17.0775,-89.4025);
var yaxha_marker = L.marker(yaxha,ciudad).bindLabel("Yaxha", {noHide: true}).addTo(map);
yaxha_marker.bindPopup("<strong>Yaxha</strong>");

// Pan out/in

L.easyButton( '<span class="star">&equiv;</span>', function(){
  map.setView([17.810278,-89.373470], 7, {animate: true, duration: 0.7});
}).addTo(map);
