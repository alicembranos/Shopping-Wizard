// Global Variables
const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expressions = {
    username: /^[a-zA-Z0-9.-_]{5,20}$/, //Words, numbers, hyphen and underscore
    email: /^\S+@\S+\.[\S]{2,3}/,


}

let startTime = new Date().getTime();

setTimeout(function () {
    let endTime = new Date().getTime();
    console.log("duration [ms] = " + (endTime - startTime));
}, 1500);