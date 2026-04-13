// Get basket
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save basket
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item
function addToCart(product) {
  let cart = getCart();

  // Check if item already exists
  let existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  saveCart(cart);
  alert(product.name + " added to basket!");
}

// Remove item
function removeFromCart(name) {
  let cart = getCart();
  cart = cart.filter(item => item.name !== name);
  saveCart(cart);
  location.reload(); // refresh page
}
