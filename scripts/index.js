const POPUP_OPENED_CLASS = 'popup_opened';
const openEditProfileBtn = document.querySelector('.profile__button-edit');
const openAddCardBtn = document.querySelector('.profile__button-add');
const popupEditProfile = document.querySelector('.edit-profile__popup');
const popupAddCard = document.querySelector('.add-card__popup');
const popupContent = document.querySelector('.popup__container');
const closePopupBtn = document.querySelector('.popup__button-close');

let formPopup = document.querySelector('.popup__form');
let nameInput = formPopup.querySelector('.popup__input_type_name');
let jobInput = formPopup.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__paragraph');
let placeInput = formPopup.querySelector('.popup__input_type_place');
let linkInput = formPopup.querySelector('.popup__input_type_link');

let openEditProfilePopup = function() {
    popupEditProfile.classList.add(POPUP_OPENED_CLASS);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
let closePopup = function(event) {
    popupEditProfile.classList.remove(POPUP_OPENED_CLASS);
    //if(!popupContent.contains(event.target) || event.target === closePopupBtn) {}
}

let openAddCardPopup = function() {
    popupAddCard.classList.add(POPUP_OPENED_CLASS);
}

openEditProfileBtn.addEventListener('click', openEditProfilePopup);
openAddCardBtn.addEventListener('click', openAddCardPopup);
closePopupBtn.addEventListener('mousedown', closePopup);

let formSubmitHandler = function(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

formPopup.addEventListener('submit', formSubmitHandler);