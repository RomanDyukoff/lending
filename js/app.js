const burgerBtn = document.querySelector('.header__burger');

burgerBtn.addEventListener('click', dropBurger);

function dropBurger() {
    const headerMenu = document.querySelector('.header__menu');
    const body = document.querySelector('body');

    headerMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    body.classList.toggle('lock');
    
}