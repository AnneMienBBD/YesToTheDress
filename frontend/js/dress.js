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
