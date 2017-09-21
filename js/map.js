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
              iconSize: [35, 35],
});

var pmIcon = L.icon({
              iconUrl: 'img/button-pm.png',
              iconSize: [35, 35],
});

var phIcon = L.icon({
              iconUrl: 'img/button-ph.png',
              iconSize: [35, 35],
});

var marker =

  L.marker([44.6556942,-111.094781], {icon: npsIcon}).addTo(map).bindPopup("<a class='popup' href='postcard.html'>Post Card</a>");

  L.marker([36.998976, -109.045172], {icon: fcIcon}).addTo(map).bindPopup("<a class='popup' href='fourcorners.html'>Four Corners</a>");

  L.marker([30.455109, -84.253419], {icon: flIcon}).addTo(map).bindPopup("<a class='popup' href='statepark.html'>State Park</a>");

  L.marker([28.4187304,-81.581206], {icon: pmIcon}).addTo(map).bindPopup("<a class='popup' href='deathtour.html'>Death Tour</a>");

  L.marker([29.67264339999999,-82.33887549999997], {icon: phIcon}).addTo(map).bindPopup("<a class='popup' href='pizzaparlor.html'>Pizza Parlor</a>");


/*map.on('popupopen', function(centerMarker) {
      var cM = map.project(centerMarker.popup._latlng);
      cM.y -= centerMarker.popup._container.clientHeight/2
      map.setView(map.unproject(cM), 10, {animate: true});
  });*/
