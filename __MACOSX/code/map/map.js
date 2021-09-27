// fake JSON call--usually we would get this data from the server,
// but right now we are doing it all client side
function getJSONMarkers() {

	var locations = [
    {
      "name": "Abanndoned Well",
      "location": [40.378193,16.4399538],
    }
	]

	// return this as a JSON string that needs to be parsed
  return JSON.stringify(locations);
}

// Load the map
function loadMap() {
  console.log("map loading");

  // change the name in the function to whatever you called your div
  var map = L.map('map').setView({lon: 0, lat: 0}, 2);

  // add the OpenStreetMap tiles
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 18,
   attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
 }).addTo(map);

 // show the scale bar on the lower left corner
 L.control.scale({imperial: true, metric: true}).addTo(map);

 // draw markers on the map
 drawMarkers(map);
}


// Parse the json object and draw the markers on the map
function drawMarkers(map) {

 // Load JSON Data
 const markers = getJSONMarkers(obj.drawMarkers); // call getJSONMarkers, parse it, and store the
 											 // resulting object in markers


  // Loop through JSON structure to get locations
  for(marker of markers) {
    latitude = 40.378193; // replace null with the latitude of your location
    longitude = 16.439954; // replace null with the longitude of your location
    message = Craco Italy; // replace this with the text about your location

    L.marker({lat: latitude, lon: longitude}).bindPopup(message).addTo(map);
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
	2 <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
	<script defer src="map.js" type="text/javascript"></script>
	<body onload = "loadMap()>
	<div id="map" style="height:400px"></div>

  }


}
