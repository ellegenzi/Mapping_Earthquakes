// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Assign the variable map to the object L.map and instantiate the object with the given string, mapid
// mapid will reference the id tag in our <div> element on the index.html file
// The setView() method sets the view of the map with a geographical center,
    // where the first coordinate is latitude (40.7) and the second is longitude (-94.5)
    // We set the zoom level of 4 on a scale of 0-18

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    //return L.marker(latlng)
    layer.bindPopup("<h4>Airport Code: " + feature.properties.faa + "</h4><br>Airport Name: " + feature.properties.name + "</br>");
   }

}).addTo(map);

// An alternative to the setView() method is to modify each attribute in the map object
// using the curly braces notation

// Create the map object with a center and zoom level.
/*let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });
*/

// Coordinates for each point to be used in the line.
/*let line = [
    [33.9416, -118.4085],
    [30.1974, -97.6663],
    [35.4361, -82.5417],
    [43.6767, -79.6306],
    [40.6418, -73.7810]
  ];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: 7
  }).addTo(map);
*/
  
// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle marker to the map for Los Angeles, California.
/*L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: 'yellow',
    fillOpacity: 0.15,
    radius: 300
}).addTo(map);*/

/*// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    // Print each object in the array to the console
    console.log(city)
    // Add a circle marker with a radius equivalent to the city's population
    L.circleMarker(city.location, {
        color: 'orange',
        weight: 4,
        radius: city.population/200000
    })
    // Add city data using a popup (and add thousands separator)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
   });
*/

// Add the tile layer from the leaflet documentation https://leafletjs.com/examples/quick-start/

// We create the tile layer that will be the background of our map.
// Assign the tileLayer() method to the variable streets.
// API URL has a reference to the accessToken
// OpenStreetMap URL is inside the curly braces of the tileLayer() method
// Add the maxZoom attribute and assign it a value of 18
// Add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map
// Add the accessToken attribute and assign it the value of the API_KEY

/* let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
        // Alternative styles: mapbox/outdoors-v11, mapbox/light-v10, mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
*/

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'streets' tile layer to the map.
streets.addTo(map);