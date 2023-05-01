const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.menu-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu );
menuMobile.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMenuCart);
productDetailClose.addEventListener('click', closeProductDetail);


function closeProductDetail () {
  
  productDetailContainer.classList.add('inactive');
}


function  toggleDesktopMenu () {
  const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
  const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');

  if(isProductDetailOpen){
    productDetailContainer.classList.add('inactive');
  }
  if(isShoppingCartOpen){
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive')
}


function toggleMobileMenu () {
  const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');
  const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');

  if(isShoppingCartOpen){
    shoppingCartContainer.classList.add('inactive');
  }
  if(isProductDetailOpen){
    productDetailContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleMenuCart () {
  const isMenuMobileOpen = !mobileMenu.classList.contains('inactive');
  const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
  const isEmailOpen = !desktopMenu.classList.contains('inactive');
  if(isMenuMobileOpen){
    mobileMenu.classList.add('inactive');
  }
  if(isProductDetailOpen){
    productDetailContainer.classList.add('inactive');
  }
  if (isEmailOpen){
    desktopMenu.classList.add('inactive')
  }
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');
  const isMenuMobileOpen = !mobileMenu.classList.contains('inactive');
  const isEmailOpen = !desktopMenu.classList.contains('inactive');

  if(isShoppingCartOpen){
    shoppingCartContainer.classList.add('inactive');
  }
   if(isMenuMobileOpen){
    mobileMenu.classList.add('inactive');
  }
  if (isEmailOpen){
    desktopMenu.classList.add('inactive')
  }
  productDetailContainer.classList.remove('inactive')
}




const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Pantalla',
  price: 14500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'celular',
  price: 12000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
   
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}


renderProducts(productList);

