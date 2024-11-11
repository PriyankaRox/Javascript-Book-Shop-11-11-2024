let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach((book, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <h3>${book.title}</h3>
      <p>Price: $${book.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(cartItem);
  });
  displaySubtotal();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function displaySubtotal() {
  console.log("Cart contents:", cart);

  const subtotal = cart.reduce((total, book) => total + book.price, 0);
  console.log("Calculated subtotal:", subtotal);

  const subtotalElement = document.getElementById("subtotal");
  if (subtotalElement) {
    subtotalElement.innerText = `Subtotal: $${subtotal}`;
  } else {
    console.error("Subtotal element not found in HTML.");
  }
}

displayCart();
