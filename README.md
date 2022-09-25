# Mapping_Earthquakes: Module 13 Challenge

## Overview of Project

### Background and Purpose

You have just landed a pretty cool position - data visualization specialist for the Disaster Reporting Network, a non-profit company that provides data-driven story-telling on disasters around the world. Your mission will be to build insightful data visualizations with interactive features on earthquakes from around the world. In your role, you will support website and mobile application development, by using the latest earthquake Geo JSON data from the US Geological Survey website. You will traverse and retrieve the earthquake data, using JavaScript and the D3 and Leaflet libraries, and plot the data on a Mapbox map through an API request. On your map, the magnitude and location of each earthquake will be shown in a popup marker. The diameter of the markers for each earthquake should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes will appear larger and darker in color, with a legend providing the context for your map data. Finally, to illustrate the relationship between the location and frequency of seismic activity and tectonic plates, you'll add fault lines on the map.

### Resources

Data Sources:
1. https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
2. https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json
3. https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson

Software: Visual Studio Code 1.68.1

## Procedure

### Deliverable 1: Add Tectonic Plate Data

Using your knowledge of JavaScript, Leaflet.js, and geoJSON data, you’ll add tectonic plate data using d3.json(), add the data using the geoJSON() layer, set the tectonic plate LineString data to stand out on the map, and add the tectonic plate data to the overlay object with the earthquake data.

### Deliverable 2: Add Major Earthquake Data

Using your knowledge of JavaScript, Leaflet.js, and geoJSON data, you’ll add major earthquake data to the map using d3.json(). You'll also add color and set the radius of the circle markers based on the magnitude of earthquake, and add a popup marker for each earthquake that displays the magnitude and location of the earthquake using the GeoJSON layer, geoJSON().

### Deliverable 3: Add an Additional Map

Using your knowledge of JavaScript and Leaflet.js add a third map style to your earthquake map.
