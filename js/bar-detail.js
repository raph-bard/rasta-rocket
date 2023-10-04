import bars from "./data.js";

/*           generate Bar-detail page         */

let createBarDetailPage = (bar) => {
  let para = new URLSearchParams();
  para.append("id", bar.id);
  const newBar = document.createElement("main");
  newBar.innerHTML = `
    <main>
    <div class="bandeau-container">
      <div
        class="bandeau"
        style="background-image: url(../${bar.img})"
      ></div>
    </div>

    <div class="container container-modele-bar">
      <div class="container-infos-bar opacity-delayed">
        <h1>${bar.name}</h1>
        <span class="bar-name"> Catégorie : Bar à ${
          bar.type.includes("Bières")
            ? "bières"
            : bar.type.includes("Vins")
            ? "Vins"
            : "Cocktails"
        }</span>

        <div class="icons-bar">
          <div class="icon1">
          ${
            bar.type.includes("Bières")
              ? `<i class="fa-solid fa-beer-mug-empty"></i>`
              : bar.type.includes("Vins")
              ? `<i class="fa-solid fa-wine-bottle"></i>`
              : `<i class="fa-solid fa-martini-glass"></i>`
          }
          <span>${bar.type}</span>
          </div>
          <div class="icon2">
          ${
            bar.price.includes("cheap")
              ? `<i class="fa-solid fa-euro-sign"></i>`
              : bar.price.includes("affordable")
              ? `<i class="fa-solid fa-euro-sign"></i>`
              : `<i class="fa-solid fa-euro-sign"></i>`
          }
            <span>${
              bar.price.includes("cheap")
                ? `Économique`
                : bar.price.includes("affordable")
                ? `Abordable`
                : `Chic`
            }</span>
          </div>
        </div>
      </div>

      <div class="container-title-info opacity-delayed2">
        <h3>Quelques infos</h3>
      </div>

      <div class="container-full-description opacity-delayed2" ->
        <p>
         ${bar.longDescription}
        </p>
        <div class="container img-quelques-infos" style="background: url(${
          bar.imgBar
        }"></div>
      </div>
    </div>
    <div class="container-max bg-pink opacity-delayed2">
      <div class="container container-ambiance" ->
        <h3>L'ambiance et l'univers</h3>
        <p>
          ${bar.ambianceDescription}
        </p>
      </div>
    </div>    
    <div class="container-max">
      <div class="container container-horaires">
        <h3>Infos générales</h3>
        <div class="infos-genriques">
          <div class="adresse">
          <i class="fa-regular fa-map"></i>
            <span>${bar.adress}</span>
          </div>
          <div class="horaires">
          <i class="fa-regular fa-clock"></i>
            <span>${bar.openTime}</span>
          </div>
          <div class="option-supplementaires">
          <i class="fa-regular fa-lightbulb"></i>
            <span>${bar.infos}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <iframe
        src=${bar.linkMap}
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </main>
    `;
  console.log(newBar);
  return newBar;
};
let searchLink = new URLSearchParams(window.location.search);
let id = searchLink.get("id");

const barHtml = createBarDetailPage(bars.filter((bar) => bar.id == id)[0]);
const barDiv = document.querySelector(".bar");
barDiv.appendChild(barHtml);

// --------------- Dynamisation de pages --------------- //

// ajouter la class body //

// Obtenir le nom de la page actuelle
const currentPage = window.location.pathname
  .split("/")
  .pop()
  .replace(".html", "");

// Ici il était possible que currentPage soit égal à '', ce qui causait un bug
if (!currentPage) {
  currentPage = "index";
}
// Ajouter le nom de la page en tant que classe à l'élément body
document.body.classList.add(currentPage);

// HEADER //

const header = document.querySelector("header");
header.innerHTML = `
      <div class="logo">
        <a href="index.html"> <img src="media/logo-rasta-rockett.png" alt="logo"> </a>
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

// --------------- Dynamisation de pages --------------- //
