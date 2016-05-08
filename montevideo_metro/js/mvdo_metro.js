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
  attribution: '&copy; <a href="https://opentopomap.org/about">OpenTopoMap</a>'
});
OpenStreetMap_Mapnik.addTo(map);

map.setView([-34.9159, -56.16202], 14);

// http://leafletjs.com/examples/custom-icons.html

var puerto = new L.LatLng(-34.90461,-56.21027);
var puerto_marker = L.marker(puerto).addTo(map);
puerto_marker.bindPopup("<strong>Puerto</strong>");

var plaza_matriz = new L.LatLng(-34.90701, -56.20337);
var plaza_matriz_marker = L.marker(plaza_matriz).addTo(map);
plaza_matriz_marker.bindPopup("<strong>Plaza Matriz</strong>");

var plaza_independencia = new L.LatLng(-34.90652, -56.20075);
var plaza_independencia_marker = L.marker(plaza_independencia).addTo(map);
plaza_independencia_marker.bindPopup("<strong>Plaza Independencia</strong>");

var plaza_entrevero = new L.LatLng(-34.90612,-56.19418);
var plaza_entrevero_marker = L.marker(plaza_entrevero).addTo(map);
plaza_entrevero_marker.bindPopup("<strong>Plaza Del Entrevero</strong>");

var plaza_cagancha = new L.LatLng(-34.905935,-56.191325);
var plaza_cagancha_marker = L.marker(plaza_cagancha).addTo(map);
plaza_cagancha_marker.bindPopup("<strong>Plaza Cagancha</strong>");

var intendencia = new L.LatLng(-34.905660,-56.186209);
var intendencia_marker = L.marker(intendencia).addTo(map);
intendencia_marker.bindPopup("<strong>Intendencia de Montevideo</strong>");

var univerdidad = new L.LatLng(-34.90196, -56.17635);
var univerdidad_marker = L.marker(univerdidad).addTo(map);
univerdidad_marker.bindPopup("<strong>Univerdidad de la República</strong>");

// --
var linea_a = [
   new L.LatLng(-34.90701, -56.20337),
   new L.LatLng(-34.90657, -56.20204),
   new L.LatLng(-34.90652, -56.20075),
   new L.LatLng(-34.90644, -56.19871),
   new L.LatLng(-34.90625, -56.19587),
   new L.LatLng(-34.90615, -56.19476),
   new L.LatLng(-34.906, -56.19251),
   new L.LatLng(-34.90561, -56.18686),
   new L.LatLng(-34.90548, -56.18527),
   new L.LatLng(-34.90348, -56.18004),
   new L.LatLng(-34.90241, -56.17726),
   new L.LatLng(-34.89751, -56.16469),
   new L.LatLng(-34.89372, -56.16509),
];

var linea_a_poly = new L.Polyline(linea_a, {
  color: '#00aedb',
  weight: 3,
  opacity: 0.5,
  smoothFactor: 1
}); // linea_a_poly
linea_a_poly.addTo(map);

var intendencia = [[-34.906045,-56.186731], [-34.905976,-56.185548],[-34.905535, -56.185597],[-34.905591, -56.186784]];

// create an orange rectangle
L.polygon(intendencia, {color: "#ff7800", weight: 1}).addTo(map);

//     //add standard controls
//     L.control.coordinates().addTo(map);
//     //add configured controls
//     L.control.coordinates({
//       position:"bottomleft",
//       decimals:2,
//       decimalSeperator:",",
//       labelTemplateLat:"Latitude: {y}",
//       labelTemplateLng:"Longitude: {x}"
//     }).addTo(map);
//     L.control.coordinates({
//       position:"topright",
//       useDMS:true,
//       labelTemplateLat:"N {y}",
//       labelTemplateLng:"E {x}",
//       useLatLngOrder:true
//     }).addTo(map);

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
    map.panTo(e.latlng);
//     gib_uni();
//     marker = new L.marker(e.latlng, {id:uni,draggable:'true'});
//     marker.on('dragend', function(event){
//             var marker = event.target;
//             var position = marker.getLatLng();
//             console.log(position);
// //             alert(position);
//             marker.setLatLng([position],{id:uni,draggable:'true'}).bindPopup(position).update();
//             map.panTo(marker.getLatLng());
//     });
//     map.addLayer(marker);
};

map.on('click', onMapClick);
