// --------------- Dynamisation de pages --------------- //

// ajouter la class body //

// Obtenir le nom de la page actuelle
const currentPage = window.location.pathname
  .split("/")
  .pop()
  .replace(".html", "");

// Ajouter le nom de la page en tant que classe à l'élément body
document.body.classList.add(currentPage);

// HEADER //

const header = document.querySelector("header");
header.innerHTML = `
      <div class="logo">
        <a href="index.html"> <img src="media/logo-rastarockett.jpg" alt="logo"> </a>
      </div>
      <div class="burger">
          <span></span>
      </div>
      <div class="menu">
          <nav>
              <ul>
                  <li><a href="index.html">Accueil</a></li>
                  <li><a href="aboutus.html">A propos</a></li>
                  <li><a href="contact.html">Contact</a></li>
              </ul>
          </nav>
      </div>
  `;

// FOOTER //

const footer = document.querySelector("footer");
footer.innerHTML = `<p>&copy 2023 - Tous les droits sont réservés</p><span>Rasta rockett</span>`;

// animation burger menu //

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const html = document.html;

//fonction permettant d'afficher/cacher le menu quand on appuie sur le boutton burger
burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  document.documentElement.classList.toggle("noscroll");
});

/*      Creation Tableau d'objets bars         */

let bars = [
  {
    id: 1,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 2,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "vin",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 3,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "cocktail",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 4,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "cocktail",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 5,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 6,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 7,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 8,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 9,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 10,
    name: "Delirium",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 11,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
  {
    id: 12,
    name: "Nom de bar",
    img: "media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus. amet consectetur adipisicing elit. Quae, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
  },
];

/**                         creation d'une carte bar    */
const barList = document.querySelector(".container-cards"); // container pour les cartes

let options = (bar) => {
  let optionsHTML = "";
  switch (bar.price) {
    case "cheap":
      optionsHTML += `<div class="card-option">
        <img src="/assets/dollar1.png" alt="" class="logo">
        <h4>Economique</h4>
        </div>`;
      break;
    case "affordable":
      optionsHTML += `<div class="card-option">
        <img src="/assets/dollar2.png" alt="" class="logo">
        <h4>Abordable</h4>
        </div>`;
      break;
    case "expensive":
      optionsHTML += `<div class="card-option">
        <img src="/assets/dollar3.png" alt="" class="logo">
        <h4>cher</h4>
        </div>`;
      break;
  }
  switch (bar.type) {
    case "biere":
      optionsHTML += `<div class="card-option">
        <img src="/assets/biere.png" alt="" class="logo">
        <h4>Bières</h4>
        </div>`;
      break;
    case "cocktail":
      optionsHTML += `<div class="card-option">
        <img src="/assets/cocktail.png" alt="" class="logo">
        <h4>Cocktails</h4>
        </div>`;
      break;
    case "vin":
      optionsHTML += `<div class="card-option">
        <img src="/assets/vin.png" alt="" class="logo">
        <h4>Vins</h4>
        </div>`;
      break;
  }
  return optionsHTML;
};

let createCardMobile = (bar) => {
  let para = new URLSearchParams();
  para.append("id", bar.id);
  const newBar = document.createElement("div");
  //newBar.href = "bar-detail.html?" + para.toString(); // creation du lien, de la balaise <a>, avec le Id inseré à la fin
  newBar.classList.add("card"); // donc le lien sera de cette forme : bar-detail.html?id=1 par exemple
  newBar.innerHTML = `
   
<div class="card-image" style="background: url(${
    bar.img
  }) no-repeat center/cover;"></div>
    <div class="card-details">
        <div class="card-title-description">
            <h2 class="card-title">${bar.name}</h2>
            <p class="card-description"> ${bar.shortDescription}</p>
        </div>
        <div class="card-options">
          ${options(bar)}
        </div>
      </div>   
      <div class="pop-but"></div>
    `;

  return newBar;
};
// append all bars in the main  barList
bars.forEach((bar) => barList.appendChild(createCardMobile(bar)));

/* POPUP DETAIL BAR */

const popButs = document.querySelectorAll(".pop-but");
const popupBar = document.querySelector(".popup-bar-container");

// on ajoute la classe active à la pop-up lorsqu'on clique sur un bar
popButs.forEach(function (popBut) {
  popBut.addEventListener("click", function () {
    popupBar.classList.toggle("active");
    document.documentElement.classList.toggle("noscroll");
  });
});

const closePop = document.querySelector(".close-button");

// Fermer la popup quand on clique sur la croix
closePop.addEventListener("click", function () {
  popupBar.classList.remove("active");
  document.documentElement.classList.remove("noscroll");
});

// Fermer la popup en cliquant à l'extérieur de celle-ci
popupBar.addEventListener("click", function (e) {
  if (e.target === popupBar) {
    popupBar.classList.remove("active");
    document.documentElement.classList.remove("noscroll");
  }
});

/****         CREATION DE LA LISTE DES BARS AVEC FOR EACH */

/****      SLIDER COUP DE COEUR             */

const selectionCoupDeCoeur = document.querySelector(".coeur-container");

const barCoupDeCoeur = document.createElement("a");
const coupDeCoeurElements = "<h2>Nos coup de coeur du moment</h2>";
barCoupDeCoeur.innerHTML = bars
  .filter((bar) => bar.coupDeCoeur === true)
  .map(
    (bar) => `
    
    <div class= ".imagecoeur-container"> ${bar.name}</div>
  `
    /*<img class="imagecoeur-container" src="${bar.img}" />*/
  );
// bars.forEach((bar) => {
//   barCoupDeCoeur.appendChild();
// });
console.log(barCoupDeCoeur);

barCoupDeCoeur.classList.add("imagecoeur-container");

selectionCoupDeCoeur.appendChild(barCoupDeCoeur);

/*const coupDeCoeurName = document.querySelector(".imagecoeur-container");
const nameCoupDeCoeur = document.createElement("h1");
nameCoupDeCoeur.innerHTML = `${bars[0].name}`;*/

/****** filtering ******/

const selectType = document.querySelector("#type");
const selectPrice = document.querySelector("#price");

// adding event listeners onchange

selectType.addEventListener("change", () => filterHandler());
selectPrice.addEventListener("change", () => filterHandler());

function filterHandler() {
  let filteredBars = bars
    .filter(
      (bar) => bar.type.includes(selectType.value) || selectType.value == "all"
    )
    .filter(
      (bar) => bar.price == selectPrice.value || selectPrice.value == "all"
    );

  barList.innerHTML = "";

  // appending filtered bars
  filteredBars.forEach((bar) => barList.appendChild(createCardMobile(bar)));
}
