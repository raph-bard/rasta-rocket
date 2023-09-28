//  generation des cartes bars
import {bars, createCardMobile} from './data.mjs'

 const container = document.querySelector(".container-cards");
 bars.forEach((bar) => {
    container.appendChild(createCardMobile(bar));
 })

 


// animation burger menu //

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('noscroll');
});
