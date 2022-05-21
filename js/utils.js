//Data Product
const data = [{
    id: 1,
    value: "white-chocolate",
    type: "white",
    name: "Le chocolate blanc",
    price: "15,00",
    description: "Bar of homemade white chocolate infused with Madagascan vanilla and topped off with a pinch of Maldon sea salt.",
    info: {
      info1: "This bar of homemade white chocolate is an ode to sweetness! Very low sugar white chocolate containing 40% cocoa butter, 25% sugar and 35% milk powder.. It is infused with Madagascan vanilla and topped off with a pinch of sea salt.",
      info2: "It is infused with Madagascan vanilla and topped off with a pinch of sea salt.",
      info3: "Ingredients: Cocoa butter, cream milk powder, sugar, fresh vanilla from Madagascar, salt, sunflower lecithin.",
    }, 
    images: {
      image1: "./assets/images/white-chocolate/chocolate-white-1.jpg",
      image2: "./assets/images/white-chocolate/chocolate-white-2.jpg",
      image3: "./assets/images/white-chocolate/chocolate-white-3.jpg",
    },
    finalimage: "./assets/images/white-chocolate/chocolate_white_final.jpg",
  },
  {
    id: 2,
    value: "milk-chocolate",
    type: "milk",
    name: "Le chocolate au lait",
    price: "20,00",
    description: "Subtly caramelised homemade milk chocolate.",
    info: {
      info1: "Type of bean: Amelonado 45% cocoa. The darkest of milk chocolates with a delightful caramel and honey finish.",
      info2: "For all food lovers.",
      info3: "Ingredients: Roasted cocoa beans, sugar, cocoa butter, cream milk powder, lactose, fresh vanilla from Madagascar, sunflower lecithin.",
    },
    images: {
      image1: "./assets/images/milk-chocolate/chocolate_milk-1.jpg",
      image2: "./assets/images/milk-chocolate/chocolate_milk-2.jpg",
      image3: "./assets/images/milk-chocolate/chocolate_milk-3.jpg",
    },
    finalimage: "./assets/images/milk-chocolate/chocolate_milk_final.jpg",
  },
  {
    id: 3,
    value: "dark-chocolate",
    type: "dark",
    name: "Le chocolate noir",
    price: "25,00",
    description: "Bar for dark chocolate connoisseurs.",
    info: {
      info1: "A subtle blend of beans from Cuba, Indonesia and Peru. Types of bean: Trinitario and Gran Nativo Blanco  85% cocoa.",
      info2: "Bar with a wonderful depth of flavour for chocolate connoisseurs seeking new discoveries and a memorable taste experience.",
      info3: "Ingredients: Roasted cocoa beans, sugar, cocoa butter, sunflower lecithin.",
    },
    images: {
      image1: "./assets/images/dark-chocolate/chocolate_dark-1.jpg",
      image2: "./assets/images/dark-chocolate/chocolate_dark-2.jpg",
      image3: "./assets/images/dark-chocolate/chocolate_dark-3.jpg",
    },
    finalimage: "./assets/images/dark-chocolate/chocolate_dark_final.jpg",
  },
];

//Regular Expressions
const expressions = {
  username: /^[a-zA-Z0-9.-_]{5,20}$/, //Words, numbers, hyphen and underscore, no spaces, min5, max20
  email: /^\w+([\.-\_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //mail definition max50
  password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, //One number, one UPC, one LOC, one special character, min8, max20
  "first-name": /^[a-zA-Z0-9\s.,'-º]{0,20}$/, //letters, accent  marks letters, spaces, max20
  "last-name": /^[a-zA-Z0-9\s.,'-º]{0,20}$/, //letters, accent  marks letters, spaces, max20
  address1: /^[0-9a-zA-Z\s\.,-º]{0,50}$/, //letters, numbers, dot, dash, comma, spaces, max50
  address2: /^[0-9a-zA-Z\s\.,-º]{0,50}$/, //letters, numbers, dot, dash, comma, spaces, max50
  "postal-code": /^[0-9]{1,5}$/, //numbers, max5
  phone: /^[0-9]{1,9}$/, // numbers, max9
};

//Countries and prefix
const countries = [
  "Select Country",
  "Andorra",
  "Spain",
  "France",
  "Germany",
  "Greece",
  "Isarel",
];
const prefix = [{
    co: "Select Prefix",
    pre: "",
  },
  {
    co: "AND",
    pre: 376,
  },
  {
    co: "SPA",
    pre: 34,
  },
  {
    co: "FRA",
    pre: 33,
  },
  {
    co: "GER",
    pre: 49,
  },
  {
    co: "GRE",
    pre: 30,
  },
  {
    co: "ISR",
    pre: 972,
  },
];

//Message Error Input Validation
const messagesElements = {
  username: "Username must contain at min 5 characters and max of 20",
  email: "Please enter a valid email addresss",
  password: "Password must contain at least: 8 characters, lowercase, uppercase, special character and numbers",
  "confirm-password": "Passwords do not match",
  "first-name": "Name cannot contain special characters and can have a maximum of 20 ",
  "last-name": "Name cannot contain special characters and can have a maximum of 20 ",
  address1: "You must enter a valid Address - max 50 characters", // not sure if we need it
  address2: "You must enter a valid Address - max 50 characters", // not sure if we need it
  "postal-code": "PC must contain only numbers and max of 5 characters",
  phone: "Phone must contain only numbers and max of 9 characters",
};

/* Required fields */
const requiredFields = [
  "username",
  "email",
  "password",
  "confirm-password",
  "first-name",
  "last-name",
  "birthday",
  "address1",
  "postal-code",
  "country",
  "prefix",
  "phone",
  "shi-type",
];

/*Data user object*/
let user = {
  product:"",
  username: "",
  email: "",
  password: "",
  "first-name": "",
  "last-name": "",
  birthday: "",
  address1: "",
  address2: "",
  "postal-code": 0,
  country: "",
  prefix: "",
  phone: "",
  "reg-address": false,
  "shi-type": "",
  "gif-option": false,
  "gift-title": "",
  "gift-message": "",
  "gift-image": "",
};

const capitalizeString = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export {
  messagesElements,
  expressions,
  requiredFields,
  user,
  data,
  capitalizeString
};