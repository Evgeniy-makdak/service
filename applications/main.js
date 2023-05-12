
const burger = document.querySelector('.univers-nav__burger');
const menu = document.querySelector('.univers-nav__menu');

burger.addEventListener('click', function() {
  menu.classList.toggle('open');
});

const button = document.querySelector('.button');
const brands = document.querySelectorAll('.closed');

button.addEventListener('click', () => {
  brands.forEach((closed, index) => {
    if (index >= 0 && index <= 3) {
        closed.classList.toggle('closed');
    }
  });
});