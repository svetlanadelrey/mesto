import { initialCards, config } from './utils.js';
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidate.js';
import { Section } from './components/Section.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';

const profileEditBtn = document.querySelector('.profile__button-edit');
const profileCardBtn = document.querySelector('.profile__button-add');
const popupEditProfile = document.querySelector('.edit-profile-popup');
const popupAddCard = document.querySelector('.add-card-popup');
const popupViewImage = document.querySelector('.view-image-popup');
const formEditProfile = document.getElementById('edit-form');
const nameInput = formEditProfile.querySelector('[name="name"]');
const jobInput = formEditProfile.querySelector('[name="job"]');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__paragraph');
const formAddCard = document.getElementById('add-form');
const placeInput = formAddCard.querySelector('[name="place"]');
const linkInput = formAddCard.querySelector('[name="link"]');

const submitEditForm = () => {
  profileInfo.setUserInfo({
    name: nameInput.value,
    description: jobInput.value
  });
  editForm.close();
}
const submitAddForm = () => {
  const newCard = createCard({
    name: placeInput.value, 
    link: linkInput.value
  });
  cardList.addItem(newCard);
  addForm.close();
}

const handleCardClick = (name, link) => {
  preview.open({name, link});
}

const addForm = new PopupWithForm(popupAddCard, submitAddForm);
addForm.setEventListeners();

const editForm = new PopupWithForm(popupEditProfile, submitEditForm);
editForm.setEventListeners();

const createCard = (item) => {
  const cardItem = new Card(item, handleCardClick, '.card');
  const cardElement = cardItem.create(item.name, item.link);
  return cardElement;
}
const preview = new PopupWithImage(popupViewImage);
preview.setEventListeners();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
    }
  }, 
  '.gallery__list'
);
cardList.renderItems();

const validationEditForm = new FormValidator(config, formEditProfile);
validationEditForm.enableValidation();

const validateAddForm = new FormValidator(config, formAddCard);
validateAddForm.enableValidation();

const profileInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileDescriptionSelector: '.profile__paragraph'
});

profileEditBtn.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  editForm.open(popupEditProfile);
});

profileCardBtn.addEventListener('click', () => addForm.open(popupAddCard));
formEditProfile.addEventListener('submit', submitEditForm);
formAddCard.addEventListener('submit', submitAddForm);
