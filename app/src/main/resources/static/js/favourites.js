import { TOP_PATHS, SKIRT_PATHS, SLEEVE_PATHS, TRAIN_PATHS, SHOE_PATHS, VEIL_PATHS, Dress } from './constants.js';

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

  getFavourites();
}

function createDressImage(dress, dressCounter) {
  const dressImage = document.createElement("div");
  dressImage.classList.add("dress-image");

  for (const item in dress) {    
    if (dress.hasOwnProperty(item)) {
      const image = document.createElement("img");
      image.src = dress[item];
      image.style.position = "absolute";
      image.style.top = "10vh";
      image.style.left = dressCounter * (90 / numDresses) + 5 + "vw";
      image.style.width = 90 / numDresses + "vw";
      image.style.maxHeight = "80vh";
      image.style.objectFit = "contain";
      dressImage.appendChild(image);
    }
  }

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
    const dressImage = createDressImage(dress, dressCounter);
    carouselContainer.appendChild(dressImage);
    dressCounter++;
  });
}



let numDresses = 0;

let favouriteDresses = [];
async function getFavourites() {
  favouriteDresses = [];
  const response = await fetch("/getFavourites");
  const favouritesData = await response.json();

  numDresses = 0;
  for (const element of favouritesData) {

    if(element.topID == null){
      element.topID = 1;
    }
    if(element.skirtID == null){
      element.skirtID = 1;
    }
    if(element.sleeveID == null){
      element.sleeveID = 1;
    }
    if(element.veilID == null){
      element.veilID = 1;
    }
    if(element.trainID == null){
      element.trainID = 1;
    }
    if(element.shoesID == null){
      element.shoesID = 1;
    }
    numDresses++;
    favouriteDresses.push(
      new Dress(
        TRAIN_PATHS[element.trainID-1],
        VEIL_PATHS[element.veilID-1],
        SLEEVE_PATHS[element.sleeveID-1],
        SHOE_PATHS[element.shoesID-1],
        SKIRT_PATHS[element.skirtID-1],
        TOP_PATHS[element.topID-1],
      )
    );
  }
  if(numDresses > 0){
    initializeCarousel(favouriteDresses);
  }else{

  }
  hideLoadingScreen();
}

window.addEventListener("load", getFavourites());
