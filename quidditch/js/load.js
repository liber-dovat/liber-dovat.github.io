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

// http://harrypotter.wikia.com/wiki/List_of_Quidditch_teams

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

map.setView([0,0], 2);

var i_snitch = L.icon({
  iconUrl:       './js/images/snitch.png',
  // iconRetinaUrl: './js/images/maya_40.png',
  iconSize:      [30, 30],
  iconAnchor:    [30, 30],
  popupAnchor:   [-15, -30],
//   shadowUrl: './js/images/marker-shadow.png',
});
var snitch = {icon: i_snitch, title: "Snitch"};

// Creo un array con la información de los sitios
var sitios = [
   ["Appleby Arrows",54.57828978505959,-2.4899160861968994 ,snitch],
   ["Wimborne Wasps",50.80065,-1.98449,snitch],
   ["Caerphilly Catapults",51.57882,-3.21813,snitch],
   ["Chudley P A",50.96399,-3.79419,snitch],
   ["Chudley Close",50.62991,-3.39282,snitch],
   ["Falmouth Falcons",50.15257,-5.06627,snitch],
   ["Holyhead Harpies",53.30929773715686,-4.633693099021912,snitch],
   ["Kenmare Kestrels",51.87795,-9.58357,snitch],
   ["Montrose Magpies",56.70692,-2.46611,snitch],
   ["Ballycastle Bats",55.20142,-6.25517,snitch],
   ["Pride of Portree",57.41247,-6.19602,snitch],
   ["Dorset",50.73906,-2.33823,snitch],
   ["Tutshill Tornadoes",51.65258,-2.66475,snitch],
   ["Wigtown Wanderers",54.86715,-4.44423,snitch],
   ["Vratsa Vultures",43.21023,23.55288,snitch],
   ["Quiberon Quafflepunchers",47.48213,-3.12105,snitch],
   ["Heidelberg Harriers",49.39875,8.67243,snitch],
   ["Bigonville Bombers",49.8501,5.79441,snitch],
   ["Braga Broomfleet",41.550587371548595,-8.42787891626358 ,snitch],
   ["Grodzisk Goblins",52.22553,16.36644,snitch],
   ["Moutohora Macaws",-37.85635087762136,176.97340607643127,snitch],
   ["Wollongong Warriors",-34.42507,150.89314,snitch],
   ["Patonga Proudsticks",2.75,33.29999,snitch],
   ["Tchamba Charmers",9.03333,1.41666,snitch],
   ["Gīmbī Giant-Slayers",9.16666,35.83333,snitch],
   ["Sumbawanga Sunrays",-7.96666,31.61666,snitch],
   ["Moose Jaw Meteorites",50.39158,-105.53485,snitch],
   ["Haileybury Hammers",47.44632,-79.63545,snitch],
   ["Stonewall Stormers",50.13515,-97.32739,snitch],
   ["Sweetwater All-Stars",32.47095,-100.40593,snitch],
   ["Fitchburg Finches",42.58342,-71.80229,snitch],
   ["Toyohashi Tengu",34.76919,137.39146,snitch],
   ["Thundelarra Thunderers",-28.891944,117.130556,snitch],
   ["Gorodok Gargoyles",55.1561605,21.6523468,snitch],
   ["Karasjok Kites",69.3893352,24.1072637,snitch],
   ["Tarapoto Tree-Skimmers",-6.4967602,-76.3980682,snitch]
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
  map.setView([0,0], 2, {animate: true, duration: 0.7});
}).addTo(map);

function onMapClick(e) {
  console.log(e.latlng);
  map.panTo(e.latlng);
};

map.on('click', onMapClick);
