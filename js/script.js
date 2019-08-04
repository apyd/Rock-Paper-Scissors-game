var navLinks = document.getElementsByClassName("nav__link");
var modalsBg = document.getElementsByClassName("modal-bg");
var closeButtons = document.getElementsByClassName("modal-close__btn");
var choiceOptions = document.getElementsByClassName("choice-container__icon");
var gameOptions = document.getElementsByClassName("game-options__item");
var openedModalBg, activeNavItem, selectedType;

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", onNavItemClick);
  closeButtons[i].addEventListener("click", onCloseModalButtonClick);
  modalsBg[i].addEventListener("click", onClickOutsideModalAndNav);
}

for (var i = 0; i < gameOptions.length; i++) {
	gameOptions[i].addEventListener("click", onGameTypeClick);
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