//  generation des cartes bars
import {bars, createCardMobile} from './data.mjs'

 const container = document.querySelector(".container");
 bars.forEach((bar) => {
    container.appendChild(createCardMobile(bar));
 })

 


// animation burger menu //

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.body;
const largeurBarreDeDefilement = window.innerWidth - document.documentElement.clientWidth; //calcul de la largeur de la scrollbar

//fonction permettant d'afficher/cacher le menu quand on appuie sur le boutton burger
burger.addEventListener('click', function() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('noscroll');

  // condition permettant d'enlever le décallage du burger menu quand la scrollbar disparait
  if (body.classList.contains('noscroll')) {
    burger.style.right = 27 + largeurBarreDeDefilement + 'px'; 
    } else {
      burger.style.right = '27px';
    }
});
