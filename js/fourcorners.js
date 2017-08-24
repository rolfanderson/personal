/****** Map ******/
var map;

var fourcorners = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

map = L.map("map", {
  zoom: 17,
  center: [36.998976, -109.045172],
  layers: [fourcorners],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: false
});
