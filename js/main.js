import {
    inputsToValidate,
    validation,
    setRequiredFields
} from "./validation.js";
import {
    addQuantity,
    reduceQuantity
} from "./productPage.js";

/* GENERAL VARIABLES */
const inputs = form.querySelectorAll("input, select");

//Set required fields
setRequiredFields(inputs);

//Add validation to form fields 
Array.from(inputsToValidate).map((input) => {
    input.addEventListener("blur", validation);
});

//Add functionality to quantity buttons