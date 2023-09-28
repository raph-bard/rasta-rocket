let bars = [
  {
    id: 0,
    imgUrl: "https://placehold.co/120x170/EEE/31343C",
    fullImgUrl: "https://placehold.co/120x170/EEE/31343C",
    title: "Bar  generé par js",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    type: "biere", // biere , cocktail, vin
    price: "cheap", // expensive, cheap or affordable
    ambiance: "dansant", // dansant, guinguette, sportif
  },
  {
    id: 1,
    imgUrl: "https://placehold.co/120x170/EEE/31343C",
    fullImgUrl: "https://placehold.co/120x170/EEE/31343C",
    title: "Bar  generé par js",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    type: "cocktail", // biere , cocktail, vin
    price: "cheap", // expensive, cheap or affordable
    ambiance: "dansant", // dansant, guinguette, sportif
  },
  {
    id: 2,
    imgUrl: "https://placehold.co/120x170/EEE/31343C",
    fullImgUrl: "https://placehold.co/120x170/EEE/31343C",
    title: "Bar  generé par js",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    type: "biere", // biere , cocktail, vin
    price: "cheap", // expensive, cheap or affordable
    ambiance: "dansant", // dansant, guinguette, sportif
  },
  {
    id: 3,
    imgUrl: "https://placehold.co/120x170/EEE/31343C",
    fullImgUrl: "https://placehold.co/120x170/EEE/31343C",
    title: "Bar  generé par js",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    type: "cocktail", // biere , cocktail, vin
    price: "cheap", // expensive, cheap or affordable
    ambiance: "dansant", // dansant, guinguette, sportif
  },
  {
    id: 4,
    imgUrl: "https://placehold.co/120x170/EEE/31343C",
    fullImgUrl: "https://placehold.co/120x170/EEE/31343C",
    title: "Bar  generé par js",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    type: "vin", // biere , cocktail, vin
    price: "cheap", // expensive, cheap or affordable
    ambiance: "dansant", // dansant, guinguette, sportif
  },
  {
    id: 5,
    imgUrl: "https://placehold.co/120x170/EEE/31343C",
    fullImgUrl: "https://placehold.co/120x170/EEE/31343C",
    title: "Bar  generé par js",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    type: "vin", // biere , cocktail, vin
    price: "cheap", // expensive, cheap or affordable
    ambiance: "dansant", // dansant, guinguette, sportif
  },
  {
    id: 6,
    imgUrl: "https://placehold.co/120x170/EEE/31343C",
    fullImgUrl: "https://placehold.co/120x170/EEE/31343C",
    title: "Bar  generé par js",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
    type: "biere", // biere , cocktail, vin
    price: "cheap", // expensive, cheap or affordable
    ambiance: "dansant", // dansant, guinguette, sportif
  },
];

let options = (cardObjectProperties) => {
  let optionsHTML = "";
  switch (cardObjectProperties.price) {
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
  switch (cardObjectProperties.type) {
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

let createCardMobile = (cardObjectProperties) => {
  let para = new URLSearchParams();
  para.append("id", cardObjectProperties.id);
  const newElement = document.createElement("a");
  newElement.href = "bar-detail.html?" + para.toString();
  newElement.classList.add("card");
  newElement.innerHTML = `
    <div class="card-image"></div>
    <div class="card-details">
        <div class="card-title-description">
            <h2 class="card-title">${cardObjectProperties.title}</h2>
            <p class="card-description"> ${
              cardObjectProperties.shortDescription
            }</p>
        </div>
    <div class="card-options">
      ${options(cardObjectProperties)}
    </div>  
    `;
  return newElement;
};

export { bars, createCardMobile };
