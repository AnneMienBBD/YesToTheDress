import { TOP_PATH, TOP_NAMES, SKIRT_PATH, SKIRT_NAMES } from './constants.js';

// LOADING SCREEN --------------------------------------------------
const loadingSection = document.getElementById("loadingScreen");
function displayLoadingScreen() {
  loadingSection.classList.add("display");
}
function hideLoadingScreen() {
  loadingSection.classList.remove("display");
}
displayLoadingScreen();
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
  window.location.href = "index.html";
});

// GET FAVOURITES SECTION--------------------------------------------------------
// ARRAY EXPECTED FROM BACKEND: 
const backendFavouriteDresses = [
  [
    TOP_NAMES[0], // topNameFromDb,
    SKIRT_NAMES[0], // skirtNameFromDb,
    // sleeveNameFromDb,
    // veilNameFromDb,
    // trainNameFromDb,
    // shoeNameFromDb
  ],
  [
    TOP_NAMES[1], // topNameFromDb,
    SKIRT_NAMES[1], // skirtNameFromDb,
    // sleeveNameFromDb,
    // veilNameFromDb,
    // trainNameFromDb,
    // shoeNameFromDb
  ],
  [
    TOP_NAMES[2], // topNameFromDb,
    SKIRT_NAMES[2], // skirtNameFromDb,
    // sleeveNameFromDb,
    // veilNameFromDb,
    // trainNameFromDb,
    // shoeNameFromDb
  ],
  [
    TOP_NAMES[3], // topNameFromDb,
    SKIRT_NAMES[3], // skirtNameFromDb,
    // sleeveNameFromDb,
    // veilNameFromDb,
    // trainNameFromDb,
    // shoeNameFromDb
  ],
]
const favouriteDresses = [];
for(const dress of backendFavouriteDresses){
  favouriteDresses.push([
    TOP_PATH + dress[0] + ".png",
    SKIRT_PATH + dress[1] + ".png",
    // SLEEVE_PATH + dress[2] + ".png",
    // VEIL_PATH + dress[3] + ".png",
    // TRAIN_PATH + dress[4] + ".png",
    // SHOE_PATH + dress[5] + ".png",
  ]);
}

const favouriteDressObjects = new Array(
  document.getElementById("favourite-dress-0"),
  document.getElementById("favourite-dress-1"),
  document.getElementById("favourite-dress-2"),
  document.getElementById("favourite-dress-3"),
);


for(let i = 0; i < favouriteDressObjects.length; i++){
  const o = favouriteDressObjects[i];
  o.querySelectorAll('img:nth-child(2)')[0].src = favouriteDresses[i][0]; // top
  o.querySelectorAll('img:nth-child(3)')[0].src = favouriteDresses[i][1]; // skirt
  // o.querySelectorAll('img:nth-child(4)')[0].src = favouriteDresses[i][2]; // sleeves
  // o.querySelectorAll('img:nth-child(5)')[0].src = favouriteDresses[i][3]; // veil
  // o.querySelectorAll('img:nth-child(6)')[0].src = favouriteDresses[i][4]; // train
  // o.querySelectorAll('img:nth-child(6)')[0].src = favouriteDresses[i][4]; // shoes
}

// This needs to be improved further: 
// ADD TO FAVOURITES ------------------------------------------------------------
async function addToFavourites(index, floatyHeart, favouriteButton) {
  const text = floatyHeart.innerText.trim();

  if (text === "♡") {
    floatyHeart.innerText = "❤";
    favouriteButton.classList.remove("heart-button");
  } else {
    favouriteButton.classList.add("heart-button");
    floatyHeart.style.animation = "flutterUp 4s forwards";
    setTimeout(() => {
      floatyHeart.style.animation = "";
    }, 4000);
    floatyHeart.innerText = "♡";
  }
  // ----------------------------------------------------------------------------
  /* ADD ADD-TO-FAVOURITES API CALL HERE */
  // ----------------------------------------------------------------------------
}
const floatyHeart0 = document.getElementById("floaty-heart-0");
const favouriteButton0 = document.getElementById("favourites-0");
favouriteButton0.addEventListener(
  "click",
  addToFavourites(0, floatyHeart0, favouriteButton0)
);

const floatyHeart1 = document.getElementById("floaty-heart-1");
const favouriteButton1 = document.getElementById("favourites-1");
favouriteButton1.addEventListener(
  "click",
  addToFavourites(1, floatyHeart1, favouriteButton1)
);

const floatyHeart2 = document.getElementById("floaty-heart-2");
const favouriteButton2 = document.getElementById("favourites-2");
favouriteButton2.addEventListener(
  "click",
  addToFavourites(2, floatyHeart2, favouriteButton2)
);

const floatyHeart3 = document.getElementById("floaty-heart-3");
const favouriteButton3 = document.getElementById("favourites-3");
favouriteButton3.addEventListener(
  "click",
  addToFavourites(3, floatyHeart3, favouriteButton3)
);

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
