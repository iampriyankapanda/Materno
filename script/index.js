const menuSelector = document.querySelector('.menu-button_js');

if (menuSelector) {
  menuSelector.addEventListener('click', showHideMenu);
}
function showHideMenu() {
  menuSelector.classList.toggle('active');
  const menuElement = document.querySelector('.left-navigation-menu');
  menuElement.classList.toggle('active');
}

//acknowledgement popup
document.querySelectorAll('.showHide-result_js').forEach((eachNode) => {
  eachNode.addEventListener('click', showHideAcknowledgePopup);
});
document
  .querySelector('.closePopup_js')
  .addEventListener('click', showHideAcknowledgePopup);
function showHideAcknowledgePopup(e) {
  e.stopPropagation();
  const resultPopup = document.querySelector('.acknowledge-results-wrapper');
  resultPopup.classList.toggle('active');
}

//forward popup
document.querySelectorAll('.forward-result_js').forEach((eachNode) => {
  eachNode.addEventListener('click', showHideForwardPopup);
});
document
  .querySelector('.closeForwardPopup_js')
  .addEventListener('click', showHideForwardPopup);

function showHideForwardPopup(e) {
  e.stopPropagation();
  const resultPopup = document.querySelector('.forward-result-wrapper');
  resultPopup.classList.toggle('active');
}

// lab-test-popoup
document.querySelectorAll('.results-card-wrapper').forEach((eachNode) => {
  eachNode.addEventListener('click', toogleLabTestPopup);
});
document
  .querySelector('.hideLabTestPopup_js')
  .addEventListener('click', toogleLabTestPopup);
function toogleLabTestPopup() {
  document
    .querySelector('.lab-test-result-popup-wrapper')
    .classList.toggle('active');
}
