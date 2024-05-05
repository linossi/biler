let cart = [];

function addToCart(product, price) {
    cart.push({ product: product, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    let total = 0;
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });
    totalElement.textContent = total;
}
