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

var plaza_matriz = new L.LatLng(-34.90712,-56.20369);
var plaza_matriz_marker = L.marker(plaza_matriz).addTo(map);
plaza_matriz_marker.bindPopup("<strong>Plaza Matriz</strong>");

var plaza_independencia = new L.LatLng(-34.90663,-56.20064);
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

-34.902253, -56.176776
var univerdidad = new L.LatLng(-34.905660,-56.186209);
var univerdidad_marker = L.marker(univerdidad).addTo(map);
univerdidad_marker.bindPopup("<strong>Univerdidad de la República</strong>");

var pointList = [puerto, plaza_matriz, plaza_independencia, plaza_entrevero, plaza_cagancha, intendencia, univerdidad];
var firstpolyline = new L.Polyline(pointList, {
  color: '#00aedb',
  weight: 3,
  opacity: 0.5,
  smoothFactor: 1
}); // L.Polyline
firstpolyline.addTo(map);

var intendencia = [[-34.906045,-56.186731], [-34.905976,-56.185548],[-34.905535, -56.185597],[-34.905591, -56.186784]];

// create an orange rectangle
L.polygon(intendencia, {color: "#ff7800", weight: 1}).addTo(map);

    //add standard controls
    L.control.coordinates().addTo(map);
    //add configured controls
    L.control.coordinates({
      position:"bottomleft",
      decimals:2,
      decimalSeperator:",",
      labelTemplateLat:"Latitude: {y}",
      labelTemplateLng:"Longitude: {x}"
    }).addTo(map);
    L.control.coordinates({
      position:"topright",
      useDMS:true,
      labelTemplateLat:"N {y}",
      labelTemplateLng:"E {x}",
      useLatLngOrder:true
    }).addTo(map);