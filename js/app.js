const burgerBtn = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', dropBurger);

function dropBurger() {

    headerMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    body.classList.toggle('lock');
    
}