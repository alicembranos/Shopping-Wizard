import {
    inputsToValidate,
    validation,
    setRequiredFields,
    nextPageValidation,
    finalOrderAccept
} from "./validation.js";
import {
    updateProduct,
    addQuantity,
    reduceQuantity
} from "./productPage.js";
import {
    fillCountrySelect,
    fillPrefixSelect,
    addPrefix,
    updateCountry,
    updatePrefix,
    shipmentMethod,
    selectionGift,
    navigateStepsForm,
    counter,
    selectRegularAddress,
    resetFormInputs
} from "./formfunctions.js";
import {
    reset
} from "./utils.js";
import {
    initiateOrder,
    interval,
    timeout
} from "./intervalfunction.js"

/* GENERAL VARIABLES */
const inputs = form.querySelectorAll("input, select");
const addQty = document.getElementById("addQty");
const reduceQty = document.getElementById("reduceQty");
const listProducts = document.getElementById("products").children;
const countrySelect = document.getElementById("country");
const prefixSelect = document.getElementById("prefix");
const regularAddressCheckbox = document.getElementById("reg-address");
const radioButtonsDates = document.querySelectorAll("input[type=radio]");
const giftCheckbox = document.getElementById("gif-option");
const fileInput = document.querySelector(".input-file");
const buttonFileInput = document.querySelector(".input-file-trigger");
const fileInfo = document.querySelector(".file-return");
const nextStepButton = document.getElementById("nextStep");
const addtoCartButton = document.getElementById("addtoCartButton");
const confirmationOrderButton = document.getElementById("confirmation__button");
const backHomeButton = document.getElementById("backHome__button");
const clearFormButton = document.getElementById("clearForm");

//Product picker functionality
Array.from(listProducts).map((product) => {
    product.addEventListener("click", updateProduct);
});

//Add functionality to quantity buttons
addQty.addEventListener("click", addQuantity);
reduceQty.addEventListener("click", reduceQuantity);

//Set required fields
setRequiredFields(inputs);

//Add validation to form fields 
Array.from(inputsToValidate).map((input) => {
    input.addEventListener("blur", validation);
});

//Fill country and prefix select elements
fillCountrySelect();
fillPrefixSelect()

//Add prefix when country selected
countrySelect.addEventListener('change', addPrefix);

//Save value when prefix and country value change
countrySelect.addEventListener('change', updateCountry);
prefixSelect.addEventListener('change', updatePrefix);

//display container with date delivery information
Array.from(radioButtonsDates).map((rb) => {
    rb.addEventListener('change', shipmentMethod);
});

//regular address checkbox
regularAddressCheckbox.addEventListener("change", (e) => {
    selectRegularAddress(e);
})

//gift option functionality
giftCheckbox.addEventListener('change', selectionGift);

//input file implementation
buttonFileInput.addEventListener("keyDown", (e) => {
    if (e.keyCode == 13 || e.keyCode == 32) { //if space o enter is pressed
        fileInput.focus();
    }
});
buttonFileInput.addEventListener("click", () => {
    fileInput.focus();
    return false;
});
fileInput.addEventListener("change", (e) => {
    fileInfo.innerHTML = e.target.value;
});

//initiate purchase order process
addtoCartButton.addEventListener("click", (e) => {
    initiateOrder();
    navigateStepsForm(counter, e);
});


//Navigate between form pages
nextStepButton.addEventListener("click", (e) => {
    const stepFormContainer = document.querySelector(".step-page__article:not(.hidden)");
    nextPageValidation(stepFormContainer, e);
});


//clear form input fiels
clearForm.addEventListener("click", resetFormInputs);

//final order acceptation
confirmationOrderButton.addEventListener("click", () => {
    clearInterval(interval);
    clearTimeout(timeout);
    finalOrderAccept();
});

//come back to start process purchase order
backHomeButton.addEventListener("click", reset);

export {
    confirmationOrderButton,
    backHomeButton
}