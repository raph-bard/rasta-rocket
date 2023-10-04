
//******************** Introduction Shaker Animé ********************//

if (window.location.pathname === "/index.html") {
  // Ajoute la classe "no-scroll" à la balise HTML dès le début, la condition sert à vérifier si on est bien sur la page index.
  document.documentElement.classList.add("noscroll");

  // Retire la classe "noscroll" de la balise HTML après 4,5 secondes
  setTimeout(function() {
      document.documentElement.classList.remove("noscroll");
  }, 4500); // s'active après 4.5s
}

var deleteShaker = document.querySelector(".shaker-container");

// setTimeout sert à définir un délai
setTimeout(function() {
    if (deleteShaker) {
        // Supprime l'html de l'animation pour ne pas créer de bugs de z-index une fois qu'il disparait
        deleteShaker.parentNode.removeChild(deleteShaker);
    }
}, 4500); // s'active aussi après 4.5s




/*      Creation Tableau d'objets bars         */

import bars from "./data.js";

/**    creation d'une carte bar    */

const barList = document.querySelector(".container-cards"); // container pour les cartes

let options = (bar) => {
  let optionsHTML = "";
  switch (bar.price) {
    case "cheap":
      optionsHTML += `<div class="card-option">
        <i class="fa-solid fa-euro-sign"></i>
        <h4>Economique</h4>
        </div>`;
      break;
    case "affordable":
      optionsHTML += `<div class="card-option">
        <i class="fa-solid fa-euro-sign"></i>
        <h4>Abordable</h4>
        </div>`;
      break;
    case "expensive":
      optionsHTML += `<div class="card-option">
        <i class="fa-solid fa-euro-sign"></i>
        <h4>Chic</h4>
        </div>`;
      break;
  }

  optionsHTML += `<div class="card-option">
    ${
      bar.type.includes("Bières")
        ? `<i class="fa-solid fa-beer-mug-empty"></i>`
        : bar.type.includes("Vins")
        ? `<i class="fa-solid fa-wine-bottle"></i>`
        : `<i class="fa-solid fa-martini-glass"></i>`
    }
        <h4>${bar.type}</h4>
        </div>`;
  return optionsHTML;
};

let createCardMobile = (bar) => {
  let para = new URLSearchParams();
  para.append("id", bar.id);
  const newBar = document.createElement("div");
  newBar.href = "bar-detail.html?" + para.toString(); // creation du lien, de la balaise <a>, avec le Id inseré à la fin
  newBar.classList.add("card", "scale01"); // donc le lien sera de cette forme : bar-detail.html?id=1 par exemple
  newBar.innerHTML = `
<div class="card-image" style="background: url(${
    bar.img
  }) no-repeat center/cover;"></div>
    <div class="card-details">
        <div class="card-title-description">
            <h2 class="card-title">${bar.name}</h2>
            <p class="card-description ellipsis-4"> ${bar.shortDescription}</p>
        </div>
        <div class="card-options">
          ${options(bar)}
        </div>
      </div>   
      <div class="pop-but" data-id="${bar.id}"></div>
    `;
  console.log(newBar);
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

    /****         DYNAMISATION DE LA POPUP */

    const barId = popBut.getAttribute("data-id");
    let barSelectionne;
    bars.forEach((bar) => {
      if (bar.id == barId) {
        barSelectionne = bar;
      }
    });
    const contenuPopUp = document.querySelector(".popup-bar-container");
    const popUpTitre = contenuPopUp.querySelector("h2");
    popUpTitre.innerHTML = barSelectionne.name;

    const photoBar = contenuPopUp.querySelector(".pop-up-img");
    photoBar.style.backgroundImage = `url(${barSelectionne.img}) `;

    const descriptionLongue = contenuPopUp.querySelector("p");
    descriptionLongue.classList.add("ellipsis-6");
    descriptionLongue.innerHTML = barSelectionne.shortDescription;

    const btnLink = document.querySelector(".pop-up-button");
    btnLink.href = `bar-detail.html?id=${barId}`;

    const adresseInfo = document.querySelector(".adresse span");
    adresseInfo.innerHTML = barSelectionne.location;

    const horairesInfo = document.querySelector(".horaires span");
    horairesInfo.innerHTML = barSelectionne.openTime;

    const moreInfo = document.querySelector(".option-supplementaires span");
    moreInfo.innerHTML = barSelectionne.infos;
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

/****      SLIDER COUP DE COEUR             */

const coupDeCoeurContainer = document.querySelector(".coeur-container");

let barPrivilige = bars.filter((bar) => bar.coupDeCoeur === true)[0];
if (bars.filter((bar) => bar.coupDeCoeur === true).length === 0) {
  coupDeCoeurContainer.style.display = `none`;
} else {
  const overlayContainer = document.createElement("div");
  overlayContainer.classList.add("overlay-container");
  overlayContainer.classList.add("scale01");

  const h3 = document.createElement("h3");
  h3.textContent = `${barPrivilige.name}`;

  const link = document.createElement("a");
  link.href = `bar-detail.html?id=${barPrivilige.id}`;

  const div = document.createElement("div");
  div.classList.add("imagecoeur-container");
  div.style.background = `url(${barPrivilige.img}) no-repeat center/cover`;

  link.appendChild(div);
  overlayContainer.appendChild(h3);
  overlayContainer.appendChild(link);
  coupDeCoeurContainer.appendChild(overlayContainer);
}

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
  filteredBars.forEach((bar) => barList.appendChild(createCardMobile(bar)));
  createPopUp();
}

function createPopUp() {
  const popButs = document.querySelectorAll(".pop-but");
  const popupBar = document.querySelector(".popup-bar-container");

  // on ajoute la classe active à la pop-up lorsqu'on clique sur un bar
  popButs.forEach(function (popBut) {
    popBut.addEventListener("click", function () {
      popupBar.classList.toggle("active");
      document.documentElement.classList.toggle("noscroll");

      /****         DYNAMISATION DE LA POPUP */

      const barId = popBut.getAttribute("data-id");
      let barSelectionne;
      bars.forEach((bar) => {
        if (bar.id == barId) {
          barSelectionne = bar;
        }
      });
      const contenuPopUp = document.querySelector(".popup-bar-container");
      const popUpTitre = contenuPopUp.querySelector("h2");
      popUpTitre.innerHTML = barSelectionne.name;

      const photoBar = contenuPopUp.querySelector(".pop-up-img");
      photoBar.style.backgroundImage = `url(${barSelectionne.img}) `;

      const descriptionLongue = contenuPopUp.querySelector("p");
      descriptionLongue.innerHTML = barSelectionne.shortDescription;

      const adresseInfo = document.querySelector(".adresse span");
      adresseInfo.innerHTML = barSelectionne.location;

      const horairesInfo = document.querySelector(".horaires span");
      horairesInfo.innerHTML = barSelectionne.openTime; // todo

      const moreInfo = document.querySelector(".option-supplementaires span");
      moreInfo.innerHTML = barSelectionne.infos; // todo

      const btnLink = document.querySelector(".pop-up-button");
      btnLink.href = `bar-detail.html?id=${barId}`;
    });
  });
}
