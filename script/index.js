const menuSelector = document.querySelector(".menu-button_js");
const acknowledgementResult = document.querySelectorAll(".showHide-result_js");
const acknowledgementResultClose = document.querySelector(".closePopup_js");
const forwardResult = document.querySelectorAll(".forward-result_js");
const forwardResultClose = document.querySelector(".closeForwardPopup_js");
const resultCard = document.querySelectorAll(".results-card-wrapper");
const resultCardClose = document.querySelector(".hideLabTestPopup_js");

if (menuSelector) {
  menuSelector.addEventListener("click", showHideMenu);
}
function showHideMenu() {
  menuSelector.classList.toggle("active");
  const menuElement = document.querySelector(".left-navigation-menu");
  menuElement.classList.toggle("active");
}

//acknowledgement popup
if (acknowledgementResult) {
  acknowledgementResult.forEach((eachNode) => {
    eachNode.addEventListener("click", showHideAcknowledgePopup);
  });
}
if (acknowledgementResultClose) {
  acknowledgementResultClose.addEventListener(
    "click",
    showHideAcknowledgePopup
  );
}

function showHideAcknowledgePopup(e) {
  e.stopPropagation();
  const resultPopup = document.querySelector(".acknowledge-results-wrapper");
  resultPopup.classList.toggle("active");
}

//forward popup
if (forwardResult) {
  forwardResult.forEach((eachNode) => {
    eachNode.addEventListener("click", showHideForwardPopup);
  });
}
if (forwardResultClose) {
  forwardResultClose.addEventListener("click", showHideForwardPopup);
}

function showHideForwardPopup(e) {
  e.stopPropagation();
  const resultPopup = document.querySelector(".forward-result-wrapper");
  resultPopup.classList.toggle("active");
}

// lab-test-popoup
if (resultCard) {
  resultCard.forEach((eachNode) => {
    eachNode.addEventListener("click", toogleLabTestPopup);
  });
}

if (resultCardClose) {
  resultCardClose.addEventListener("click", toogleLabTestPopup);
}
function toogleLabTestPopup() {
  const selector = document.querySelector(".lab-test-result-popup-wrapper");
  if (selector) {
    selector.classList.toggle("active");
  }
}
