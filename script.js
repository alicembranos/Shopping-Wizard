// Global Variables
const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

//Array for storing multiple data users
let users = []
//Data user object
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
    giftContent: [] //gift tittle and gift message
};
//Arrays for form options
const shippingTypes = ['Free shipment (72H)', 'Extra shipping (48h) ( +5 € )', 'Premium (24h) ( + 10€ )' ];
const countries = ['Andorra', 'Spain', 'France', 'Germany', 'Greece', 'Isarel'];
const prefix = ['376', '34', '33', '49', '30', '972'];

const expressions = {
    username: /^[a-zA-Z0-9.-_]{5,20}$/, //Words, numbers, hyphen and underscore
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    firstName: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    address1: /^[0-9a-zA-Z\s\.,-º]{1,50}$/,
    address2: /^[0-9a-zA-Z\s\.,-º]{1,50}$/,
    postalCode: /^[0-9]{1,5}$/,
    phoneNumber: /^[0-9]{1,9}$/
};

