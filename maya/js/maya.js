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
https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw

var map = L.map('map');

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
// 			maxZoom: 18,
// 			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
// 				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
// 				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
// 			id: 'mapbox.light'
// 		}).addTo(map);

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

// http://gis.stackexchange.com/questions/31951/how-to-show-a-popup-on-mouse-over-not-on-click
// http://harrywood.co.uk/maps/examples/leaflet/marker-array.view.html
// http://leafletjs.com/examples/choropleth.html

// https://github.com/Leaflet/Leaflet/issues/859

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (marcador) {
    this._div.innerHTML = '<h4>Información del sitio</h4>' +  (marcador ?
        '<b>' + marcador.target.Nombre + '</b><br />' + marcador.target.Nombre + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
};

info.addTo(map);

// Creo un array con la información de las ciudades
var ciudades = [
   ["Altun Ha",17.76395,-88.347061],
   ["Becan",18.516667,-89.466667],
   ["Bonampak",16.704,-91.065],
   ["Cahal Pech",17.1457,-89.0741],
   ["Calakmul",18.105392,-89.810828],
   ["Caracol",16.763889,-89.1175],
   ["Cerros",18.358333,-88.351944],
   ["Chichen Itza",20.6829,-88.56865],
   ["Cival",17.2825,-89.346667],
   ["Cobá",20.494722,-87.736111],
   ["Copán",14.84,-89.14],
   ["Edzna",19.5968,-90.2291],
   ["Ek'Balam",20.891111,-88.136389],
   ["Izamal",20.928959,-89.017642],
   ["Lamanai",17.7525,-88.654444],
   ["Dzibilchaltun",21.091,-89.5903],
   ["El Mirador",17.75505,-89.920431],
   ["Mixco Viejo",14.871667,-90.664167],
   ["Motul de San José",17.026389,-89.901389],
   ["Palenque",17.483978,-92.046328],
   ["Quiriguá",15.269444,-89.040278],
   ["Q'umarkaj",15.023528,-91.171989],
   ["Río Azul",17.616667,-89.483333],
   ["Santa Rita Corozal",18.4022824,-88.3949961],
   ["El Rey",21.060833,-86.781111],
   ["Sayil",20.178,-89.6525],
   ["Seibal",16.511667,-90.061111],
   ["Takalik Abaj",14.645833,-91.736111],
   ["Tikal",17.222094,-89.623614],
   ["Tonina",16.900212,-92.003846],
   ["Tulum",20.214722,-87.428889],
   ["Uxmal",20.359444,-89.771389],
   ["Uaxactun",17.393561,-89.634533],
   ["Xtampak",19.766667,-89.65],
   ["Xunantunich",17.0900115,-89.1437969],
   ["Yaxchilan",16.9,-90.966667],
   ["Yaxha",17.0775,-89.4025]
];

// agrego las ciudades al mapa
for (var i = 0; i < ciudades.length; i++) {
	marker = new L.marker([ciudades[i][1],ciudades[i][2]],ciudad)
		.bindPopup(ciudades[i][0]);

	marker.Nombre = ciudades[i][0];

	marker.on('mouseover', function (e) {
        console.log(e.target.Nombre);
		info.update(e);
    });

    marker.addTo(map);
} // for

// Pan out/in

L.easyButton( '<span class="star">&equiv;</span>', function(){
  map.setView([17.810278,-89.373470], 7, {animate: true, duration: 0.7});
}).addTo(map);
