const hamburger = document.querySelector('.hamburger');

const navMenu = document.querySelector('.nav-menu');

const back = document.querySelector('.nav-img');

const menu = document.querySelector('.navbar-image');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  menu.classList.toggle('active');
  back.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  menu.classList.remove('active');
  back.classList.remove('active');
}));