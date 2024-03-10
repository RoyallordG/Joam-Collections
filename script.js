
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
let header = document.querySelector('header')
let closeit = document.querySelector('#close-icon')
let overlay = document.querySelector('.overlay');
let navElement = document.querySelector('#nav-element');
let categoryElement = document.querySelector('.category-list');




menu.onclick = () => {
   navbar.classList.toggle('active')
   overlay.classList.toggle('active');
   categoryElement.classList.toggle('active');
}

navElement.onclick = () => {
  overlay.classList.remove('active')
  navbar.classList.remove('active');
  categoryElement.classList.remove('active');
}

closeit.onclick = () => {
  navbar.classList.remove('active')
  overlay.classList.remove('active');
  categoryElement.classList.remove('active');
}

window.onscroll = () => {
   menu.classList.remove('bx-x');
   navbar.classList.remove('active')
   overlay.classList.remove('active');
}
window.addEventListener('scroll', () => {
   header.classList.toggle('shadow', window.scrollY > 0);
})



function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function increaseQuantity() {
  var quantityInput = document.getElementById("quantity");
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
  var quantityInput = document.getElementById("quantity");
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 0) {
    quantityInput.value = currentValue - 1;
  }
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var pricePerUnit = 10; // Initial price per unit

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  updateTotal();
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function increaseQuantity() {
  var quantityInput = document.getElementById("quantity");
  quantityInput.value = parseInt(quantityInput.value) + 1;
  updateTotal();
}

function decreaseQuantity() {
  var quantityInput = document.getElementById("quantity");
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
    updateTotal();
  }
}

function updateTotal() {
  var quantityInput = document.getElementById("quantity");
  var quantity = parseInt(quantityInput.value);
  var total = quantity * pricePerUnit;
  var totalSpan = document.getElementById("total");
  totalSpan.textContent = "$" + total;
}

// Update total whenever the quantity input changes
document.getElementById("quantity").addEventListener("input", updateTotal);

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

