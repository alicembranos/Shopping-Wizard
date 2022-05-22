import {
  messagesElements,
  expressions,
  requiredFields,
  user,
} from "./utils.js";
import {
  counter,
  navigateStepsForm,
  updateSummaryPage
} from "./formfunctions.js";

const form = document.getElementById("form");
const inputsToValidate = form.querySelectorAll(
  "input:not([type='checkbox']):not([type='radio'])"
);

//Set required fields
const setRequiredFields = (inputs) => {
  Array.from(inputs).map((input) => {
    if (requiredFields.includes(input.name)) {
      input.parentElement.dataset.required = true;
    }
  });
};

//control step to next page form
const nextPageValidation = (sectionParent, e) => {
  console.log('section parent id ' + sectionParent.id);
  if (sectionParent.id == "step-page3") { //control if step 3 form, validation is different from the others
    validateShipmentSelect(e);
  } else {
    const containerInvalid = sectionParent.querySelectorAll(
      "[data-invalid='true']"
    );
    validationRequired(sectionParent);
    if (!(containerInvalid.length > 0)) {
      const containerRequired = sectionParent.querySelectorAll(
        "[data-required='true']"
      );
      if (!(containerRequired.length > 0)) {
        //Navigate to next page
        navigateStepsForm(counter, e);
      }
    }
  }

};

//Validation required fields
const validationRequired = (sectionParent) => {
  const fieldsRequired = sectionParent.querySelectorAll(
    "[data-required='true']"
  );
  const inputIncorrect = `<p class='input-required'>This field is required.</p>`;
  Array.from(fieldsRequired).map((field) => {
    removeErrorMessage(field, "input-required");
    if (field.children[1].value.length == 0) {
      field.insertAdjacentHTML("beforeend", inputIncorrect);
    } else {
      field.dataset.required = false;
    }
  });
};

//validate shipment type selection
const validateShipmentSelect = (e) => {
  const shipmentContainer = document.getElementById("shipmentContainer");
  const inputIncorrect = `<p class='input-required'>This field is required.</p>`;
  removeErrorMessage(shipmentContainer, "input-required");
  if (user["shi-type"].length == 0) {
    shipmentContainer.insertAdjacentHTML("beforeend", inputIncorrect);
    shipmentContainer.dataset.required = true;
  } else {
    shipmentContainer.dataset.required = false;
    updateSummaryPage();
    navigateStepsForm(counter, e);
  }
};

//Validation form fields
const validation = (e) => {
  const inputName = e.target.name;
  const inputValue = e.target.value;
  const formGroup = e.target.parentElement;
  removeErrorMessage(formGroup, "input-invalid");
  removeErrorMessage(formGroup, "input-required");
  let regexp;

  switch (inputName) {
    case "username":
      regexp = getRegexp(inputName);
      validationInputForm(inputValue, inputName, formGroup, regexp);
      break;
    case "email":
      regexp = getRegexp(inputName);
      validationInputForm(inputValue, inputName, formGroup, regexp);
      break;
    case "password":
      regexp = getRegexp(inputName);
      removeErrorMessage(formGroup, "confirmation-invalid");
      validationInputForm(inputValue, inputName, formGroup, regexp);
      validatePassword(formGroup);
      break;
    case "confirm-password":
      removeErrorMessage(formGroup, "confirmation-invalid");
      validatePassword(formGroup);
      break;
    case "first-name":
      regexp = getRegexp(inputName);
      validationInputForm(inputValue, inputName, formGroup, regexp);
      break;
    case "last-name":
      regexp = getRegexp(inputName);
      validationInputForm(inputValue, inputName, formGroup, regexp);
      break;
    case "birthday":
      validateBirthday(formGroup, inputValue);
      break;
    case "address1":
      regexp = getRegexp(inputName);
      validationInputForm(inputValue, inputName, formGroup, regexp);
      break;
    case "address2":
      regexp = getRegexp(inputName);
      validationInputForm(inputValue, inputName, formGroup, regexp);
      break;
    case "postal-code":
      regexp = getRegexp(inputName);
      validationInputForm(inputValue, inputName, formGroup, regexp);
      break;
    case "phone":
      regexp = getRegexp(inputName);
      validationInputForm(inputValue, inputName, formGroup, regexp);
      break;
    case "gift-title":
      user["gift-title"] = inputValue;
      break;
    default:
      break;
  }
};

//Validate regular expressions and required fields
const validationInputForm = (inputValue, inputName, formGroup, regexp) => {
  if (!regexp.test(inputValue)) {
    const message = getErrorMessage(inputName);
    const inputIncorrect = `<p class='input-invalid'>${message}.</p>`;
    formGroup.insertAdjacentHTML("beforeend", inputIncorrect);
    formGroup.dataset.invalid = true;
    user[`${inputName}`] = "";
  } else {
    formGroup.dataset.invalid = false;
    user[`${inputName}`] = inputValue;
  }
};

//Validate password
const validatePassword = (formGroup) => {
  const password1 = document.getElementById("password").value;
  const password2 = document.getElementById("confirm-password").value;
  if (password2 !== "") {
    if (password1 !== password2) {
      const inputIncorrect = `<p class='confirmation-invalid'>The confirm password does not match.</p>`;
      formGroup.insertAdjacentHTML("beforeend", inputIncorrect);
      formGroup.dataset.invalid = true;
      user.password = "";
    } else {
      formGroup.dataset.invalid = false;
      user.password = password1;
    }
  }
};

//Validate birthday
const validateBirthday = (formGroup, date) => {
  const birthday = new Date(date);
  const today = new Date();
  if (birthday.getTime() > today.getTime()) {
    const inputIncorrect = `<p class='input-invalid'>You can not select a future date.</p>`;
    formGroup.insertAdjacentHTML("beforeend", inputIncorrect);
    formGroup.dataset.invalid = true;
  } else if (getAge(date) < 18) {
    const inputIncorrect = `<p class='input-invalid'>Age must more than 18 years old.</p>`;
    formGroup.insertAdjacentHTML("beforeend", inputIncorrect);
    formGroup.dataset.invalid = true;
  } else {
    //Save birthday
    user.birthday = date;
    formGroup.dataset.invalid = false;
  }
};

//Calculate age
const getAge = (date) => {
  var today = new Date();
  var birthDate = new Date(date);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

//Remove error message
const removeErrorMessage = (formGroup, errorType) => {
  const errorMessage = formGroup.querySelector(`.${errorType}`);
  if (errorMessage) errorMessage.remove();
};

//Get error message
const getErrorMessage = (inputName) => {
  if (messagesElements.hasOwnProperty(inputName))
    return messagesElements[`${inputName}`];
};

//Get regexp
const getRegexp = (inputName) => {
  if (expressions.hasOwnProperty(inputName)) return expressions[`${inputName}`];
};

export {
  inputsToValidate,
  validation,
  setRequiredFields,
  nextPageValidation,
};