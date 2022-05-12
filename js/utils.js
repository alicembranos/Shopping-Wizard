//Data Product
const data = [{
        id: 1,
        value: "white-chocolate",
        name: "Le chocolate blanc",
        price: "15,00",
        images: {
            image1: "./assets/images/white-chocolate/chocolate-white-1.jpg",
            image2: "./assets/images/white-chocolate/chocolate-white-2.jpg",
            image3: "./assets/images/white-chocolate/chocolate-white-3.jpg",
            finalImage: "./assets/images/white-chocolate/chocolate_white_final.jpg",
        },
    },
    {
        id: 2,
        value: "milk-chocolate",
        name: "Le chocolate au lait",
        price: "20,00",
        images: {
            image1: "./assets/images/white-chocolate/chocolate_milk-1.jpg",
            image2: "./assets/images/white-chocolate/chocolate_milk-2.jpg",
            image3: "./assets/images/white-chocolate/chocolate_milk-3.jpg",
            finalImage: "./assets/images/white-chocolate/chocolate_milk_final.jpg",
        }
    },
    {
        id: 3,
        value: "dark-chocolate",
        name: "Le chocolate noir",
        price: "25,00",
        images: {
            image1: "./assets/images/white-chocolate/chocolate_dark-1.jpg",
            image2: "./assets/images/white-chocolate/chocolate_dark-2.jpg",
            image3: "./assets/images/white-chocolate/chocolate_dark-3.jpg",
            finalImage: "./assets/images/white-chocolate/chocolate_dark_final.jpg",
        }
    },
]

//Regular Expressions
const expressions = {
    username: /^[a-zA-Z0-9.-_]{5,20}$/, //Words, numbers, hyphen and underscore, no spaces, min5, max20
    email: /^\w+([\.-\_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //mail definition max50
    password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, //One number, one UPC, one LOC, one special character, min8, max20
    firstName: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, //letters, accent  marks letters, spaces, max20
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, //letters, accent  marks letters, spaces, max20
    address: /^[0-9a-zA-Z\s\.,-º]{1,50}$/, //letters, numbers, dot, dash, comma, spaces, max50
    postalCode: /^[0-9]{1,5}$/, //numbers, max5
    phoneNumber: /^[0-9]{1,9}$/, // numbers, max9
};

//Countries and prefix
const countries = ['Select Country', 'Andorra', 'Spain', 'France', 'Germany', 'Greece', 'Isarel'];
const prefix = [{
        co: 'Select Prefix',
        pre: ''
    },
    {
        co: 'AND',
        pre: 376
    },
    {
        co: 'SPA',
        pre: 34
    },
    {
        co: 'FRA',
        pre: 33
    },
    {
        co: 'GER',
        pre: 49
    },
    {
        co: 'GRE',
        pre: 30
    },
    {
        co: 'ISR',
        pre: 972
    },
];

//Message Error Input Validation
const messagesElements = {
    'username': 'Username must contain at min 5 characters and max of 20',
    'email': 'Please enter a valid email addresss',
    'password': 'Password must contain at least: 8 characters, lowercase, uppercase, special character and numbers',
    'confirm-password': 'Passwords do not match',
    'first-name': 'Name cannot contain special characters',
    'last-name': 'Last name cannot contain special character',
    'address1': 'You must enter a valid Address - max 50 characters', // not sure if we need it
    'address2': 'You must enter a valid Address - max 50 characters', // not sure if we need it
    'postal-code': 'PC must contain only numbers and max of 5 characters',
    'phone': 'Phone must contain only numbers and max of 9 characters',
    'emptyField': 'You must not leave empty fields',
};