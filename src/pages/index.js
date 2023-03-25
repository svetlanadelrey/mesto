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
} from '../utils/utils.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidate.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

let currentUserId;

const popupAddCard = new PopupWithForm(
  '.popup_type_add-card', 
  (item) => {
    popupAddCard.loading(true);
    api.addCard(item)
    .then((data) => {
      cardList.addItem(createCard(data));
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.loading(false);
    })
});

const popupEditProfile = new PopupWithForm(
  '.popup_type_edit-profile', 
  (data) => {
    popupEditProfile.loading(true);
    api.editUserInfo({
      name: data.name,
      about: data.job
    })
    .then((data) => {
      profileInfo.setUserInfo(data);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.loading(false);
    })
  });

const popupUpdateAvatar = new PopupWithForm(
  '.popup_type_update-avatar',
  (item) => {
    api.updateAvatar(item)
    .then((data) => {
      profileInfo.setUserInfo(data);
      popupUpdateAvatar.close();
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
  })
  .catch((err) => {
    console.log(err);
});

popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupUpdateAvatar.setEventListeners();
preview.setEventListeners();
confirmForm.setEventListeners();
validationEditForm.enableValidation();
validateAddForm.enableValidation();
validateUpdateAvatarForm.enableValidation();

profileEditBtn.addEventListener('click', () => {
  popupEditProfile.open();
  const userInfo = profileInfo.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;
  
});

editAvatarBtn.addEventListener('click', () => {
  popupUpdateAvatar.open();
})

profileCardBtn.addEventListener('click', () => popupAddCard.open());