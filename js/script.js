var modals = document.getElementsByClassName('modal-bg');
var links = document.getElementsByClassName('nav__link');
var closeButtons = document.getElementsByClassName("modal--close")
var choiceOptions = document.getElementsByClassName('choice-container__icon');
var userChoice;
var openedModal;


for(var i=0; i < links.length; i++) {
    links[i].addEventListener("click", showModal);
    links[i].elementNumber = i;
    closeButtons[i].addEventListener("click", closeModal);
    window.addEventListener("click", closeModalWhenClickOutside);
}

function showModal(e) {
    if(openedModal != null) {
        closeModal();
}
    openedModal = e.srcElement.elementNumber;    
    modals[openedModal].style.visibility = 'visible';
};

function closeModal() {
    modals[openedModal].style.visibility = 'hidden';
};

function closeModalWhenClickOutside(e) {
    if(e.target == modals[openedModal]) {
    for(i = 0; i < modals.length; i++) {
        modals[i].style.visibility = "hidden";
    }
}
}

var choiceOptions = document.getElementsByClassName('choice-container__icon');
for(var i=0; i < choiceOptions.length; i++) {
    choiceOptions[i].addEventListener("click", selectedOption);
    choiceOptions[i].optionNumber = i;
}

function selectedOption(e) {
    userChoice = choiceOptions[e.currentTarget.optionNumber];
    var imgPath = userChoice.children[0].src;
    var userSelection = document.getElementsByClassName('user-choice__icon');
    userSelection[0].src = imgPath;
}

