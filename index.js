

// form element
const form = document.querySelector("#form");

// input elements
// name input elements and value
 const firstNameInput = document.getElementById("fName");

 const lastNameInput = document.getElementById("lName");

//  email selector
 const emailInput = document.getElementById("email");

//  textarea input and value
 const textareaInput = document.getElementById("message");

//  radio elements
const supportRadioInput = document.getElementById("support");
const generalRadioInput = document.getElementById("general");

// checked button
const checkButtonInput = document.getElementById("consent");

// error elements
const firstNameError = document.getElementById("fName-error");
const lastNameError = document.getElementById("lName-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const consentError = document.getElementById("consent-error");
const queryError = document.getElementById("query-error");

// button element
const submitButton = document.getElementById("submit");

// form element
const formElement = document.getElementById("form");

// add event listeners
formElement.addEventListener("onsubmit", (e) => {
    e.preventDefault();
    console.log("first");
})