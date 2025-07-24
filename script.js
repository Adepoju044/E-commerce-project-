// Mobile Menu Toggle
const menuButton = document.getElementById('mobile-menu-button');
const closeButton = document.getElementById('close-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('mobile-menu-overlay');

// Open menu when hamburger button is clicked
menuButton.addEventListener('click', function() {
  mobileMenu.classList.remove('hidden', '-translate-x-full');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close menu when X button is clicked
closeButton.addEventListener('click', function() {
  mobileMenu.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto'; // Allow scrolling again
});

// Close menu when clicking outside
overlay.addEventListener('click', function() {
  mobileMenu.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
});
// Cart Toggle
const cartButton = document.getElementById('cart-button');
const cartDropdown = document.getElementById('cart-dropdown');

// Show/hide cart when cart icon is clicked
cartButton.addEventListener('click', function(e) {
  e.stopPropagation(); // Prevent this click from triggering the document click below
  cartDropdown.classList.toggle('hidden');
});

// Close cart when clicking anywhere else
document.addEventListener('click', function() {
  cartDropdown.classList.add('hidden');
});// Product Image Gallery
const mainImage = document.getElementById('main-image-desktop');
const thumbnails = document.querySelectorAll('.thumbnail img');

// Array of all product images
const productImages = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg'
];

// Change image when thumbnail is clicked
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', function() {
    // Update main image
    mainImage.src = productImages[index];
    
    // Update active thumbnail style
    thumbnails.forEach(thumb => {
      thumb.parentElement.classList.remove('border-orange-500', 'opacity-50');
    });
    thumbnail.parentElement.classList.add('border-orange-500', 'opacity-50');
  })
  // Quantity Selector
const minusBtn = document.querySelector('.decrease');
const plusBtn = document.querySelector('.increase');
const quantityDisplay = document.querySelector('.quantity');
let quantity = 0;

// Decrease quantity
minusBtn.addEventListener('click', function() {
  if (quantity > 0) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

// Increase quantity
plusBtn.addEventListener('click', function() {
  quantity++;
  quantityDisplay.textContent = quantity;
});;
});// Add to Cart
// ===== ADD TO CART - FIXED VERSION =====
const addToCartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartContent = document.getElementById('cart-content');
const quantityDisplay = document.querySelector('.quantity');

addToCartBtn.addEventListener('click', function() {
  const quantity = parseInt(quantityDisplay.textContent);
  
  if (quantity > 0) {
    // 1. Update cart count badge
    cartCount.textContent = quantity;
    cartCount.classList.remove('hidden');
    
    // 2. Create cart item HTML
    const cartItemHTML = `
      <div class="flex items-center justify-between p-4">
        <img src="./images/image-product-1-thumbnail.jpg" alt="Product" class="w-12 h-12 rounded">
        <div class="ml-4">
          <p class="text-gray-600">Fall Limited Edition Sneakers</p>
          <p class="text-gray-600">
            $125.00 × ${quantity} 
            <span class="font-bold text-black">$${(125 * quantity).toFixed(2)}</span>
          </p>
        </div>
        <button class="delete-item text-gray-400 hover:text-orange-500">
          <img src="./images/icon-delete.svg" alt="Delete">
        </button>
      </div>
      <button class="checkout-btn w-full mt-4 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-400">
        Checkout
      </button>
    `;
    
    // 3. Update cart content
    cartContent.innerHTML = cartItemHTML;
    
    // 4. Add delete functionality
    const deleteBtn = document.querySelector('.delete-item');
    deleteBtn.addEventListener('click', function() {
      cartContent.innerHTML = '<p class="text-center text-gray-500 font-bold py-10">Your cart is empty</p>';
      cartCount.classList.add('hidden');
      quantityDisplay.textContent = '0'; // Reset quantity display
    });
  } else {
    alert("Please select at least 1 item"); // Simple validation
  }
});