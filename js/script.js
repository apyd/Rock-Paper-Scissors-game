var navLinks = document.getElementsByClassName("nav__link");
var modalsBg = document.getElementsByClassName("modal-bg");
var closeButtons = document.getElementsByClassName("modal-close__btn");
var choiceOptions = document.getElementsByClassName("choice-container__icon");
var gameOptions = document.getElementsByClassName("game-options__item");
var startGameBtn = document.getElementsByClassName("btn");
var formBg = document.getElementsByClassName("form-bg");
var openedModalBg, activeNavItem, selectedGameType;

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
  if (!selectedGameType || !model.username) {
    return alert(
      "If you want to start a game please specify your name and select game type"
    );
  }
  model.gameType = selectedGameType.dataset.value;
  view.displayUsername();
  view.displayGameType(model.gameType);
  model.generateOpponentSelection();
  formBg[0].style.visibility = "hidden";
}

function getUserName() {
  model.username = document.getElementsByClassName("input--text")[0].value;
}

function onGameTypeClick(e) {
  if (selectedGameType != null) {
    unselectGameType();
  }
  selectGameType(e);
}

function unselectGameType() {
  selectedGameType.classList.remove("game-options__item--active");
  selectedGameType = null;
}

function selectGameType(e) {
  selectedGameType = e.currentTarget;
  selectedGameType.classList.add("game-options__item--active");
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
  model.userChoice = e.currentTarget.children[0].dataset.value;
  var userChoiceUrl = e.currentTarget.children[0].src;
  document.getElementsByClassName("user-choice__icon")[0].src = userChoiceUrl;
}

let view = {
  displayUsername: function() {
    var elementWithUsername = document.getElementsByClassName("jsUsername")[0];
    elementWithUsername.innerHTML = model.username + '\'s' + ' score';
  },
  displayGameType: function(starsNumber) {
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
  },
  displayMessage: function(message) {
	var messageBox = document.getElementsByClassName("message-box__text")[0];
	messageBox.innerHTML = message;
  }
};

let controller = {

};

let model = {
  username: null,
  gameType: null,
  userScore: 0,
  opponentScore: 0,
  userChoice: null,
  opponentChoice:  null,
  availableSelections : [["p","img/paper-96.png"],["r","img/rock-96.png"],["s","img/scissors-96.png"]], // p - paper, r - rock, s - scissors
  generateOpponentSelection : function() {
    var selectionArray = this.availableSelections[Math.floor(Math.random() * 3)];
    this.opponentChoice = selectionArray[0];
    var opponentChoiceIcon = document.getElementsByClassName("opponent-choice__icon")[0];
    opponentChoiceIcon.src = selectionArray[1];
  }
};