const POPUP_OPENED_CLASS = 'popup_opened';
const openPopupBtn = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__container');
const closePopupBtn = document.querySelector('.popup__button-close');

let formPopup = document.querySelector('.popup__form');
let nameInput = formPopup.querySelector('.popup__input_type_name');
let jobInput = formPopup.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__paragraph');

let openPopup = function() {
    popup.classList.add(POPUP_OPENED_CLASS);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
let closePopup = function(event) {
    if(!popupContent.contains(event.target) || event.target === closePopupBtn) {
        popup.classList.remove(POPUP_OPENED_CLASS);
    }
}
openPopupBtn.addEventListener('click', openPopup);
popup.addEventListener('mousedown', closePopup);

let formSubmitHandler = function(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

formPopup.addEventListener('submit', formSubmitHandler);