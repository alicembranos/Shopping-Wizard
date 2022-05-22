import {
    countries,
    prefix,
    user,
    shipmentTypes,
    toogleDisplay,
    toggleBoolen,
    data
}
from "./utils.js"

import {confirmationOrderButton} from "./main.js";

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
}

//update user country value when country select
const updatePrefix = (e) => {
    user.prefix = e.target.value;
}

//regular address selection and update user value
const selectRegularAddress = (e) => {
    toggleBoolen(e.target.checked);
    user["reg-address"] = e.target.checked;
}

//calculate delivery dates, save and display result in form page
function shipmentMethod(e) {
    //Set data required to false for all radio buttons inputs
    const containerRadioButtons = (e.target.parentElement.parentElement);
    const dataRequiredElements = containerRadioButtons.querySelectorAll("[data-required]");
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

//display container gift and set user value gift option
const selectionGift = (e) => {
    toogleDisplay(e.target.parentElement.nextElementSibling);
    user[`${e.target.name}`] = toggleBoolen(user[`${e.target.name}`]);
}

const navigateStepsForm = (i, e) => {

    const formButtons = document.getElementById("formButtons");
    const thankYouSummary = document.getElementById("thankYouSummary");

    console.log('counter ' + counter);
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
            iconsStatusBar[i].classList.add("active");
            toogleDisplay(stepPages[i - 1]);
            toogleDisplay(stepPages[i]);
            counter++;
            break;
        case 3:
            //move to step form 4
            iconsStatusBar[i].classList.add("active");
            toogleDisplay(stepPages[i - 1]);
            toogleDisplay(stepPages[i]);
            toogleDisplay(formButtons);
            counter++;
            break;
        case 4:
            //move to step thankyou page
            toogleDisplay(progressBar);
            toogleDisplay(thankYouSummary);
            toogleDisplay(confirmationOrderButton);
            counter = -1;
            break;
        default:
            break;
    }
}

//update values in summary page order
const updateSummaryPage = () => {
    console.log('entra');
    const summaryUser = document.getElementById("username-summary");
    const summaryName = document.getElementById("fullName");
    const summaryAddress = document.getElementById("finalAddress");
    const summaryPhone = document.getElementById("finalPhone");
    const summaryCountry = document.getElementById("countryPost");
    const summaryShipType = document.getElementById("finalShipType");
    const summaryDeliveryDates = document.getElementById("finalDeliveryDates");
    const orderPriceProduct = document.getElementById("pricep-summary");
    const orderShipPrice = document.getElementById("prices-summary");
    const orderSummaryPrice = document.getElementById("pricet-summary");
    const orderNameShip = document.getElementById("typeship-summary");
    const summaryOrderProduct = document.getElementById("orderProduct");
    const summaryImageProduct = document.getElementById("orderImageProduct");

    //update user information order
    summaryUser.textContent = user.username;
    summaryName.textContent = `${user["first-name"]} ${user["last-name"]}`;
    summaryAddress.textContent = `${user.address1}`;
    summaryPhone.textContent = `${user.prefix} ${user.phone}`;
    summaryCountry.textContent = `${user["postal-code"]} ${user.country}`;
    summaryShipType.textContent = shipmentTypes.find(shipType => {
        return (shipType.type == user["shi-type"])
    }).name;
    summaryDeliveryDates.textContent = dateBetween(shipmentTypes.find(shipType => {
        return (shipType.type == user["shi-type"])
    }).time);

    //update price product breakdown
    const orderPrice = document.querySelector("[data-price]").childNodes[2].textContent;
    const priceShipment = shipmentTypes.find(shipType => {
        return (shipType.type == user["shi-type"])
    }).price;
    orderPriceProduct.textContent = orderPrice + "€";
    orderShipPrice.textContent = priceShipment + "€";
    const totalOrderPrice = parseFloat(orderPrice.replace(/,/g, ".")) + parseFloat(priceShipment);
    orderSummaryPrice.textContent = totalOrderPrice + "€";
    orderNameShip.textContent = shipmentTypes.find(shipType => {
        return (shipType.type == user["shi-type"])
    }).name;

    //update summary product
    summaryOrderProduct.textContent = data.find(product => {
        return (product.id == user.product)
    }).name;

    summaryImageProduct.src = data.find(product => {
        return (product.id == user.product)
    }).finalimage;
}

export {
    fillCountrySelect,
    fillPrefixSelect,
    addPrefix,
    updateCountry,
    updatePrefix,
    shipmentMethod,
    selectionGift,
    counter,
    navigateStepsForm,
    selectRegularAddress,
    updateSummaryPage
};