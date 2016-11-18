var map = L.map('map');

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
var abitab = {icon: i_abitab};

var sitios = [

    // barrio sur
    ["55/04 Ejido 1000 esq. Av. Gonzalo Ramírez Tel: 29019246/47",-34.912321,-56.186084,abitab],

    // buceo
    ["20/01 Av. Ramón Anador 3833 esq. Andrés Aguilar Tel: 24809483",-34.893182,-56.131140,abitab],
    ["36/03 Av. Italia 3498 esq. Estivao Tel: 24801833",-34.886762,-56.138555,abitab],
    ["39/02 Av. Gral. Rivera 3850 esq. Nicolás Piaggio Tel: 26281523",-34.899908,-56.129917,abitab],
    ["58/01 Av. Solano López 1891 entre Av. Italia y Barroso Tel: 25065905",-34.887220,-56.129717,abitab],
    ["59/00 Av. Gral. Rivera 4219 entre Av. Solano López y Espinosa Tel: 26130238",-34.896191,-56.122376,abitab],
    ["59/02 Nancy 4281 entre Av.Solano López y Carlos Lallerman (DISCO) Tel: 26138428",-34.891756,-56.124235,abitab],
    ["90/01 Av. Luis Alberto de Herrera 1203 esq. 26 de Marzo Tel: 26231944",-34.905721,-56.137008,abitab],
    ["90/02 Av. Dr. Luis Alberto de Herrera 1290 (MONTEVIDEO SHOPPING) Local 6 Tel: 26287524",-34.902978,-56.136630,abitab],
    ["90/04 Av. Dr. Luis Alberto de Herrera 1290 (MONTEVIDEO SHOPPING) local 506 Tel: 26281978",-34.903664,-56.136464,abitab],

    // ciudad vieja

    ["10/11 Piedras 249 esq. Pérez Castellanos Tel: 29154066",-34.905957,-56.211383,abitab],
    ["10/21 Colón 1499 esq. Cerrito Tel: 29153459",-34.906449,-56.209986,abitab],
    ["10/24 Piedras 405 entre Zabala y Misiones Tel: 29155048",-34.904804,-56.208246,abitab],
    ["10/25 Juncal 1335 entre Sarandí y Buenos Aires Tel: 29161811",-34.906735,-56.200964,abitab],
    ["10/27 Ituzaingó 1433 entre Rincón y 25 de mayo Tel: 29158019",-34.905838,-56.204540,abitab],
    ["12/00 Zabala 1384 entre Rincón y Sarandí Tel: 29152166",-34.907525,-56.207104,abitab],
    ["19/11 Peatonal Sarandí 633 entre Juan Carlos Gómez y Bartolomé Mitre Tel: 29159036",-34.906611,-56.202296,abitab],
    ["19/18 Misiones 1482 entre Cerrito y 25 de mayo Tel: 2916.8131",-34.905697,-56.206859,abitab],
    ["19/28 Misiones 1414 entre Rincón y 25 de mayo Tel: 2915.8910",-34.906733,-56.206373,abitab],
    ["19/30 Pérez Castellano 1599 entre Rambla 25 de agosto y Piedras Tel: 29151715",-34.905309,-56.211689,abitab],
    ["33/00 Sarandí 546 entre Ituizangó y Treinta y Tres Tel: 29170288",-34.907314,-56.204008,abitab],
    ["40/01 Rincón 725 entre Juncal y Ciudadela Tel: 29023020",-34.905158,-56.200664,abitab],

    // cordón
    ["10/31 Av.18 de Julio 1927 esq. Av. Fernández Crespo Tel: 24002897",-34.901323,-56.174598,abitab],
    ["10/38 Av 18 de Julio 1497 esq. Vázquez Tel: 24005116",-34.904776,-56.183399,abitab],
    ["10/40 Minas 1479 esq. Colonia Tel: 24083573",-34.903198,-56.180883,abitab],
    ["13/02 Pablo de María 1446 esq. Ana Monterroso de Lavalleja Tel: 24001332",-34.901769,-56.171964,abitab],
    ["19/03 Constituyente 1661 esq. José Enrique Rodó Tel: 24090480",-34.905988,-56.180562,abitab],
    ["19/34 Colonia 1854 esq. Eduardo Acevedo Tel: 24020818",-34.901075,-56.176700,abitab],
    ["19/37 Constituyente 1459 local 14 esq. Barrios Amorín Tel: 24000321",-34.905586,-56.184539,abitab],
    ["29/00 Av. 18 de Julio 1841 esq. Eduardo Acevedo Tel: 24083387",-34.902112,-56.176532,abitab],
    ["29/29 Eduardo Acevedo 1527 esq. Av.18 de Julio Tel: 24005933",-34.901617,-56.176594,abitab],
    ["37/00 Tristan Narvaja 1661 esq. Av. Uruguay Tel: 24001978",-34.899751,-56.178983,abitab],
    ["38/00 Constituyente 1751 esq. Magallanes Tel: 24074055",-34.906388,-56.179047,abitab],
    ["40/00 Colonia 1755 bis. esq. Gaboto Tel: 24000192",-34.901925,-56.178970,abitab],
    ["55/00 Vázquez 1468 esq. Colonia Tel: 24011521",-34.9035592,-56.1840087,abitab],
    ["65/00 Av.18 de Julio 2013 entre Pablo de María y Martín C. Martínez Tel: 24012736",-34.900480,-56.172302,abitab],
    ["81/00 Av. Gral. Rivera 2204 esq. Juan Paullier Tel: 2408.8742",-34.902174,-56.167899,abitab],
    ["91/00 18 de Julio 1552 esq. Tacuarembó Tel: 2408.5677",-34.904426,-56.182390,abitab],
    ["94/00 Av. Daniel F. Crespo Nº 1759 y 1761. esq. Paysandú Tel: 24022438",-34.898370,-56.178277,abitab],

    // la blanqueada
    ["04/07 Av. 8 de Octubre 3340 esq. Blvar. José Batlle y Ordoñez Tel: 24836651",-34.879780,-56.148608,abitab],
    ["16/00 Av. Italia 3243 esq. Francisco Simón Tel: 24860740",-34.887509,-56.144781,abitab],
    ["16/01 Av. Dr. Luis Alberto de Herrera 2251 esq. República Dominicana Tel: 24811604",-34.885756,-56.149882,abitab],
    ["18/00 Bvar. Artigas 2474 esq. Colorado Tel: 24811966",-34.880849,-56.166278,abitab],
    ["24/00 Av. Italia 2801 esq. Av. Centenario Tel: 24807116",-34.890874,-56.154140,abitab],
    ["83/00 Av. 8 de Octubre 2953 esq. Jaime Cibils Tel: 24801614",-34.884875,-56.156519,abitab],

    // palermo

    // parque batlle
    ["02/00 Ramón Anador 3410 esq. Av. Dr. Luis A. de Herrera Tel: 26287161",-34.895567,-56.142984,abitab],

    // parque rodó
    ["08/03 Av. Gonzálo Ramírez 1951 esq. Jackson Tel: 24100587",-34.911811,-56.172585,abitab],
    ["38/01 Constituyente 2025 esq. Juan D. Jackson Tel: 24000615",-34.907758,-56.172644,abitab],
    ["49/00 Canelones 2202 esq. Juan Paullier Tel: 24083308",-34.907071,-56.167435,abitab],

    // pocitos
    ["06/02 Av. Brasil 2531 esq. Brito del Pino Tel: 27073648",-34.907308,-56.159150,abitab],
    ["10/17 Francisco Aguilar 843 esq. Scosería Tel: 27105929",-34.915022,-56.154804,abitab],
    ["10/28 Juan Benito Blanco 914 esq. Bvar. Epaña Tel: 27083009",-34.914746,-56.149525,abitab],
    ["10/29 Gabriel Pereira 3150 esq. 26 de Marzo Tel: 27084435",-34.909157,-56.148140,abitab],
    ["20/00 Av.Gral. Rivera 3475 esq. Marco Bruto Tel: 26225650",-34.901369,-56.139246,abitab],
    ["25/00 Av. Gral. Rivera 2406 esq. 20 de Setiembre Tel: 27072089",-34.902416,-56.163681,abitab],
    ["36/02 21 de Setiembre 2696 esq. Williman Tel: 27110693",-34.916428,-56.158640,abitab],
    ["44/01 21 de Setiembre 2458 esq. Libertad Tel: 27114362",-34.913453,-56.162280,abitab],
    ["70/02 Av. Brasil 3086 esq. Lázaro Gadea Tel: 27099586",-34.913743,-56.149758,abitab],
    ["78/02 Av. Gral. Rivera 2684 bis esq. Av. Soca Tel: 27078577",-34.903185,-56.156631,abitab],
    ["78/03 Av. Gral. Rivera 3060 esq. Mac. Eachen Tel: 26231531",-34.903085,-56.149684,abitab],
    ["91/03 Echevarriarza 3249 esq. Buxareo Tel: 27089559",-34.908254,-56.143792,abitab],
    ["93/02 21 de Setiembre 2980 esq. Roque Graceras Tel: 27120864",-34.919711,-56.152848,abitab],

    // punta carretas
    ["55/03 José Ellauri 395 esq. Solano García Tel: 27126549",-34.922836,-56.159240,abitab],
    ["74/00 Cnel Mora 571 esq. Gregorio Suárez Tel: 27100239",-34.919491,-56.158188,abitab],

    // tres cruces
    ["22/00 Av.18 de Julio 2258 esq. Acevedo Díaz Tel: 24094751",-34.898428,-56.166669,abitab],
    ["53/00 Av. 8 de Octubre 2527 esq. Presidente Berro Tel: 2486.0349",-34.892184,-56.162572,abitab],
    ["63/00 Dr. Salvador Ferrer Serra 2320 esq. Acevedo Díaz Tel: 2401.2911",-34.894870,-56.166828,abitab],
    ["63/01 Shopping Tres Cruces - Local 113 - (Planta Superior) Tel: 2402.7978",-34.893376,-56.166386,abitab],
    ["63/02 Shopping Tres Cruces (Nivel terminal) Local: B-02 Tel: 2409.8429",-34.894599,-56.166659,abitab],
    ["69/00 Daniel Muñoz 2200 esq. Juan Paullier Tel: 24097620",-34.896094,-56.169947,abitab],
    ["79/00 Bvar. Artigas 1649 esq. Avda. 18 de julio Tel: 24002209",-34.897758,-56.164820,abitab],
   
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
    // console.log(e.target.Nombre);
    this.openPopup();
  });

  marker.on('mouseout', function (e) {
    this.closePopup();
  });

  marker.addTo(map);
} // for

// function onMapClick(e) {
//   console.log(e.latlng.toFixed(6).toString());
//   // map.panTo(e.latlng);
// };
// map.on('click', onMapClick);