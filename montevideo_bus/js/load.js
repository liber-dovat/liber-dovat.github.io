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

// http://blog.thematicmapping.org/2013/06/converting-shapefiles-to-topojson.html

var map = L.map('map');

// var OpenStreetMap_Mapnik = L.tileLayer('http://otile1-s.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', {
//   attribution: '&copy; <a href="https://opentopomap.org/about">OpenTopoMap</a>'
// });
// OpenStreetMap_Mapnik.addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/liber-dovat/ciopxjlfd002xbom5b74c3bj3/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGliZXItZG92YXQiLCJhIjoiY2lvcHd3cHJ4MDBjdXVobHo2MXFieWp5diJ9.ICKX_7iHmGKJjklu_uQbug', {
     maxZoom: 18,
     attribution: 'Map data &copy; <a href="http://mapbox.com">Mapbox</a> contributors, ' +
       '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
       'Imagery © <a href="http://mapbox.com">Mapbox</a>',
     id: 'mapbox.light',
     detectRetina: true
   }).addTo(map);

map.setView([-34.9159, -56.16202], 14);

function estiloDeLineas(DESC_LINEA) {
  var data = [3];
  // data = [weight, opacity, color]

  switch(DESC_LINEA) {
    case "185": data = [3,0.5,'#b1c901']; break;
    case "183": data = [3,0.5,'#ee4039']; break;
    case "100": data = [3,0.5,'#00aedb']; break;
    case "103": data = [3,0.5,'#6b207f']; break;
    case "104": data = [3,0.5,'#018266']; break;
    case "117": data = [3,0.5,'#e1017b']; break;
    case "121": data = [3,0.5,'#FF0000']; break;
    case "133": data = [3,0.5,'#fdb930']; break;

    default: data = [1,0.2,'#cccccc'];
  } // switch

  return data;
} // colorDeLineas

// estilo de colores en tonos de amarillo
function colorearLineas(feature) {
  var data = estiloDeLineas(feature.properties.DESC_LINEA);
    return {
        weight: data[0],
        opacity: data[1],
        color: data[2]
    };
} // colorearLineas

// var mvdo_geojson = new L.GeoJSON.AJAX("./assets/montevideo_topo.geojson", {style: azules_a_marrones});
// mvdo_geojson.addTo(map);

// var canelones_geojson = new L.GeoJSON.AJAX("./assets/canelones_a2mts_5decimales.geojson", {style: azules_a_marrones});
// canelones_geojson.addTo(map);

// var montevideo_geojson = new L.GeoJSON.AJAX("./assets/montevideo_a2mts_5decimales.geojson", {style: azules_a_marrones});
// montevideo_geojson.addTo(map);

var montevideo_geojson = new L.GeoJSON.AJAX("./assets/v_uptu_lsv_indented.geojson", {style: colorearLineas});
montevideo_geojson.addTo(map);
