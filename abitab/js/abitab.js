var map = L.map('map');

// https://[abc].tile.thunderforest.com/transport/{z}/{x}/{y}.png

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://opentopomap.org/about">OpenTopoMap</a>',
  maxZoom: 19
});
OpenStreetMap_Mapnik.addTo(map);

map.setView([-34.8901,-56.1679], 13);

var i_abitab = L.icon({
  iconUrl:       './images/marker.png',
  iconSize:      [20, 34],
  iconAnchor:    [10, 34],
  popupAnchor:   [0,-34],
});
var abitab = {icon: i_abitab, title: "Snitch"};

var sitios = [

    // cordón
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],

    // pocitos
    ["06/02 Av. Brasil 2531 esq. Brito del Pino 27073648",-34.907308,-56.159150,abitab],
    ["10/17 Francisco Aguilar 843 esq. Scosería 27105929",-34.915022,-56.154804,abitab],
    ["10/28 Juan Benito Blanco 914 esq. Bvar. Epaña 27083009",-34.914746,-56.149525,abitab],
    ["10/29 Gabriel Pereira 3150 esq. 26 de Marzo 27084435",-34.909157,-56.148140,abitab],
    ["20/00 Av.Gral. Rivera 3475 esq. Marco Bruto 26225650",-34.901369,-56.139246,abitab],
    ["25/00 Av. Gral. Rivera 2406 esq. 20 de Setiembre 27072089",-34.902416,-56.163681,abitab],
    ["36/02 21 de Setiembre 2696 esq. Williman 27110693",-34.916428,-56.158640,abitab],
    ["44/01 21 de Setiembre 2458 esq. Libertad 27114362",-34.913453,-56.162280,abitab],
    ["70/02 Av. Brasil 3086 esq. Lázaro Gadea 27099586",-34.913743,-56.149758,abitab],
    ["78/02 Av. Gral. Rivera 2684 bis esq. Av. Soca 27078577",-34.903185,-56.156631,abitab],
    ["78/03 Av. Gral. Rivera 3060 esq. Mac. Eachen 26231531",-34.903085,-56.149684,abitab],
    ["91/03 Echevarriarza 3249 esq. Buxareo 27089559",-34.908254,-56.143792,abitab],
    ["93/02 21 de Setiembre 2980 esq. Roque Graceras 27120864",-34.919711,-56.152848,abitab],

    // punta carretas
    ["55/03 José Ellauri 395 esq. Solano García 27126549",-34.922836,-56.159240,abitab],
    ["74/00 Cnel Mora 571 esq. Gregorio Suárez 27100239",-34.919491,-56.158188,abitab],

   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab],
   // ["",,abitab]
];

///===============

// agrego los sitios al mapa
for (var i = 0; i < sitios.length; i++) {
  marker = new L.marker([sitios[i][1],sitios[i][2]],sitios[i][3])
    .bindPopup("<b>" + sitios[i][0] + "</b>", {closeButton:false});

  marker.Nombre = sitios[i][0];
  marker.ID = i;

  marker.on('mouseover', function (e) {
    console.log(e.target.Nombre);
    this.openPopup();
  });

  marker.on('mouseout', function (e) {
    this.closePopup();
  });

  marker.addTo(map);
} // for

function onMapClick(e) {
  console.log(e.latlng);
  // map.panTo(e.latlng);
};
map.on('click', onMapClick);