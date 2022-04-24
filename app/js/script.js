const btnHamburger = document.getElementById('hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
  //Close Menu
  body.classList.remove('noscroll');
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    fadeElems.forEach(elem => {
      elem.classList.remove('fade-in');
      elem.classList.add('fade-out');
    });
  } else {
    // Open Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(elem => {
      elem.classList.remove('fade-out');
      elem.classList.add('fade-in');
    });
  }
});
