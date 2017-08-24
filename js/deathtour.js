/****** Map ******/
var map;

var personal = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

map = L.map("map", {
  zoom: 17,
  center: [28.4187304,-81.581206],
  layers: [personal],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: false
});
