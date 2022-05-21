import {
    countries,
    prefix,
    user,
    shipmentTypes,
    toogleDisplay,
    toggleBoolen
}
from "./utils.js"

import {validateShipmentSelect} from "./validation.js"

/* GENERAL VARIABLES */
const selectPrefix = document.getElementById("prefix");
const stepPages = document.querySelectorAll('.step-page__article');
const progressBar = document.getElementById("progressBar");
const iconsStatusBar = document.querySelectorAll('.progress-bar__li-filled');
var counter = 0; //Counter to activate and desactivate form steps

//fill country select element
const fillCountrySelect = () => {
    const selectCountry = document.getElementById("country");
    let optionsCountries = countries.map(country =>
        country == "Select Country" ? `<option value="">${country}</option>` : `<option value=${country}>${country}</option>`);
    selectCountry.innerHTML = optionsCountries;
}

//fill prefix select element
const fillPrefixSelect = () => {
    let optionsPrefix = prefix.map(pre =>
        pre.pre == "" ? `<option value="">${pre.co}</option>` : `<option value=${pre.pre}>${pre.co} (+${pre.pre})</option>`);
    selectPrefix.innerHTML = optionsPrefix;
}

//select prefix according to selected country
const addPrefix = (e) => {
    e.preventDefault();
    const position = countries.indexOf(e.target.value);
    position == -1 ? selectPrefix.selectedIndex = 0 : selectPrefix.selectedIndex = position;
}

//update user country value when country select
const updateCountry = (e) => {
    const prefix = document.getElementById("prefix");
    user.country = e.target.value;
    //update prefix
    user.prefix = prefix.value;
    console.log(user);
}

//update user country value when country select
const updatePrefix = (e) => {
    user.prefix = e.target.value;
    console.log(user);
}

//calculate delivery dates, save and display result in form page
function shipmentMethod(e) {
    //Set data required to false for all radio buttons inputs
    const containerRadioButtons = (e.target.parentElement.parentElement);
    const dataRequiredElements = containerRadioButtons.querySelectorAll("[data-required]");
    console.log(dataRequiredElements);
    Array.from(dataRequiredElements).map((radioContainer) => {
        radioContainer.dataset.required = false;
    })

    const dateShipment = document.getElementById("date_shipment");
    const divDates = document.querySelector(".dates-text");
    const shipmentType = shipmentTypes.find(shipType => {
        return shipType.type == e.target.value
    })

    divDates.classList.remove('hidden');
    dateShipment.textContent = dateBetween(shipmentType.time);
    user["shi-type"] = e.target.value;
    console.log(user);
}

//calculate date shipment
function dateBetween(hours) {
    const date1 = addHours(hours);
    const date2 = addHours(hours + 24);
    return `${formatDate(date1)} and ${formatDate(date2)}`;
}

//add hours
function addHours(hours) {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
}

//format Date Time to dd/mm/yyyy hh:mm
function formatDate(date) {
    const dateFormatted = [
        padTo2digits(date.getDate()),
        padTo2digits(date.getMonth() + 1),
        padTo2digits(date.getFullYear()),
    ].join('/');
    const hourFormatted = [
        padTo2digits(date.getHours()),
        padTo2digits(date.getMinutes()),
    ].join(':');
    return `${dateFormatted} ${hourFormatted}`;
}

//pad with two digits
function padTo2digits(num) {
    return num.toString().padStart(2, '0');
}

//display container gift and set yuser value gift option
const displayGift = (e) => {
    toogleDisplay(e.target.parentElement.nextElementSibling);
    user[`${e.target.name}`] = toggleBoolen(user[`${e.target.name}`]);
    console.log(user);
}

const navigateStepsForm = (i, e) => {

    const formButtons = document.getElementById("formButtons");

    switch (i) {
        case 0:
            //save product and move to step form 1
            const productSelected = document.querySelector("[data-select]");
            user.product = productSelected.dataset.product;
            toogleDisplay(e.target.parentElement.parentElement);
            toogleDisplay(progressBar);
            toogleDisplay(stepPages[i]);
            toogleDisplay(formButtons);
            counter++;
            break;
        case 1:
            //move to step form 2
            iconsStatusBar[i].classList.add("active");
            toogleDisplay(stepPages[i - 1]);
            toogleDisplay(stepPages[i]);
            counter++;
            break;
        case 2:
            //move to step form 3
            //validate shipment type
            iconsStatusBar[i].classList.add("active");
            toogleDisplay(stepPages[i - 1]);
            toogleDisplay(stepPages[i]);
            counter++;
            break;
        case 3:
            //move to step form 4
            break;
        case 4:
            //move to step thankyou page
            break;

        default:
            break;
    }
}


export {
    fillCountrySelect,
    fillPrefixSelect,
    addPrefix,
    updateCountry,
    updatePrefix,
    shipmentMethod,
    displayGift,
    counter,
    navigateStepsForm
};