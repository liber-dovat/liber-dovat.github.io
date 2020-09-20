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
];

for (var i = 0; i < sitios.length; i++) {

  lat_lan = new L.LatLng(sitios[i][2],sitios[i][3]);

  marker = new L.marker(lat_lan, {
    icon: new L.DivIcon({
        className: 'my-div-icon',
        iconSize: null, 
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
        html: '<img class="my-div-image" src="./js/images/marker-icon-full.png"/>'+
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

