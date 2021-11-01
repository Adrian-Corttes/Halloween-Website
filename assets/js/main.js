/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
   navToggle.addEventListener('click', ()=>{
      navMenu.classList.add('show-menu');
   })
}

/*===== MENU HIDE =====*/
/* Validate if constant exists */
if(navClose){
   navClose.addEventListener('click', ()=>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navList = document.querySelectorAll('.nav__link');

function linkAction(){
   const navMenu = document.getElementById('nav-menu');
   // Cuando hacemos clic en cada nav__link, eliminamos la clase show-menu
   navMenu.classList.remove('show-menu');
}
navList.forEach(n => n.addEventListener('click', linkAction));

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
   spaceBetween: 30,
   loop: 'true',
   
   pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
})
