const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.menu-mobile');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu );

function  toggleDesktopMenu () {
  desktopMenu.classList.toggle('inactive')
}


menuMobile.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
  mobileMenu.classList.toggle('inactive');
}