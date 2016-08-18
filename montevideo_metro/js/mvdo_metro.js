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

L.tileLayer('https://api.mapbox.com/styles/v1/liber-dovat/ciopxjlfd002xbom5b74c3bj3/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGliZXItZG92YXQiLCJhIjoiY2lvcHd3cHJ4MDBjdXVobHo2MXFieWp5diJ9.ICKX_7iHmGKJjklu_uQbug', {
     maxZoom: 18,
     attribution: 'Map data &copy; <a href="http://mapbox.com">Mapbox</a> contributors, ' +
       '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
       'Imagery © <a href="http://mapbox.com">Mapbox</a>',
     id: 'mapbox.light'
   }).addTo(map);

map.setView([-34.82508, -56.06873], 12);

// http://leafletjs.com/examples/custom-icons.html

// var puerto = new L.LatLng(-34.90461,-56.21027);
// var puerto_marker = L.marker(puerto).addTo(map);
// puerto_marker.bindPopup("<strong>Puerto</strong>");

// var plaza_matriz = new L.LatLng(-34.90701, -56.20337);
// var plaza_matriz_marker = L.marker(plaza_matriz).addTo(map);
// plaza_matriz_marker.bindPopup("<strong>Plaza Matriz</strong>");

// var plaza_independencia = new L.LatLng(-34.90652, -56.20075);
// var plaza_independencia_marker = L.marker(plaza_independencia).addTo(map);
// plaza_independencia_marker.bindPopup("<strong>Plaza Independencia</strong>");

// var plaza_entrevero = new L.LatLng(-34.90612,-56.19418);
// var plaza_entrevero_marker = L.marker(plaza_entrevero).addTo(map);
// plaza_entrevero_marker.bindPopup("<strong>Plaza Del Entrevero</strong>");

// var plaza_cagancha = new L.LatLng(-34.90592,-56.19136);
// var plaza_cagancha_marker = L.marker(plaza_cagancha).addTo(map);
// plaza_cagancha_marker.bindPopup("<strong>Plaza Cagancha</strong>");

// var intendencia = new L.LatLng(-34.905660,-56.186209);
// var intendencia_marker = L.marker(intendencia).addTo(map);
// intendencia_marker.bindPopup("<strong>Intendencia de Montevideo</strong>");

// var univerdidad = new L.LatLng(-34.90196, -56.17635);
// var univerdidad_marker = L.marker(univerdidad).addTo(map);
// univerdidad_marker.bindPopup("<strong>Univerdidad de la República</strong>");

///--------------------------------------

// A: 18 de julio
var linea_a = [
   new L.LatLng(-34.90701, -56.20337),
   new L.LatLng(-34.90657, -56.20206),
   new L.LatLng(-34.90652, -56.20075),
   new L.LatLng(-34.90644, -56.19871),
   new L.LatLng(-34.90625, -56.19587),
   new L.LatLng(-34.90615, -56.19476),
   new L.LatLng(-34.906, -56.19251),
   new L.LatLng(-34.90561, -56.18686),
   new L.LatLng(-34.90548, -56.18527),
   new L.LatLng(-34.90543, -56.18507),
   new L.LatLng(-34.90348, -56.18004),
   new L.LatLng(-34.90241, -56.17726),
   new L.LatLng(-34.89754, -56.16476), // obelisco
   new L.LatLng(-34.89372, -56.1652), // tres cruces
];

var linea_a_poly = new L.Polyline(linea_a, {
  color: '#00aedb',
  weight: 7,
  opacity: 0.7,
  smoothFactor: 1
}); // linea_a_poly
linea_a_poly.addTo(map);

///--------------------------------------

// B: Bulevard Artigas
var linea_b = [
   new L.LatLng(-34.92591, -56.16156), // parva domus
   new L.LatLng(-34.92152, -56.16202), // solano garcia
   new L.LatLng(-34.91475, -56.16278), // sarmiento
   new L.LatLng(-34.91098, -56.16318), // arquitectura
   new L.LatLng(-34.90633, -56.1637), // avenida brasil
   new L.LatLng(-34.90224, -56.16414), // rivera
   new L.LatLng(-34.89751, -56.16469), // obelisco
   new L.LatLng(-34.89372, -56.16509), // tres cruces
   new L.LatLng(-34.87818, -56.16679), // colorado, canal 5
   new L.LatLng(-34.86981, -56.16767), // luis alberto de herrera
   new L.LatLng(-34.87029, -56.17448), // general flores
   new L.LatLng(-34.87084, -56.18226), // san martin
   new L.LatLng(-34.8714, -56.19022), // millan
   new L.LatLng(-34.87227, -56.20221), // plaza cuba
];

var linea_b_poly = new L.Polyline(linea_b, {
  color: '#ee4039',
  weight: 7,
  opacity: 0.7,
  smoothFactor: 1
}); // linea_b_poly
linea_b_poly.addTo(map);

///--------------------------------------

// C: Avenida Italia
var linea_c = [
  new L.LatLng(-34.89479, -56.16475), // tres cruces
  new L.LatLng(-34.8868, -56.14194), // magariños cervantes
  new L.LatLng(-34.88598, -56.10522), // rambla concepcion del uruguay
  new L.LatLng(-34.87843, -56.07023), // havre
  new L.LatLng(-34.87558, -56.03707),
];

var linea_c_poly = new L.Polyline(linea_c, {
  color: '#0168b3',
  weight: 7,
  opacity: 0.7,
  smoothFactor: 1
}); // linea_c_poly
linea_c_poly.addTo(map);

///--------------------------------------

// D: Rivera
var linea_d = [
  new L.LatLng(-34.90222, -56.17396), // jackson
  new L.LatLng(-34.90198, -56.1652),  // mario cassinoni
  new L.LatLng(-34.90302, -56.16037), // obligado
  new L.LatLng(-34.90313, -56.15275), // diego lamas
  new L.LatLng(-34.90284, -56.14612), // alejo rosell y rius
  new L.LatLng(-34.90274, -56.14494), // felix buxareo
  new L.LatLng(-34.90165, -56.1399),  // marco bruto
  new L.LatLng(-34.89964, -56.13397), // pedro bustamante
  new L.LatLng(-34.89951, -56.13327), // caracas
  new L.LatLng(-34.89988, -56.12976), // nicolas piaggio
  new L.LatLng(-34.89587, -56.12167), // solano lopez
  new L.LatLng(-34.89987, -56.12927),
  new L.LatLng(-34.89972, -56.12895), // tomas basañez
  new L.LatLng(-34.89159, -56.11222), // atlantico
  new L.LatLng(-34.89143, -56.11017), // candelaria
  new L.LatLng(-34.89115, -56.10894), // hipolito yrigoyen
  new L.LatLng(-34.89097, -56.10661), // concepcion del uruguay
  new L.LatLng(-34.89116, -56.09637),
  new L.LatLng(-34.89111, -56.09602), // enrique legrand
  new L.LatLng(-34.89084, -56.09189), // alejandro fleming
  new L.LatLng(-34.89063, -56.09101), // zum felde
  new L.LatLng(-34.89079, -56.0732),  // San marino
  new L.LatLng(-34.89098, -56.07233), // bolivia
  new L.LatLng(-34.87871, -56.03693),
];

var linea_d_poly = new L.Polyline(linea_d, {
  color: '#018266',
  weight: 7,
  opacity: 0.7,
  smoothFactor: 1
}); // linea_d_poly
linea_d_poly.addTo(map);

///--------------------------------------

// E: 8 de octubre
var linea_e = [
  new L.LatLng(-34.89427, -56.16421), // avenida italia

  new L.LatLng(-34.88377, -56.15544), // pedro olmida
  new L.LatLng(-34.87146, -56.13522), // pan de azucar
  new L.LatLng(-34.85759, -56.13353), // jose de bejar
  new L.LatLng(-34.84975, -56.12727), // ruben dario
  new L.LatLng(-34.84182, -56.12453), // libia
  new L.LatLng(-34.83404, -56.11184), // camino chacarita de los padres
  new L.LatLng(-34.82862, -56.10877), // calle 7m la chacarita
  new L.LatLng(-34.82437, -56.10181), // aries
  new L.LatLng(-34.81159, -56.09489),
  new L.LatLng(-34.80721, -56.09087),
  new L.LatLng(-34.80156, -56.08693), // camino repetto

  new L.LatLng(-34.7923, -56.07017), // zonamerica
];

var linea_e_poly = new L.Polyline(linea_e, {
  color: '#6b207f',
  weight: 7,
  opacity: 0.7,
  smoothFactor: 1
}); // linea_e_poly
linea_e_poly.addTo(map);

var linea_e_ext = [
  new L.LatLng(-34.7923, -56.07017), // zonamerica
  new L.LatLng(-34.75339, -56.0027), // republica, barros blancos
  new L.LatLng(-34.72325, -55.95805), // pando
  new L.LatLng(-34.70157, -55.89582), // empalme olmos
];

var linea_e_ext_poly = new L.Polyline(linea_e_ext, {
  color: '#6b207f',
  weight: 7,
  opacity: 0.4,
  smoothFactor: 1
}); // linea_e_ext_poly
linea_e_ext_poly.addTo(map);

///--------------------------------------

// F: Propios
var linea_f = [
  new L.LatLng(-34.89928, -56.12286), // ingeniero juana pereyra
  new L.LatLng(-34.89749, -56.1247), // rivera
  new L.LatLng(-34.89139, -56.13187), // presidente oribe
  new L.LatLng(-34.88659, -56.13795), // avenida italia
  new L.LatLng(-34.87928, -56.14791), // 8 de octubre
  new L.LatLng(-34.86796, -56.16267), // avenida jose pedro varela
  new L.LatLng(-34.86311, -56.16901), // plaza del ejercito
  new L.LatLng(-34.85323, -56.18174), // burgues
  new L.LatLng(-34.8484, -56.18762), // arechavaleta
  new L.LatLng(-34.84432, -56.19181), // mariscal foch
  new L.LatLng(-34.84102, -56.1972), // instrucciones
  new L.LatLng(-34.82757, -56.22002), // garzon
  new L.LatLng(-34.82718, -56.22055), // pasaje de la via sayago
  new L.LatLng(-34.81836, -56.23557), // camino lecocq
];

var linea_f_poly = new L.Polyline(linea_f, {
  color: '#b1c901',
  weight: 7,
  opacity: 0.7,
  smoothFactor: 1
}); // linea_f_poly
linea_f_poly.addTo(map);

///--------------------------------------

// G: Ingeniería - Sayago
var linea_g = [
   new L.LatLng(-34.91824, -56.16577),
   new L.LatLng(-34.91779, -56.1658),
   new L.LatLng(-34.91499, -56.16575),
   new L.LatLng(-34.91439, -56.16576),
   new L.LatLng(-34.91137, -56.16601),
   new L.LatLng(-34.91183, -56.1727),
   new L.LatLng(-34.90746, -56.17317),
   new L.LatLng(-34.90233, -56.17375),
   new L.LatLng(-34.90174, -56.1748),
   new L.LatLng(-34.90154, -56.17504), // 18
   new L.LatLng(-34.90057, -56.17563), // colonia
   new L.LatLng(-34.90018, -56.17594),
   new L.LatLng(-34.89993, -56.17619), // mercedes
   new L.LatLng(-34.89922, -56.177), // uruguay
   new L.LatLng(-34.89581, -56.18174), // miguelete
   new L.LatLng(-34.89526, -56.18278),
   new L.LatLng(-34.89519, -56.18288), // estrella del norte
   new L.LatLng(-34.89481, -56.18329), // asuncion
   new L.LatLng(-34.89329, -56.1846), // nicaragua
   new L.LatLng(-34.89173, -56.18585),
   new L.LatLng(-34.89136, -56.18601),
   new L.LatLng(-34.89088, -56.1858),
   new L.LatLng(-34.89063, -56.18587),
   new L.LatLng(-34.89053, -56.18603),
   new L.LatLng(-34.89043, -56.18628),
   new L.LatLng(-34.89017, -56.18715),
   new L.LatLng(-34.88968, -56.18759),
   new L.LatLng(-34.8896, -56.1877),
   new L.LatLng(-34.88891, -56.18829),
   new L.LatLng(-34.88827, -56.18887),
   new L.LatLng(-34.88819, -56.18876),
   new L.LatLng(-34.88603, -56.18766),
   new L.LatLng(-34.88508, -56.18719),
   new L.LatLng(-34.88475, -56.18704),
   new L.LatLng(-34.88456, -56.18696),
   new L.LatLng(-34.88404, -56.18684), // clemente cesar
   new L.LatLng(-34.88319, -56.18666),
   new L.LatLng(-34.88291, -56.18684),
   new L.LatLng(-34.88163, -56.18756),
   new L.LatLng(-34.88062, -56.18768),
   new L.LatLng(-34.87783, -56.18719),
   new L.LatLng(-34.87768, -56.18718),
   new L.LatLng(-34.87631, -56.18748),
   new L.LatLng(-34.8742, -56.18863),
   new L.LatLng(-34.8714, -56.19022), // bulevar artigas
   new L.LatLng(-34.86925, -56.19161),
   new L.LatLng(-34.86741, -56.1921), // juan rodriguez correa
   new L.LatLng(-34.86244, -56.19338), // cubo del norte
   new L.LatLng(-34.85996, -56.1952), // reyes
   new L.LatLng(-34.85768, -56.19625), // luis alberto de herrera
   new L.LatLng(-34.85648, -56.19651), // pantaleon sotelo
   new L.LatLng(-34.85433, -56.19703), // pierre fossey
   new L.LatLng(-34.85228, -56.19736), // rambla costanera francisco lavalleja
   new L.LatLng(-34.85165, -56.19751), // rambla costanera maria abella de ramirez
   new L.LatLng(-34.8496, -56.19836), // camino castro
   new L.LatLng(-34.84895, -56.19868), // carlos casaravilla
   new L.LatLng(-34.84806, -56.19914),
   new L.LatLng(-34.84783, -56.19936),
   new L.LatLng(-34.84747, -56.19989),
   new L.LatLng(-34.84602, -56.2023), // instrucciones
   new L.LatLng(-34.8346, -56.22156), // garzon
   new L.LatLng(-34.82276, -56.24155), // camino lecocq

];

var linea_g_poly = new L.Polyline(linea_g, {
  color: '#e1017b',
  weight: 7,
  opacity: 0.7,
  smoothFactor: 1
}); // linea_g_poly
linea_g_poly.addTo(map);

///--------------------------------------

// H: IMM - Pocitos - 8 de octubre
var linea_h = [
  new L.LatLng(-34.90564, -56.18619), // intendencia
  new L.LatLng(-34.9056, -56.18551), // constituyente
  new L.LatLng(-34.906, -56.18169), // tacuarembo
  new L.LatLng(-34.90608, -56.18053),
  new L.LatLng(-34.90622, -56.1797), // minas
  new L.LatLng(-34.90747, -56.17379), // canelones
  new L.LatLng(-34.90801, -56.17195), // blanes
  new L.LatLng(-34.90824, -56.17125), // maldonado
  new L.LatLng(-34.90921, -56.1683), // zorrilla
  new L.LatLng(-34.91099, -56.16318), // bulevar artigas
  new L.LatLng(-34.91321, -56.15641), // ombu
  new L.LatLng(-34.91506, -56.14966), // benito blanco
  new L.LatLng(-34.91414, -56.14937), // avenida brasil
  new L.LatLng(-34.91368, -56.14901),
  new L.LatLng(-34.91324, -56.14847),
  new L.LatLng(-34.91252, -56.14774),
  new L.LatLng(-34.91238, -56.14767),
  new L.LatLng(-34.91182, -56.14692), // guayaqui
  new L.LatLng(-34.91125, -56.14603), // gabriel pereira
  new L.LatLng(-34.90913, -56.14289), // buxareo
  new L.LatLng(-34.90627, -56.13934), // 26 de marzo
  new L.LatLng(-34.90575, -56.13686), // luis alberto de herrera
  new L.LatLng(-34.90316, -56.13778), // montevideo shopping
  new L.LatLng(-34.90079, -56.13871),
  new L.LatLng(-34.89805, -56.14088),
  new L.LatLng(-34.89752, -56.1411),
];

var linea_h_poly = new L.Polyline(linea_h, {
  color: '#ffdf01',
  weight: 7,
  opacity: 0.7,
  smoothFactor: 1
}); // linea_b_poly
linea_h_poly.addTo(map);

///--------------------------------------

// I: Entrevero - Piedras blancas
var linea_i = [
  new L.LatLng(-34.90609, -56.19422), // intendencia
  new L.LatLng(-34.90542, -56.19432),
  new L.LatLng(-34.90455, -56.19378),
  new L.LatLng(-34.90319, -56.19312), // avenida uruguay
  new L.LatLng(-34.9022, -56.19258), // paysandu
  new L.LatLng(-34.89294, -56.18802),
  new L.LatLng(-34.89247, -56.18782),
  new L.LatLng(-34.89217, -56.18788),
  new L.LatLng(-34.89204, -56.1883),
  new L.LatLng(-34.89185, -56.18853),
  new L.LatLng(-34.89159, -56.18851),
  new L.LatLng(-34.89043, -56.18794),
  new L.LatLng(-34.89016, -56.18753),
  new L.LatLng(-34.89027, -56.18697),
  new L.LatLng(-34.88506, -56.18412), // libres
  new L.LatLng(-34.88078, -56.18172), // concepcion arenal
  new L.LatLng(-34.87666, -56.17975),
  new L.LatLng(-34.8764, -56.17957), // garibaldi
  new L.LatLng(-34.86701, -56.17174), // luis alberto de herrera
  new L.LatLng(-34.86311, -56.16901), // plaza del ejercito
  new L.LatLng(-34.82876, -56.14095), // belloni
];

var linea_i_poly = new L.Polyline(linea_i, {
  color: '#fdb930',
  weight: 7,
  opacity: 0.7,
  smoothFactor: 1
}); // linea_i_poly
linea_i_poly.addTo(map);

//#######################################
//#######################################
//#######################################
// poligonos

var intendencia = [[-34.906045,-56.186731], [-34.905976,-56.185548],[-34.905535, -56.185597],[-34.905591, -56.186784]];

// create an orange rectangle
L.polygon(intendencia, {color: "#ff7800", weight: 1}).addTo(map);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

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

var popup = L.popup();

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
    map.panTo(e.latlng);
    popup
        .setLatLng(e.latlng)
        .setContent("new L." + e.latlng.toString() + ",")
        .openOn(map);
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
