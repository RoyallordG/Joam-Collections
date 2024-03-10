let menu = document.querySelector('#menu-icon');
let closeit = document.querySelector('#close-icon')
let overlay = document.querySelector('.overlay');
let categoryElement = document.querySelector('.category-list');
let navElement = document.querySelector('#nav-element');


closeit.addEventListener('click', function(){
  overlay.classList.toggle('active');
   categoryElement.classList.toggle('active');
})
menu.onclick = () => {
   overlay.classList.toggle('active');
   categoryElement.classList.toggle('active');
  
}
navElement.onclick = () => {
   categoryElement.classList.remove('active');
   overlay.classList.remove('active');
 }

//  closeit.onclick = () => {
//    overlay.classList.remove('active');
//    categoryElement.classList.remove('active');
//  }
window.addEventListener('scroll', function(){
  overlay.classList.remove('active');
   categoryElement.classList.remove('active');
   console.log("please work")
})

 window.onscroll = () => {
    categoryElement.classList.toggle('active');
    overlay.classList.toggle('active');
    console.log('hello')
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
 
 
