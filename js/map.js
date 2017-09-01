/****** Map ******/
var map;

var personal = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

map = L.map("map", {
  zoom: 5,
  center: [38, -95],
  layers: [personal],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: false
});

var npsIcon = L.icon({
              iconUrl: 'img/button-nps.png',
              iconSize: [35, 35],
});

var fcIcon = L.icon({
              iconUrl: 'img/button-fc.png',
              iconSize: [35, 35],
});

var flIcon = L.icon({
              iconUrl: 'img/button-fl.png',
              iconSize: [25, 25],
});

var pmIcon = L.icon({
              iconUrl: 'img/button-pm.png',
              iconSize: [25, 25],
});

var phIcon = L.icon({
              iconUrl: 'img/button-ph.png',
              iconSize: [25, 25],
});

var marker =

  L.marker([44.6621, -111.1041], {icon: npsIcon}).addTo(map).bindPopup("<a class='popup'>Post Card</a>");

  L.marker([36.998976, -109.045172], {icon: fcIcon}).addTo(map).bindPopup("<a class='popup'>Four Corners</a>");

  //L.marker([28.5, -82], {icon: flIcon}).addTo(map).bindPopup("<a class='popup'>State Park</a>");

  L.marker([28.4187304,-81.581206], {icon: pmIcon}).addTo(map).bindPopup("<a class='popup'>Death Tour</a>");

  L.marker([29.67264339999999,-82.33887549999997], {icon: phIcon}).addTo(map).bindPopup("<a class='popup'>UTBAPH</a>");
