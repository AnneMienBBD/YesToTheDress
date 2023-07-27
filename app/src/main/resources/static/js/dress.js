import { TOP_PATHS, SKIRT_PATHS, SLEEVE_PATHS, TRAIN_PATHS, SHOE_PATHS, VEIL_PATHS, addToFavourites, Dress } from './constants.js';
// LOADING SCREEN --------------------------------------------------
const loadingSection = document.getElementById("loadingScreen");
function displayLoadingScreen() {
  loadingSection.classList.add("display");
}
function hideLoadingScreen() {
  loadingSection.classList.remove("display");
}
// END OF LOADING SCREEN -------------------------------------------

displayLoadingScreen();

let shoeCounter = 0;
const dressShoe = document.getElementById("dress-shoe");
const nextShoe = document.getElementById("shoe-button");
nextShoe.addEventListener("click", () => {
  shoeCounter++;
  if (shoeCounter >= SHOE_PATHS.length) {
    shoeCounter = 0;
  }
  dressShoe.src = SHOE_PATHS[shoeCounter];
  clearFavouriteButtonText();
});

let veilCounter = 0;
const dressVeil = document.getElementById("dress-veil");
const nextVeil = document.getElementById("veil-button");
nextVeil.addEventListener("click", () => {
  veilCounter++;
  if (veilCounter >= VEIL_PATHS.length) {
    veilCounter = 0;
  }
  dressVeil.src = VEIL_PATHS[veilCounter];
  clearFavouriteButtonText();
});

let sleeveCounter = 0;
const dressSleeves = document.getElementById("dress-sleeve");
const nextSleeves = document.getElementById("sleeves-button");
nextSleeves.addEventListener("click", () => {
  sleeveCounter++;
  if (sleeveCounter >= SLEEVE_PATHS.length) {
    sleeveCounter = 0;
  }
  dressSleeves.src = SLEEVE_PATHS[sleeveCounter];
  clearFavouriteButtonText();
});

let topCounter = 0;
const dressTop = document.getElementById("dress-top");
const nextTop = document.getElementById("top-button");
nextTop.addEventListener("click", () => {
  topCounter++;
  if (topCounter >= TOP_PATHS.length) {
    topCounter = 0;
  }
  dressTop.src = TOP_PATHS[topCounter];
  clearFavouriteButtonText();
});

let skirtCounter = 0;
const dressSkirt = document.getElementById("dress-skirt");
const nextSkirt = document.getElementById("skirt-button");
nextSkirt.addEventListener("click", () => {
  skirtCounter++;
  if (skirtCounter >= SKIRT_PATHS.length) {
    skirtCounter = 0;
  }
  dressSkirt.src = SKIRT_PATHS[skirtCounter];
  clearFavouriteButtonText();
});

let trainCounter = 0;
const dressTrain = document.getElementById("dress-train");
const nextTrain = document.getElementById("train-button");
nextTrain.addEventListener("click", () => {
  trainCounter++;
  if (trainCounter >= TRAIN_PATHS.length) {
    trainCounter = 0;
  }
  dressTrain.src = TRAIN_PATHS[trainCounter];
  clearFavouriteButtonText();
});

function goToFavourites() {
  displayLoadingScreen();
  window.location.href = "favourites";
}

const goToFavouritesButton = document.getElementById("go-to-favourites");
goToFavouritesButton.addEventListener("click", goToFavourites);

function clearFavouriteButtonText(){
  favouriteButton.innerText = "ADD TO FAVOURITES";
  favouriteButton.classList.remove("noDisplay");
}

function updateFavouritesButtonText(){
  const text = favouriteButton.innerText.trim();
  if (text === "ADD TO FAVOURITES") {
    favouriteButton.innerText = "ADDED";
    displayLoadingScreen();
    createFavourites();
    hideLoadingScreen();
  } else {
    animateHeart();
    favouriteButton.innerText = "ADD TO FAVOURITES";
    removeFromFavourites();
  }
}

async function createFavourites(){
  const newFavourites = new Dress(
    dressTrain.src,
    dressVeil.src,
    dressSleeves.src,
    dressShoe.src,
    dressSkirt.src,
    dressTop.src,
  )
  const result = await addToFavourites(newFavourites);
  if(result == 200){
    favouriteButton.classList.add("noDisplay");
  }else{
    window.location.href = "/login";
  }
}

async function removeFromFavourites() {
  // ----------------------------------------------------------------------------
  /* ADD REMOVE-FROM-FAVOURITES API CALL HERE */
  // ----------------------------------------------------------------------------
}

const favouriteButton = document.getElementById("add-to-favourites");
favouriteButton.addEventListener("click", updateFavouritesButtonText);

async function logout() {
  displayLoadingScreen();
  // ----------------------------------------------------------------------------
  /* ADD LOGOUT API CALL HERE */
  // ----------------------------------------------------------------------------
  const cognitoUser = userPool.getCurrentUser();

  if (cognitoUser) {
      cognitoUser.signOut();
      window.location.href = "/login";
  }
}

const logoutButton = document.getElementById("logout-button");
if(localStorage.getItem('jwt') == null){
  logoutButton.innerText = "LOGIN";
}else{
  logoutButton.innerText = "LOGOUT";
}
logoutButton.addEventListener("click", logout);

// trying to hide loading screen AFTER all images load - not really working though lmao
let imagesLoaded = 0;
let observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      imagesLoaded++;
      observer.unobserve(entry.target);
    }
  });

  if (imagesLoaded == images.length) {
    hideLoadingScreen();
  }
});

let images = document.querySelectorAll("img");
images.forEach(function (image) {
  observer.observe(image);
});
