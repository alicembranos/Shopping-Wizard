/****************Global Variables*****************/
const form = document.getElementById('form');
const inputs = document.querySelectorAll(
  "#form input:not([type='checkbox'], [type='radio'])"
);
const countryEl = document.getElementById('country');
// const inputsRequired = document.querySelectorAll("#form input:not([type='checkbox'], [type='radio'])");
const nextButton = document.getElementById('next-step');
const clearButton = document.getElementById('clear-form');
const steps = Array.from(document.querySelectorAll('#form .step'));
const messageRequired = 'is required';
const messagesElements = {
  username: '<p></p>',
  email: '<p></p>',
  password: '<p></p>',
  password1: '<p></p>',
  firstName: '<p></p>',
  lastName: '<p></p>',
  birthday: '<p></p>',
  addres1: '<p></p>',
  address2: '<p></p>',
  postalCode: '<p></p>',
  phone: '<p></p>',
};

/*Array for storing multiple data users*/
let users = [];
/*Data user object*/
let user = {
  username: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  birthday: '',
  address1: '',
  address2: '',
  postalCode: 0,
  country: '',
  phone: '',
  regularAddress: false,
  shippingType: '',
  isGift: false,
  giftContent: {
    title: '',
    message: '',
  }, //gift tittle and gift message
};

/*Arrays for form options*/
const shippingTypes = [
  'Free shipment (72H)',
  'Extra shipping (48h) ( +5 € )',
  'Premium (24h) ( + 10€ )',
];
const shippingTime = [72, 48, 24];
const countries = ['Andorra', 'Spain', 'France', 'Germany', 'Greece', 'Isarel'];
const prefix = ['376', '34', '33', '49', '30', '972'];

/*Regular Expressions*/
const expressions = {
  username: /^[a-zA-Z0-9.-_]{5,20}$/, //Words, numbers, hyphen and underscore, no spaces, min5, max20
  email: /^\w+([\.-\_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //mail definition max50
  password:
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, //One number, one UPC, one LOC, one special character, min8, max20
  firstName: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, //letters, accent  marks letters, spaces, max20
  lastName: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, //letters, accent  marks letters, spaces, max20
  address: /^[0-9a-zA-Z\s\.,-º]{1,50}$/, //letters, numbers, dot, dash, comma, spaces, max50
  postalCode: /^[0-9]{1,5}$/, //numbers, max5
  phoneNumber: /^[0-9]{1,9}$/, // numbers, max9
};

/* Control time out function */
const timeOutLimit = 300000; //Five minutes
const timeRedirect = 5000; //Five seconds
let timeOut = setTimeout(() => {
  setTimeout(() => {
    //Message displayed indicating maximum time allowed exceeded
    //Back to product page
  }, timeRedirect);
}, timeOutLimit);

/* Every Minute Message */
const timeMinute = 60000; // 1 minute
let intervalMinute = setInterval(() => {
  //Message indicating
  setTimeout(() => {
    //Message dissapear
  }, timeRedirect);
}, timeMinute);

/********** Calculate date shipment ***********/
function dateBetween(hours) {
  const date1 = addHours(hours);
  const date2 = addHours(hours + 24);
  return `${formatDate(date1)} and ${formatDate(date2)}`;
}

/* Fucntion to adding hours */
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

/* Add prefix phone when selecting country */

/* Adding eventlisteners keyup and blur to inputs */
inputs.forEach((input) => {
  //   input.addEventListener('keyup', validate);
  input.addEventListener('blur', validate);
  countryEl.addEventListener('change', validate);
});

/* Adding submit functionality to the form */
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

function validate(e) {
  const { value } = e.target;
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
  if (!countryEl.value) {
  }
  switch (e.target.name) {
    case 'username':
      if (username.test(value)) {
      }
      break;
    case 'email':
      if (email.test(value)) {
      }
      break;
    case 'password':
      if (password.test(value)) {
      }
      validatePassword();
      break;
    case 'confirm-password':
      validatePassword();
      break;
    case 'first-name':
      if (firstName.test(value)) {
      }
      break;
    case 'last-name':
      if (lastName.test(value)) {
      }
      break;
    case 'address1':
      if (address.test(value)) {
      }
      break;
    case 'address2':
      if (address.test(value)) {
      }
      break;
    case 'postal-code':
      if (postalCode.test(value)) {
      }
      break;
    case 'phone':
      if (phoneNumber.test(value)) {
      }
      break;
  }
}

function validatePassword() {
  const password1 = document.getElementById('password');
  const password2 = document.getElementById('confirm-password');

  if (password1.value === password2.value) {
    console.log('match');
  } else {
    console.log('no match');
  }
}
