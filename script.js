const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const back = document.querySelector(".nav-img");
const menu = document.querySelector('.navbar-image')
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    menu.classList.toggle('active');
   back.classList.toggle('active');
 
})

