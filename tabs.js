let aboutBtnEl = document.getElementById("aboutButton");
let timeToVisitBtnEl = document.getElementById("timeToVisitButton");
let attractionsBtnEl = document.getElementById("attractionsButton");

let aboutContent = document.getElementById("aboutContent");
let timeToVisit = document.getElementById("timeToVisitContent");
let attractionsContent = document.getElementById("attractionsContent");

aboutBtnEl.classList.add("selected-button");

timeToVisit.classList.add("tab-content-display");
attractionsContent.classList.add("tab-content-display");

function aboutButton() {
  aboutBtnEl.classList.add("selected-button");
  timeToVisitBtnEl.classList.remove("selected-button");
  attractionsBtnEl.classList.remove("selected-button");

  aboutContent.classList.remove("tab-content-display");
  timeToVisit.classList.add("tab-content-display");
  attractionsContent.classList.add("tab-content-display");
}

function timeToVisitButton() {
  aboutBtnEl.classList.remove("selected-button");
  timeToVisitBtnEl.classList.add("selected-button");
  attractionsBtnEl.classList.remove("selected-button");

  aboutContent.classList.add("tab-content-display");
  timeToVisit.classList.remove("tab-content-display");
  attractionsContent.classList.add("tab-content-display");
}

function attractionsButton() {
  aboutBtnEl.classList.remove("selected-button");
  timeToVisitBtnEl.classList.remove("selected-button");
  attractionsBtnEl.classList.add("selected-button");

  aboutContent.classList.add("tab-content-display");
  timeToVisit.classList.add("tab-content-display");
  attractionsContent.classList.remove("tab-content-display");
}
