import {bars, createCardMobile} from './data.mjs'

 const container = document.querySelector(".container");
 bars.forEach((bar) => {
    container.appendChild(createCardMobile(bar));
 })

 