/****** Map ******/
var map;

var personal = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

map = L.map("map", {
  zoom: 4,
  center: [42.877742, -97.380979],
  layers: [personal],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: false
});
