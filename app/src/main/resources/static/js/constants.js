export const TOP_PATH = "./images/tops/";
export const TOP_NAMES = new Array(
  "asymmetric",
  "scoop",
  "sweetheart",
  "vneck"
);
export const TOP_PATHS = new Array(
  "./images/tops/" + TOP_NAMES[0] + ".png",
  "./images/tops/" + TOP_NAMES[1] + ".png",
  "./images/tops/" + TOP_NAMES[2] + ".png",
  "./images/tops/" + TOP_NAMES[3] + ".png"
);

export const SKIRT_PATH = "./images/skirts/";
export const SKIRT_NAMES = new Array(
  "ballgown",
  "aline",
  "mermaid",
  "trumpet"
);
export const SKIRT_PATHS = new Array(
  "./images/skirts/" + SKIRT_NAMES[0] + ".png",
  "./images/skirts/" + SKIRT_NAMES[1] + ".png",
  "./images/skirts/" + SKIRT_NAMES[2] + ".png",
  "./images/skirts/" + SKIRT_NAMES[3] + ".png"
);

export const SLEEVE_PATH = "./images/sleeves/";
export const SLEEVE_NAMES = new Array(
  "highNeck",
  "long",
  "none",
  "offShoulder"
);
export const SLEEVE_PATHS = new Array(
  "./images/sleeves/" + SLEEVE_NAMES[0] + ".png",
  "./images/sleeves/" + SLEEVE_NAMES[1] + ".png",
  "./images/sleeves/" + SLEEVE_NAMES[2] + ".png",
  "./images/sleeves/" + SLEEVE_NAMES[3] + ".png"
);

export const TRAIN_PATH = "./images/trains/";
export const TRAIN_NAMES = new Array(
  "none",
  "train",
);
export const TRAIN_PATHS = new Array(
  "./images/trains/" + TRAIN_NAMES[0] + ".png",
  "./images/trains/" + TRAIN_NAMES[1] + ".png"
);

export const SHOE_PATH = "./images/shoes/";
export const SHOE_NAMES = new Array(
  "black",
  "white"
);
export const SHOE_PATHS = new Array(
  "./images/shoes/" + SHOE_NAMES[0] + ".png",
  "./images/shoes/" + SHOE_NAMES[1] + ".png"
);

export const VEIL_PATH = "./images/veils/";
export const VEIL_NAMES = new Array(
  "none",
  "short"
);
export const VEIL_PATHS = new Array(
  "./images/veils/" + VEIL_NAMES[0] + ".png",
  "./images/veils/" + VEIL_NAMES[1] + ".png"
);

export const DRESS_ITEM = {
  TOP: 'TOP',
  SKIRT: 'SKIRT',
  SLEEVES: 'SLEEVES',
  TRAIN: 'TRAIN',
  SHOES: 'SHOES',
  VEIL: 'VEIL'
};

export const SILHOUETTE_PATH = "./images/silhouette.png";

export class Dress { // train > veil > silhouette > sleeves > shoes > skirts > tops
  constructor(trainPath, veilPath, sleevePath, shoePath, skirtPath, topPath) {
    this.train = trainPath;
    this.veil = veilPath;
    this.silhouette = SILHOUETTE_PATH;
    this.sleeve = sleevePath;
    this.shoe = shoePath;
    this.skirt = skirtPath;
    this.top = topPath;
  }
} 

export async function addToFavourites(dress) {
  const dressIndices = {
    topID: TOP_NAMES.indexOf(dress.top.split("/").pop().split(".")[0]) + 1,
    skirtID: SKIRT_NAMES.indexOf(dress.skirt.split("/").pop().split(".")[0]) + 1,
    trainID: TRAIN_NAMES.indexOf(dress.train.split("/").pop().split(".")[0]) + 1,
    shoesID: SHOE_NAMES.indexOf(dress.shoe.split("/").pop().split(".")[0]) + 1,
    sleeveID: SLEEVE_NAMES.indexOf(dress.sleeve.split("/").pop().split(".")[0]) + 1,
    veilID: VEIL_NAMES.indexOf(dress.veil.split("/").pop().split(".")[0]) + 1
  }

  const response = await fetch('/dress', {
    method: 'POST',
    body: JSON.stringify(dressIndices),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response.status;
}