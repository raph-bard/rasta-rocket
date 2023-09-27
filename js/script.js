

// animation burger menu //

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});