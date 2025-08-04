const images = [
  "images/sneaker1.jpg",
  "images/sneaker2.jpg",
  "images/sneaker3.jpg",
  "images/sneaker4.jpg"
];

let currentIndex = 0;

function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = thumbnail.src;
  currentIndex = images.indexOf(thumbnail.src);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
}
let currentQuantity = 0;
let cartTotal = 0;

const quantityInput = document.getElementById("quantity");
const cartCountDisplay = document.getElementById("cart-count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const addToCartBtn = document.getElementById("add-to-cart");

// Increase quantity (max 10)
increaseBtn.addEventListener("click", () => {
  if (currentQuantity < 10) {
    currentQuantity++;
    quantityInput.value = currentQuantity;
  }
});

// Decrease quantity (min 0)
decreaseBtn.addEventListener("click", () => {
  if (currentQuantity > 0) {
    currentQuantity--;
    quantityInput.value = currentQuantity;
  }
});

// Add to cart
addToCartBtn.addEventListener("click", () => {
  if (currentQuantity > 0) {
    cartTotal += currentQuantity;
    cartCountDisplay.textContent = cartTotal;
    currentQuantity = 0;
    quantityInput.value = currentQuantity;
  }
});
const cartIcon = document.getElementById("cart-icon");

cartIcon.addEventListener("click", () => {
  const cartCount = document.getElementById("cart-count");
  cartCount.style.display = cartTotal > 0 ? "inline" : "none";
});