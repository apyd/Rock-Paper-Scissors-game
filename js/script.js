var navLinks = document.getElementsByClassName("nav__link");
var modalsBg = document.getElementsByClassName("modal-bg");
var closeButtons = document.getElementsByClassName("modal-close__btn");
var choiceOptions = document.getElementsByClassName("choice-container__icon");
var gameOptions = document.getElementsByClassName("game-options__item");
var startGameBtn = document.getElementsByClassName("btn");
var formBg = document.getElementsByClassName("form-bg");
var openedModalBg, activeNavItem, selectedType;

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
  if (!selectedType || !model.username) {
    return alert(
      "If you want to start a game please specify your name and select game type"
    );
  }
  model.gameType = selectedType.dataset.value;
  view.displayUsername();
  view.displayGameType(model.gameType);
  formBg[0].style.visibility = "hidden";
}

function getUserName() {
  model.username = document.getElementsByClassName("input--text")[0].value;
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

let view = {
  displayUsername: function () {
    var elementWithUsername = document.getElementsByClassName("jsUsername");
    elementWithUsername[0].innerHTML = model.username + '\'s' + ' score';
  },
  displayGameType: function (starsNumber) {
    var scoreBoxes = document.getElementsByClassName("score-box");
    for (var j = 0; j < scoreBoxes.length; j++) {
      for (var i = 0; i < starsNumber; i++) {
        var starIcon = document.createElement("img");
        starIcon.src = 'img/star-24-empty.png';
        starIcon.alt = 'star icon';
        starIcon.classList.add("score-box__icon--star");
        scoreBoxes[j].appendChild(starIcon);
      }
    }
  }
};

let controller = {};

let model = {
  username: null,
  gameType: null
};