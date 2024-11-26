export default function showModal() {
    //Create the modal and its elements
    let mainSection = document.getElementById("main-section");
    let updateDeleteModal = document.createElement("div");
    let modalForm = document.createElement("form");
    let formName = document.createElement("input");
    let formCategory = document.createElement("input");
    let formDescription = document.createElement("input");
    let updateDeleteButtons = document.createElement("div");
    let updateButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let nameLabel = document.createElement("label");
    let categoryLabel = document.createElement("label");
    let descriptionLabel = document.createElement("label");


    //Set the element attributes
    updateDeleteModal.id = "update-delete-modal";
    updateDeleteButtons.id = "update-delete-buttons";
    modalForm.id = "modal-form";

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

    updateButton.type = "button";
    updateButton.id = "update-button";
    updateButton.innerHTML = "Update";

    deleteButton.type = "button";
    deleteButton.id = "delete-button";
    deleteButton.innerHTML = "Delete";

    //Append elements to the form
    updateDeleteButtons.appendChild(updateButton);
    updateDeleteButtons.appendChild(deleteButton);

    modalForm.appendChild(nameLabel);
    modalForm.appendChild(formName);
    modalForm.appendChild(categoryLabel);
    modalForm.appendChild(formCategory);
    modalForm.appendChild(descriptionLabel);
    modalForm.appendChild(formDescription);
    modalForm.appendChild(updateDeleteButtons);

    //Append to div and then to main
    updateDeleteModal.appendChild(modalForm);
    mainSection.appendChild(updateDeleteModal);
}
