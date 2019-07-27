var modals = document.getElementsByClassName('modal-bg');
var links = document.getElementsByClassName('nav__link');
var closeButtons = document.getElementsByClassName("modal--close")
var openedModal;

for(var i=0; i < links.length; i++) {
    links[i].addEventListener("click", showModal);
    links[i].elementNumber = i;
    closeButtons[i].addEventListener("click", closeModal);
    window.addEventListener("click", closedModal2);
}

function showModal() {
    if(openedModal != null) {
        closeModal();
}
    openedModal = event.srcElement.elementNumber;    
    modals[openedModal].style.visibility = 'visible';
};

function closeModal() {
    modals[openedModal].style.visibility = 'hidden';
};

function closedModal2() {
    if(event.target == modals[openedModal]) {
    for(i = 0; i < modals.length; i++) {
        modals[i].style.visibility = "hidden";
    }
}
}

