import { Splide } from '@splidejs/splide';

const menuToggle = document.getElementById('menu-toggle');
document.querySelectorAll('li').forEach((menuItem) =>
  menuItem.addEventListener('click', () => {
    if (menuToggle.checked) menuToggle.checked = false;
  })
);

const navUl = document.querySelector('ul');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navUl.style.backgroundColor = '#000000bb';
  } else {
    if (!menuToggle.checked) {
      navUl.style.backgroundColor = 'transparent';
    }
  }
});

new Splide('.splide', {
  arrows: false,
  lazyLoad: 'nearby',
}).mount();
new Splide('.splide.splide2', { arrows: false, lazyLoad: 'nearby' }).mount();
