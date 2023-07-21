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

const arrowTopLeft = document.getElementById("arrow-top-left");
const arrowTopRight = document.getElementById("arrow-top-right");
const arrowSkirtLeft = document.getElementById("arrow-skirt-left");
const arrowSkirtRight = document.getElementById("arrow-skirt-right");

const dressTop = document.getElementById("dress-top");
const dressSkirt = document.getElementById("dress-skirt");

let topCounter = 0;
const topArray = new Array(
  "asymmetric.png",
  "scoop.png",
  "sweetheart.png",
  "vneck.png"
);
const topPathArray = new Array(
  "./images/tops/" + topArray[0],
  "./images/tops/" + topArray[1],
  "./images/tops/" + topArray[2],
  "./images/tops/" + topArray[3]
);

let skirtCounter = 0;
const skirtArray = new Array(
  "ballgown.png",
  "aline.png",
  "mermaid.png",
  "trumpet.png"
);
const skirtPathArray = new Array(
  "./images/skirts/" + skirtArray[0],
  "./images/skirts/" + skirtArray[1],
  "./images/skirts/" + skirtArray[2],
  "./images/skirts/" + skirtArray[3]
);

arrowTopLeft.addEventListener("click", () => {
  topCounter++;
  if (topCounter >= topArray.length) {
    topCounter = 0;
  }
  dressTop.src = topPathArray[topCounter];
});

arrowTopRight.addEventListener("click", () => {
  topCounter--;
  if (topCounter < 0) {
    topCounter = topArray.length - 1;
  }
  dressTop.src = topPathArray[topCounter];
});

arrowSkirtLeft.addEventListener("click", () => {
  skirtCounter++;
  if (skirtCounter >= skirtArray.length) {
    skirtCounter = 0;
  }
  dressSkirt.src = skirtPathArray[skirtCounter];
});

arrowSkirtRight.addEventListener("click", () => {
  skirtCounter--;
  if (skirtCounter < 0) {
    skirtCounter = skirtArray.length - 1;
  }
  dressSkirt.src = skirtPathArray[skirtCounter];
});

function goToFavourites() {
  displayLoadingScreen();
  window.location.href = "favourites.html";
}

const goToFavouritesButton = document.getElementById("go-to-favourites");
goToFavouritesButton.addEventListener("click", goToFavourites);

function animateHeart() {
  floatyHeart.style.animation = 'flutterUp 4s forwards';
  setTimeout(() => {
    floatyHeart.style.animation = '';
  }, 4000);
}

async function addToFavourites() {
  const text = floatyHeart.innerText.trim();

  if (text === "♡") {
    floatyHeart.innerText = "❤";
    favouriteButton.classList.remove("heart-button");
  } else {
    favouriteButton.classList.add("heart-button");
    animateHeart();
    floatyHeart.innerText = "♡";
  }
  // ----------------------------------------------------------------------------
  /* ADD ADD-TO-FAVOURITES API CALL HERE */
  // ----------------------------------------------------------------------------
}
const floatyHeart = document.getElementById('floaty-heart');
const favouriteButton = document.getElementById("add-to-favourites");
favouriteButton.addEventListener("click", addToFavourites);

async function logout() {
  displayLoadingScreen();
  // ----------------------------------------------------------------------------
  /* ADD LOGOUT API CALL HERE */
  // ----------------------------------------------------------------------------
  window.location.href = "login.html";
}

const logoutButton = document.getElementById("logout-button");
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
