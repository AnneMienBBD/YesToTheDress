import { TOP_PATH, SKIRT_PATH, SLEEVE_PATH, TRAIN_PATH, SHOE_PATH, VEIL_PATH  } from './constants.js';

// LOADING SCREEN --------------------------------------------------
const loadingSection = document.getElementById("loadingScreen");
function displayLoadingScreen() {
  loadingSection.classList.add("display");
}
function hideLoadingScreen() {
  loadingSection.classList.remove("display");
}
// displayLoadingScreen();
// END OF LOADING SCREEN -------------------------------------------

// LOGOUT  ---------------------------------------------------------------------
async function logout() {
  displayLoadingScreen();
  // ----------------------------------------------------------------------------
  /* ADD LOGOUT API CALL HERE */
  // ----------------------------------------------------------------------------
  window.location.href = "login.html";
}
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", logout);

// NAVIGATE TO HOME PAGE --------------------------------------------------------
const goToDressButton = document.getElementById("go-to-dress");
goToDressButton.addEventListener("click", () => {
  displayLoadingScreen();
  window.location.href = "/";
});

function removeFromFavourites(dressCounter) {
  displayLoadingScreen();
  // ----------------------------------------------------------------------------
  /* ADD REMOVE FROM FAVOURITES API CALL HERE */
  // ----------------------------------------------------------------------------
  // And then visually remove:
  favouriteDresses.splice(dressCounter, 1);
  numDresses--;
  initializeCarousel();
}

function createDressImage(dress, dressCounter) {
  const dressImage = document.createElement("div");
  dressImage.classList.add("dress-image");

  const skirtImage = document.createElement("img");
  skirtImage.src = dress.skirt;
  skirtImage.style.position = "absolute";
  skirtImage.style.top = "10vh";
  skirtImage.style.left = dressCounter * (90 / numDresses) + 5 + "vw";
  skirtImage.style.width = 90 / numDresses + "vw";
  dressImage.appendChild(skirtImage);

  const topImage = document.createElement("img");
  topImage.src = dress.top;
  topImage.style.position = "absolute";
  topImage.style.top = "10vh";
  topImage.style.left = dressCounter * (90 / numDresses) + 5 + "vw";
  topImage.style.width = 90 / numDresses + "vw";
  dressImage.appendChild(topImage);

  const removeButton = document.createElement("button");
  removeButton.style.position = "absolute";
  removeButton.style.top = "30vh";
  removeButton.style.left = dressCounter * (90 / numDresses) + 5 + "vw";
  removeButton.style.width = "fit-content";
  removeButton.innerText = "Remove ❤";
  removeButton.style.padding = "0 2% 0 2%";
  removeButton.classList.add("remove-from-favourites-button");

  removeButton.addEventListener("click", () => {
    removeFromFavourites(dressCounter);
  });

  dressImage.appendChild(removeButton);
  return dressImage;
}

function initializeCarousel(favouriteDresses) {
  const carouselContainer = document.querySelector(".carousel");
  carouselContainer.innerHTML = "";
  let dressCounter = 0;
  favouriteDresses.forEach((dress) => {
    console.log(dress.top);
    const dressImage = createDressImage(dress, dressCounter);
    carouselContainer.appendChild(dressImage);
    dressCounter++;
  });
}

class Dress {
  constructor(top, skirt, sleeve, veil, train, shoe) {
    this.top = top;
    this.skirt = skirt;
    this.sleeve = sleeve;
    this.veil = veil;
    this.train = train;
    this.shoe = shoe;
  }
}

let numDresses = 0;

const backendFavouriteDresses = [];
async function getFavourites() {
  const response = await fetch("/dress/byUser/{userID}");
  const favouritesData = await response.json();
  for (const element of favouritesData) {
    backendFavouriteDresses.add(
      new Dress(
        element.top,
        element.skirt,
        element.sleeve,
        element.veil,
        element.train,
        element.shoe
      )
    );
  }

  const favouriteDresses = [];
  numDresses = 0;
  for (const dress of backendFavouriteDresses) {
    numDresses++;
    favouriteDresses.push({
      top: TOP_PATH + dress.top + ".png",
      skirt: SKIRT_PATH + dress.skirt + ".png",
      sleeve: SLEEVE_PATH + dress.sleeve + ".png",
      veil: VEIL_PATH + dress.veil + ".png",
      train: TRAIN_PATH + dress.train + ".png",
      shoe: SHOE_PATH + dress.shoe + ".png",
    });
  }

  initializeCarousel(favouriteDresses);
  hideLoadingScreen();
}

window.addEventListener("load", getFavourites());
