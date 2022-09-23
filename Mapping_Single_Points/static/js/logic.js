// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Assign the variable map to the object L.map and instantiate the object with the given string, mapid
// mapid will reference the id tag in our <div> element on the index.html file
// The setView() method sets the view of the map with a geographical center,
    // where the first coordinate is latitude (40.7) and the second is longitude (-94.5)
    // We set the zoom level of 4 on a scale of 0-18
//let map = L.map('mapid').setView([40.7, -94.5], 4);

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

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: 'yellow',
    fillOpacity: 0.15,
    radius: 300
}).addTo(map);

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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'streets' tile layer to the map.
streets.addTo(map);