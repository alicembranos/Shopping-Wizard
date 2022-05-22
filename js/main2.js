/****************Global Variables*****************/
const form = document.getElementById('form');
const inputs = document.querySelectorAll("#form input:not([type='checkbox'], [type='radio'])");
const inputsOthers = document.querySelectorAll("#form input[type='checkbox'],#form input[type='radio'] ")
const countryEl = document.getElementById('country');
const steps = Array.from(document.querySelectorAll('#form .step'));
const fieldsNotRequired = ['confirm-password', 'address2', 'reg-address', 'gif-option', 'gift-title', 'gift-message', 'gift-image'];

/******** Multi Step Form **********/
const nextButton = document.getElementById('next-step');
const clearButton = document.getElementById('clear-form');
const buyButton = document.getElementById('buy_btn');
const productPage = document.querySelector('.product_page');
const stepPages = document.querySelectorAll('.step');
const statusBar = document.querySelector('.header-main');
const buttonFooter = document.querySelector('.footer-main');
const iconsStatusBar = statusBar.querySelectorAll('li');
const backToHome = document.getElementById("button-back");
const buttonThank = document.getElementById("button-thank");
const accept1 = document.getElementById("accept1");
const accept2 = document.getElementById("accept2");
const requiredMessage = document.querySelector('.footer-main>p');
const requiredFinalMessage = document.getElementById("end-message");
const finalCheckbox = document.getElementById('final-accept');

/* Variables to control prefix phone number options */
const selectCountry = document.getElementById("country");
const selectPrefix = document.getElementById("prefix");
const phoneElement = document.getElementById("phone");

/*Data user object*/
let user = {
    'username': '',
    'email': '',
    'password': '',
    'first-name': '',
    'last-name': '',
    'birthday': '',
    'address1': '',
    'address2': '',
    'postal-code': 0,
    'country': '',
    'prefix': '',
    'phone': '',
    'reg-address': false,
    'shi-type': '',
    'gif-option': false,
    'gift-title': '',
    'gift-message': '',
    'gift-image': ''
};

/* Required fields */
let fields = {
    'username': false,
    'email': false,
    'password': false,
    'first-name': false,
    'last-name': false,
    'birthday': false,
    'address1': false,
    'postal-code': false,
    'country': false,
    'prefix': false,
    'phone': false,
    'shi-type': false,
}

let optionsCountries = countries.map(country => `<option value=${country}>${country}</option>`);
selectCountry.innerHTML = optionsCountries;
let optionsPrefix = prefix.map(pre =>
    pre.pre == "" ? `<option value="">${pre.co}</option>` : `<option value=${pre.pre}>${pre.co} (+${pre.pre})</option>`);
selectPrefix.innerHTML = optionsPrefix;

/********** Select prefix according to selected country  ***********/
function addPrefix(e) {
    e.preventDefault();
    const position = countries.indexOf(e.target.value);
    position == -1 ? selectPrefix.selectedIndex = 0 : selectPrefix.selectedIndex = position;
}

/********** Calculate date shipment ***********/
function dateBetween(hours) {
    const date1 = addHours(hours);
    const date2 = addHours(hours + 24);
    return `${formatDate(date1)} and ${formatDate(date2)}`;
}

/* Function to adding hours */
function addHours(hours) {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
}

/* Format Date Time to dd/mm/yyyy hh:mm */
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

/* Pad with two digits */
function padTo2digits(num) {
    return num.toString().padStart(2, '0');
}

/*Array of delivery times*/
const shippingTime = [72, 48, 24];
const valuesShipement = ['free_shipment', 'extra_shipping', 'premium'];
const namesShipement = ['Free Shipment', 'Extra Shipment', "Premium Shipment"];
const costShipement = [0, 4.99, 9.99];

/* Display div with dates delivery information */
const radioButtons = document.querySelectorAll("input[type=radio]");
radioButtons.forEach((rb) => rb.addEventListener('change', shipmentMethod)); //Add handler events to radio buttoms
const dateShipment = document.getElementById("date_shipment");
const divDates = document.querySelector(".dates-text");

function shipmentMethod(e) {
    e.preventDefault();
    const position = valuesShipement.indexOf(e.target.value);

    divDates.classList.remove('inactive');
    dateShipment.textContent = dateBetween(shippingTime[position]);

}

/********** Gift option **********/
const gift = document.getElementById("gif-option");
gift.addEventListener('change', displayGift);
const giftContainer = document.querySelector(".gift-container");

function displayGift() {
    if (gift.checked) {
        giftContainer.classList.remove('inactive');
    } else {
        giftContainer.classList.add('inactive');
    }
}

/******* Input file implementation**********/
const fileInput = document.querySelector(".input-file");
const button = document.querySelector(".input-file-trigger");
const fileInfo = document.querySelector(".file-return");

button.addEventListener("keyDown", (e) => {
    if (e.keyCode == 13 || e.keyCode == 32) { //if space o enter is pressed
        fileInput.focus();
    }
});
button.addEventListener("click", (e) => {
    fileInput.focus();
    return false;
});
fileInput.addEventListener("change", (e) => {
    fileInfo.innerHTML = e.target.value;
});

/******* Product Page **********/
const productPageContainer = document.querySelector('.product_page');
const mainImg = document.querySelector('.selected_porduct_image img');
const displayImage = document.querySelector('.display_content img');
const carouselImages = document.querySelectorAll('.image_carousel li img');
const selectedProductImage = document.querySelector(
    '.selected_porduct_image img'
);
const priceEl = document.getElementById('price');
const colorElements = document.querySelectorAll('.color_option li img');
const colorPEl = document.getElementById('color');
const sizeSelectionEl = document.getElementById('size');
const buyBtn = document.getElementById('buy_btn');
let selectedColor;
const colorOptionList = document.querySelector('.color_option ul');
const carouselImgEl = document.querySelector('.image_carousel ul');
const productDB = {
    size: null,
    color: null,
    price: null,
    imgUrl: null,
};

// setting the coresponding price shirt size
const getPrice = () => {
    const priceEl = document.getElementById('price');

    const sizeVal = sizeSelectionEl.value.toUpperCase();
    priceEl.innerHTML = `<h4 id="price">${shirts[0].price[sizeVal]}&#x20AC;</h4>`;
    productDB.size = sizeVal;
    productDB.price = shirts[0].price[sizeVal];
};

function onLoad() {
    mainImg.src = shirts[0].imgUrl;
    shirts.forEach((shirt) => {
        const liEl = document.createElement('li');
        const imgEl = document.createElement('img');
        imgEl.src = shirt.imgUrl[0];
        imgEl.alt = shirt.color;
        imgEl.style.width = '50px';
        imgEl.style.height = '78px';
        colorOptionList.appendChild(liEl);
        liEl.appendChild(imgEl);
        liEl.addEventListener('click', (e) => {
            showProductImage(e);
            document.querySelector('.error_message > p').textContent = '';
        });
    });
    shirts[0].imgUrl.forEach((url) => {
        const liEl = document.createElement('li');
        const imgEl = document.createElement('img');
        imgEl.src = url;
        imgEl.classList.add('image_carousel');
        carouselImgEl.appendChild(liEl);
        liEl.appendChild(imgEl);
        imgEl.addEventListener('mouseover', (e) => {
            mainImg.src = e.currentTarget.src;
            mainImg.classList.add('selected_porduct_image');
        });
    });
}

function showProductImage(e) {
    const shirtNeeded = shirts.find((shirt) => shirt.color == e.target.alt);
    productDB.color = shirtNeeded.color;
    colorPEl.innerText = shirtNeeded.color;
    carouselImgEl.querySelectorAll('li img').forEach((img, i) => {
        img.src = shirtNeeded.imgUrl[i];
        mainImg.src = shirtNeeded.imgUrl[0];
        productDB.imgUrl = shirtNeeded.imgUrl[i];
    });
}

colorElements.forEach((colorImg) => {
    colorImg.addEventListener('click', () => {
        colorImg.classList.add('selected_color');
        selectedColor = colorImg.id;
    });
});

onLoad();
sizeSelectionEl.addEventListener('change', getPrice);

/* Adding eventlisteners keyup and blur to inputs */
inputs.forEach((input) => {
    input.addEventListener('blur', validate);
});

inputsOthers.forEach((input) => {
    input.addEventListener('change', validateOnChange)
});

countryEl.addEventListener('change', validate);
countryEl.addEventListener('change', addPrefix);

/* Adding submit functionality to the form */
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function getValidationMessage(inputIndex, blank = false) {
    const validationDiv = inputs[inputIndex].nextElementSibling;

    if (isSuccess) {
        validationDiv.querySelector('p').textContent = 'Valid field';
        validationDiv.style.display = 'block';
        validationDiv.querySelector('i').className = 'fa-solid fa-circle-check';
        validationDiv.classList.add('success');
        validationDiv.classList.remove('failed');
        isSuccess = false;
    } else if (blank) {
        validationDiv.style.display = 'none';
    } else {
        validationDiv.querySelector('p').textContent = `${
        messagesElements[inputs[inputIndex].id]}`;

        validationDiv.style.display = 'inline-block';
        validationDiv.querySelector('i').className =
            'fa-solid fa-circle-exclamation';
        validationDiv.classList.add('failed');
        validationDiv.classList.remove('success');
    }
}

let isSuccess = false;

function validate(e) {
    const {
        value
    } = e.target;
    const {
        username,
        email,
        password,
        firstName,
        lastName,
        address,
        postalCode,
        phoneNumber,
    } = expressions;

    switch (e.target.name) {
        case 'username':
            if (username.test(value)) {
                isSuccess = true;
                getValidationMessage(0);
                user.username = value;
                fields.username = true;
            } else if (value.length == 0) {
                getValidationMessage(0, true);
                user.username = '';
                fields.username = false;
            } else {
                isSuccess = false;
                getValidationMessage(0);
                user.username = '';
                fields.username = false;
            }
            break;
        case 'email':
            if (email.test(value)) {
                isSuccess = true;
                getValidationMessage(1);
                user.email = value;
                fields.email = true;
            } else if (value.length == 0) {
                isSuccess = false;
                getValidationMessage(1, true);
                user.email = '';
                fields.email = false;
            } else {
                isSuccess = false;
                getValidationMessage(1);
                user.email = '';
                fields.email = false;
            }
            break;
        case 'password':
            if (password.test(value)) {
                isSuccess = true;
                getValidationMessage(2);
                validatePassword();
                user.password = value;
                fields.password = true;
            } else if (value.length == 0) {
                isSuccess = false;
                getValidationMessage(2, true);
                user.password = '';
                fields.password = false;
            } else {
                isSuccess = false;
                getValidationMessage(2);
                user.password = '';
                fields.password = false;
            }
            break;
        case 'confirm-password':
            if (validatePassword()) {
                isSuccess = true;
                getValidationMessage(3);
                fields.password = true;
            } else if (value.length == 0) {
                isSuccess = false;
                getValidationMessage(3, true);
                fields.password = false;
            } else {
                isSuccess = false;
                getValidationMessage(3);
                fields.password = false;
            }
            break;
        case 'first-name':
            if (firstName.test(value)) {
                isSuccess = true;
                getValidationMessage(4);
                user["first-name"] = value;
                fields["first-name"] = true;
            } else if (value == '') {
                getValidationMessage(4, true);
                user["first-name"] = '';
                fields["first-name"] = false;
            } else {
                isSuccess = false;
                getValidationMessage(4);
                user["first-name"] = '';
                fields["first-name"] = false;
            }
            break;
        case 'last-name':
            if (lastName.test(value)) {
                isSuccess = true;
                getValidationMessage(5);
                user["last-name"] = value;
                fields["last-name"] = true;
            } else if (value == '') {
                getValidationMessage(5, true);
                user["last-name"] = '';
                fields["last-name"] = false;
            } else {
                isSuccess = false;
                getValidationMessage(5);
                user["last-name"] = '';
                fields["last-name"] = false;
            }
            break;
        case 'birthday':
            if (value) {
                user.birthday = value;
                fields.birthday = true;
            }
            break;
        case 'address1':
            if (address.test(value)) {
                isSuccess = true;
                getValidationMessage(7);
                user.address1 = value;
                fields.address1 = true;
            } else if (value == '') {
                getValidationMessage(7, true);
                user.address1 = '';
                fields.address1 = false;
            } else {
                isSuccess = false;
                getValidationMessage(7);
                user.address1 = '';
                fields.address1 = false;
            }
            break;
        case 'address2':
            if (address.test(value)) {
                isSuccess = true;
                getValidationMessage(8);
                user.address2 = value;
            } else if (value == '') {
                getValidationMessage(8, true);
                user.address2 = '';
            } else {
                isSuccess = false;
                getValidationMessage(8);
                user.address2 = '';
            }
            break;
        case 'postal-code':
            if (postalCode.test(value)) {
                isSuccess = true;
                getValidationMessage(9);
                user["postal-code"] = value;
                fields["postal-code"] = true;
            } else if (value == '') {
                getValidationMessage(9, true);
                user["postal-code"] = '';
                fields["postal-code"] = false;
            } else {
                isSuccess = false;
                getValidationMessage(9);
                user["postal-code"] = '';
                fields["postal-code"] = false;
            }
            break;
        case 'country':
            if (value) {
                user.country = value;
                fields.country = true;
                //select prefix default prefix value
                user.prefix = prefix[countries.indexOf(value)].pre;
                fields.prefix = true;
            }
            break;
        case 'prefix':
            if (value) {
                user.prefix = value;
                fields.prefix = true;
            }
            break;
        case 'phone':
            if (phoneNumber.test(value)) {
                isSuccess = true;
                getValidationMessage(10);
                user.phone = value;
                fields.phone = true;
            } else if (value == '') {
                getValidationMessage(10, true);
                user.phone = '';
                fields.phone = false;
            } else {
                isSuccess = false;
                getValidationMessage(10);
                user.phone = '';
                fields.phone = false;
            }
            break;
        case 'gift-title':
            user["gift-title"] = value;
            break;
        case 'gift-message':
            user["gift-message"] = value;
            break;
        case 'gift-image':
            user["gift-image"] = value;
            break;
    }
}

function validateOnChange(e) {
    const {
        value
    } = e.target;
    switch (e.target.name) {
        case 'reg-address':
            if (e.target.checked) {
                user["reg-address"] = true;
            } else if (!e.target.checked) {
                user["reg-address"] = false;
            }
            break;
        case 'shi_type':
            console.log('entro');
            for (let i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    user.shi_type = radioButtons[i].value;
                    fields.shi_type = true;
                    break;
                }
                user.shi_type = '';
                fields.shi_type = false;
            }
            break;
        case 'gif-option':
            if (e.target.checked) {
                user["gif-option"] = true;
            } else if (!e.target.checked) {
                user["gif-option"] = false;
            }
            break;
    }

}

function validatePassword() {
    const password1 = document.getElementById('password');
    const password2 = document.getElementById('confirm-password');

    if ((password1.value !== password2.value) || (password2.value.length == 0)) {
        return false;
    } else {
        return true;
    }
}

/******** Time functions ********/
const popup = document.getElementById("popup1");
const popupmessage = document.getElementById("message");
const timeOutLimit = 300000; //Five minutes
const timeRedirect = 5000; //Five seconds
const timeMinute = 60000; // 1 minute
let downCounter = 4;


function togglePopup() {

    setTimeout(togglePopupEnd, timeOutLimit);

    /********** Every Minute Message ***********/
    let minuteMessage = setInterval(function () {
        let text = `<img src="assets/icons/hourglass.png" alt="hourglass">Heads up! Only ${downCounter} minutes left to complete the purchase`
        popupmessage.innerHTML = text;
        document.getElementById("popup1").classList.toggle("active");
        downCounter--;
        setTimeout(() => {
            document.getElementById("popup1").classList.toggle("active");
        }, timeRedirect);
        if (downCounter == 0) {
            clearInterval(minuteMessage);
        }
    }, timeMinute)

}

/********** Control time out function ***********/
function togglePopupEnd() {
    let text = `<img src="assets/icons/reject.png" alt="hourglass">Sorry, the maximum purchase limit time has been exceeded. You will be redirected to the home page.`
    popupmessage.innerHTML = text;
    document.getElementById("popup1").classList.toggle("active");
    setTimeout(() => {
        document.getElementById("popup1").classList.toggle("active");
        resetAll(); //Restore purchase process
    }, timeRedirect);
}

/******** Multi Step Form Implementation *********/

let counter = 0; //Counter to activate and desactivate form steps
/* Function to launch the purchase process with step forms  */
buyButton.addEventListener('click', () => {

    productDB.size = sizeSelectionEl.value;
    productDB.price = (priceEl.textContent).substring(0, (priceEl.textContent).length - 1);

    if (productDB.color == undefined) {
        document.querySelector('.error_message > p').textContent = errorMessage;
    } else {
        productPageContainer.style.display = 'none';

        productPage.classList.add('inactive');
        stepPages[counter].classList.add('active');
        statusBar.classList.remove('inactive');
        buttonFooter.classList.remove('inactive');
        counter++;

        //Call popupmessage function
        togglePopup();
    }
});

/* Reset input fields of the current step */
clearButton.addEventListener('click', () => {
    const actualInputs = document.querySelectorAll('.step.active input');
    const paragraph = document.querySelectorAll('.step.active div>p');
    const icons = document.querySelectorAll('.step.active div>i');
    //Reset inputs
    actualInputs.forEach((input) => {
        document.getElementById(`${input.id}`).textContent = "";
        document.getElementById(`${input.id}`).checked = false; //in case of checkbox input
        if (document.getElementById(`${input.id}`).name == 'gif-option') {
            displayGift();
        }
        if (fieldsNotRequired.indexOf(input.id) == -1) {
            fields[input.name] = false;
        }
        user[input.name] = '';
    });
    //Reset CSS validations p
    paragraph.forEach((p) => {
        p.classList = '';
        p.textContent = '';
    });
    //Reset CSS validations i
    icons.forEach((i) => {
        i.classList = '';
    });

    //Reset required final message
    requiredMessage.classList.remove('required-messages');
    requiredMessage.textContent = '';
});

/* Manage steps in purchasing process */
nextButton.addEventListener('click', updateFormStep);

function updateFormStep() {

    if (counter < 3) {
        if (!requireFields()) {
            requiredMessage.classList.add('required-messages');
            requiredMessage.textContent = 'Warning! Please make sure all fields are filled in correctly';
        } else {
            requiredMessage.classList.remove('required-messages');
            requiredMessage.textContent = '';
            stepPages[counter].classList.add('active');
            stepPages[counter - 1].classList.remove('active');
            iconsStatusBar[counter].classList.add('active');
            counter++;
        }
    } else if (counter == 3) {
        if (!requireFields()) {
            requiredMessage.classList.add('required-messages');
            requiredMessage.textContent = 'Warning! Please make sure all fields are filled in correctly';
        } else {
            requiredMessage.classList.remove('required-messages');
            requiredMessage.textContent = '';
            stepPages[counter].classList.add('active');
            stepPages[counter - 1].classList.remove('active');
            buttonFooter.classList.add('inactive');
            iconsStatusBar[counter].classList.add('active');
            counter++;
            fillSummary();
        }
    } else if (counter == 4) {

        //Terms and conditios confirmation
        if (finalCheckbox.checked) {
            stepPages[counter - 1].classList.remove('active');
            stepPages[counter].classList.add('active');
            statusBar.classList.add('inactive');
            //Cancel setTimeout

        } else {
            requiredFinalMessage.classList.add('end-message');
            requiredFinalMessage.textContent = 'Warning! Please accept the Terms and Conditions to complete your order';
        }
    }
}

//Message Terms and conditions required
finalCheckbox.addEventListener('change', (event) => {

    if (event.currentTarget.checked) {
        requiredFinalMessage.classList.remove('end-message');
        requiredFinalMessage.textContent = '';
    }
})

/* Check required form field */
function requireFields() {
    let required = true;
    const actualInputs = document.querySelectorAll('.step.active input, .step.active select');
    actualInputs.forEach((ai) => {
        console.log(ai.name);
        console.log(fields[ai.name]);
        if (!((fields[ai.name]) === undefined)) {
            if (!(fields[ai.name])) {
                console.log(ai.name);
                console.log((fields[ai.name]));
                console.log('Entro dentro');
                required = false;
            }
        }
    });
    console.log(required);
    return required;
};

/* Fill Summary Page */
function fillSummary() {
    //username
    const usernameResume = document.querySelector('.correct-information>h2');
    usernameResume.textContent = `Hello ${user.username}!`

    //Shipping Data
    const shippingResume = document.querySelectorAll('.shipment-details .user-details> p');
    shippingResume[0].textContent = `${user["first-name"]} ${user["last-name"]}`;
    shippingResume[1].textContent = `${user.address1}`;
    shippingResume[2].textContent = `${user.country} ${user["postal-code"]}`;
    shippingResume[3].textContent = `(+${user.prefix}) ${user.phone}`;

    //Shipping Type
    const shippingType = document.querySelectorAll('.shipment-details .shipment-method>p');
    shippingType[0].textContent = namesShipement[valuesShipement.indexOf(user.shi_type)];
    shippingType[1].textContent = dateBetween(shippingTime[valuesShipement.indexOf(user.shi_type)]);

    //Total price
    const price1 = document.getElementById('pricep-summary');
    const price2 = document.getElementById('prices-summary');
    const price3 = document.getElementById('pricet-summary');
    const textPrice = document.getElementById('typeship-summary');
    price1.textContent = `${productDB.price}€`;
    price2.textContent = `${costShipement[valuesShipement.indexOf(user.shi_type)]}€`;
    let total = Number.parseFloat(productDB.price) + Number.parseFloat(costShipement[valuesShipement.indexOf(user.shi_type)]);
    price3.textContent = `${total}€`;
    textPrice.textContent = namesShipement[valuesShipement.indexOf(user.shi_type)].toUpperCase();

    //Image Product
    const productImage = document.querySelector('.card-product>img');
    productImage.src = productDB.imgUrl;
    //Summary Product
    const productName = document.querySelectorAll('.cart-product-details>p>span');
    productName[0].textContent = productDB.size.toUpperCase();
    productName[1].textContent = productDB.color;
    productName[2].textContent = `${total}€`;

}

/* Placer order buttons */
accept1.addEventListener('click', updateFormStep);
accept2.addEventListener('click', updateFormStep);

/* Thankyou Page Buttons */
backToHome.addEventListener('click', resetAll);
buttonThank.addEventListener('click', () => {
    location.href = 'https://pm1.narvii.com/6026/562c11dc8eddc2dd53ec6416c748fd2170ffcfec_hq.jpg';
});

/* Reset purchase process */
function resetAll() {
    location.reload();
};
