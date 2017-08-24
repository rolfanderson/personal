/****** Map ******/
var map;

var postcard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

map = L.map("map", {
  zoom: 9,
  center: [44.6621, -111.1041],
  layers: [postcard],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: false
});
