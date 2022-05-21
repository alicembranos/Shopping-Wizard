import {
    inputsToValidate,
    validation,
    setRequiredFields
} from "./validation.js";
import {
    updateProduct,
    addQuantity,
    reduceQuantity
} from "./productPage.js";

/* GENERAL VARIABLES */
const inputs = form.querySelectorAll("input, select");
const addQty = document.getElementById("addQty");
const reduceQty = document.getElementById("reduceQty");
const listProducts = document.getElementById("products").children;

//Product picker functionality
Array.from(listProducts).map((product) => {
    product.addEventListener("click", updateProduct);
});

//Set required fields
setRequiredFields(inputs);

//Add validation to form fields 
Array.from(inputsToValidate).map((input) => {
    input.addEventListener("blur", validation);
});

//Add functionality to quantity buttons
addQty.addEventListener("click", addQuantity);
reduceQty.addEventListener("click", reduceQuantity);