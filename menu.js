function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('closed');
}

function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.remove('closed');
}
renderProducts();

// Add event listener to cart toggle button
document.getElementById('cartToggleBtn').addEventListener('click', toggleCart);