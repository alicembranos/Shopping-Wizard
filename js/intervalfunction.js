import {
    toogleDisplay,
    reset
} from "./utils.js";

/* GENERAL VARIABLES */
let downcounter = 4
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("message");
let interval;
let timeout;
let timeoutPopup;
const intervalTime = 60000;
const displayMessage = 5000;

//set interval minute to inform costumer of time left
const initiateOrder = () => {
    interval = setInterval(() => {
        popupMessage.textContent = `Heads up! Only ${downcounter} minutes left to complete the purchase.`;
        toogleDisplay(popup);
        timeoutPopup = setTimeout(() => {
            toogleDisplay(popup);
        }, displayMessage);
        downcounter--;
        if (downcounter == 0) {
            stopInterval();
            downcounter = 4;
        }
    }, intervalTime);
};

const stopInterval = () => {
    clearInterval(interval);
    timeout = setTimeout(() => {
        //display fin process
        popupMessage.textContent = "Sorry, the maximum purchase limit time has been exceeded. You will be redirected to the home page."
        toogleDisplay(popup);
        timeoutPopup = setTimeout(() => {
            toogleDisplay(popup);
            backHome();
        }, displayMessage);

    }, intervalTime);
}

const backHome = () => {
    reset();
}

export {
    initiateOrder,
    interval,
    timeout,
};