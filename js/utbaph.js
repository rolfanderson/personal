/****** Map ******/
var map;

var utbaph = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

map = L.map("map", {
  zoom: 23,
  center: [29.67264339999999,-82.33887549999997],
  layers: [utbaph],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: false
});
