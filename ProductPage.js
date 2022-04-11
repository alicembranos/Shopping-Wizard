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
  price: null,
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

// setting the coresponding price shirt size
const getPrice = () => {
  const sizeVal = sizeSelectionEl.value;
  const selectionPrice = price[sizeVal];
  priceEl.innerText = selectionPrice;
};
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

colorElements.forEach((colorImg) => {
  colorImg.addEventListener('click', () => {
    colorImg.classList.add('selected_color');
    selectedColor = colorImg.id;
  });
});

buyBtn.addEventListener('click', () => {
  productDB.size = sizeSelectionEl.value;
  productDB.color = selectedColor;
  productDB.price = priceEl.textContent;
  if (productDB.color == undefined) {
    document.querySelector('.error_message h4').textContent = errorMessage;
  } else {
    productPageContainer.style.display = 'none';
  }
  console.log(productDB);
});

sizeSelectionEl.addEventListener('change', getPrice);
