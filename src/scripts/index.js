import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import "../styles/index.css";

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

// Add click event listener to the view
view.when(() => {
    view.on("click", (event) => {
        // Get the latitude and longitude from the clicked point
        const latitude = event.mapPoint.latitude;
        const longitude = event.mapPoint.longitude;

        // Log or use the coordinates
        addFeatures(latitude, longitude);
    });
});

// Add features once the view is ready
function addFeatures(lat, long) {
    const featureLayer = webmap.layers.find(layer => layer.title === "Points_Of_Interest");

    if (featureLayer) {
        // Create features to add
        const newFeatures =
            new Graphic({
                geometry: {
                    type: "point", // Specify geometry type (point, polyline, polygon)
                    longitude: lat,
                    latitude: long
                },
                attributes: {
                    OBJECTID: 1,
                    description: "Test Feature", // Replace with your attribute field names
                    name: "This is a test feature",
                    category: "Test Category",
                    "Photos And Files": ""
                }
            });

        // Add features to the FeatureLayer
        featureLayer
            .applyEdits({
                addFeatures: newFeatures
            })
            .then((result) => {
                console.log("Features added:", result);
            })
            .catch((error) => {
                console.error("Error adding features:", error);
            });
    } else {
        console.error("FeatureLayer not found in the WebMap.");
    }
}