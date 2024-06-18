// window.alert("Connected to javascript");


// form element
const form = document.querySelector("#form");

// input elements
// name input elements and value
 const firstNameInput = document.getElementById("fName");
 firstNameInput.addEventListener("focus", () => {
    firstNameInput.value = "";
    firstNameError.textContent = "";
    firstNameInput.classList.remove("error-active");
 })
 
 const lastNameInput = document.getElementById("lName");

 lastNameInput.addEventListener("focus", () => {
    lastNameInput.value = "";
    lastNameError.textContent = "";
    lastNameInput.classList.remove("error-active");
 })

//  email selector
 const emailInput = document.getElementById("email");
 emailInput.addEventListener("focus", () => {
    emailInput.value = ""
    emailError.textContent= "";
    emailInput.classList.remove("error-active");
 })

//  textarea input and value
 const textareaInput = document.getElementById("message");
 textareaInput.addEventListener("focus", () => {
    messageError.textContent = "";
    textareaInput.classList.remove("error-active");
 })

//  radio elements
const supportEnquiry = document.querySelector(".support-request");
const generalEnquiry = document.querySelector(".general-enquiry");

const supportRadioInput = document.getElementById("support");
supportRadioInput.addEventListener("click", () => {
    queryError.textContent = "";
    supportEnquiry.classList.add("selected");
    generalEnquiry.classList.remove("selected");
    supportEnquiry.classList.remove("error-active");
    generalEnquiry.classList.remove("error-active");
});

const generalRadioInput = document.getElementById("general");
generalRadioInput.addEventListener("click", () => {
    queryError.textContent = "";
    generalEnquiry.classList.add("selected");
    supportEnquiry.classList.remove("selected");
    supportEnquiry.classList.remove("error-active");
    generalEnquiry.classList.remove("error-active");
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
        firstNameInput.classList.add("error-active");
    }

    if(!lastNameInput.value) {
        lastNameError.textContent ="I am expecting your last name please";
        lastNameInput.classList.add("error-active");
    }

    if(!emailInput.value) {
        emailError.textContent ="You forget to tnter your email please";
        emailInput.classList.add("error-active");
    }

    if(!emailInput.value.includes("@")) {
        emailError.textContent = "Enter an email please";
        emailInput.classList.add('error-active');
    }

    if(!supportRadioInput.value || !generalRadioInput.value) {
        queryError.textContent = "tell us about your enquiry" ;
        
    }

    // no radio button clicked
    if(!supportRadioInput.checked && !generalRadioInput.checked) {
        queryError.textContent = "What type of enquiry do want to make";
        supportEnquiry.classList.add("error-active");
        generalEnquiry.classList.add("error-active");
    }

    if(textareaInput.value === "") {
        messageError.textContent = "What is your enquiry please?";
        textareaInput.classList.add("error-active");
    }

    if(checkButton.checked === false) {
        consentError.textContent = "kindly give your consent please";
    }

})