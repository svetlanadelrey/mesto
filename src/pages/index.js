import '../pages/index.css';
import {
  config, 
  profileEditBtn, 
  profileCardBtn, 
  formEditProfile,
  editAvatarBtn,
  nameInput, 
  jobInput, 
  formAddCard,
  formUpdateAvatar 
} from '../scripts/utils.js';
import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidate.js';
import { Section } from '../scripts/components/Section.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithConfirmation } from '../scripts/components/PopupWithConfirmation';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { Api } from '../scripts/components/Api.js';

let currentUserId;

const addForm = new PopupWithForm(
  '.popup_type_add-card', 
  (item) => {
    addForm.loading(true);
    api.addCard(item)
    .then((data) => {
      cardList.addItem(createCard(data));
      addForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addForm.loading(false);
    })
});

const editForm = new PopupWithForm(
  '.popup_type_edit-profile', 
  (data) => {
    editForm.loading(true);
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
    })
    .finally(() => {
      editForm.loading(false);
    })
  });

const updateAvatarForm = new PopupWithForm(
  '.popup_type_update-avatar',
  (item) => {
    api.updateAvatar(item)
    .then((data) => {
      profileInfo.setUserInfo(data);
      updateAvatarForm.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

const preview = new PopupWithImage('.view-image-popup');

const confirmForm = new PopupWithConfirmation('.popup_type_confirm');

const profileInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileDescriptionSelector: '.profile__paragraph',
  avatarSelector: '.avatar__image'
});

function createCard (data) {
  const cardItem = new Card({
    data: data,
    handleCardClick: (name, link) => {
      preview.open({name, link});
    },
    handleLikeClick: () => {
      if(!cardItem.isLiked()) {
        api.setLike(cardItem.getId())
        .then((data) => {
          cardItem.updateLikes(data)
        })
        .catch((err) => {
          console.log(err);
        })
      } else {
        api.deleteLike(cardItem.getId())
        .then((data) => {
          cardItem.updateLikes(data)
        })
        .catch((err) => {
          console.log(err);
        });
      }
    },
    handleDeleteIconClick: () => {
      confirmForm.setSuccessHandler(() => {
        confirmForm.loading(true);
        api.deleteCard(cardItem.getId())
        .then(() => {
          confirmForm.close();
          cardItem.deleteCard();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          confirmForm.loading(false);
        })
      })
      confirmForm.open();
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

const validationEditForm = new FormValidator(config, formEditProfile);
const validateAddForm = new FormValidator(config, formAddCard);
const validateUpdateAvatarForm = new FormValidator(config, formUpdateAvatar);

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

addForm.setEventListeners();
editForm.setEventListeners();
updateAvatarForm.setEventListeners();
preview.setEventListeners();
confirmForm.setEventListeners();
validationEditForm.enableValidation();
validateAddForm.enableValidation();
validateUpdateAvatarForm.enableValidation();

profileEditBtn.addEventListener('click', () => {
  editForm.open();
  const userInfo = profileInfo.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;
  
});

editAvatarBtn.addEventListener('click', () => {
  updateAvatarForm.open();
})

profileCardBtn.addEventListener('click', () => addForm.open());