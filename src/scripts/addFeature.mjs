export default function addFeatureModal() {
    //Create the modal and its elements
    let mainSection = document.getElementById("main-section");
    let addFeatureModal = document.createElement("div");
    let addFeatureForm = document.createElement("form");
    let formName = document.createElement("input");
    let formCategory = document.createElement("input");
    let formDescription = document.createElement("input");
    let addButton = document.createElement("button");
    let nameLabel = document.createElement("label");
    let categoryLabel = document.createElement("label");
    let descriptionLabel = document.createElement("label");


    //Set the element attributes
    addFeatureModal.id = "add-feature-modal";
    addFeatureForm.id = "add-feature-form";

    formName.name = "object-name";
    formName.id = "object-name";
    formName.type = "text";
    nameLabel.setAttribute("for", formName);
    nameLabel.innerHTML = "Name";

    formCategory.name = "category";
    formCategory.id = "category";
    formCategory.type = "text";
    categoryLabel.setAttribute("for", formCategory);
    categoryLabel.innerHTML = "Category";

    formDescription.name = "description";
    formDescription.id = "description";
    formDescription.type = "text";
    descriptionLabel.setAttribute("for", formDescription);
    descriptionLabel.innerHTML = "Description";

    addButton.type = "button";
    addButton.id = "add-button";
    addButton.innerHTML = "Add";

    //Append elements to the form
    addFeatureForm.appendChild(nameLabel);
    addFeatureForm.appendChild(formName);
    addFeatureForm.appendChild(categoryLabel);
    addFeatureForm.appendChild(formCategory);
    addFeatureForm.appendChild(descriptionLabel);
    addFeatureForm.appendChild(formDescription);
    addFeatureForm.appendChild(addButton);

    //Append to div and then to main
    addFeatureModal.appendChild(addFeatureForm);
    mainSection.appendChild(addFeatureModal);
}