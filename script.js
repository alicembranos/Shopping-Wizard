// Product page
const productPageContainer = document.querySelector('.product_page');
const displayImage = document.querySelector('.display_content img');
const carouselImages = document.querySelectorAll('.image_carousel li img');
const selectedProductImage = document.querySelector(
  '.selected_porduct_image img'
);
const priceEl = document.getElementById('price');
const colorElements = document.querySelectorAll('.color_option li img');
const sizeSelectionEl = document.getElementById('size');
const buyBtn = document.getElementById('buy_btn');
let selectedColor;
const productDB = {
  size: null,
  color: null,
};
const price = {
  XS: 10.99,
  S: 12.99,
  M: 14.99,
  L: 15.99,
  XL: 17.99,
};

const { size, color } = productDB;
const errorMessage =
  'You must pick a color for your shirt before continuing with your purchase';
// carousle display image functionallity
carouselImages.forEach((img) => {
  img.addEventListener('mouseover', () => {
    displayImage.hidden = false;
    displayImage.src = img.src;
  });
  img.addEventListener('mouseout', () => {
    displayImage.hidden = true;
  });
  img.addEventListener('click', () => {
    selectedProductImage.src = img.src;
  });
});

// Color and Size Selection - DB is represented by an object
let isColorSelected = false;

colorElements.forEach((colorImg) => {
  colorImg.addEventListener('click', () => {
    colorImg.classList.add('selected_color');
    selectedColor = colorImg.id;
  });
});

buyBtn.addEventListener('click', () => {
  if (color == undefined) {
    document.querySelector('.error_message h4').textContent = errorMessage;
  }
  productDB.size = sizeSelectionEl.value;
  productDB.color = selectedColor;
  productPageContainer.hidden;
  console.log(productDB);
});
const getPrice = () => {
  const sizeVal = sizeSelectionEl.value;
  const selectionPrice = price[sizeVal];
  priceEl.innerText = selectionPrice;
};

sizeSelectionEl.addEventListener('change', getPrice);
