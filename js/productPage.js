import {
    data,
    capitalizeString
} from "./utils.js";

const productQuantity = document.getElementById("productQuantity");

//Update product details in product page
const updateProduct = (e) => {

    //Remove attribute select to set it in the selected product
    const selectedProduct = document.querySelector("[data-select]");
    if (selectedProduct) selectedProduct.removeAttribute("data-select");

    e.target.dataset.select = "";
    const id = e.target.dataset.product;
    const productDetails = data.find(product => {
        return product.id == id
    });
    const images = document.querySelectorAll(".carousel__img");
    const nameProduct = document.getElementById("nameProduct");
    const priceProduct = document.querySelector("[data-price]");
    const descriptionProduct = document.getElementById("descriptionProduct");
    const typeProduct = document.getElementById("typeProduct");
    const productInfo = document.querySelectorAll(".product-info__p");
    //Update images
    Array.from(images).map((image, index) => {
        image.src = productDetails.images[`image${index+1}`];
    });
    //Update name 
    nameProduct.textContent = productDetails.name;
    //Update price
    priceProduct.dataset.price = productDetails.price;
    priceProduct.childNodes[2].textContent = (productDetails.price).toString();
    //Update description
    descriptionProduct.textContent = productDetails.description;
    //Update type
    typeProduct.childNodes[2].textContent = capitalizeString(productDetails.type);
    //Update information
    Array.from(productInfo).map((info, index) => {
        info.textContent = productDetails.info[`info${index+1}`];
    });

};

const addQuantity = () => {
    productQuantity.textContent = Number(productQuantity.textContent) + 1;
    updatePrice(productQuantity.textContent);
};

const reduceQuantity = () => {
    if (productQuantity.textContent > 1) {
        productQuantity.textContent = Number(productQuantity.textContent) - 1;
        updatePrice(productQuantity.textContent);
    }
}

const updatePrice = (num) => {
    const priceElement = document.querySelector("[data-price]");
    const price = parseFloat((priceElement.dataset.price).replace(/,/g, ".")) * num;
    //Get the text price without span element
    priceElement.childNodes[2].textContent = price.toString().concat(",00");

}

export {
    addQuantity,
    reduceQuantity,
    updateProduct
};