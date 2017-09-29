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
// https://[abc].tile.thunderforest.com/landscape/{z}/{x}/{y}.png
// https://[abc].tile.thunderforest.com/outdoors/{z}/{x}/{y}.png
// https://[abc].tile.thunderforest.com/transport/{z}/{x}/{y}.png
// https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw
// http://labs.strava.com/heatmap/#8/-54.99756/-33.11455/gray/bike

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
  maxZoom: 19,
  detectRetina: true
});
OpenStreetMap_Mapnik.addTo(map);

map.setView([17.810278,-89.373470], 7);

var i_ciudad1 = L.icon({
  iconUrl:       './js/images/ciudad1.png',
  // iconRetinaUrl: './js/images/maya_40.png',
  iconSize:      [35, 20],
  iconAnchor:    [35, 20],
  popupAnchor:   [-18, -20],
//   shadowUrl: './js/images/marker-shadow.png',
});
var ciudad1 = {icon: i_ciudad1, title: "Ciudad grande"};

var i_ciudad2 = L.icon({
  iconUrl:       './js/images/ciudad2.png',
  // iconRetinaUrl: './js/images/maya_40.png',
  iconSize:      [29, 17],
  iconAnchor:    [29, 17],
  popupAnchor:   [-15, -17],
//   shadowUrl: './js/images/marker-shadow.png',
});
var ciudad2 = {icon: i_ciudad2, title: "Ciudad mediana"};

var i_ciudad3 = L.icon({
  iconUrl:       './js/images/ciudad3.png',
  // iconRetinaUrl: './js/images/maya_40.png',
  iconSize:      [24, 14],
  iconAnchor:    [24, 14],
  popupAnchor:   [-12, -14],
//   shadowUrl: './js/images/marker-shadow.png',
});
var ciudad3 = {icon: i_ciudad3, title: "Ciudad pequeña"};

var i_cueva = L.icon({
  iconUrl:       './js/images/cueva.png',
  // iconRetinaUrl: './js/images/maya_40.png',
  iconSize:      [19, 13],
  iconAnchor:    [19, 13],
  popupAnchor:   [-8, -13],
//   shadowUrl: './js/images/marker-shadow.png',
});
var cueva = {icon: i_cueva, title: "Cueva"};

// Creo un array con la información de los sitios
var sitios = [
   ["Actun Tunichil Muknal",17.121330,-88.861048,cueva],
   ["Aguateca",16.412044,-90.188483,ciudad3],
   ["Altar de Sacrificios",16.467,-90.533,ciudad3],
   ["Altun Ha",17.76395,-88.347061,ciudad3],
   ["Baking Pot",17.203056,-89.019444,ciudad3],
   ["Barton Creek Cave",17.1327686,-89.0386111,cueva],
   ["El Baúl",14.3803,-91.0108,ciudad3],
   ["Becan",18.516667,-89.466667,ciudad3],
   ["Bonampak",16.704,-91.065,ciudad3],
   ["Cahal Pech",17.1457,-89.0741,ciudad3],
   ["Calakmul",18.105392,-89.810828,ciudad1],
   ["Caracol",16.763889,-89.1175,ciudad1],
   ["Cancuén",16,-89.933333,ciudad3],
   ["Cerros",18.358333,-88.351944,ciudad3],
   ["Arroyo Chaa",0,0,ciudad3],
   ["El Chal",16.633333,-89.65,ciudad3],
   ["Chamá",15.7417,-90.3663,ciudad3],
   ["Chitinamit",15.2892,-91.0892,ciudad3],
   ["Arroyo de Piedra",16.46,-90.26,ciudad3],
   ["Chicanná",18.507928,-89.487124,ciudad3],
   ["Chichen Itza",20.6829,-88.56865,ciudad3],
   ["Chocolá",14.5833,-91.45,ciudad3],
   ["Chutixtiox",15.2745,-91.1227,ciudad3],
   ["Cival",17.2825,-89.346667,ciudad2],
   ["Cerro Quiac",14.838993,-91.440715,ciudad3],
   ["Cobá",20.494722,-87.736111,ciudad1],
   ["Copán",14.84,-89.14,ciudad2],
   ["Cotzumalhuapa",14.381389,-91.018611,ciudad3],
   ["Dos Pilas",16.445833,-90.295833,ciudad3],
   ["Dzibilchaltun",21.091,-89.5903,ciudad3],
   ["Edzna",19.5968,-90.2291,ciudad3],
   ["Ek'Balam",20.891111,-88.136389,ciudad3],
   ["Izamal",20.928959,-89.017642,ciudad3],
   ["Lamanai",17.7525,-88.654444,ciudad3],
   ["Lubaantún",16.281111,-88.965,ciudad3],
   ["Louisville",18.316667,-88.5,ciudad3],
   ["El Mirador",17.75505,-89.920431,ciudad3],
   ["Mixco Viejo",14.871667,-90.664167,ciudad3],
   ["Motul de San José",17.026389,-89.901389,ciudad3],
   ["Nim Li Punit",16.3166018,-88.9400864,ciudad3],
   ["Nohmul",18.217356,-88.584731,ciudad3],
   ["Nohoch Che'en",0,0,cueva],
   ["Palenque",17.483978,-92.046328,ciudad3],
   ["El Perú",17.2783,-90.3806,ciudad3], // ultimo https://en.wikipedia.org/wiki/Becan
   ["El Pilar",17.256667,-89.155278,ciudad3],
   ["El Puente",15.110260, -88.791783,ciudad3],
   ["Pusilhá",16.104625,-89.242894,ciudad3],
   ["Quiriguá",15.269444,-89.040278,ciudad3],
   ["Q'umarkaj",15.023528,-91.171989,ciudad2],
   ["Río Azul",17.616667,-89.483333,ciudad3],
   ["El Rey",21.060833,-86.781111,ciudad3],
   ["Santa Rita Corozal",18.4022824,-88.3949961,ciudad2],
   ["Sayil",20.178,-89.6525,ciudad2],
   ["Seibal",16.511667,-90.061111,ciudad2],
   ["Takalik Abaj",14.645833,-91.736111,ciudad3],
   ["Tikal",17.222094,-89.623614,ciudad1],
   ["Tonina",16.900212,-92.003846,ciudad3],
   ["Tulum",20.214722,-87.428889,ciudad3],
   ["Uxbenká",16.2367,-89.0783,ciudad3],
   ["Uxmal",20.359444,-89.771389,ciudad3],
   ["Uaxactun",17.393561,-89.634533,ciudad3],
   ["Xtampak",19.766667,-89.65,ciudad3],
   ["Xunantunich",17.0900115,-89.1437969,ciudad3],
   ["Yaxchilan",16.9,-90.966667,ciudad3],
   ["Yaxha",17.0775,-89.4025,ciudad3]
];

var info = L.control();

// create a div with a class "info"
info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
}; // info.onAdd

// method that we will use to update the control based on feature properties passed
info.update = function (marcador) {
  this._div.innerHTML = '<h2>Información del sitio</h2>' + (marcador ?
    '<b>Nombre: </b>' + marcador.target.Nombre 

    // + 
    // '<div class="image">' +
    //   '<img src="' + "imgs/" + marcador.target.Nombre + ".jpg" + '" />' +
    //   // '<div class="caption">' + img[1] + '</div>' +
    // '</div>'

    : 'Hover over a state');
}; // info.update

info.addTo(map);

// agrego los sitios al mapa
for (var i = 0; i < sitios.length; i++) {
	marker = new L.marker([sitios[i][1],sitios[i][2]],sitios[i][3])
		.bindPopup("<b>" + sitios[i][0] + "</b>", {closeButton:false});

	marker.Nombre = sitios[i][0];
  marker.ID = i;

	marker.on('mouseover', function (e) {
    console.log(e.target.Nombre);
		info.update(e);
    this.openPopup();
  });

  marker.on('mouseout', function (e) {
    this.closePopup();
  });

  marker.addTo(map);
} // for

// Pan out/in

L.easyButton( '<span class="star">&equiv;</span>', function(){
  map.setView([17.810278,-89.373470], 7, {animate: true, duration: 0.7});
}).addTo(map);

function onMapClick(e) {
  console.log(e.latlng);
  map.panTo(e.latlng);
};

map.on('click', onMapClick);
