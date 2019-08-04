var navLinks = document.getElementsByClassName("nav__link");
var modalsBg = document.getElementsByClassName("modal-bg");
var closeButtons = document.getElementsByClassName("modal-close__btn");
var choiceOptions = document.getElementsByClassName("choice-container__icon");
var gameOptions = document.getElementsByClassName("game-options__item");
var startGameBtn = document.getElementsByClassName("btn");
var formBg = document.getElementsByClassName("form-bg");
var openedModalBg, activeNavItem, selectedType, username;

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", onNavItemClick);
  closeButtons[i].addEventListener("click", onCloseModalButtonClick);
  modalsBg[i].addEventListener("click", onClickOutsideModalAndNav);
}

for (var i = 0; i < gameOptions.length; i++) {
  gameOptions[i].addEventListener("click", onGameTypeClick);
}

startGameBtn[0].addEventListener("click", getUserName);
startGameBtn[0].addEventListener("click", startGame);

function startGame() {
  if (!selectedType || !username) {
    return alert(
      "If you want to start a game please specify your name and select game type"
    );
  }
  view.gameType = selectedType.dataset.value;
  view.username = username;
  formBg[0].style.visibility = "hidden";
}

function getUserName() {
  username = document.getElementsByClassName("input--text")[0].value;
}

function onGameTypeClick(e) {
  if (selectedType != null) {
    unselectGameType();
  }
  selectGameType(e);
}

function unselectGameType() {
  selectedType.classList.remove("game-options__item--active");
  selectedType = null;
}

function selectGameType(e) {
  selectedType = e.currentTarget;
  selectedType.classList.add("game-options__item--active");
}

function onNavItemClick(e) {
  if (openedModalBg != null) {
    closeModal();
    cancelActiveNavItem();
  }
  openModal(e);
  makeActiveNavItem(e);
}

function onClickOutsideModalAndNav(e) {
  if (e.target == openedModalBg) {
    closeModal();
    cancelActiveNavItem();
  }
}

function onCloseModalButtonClick(e) {
  closeModal();
  cancelActiveNavItem();
}

function openModal(e) {
  openedModalBg = e.currentTarget.nextElementSibling;
  openedModalBg.style.visibility = "visible";
}

function closeModal() {
  openedModalBg.style.visibility = "hidden";
  openedModalBg = null;
}

function cancelActiveNavItem() {
  activeNavItem.classList.remove("nav__link--active");
  activeNavItem = null;
}

function makeActiveNavItem(e) {
  activeNavItem = e.currentTarget;
  activeNavItem.classList.add("nav__link--active");
}

for (var i = 0; i < choiceOptions.length; i++) {
  choiceOptions[i].addEventListener("click", selectedOption);
}

function selectedOption(e) {
  var userChoice = e.currentTarget.children[0].src;
  document.getElementsByClassName("user-choice__icon")[0].src = userChoice;
}

// 1. Taking value from input & data-value from game type divs
// 2. Username field validation
// 3. Sending selected option and username to view object
// 4. Validating and allowing to play only if username and game type was selected

var view = {};
var controller = {};
var model = {};
