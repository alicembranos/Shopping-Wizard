let productQuantity = document.getElementById("productQuantity").textContent;

const addQuantity = () => {
    productQuantity = Number(productQuantity)++;
};

const reduceQuantity = () => {
    if (productQuantity > 1) {
        productQuantity = Number(productQuantity)--;
    }
}

const updatePrice = (num) => {
    const priceElement = document.querySelector["data-price"];
    priceElement.dataset.price = Number(priceElement.dataset.price) * num;
}

export {
    addQuantity,
    reduceQuantity
};