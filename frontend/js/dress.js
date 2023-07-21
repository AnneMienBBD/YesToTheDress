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
  "./images/tops/top_asymmetric.png",
  "./images/tops/top_scoop.png",
  "./images/tops/top_sweetheart.png",
  "./images/tops/top_vneck.png"
);
let skirtCounter = 0;
const skirtArray = new Array(
  "./images/skirts/skirt_ballgown.png",
  "./images/skirts/skirt_line.png",
  "./images/skirts/skirt_mermaid.png",
  "./images/skirts/skirt_trumpet.png"
);

arrowTopLeft.addEventListener("click", () => {
  topCounter++;
  if (topCounter >= topArray.length) {
    topCounter = 0;
  }
  dressTop.src = topArray[topCounter];
});

arrowTopRight.addEventListener("click", () => {
  topCounter--;
  if (topCounter < 0) {
    topCounter = topArray.length - 1;
  }
  dressTop.src = topArray[topCounter];
});

arrowSkirtLeft.addEventListener("click", () => {
  skirtCounter++;
  if (skirtCounter >= skirtArray.length) {
    skirtCounter = 0;
  }
  dressSkirt.src = skirtArray[skirtCounter];
});

arrowSkirtRight.addEventListener("click", () => {
  skirtCounter--;
  if (skirtCounter < 0) {
    skirtCounter = skirtArray.length - 1;
  }
  dressSkirt.src = skirtArray[skirtCounter];
});

async function goToFavourites() {
  displayLoadingScreen();
  // DO LOGOUT STUFF HERE
  window.location.href = "favourites.html";
}

const goToFavouritesButton = document.getElementById("go-to-favourites");
goToFavouritesButton.addEventListener("click", goToFavourites);

async function addToFavourites() {
  const text = favouriteButton.innerText.trim();
  if (text === "♡") {
    favouriteButton.innerText = "❤";
    favouriteButton.classList.remove("heart-button");
  } else {
    favouriteButton.classList.add("heart-button");
    favouriteButton.innerText = "♡";
  }
}

const favouriteButton = document.getElementById("add-to-favourites");
favouriteButton.addEventListener("click", addToFavourites);

async function logout() {
  displayLoadingScreen();
  // DO LOGOUT STUFF HERE
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
