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

const email = document.querySelector('#email');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const error = document.querySelector('.error-message');
// const btn = document.querySelector('.contact-btn');

const regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
  if (email.value.match(regExp)) {
    email.style.borderColor = '#27ae60';
    icon1.style.display = 'none';
    icon2.style.display = 'block';
    error.style.display = 'none';
  } else {
    email.style.borderColor = '#e7ac3c';
    icon1.style.display = 'block';
    icon2.style.display = 'none';
    error.style.display = 'block';
  }
  if (email.value === '') {
    email.style.borderColor = 'lightgray';
    icon1.style.display = 'none';
    icon2.style.display = 'none';
    error.style.display = 'none';
  }
}
email.setAttribute('keyup', check());