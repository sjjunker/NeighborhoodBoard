# Overview

This is a web application using ArcGis WebMap called Neighborhood Board. It is a map of a neighborhood that shows a hosted feature layer of events in said neighborhood. The user can add, update, and delete features on the map. When the user clicks an empty space on the map, a modal for adding attributes pops up and the feature is added once the user clicks "Add". When the user clicks on an existing event, a popup appears with details and a modal appears for either updating or deleting the event.

My purpose for writing this application was to gain experience using maps in my programming repetoire. Overall, it was much more difficult than I expected. There are multiple different ways taught on the ArcGIS Developer network to accomplish the same task, so it became confusing at times trying to figure out the best way to do things. 

Also, I first started this project trying to build an app in iOS. I spent several hours trying to figure out how to add, update, and delete features in app before I realized there is no ArcGIS support for these functionalities in Swift. Ultimately, I determined it was best to use Apple's own map feautres for an iOS app, and I switched to making a web app instead.

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

## Tools
* Visual Studio Code
* ArcGIS Portal
* Vite
* ESLint
* Prettier
* xCode (before switching to web app)

## Languages
* HTML/CSS
* JavaScript
* ArcGIS Maps SDK for JavaScript
* ArcGIS REST JS
* Swift and Swift UI (before switching to web app)
* ArcGIS Maps SDK for Swift (before switching to web app)

# Useful Websites

* [esri Developer](https://developers.arcgis.com/swift/sample-code/)
* [ArcGIS Location Platform](https://horneddaisy.maps.arcgis.com/home/organization.html#overview)
* [Apple Developer](https://developer.apple.com)
* [W3 Schools](https://www.w3schools.com)
* [stackoverflow](https://stackoverflow.com)

# Future Work

* Remove the add/update/delete modals when you click outside them.
* Add an option to filter the features on the feature layer.
* Make the category input a select instead of a text input.
* Improve styling.
* Make real header and footers.
* Give user feedback when a user adds/updates/deletes a feature.
