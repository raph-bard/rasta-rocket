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
          <a href="index.html"> <img src="https://placehold.co/100x40/EEE/31343C" alt="logo"> </a>
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
const body = document.body;

//fonction permettant d'afficher/cacher le menu quand on appuie sur le boutton burger
burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("noscroll");
});

/*      Creation Tableau d'objets bars         */

let bars = [
  {
    id: 1,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 2,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 3,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 4,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 5,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 6,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 7,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 8,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 9,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 10,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
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
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
  {
    id: 12,
    name: "Nom de bar",
    img: "/media/cafe-neon.jpg",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque perspiciatis, illo ex fuga culpa modi accusantium quas temporibus similique deleniti, ullam facere dignissimos illum tenetur deserunt ut, enim fugit adipisci maxime perferendis assumenda. Modi facere recusandae libero! Quidem incidunt vel tempora repudiandae eaque doloremque quibusdam tenetur reiciendis reprehenderit culpa delectus architecto, deserunt dolorem ipsum accusamus dolores dignissimos suscipit quae unde nesciunt impedit! Temporibus rem maiores culpa soluta cumque sequi vel labore esse. Laborum deleniti corporis impedit quo placeat perspiciatis explicabo ex aut illo in exercitationem architecto, sed animi vero unde reprehenderit earum maxime nisi id. Corporis, similique. Iure, tempora?",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: "false",
  },
];

/**                         creation d'une carte bar    */
const barList = document.querySelector(".container-cards");

const myBeer = document.createElement("a");
myBeer.innerHTML = ` <div class="card-image"></div>
<div class="card-details">
    <div class="card-title-description">
        <h2 class="card-title">titre</h2>
        <p class="card-description"> lorem </p>
    </div>
<div class="card`;
myBeer.classList.add("card");
barList.appendChild(myBeer);

/****         CREATION DE LA LISTE DES BARS AVEC FOR EACH */

/****      SLIDER COUP DE COEUR             */

const selectionCoupDeCoeur = document.querySelector(".coeur-container");

const barCoupDeCoeur = document.createElement("a");
barCoupDeCoeur.innerHTML = `<h2>Nos coup de coeur du moment</h2>
<div class="imagecoeur-container"></div>`;

selectionCoupDeCoeur.appendChild(barCoupDeCoeur);

/*   EN COURS --- > const coupDeCoeurName = document.querySelector(".imagecoeur-container");
const nameCoupDeCoeur = document.createElement("h1");
nameCoupDeCoeur.innerHTML = `${bars[0].name}`; */