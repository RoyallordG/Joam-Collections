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

 window.onscroll = () => {
    categoryElement.classList.remove('active');
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
 
 
 
 window.onclick = function(event) {
   var modal = document.getElementById("myModal");
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
 
 
 

