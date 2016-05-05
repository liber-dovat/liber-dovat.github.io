var map = L.map('map');


var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
OpenStreetMap_Mapnik.addTo(map);

map.setView([35.6977016,139.7704825], 5);
// map.setView([0, 0], 1);

// Nueva York, aeropuerto, 20 de marzo
var new_york = new L.LatLng(40.6411564,-73.7793836);
var new_york_marker = L.marker(new_york).addTo(map);
new_york_marker.bindPopup("<strong>Nueva York, 20 de marzo</strong>");

///===============

// Narita, aeropuerto, 21 de marzo
var narita = new L.LatLng(35.7685, 140.3858); // narita
var narita_marker = L.marker(narita).addTo(map);
narita_marker.bindPopup("<strong>Narita, 21 de marzo</strong>");

// Tokyo, 20 de marzo
// var tokio = new L.LatLng(35.6920, 139.7407);
// var tokio_marker = L.marker(tokio).addTo(map);
// tokio_marker.bindPopup("<strong>Tokyo, 22 de marzo</strong>"); 

// Final Fantasy Eorzea cafe, Akihabara, Tokyo, 22 de marzo
var eorzea = new L.LatLng(35.6977016,139.7704825);
var eorzea_marker = L.marker(eorzea).addTo(map);
eorzea_marker.bindPopup("<strong>Final Fantasy Eorzea cafe, Akihabara, Tokyo, 22 de marzo</strong>");

// Pinpoint de pablo :D
var zona_divina = new L.LatLng(35.69798562798867,139.57031764997546);
var zona_divina_marker = L.marker(zona_divina).addTo(map);
zona_divina_marker.bindPopup("<strong>Cita: Pa, esta zona está divina<br/>Zona divina, Mitaka, Tokyo, 23 de marzo</strong>");

// Museo Ghibli, Mitaka, Tokyo, 23 de marzo
var ghibli = new L.LatLng(35.6961955,139.5704076);
var ghibli_marker = L.marker(ghibli).addTo(map);
ghibli_marker.bindPopup("<strong>Museo Ghibli, Mitaka, Tokyo, 23 de marzo</strong>");

// Shibuya, Tokyo, 23 de marzo
var shibuya = new L.LatLng(35.66455,139.69818);
var shibuya_marker = L.marker(shibuya).addTo(map);
shibuya_marker.bindPopup("<strong>Shibuya, Tokyo, 23 de marzo</strong>");

// Palacio Imperial, Tokyo, 24 de marzo
var palacio = new L.LatLng(35.6839328,139.747329);
var palacio_marker = L.marker(palacio).addTo(map);
palacio_marker.bindPopup("<strong>Palacio Imperial, Tokyo, 24 de marzo</strong>");

// Harajuku, Shibuya, Tokyo, 24 de marzo
var harajuku = new L.LatLng(35.66963,139.70344);
var harajuku_marker = L.marker(harajuku).addTo(map);
harajuku_marker.bindPopup("<strong>Harajuku, Shibuya, Tokyo, 24 de marzo</strong>");

// Anime Japan 2016, Shibuya, Tokyo, 24 de marzo
var anime = new L.LatLng(35.6297579,139.7933832);
var anime_marker = L.marker(anime).addTo(map);
anime_marker.bindPopup("<strong>Anime Japan 2016, Tokyo-Big Sight, Kōtō, Tokyo, 24 de marzo</strong>");

// Gundam, Odaiba, Tokyo, 24 de marzo
var gundam = new L.LatLng(35.62439,139.77546);
var gundam_marker = L.marker(gundam).addTo(map);
gundam_marker.bindPopup("<strong>Gundam, Odaiba, Tokyo, 24 de marzo</strong>");

// Anime Japan 2016, Shibuya, Tokyo, 28 de marzo

///===============

// Sapporo, Hokkaidō, 28 de marzo
var sapporo = new L.LatLng(43.0594285,141.3002882,12);
var sapporo_marker = L.marker(sapporo).addTo(map);
sapporo_marker.bindPopup("<strong>Sapporo, Hokkaidō, 28 de marzo</strong>");

// Museo Sapporo, Sapporo, Hokkaidō, 30 de marzo
var sapporo_beer = new L.LatLng(43.0712309,141.3694893);
var sapporo_beer_marker = L.marker(sapporo_beer).addTo(map);
sapporo_beer_marker.bindPopup("<strong>Museo Sapporo, 30 de marzo</strong>");

// Canal de Otaru, Hokkaidō, 31 de marzo
var otaru = new L.LatLng(43.2012764,141.0005235);
var otaru_marker = L.marker(otaru).addTo(map);
otaru_marker.bindPopup("<strong>Canal de Otaru, Hokkaidō, 31 de marzo</strong>");

// Jigokudani (Hell Valley), Noboribetsu, Hokkaidō, 1 de abril
var jigokudani = new L.LatLng(42.4975654,141.1486259);
var jigokudani_marker = L.marker(jigokudani).addTo(map);
jigokudani_marker.bindPopup("<strong>Jigokudani (Hell Valley), Noboribetsu, Hokkaidō, 1 de abril</strong>");

///===============

// Templo Zuigan-ji, Matsushima, Miyagi, 3 de abril
var zuiganji = new L.LatLng(38.372183,141.0597022);
var zuiganji_marker = L.marker(zuiganji).addTo(map);
zuiganji_marker.bindPopup("<strong>Templo Zuigan-ji, Matsushima, Miyagi, 3 de abril</strong>");

// Zuihoden, Mausoleo de Date Masamune, Otamayashita, Aoba-ku, Sendai-shi, Miyagi-ken, 3 de abril
var zuihoden = new L.LatLng(38.2504789,140.8644552);
var zuihoden_marker = L.marker(zuihoden).addTo(map);
zuihoden_marker.bindPopup("<strong>Zuihoden, Mausoleo de Date Masamune, Otamayashita, Aoba-ku, Sendai-shi, Miyagi-ken, 3 de abril</strong>"); 

///===============

// Narita, aeropuerto, 4 abril
var narita_javi = new L.LatLng(35.7685, 140.3858);
var narita_javi_marker = L.marker(narita_javi).addTo(map);
narita_javi_marker.bindPopup("<strong>Narita Javier, 4 abril</strong>");

///===============

// Shiraho Friends House, Ishigaki, Okinawa, 5 abril
var shiraho = new L.LatLng(24.3564062,124.2441696);
var shiraho_marker = L.marker(shiraho).addTo(map);
shiraho_marker.bindPopup("<strong>Shiraho Friends House, Ishigaki, Okinawa, 5 abril</strong>");

///===============

// Hakata, Fukuoka, 7 abril
var hakata = new L.LatLng(33.5901464,130.4200692);
var hakata_marker = L.marker(hakata).addTo(map);
hakata_marker.bindPopup("<strong>Hakata, Fukuoka, 7 abril</strong>");

// Hiroshima, 7 abril
var hiroshima = new L.LatLng(34.3978483,132.4751158);
var hiroshima_marker = L.marker(hiroshima).addTo(map);
hiroshima_marker.bindPopup("<strong>Hiroshima, 7 abril</strong>");

// Santuario Itsukushima, Hatsukaichi, Hiroshima, 9 abril
var itsukushima = new L.LatLng(34.295833,132.319722);
var itsukushima_marker = L.marker(itsukushima).addTo(map);
itsukushima_marker.bindPopup("<strong>Santuario Itsukushima, Hatsukaichi, Hiroshima, 9 abril</strong>");

// Kyoto, 10 abril
var kyoto = new L.LatLng(35.02394,135.7595917);
var kyoto_marker = L.marker(kyoto).addTo(map);
kyoto_marker.bindPopup("<strong>Kyoto, 10 abril</strong>");

// Fushimi Inari-taisha, Kyoto, 10 abril
var fushimi = new L.LatLng(34.967222,135.772778);
var fushimi_marker = L.marker(fushimi).addTo(map);
fushimi_marker.bindPopup("<strong>Fushimi Inari-taisha, Kyoto, 10 abril</strong>");

// Torre de Tokyo, Minato, Tokyo, 12 abril
var tokyo_tower = new L.LatLng(35.6585651,139.74536);
var tokyo_tower_marker = L.marker(tokyo_tower).addTo(map);
tokyo_tower_marker.bindPopup("<strong>Torre de Tokyo, Minato, Tokyo, 12 abril</strong>");

// Aikikai Honbu Dojo, Shinjuku, Wakamatsucho, Tokyo, 14 abril
var aikikai = new L.LatLng(35.69930,139.71422);
var aikikai_marker = L.marker(aikikai).addTo(map);
aikikai_marker.bindPopup("<strong>Aikikai Honbu Dojo, Shinjuku, Wakamatsucho, Tokyo, 14 abril</strong>");

// Square Enix, Shinjuku, Tokio, Japón, 14 abril
var square = new L.LatLng(35.6967843,139.7080631);
var square_marker = L.marker(square).addTo(map);
square_marker.bindPopup("<strong>Square Enix, Shinjuku, Tokio, Japón, 14 abril</strong>");

///===============

var pointList = [narita,eorzea,zona_divina, ghibli, shibuya, palacio, harajuku, anime, gundam, sapporo, sapporo_beer, otaru, jigokudani, zuiganji, zuihoden, narita_javi, shiraho, hakata, hiroshima, itsukushima, kyoto, fushimi, tokyo_tower, aikikai, square];
var firstpolyline = new L.Polyline(pointList, {
color: 'red',
weight: 3,
opacity: 0.5,
smoothFactor: 1

});
// firstpolyline.addTo(map);
