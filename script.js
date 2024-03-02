
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

