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
        style="background-image: url('media/cafe-neon.jpg')"
      ></div>
    </div>

    <div class="container container-modele-bar">
      <div class="container-infos-bar">
        <h1>My beers</h1>
        <span class="bar-name"> Catégorie : Bar à bières</span>

        <div class="icons-bar">
          <div class="icon1">
            <img src="/assets/dollar.png" alt="" />
            <span>Dansant</span>
          </div>
          <div class="icon2">
            <img src="/assets/dollar.png" alt="" />
            <span>Lieu insolite</span>
          </div>
        </div>
      </div>

      <div class="container-title-info">
        <h3>Quelques infos</h3>
      </div>

      <div class="container-full-description" ->
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, enim
          rerum ipsam est cumque, commodi quibusdam harum voluptatum
          exercitationem vitae dolores, repudiandae deleniti incidunt quam!
          Animi praesentium ab commodi molestiae. Non aperiam sequi explicabo
          alias, minima dicta nostrum! In assumenda facilis optio ullam,
          quisquam, laboriosam sequi velit numquam molestiae provident
          nesciunt vel perferendis reiciendis nam voluptates similique sint
          minima ex? Molestiae impedit pariatur officia, placeat accusamus
          adipisci incidunt excepturi veniam sunt officiis corporis maiores
          eos ipsam quisquam tempora est, voluptatem magnam, mollitia soluta
          aliquid in iste? Soluta quod inventore illum!
        </p>
        <div class="container img-quelques-infos"></div>
      </div>
    </div>
    <div class="container-max">
      <div class="container container-ambiance" ->
        <h3>L'ambiance et l'univers</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, enim
          rerum ipsam est cumque, commodi quibusdam harum voluptatum
          exercitationem vitae dolores, repudiandae deleniti incidunt quam!
          Animi praesentium ab commodi molestiae. Non aperiam sequi explicabo
          alias, minima dicta nostrum! In assumenda facilis optio ullam,
          quisquam, laboriosam sequi velit numquam molestiae provident
          nesciunt vel perferendis reiciendis nam voluptates similique sint
          minima ex? Molestiae impedit pariatur officia, placeat accusamus
          adipisci incidunt excepturi veniam sunt officiis corporis maiores
          eos ipsam quisquam tempora est, voluptatem magnam, mollitia soluta
          aliquid in iste? Soluta quod inventore illum! Non aperiam sequi
          explicabo alias, minima dicta nostrum! In assumenda facilis optio
          ullam, quisquam, laboriosam sequi velit numquam molestiae provident
          nesciunt vel perferendis reiciendis nam voluptates similique sint
          minima ex?
        </p>
      </div>
    </div>
    <div class="container">
      <div class="container-specialites">
        <div class="specialites-left"></div>
        <div class="specialites-right">
          <h3>Quelques spécialités</h3>
          <p>
            Découvrez notre 'IPA Cascade Cascade' - une explosion d'arômes
            d'agrumes et de notes florales, brassée localement avec des
            houblons Cascade frais. Son profil unique en fait un
            incontournable pour les amateurs de bières houblonnées. Une
            expérience sensorielle qui réveillera vos papilles. "Plongez dans
            l'univers de notre 'Stout Impériale au Café Noir', une fusion
            audacieuse de grains torréfiés et de café artisanal. Sa texture
            veloutée et son goût riche en font une expérience inoubliable pour
            les amateurs de bières sombres. Laissez-vous surprendre par cette
            création unique, symbole de notre passion pour l'artisanat
            brassicole."
          </p>
        </div>
      </div>
    </div>
    <div class="container-max">
      <div class="container container-horaires">
        <h3>Infos générales</h3>
        <div class="infos-genriques">
          <div class="adresse">
            <img src="assets/dollar.png" alt="" />
            <span>30 Quai Virginie Hériot, 33300 Bordeaux</span>
          </div>
          <div class="horaires">
            <img src="assets/dollar.png" alt="" />
            <span>Lundi au samedi : 16h - 02h</span>
          </div>
          <div class="option-supplementaires">
            <img src="assets/dollar.png" alt="" />
            <span> Happy hours tous les jours de 16h à 20h</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781137.9506807565!2d-1.8405982541953783!3d43.87331476487897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55291a454527fd%3A0xe5a9bb6c46321064!2sMy%20Beers%20-%20Bassins%20%C3%A0%20Flot%20-%20Bar%20%C3%A0%20bi%C3%A8re%20pr%C3%A8s%20de%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1695976340475!5m2!1sfr!2sfr"
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
