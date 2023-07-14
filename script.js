const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function () {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition);
});

hamburgerMenu.addEventListener('click', function () {
  header.classList.toggle('menu-open');
});
