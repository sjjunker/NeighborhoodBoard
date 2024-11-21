import "../styles/index.css";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

const map = new Map({
  basemap: "topo-vector",
});

const view = new MapView({
  container: "map-div",
  map: map,
  zoom: 4,
  center: [15, 65],
});

var esriConfig = {
  apiKey: "YOUR_ACCESS_TOKEN",
};
