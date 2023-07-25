import { TOP_PATH, TOP_NAMES, SKIRT_PATH, SKIRT_NAMES } from './constants.js';

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

function removeFromFavourites(dressCounter){
  // ADD CALL TO REMOVE FROM DB HERE
  // And then visually remove: 
  favouriteDresses.splice(dressCounter, 1);
  numDresses--;
  initializeCarousel();
}

// GET FAVOURITES SECTION--------------------------------------------------------
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

const exampleDress1 = new Dress("asymmetric", "aline");
const exampleDress2 = new Dress("scoop", "ballgown");
const exampleDress3 = new Dress("sweetheart", "mermaid");
const exampleDress4 = new Dress("asymmetric", "mermaid");

// This is what we expect from backend-------------------------------------------
const backendFavouriteDresses = [
  exampleDress1, exampleDress2, exampleDress3, exampleDress4, exampleDress4, exampleDress4, exampleDress4, exampleDress4
]

const favouriteDresses = [];
let numDresses = 0;
for(const dress of backendFavouriteDresses){
  numDresses++;
  favouriteDresses.push({
    top: TOP_PATH + dress.top + ".png",
    skirt: SKIRT_PATH + dress.skirt + ".png",
    // SLEEVE_PATH + dress[2] + ".png",
    // VEIL_PATH + dress[3] + ".png",
    // TRAIN_PATH + dress[4] + ".png",
    // SHOE_PATH + dress[5] + ".png",
  });
}

function createDressImage(dress, dressCounter) {
  const dressImage = document.createElement('div');
  dressImage.classList.add('dress-image');

  const skirtImage = document.createElement('img');
  skirtImage.src = dress.skirt;
  skirtImage.style.position = "absolute";
  skirtImage.style.top = "10vh";
  skirtImage.style.left = (dressCounter*(90/numDresses)+5) + "vw";
  skirtImage.style.width = 90/numDresses + "vw";
  dressImage.appendChild(skirtImage);

  const topImage = document.createElement('img');
  topImage.src = dress.top;
  topImage.style.position = "absolute";
  topImage.style.top = "10vh";
  topImage.style.left = (dressCounter*(90/numDresses)+5) + "vw";
  topImage.style.width = 90/numDresses + "vw";
  dressImage.appendChild(topImage);

  const removeButton = document.createElement('button');
  removeButton.style.position = "absolute";
  removeButton.style.top = "30vh";
  removeButton.style.left = (dressCounter*(90/numDresses)+5) + "vw";
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

function initializeCarousel() {
  const carouselContainer = document.querySelector('.carousel');
  carouselContainer.innerHTML = "";
  let dressCounter = 0;
  favouriteDresses.forEach((dress) => {
    console.log(dress.top);
    const dressImage = createDressImage(dress, dressCounter);
    carouselContainer.appendChild(dressImage);
    dressCounter++;
  });
}

document.addEventListener('DOMContentLoaded', initializeCarousel);








// // This needs to be improved further: 
// // ADD TO FAVOURITES ------------------------------------------------------------
// async function addToFavourites(index, floatyHeart, favouriteButton) {
//   const text = floatyHeart.innerText.trim();

//   if (text === "♡") {
//     floatyHeart.innerText = "❤";
//     favouriteButton.classList.remove("heart-button");
//   } else {
//     favouriteButton.classList.add("heart-button");
//     floatyHeart.style.animation = "flutterUp 4s forwards";
//     setTimeout(() => {
//       floatyHeart.style.animation = "";
//     }, 4000);
//     floatyHeart.innerText = "♡";
//   }
//   // ----------------------------------------------------------------------------
//   /* ADD ADD-TO-FAVOURITES API CALL HERE */
//   // ----------------------------------------------------------------------------
// }
// const floatyHeart0 = document.getElementById("floaty-heart-0");
// const favouriteButton0 = document.getElementById("favourites-0");
// favouriteButton0.addEventListener(
//   "click",
//   addToFavourites(0, floatyHeart0, favouriteButton0)
// );

// const floatyHeart1 = document.getElementById("floaty-heart-1");
// const favouriteButton1 = document.getElementById("favourites-1");
// favouriteButton1.addEventListener(
//   "click",
//   addToFavourites(1, floatyHeart1, favouriteButton1)
// );

// const floatyHeart2 = document.getElementById("floaty-heart-2");
// const favouriteButton2 = document.getElementById("favourites-2");
// favouriteButton2.addEventListener(
//   "click",
//   addToFavourites(2, floatyHeart2, favouriteButton2)
// );

// const floatyHeart3 = document.getElementById("floaty-heart-3");
// const favouriteButton3 = document.getElementById("favourites-3");
// favouriteButton3.addEventListener(
//   "click",
//   addToFavourites(3, floatyHeart3, favouriteButton3)
// );

// // trying to hide loading screen AFTER all images load - not really working though lmao
// let imagesLoaded = 0;
// let observer = new IntersectionObserver(function (entries) {
//   entries.forEach(function (entry) {
//     if (entry.isIntersecting) {
//       imagesLoaded++;
//       observer.unobserve(entry.target);
//     }
//   });

//   if (imagesLoaded == images.length) {
//     hideLoadingScreen();
//   }
// });

// let images = document.querySelectorAll("img");
// images.forEach(function (image) {
//   observer.observe(image);
// });
