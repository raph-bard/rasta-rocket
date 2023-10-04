/*      Creation Tableau d'objets bars         */

let bars = [
  {
    id: 1,
    name: "Delirium Café",
    img: "media/deliriumcafe2.png",
    imgBar: "media/deliriumcafe2.png",
    shortDescription:
      "Découvrez le Délirium Café, un bar à bières convivial de 800m2. Avec plus de 30 bières à la pression, des tapas en terrasse, des matchs en direct et des soirées animées, c'est l'endroit idéal pour passer un moment agréable entre amis. Profitez de l'ambiance festive et décontractée !",
    longDescription:
      "Plonge dans 800m2 de folie, de fête et de bonne humeur ! 🍻 Avec plus de 30 bières à la pression, des tapas à savourer en terrasse, des matchs en direct et des soirées inoubliables, le Délirium Café promet de devenir ton nouveau lieu de prédilection ! 🎶 ",
    ambianceDescription: "",
    price: "expensive",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "30 Quai Virginie Hériot, 33300 Bordeaux",
    openTime: "16h-2h",
    infos: "Bar à bières belges",
    linkMap: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.7562997504083!2d-0.5642949233835012!3d44.86725577306881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552912a8688e8b%3A0x7a0454fe7700333e!2sDelirium%20Caf%C3%A9%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1696339846975!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
  },
  {
    id: 2,
    name: "My Beers",
    img: "media/bar-comptoir.jpg",
    imgBar: "media/mybeers.jpg",
    shortDescription:
      "Un bar à bières évidemment, mais pas que. Avec un choix impressionnant de bières bouteilles et une dizaine de tirages pression dont les références changent toutes les 3 semaines pour permettre aux clients de goûter à ce qui existe de mieux dans la bière. Nous proposons aussi du vin, du champagne, des soft, des planches de fromages, de saucissons et de chips.",
    longDescription:
      "Notre engagement envers la qualité et la diversité se reflète également dans nos dix tirages pression en constante évolution. Nous renouvelons souvent notre sélection, offrant ainsi à nos clients la possibilité de déguster les dernières pépites de la bière artisanale. Chaque visite au bar est une opportunité de découvrir de nouvelles saveurs, de partager vos découvertes avec des amis et d'explorer l'univers riche et varié de la bière. Bien entendu, notre offre ne se limite pas qu'à la bière. Pour satisfaire tous les goûts, nous proposons également une gamme de boissons non alcoolisées rafraîchissantes, ainsi que des planches de fromages et de saucissons pour accompagner parfaitement vos boissons préférées. Chez nous, il y en a pour tous les palais, que vous soyez passionné de bière, ou simplement à la recherche d'un endroit convivial pour vous détendre et savourer de délicieuses bouchées.",
    ambianceDescription: "",
    price: "cheap",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "63 Quai Virginie Hériot, 33300 Bordeaux",
    openTime: "11h-22h",
    infos: "Réduction de -20% pour tous les wilders",
    linkMap: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d723892.7364145775!2d-1.7825317382812673!3d44.86827963401475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55291a454527fd%3A0xe5a9bb6c46321064!2sMy%20Beers%20-%20Bassins%20%C3%A0%20Flot%20-%20Bar%20%C3%A0%20bi%C3%A8re%20pr%C3%A8s%20de%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1696344160468!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
  },
  {
    id: 3,
    name: "La Cervoiserie",
    img: "media/bar-tonneaux.jpg",
    imgBar: "media/cervoiserie.jpg",
    shortDescription:
      "Chez nous, la bière, c'est une expérience de partage. Que vous préfériez en bouteille ou en fût, avec ou sans saucisson, en solo ou entre amis, notre cave à bière vous propose plus de 500 références parmi les plus savoureuses et étonnantes. De l'artisanale à l'abbaye, blonde, brune, ambrée, forte ou légère, de France, de Belgique ou d'ailleurs, vous trouverez ici une variété de bières à découvrir et à savourer.",
    longDescription:
      "En bouteille ou en fût. Avec ou sans saucisson. Avec ou sans copains, mais surtout avec. Parce que pour nous, la bière n’est pas quelque chose que l’on boit, mais que l’on partage. Physiquement, c’est bel et bien une cave à bière : on y trouve plus de 500 références de marques parmi les plus savoureuses et les plus étonnantes. Artisanales, d’Abbaye ou de spécialité, blondes, brunes ou ambrées, fortes ou légères, de France, de Belgique ou d’ailleurs, en bouteille ou en fût, à l’unité ou à la caisse, elles sont toutes différentes et toutes méritent qu’on les découvre.",
    ambianceDescription: "",
    price: "affordable",
    type: "biere",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "10 Quai Lawton, 33300 Bordeaux",
    openTime: "14h-23h",
    infos: "Accueil chaleureux",
    linkMap: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d723940.4546297085!2d-1.782545134106463!3d44.86448522708456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d9f344261233%3A0x4ddc4a9c0de69f88!2sLa%20Cervoiserie!5e0!3m2!1sfr!2sfr!4v1696344929696!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
  },
  {
    id: 4,
    name: "V&B",
    img: "https://www.rejoinsvandb.fr/wp-content/uploads/2020/09/VandBLeHaillan-5711.jpg",
    imgBar:
      "https://www.rejoinsvandb.fr/wp-content/uploads/2023/04/couverture-article.png",
    shortDescription:
      "V and B s’inscrit dans l’ère de l’after-work, cette tendance qui plaît et qui rassemble toutes les générations en fin de journée, après le travail, autour d’un verre.",
    longDescription:
      "L’originalité du concept se dessine autour d’une idée forte : anoblir la bière et démocratiser le vin. Cet ADN s’exprime en magasin par un espace de vente composé d’une cave à vins, à bières, et spiritueux, doublé d’un espace bar dédié à la découverte et à la dégustation. Le concept est renforcé par l’after-work, cette tendance qui plaît et qui rassemble toutes les générations en fin de journée après le travail autour d’un verre. Nos magasins ferment donc entre 20h et 20h30. Dans cette ambiance chaleureuse, une place importante est donnée au choix et au conseil. Nous veillons à maintenir de la convivialité dans nos magasins en proposant à nos clients de nombreuses animations : soirées thématiques, retransmissions sportives, concerts… V and B, ce n’est pas vraiment un bar et pas vraiment un magasin, c’est un lieu de vie qui permet de découvrir des produits minutieusement sélectionnés,",
    ambianceDescription: "",
    price: "cheap",
    type: "vin biere",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "5 Rue la Motte Picquet, 33300 Bordeaux",
    openTime: "10h-20h30",
    infos: "Afterwork à l'ambiance festive",
    linkMap: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d90478.51143412713!2d-0.6921722!3d44.8734196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5528f67d0f344f%3A0x1f9ca2c8843aaa82!2sV%20and%20B%20Bordeaux-Lac!5e0!3m2!1sfr!2sfr!4v1696344925445!5m2!1sfr!2sfr`,
  },
  {
    id: 5,
    name: "Vinimarché",
    img: "media/vinimarche.jpg",
    imgBar: "media/bar-tonneaux.jpg",
    shortDescription:
      "Niché au cœur des Halles de Bacalan, notre bar vous offre une expérience sensorielle incomparable. Que vous soyez amateur de vins raffinés, de cocktails créatifs, de spiritueux exceptionnels ou de bières artisanales, notre établissement vous promet un voyage gustatif inoubliable.",
    longDescription:
      "Imaginez un lieu convivial au cœur des Halles de Bacalan, un endroit idéal pour les amateurs de boissons. Notre bar offre bien plus qu'une simple expérience, c'est un lieu où se retrouvent les passionnés et les curieux en quête de découvertes gustatives. Lorsque vous franchirez notre porte, vous ressentirez immédiatement l'ambiance détendue qui règne ici. Que vous soyez un passionné ou un novice en matière de boissons, notre bar à vins, cocktails, spiritueux et bières vous attend pour une expérience gustative mémorable. Laissez-vous tenter par l'appel de Bacalan et plongez dans une expérience qui éveillera vos sens et vous donnera envie de revenir.",
    ambianceDescription: "",
    price: "affordable",
    type: "vin",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "Les Halles de Bacalan, 10 Quai de Bacalan, 33300 Bordeaux",
    openTime: "09h-23h",
    infos: "Ambiance conviviable",
    linkMap: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d90478.59004338508!2d-0.6930951!3d44.8733696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529875426eef5%3A0xca03b3d5c51a94e1!2sVinimarch%C3%A9!5e0!3m2!1sfr!2sfr!4v1696344964963!5m2!1sfr!2sfr`,
  },
  {
    id: 6,
    name: "Bar Cave de Bacalan",
    img: "../media/deliriumcafe.jpeg",
    imgBar: "media/deliriumcafe2.png",
    shortDescription:
      "Restauration traditionnelle au juste prix à Bacalan sur Bordeaux, Profitez de notre bar à l’ambiance chaleureuse et conviviale entre amis, famille ou rendez-vous d’affaires, Christian vous fera découvrir sa passion et sa meilleure sélection de vins de Bordeaux et de France",
    longDescription:
      "Situé au cœur de Bacalan à Bordeaux et ouvert depuis 1923, le restaurant bar et cave de Bacalan vous accueille dans une ambiance chaleureuse et conviviale. Christian Gerardi vous propose des plats traditionnels, des menus du jour préparés avec des produits du moment. Le Bar Cave de Bacalan vous propose ses prestations : <ul><li>Bar</li><li>Restaurant</li><li>Cave</li><li>Epicerie</li> Notre établissement vous accueillera tout au long de la journée pour déguster un repas ou un apéritif entre amis ou en famille. Christian vous accueille du lundi au samedi dans un cadre traditionnel aux teintes chaleureuses. Le service soigné et attentif, sait se faire discret pour un repas d’affaire ou un tête à tête, n’hésitez pas à venir nous découvrir au 180 rue de Blanqui à Bacalan sur Bordeaux.",
    ambianceDescription: "",
    price: "cheap",
    type: "vin",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "180 Rue Blanqui, 33300 Bordeaux",
    openTime: "Undefined",
    infos: "Lieu pittoresque à découvrir",
    linkMap: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45239.20383490056!2d-0.6213514!3d44.8734856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5528e94c7eebd7%3A0x2cf6a9d8989751a4!2sBar%20Cave%20De%20bacalan!5e0!3m2!1sfr!2sfr!4v1696344998324!5m2!1sfr!2sfr`,
  },
  {
    id: 7,
    name: "Le Carrelet",
    img: "media/carrelet-bandeau.jpg",
    imgBar: "media/carrelet.jpg",
    shortDescription:
      "Le Carrelet est bien plus qu'un simple bar à cocktails, c'est un havre de convivialité et de créativité, Notre établissement vous invite à un voyage gustatif à travers l'art de la mixologie, où les classiques intemporels et les créations audacieuses cohabitent harmonieusement.",
    longDescription:
      "Le Carrelet, un bar où la magie des cocktails rencontre l'ambiance envoûtante d'un lieu où l'on se sent chez soi,</br> Que vous soyez un habitué du Carrelet ou que ce soit votre première visite, vous serez toujours accueilli avec chaleur et un service attentionné. Notre bar est un lieu de rencontre, de célébration et de découverte, où chaque verre raconte une histoire et chaque visite est une expérience à part entière.</br> Au Carrelet, vous pourrez déguster des cocktails raffinés et savoureux, élaborés à partir de produits frais et de saison par une équipe de barmans passionnés. Notre carte propose un large choix de cocktails classiques et originaux, ainsi que des créations exclusives.</br>  Le Carrelet est également un lieu idéal pour se retrouver entre amis ou en famille. L'ambiance est chaleureuse et conviviale, et l'équipe est toujours prête à partager sa passion des cocktails avec vous. Nous organisons régulièrement des soirées à thème, des cours de mixologie et des dégustations de cocktails, afin de vous faire découvrir de nouvelles saveurs et de nouveaux horizons.</br> Que vous soyez à la recherche d'une soirée festive ou d'un moment de détente entre amis, le Carrelet est le lieu idéal pour vous. Venez nous rejoindre pour une expérience inoubliable, où la magie des cocktails rencontre l'ambiance envoûtante d'un lieu où l'on se sent chez soi.",
    ambianceDescription: "",
    price: "affordable",
    type: "vin",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "64bis Rue Lucien Faure, 33300 Bordeaux",
    openTime: "17h-02h",
    infos: "Chaleureux et décontracté",
    linkMap: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45239.20383490056!2d-0.6213514!3d44.8734856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529cbf00d0011%3A0x650f55d0657b89c9!2sLe%20Carrelet!5e0!3m2!1sfr!2sfr!4v1696345035196!5m2!1sfr!2sfr`,
  },
  {
    id: 8,
    name: "Home Run Café",
    img: "http://www.homerunbar.fr/wp-content/uploads/2021/10/Photo-concept-1.jpg",
    imgBar: "media/bar-tonneaux.jpg",
    shortDescription:
      "Viens supporter tes équipes préférées et assister à tous les matchs de légende en t’installant sur notre tribune pour vivre un moment de partage comme au stade. Avec nos 4 TV centrales suspendues, tu ne manqueras rien des petits ponts, chisteras et des plus beaux dunks où que tu sois installé.",
    longDescription:
      "Le Home Run Bar, un lieu de vie où toutes les générations se rencontrent Le est un bar situé à Bordeaux et est ouvert depuis 2022. Il est rapidement devenu un lieu de rendez-vous incontournable pour les habitants de la ville. Le bar est conçu comme un lieu de vie, avec une ambiance chaleureuse et animée. Il accueille toutes les générations, des jeunes aux moins jeunes, des couples aux célibataires, des supporters aux amateurs de sport.</br> Le Home Run Bar propose une large gamme de services et d'activités pour répondre à toutes les envies. Il dispose d'une tribune pour regarder les matchs sportifs, de tables de beer-pong pour les amateurs de ce jeu, d'un coin canapé pour se détendre et d'une grande terrasse avec vue sur les Bassins à Flot. Le Home Run Bar est un lieu où il fait bon vivre. L'ambiance est chaleureuse et animée, grâce à une équipe de barmans accueillants et à une programmation musicale variée.</br> Le bar propose des concerts, des soirées à thème et des événements sportifs pour animer ses soirées. Il est également possible de privatiser le bar pour des événements privés.</br> Des services et des activités pour tous, </br> Le Home Run Bar propose une large gamme de services et d'activités pour répondre à toutes les envies. </br> Les amateurs de sport peuvent regarder les matchs en direct sur la tribune, tandis que les amateurs de beer-pong peuvent s'affronter sur les tables mises à leur disposition. Un coin canapé permet de se détendre entre amis, et la grande terrasse offre une vue imprenable sur les Bassins à Flot.</br> Un lieu incontournable à Bordeaux </br> Le Home Run Bar est un lieu incontournable à Bordeaux. Il est le rendez-vous idéal pour passer une bonne soirée, que vous soyez seul, en couple, entre amis ou en famille.",
    ambianceDescription: "",
    price: "affordable",
    type: "vin",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "106 Quai Lawton, 33300 Bordeaux",
    openTime: "17h-02h",
    infos: "Rudby / Beerpong",
    linkMap: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2827.8405179163697!2d-0.5592044!3d44.8655414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55292ace4f83db%3A0x73beb848737c6f50!2sHome%20Run%20Bar!5e0!3m2!1sfr!2sfr!4v1696345148756!5m2!1sfr!2sfr`,
  },
  {
    id: 9,
    name: "Café Oz Bordeaux",
    img: "https://cafe-oz.com/image/front/pics/drinks-food/drinks_food.jpg",
    imgBar: "https://cafe-oz.com/upload/establishment/visual/10.jpg",
    shortDescription:
      "Pub, bar à ambiance musicale, restauration le midi, snacking le soir, retransmission d'événements sportifs sur écrans géants, soirées DJs... toute l'atmosphère 'no worries' caractéristique des bars australiens vient animer les quais de la Garonne. Avec une surface commerciale de 650 m² et d'une terrasse de 200 m², le Café Oz Bordeaux deviendra très vite le rendez-vous incontournable des bordelais.",
    longDescription:
      "Le Café Oz Bordeaux, un lieu où l'esprit australien règne Il est le premier Café Oz à ouvrir ses portes en France, et il est rapidement devenu un lieu incontournable de la vie nocturne bordelaise. Le Café Oz Bordeaux incarne l'authenticité de l'esprit australien, où la philosophie 'no worries' règne en maître. L'ambiance est décontractée et conviviale, et l'équipe est toujours prête à faire passer un bon moment aux clients. Le Café Oz Bordeaux est un lieu pour tous. Que vous soyez un amateur de sports, un mélomane ou un épicurien, vous trouverez votre bonheur.</br> Pour les amateurs de sports, le Café Oz Bordeaux dispose d'écrans géants pour suivre les derniers matchs de rugby, de football et d'autres sports. L'atmosphère est festive et animée.</br> Pour les mélomanes il organise régulièrement des soirées animées par des DJs locaux. L'ambiance est chaleureuse et festive et le menu est varié et gourmand.</br> En journée, le Café Oz Bordeaux est un lieu idéal pour se détendre et profiter d'une cuisine délicieuse. Le soir, l'ambiance se transforme et devient plus festive. C'est l'endroit idéal pour passer une bonne soirée entre amis ou en famille. Ce qui rend le Café Oz Bordeaux si spécial, c'est son atmosphère unique. Dès que vous franchissez les portes du bar, vous êtes transporté en Australie. La décoration, la musique et l'ambiance générale vous font sentir comme si vous étiez à l'autre bout du monde. C'est un lieu où l'on peut se détendre et s'amuser dans un cadre convivial et décontracté. C'est l'endroit idéal pour passer une soirée inoubliable entre amis ou en famille.",
    ambianceDescription: "",
    price: "affordable",
    type: "cocktails vin biere",
    location: "Bordeaux",
    coupDeCoeur: false,
    adress: "1 Quai Armand Lalande Hangar G2, 33300 Bordeaux",
    openTime: "12h-02h",
    infos: "Bar sportif",
    linkMap: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11311.885642907659!2d-0.5728528!3d44.8628768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55294812cba915%3A0xe9efe43c0727b8e!2sCaf%C3%A9%20Oz%20The%20Australian%20Bar%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1696345198500!5m2!1sfr!2sfr`,
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
    horairesInfo.innerHTML = barSelectionne.openTime; // todo

    const moreInfo = document.querySelector(".option-supplementaires span");
    moreInfo.innerHTML = barSelectionne.infos; // todo

    const btnLink = document.querySelector(".pop-up-button");
    btnLink.href = `bar-detail.html?id=${barId}`;
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

const overlayContainer = document.createElement("div");
overlayContainer.classList.add("overlay-container");

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
