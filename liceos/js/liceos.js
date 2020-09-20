var map = L.map('map');

var openstreetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  detectRetina: true
});
openstreetmap.addTo(map);

map.setView([-34.8724042,-56.1675906], 12);

// Creo un array con la información de los sitios
var sitios = [
   ['Liceo N° 9', 'Av. Lezica 5831',-34.8037874,-56.2287703,9],
   ['Liceo N° 18', 'Av Millán 3898', -34.8557682,-56.1986293,18],
   ['Liceo N° 23', '28 de Febrero 1097', -34.8311983,-56.2201309,23],
   ['Liceo N° 24', 'Presbítero José Nicolás Barrales 2500', -34.8372056,-56.2788582,24],
   ['Liceo N° 40', 'Gustavo Adolfo Becquer y Camino Edison', -34.8294382,-56.2025789,40],
   ['Liceo N° 43', 'Camino O\'Higgins y Camino Sanguinetti', -34.8299066,-56.3572112,43],
   ['Liceo N° 44', 'Camino Dr. Francisco Azarola y Camino de la Redención', -34.7654087,-56.3028365,44],
   ['Liceo N° 62', 'Av. Lezica 5791', -34.8037971,-56.2298342,62],
   ['Liceo N° 63', 'Ernesto Herrera 790', -34.8485719,-56.2046928,63],
   ['Liceo N° 74', 'Luis Lasagna y Calle Pinta', -34.7992671,-56.2500788,74],
   ['Liceo N° 75', 'Av. Agraciada 3721', -34.8641574,-56.2126171,75],
   ['Liceo N° 7', 'Pedro Fco. Berro 773', -34.9168814,-56.1557087,7],
   ['Liceo N° 10', 'Mataojo 1895', -34.8874863,-56.1236333,10],
   ['Liceo N° 14', 'Av. 8 de Octubre 3390', -34.879873,-56.1475182,14],
   ['Liceo N° 15', 'Av Alfredo Arocena 1919', -34.8826348,-56.0626106,15],
   ['Liceo N° 19', 'Calle 20 de Febrero 2510/20', -34.8690014,-56.1336515,19],
   ['Liceo N° 20', 'Ledo Arroyo Torres 5626', -34.8872257,-56.0873286,20],
   ['Liceo N° 25', 'Ruta 8 Brigadier Gral Juan Antonio Lavalleja 7927', -34.7984443,-56.0846985,25],
   ['Liceo N° 31', 'Av 18 de Diciembre', -34.892057,-56.1053809,31],
   ['Liceo N° 33', 'Ana María Rubens 2324', -34.8719378,-56.1065079,33],
   ['Liceo N° 42', 'Iguá 4484', -34.8817329,-56.1165119,42],
   ['Liceo N° 45', 'Cno Maldonado (Ruta 8) 5852-5916', -34.8385363,-56.1212124,45],
   ['Liceo N° 58', 'Cno. Maldonado 5870', -34.8393015,-56.1191889,58],
   ['Liceo N° 76', 'Calle 20 de Febrero 2515-2503', -34.8687145,-56.1337495,76],
];

for (var i = 0; i < sitios.length; i++) {

  lat_lan = new L.LatLng(sitios[i][2],sitios[i][3]);

  marker = new L.marker(lat_lan, {
    icon: new L.DivIcon({
        className: 'my-div-icon',
        iconSize: null, 
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
        html: '<img class="my-div-image" src="./js/images/marker_bo.png"/>'+
              '<div class="my-div-span">'+ 
                '<div class="my-div-text">'+ sitios[i][4] +'</div>' +
              '</div>'
      })
    }).bindPopup("<b>" + sitios[i][0] + ', ' + sitios[i][1] + "</b>", {closeButton:false});

  marker.Nombre = sitios[i][0];
  marker.ID = i;

// new L.Marker([57.666667, -2.64], {
//     icon: new L.DivIcon({
//         className: 'my-div-icon',
//         html: '<img class="my-div-image" src="http://png-3.vector.me/files/images/4/0/402272/aiga_air_transportation_bg_thumb"/>'+
//               '<span class="my-div-span">RAF Banff Airfield</span>'
//     })
// });

  // pop = L.popup({autoClose:false,closeButton:false}).setLatLng(lat_lan)
  //   .setContent("<p>" + sitios[i][4] + "</p>");
  // pop.addTo(map);


  // popup = L.popup()
  //   .setLatLng(lat_lan)
  //   .setContent("<p>" + sitios[i][4] + "</p>")
  //   .addTo(map);

  marker.on('click', function (e) {
    console.log(e.target.Nombre);
    // info.update(e);
    this.openPopup();
  });

  // marker.on('mouseout', function (e) {
  //   this.closePopup();
  // });

  marker.addTo(map);
} // for

function onMapClick(e) {
  // console.log(e.latlng);
  map.closePopup();
};

map.on('click', onMapClick);

