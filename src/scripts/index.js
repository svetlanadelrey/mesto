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
import { Api } from './components/Api.js';

let currentUserId;

const addForm = new PopupWithForm(
  '.add-card-popup', 
  (item) => {
    api.addCard(item)
    .then((data) => {
      cardList.addItem(createCard(data));
      addForm.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
addForm.setEventListeners();

const editForm = new PopupWithForm(
  '.edit-profile-popup', 
  (data) => {
    api.editUserInfo({
      name: data.name,
      about: data.job
    })
    .then((data) => {
      profileInfo.setUserInfo(data);
      editForm.close();
    })
    .catch((err) => {
      console.log(err);
    });
  });
editForm.setEventListeners();

/*function submitEditForm (data) {
  profileInfo.setUserInfo({
    name: data.name,
    job: data.job
  });
  editForm.close();
}*/

function createCard (data) {
  const cardItem = new Card({
    data: data,
    handleCardClick: (name, link) => {
      preview.open({name, link});
    },
    handleLikeClick: (item) => {
      api.setLike(item._id)
      .then((data) => {
        cardItem.toggleLike(data);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    handleDeleteClick: (item) => {
      api.deleteLike(item._id)
      .then((data) => {
        cardItem.toggleLike(data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, 
  currentUserId, 
  '.card'
  );
  const cardElement = cardItem.create();
  return cardElement;
}

const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
    }
  }, 
  '.gallery__list'
);

const api = new Api(
  'https://mesto.nomoreparties.co/v1/cohort-61',
  '6cb1c4c3-65bd-4e4c-b78a-a5117aee9407'
);

Promise.all([api.getCurrentUser(), api.getCards()])
  .then(([user, items]) => {
    currentUserId = user._id;
    profileInfo.setUserInfo(user)
    cardList.renderItems(items);
    console.log(currentUserId);
  })
  .catch((err) => {
    console.log(err);
});

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