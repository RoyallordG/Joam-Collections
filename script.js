
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
let cartOverlay = document.querySelector('.cart-overlay');
let cart = document.querySelector('.cart');
let cartIcon = document.querySelector('.bx-cart-alt');
let cartClose = document.querySelector('#cart-close');
let buy = document.querySelectorAll('#buy');
let priced = document.querySelector('#priced');
buy.forEach((item)=>{
  item.addEventListener('click', (event)=>{
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  let arrivalPrice = event.target.parentElement.querySelector('#arrival-price');
  if(parseInt(arrivalPrice.textContent) === 7000){
    counter.textContent = 0
    total.textContent = 0
    count.textContent = parseInt(count.textContent) + 1  
    priced.textContent = parseInt(arrivalPrice.textContent) 
  }
  else if(parseInt(arrivalPrice.textContent) === 7500){
    counter.textContent = 0
    total.textContent = 0
    count.textContent = parseInt(count.textContent) + 1 
    priced.textContent = parseInt(arrivalPrice.textContent)
  }
  else if(parseInt(arrivalPrice.textContent) === 5000){
    counter.textContent = 0
    total.textContent = 0
    count.textContent = parseInt(count.textContent) + 1 
    priced.textContent = parseInt(arrivalPrice.textContent)
  }
  else if(parseInt(arrivalPrice.textContent) === 6000){
    counter.textContent = 0
    total.textContent = 0
    count.textContent = parseInt(count.textContent) + 1 
    priced.textContent = parseInt(arrivalPrice.textContent)
  }
  else if(parseInt(arrivalPrice.textContent) === 8500){
    counter.textContent = 0
    total.textContent = 0
    count.textContent = parseInt(count.textContent) + 1 
    priced.textContent = parseInt(arrivalPrice.textContent)

  }
  else{
    counter.textContent = 0
    priced.appendChild(document.createTextNode('Updating price'))
  }
})
})



function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


cartIcon.addEventListener('click', ()=>{
  cartOverlay.style.visibility = 'visible'
  cart.style.transform = 'translateX(0%)'
  
})
cartClose.addEventListener('click', ()=>{
  cartOverlay.style.visibility = 'hidden'
  cart.style.transform = 'translateX(100%)'
  
})



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


increase.onclick = () =>{
  counter.textContent = parseInt(counter.textContent) + 1
  total.textContent = parseInt(counter.textContent) * parseInt(priced.textContent)
  count.textContent = parseInt(count.textContent) + 1
}

decrease.onclick = () =>{
if(parseInt(counter.textContent) > 0){
    counter.textContent = parseInt(counter.textContent) - 1  
    total.textContent = parseInt(counter.textContent) * parseInt(priced.textContent)
    count.textContent = parseInt(count.textContent) - 1  
}
}



