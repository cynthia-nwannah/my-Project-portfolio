const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const back = document.querySelector(".nav-img");
const menu = document.querySelector('.navbar-image')
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    // back.style.cssText = "background-image: url('asset/image_geometry_menu_1.png');";
    // menu.setAttribute('style', 'display: none;');
    menu.classList.toggle('active');
   back.classList.toggle('active');
    // back.classList.toggle('active');
    // menu.classList.remove('active');
})

document.querySelectorAll('.nav-link').forEach (n => n.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    menu.classList.remove('active');
    back.classList.remove('active');
    
}))