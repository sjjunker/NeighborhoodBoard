import { ApiKeyManager } from "@esri/arcgis-rest-request";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import "../styles/index.css";

const accessToken = import.meta.env.ArcGIS_API_Key
const authentication = ApiKeyManager.fromKey(accessToken);

//Map and Map View
const webmap = new WebMap({
    portalItem: {
        id: "f84dfb63c5254901b58a8101958d9085"
    }
});

const view = new MapView({
    container: "my-map",
    map: webmap
});