

/*      Creation Tableau d'objets bars         */

let bars = [
  {
    id: 1,
    name: "Delirium Café",
    img: "media/deliriumcafe.jpeg",
    imgBar: "media/deliriumcafe2.png",
    shortDescription:
      "Découvrez le Délirium Café, un bar à bières convivial de 800m2. Avec plus de 30 bières à la pression, des tapas en terrasse, des matchs en direct et des soirées animées, c'est l'endroit idéal pour passer un moment agréable entre amis. Profitez de l'ambiance festive et décontractée !",
    longDescription:
      "Plonge dans 800m2 de folie, de fête et de bonne humeur ! 🍻 Avec plus de 30 bières à la pression, des tapas à savourer en terrasse, des matchs en direct et des soirées inoubliables, le Délirium Café promet de devenir ton nouveau lieu de prédilection ! 🎶 ",
    ambianceDescription:
      "",
    price: "expensive",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "30 Quai Virginie Hériot, 33300 Bordeaux",
    openTime: "16h-2h",
    infos: "Bar à bières belges",
    linkMap: `https://maps.app.goo.gl/hDMas2R6VKgTCvGx9`,
  },
  {
    id: 2,
    name: "Delirium Café",
    img: "media/deliriumcafe.jpeg",
    imgBar: "media/deliriumcafe2.png",
    shortDescription:
      "Découvrez le Délirium Café, un bar à bières convivial de 800m2. Avec plus de 30 bières à la pression, des tapas en terrasse, des matchs en direct et des soirées animées, c'est l'endroit idéal pour passer un moment agréable entre amis. Profitez de l'ambiance festive et décontractée !",
    longDescription:
      "Plonge dans 800m2 de folie, de fête et de bonne humeur ! 🍻 Avec plus de 30 bières à la pression, des tapas à savourer en terrasse, des matchs en direct et des soirées inoubliables, le Délirium Café promet de devenir ton nouveau lieu de prédilection ! 🎶 ",
    ambianceDescription:
      "",
    price: "expensive",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "30 Quai Virginie Hériot, 33300 Bordeaux",
    openTime: "16h-2h",
    infos: "Bar à bières belges",
    linkMap: `https://maps.app.goo.gl/hDMas2R6VKgTCvGx9`,
  },
];

/**    creation d'une carte bar    */

const barList = document.querySelector(".container-cards"); // container pour les cartes

let options = (bar) => {
  let optionsHTML = "";
  switch (bar.price) {
    case "cheap":
      optionsHTML += `<div class="card-option">
        <img src="${bar.imgBar}" alt="" class="logo">
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
  newBar.href = "bar-detail.html?" + para.toString(); // creation du lien, de la balaise <a>, avec le Id inseré à la fin
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

    const descriptionLongue = contenuPopUp.querySelector("p");
    descriptionLongue.innerHTML = barSelectionne.shortDescription;

    const adresseInfo = document.querySelector(".adresse span");
    adresseInfo.innerHTML = barSelectionne.location;

    const horairesInfo = document.querySelector(".horaires span");
    horairesInfo.innerHTML = barSelectionne.location; // todo

    const moreInfo = document.querySelector(".option-supplementaires span");
    moreInfo.innerHTML = barSelectionne.location; // todo
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
    }
  // appending filtered bars
  filteredBars.forEach((bar) => barList.appendChild(createCardMobile(bar)));


