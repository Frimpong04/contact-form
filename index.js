// button
const submitButton = document.getElementById("submit");

// input elements
// name input elements and value
 const firstNameInput = document.getElementById("fName").value;

 const lastNameInput = document.getElementById("lName").value;

//  email selector
 const emailInput = document.getElementById("email").value;

//  textarea input and value
 const textareaInput = document.getElementById("message").value;

//  radio elements
const supportRadioInput = document.getElementById("support").value;
const generalRadioInput = document.getElementById("general").value;

// checked button
const checkButtonInput = document.getElementById("consent").value;

// add event listeners
submitButton.addEventListener("onsubmit", () => {
    console.log(firstNameInput);
})