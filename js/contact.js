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

// Afficher une alerte avec les données du formulaire
const nom = document.querySelector("#nom");

//   const surname = document.querySelector("#surname").value;
//   const email = document.querySelector("#email").value;
//   const message = document.querySelector("#message").value;

const btnSubmit = document.querySelector("#btn-submit");
btnSubmit.addEventListener("click", () => {
 
  const alertMessage = `Votre message a demande de contact a bien été envoyée`;
  alert(alertMessage);
});
