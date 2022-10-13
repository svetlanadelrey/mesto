const POPUP_OPENED_CLASS = 'popup_opened';
const openPopupBtn = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__container');
const closePopupBtn = document.querySelector('.popup__button_close');

let formPopup = document.querySelector('.popup__form');
let nameInput = formPopup.querySelector('.popup__input_name');
let jobInput = formPopup.querySelector('.popup__input_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__paragraph');

openPopupBtn.addEventListener('click', () => {
    popup.classList.add(POPUP_OPENED_CLASS);
})

popup.addEventListener('click', (event) => {
    if(!popupContent.contains(event.target) || event.target === closePopupBtn) {
        popup.classList.remove(POPUP_OPENED_CLASS);
    }
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove(POPUP_OPENED_CLASS);
}

formPopup.addEventListener('submit', formSubmitHandler);