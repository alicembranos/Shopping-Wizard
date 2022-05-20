import { inputsToValidate, validation, setRequiredFields} from "./validation.js";

/* GENERAL VARIABLES */
const inputs = form.querySelectorAll("input, select");

console.log(inputsToValidate);
setRequiredFields(inputs);


Array.from(inputsToValidate).map((input) => {
    input.addEventListener("blur", validation);
});