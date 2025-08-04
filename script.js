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