let quantity = 0;
function updateQuantity(amount) {
  quantity = Math.max(0, quantity + amount); // Prevents negative quantity
  document.getElementById("qty").textContent = quantity; // Updates the quantity display
}

/**
 * Adds the selected quantity of items to the cart.
 * If quantity is 0, the function exits early.
 *  it displays the cart count and populates the cart content.
 *  it displays the cart count and populates the cart content.
 */
function addToCart() {
  if (quantity === 0) return; // Do nothing if no items are selected

  // Show the cart count badge
  document.getElementById("cart-count").style.display = "block";

  // Update the cart count badge with the selected quantity
  document.getElementById("cart-count").textContent = quantity;

  // Populate the cart content with item details and a checkout button
  document.getElementById("cart-content").innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <img src="/mnt/data/active-states-basket-empty.jpg" width="50" /> <!-- Product thumbnail -->
      <div>
        Fall Limited Edition Sneakers<br> <!-- Product name -->
        $125.00 x ${quantity} = <strong>$${
    125 * quantity
  }.00</strong> <!-- Price calculation -->
      </div>
    </div>
    <button style="width: 100%; margin-top: 15px; background: orange; border: none; color: white; padding: 10px; border-radius: 8px; cursor: pointer;">
      Checkout
    </button> <!-- Checkout button -->
  `;
}

/**
 * for the visibility of the cart dropdown.
 * Adds or removes the 'active' class to show/hide the cart.
 */
function toggleCart() {
  document.getElementById("cart-dropdown").classList.toggle("active"); // Toggle cart visibility
}

/**
 * Changes the main product image when a thumbnail is clicked.
 * Also highlights the selected thumbnail.
 */
function changeImage(el) {
  document.getElementById("main-img").src = el.src; // Set main image to clicked thumbnail

  // Remove 'selected' class from all thumbnails
  document
    .querySelectorAll(".thumbnails img")
    .forEach((img) => img.classList.remove("selected"));

  // Add 'selected' class to the clicked thumbnail
  el.classList.add("selected");
}
