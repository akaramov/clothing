
let cart = [];
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartSidebar = document.getElementById("cartSidebar");
const cartCount = document.querySelector(".cart");

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} ($${item.price})</span>
      <button onclick="removeItem(${index})">x</button>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.innerHTML = `CART (${cart.length})`;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function openCart() {
  cartSidebar.classList.add("open");
}

function closeCart() {
  cartSidebar.classList.remove("open");
}

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);
    const img = card.dataset.img;

    cart.push({ name, price, img });
    updateCart();
    openCart();
  });
});

cartCount.addEventListener("click", openCart);
