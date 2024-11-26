import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import showModal from "./popup.mjs";
import "../styles/index.css";

//Map and Map View
const webmap = new WebMap({
    portalItem: {
        id: "f84dfb63c5254901b58a8101958d9085",
    }
});

const view = new MapView({
    container: "my-map",
    map: webmap
});

// Add click event listener to the view
webmap.when(() => {
    //Get feature layer
    const featureLayer = webmap.layers.find(layer => layer.title === "Points_Of_Interest");

    //Add features
    view.on("click", (event) => {

        //Find out if a graphic was clicked
        view.hitTest(event).then((response) => {
            const results = response.results;

            //If graphic was clicked ...
            if (results.length > 0) {
                const feature = results[0].graphic;
                const featureId = feature.attributes.OBJECTID;

                // Check if the clicked graphic is the pin
                if (featureId) {
                    console.log("Pin clicked:", featureId);

                    //Show a modal and get its values
                    showModal();

                    if (document.getElementById("update-delete-modal")) {
                        //Look for update button click
                        document.getElementById("update-button").addEventListener("click", () => {
                            //Get values
                            let updateName = document.getElementById("object-name").value;
                            let updateDescription = document.getElementById("description").value;
                            let updateCategory = document.getElementById("category").value;

                            //Update feature and remove the modal
                            updateFeature(featureId, updateDescription, updateName, updateCategory);
                            document.getElementById("update-delete-modal").remove();
                        });

                        //Look for delete click
                        document.getElementById("delete-button").addEventListener("click", () => {
                            deleteFeature(featureId);
                            document.getElementById("update-delete-modal").remove();
                        });
                    }
                }
            } else { //A graphic was not clicked ...
                // Get the latitude and longitude from the clicked point
                const latitude = event.mapPoint.latitude;
                const longitude = event.mapPoint.longitude;
                console.log(latitude, longitude);

                //Add a new feature
                addFeature(latitude, longitude, featureLayer);
            }
        });
    });
});

// Add features once the view is ready
function addFeature(lat, long, featureLayer) {
    if (featureLayer) {
        // Create features to add
        const newFeature =
            new Graphic({
                geometry: {
                    type: "point",
                    longitude: long,
                    latitude: lat
                },
                attributes: {
                    description: "Test Feature",
                    name: "This is a test feature",
                    category: "Test Category",
                    "Photos And Files": ""
                }
            });

        // Add features to the FeatureLayer
        featureLayer
            .applyEdits({
                addFeatures: [newFeature]
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

//Update feature
function updateFeature(objectId, description, name, category) {
    const featureLayer = webmap.layers.find(layer => layer.title === "Points_Of_Interest");

    if (featureLayer) {

        const featureToUpdate = {
            attributes: {
                OBJECTID: objectId,
                description: description,
                name: name,
                category: category,
                "Photos And Files": ""
            }
        }

        // Add features to the FeatureLayer
        featureLayer
            .applyEdits({
                updateFeatures: [featureToUpdate]
            })
            .then((result) => {
                console.log("Features updated:", result);
            })
            .catch((error) => {
                console.error("Error updating features:", error);
            });
    } else {
        console.error("FeatureLayer not found in the WebMap.");
    }
}

//Delete feature
function deleteFeature(objectId) {
    //Get feature layer
    const featureLayer = webmap.layers.find(layer => layer.title === "Points_Of_Interest");

    //Get feauture
    const featureToDelete = {
        OBJECTID: objectId
    };

    if (featureLayer) {
        // Delete feature from the FeatureLayer
        featureLayer
            .applyEdits({
                deleteFeatures: [featureToDelete]
            })
            .then((result) => {
                console.log("Features deleted:", result);
            })
            .catch((error) => {
                console.error("Error deleting features:", error);
            });
    } else {
        console.error("FeatureLayer not found in the WebMap.");
    }
}