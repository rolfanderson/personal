/****** Map ******/
var map;

var statepark = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

map = L.map("map", {
  zoom: 7,
  center: [28.5, -82],
  layers: [statepark],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: false
});
