import '../pages/index.css';
import { 
  initialCards, 
  config, 
  profileEditBtn, 
  profileCardBtn, 
  formEditProfile, 
  nameInput, 
  jobInput, 
  formAddCard 
} from './utils.js';
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidate.js';
import { Section } from './components/Section.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';

function handleCardClick (name, link) {
  preview.open({name, link});
}

const addForm = new PopupWithForm('.add-card-popup', submitAddForm);
addForm.setEventListeners();

function submitAddForm (item) {
  const newCard = createCard(item.place, item.link);
  cardList.addItem(newCard);
}

const editForm = new PopupWithForm('.edit-profile-popup', submitEditForm);
editForm.setEventListeners();

function submitEditForm (data) {
  profileInfo.setUserInfo({
    name: data.name,
    job: data.job
  });
  editForm.close();
}

function createCard (place, image) {
  const cardItem = new Card({name: place, link: image}, handleCardClick, '.card');
  const cardElement = cardItem.create();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item.name, item.link));
    }
  }, 
  '.gallery__list'
);
cardList.renderItems();

const profileInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileDescriptionSelector: '.profile__paragraph'
});

const preview = new PopupWithImage('.view-image-popup');
preview.setEventListeners();

const validationEditForm = new FormValidator(config, formEditProfile);
validationEditForm.enableValidation();

const validateAddForm = new FormValidator(config, formAddCard);
validateAddForm.enableValidation();

profileEditBtn.addEventListener('click', () => {
  editForm.open();
  const userInfo = profileInfo.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;
  
});

profileCardBtn.addEventListener('click', () => addForm.open());