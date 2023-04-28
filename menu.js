const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.menu-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu );
menuMobile.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMenuCart);


function  toggleDesktopMenu () {
  desktopMenu.classList.toggle('inactive')
}


function toggleMobileMenu () {
  const isShoppingCartOpen = !cartMenu.classList.contains('inactive');
  if(isShoppingCartOpen){
    cartMenu.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleMenuCart () {
  const isMenuMobileOpen = !mobileMenu.classList.contains('inactive');

  if(isMenuMobileOpen){
    mobileMenu.classList.add('inactive');
  }
  cartMenu.classList.toggle('inactive');
}