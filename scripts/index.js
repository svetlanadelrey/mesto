import { initialCards, config, POPUP_OPENED_CLASS } from './utils.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidate.js';
import { Section } from './Section.js';

const profileEditBtn = document.querySelector('.profile__button-edit');
const profileCardBtn = document.querySelector('.profile__button-add');
const popupList = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.edit-profile-popup');
const popupAddCard = document.querySelector('.add-card-popup');
const popupViewImage = document.querySelector('.view-image-popup');
const profileEditCloseBtn = document.querySelector('.popup__button-close_type_edit-profile');
const profileAddCardCloseBtn = document.querySelector('.popup__button-close_type_add-card');
const imageCloseBtn = document.querySelector('.popup__button-close_view-image');

const cardsContainer = document.querySelector('.gallery__list');

const formEditProfile = document.getElementById('edit-form');
const nameInput = formEditProfile.querySelector('[name="name"]');
const jobInput = formEditProfile.querySelector('[name="job"]');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__paragraph');
const formAddCard = document.getElementById('add-form');
const placeInput = formAddCard.querySelector('[name="place"]');
const linkInput = formAddCard.querySelector('[name="link"]');
const fullSizeImage = document.querySelector('.view-image-popup__image');
const imageName = document.querySelector('.view-image-popup__title');

const openPopup = (popupElement) => {
  popupElement.classList.add(POPUP_OPENED_CLASS);
  document.addEventListener('keyup', handleKeyUp);
}

const closePopup = (popupElement) => {
  popupElement.classList.remove(POPUP_OPENED_CLASS);
  document.removeEventListener('keyup', handleKeyUp);
}
const handleKeyUp = (event) => {
  event.preventDefault();
  if(event.key === 'Escape') {
    const currentPopup = document.querySelector(`.${POPUP_OPENED_CLASS}`);
    closePopup(currentPopup);
  }
}

const submitEditForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
  evt.target.reset();
}

const submitAddForm = (evt) => {
  evt.preventDefault();
  const listItem = {
    name: placeInput.value,
    link: linkInput.value
  }
  renderCard(listItem, cardsContainer);
  closePopup(popupAddCard);
  evt.target.reset();
}

const createCard = (item) => {
  const cardItem = new Card(item, '.card');
  const cardElement = cardItem.create();

  const fullSizeImagePopup = cardElement.querySelector('.gallery__image');
  fullSizeImagePopup.addEventListener('click', () => {
    openPopup(popupViewImage);
    fullSizeImage.src = item.link;
    fullSizeImage.alt = item.name;
    imageName.textContent = item.name;
  })
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
    }
  }, 
  '.gallery__list'
);
cardList.renderItems();

const handleOverlayClick = (event, popupElement) => {
  if(!event.target.closest('.popup__container')) {
    closePopup(popupElement);
  }
}

popupList.forEach(popupElement => popupElement.addEventListener('mousedown', (event) => handleOverlayClick(event, popupElement)));

const validationEditForm = new FormValidator(config, formEditProfile);
validationEditForm.enableValidation();

const validateAddForm = new FormValidator(config, formAddCard);
validateAddForm.enableValidation();

profileEditBtn.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
});

profileCardBtn.addEventListener('click', () => {openPopup(popupAddCard)});
profileEditCloseBtn.addEventListener('click', () => {closePopup(popupEditProfile)});
profileAddCardCloseBtn.addEventListener('click', () => {closePopup(popupAddCard)});
imageCloseBtn.addEventListener('click', () => {(closePopup(popupViewImage))});
formEditProfile.addEventListener('submit', submitEditForm);
formAddCard.addEventListener('submit', submitAddForm);

