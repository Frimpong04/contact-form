// window.alert("Connected to javascript");


// form element
const form = document.querySelector("#form");

// input elements
// name input elements and value
 const firstNameInput = document.getElementById("fName");
 firstNameInput.addEventListener("focus", () => {
    firstNameInput.value = "";
    firstNameError.textContent = "";
 })
 
 const lastNameInput = document.getElementById("lName");

 lastNameInput.addEventListener("focus", () => {
    lastNameInput.value = "";
    lastNameError.textContent = "";
 })

//  email selector
 const emailInput = document.getElementById("email");
 emailInput.addEventListener("focus", () => {
    emailInput.value = ""
    emailError.textContent= "";
 })
//  textarea input and value
 const textareaInput = document.getElementById("message");
 textareaInput.addEventListener("focus", () => {
    messageError.textContent = "";
 })

//  radio elements
const supportRadioInput = document.getElementById("support");
supportRadioInput.addEventListener("click", () => {
    queryError.textContent = ""
});

const generalRadioInput = document.getElementById("general");
generalRadioInput.addEventListener("click", () => {
    queryError.textContent = "";
});

// checked button
const checkButton= document.getElementById("consent");
checkButton.addEventListener("click", () => {
    consentError.textContent = ""
});

// error elements
const firstNameError = document.getElementById("fName-error");
const lastNameError = document.getElementById("lName-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const consentError = document.getElementById("consent-error");
const queryError = document.getElementById("query-error");

// button element
const submitButton = document.getElementById("submit");

// event Listenres


form.addEventListener("submit", (event) => {
   event.preventDefault();
    console.log("submit me");

    if(!firstNameInput.value) {
        firstNameError.textContent = "I am expecting a first name please";
    }

    if(!lastNameInput.value) {
        lastNameError.textContent ="I am expecting your last name please";
    }

    if(!emailInput.value) {
        emailError.textContent ="You forget to tnter your email please";
    }

    if(!emailInput.value.includes("@")) {
        emailError.textContent = "Enter an email please";
    }

    if(!supportRadioInput.value || !generalRadioInput.value) {
        queryError.textContent = "tell us about your enquiry" ;
    }

    if(!supportRadioInput.checked && !generalRadioInput.checked) {
        queryError.textContent = "Whta type of enquiry do want to make";
    }

    if(textareaInput.value === "") {
        messageError.textContent = "What is your enquiry please?";
    }

    if(checkButton.checked === false) {
        consentError.textContent = "kindly give your consent please";
    }

})