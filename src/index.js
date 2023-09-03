import { Splide } from '@splidejs/splide';

const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('ul');
const header = document.querySelector('header');

document.querySelectorAll('li').forEach((menuItem) =>
  menuItem.addEventListener('click', () => {
    if (menuToggle.checked) menuToggle.checked = false;
  })
);

const menuObserver = new IntersectionObserver(
  (entries) => {
    const headerEntry = entries[0];
    if (header.offsetWidth > 700) {
      if (headerEntry.isIntersecting) {
        navUl.classList.remove('bg-blacktr');
        navUl.classList.add('md:bg-transparent');
      } else {
        navUl.classList.remove('md:bg-transparent');
        navUl.classList.add('bg-blacktr');
      }
    }
  },
  { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` }
);

menuObserver.observe(header);
const animatedElements = document.querySelectorAll('[data-animation]');

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const animation = entry.target.dataset.animation;
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.style.animation = `${animation} ${
        animation === 'fade-in' ? '1000ms' : '500ms'
      } ease-in backwards`;
    } else {
      entry.target.style.animation = 'none';
    }
  });
});

animatedElements.forEach((element) => {
  animationObserver.observe(element);
});

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 100) {
//     navUl.style.backgroundColor = '#000000bb';
//   } else {
//     if (!menuToggle.checked) {
//       navUl.style.backgroundColor = 'transparent';
//     }
//   }
// });

new Splide('.splide', {
  arrows: false,
  lazyLoad: 'nearby',
}).mount();
new Splide('.splide.splide2', { arrows: false, lazyLoad: 'nearby' }).mount();
