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

// var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://opentopomap.org/about">OpenTopoMap</a>',
//   maxZoom: 19
// });
// OpenStreetMap_Mapnik.addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/liber-dovat/ciopxjlfd002xbom5b74c3bj3/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGliZXItZG92YXQiLCJhIjoiY2lvcHd3cHJ4MDBjdXVobHo2MXFieWp5diJ9.ICKX_7iHmGKJjklu_uQbug', {
     maxZoom: 18,
     attribution: 'Map data &copy; <a href="http://mapbox.com">Mapbox</a> contributors, ' +
       '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
       'Imagery © <a href="http://mapbox.com">Mapbox</a>',
     id: 'mapbox.light'
   }).addTo(map);

// L.tileLayer('https://api.mapbox.com/styles/v1/liber-dovat/cj4zswhpf10d72rpecjwzyiom/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGliZXItZG92YXQiLCJhIjoiY2lvcHd3cHJ4MDBjdXVobHo2MXFieWp5diJ9.ICKX_7iHmGKJjklu_uQbug', {
//      maxZoom: 18,
//      attribution: 'Map data &copy; <a href="http://mapbox.com">Mapbox</a> contributors, ' +
//        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//      id: 'mapbox.light'
//    }).addTo(map);

map.setView([36.142,-118.597], 6);

// Landmarks
// Museums and art
// Parks and recreation
// Views
// Entertainment
// Sports
// Food and drink
// Shopping

var i_landmark = L.icon({
  iconUrl:     './images/landmark.png',
  iconSize:    [20, 30],
  iconAnchor:  [10, 30],
  popupAnchor: [0, -30],
  // shadowUrl:   './images/camera.png',
});
var landmark = {icon: i_landmark, title: "Landmarks"};

var i_camera = L.icon({
  iconUrl:     './images/camera.png',
  iconSize:    [20, 30],
  iconAnchor:  [10, 30],
  popupAnchor: [0, -30],
  // shadowUrl:   './images/camera.png',
});
var views = {icon: i_camera, title: "Views"};

var i_museum = L.icon({
  iconUrl:     './images/museum.png',
  iconSize:    [20, 30],
  iconAnchor:  [10, 30],
  popupAnchor: [0, -30],
  // shadowUrl:   './images/museum.png',
});
var museum = {icon: i_museum, title: "Museums and art"};

var i_park = L.icon({
  iconUrl:     './images/park.png',
  iconSize:    [20, 30],
  iconAnchor:  [10, 30],
  popupAnchor: [0, -30],
  // shadowUrl:   './images/park.png',
});
var park = {icon: i_park, title: "Parks and recreation"};

var i_restaurant = L.icon({
  iconUrl:     './images/restaurant.png',
  iconSize:    [20, 30],
  iconAnchor:  [10, 30],
  popupAnchor: [0, -30],
  // shadowUrl:   './images/restaurant.png',
});
var restaurant = {icon: i_restaurant, title: "Food and drink"};

var i_marca = L.icon({
  iconUrl:     './images/marker-icon.png',
  iconSize:    [25, 41],
  iconAnchor:  [12, 41],
  popupAnchor: [0, -35],
  shadowUrl:   './images/marker-shadow.png',
});
var marca1 = {icon: i_marca, title: "Marcador"};

// Creo un array con la información de los sitios
var sitios = [

   // Los Angeles
   ["TCL Chinese Theatres",34.1018884,-118.3410603, marca1],
   ["Olvera Street",34.05749,-118.23788, views],
   ["Hollywood Sign - Sign spot",34.1310112,-118.3204318, landmark],
   ["Universal CityWalk Hollywood",34.1376167,-118.3530909, views],
   ["Sunset Boulevard",34.0807239,-118.4131051, views],
   ["Walk Of Fame",34.1023066,-118.3396579, views],
   ["Little Tokyo",34.0540612,-118.2500289, views],
   ["Jardín Japonés James Irvine",34.047560,-118.241444,park],
   ["Japanese American National Museum",34.0494311,-118.2387849, museum],
   ["Korean Bell of Friendship",33.709720,-118.293804, landmark],
   ["Chinatown", 34.059348, -118.241036, views],
   ["La calle Chung King",34.066091,-118.238465, views],
   ["Templo Thien Hau",34.062631,-118.240901, marca1],
   ["Museo Chino-Americano",34.055823,-118.239073, museum],
   ["Sunset Strip", 34.091428, -118.382078, views],
   ["The Grove", 34.072155, -118.358381, views],
   ["Los Callejones - Santee Alley", 34.037460, -118.255646, marca1],
   ["Observatorio Griffith", 34.119193, -118.300362, marca1],
   ["Venice Beach", 33.983862, -118.472090, marca1],
   ["La playa de Santa Mónica", 34.012505, -118.500079, marca1],
   ["LA Fashion District",34.033022, -118.251988, marca1],
   ["Heritage Square Museum", 34.088602, -118.207920, museum],
   ["Centro Getty", 34.078022, -118.474094, marca1],
   ["California Science Center", 34.015850, -118.286110, marca1],
   ["The Nethercutt Collection", 34.307350, -118.463964, marca1],
   ["Madame Tussauds Hollywood", 34.101901, -118.341529, marca1],
   ["The Hollywood Museum", 34.101073, -118.338308, museum],
   ["La Brea Tar Pits and Museum", 34.063798, -118.355433, museum],
   ["Autry Museum of the American West", 34.148612, -118.281213, museum],
   ["Wells Fargo History Museum", 34.053061, -118.252333, museum],
   ["Ripley’s Hollywood", 34.101417, -118.338538, marca1],
   ["Farmer’s Market", 34.071681, -118.360814, marca1],
   ["Paramount Studio tour", 34.085407, -118.319152, marca1],
   ["Universal Studio tour", 34.138104, -118.353379, marca1],
   ["Warner Bros. Studio tour", 34.152050, -118.336198, marca1],
   ["Sony Studio tour", 34.017681, -118.401365, marca1],
   ["LA escape room", 34.041954, -118.252737, marca1],
   ["Escape Hotel Hollywood", 34.101826, -118.334542, marca1],
   ["The Basement A Live Escape Room Experience", 34.294396, -118.415488, marca1],
   ["60out Escape Rooms", 34.046482, -118.449655, marca1],

   // San Francisco
   ["Fisherman’s Wharf", 37.807086, -122.417278, restaurant],
   ["Golden Gate Bridge", 37.818608, -122.478411, landmark],
   ["Lombard Street", 37.802124, -122.418789, views],
   ["Isla de Alcatraz", 37.826942, -122.422992, landmark],
   ["Twin Peaks", 37.752493, -122.447651, park],
   ["Castro", 37.762675, -122.435223, views],
   ["Chinatown", 37.794162, -122.407169, views],
   ["Presidio", 37.798551, -122.467199, landmark],
   ["Fort Point", 37.810603, -122.477053, landmark],
   ["Painted Ladies", 37.776146, -122.432976, views],
   ["Cliff House", 37.778465, -122.513963, restaurant],
   ["Casa Haas-Lilienthal", 37.793276, -122.424961, views],
   ["Sociedad Histórica China de América", 37.793834, -122.408779, museum],
   ["Estación de Inmigración de la Isla del Ángel", 37.861213, -122.431144, landmark],
   ["Ferry Building Marketplace", 37.795259, -122.393447, views],
   ["Misión Dolores", 37.764371, -122.426901, landmark],
   ["San Francisco City Hall", 37.779286, -122.419143, landmark],
   ["Museo de Arte Asiático", 37.780203, -122.416638, museum],
   ["Grace Cathedral", 37.791847, -122.413438, landmark],
   ["Acuario de la Bahía", 37.808602, -122.409373, views],
   ["Museo del Cable Car", 37.794691, -122.411722, museum],
   ["Musée Mécanique", 37.809318, -122.416062, museum],
   ["Museo de Young", 37.771389, -122.468136, museum],
   ["San Francisco’s Dungeon", 37.808220, -122.414731, views],
   ["Museo de Arte Moderno de San Francisco", 37.785706, -122.401054, museum],
   ["Napa Valley", 38.293565, -122.292911, views],

   // Las Vegas
];

// var customControl = L.Control.extend({
//   options: {
//     position: 'topleft' 
//     //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
//   },
//   onAdd: function (map) {
//     var panOut = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

//     panOut.style.backgroundColor = 'white';     
//     panOut.style.backgroundImage = "url(https://t1.gstatic.com/images?q=tbn:ANd9GcR6FCUMW5bPn8C4PbKak2BJQQsmC-K9-mbYBeFZm1ZM2w2GRy40Ew)";
//     panOut.style.backgroundSize = "30px 30px";
//     panOut.style.width = '30px';
//     panOut.style.height = '30px';

//     panOut.onclick = function(){
//       console.log('buttonClicked');
//       map.setView([36.142,-118.597], 7, {animate: true, duration: 0.8});

//       // map.panTo(L.latLng(36.142,-118.597));
//     }
//     return panOut;
//   },
// });

// map.addControl(new customControl());

// https://stackoverflow.com/questions/17460116/how-can-i-expand-and-collapse-a-div-using-javascript
// http://jsfiddle.net/hungerpain/eK8X5/7/

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

    : 'Hover over a marker');
}; // info.update

info.addTo(map);

// agrego los sitios al mapa
for (var i = 0; i < sitios.length; i++) {
	marker = new L.marker([sitios[i][1],sitios[i][2]],sitios[i][3])
		.bindPopup("<b>" + sitios[i][0] + "</b>", {closeButton:false});

	marker.Nombre = sitios[i][0];
  marker.ID = i;

	marker.on('mouseover', function (e) {
    // console.log(e.target.Nombre);
		// info.update(e);
    // this.openPopup();
  });

  marker.on('click', function (e) {
    // console.log(e.target.Nombre);
    info.update(e);
    this.openPopup();
  });

  marker.on('mouseout', function (e) {
    this.closePopup();
  });

  marker.addTo(map);
} // for

// Pan out/in
// '<span class="star">&equiv;</span>'
L.easyButton( '<span class="star">CA</span>', function(btn, map){
  map.setView([36.142,-118.597], 6, {animate: true, duration: 0.8});
}).addTo(map);

L.easyButton( '<span class="star">LA</span>', function(btn, map){
  map.setView([34.03388358382995, -118.36360931396486], 10, {animate: true, duration: 0.8});
}).addTo(map);

L.easyButton( '<span class="star">SF</span>', function(btn, map){
  map.setView([37.797644864326564, -122.45760440826417 ], 12, {animate: true, duration: 0.8});
}).addTo(map);

L.easyButton( '<span class="star">LV</span>', function(btn, map){
  map.setView([36.1740,-115.1319], 11, {animate: true, duration: 0.8});
}).addTo(map);

function onMapClick(e) {
  console.log(e.latlng);
  // map.panTo(e.latlng);
};

map.on('click', onMapClick);
