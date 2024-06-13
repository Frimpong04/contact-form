

// button
// const submitButton = document.getElementById("submit");
const formInputs = document.getElementById("form").value;

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
const checkButtonInput = document.getElementById("consent").checked;

// error elements
const firstNameError = document.getElementById("fName-error");
const lastNameError = document.getElementById("lName-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const consentError = document.getElementById("consent-error");
const queryError = document.getElementById("query-error");

// button element
const submitButton = document.getElementById("submit");

// add event listeners
const validateForm = () => {
    console.log("first")
}