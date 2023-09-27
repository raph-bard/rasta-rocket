//  generation des cartes bars
import {bars, createCardMobile} from './data.mjs'

 const container = document.querySelector(".container");
 bars.forEach((bar) => {
    container.appendChild(createCardMobile(bar));
 })

 


// animation burger menu //

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});